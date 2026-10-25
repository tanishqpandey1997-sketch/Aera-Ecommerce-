import "./disclose-version-DsnmJJEf.js";
import {
    c as h,
    p as n,
    a as l
} from "./custom-element-CoS1ay5O.js";
import {
    u as c
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function u(g, e) {
    n(e, !0);
    const {
        refs: r
    } = c({
        host: e.$$host,
        refs: {
            trigger: {
                ref: "drawer-trigger",
                required: !1
            },
            dialog: {
                ref: "drawer-dialog",
                required: !1
            }
        }
    }, (o, d) => {
        o.trigger ?.addEventListener("click", i, {
            signal: d
        })
    }), t = () => {
        e.$$host.setAttribute("data-hidden", "false")
    }, a = () => {
        e.$$host.setAttribute("data-hidden", "true")
    }, i = () => {
        r.dialog ?.showModal()
    };
    var s = {
        show: t,
        hide: a
    };
    return l(s)
}
customElements.define("charm-builder-chain-length-header", h(u, {}, [], ["show", "hide"], !1));