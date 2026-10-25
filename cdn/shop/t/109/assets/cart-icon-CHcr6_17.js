import "./disclose-version-DsnmJJEf.js";
import {
    c as a,
    p as c,
    a as s
} from "./custom-element-CoS1ay5O.js";
import {
    r as i
} from "./renderSection-CFhfkgyb.js";
import {
    g as m
} from "./getGlobalElement-DI3uduNr.js";
import {
    u
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function l(d, t) {
    c(t, !0), u({
        host: t.$$host,
        refs: {
            cartIconButton: "cart-icon-button"
        }
    }, (r, n) => {
        r.cartIconButton ?.addEventListener("click", e, {
            signal: n
        })
    });
    const e = async () => {
        m("cartContext", {
            required: !1
        }) ?.openCartDialog()
    };
    var o = {
        rerender: async r => {
            await i({
                sections: r,
                host: t.$$host
            }).rerender()
        }
    };
    return s(o)
}
customElements.define("cart-icon", a(l, {}, [], ["rerender"], !1));