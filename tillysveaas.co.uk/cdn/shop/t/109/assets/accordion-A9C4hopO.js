import "./disclose-version-DsnmJJEf.js";
import {
    c as r,
    p as i,
    a
} from "./custom-element-CoS1ay5O.js";
import {
    u as s
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function d(l, o) {
    i(o, !0);
    const {
        refs: e
    } = s({
        host: o.$$host,
        refs: {
            toggle: "accordion-toggle",
            content: "accordion-content",
            contentInner: "accordion-content-inner",
            iconDefault: {
                ref: "accordion-icon-default",
                required: !1
            },
            iconActive: {
                ref: "accordion-icon-active",
                required: !1
            }
        }
    });
    var n = {
        setOpen: t => {
            const c = o.$$host.querySelector('[data-js="accordion"]');
            e.toggle ?.setAttribute("aria-expanded", t.toString()), e.content ?.classList.toggle("accordion__content--open", t), e.contentInner ?.classList.toggle("accordion__content-inner--open", t), c ?.classList.toggle("accordion--open", t), e.iconDefault && (e.iconDefault.hidden = t), e.iconActive && (e.iconActive.hidden = !t)
        },
        getOpen: () => e.toggle ?.getAttribute("aria-expanded") === "true"
    };
    return a(n)
}
customElements.define("svelte-accordion", r(d, {}, [], ["setOpen", "getOpen"], !1));