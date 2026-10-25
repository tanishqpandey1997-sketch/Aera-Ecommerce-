import "./disclose-version-DsnmJJEf.js";
import {
    c as C,
    p as k,
    a as p,
    g as d,
    s as E,
    b as A
} from "./custom-element-CoS1ay5O.js";
import {
    g as N
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    u as L
} from "./useInit.svelte-ItIJhPfT.js";
import {
    r as y
} from "./renderSection-CFhfkgyb.js";
import {
    D as F
} from "./drawerFocusManager-DnIon1j1.js";
import "./collectRefs-DFE6zV31.js";
import "./morph-CjE7B4pu.js";

function _($, a) {
    k(a, !0);
    let o = null,
        s = E(null);
    const {
        refs: e
    } = L({
        host: a.$$host,
        refs: {
            menuItems: ["mobile-nav-submenu-trigger"],
            menuContainers: ["mobile-nav-menu"],
            linksContainer: "mobile-nav-links-container",
            mainMenu: {
                ref: "mobile-nav-main-menu",
                required: !1
            },
            backButtons: ["mobile-nav-back"],
            drawer: "mobile-nav-drawer",
            mediaItems: ["mobile-nav-media"]
        }
    }, (n, t) => {
        o = N("mainHeader", {
            required: !1
        }), c(t), b()
    }), c = n => {
        e.menuItems ?.forEach(t => {
            t.addEventListener("click", () => v(t), {
                signal: n
            })
        }), e.backButtons ?.forEach(t => {
            t.addEventListener("click", () => M(), {
                signal: n
            })
        })
    }, b = () => {
        e.drawer && A(s, new F(e.drawer, I), !0)
    }, r = n => {
        e.menuContainers ?.forEach(t => {
            t.setAttribute("aria-hidden", t === n ? "false" : "true")
        })
    }, l = () => e.mainMenu ?? e.menuContainers ?.[0] ?? null, f = n => {
        m(), a.$$host ?.setAttribute("aria-hidden", "false"), document.body.classList.add("overflow-hidden"), d(s) ?.trapFocus(n)
    }, h = () => {
        a.$$host ?.setAttribute("aria-hidden", "true"), document.body.classList.remove("overflow-hidden"), d(s) ?.restoreFocus(), m()
    }, m = () => {
        r(l())
    }, v = n => {
        const t = n.getAttribute("aria-controls"),
            i = e.menuContainers ?.find(w => w.id === t),
            u = e.menuContainers ?.indexOf(i) ?? -1;
        u !== -1 && e.mediaItems ?.[u - 1] ?.loadMedia(), i && r(i)
    }, M = () => {
        r(l())
    }, I = () => {
        o ?.handleCloseMobileMenu()
    };
    var g = {
        open: f,
        close: h,
        hideMobileNavItems: () => {
            e.linksContainer && e.linksContainer.setAttribute("aria-hidden", "true")
        },
        showMobileNavItems: () => {
            e.linksContainer && e.linksContainer.setAttribute("aria-hidden", "false")
        },
        rerender: async n => {
            await y({
                sections: n,
                host: a.$$host
            }).rerender()
        }
    };
    return p(g)
}
customElements.define("mobile-nav", C(_, {}, [], ["open", "close", "hideMobileNavItems", "showMobileNavItems", "rerender"], !1));