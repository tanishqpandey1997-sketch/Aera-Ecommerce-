import "./disclose-version-DsnmJJEf.js";
import {
    c as w,
    p as C,
    a as H,
    h as V
} from "./custom-element-CoS1ay5O.js";
import {
    p as F
} from "./props-BfMGM-PW.js";
import {
    f as j
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as p
} from "./renderSection-CFhfkgyb.js";
import {
    g
} from "./getGlobalElement-DI3uduNr.js";
import {
    u as k
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function Y(D, n) {
    C(n, !0);
    const y = '[data-js="header-nav-item"]',
        L = '[data-js="header-nav-flyout-content"]',
        S = '[data-js="header-nav-flyout-opener"]',
        h = '[data-js="overlay-nav-flyout-opener"]',
        _ = "a, span";
    let o = F(n, "sectionId"),
        v = null,
        s = null,
        b = null,
        d = null,
        f = null;
    const O = e => {
            const t = new Set;
            return e.querySelectorAll(y).forEach((r, a) => {
                r.querySelector(L) && t.add(a)
            }), t
        },
        E = (e, t, r) => {
            e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"), t.removeAttribute("inert"), t.removeAttribute("aria-hidden"), e.classList.add("is-hidden"), t.classList.add("is-main-header-overlay-active"), window.dispatchEvent(new CustomEvent("main-header-overlay:enter", {
                detail: r
            }))
        },
        T = (e, t) => {
            if (e.removeAttribute("inert"), e.removeAttribute("aria-hidden"), t.setAttribute("inert", ""), t.setAttribute("aria-hidden", "true"), e.classList.remove("is-hidden"), t.classList.remove("is-main-header-overlay-active"), e.querySelectorAll(h).forEach(r => r.setAttribute("aria-expanded", "false")), d) {
                const r = d;
                d = null, requestAnimationFrame(() => r.focus())
            }
        },
        I = e => s ?.querySelectorAll(y)[e] ?? null,
        N = (e, t) => {
            const r = I(t) ?.querySelector(S);
            if (!r) return null;
            const a = r.cloneNode(!0);
            a.removeAttribute("id"), a.setAttribute("data-js", "overlay-nav-flyout-opener"), a.setAttribute("aria-expanded", "false"), a.setAttribute("hidden", "");
            const l = e.querySelector(_) ?.textContent;
            return l && a.setAttribute("aria-label", `Open ${l.trim()} submenu`), e.append(a), a
        },
        R = (e, t) => e.querySelector(h) ?? N(e, t),
        {
            refs: c
        } = k({
            host: n.$$host,
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
            if (v = n.$$host, s = g("mainHeader", {
                    required: !1
                }), f = g("dialogCountrySelector"), b = s ?.closest("header"), !v || !s || !b) return;
            const r = v,
                a = b;
            r.removeAttribute("inert"), r.removeAttribute("aria-hidden"), a.setAttribute("inert", ""), a.setAttribute("aria-hidden", "true");
            const l = O(s),
                A = i => {
                    E(r, a, i)
                };
            c.navItems ?.forEach(i => {
                const m = Number(i.getAttribute("data-tab-index"));
                if (!l.has(m)) {
                    i.querySelector(h) ?.remove();
                    return
                }
                i.addEventListener("mouseenter", () => A({
                    tabIndex: m
                }), {
                    signal: t
                });
                const u = R(i, m);
                u && (u.removeAttribute("hidden"), u.addEventListener("click", () => {
                    d = u, u.setAttribute("aria-expanded", "true"), A({
                        tabIndex: m,
                        keyboard: !0
                    })
                }, {
                    signal: t
                }))
            }), c.hamburger ?.addEventListener("click", () => {
                d = c.hamburger, A({
                    mobile: !0
                })
            }, {
                signal: t
            }), c.searchTrigger ?.addEventListener("click", () => E(r, a, {
                search: !0
            }), {
                signal: t
            }), window.addEventListener("main-header-overlay:exit", () => T(r, a), {
                signal: t
            }), c.countrySelectorTrigger ?.addEventListener("click", q, {
                signal: t
            })
        }),
        q = () => {
            f && f.showModal()
        };
    var x = {
        rerender: async e => {
            if (e) await p({
                sections: e,
                host: n.$$host
            }).rerender();
            else {
                if (!o()) return;
                const t = await j({
                    sections: [o()]
                });
                await p({
                    sections: t,
                    host: n.$$host,
                    sectionId: o()
                }).rerender()
            }
        },
        get sectionId() {
            return o()
        },
        set sectionId(e) {
            o(e), V()
        }
    };
    return H(x)
}
customElements.define("main-header-overlay", w(Y, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));