import "./disclose-version-DsnmJJEf.js";
import {
    c as E,
    p as S,
    a as k
} from "./custom-element-CoS1ay5O.js";
import {
    e as b,
    d as w
} from "./trackers-BKtP3_by.js";
import {
    u as L
} from "./useInit.svelte-ItIJhPfT.js";
import {
    u as C
} from "./useSearch.svelte-CWMesqj8.js";
import {
    r as N
} from "./renderSection-CFhfkgyb.js";
import {
    g as m
} from "./getGlobalElement-DI3uduNr.js";
import "./items-DNi4Eu8t.js";
import "./state-hxloTOT8.js";
import "./collectRefs-DFE6zV31.js";
import "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";

function y($, r) {
    S(r, !0);
    const c = "search",
        f = 300;
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
        }), e ?.input ?.addEventListener("input", h, {
            signal: n
        }), e ?.input ?.addEventListener("keydown", d, {
            signal: n
        }), e ?.clearButton ?.addEventListener("click", p, {
            signal: n
        })
    }), i = C({
        sectionIds: [c]
    });

    function h() {
        if (!t.input) return;
        const e = t.input.value.trim();
        t.searchLink && (t.searchLink.href = e ? `/search?q=${encodeURIComponent(e)}` : "/search"), a !== null && clearTimeout(a), a = setTimeout(async () => {
            t.input && (await u(e), t.input.focus())
        }, f)
    }

    function d(e) {
        if (e.key !== "Enter" || !t.input) return;
        e.preventDefault();
        const n = t.input.value.trim();
        i.redirect(n)
    }
    async function p() {
        t.input && (t.input.value = ""), await u("")
    }
    const v = () => {
        t.input ?.focus()
    };
    async function u(e) {
        if (!i.loading) {
            r.$$host.setAttribute("data-loading", "true");
            try {
                e && o ?.hideMobileNavItems();
                const n = await (e ? i.rerender(e) : i.clear()),
                    l = t.input ?.value;
                await N({
                    sections: n,
                    host: r.$$host,
                    sectionId: c
                }).rerender(), t.input && l !== void 0 && (t.input.value = l), e && (b(e, r.$$host), w(r.$$host)), s ?.handleContentChange(), e || o ?.showMobileNavItems()
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
    return k(I)
}
customElements.define("search-element", E(y, {}, [], ["focusInput"], !1));