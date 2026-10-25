import "./disclose-version-DsnmJJEf.js";
import {
    c as a,
    p as s,
    a as i
} from "./custom-element-CoS1ay5O.js";
import {
    b as n
} from "./trackers-BKtP3_by.js";
import {
    r as c
} from "./renderSection-CFhfkgyb.js";
import {
    u as m
} from "./useInit.svelte-ItIJhPfT.js";
import "./items-DNi4Eu8t.js";
import "./state-hxloTOT8.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function u(d, e) {
    s(e, !0), m({
        host: e.$$host,
        refs: {
            checkoutForm: {
                ref: "cart-footer__checkout-form",
                required: !1
            }
        }
    }, (t, o) => {
        t.checkoutForm ?.addEventListener("submit", () => n(e.$$host), {
            signal: o
        })
    });
    var r = {
        setLoading: t => {
            e.$$host.dataset.cartLoading = t ? "true" : "false"
        },
        rerender: async t => {
            await c({
                sections: t,
                host: e.$$host
            }).rerender()
        }
    };
    return i(r)
}
customElements.define("mini-cart", a(u, {}, [], ["setLoading", "rerender"], !1));