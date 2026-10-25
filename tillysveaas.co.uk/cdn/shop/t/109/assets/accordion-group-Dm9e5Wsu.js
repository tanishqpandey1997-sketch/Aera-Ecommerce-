import "./disclose-version-DsnmJJEf.js";
import {
    c as p,
    p as u,
    a as f
} from "./custom-element-CoS1ay5O.js";
import {
    u as g
} from "./useInit.svelte-ItIJhPfT.js";
import "./accordion-A9C4hopO.js";
import "./collectRefs-DFE6zV31.js";

function m(h, o) {
    u(o, !0);
    const {
        refs: c
    } = g({
        host: o.$$host,
        refs: {
            toggles: ["accordion-toggle"],
            accordions: ["accordion-root"]
        }
    }, (n, r) => {
        n.toggles ?.forEach(t => {
            t.addEventListener("click", l, {
                signal: r
            })
        })
    }), a = () => o.$$host.hasAttribute("allow-multiple-open"), l = n => {
        const t = n.currentTarget ?.dataset.index;
        if (!t) return;
        const d = parseInt(t),
            e = c ?.accordions ?.[d];
        if (!e) return;
        const s = e.getOpen();
        e.setOpen(!s), !a() && !s && c ?.accordions ?.forEach(i => {
            i !== e && i.setOpen(!1)
        })
    };
    f()
}
customElements.define("svelte-accordion-group", p(m, {}, [], [], !1));