import {
    g as r,
    u,
    s as w,
    b as c
} from "./custom-element-CoS1ay5O.js";
import {
    f as d
} from "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";

function $(n) {
    if (typeof window > "u") return;
    const e = new URL(window.location.href);
    e.searchParams.set("page", String(n)), e.hash = "", history.pushState({}, "", e.toString())
}

function P(n) {
    if (typeof window > "u") return `?page=${n}`;
    const e = new URL(window.location.href);
    return e.searchParams.set("page", String(n)), e.hash = "", e.toString()
}

function I(n) {
    const {
        sectionIds: e,
        urlSync: m = !0
    } = n, a = u(() => n.totalPages), s = u(() => n.currentPage);
    let l = w(!1),
        i = w(null);
    const g = u(() => r(s) < r(a)),
        h = u(() => r(s) > 1);

    function y(t) {
        if (!Number.isFinite(t)) throw new Error(`Invalid page number: ${t}`);
        if (t < 1) throw new Error(`Page ${t} is below minimum (1)`);
        if (t > r(a)) throw new Error(`Page ${t} exceeds total pages (${r(a)})`)
    }
    async function f(t) {
        y(t), c(l, !0), c(i, null);
        try {
            const o = P(t),
                v = await d({
                    sections: e,
                    url: o
                }, {
                    cache: !0
                });
            return m && $(t), v
        } catch (o) {
            throw c(i, o instanceof Error ? o : new Error(String(o)), !0), r(i)
        } finally {
            c(l, !1)
        }
    }
    async function p() {
        if (!r(g)) throw new Error(`Already on last page (${r(a)})`);
        return f(r(s) + 1)
    }
    async function S() {
        if (!r(h)) throw new Error("Already on first page (1)");
        return f(r(s) - 1)
    }
    async function E(t) {
        if (t < 1 || t > r(a)) return;
        const o = P(t);
        await d({
            sections: e,
            url: o
        }, {
            cache: !0
        })
    }
    return {
        get currentPage() {
            return r(s)
        },
        get totalPages() {
            return r(a)
        },
        get loading() {
            return r(l)
        },
        get error() {
            return r(i)
        },
        get hasNext() {
            return r(g)
        },
        get hasPrev() {
            return r(h)
        },
        goToPage: f,
        nextPage: p,
        prevPage: S,
        prefetch: E
    }
}
export {
    I as u
};