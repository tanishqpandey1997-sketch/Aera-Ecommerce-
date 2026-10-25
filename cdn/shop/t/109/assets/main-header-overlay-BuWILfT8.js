import "./disclose-version-DsnmJJEf.js";
import {
    c as C,
    p as H,
    a as V,
    h as F
} from "./custom-element-CoS1ay5O.js";
import {
    p as j
} from "./props-BfMGM-PW.js";
import {
    f as k
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as S
} from "./renderSection-CFhfkgyb.js";
import {
    g as _
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    u as Y
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function D(M, i) {
    H(i, !0);
    const E = '[data-js="header-nav-item"]',
        g = '[data-js="header-nav-flyout-content"]',
        T = '[data-js="header-nav-flyout-opener"]',
        v = '[data-js="overlay-nav-flyout-opener"]',
        O = "a, span";
    let d = j(i, "sectionId"),
        f = null,
        o = null,
        s = null,
        c = null,
        b = null,
        A = 0;
    const w = e => {
            const t = new Set;
            return e.querySelectorAll(E).forEach((r, a) => {
                r.querySelector(g) && t.add(a)
            }), t
        },
        p = (e, t, r) => {
            e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), e.classList.add("is-hidden"), t.classList.add("is-main-header-overlay-active"), window.dispatchEvent(new CustomEvent("main-header-overlay:enter", {
                detail: r
            }))
        },
        L = (e, t) => {
            if (e.removeAttribute("inert"), e.removeAttribute("aria-hidden"), t.setAttribute("inert", ""), t.setAttribute("aria-hidden", "true"), e.classList.remove("is-hidden"), t.classList.remove("is-main-header-overlay-active"), e.querySelectorAll(v).forEach(r => r.setAttribute("aria-expanded", "false")), c) {
                const r = c;
                c = null, requestAnimationFrame(() => r.focus())
            }
        },
        x = e => o ?.querySelectorAll(E)[e] ?? null,
        I = (e, t) => {
            const r = x(t) ?.querySelector(T);
            if (!r) return null;
            const a = r.cloneNode(!0);
            a.removeAttribute("id"), a.setAttribute("data-js", "overlay-nav-flyout-opener"), a.setAttribute("aria-expanded", "false"), a.setAttribute("hidden", "");
            const m = e.querySelector(O) ?.textContent;
            return m && a.setAttribute("aria-label", `Open ${m.trim()} submenu`), e.append(a), a
        },
        N = (e, t) => e.querySelector(v) ?? I(e, t),
        {
            refs: u
        } = Y({
            host: i.$$host,
            refs: {
                navItems: ["main-header-overlay-nav-item"],
                hamburger: {
                    ref: "main-header-overlay-hamburger",
                    required: !1
                },
                searchTrigger: "header-menu-search-trigger",
                countrySelectorTrigger: "country-selector-trigger"
            }
        }, (e, t) => {
            if (f = i.$$host, o = _("mainHeader", {
                    required: !1
                }), b = _("dialogCountrySelector"), s = o ?.closest("header"), !f || !o || !s) return;
            const r = f,
                a = s;
            r.removeAttribute("inert"), r.removeAttribute("aria-hidden"), a.setAttribute("inert", ""), a.setAttribute("aria-hidden", "true");
            const m = w(o),
                y = n => {
                    p(r, a, n)
                };
            u.navItems ?.forEach(n => {
                const h = Number(n.getAttribute("data-tab-index"));
                if (!m.has(h)) {
                    n.querySelector(v) ?.remove();
                    return
                }
                n.addEventListener("mouseenter", () => {
                    window.clearTimeout(A), y({
                        tabIndex: h
                    })
                }, {
                    signal: t
                }), n.addEventListener("mouseleave", () => {
                    window.clearTimeout(A), A = window.setTimeout(() => {
                        !s || s.matches(":hover") || s.querySelector('[aria-expanded="true"]') || (o ?.handleClose ?.(!0), L(r, a))
                    }, 150)
                }, {
                    signal: t
                });
                const l = N(n, h);
                l && (l.removeAttribute("hidden"), l.addEventListener("click", () => {
                    c = l, l.setAttribute("aria-expanded", "true"), y({
                        tabIndex: h,
                        keyboard: !0
                    })
                }, {
                    signal: t
                }))
            }), u.hamburger ?.addEventListener("click", () => {
                c = u.hamburger, y({
                    mobile: !0
                })
            }, {
                signal: t
            }), u.searchTrigger ?.addEventListener("click", () => p(r, a, {
                search: !0
            }), {
                signal: t
            }), window.addEventListener("main-header-overlay:exit", () => L(r, a), {
                signal: t
            }), u.countrySelectorTrigger ?.addEventListener("click", q, {
                signal: t
            })
        }),
        q = () => {
            b && b.showModal()
        };
    var R = {
        rerender: async e => {
            if (e) await S({
                sections: e,
                host: i.$$host
            }).rerender();
            else {
                if (!d()) return;
                const t = await k({
                    sections: [d()]
                });
                await S({
                    sections: t,
                    host: i.$$host,
                    sectionId: d()
                }).rerender()
            }
        },
        get sectionId() {
            return d()
        },
        set sectionId(e) {
            d(e), F()
        }
    };
    return V(R)
}
customElements.define("main-header-overlay", C(D, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));