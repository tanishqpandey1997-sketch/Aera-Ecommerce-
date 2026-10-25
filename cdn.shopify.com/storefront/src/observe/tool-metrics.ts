import { createFetchSend, createMetricsClient } from "./otlp-metrics";
import type { MetricsClient } from "./otlp-metrics";

/**
 * OTLP/HTTP JSON collector endpoint for WebMCP tool-call telemetry.
 */
const OTLP_METRICS_ENDPOINT = "https://otlp-http-production.shopifysvc.com/v1/metrics";
const OTLP_LOGS_ENDPOINT = "https://otlp-http-production.shopifysvc.com/v1/logs";

/** OpenTelemetry `service.name` for WebMCP tool-call telemetry. */
const SERVICE_NAME = "storefront_webmcp";

// Replaced at build time: tsdown defines `__DEV__` as `false`, vitest as `true`.
declare const __DEV__: boolean | undefined;

/** True only in the built production CDN bundle. */
const IS_PRODUCTION_BUILD = typeof __DEV__ !== "undefined" && __DEV__ === false;

const LOCAL_DEV_HOSTS: Record<string, true> = {
  localhost: true,
  "127.0.0.1": true,
  "0.0.0.0": true,
  "[::1]": true,
  "localtest.me": true,
};

/**
 * Whether tool-call telemetry should be exported from this runtime. Only the
 * production CDN bundle running in a real browser on a non-local host emits;
 * tests, SSR, and local dev stay inert (no network, no timers, no listeners).
 */
export function shouldExportToolMetrics(): boolean {
  if (!IS_PRODUCTION_BUILD) return false;
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  const host = window.location?.host ?? "";
  return host !== "" && !LOCAL_DEV_HOSTS[host] && !host.includes(":");
}

let defaultClient: MetricsClient | null = null;
let defaultClientInitialized = false;

function getDefaultMetricsClient(): MetricsClient | null {
  if (defaultClientInitialized) return defaultClient;
  defaultClientInitialized = true;
  if (shouldExportToolMetrics()) {
    defaultClient = createMetricsClient({
      serviceName: SERVICE_NAME,
      send: createFetchSend(OTLP_METRICS_ENDPOINT),
      sendLogs: createFetchSend(OTLP_LOGS_ENDPOINT),
      registerLifecycle: true,
    });
  }
  return defaultClient;
}

export interface ToolCallSample {
  tool: string;
  durationMs: number;
  isError: boolean;
  errorClass?: string;
  /** Free-text error detail for the log leg only (never used as a metric label). */
  errorMessage?: string;
}

/**
 * Records a single tool-call observation: a latency histogram + call/error
 * counters (aggregate metrics), plus one structured log record per call
 * carrying the higher-cardinality error message for debugging.
 */
export function recordToolCall(
  sample: ToolCallSample,
  client: MetricsClient | null = getDefaultMetricsClient(),
): void {
  if (!client) return;
  const { tool, durationMs, isError, errorClass, errorMessage } = sample;
  const attributes = { tool_name: tool, is_error: isError, error_class: errorClass ?? "none" };
  try {
    client.histogram("webmcp_tool_call_duration_ms", durationMs, attributes, "ms");
    client.counter("webmcp_tool_call_total", 1, attributes);
    if (isError) {
      client.counter("webmcp_tool_call_errors_total", 1, {
        tool_name: tool,
        error_class: errorClass ?? "unknown",
      });
    }
    client.log(
      `webmcp ${tool} ${isError ? "error" : "ok"}`,
      {
        tool_name: tool,
        duration_ms: Math.round(durationMs),
        is_error: isError,
        error_class: errorClass ?? "none",
        ...(errorMessage === undefined ? {} : { error_message: errorMessage }),
      },
      isError ? "error" : "info",
    );
  } catch {
    // Telemetry must never break tool execution.
  }
}

function isPromiseLike<T>(value: T | Promise<T>): value is Promise<T> {
  return (
    typeof value === "object" && value !== null && typeof Reflect.get(value, "then") === "function"
  );
}

function errorClassOf(error: unknown): string {
  if (error instanceof Error && typeof error.name === "string" && error.name.length > 0) {
    return error.name;
  }
  return "Error";
}

function isToolErrorResult(result: unknown): boolean {
  return typeof result === "object" && result !== null && Reflect.get(result, "isError") === true;
}

const MAX_ERROR_MESSAGE_LENGTH = 300;

function truncate(text: string): string {
  return text.length > MAX_ERROR_MESSAGE_LENGTH
    ? `${text.slice(0, MAX_ERROR_MESSAGE_LENGTH)}\u2026`
    : text;
}

function errorMessageOf(error: unknown): string | undefined {
  if (error instanceof Error && typeof error.message === "string" && error.message.length > 0) {
    return truncate(error.message);
  }
  return undefined;
}

/** Extracts the error string our tools place in `structuredContent.error`. */
function toolErrorMessage(result: unknown): string | undefined {
  if (typeof result !== "object" || result === null) return undefined;
  const structured = Reflect.get(result, "structuredContent");
  if (typeof structured !== "object" || structured === null) return undefined;
  const error = Reflect.get(structured, "error");
  return typeof error === "string" && error.length > 0 ? truncate(error) : undefined;
}

type ToolExecute<TArgs, TResult> = (args: TArgs) => TResult | Promise<TResult>;

/**
 * Wraps a tool executor so every invocation records latency, call count, and
 * error signal via OpenTelemetry metrics, plus one structured log record. The
 * wrapper is transparent: it returns exactly what the underlying executor
 * returns (or rethrows the same error), and telemetry failures can never
 * interfere with tool execution.
 */
export function withToolObservability<TArgs, TResult>(
  toolName: string,
  execute: ToolExecute<TArgs, TResult>,
  client: MetricsClient | null = getDefaultMetricsClient(),
): ToolExecute<TArgs, TResult> {
  return (args: TArgs) => {
    const start = performance.now();
    const record = (isError: boolean, errorClass?: string, errorMessage?: string) => {
      recordToolCall(
        {
          tool: toolName,
          durationMs: performance.now() - start,
          isError,
          errorClass,
          errorMessage,
        },
        client,
      );
    };

    try {
      const result = execute(args);
      if (isPromiseLike(result)) {
        return result.then(
          (resolved) => {
            const errored = isToolErrorResult(resolved);
            record(
              errored,
              errored ? "tool_error" : undefined,
              errored ? toolErrorMessage(resolved) : undefined,
            );
            return resolved;
          },
          (error: unknown) => {
            record(true, errorClassOf(error), errorMessageOf(error));
            throw error;
          },
        );
      }
      const errored = isToolErrorResult(result);
      record(
        errored,
        errored ? "tool_error" : undefined,
        errored ? toolErrorMessage(result) : undefined,
      );
      return result;
    } catch (error) {
      record(true, errorClassOf(error), errorMessageOf(error));
      throw error;
    }
  };
}
