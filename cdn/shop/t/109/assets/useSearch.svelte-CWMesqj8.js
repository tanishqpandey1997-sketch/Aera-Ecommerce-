import {
    g as c,
    s as l,
    b as n
} from "./custom-element-CoS1ay5O.js";
import {
    f as g
} from "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";

function u(o) {
    const t = new URL(window.location.origin + "/search");
    return t.searchParams.set("q", o), t.toString()
}

function S(o) {
    const {
        sectionIds: t
    } = o;
    let i = l(!1),
        e = l(null);

    function f(a) {
        window.location.href = u(a)
    }
    async function s(a) {
        n(i, !0), n(e, null);
        try {
            const r = u(a);
            return await g({
                sections: t,
                url: r
            }, {
                cache: !0
            })
        } catch (r) {
            throw n(e, r instanceof Error ? r : new Error(String(r)), !0), c(e)
        } finally {
            n(i, !1)
        }
    }
    return {
        get loading() {
            return c(i)
        },
        get error() {
            return c(e)
        },
        redirect: f,
        rerender: s,
        clear: () => s("")
    }
}
export {
    S as u
};