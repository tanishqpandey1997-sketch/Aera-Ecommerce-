import {
    f as h
} from "./fetchWithRetry-DqgNyu8R.js";
const p = t => {
        if (!t || typeof t != "object") return !1;
        const r = t;
        return typeof r.status == "number" && typeof r.message == "string" && typeof r.description == "string"
    },
    m = async t => {
        try {
            const r = await t.json();
            if (p(r)) {
                const c = r.description.trim(),
                    o = c ? `${r.message}: ${c}` : r.message,
                    n = new Error(o);
                return n.status = r.status, n
            }
        } catch {}
        return new Error(`Request failed with status ${t.status}: ${t.statusText}`)
    },
    d = async (t, r = {}, c, o) => {
        const n = r.method || "GET",
            i = n === "GET";
        let f = t;
        if (i && r.queryParams) {
            const e = new URLSearchParams(r.queryParams);
            f = `${t}?${e.toString()}`
        }
        const y = {
            method: n,
            headers: {
                "Content-Type": "application/json"
            }
        };
        !i && r.body && (y.body = JSON.stringify(r.body));
        try {
            const e = await h(f, y);
            if (!e.ok) {
                const s = await m(e);
                throw console.error(`${o}: `, s), s
            }
            const u = r.responseType || "json";
            let a = null;
            if (u === "text" ? a = await e.text() : a = await e.json(), !a) {
                const s = new Error("Invalid response from API");
                throw console.error(`${o}: `, s), s
            }
            return a
        } catch (e) {
            throw console.error(`${o}: `, e), e instanceof Error ? e : new Error("Unknown error occurred")
        }
    };
export {
    d as s
};