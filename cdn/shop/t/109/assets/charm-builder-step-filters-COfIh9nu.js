import "./disclose-version-DsnmJJEf.js";
import {
    c as l,
    p as u,
    a as f,
    b as m,
    g as a,
    s as b
} from "./custom-element-CoS1ay5O.js";
import {
    u as d
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function h(p, o) {
    u(o, !0);
    const {
        refs: i
    } = d({
        host: o.$$host,
        refs: {
            filterButtons: ["filter-button"]
        }
    }, (t, s) => {
        i.filterButtons ?.forEach(r => {
            r.addEventListener("click", c, {
                signal: s
            })
        })
    });
    let e = b("");
    const c = t => {
            const r = t.currentTarget.getAttribute("data-color-key") ?? "";
            m(e, a(e) === r ? "" : r, !0), n(), o.$$host.dispatchEvent(new CustomEvent("charm-builder-step-filters:change", {
                bubbles: !0,
                detail: {
                    colorKey: a(e)
                }
            }))
        },
        n = () => {
            i.filterButtons ?.forEach(t => {
                const s = t.getAttribute("data-color-key") ?? "";
                t.setAttribute("aria-pressed", String(a(e) === s))
            })
        };
    f()
}
customElements.define("charm-builder-step-filters", l(h, {}, [], [], !1));