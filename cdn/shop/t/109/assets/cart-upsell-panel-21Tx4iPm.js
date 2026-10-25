import "./disclose-version-DsnmJJEf.js";
import {
    c as o,
    p as s,
    a as n
} from "./custom-element-CoS1ay5O.js";
import {
    r as a
} from "./renderSection-CFhfkgyb.js";
import {
    u as m
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function c(i, e) {
    s(e, !0), m({
        host: e.$$host
    });
    var r = {
        rerender: async t => {
            await a({
                sections: t,
                host: e.$$host,
                sectionId: "cart-upsell"
            }).rerender()
        }
    };
    return n(r)
}
customElements.define("cart-upsell-panel", o(c, {}, [], ["rerender"], !1));