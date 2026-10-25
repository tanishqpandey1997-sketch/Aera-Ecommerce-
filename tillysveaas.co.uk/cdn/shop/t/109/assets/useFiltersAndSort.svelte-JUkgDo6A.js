import {
    g as u,
    s as d,
    b as i
} from "./custom-element-CoS1ay5O.js";
import {
    f as w
} from "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";

function f() {
    return typeof window > "u" ? new URLSearchParams : new URLSearchParams(window.location.search)
}

function h(t) {
    t.delete("page"), t.delete("sort_by"), Array.from(t.keys()).filter(r => r.startsWith("filter.")).forEach(r => t.delete(r))
}

function m(t) {
    const r = f();
    return h(r), t.forEach((s, a) => {
        const e = typeof s == "string" ? s : s.name;
        if (e.trim()) {
            if (a === "sort_by") {
                r.set("sort_by", e);
                return
            }
            a.startsWith("filter.") && r.append(a, e)
        }
    }), r
}

function l(t) {
    if (typeof window > "u") return;
    const r = new URL(window.location.href);
    r.search = t.toString(), r.hash = "", history.pushState({}, "", r.toString())
}

function p(t) {
    return window.location.origin + window.location.pathname + "?" + t.toString()
}

function A(t) {
    const {
        sectionIds: r,
        urlSync: s = !0
    } = t;
    let a = d(!1),
        e = d(null);
    async function y(n) {
        i(a, !0), i(e, null);
        try {
            const o = m(n);
            s && l(o);
            const c = p(o);
            return await w({
                sections: r,
                url: c
            }, {
                cache: !0
            })
        } catch (o) {
            throw i(e, o instanceof Error ? o : new Error(String(o)), !0), u(e)
        } finally {
            i(a, !1)
        }
    }
    async function g() {
        i(a, !0), i(e, null);
        try {
            const n = f();
            h(n), s && l(n);
            const o = p(n);
            return await w({
                sections: r,
                url: o
            }, {
                cache: !0
            })
        } catch (n) {
            throw i(e, n instanceof Error ? n : new Error(String(n)), !0), u(e)
        } finally {
            i(a, !1)
        }
    }

    function S(n) {
        const o = n ? m(n) : (() => {
            const c = f();
            return h(c), c
        })();
        l(o)
    }
    return {
        get loading() {
            return u(a)
        },
        get error() {
            return u(e)
        },
        apply: y,
        clearAll: g,
        syncUrl: S
    }
}
export {
    A as u
};