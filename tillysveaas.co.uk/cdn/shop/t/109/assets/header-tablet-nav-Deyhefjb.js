import "./disclose-version-DsnmJJEf.js";
import {
    c as v,
    p as A,
    a as k
} from "./custom-element-CoS1ay5O.js";
import {
    c as L
} from "./createHeaderFlyoutController-CIjgsquX.js";
import {
    g as N
} from "./getGlobalElement-DI3uduNr.js";
import {
    u as O
} from "./useInit.svelte-ItIJhPfT.js";
import "./headerFlyoutState-CTRNbteD.js";
import "./collectRefs-DFE6zV31.js";

function T(I, o) {
    A(o, !0);
    const c = '[data-js="header-tablet-nav-link"]',
        u = '[data-js="header-nav-item"]',
        h = '[data-js="header-nav-flyout-content"]',
        m = '[data-js="header-nav-desktop"]',
        i = "is-measuring",
        f = "Escape";
    let n = null;
    const {
        refs: r
    } = O({
        host: o.$$host,
        refs: {
            flyoutContent: {
                ref: "header-tablet-flyout-content",
                required: !1
            },
            tabNavItems: ["header-tablet-tab-item"],
            flyoutMedia: {
                ref: "header-tablet-flyout-media",
                required: !1
            }
        }
    }, (e, t) => {
        n = N("mainHeader", {
            required: !1
        }), o.$$host.addEventListener("click", b, {
            signal: t
        }), window.addEventListener("keydown", p, {
            signal: t
        })
    }), d = e => Math.floor(e ?.getBoundingClientRect().height ?? 0), l = L({
        tabId: "tab-tablet",
        getFlyoutContent: () => r.flyoutContent,
        getAnimatedItems: () => r.tabNavItems ?? [],
        closeOptions: {
            skipDelay: !0
        }
    }), E = e => {
        const t = document.querySelectorAll(u)[e] ?.querySelector(h);
        if (!t) return 0;
        const a = t.closest(m);
        if (!a || getComputedStyle(a).display !== "none") return d(t);
        a.classList.add(i);
        const s = d(t);
        return a.classList.remove(i), s
    }, b = e => {
        const t = e.target.closest(c);
        if (!t) return;
        const a = t.getAttribute("data-tablet-nav-link"),
            s = E(Number(a));
        s > 0 && n ?.handleSwitch(`tab-${a}`, s)
    }, p = e => {
        e.key === f && n ?.headerState.activeTabId === "tab-tablet" && n ?.handleClose(!0)
    }, y = () => {
        r.flyoutMedia ?.loadMedia(), l.requestOpenOrSwitch()
    }, S = () => {
        l.requestOpenOrSwitch()
    }, _ = () => getComputedStyle(o.$$host).display !== "none", g = l.updateFlyoutStatus;
    var C = {
        open: y,
        goBack: S,
        isVisible: _,
        updateFlyoutStatus: g
    };
    return k(C)
}
customElements.define("header-tablet-nav", v(T, {}, [], ["open", "goBack", "isVisible", "updateFlyoutStatus"], !1));