import "./disclose-version-DsnmJJEf.js";
import {
    c as S,
    p as k,
    a as w
} from "./custom-element-CoS1ay5O.js";
import {
    e as b,
    d as y
} from "./trackers-BKtP3_by.js";
import {
    u as L
} from "./useInit.svelte-ItIJhPfT.js";
import {
    u as g
} from "./useSearch.svelte-CWMesqj8.js";
import {
    r as C
} from "./renderSection-CFhfkgyb.js";
import {
    s as N
} from "./search-suggest-ZhC3_3d8.js";
import {
    g as m
} from "./getGlobalElement-Do2Hw5Hq.js";
import "./items-DNi4Eu8t.js";
import "./state-hxloTOT8.js";
import "./collectRefs-DFE6zV31.js";
import "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";

function _($, r) {
    k(r, !0);
    const i = "search",
        h = 300;
    let a = null,
        o = null,
        s = null;
    const {
        refs: t
    } = L({
        host: r.$$host,
        refs: {
            input: "search-input",
            clearButton: "search-clear",
            searchLink: "search-link"
        }
    }, (e, n) => {
        o = m("mobileNav"), s = m("mainHeaderSearch", {
            required: !1
        }), e ?.input ?.addEventListener("input", f, {
            signal: n
        }), e ?.input ?.addEventListener("keydown", p, {
            signal: n
        }), e ?.clearButton ?.addEventListener("click", d, {
            signal: n
        })
    }), c = g({
        sectionIds: [i]
    });

    function f() {
        if (!t.input) return;
        const e = t.input.value.trim();
        t.searchLink && (t.searchLink.href = e ? `/search?q=${encodeURIComponent(e)}` : "/search"), a !== null && clearTimeout(a), a = setTimeout(async () => {
            t.input && (await u(e), t.input.focus())
        }, h)
    }

    function p(e) {
        if (e.key !== "Enter" || !t.input) return;
        e.preventDefault();
        const n = t.input.value.trim();
        c.redirect(n)
    }
    async function d() {
        t.input && (t.input.value = ""), await u("")
    }
    const v = () => {
        t.input ?.focus()
    };
    async function u(e) {
        if (!c.loading) {
            r.$$host.setAttribute("data-loading", "true");
            try {
                e && o ?.hideMobileNavItems();
                const n = await (e ? (async () => {
                        const E = await N({
                            query: e,
                            sectionId: i,
                            resources: {
                                type: ["product", "collection"],
                                limit: 6,
                                limit_scope: "each"
                            }
                        });
                        return {
                            [i]: E
                        }
                    })() : c.clear()),
                    l = t.input ?.value;
                await C({
                    sections: n,
                    host: r.$$host,
                    sectionId: i
                }).rerender(), t.input && l !== void 0 && (t.input.value = l), e && (b(e, r.$$host), y(r.$$host)), s ?.handleContentChange(), e || o ?.showMobileNavItems()
            } catch (n) {
                console.error("Search failed:", n)
            } finally {
                r.$$host.setAttribute("data-loading", "false")
            }
        }
    }
    var I = {
        focusInput: v
    };
    return w(I)
}
customElements.define("search-element", S(_, {}, [], ["focusInput"], !1));