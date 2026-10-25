import "./disclose-version-DsnmJJEf.js";
import {
    c as fe,
    p as Te,
    s as h,
    k as G,
    a as Ee,
    b as i,
    g as a
} from "./custom-element-CoS1ay5O.js";
import {
    D as ge
} from "./drawerFocusManager-DnIon1j1.js";
import {
    s as ve
} from "./headerFlyoutState-CTRNbteD.js";
import {
    g as w
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    u as me
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function Se(Ie, b) {
    Te(b, !0);
    const q = 250,
        M = 250,
        B = 200,
        O = 150,
        V = '[data-js="header-nav-flyout-content"]',
        $ = "[data-flyout-back]",
        W = 'a, button, [tabindex]:not([tabindex="-1"])',
        U = '[tabindex="-1"]',
        Y = "a";
    let n = h(G({
            flyoutHeight: 0,
            navigationStatus: "EXITED"
        })),
        g = h(null),
        I = h(null),
        v = h(!1),
        u = h(null),
        y = null,
        m = h(!1),
        p = null;
    const {
        refs: r
    } = me({
        host: b.$$host,
        refs: {
            mobileNav: "mobile-nav",
            hamburger: "header-hamburger",
            background: "header-background",
            headerWrap: "header-wrap",
            headerMenu: "header-menu",
            headerNavItems: ["header-nav-item"],
            headerSearch: {
                ref: "header-search",
                required: !1
            },
            headerTabletNav: {
                ref: "header-tablet-nav",
                required: !1
            },
            headerTabletFlyoutContent: {
                ref: "header-tablet-flyout-content",
                required: !1
            },
            countrySelectorTriggers: ["country-selector-trigger"]
        }
    }, (e, t) => {
        p = w("dialogCountrySelector"), te(t), P(t)
    }), z = e => Math.floor(e ?.getBoundingClientRect().height ?? 0), s = () => !!r.headerTabletNav ?.isVisible(), A = e => r.headerNavItems ?.[e] ?.querySelector(V) ?? null, j = () => {
        const e = a(n).activeTabId;
        if (!e) return null;
        if (e === "tab-tablet") return r.headerTabletFlyoutContent ?? null;
        if (!e.startsWith("tab-")) return null;
        const t = Number(e.replace("tab-", ""));
        return Number.isNaN(t) ? null : A(t)
    }, K = () => s() && a(n).navigationStatus !== "EXITED" && a(n).activeTabId != null, S = () => {
        !a(u) || !a(m) || (a(u).restoreFocus(), i(m, !1), i(u, null), y = null)
    }, J = () => {
        if (!K()) {
            S();
            return
        }
        const e = j();
        if (!e) {
            S();
            return
        }
        e !== y && (S(), i(u, new ge(e, () => l(!0)), !0), y = e), a(u) && !a(m) && (a(u).trapFocus(r.hamburger), i(m, !0))
    }, P = e => {
        i(v, !!w("mainHeaderOverlay", {
            required: !1
        })), a(v) && window.addEventListener("main-header-overlay:enter", Q, {
            signal: e
        })
    }, Q = e => {
        const {
            tabIndex: t,
            keyboard: o,
            mobile: c,
            search: d
        } = e.detail;
        if (c) {
            k();
            return
        }
        if (d) {
            D();
            return
        }
        if (t == null) return;
        const E = A(t),
            X = z(E);
        X <= 0 || (_(`tab-${t}`, X), o && setTimeout(() => {
            E ?.querySelector(Y) ?.focus()
        }, O + 50))
    }, H = () => r.hamburger ?.getAttribute("aria-expanded") === "true", Z = () => {
        a(n).activeTabId !== "tab-search" && !H() && !s() && l()
    }, ee = e => {
        if (a(n).navigationStatus === "EXITED") return;
        const t = e.target;
        !(t instanceof Node) || b.$$host.contains(t) || w("mainHeaderOverlay", {
            required: !1
        }) ?.contains(t) || t instanceof Element && t.closest("dialog[open]") || (e.preventDefault(), s() ? N() : l(!0))
    }, te = e => {
        r.headerWrap ?.addEventListener("mouseleave", Z, {
            signal: e
        }), r.hamburger ?.addEventListener("click", se, {
            signal: e
        }), document.addEventListener("click", ee, {
            signal: e
        }), b.$$host.addEventListener("click", t => {
            t.target.closest($) && s() && r.headerTabletNav ?.goBack()
        }, {
            signal: e
        }), r.countrySelectorTriggers ?.forEach(t => {
            t.addEventListener("click", he, {
                signal: e
            })
        })
    }, ae = () => {
        ie(), r.headerNavItems ?.forEach(e => e.updateFlyoutStatus()), r.headerSearch ?.updateFlyoutStatus(), r.headerTabletNav ?.updateFlyoutStatus(), re(), J(), a(n).navigationStatus === "EXITED" && s() && r.hamburger ?.getAttribute("aria-expanded") === "true" && T(!1)
    }, re = () => {
        const e = s() && a(n).navigationStatus !== "EXITED" && a(n).activeTabId != null && a(n).activeTabId !== "tab-tablet";
        b.$$host.classList.toggle("is-tablet-desktop-flyout-open", e)
    }, l = e => {
        L(), F(), S();
        const t = a(n).navigationStatus !== "EXITED",
            o = () => {
                f({
                    navigationStatus: "EXITING",
                    flyoutHeight: 0
                }), i(g, window.setTimeout(() => {
                    f({
                        flyoutHeight: 0,
                        navigationStatus: "EXITED",
                        activeTabId: void 0
                    }), a(v) && t && window.dispatchEvent(new CustomEvent("main-header-overlay:exit"))
                }, B), !0)
            };
        if (e) {
            o();
            return
        }
        R(o)
    }, _ = (e, t) => {
        C({
            activeTabId: e,
            flyoutHeight: t,
            navigationStatus: "ENTERING",
            duration: q
        })
    }, ne = (e, t) => {
        C({
            activeTabId: e,
            flyoutHeight: t,
            navigationStatus: "SWITCHING",
            duration: M,
            lastSwitchedTabId: a(n).activeTabId
        })
    }, D = () => {
        const e = r.headerSearch ?.getFlyoutHeight() ?? 0;
        e <= 0 || C({
            activeTabId: "tab-search",
            flyoutHeight: e,
            navigationStatus: "ENTERING",
            duration: M,
            lastSwitchedTabId: a(n).activeTabId
        })
    }, f = e => {
        i(n, e, !0), ae()
    }, oe = ({
        flyoutHeight: e,
        activeTabId: t
    }, o) => {
        i(g, window.setTimeout(() => {
            f({
                flyoutHeight: e,
                activeTabId: t,
                navigationStatus: "ENTERED"
            })
        }, o), !0)
    }, ie = () => {
        if (!r.background) return;
        const e = a(n).navigationStatus,
            t = e === "ENTERING" || e === "ENTERED" || e === "SWITCHING";
        ve(r.background, `state--${e.toLowerCase()}`), r.background.style.height = t ? `${a(n).flyoutHeight+64}px` : "0"
    }, se = () => {
        if (H()) {
            N();
            return
        }
        if (a(n).navigationStatus !== "EXITED") {
            l(!0), T(!1);
            return
        }
        k()
    }, k = () => {
        if (s()) {
            r.headerTabletNav ?.open(), T(!0);
            return
        }
        x()
    }, N = () => {
        r.mobileNav ?.close(), s() && a(n).navigationStatus !== "EXITED" && l(!0), T(!1), a(v) && window.dispatchEvent(new CustomEvent("main-header-overlay:exit"))
    }, x = () => {
        r.mobileNav ?.open(r.hamburger), T(!0)
    }, C = ({
        activeTabId: e,
        flyoutHeight: t,
        navigationStatus: o,
        duration: c,
        lastSwitchedTabId: d
    }) => {
        L(), F(), r.headerNavItems ?.forEach(E => {
            E.getTabId() === e && E.loadMedia()
        }), R(() => {
            f({
                flyoutHeight: t,
                navigationStatus: o,
                activeTabId: e,
                lastSwitchedTabId: d
            }), oe({
                flyoutHeight: t,
                activeTabId: e
            }, c)
        })
    }, ue = (e, t, o) => {
        const c = e.getAttribute(t),
            d = e.getAttribute(o);
        !c || !d || (e.setAttribute(t, d), e.setAttribute(o, c))
    }, T = e => {
        if (!r.hamburger) return;
        r.hamburger.setAttribute("aria-expanded", String(e)), ue(r.hamburger, "aria-label", "data-opposite");
        const t = r.hamburger.getAttribute(e ? "data-text-close" : "data-text-open");
        if (t && (r.hamburger.textContent = t), e) {
            le();
            return
        }
        ce()
    }, le = () => {
        r.headerMenu ?.querySelectorAll(W).forEach(e => {
            e !== r.hamburger && e.setAttribute("tabindex", "-1")
        })
    }, ce = () => {
        r.headerMenu ?.querySelectorAll(U).forEach(e => {
            e.removeAttribute("tabindex")
        })
    }, L = () => {
        a(g) && window.clearTimeout(a(g))
    }, F = () => {
        a(I) && window.clearTimeout(a(I))
    }, R = e => {
        F(), i(I, window.setTimeout(e, O), !0)
    }, de = (e, t) => {
        a(n).activeTabId === e && (a(n).navigationStatus === "EXITED" || a(n).navigationStatus === "EXITING" || f({ ...a(n),
            flyoutHeight: t
        }))
    }, he = () => {
        p && p.showModal()
    };
    var be = {
        handleClose: l,
        handleOpen: _,
        handleSwitch: ne,
        handleSearchOpen: D,
        handleResize: de,
        get headerState() {
            return a(n)
        },
        set headerState(e) {
            i(n, G(e))
        },
        handleCloseMobileMenu: N,
        handleOpenMobileMenu: x
    };
    return Ee(be)
}
customElements.define("main-header", fe(Se, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["handleClose", "handleOpen", "handleSwitch", "handleSearchOpen", "handleResize", "headerState", "handleCloseMobileMenu", "handleOpenMobileMenu"], !1));