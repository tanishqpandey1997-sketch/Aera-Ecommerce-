import "./disclose-version-DsnmJJEf.js";
import {
    c as f,
    p as L,
    a as w,
    h as E
} from "./custom-element-CoS1ay5O.js";
import {
    p as v
} from "./props-BfMGM-PW.js";
import {
    f as y
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as l
} from "./renderSection-CFhfkgyb.js";
import {
    g as d
} from "./getGlobalElement-DI3uduNr.js";
import {
    u as S
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function _(b, t) {
    L(t, !0);
    let s = v(t, "sectionId");
    const g = '[data-js="header-logo"]',
        {
            refs: p
        } = S({
            host: t.$$host,
            refs: {
                heroLogo: "section-hero-logo"
            }
        }, (o, e) => {
            m(e)
        }),
        m = o => {
            const e = p.heroLogo;
            if (!e) return;
            const r = d("mainHeader", {
                required: !1
            });
            if (r ?.getAttribute("data-homepage") !== "true") return;
            const h = t.$$host.getAttribute("data-logo-visibility-mode") === "hero_to_header",
                n = r.querySelector(g);
            if (!n) return;
            const a = d("mainHeaderOverlay", {
                required: !1
            });
            if (!h) {
                e.classList.remove("is-logo-swapped"), r.classList.remove("is-logo-swapped"), a ?.classList.remove("is-logo-swapped");
                return
            }
            const c = () => {
                const i = e.getBoundingClientRect().top <= n.getBoundingClientRect().top;
                e.classList.toggle("is-logo-swapped", i), r.classList.toggle("is-logo-swapped", i), a ?.classList.toggle("is-logo-swapped", i)
            };
            c(), window.addEventListener("scroll", c, {
                passive: !0,
                signal: o
            })
        };
    var u = {
        rerender: async o => {
            if (o) await l({
                sections: o,
                host: t.$$host
            }).rerender();
            else {
                if (!s()) return;
                const e = await y({
                    sections: [s()]
                });
                await l({
                    sections: e,
                    host: t.$$host,
                    sectionId: s()
                }).rerender()
            }
        },
        get sectionId() {
            return s()
        },
        set sectionId(o) {
            s(o), E()
        }
    };
    return w(u)
}
customElements.define("section-hero", f(_, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));