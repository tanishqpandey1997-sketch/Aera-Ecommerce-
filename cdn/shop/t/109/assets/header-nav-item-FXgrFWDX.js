import "./disclose-version-DsnmJJEf.js";
import {
    c as g,
    p as q,
    a as C,
    g as s,
    s as F,
    b as L
} from "./custom-element-CoS1ay5O.js";
import {
    g as k
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    c as M
} from "./createHeaderFlyoutController-BHnvuT1P.js";
import {
    u as S
} from "./useInit.svelte-ItIJhPfT.js";
import {
    r as w
} from "./renderSection-CFhfkgyb.js";
import "./headerFlyoutState-CTRNbteD.js";
import "./collectRefs-DFE6zV31.js";
import "./morph-CjE7B4pu.js";

function O(x, d) {
    q(d, !0);
    const u = "Escape";
    let n = F(""),
        i = null,
        l = !1;
    const {
        refs: e
    } = S({
        host: d.$$host,
        refs: {
            navItemFlyoutOpener: {
                ref: "header-nav-flyout-opener",
                required: !1
            },
            tabNavItems: ["header-nav-tab-item"],
            navItemLinks: ["nav-item-link"],
            navItemWrap: "header-nav-item-wrap",
            flyoutContent: {
                ref: "header-nav-flyout-content",
                required: !1
            },
            flyoutMedia: {
                ref: "header-nav-flyout-media",
                required: !1
            }
        }
    }, (t, a) => {
        i = k("mainHeader", {
            required: !1
        }), L(n, e.navItemWrap ?.getAttribute("data-tabindex") ?? "", !0), e.navItemWrap ?.addEventListener("mouseenter", () => {
            if (e.flyoutContent) f();
            else {
                if (i ?.headerState.activeTabId === "tab-search") return;
                v()
            }
        }, {
            signal: a
        }), e.navItemFlyoutOpener ?.addEventListener("click", p, {
            signal: a
        }), window.addEventListener("keydown", y, {
            signal: a
        }), window.addEventListener("main-header-overlay:enter", I, {
            signal: a
        })
    }), r = M({
        tabId: () => s(n),
        getFlyoutContent: () => e.flyoutContent,
        getAnimatedItems: () => e.tabNavItems ?? [],
        getExpandedTrigger: () => e.navItemFlyoutOpener,
        onAfterStateUpdate: t => {
            if (e.navItemWrap ?.classList.toggle("is-open", t), t && l) {
                const a = e.flyoutContent,
                    o = () => {
                        e.navItemLinks ?.[0] ?.focus(), a ?.removeEventListener("transitionend", o)
                    };
                a ?.addEventListener("transitionend", o, {
                    once: !0
                }), l = !1
            }
        }
    }), m = () => {
        e.flyoutMedia ?.loadMedia()
    }, c = () => s(n), f = () => {
        e.flyoutMedia ?.loadMedia(), r.requestOpenOrSwitch()
    }, v = () => {
        r.requestClose()
    }, p = () => {
        e.flyoutMedia ?.loadMedia(), r.requestToggle()
    }, y = t => {
        t.key !== u || i ?.headerState.activeTabId !== s(n) || r.requestClose()
    }, I = t => {
        const {
            tabIndex: a,
            keyboard: o
        } = t.detail, E = Number(s(n).replace("tab-", ""));
        a === E && o && (l = !0)
    }, h = r.updateFlyoutStatus;
    var b = {
        loadMedia: m,
        getTabId: c,
        updateFlyoutStatus: h,
        rerender: async t => {
            await w({
                sections: t,
                host: d.$$host
            }).rerender()
        }
    };
    return C(b)
}
customElements.define("header-nav-item", g(O, {}, [], ["loadMedia", "getTabId", "updateFlyoutStatus", "rerender"], !1));