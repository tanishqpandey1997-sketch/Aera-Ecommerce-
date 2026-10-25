import "./disclose-version-DsnmJJEf.js";
import {
    c as u,
    p as m,
    a as i
} from "./custom-element-CoS1ay5O.js";
import {
    g as o
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    u as l
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function h(y, s) {
    m(s, !0);
    const p = e => e === "necklace" || e === "bracelet",
        {
            refs: n
        } = l({
            host: s.$$host,
            refs: {
                typeInputs: ["type-input"]
            }
        }, (e, r) => {
            e.typeInputs ?.forEach(t => {
                t.addEventListener("change", a, {
                    signal: r
                })
            }), e.typeInputs && c(e.typeInputs)
        }),
        a = e => {
            const r = e.currentTarget;
            p(r.value) && (o().selectType(r.value), n.typeInputs && c(n.typeInputs))
        },
        c = e => {
            const r = o().getForm().type;
            e.forEach(t => {
                t.checked = t.value === r, t.checked ? t.nextElementSibling ?.setAttribute("data-state", "checked") : t.nextElementSibling ?.removeAttribute("data-state")
            })
        };
    i()
}
customElements.define("charm-builder-type-options", u(h, {}, [], [], !1));