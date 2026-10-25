import {
    s as m
} from "./client-CbBC4y6h.js";
import {
    c as w
} from "./requestCache-Q-JlL15V.js";
import "./fetchWithRetry-DqgNyu8R.js";

function u(e) {
    if (!e.startsWith("/")) throw new Error(`Invalid URL path: "${e}". Must start with "/".`)
}
const p = 6e4,
    l = 50,
    a = w({
        ttlMs: p,
        maxEntries: l
    });

function P(e, n, t) {
    const f = Array.from(n.entries()).sort(([o, r], [s, c]) => o === s ? r.localeCompare(c) : o.localeCompare(s)),
        i = new URLSearchParams(f);
    return `${e}?${i.toString()}::locale=${t??""}`
}

function S(e) {
    return Array.from(new Set(e)).sort()
}

function C() {
    return typeof window < "u" ? window.location.href : "https://example.com/"
}

function g() {
    return typeof window < "u" ? window.location.pathname : "/"
}

function E() {
    return typeof window < "u" ? window.location.search : ""
}

function y(e) {
    if (e) {
        const t = new URL(e, C());
        return u(t.pathname), {
            pathname: t.pathname,
            searchParams: new URLSearchParams(t.search)
        }
    }
    const n = g();
    return u(n), {
        pathname: n,
        searchParams: new URLSearchParams(E())
    }
}

function R() {
    return typeof window < "u" && window.Shopify ?.designMode === !0
}
const T = async (e, n) => {
    const t = S(e.sections);
    if (t.length > 5) throw new Error("fetchSections supports up to 5 section names per request.");
    const f = t.join(","),
        {
            pathname: i,
            searchParams: o
        } = y(e.url);
    o.set("sections", f);
    const r = P(i, o, n ?.locale),
        s = (n ?.cache ?? !1) && !R(),
        c = a.getPending(r);
    if (c) return c;
    if (s) {
        const h = a.get(r);
        if (h) return h
    }
    const d = m(i, {
        method: "GET",
        queryParams: o
    }, n, "Error fetching sections");
    return a.setPending(r, d), d.then(h => {
        s && a.set(r, h)
    }).finally(() => {
        a.deletePending(r)
    }), d
};
export {
    T as f
};