import "./disclose-version-DsnmJJEf.js";
import {
    c as d,
    p as l,
    a as f
} from "./custom-element-CoS1ay5O.js";
import {
    g as p
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    u as v
} from "./useInit.svelte-ItIJhPfT.js";
import {
    Q as y
} from "./quantity-picker-Cu75q2Tb.js";
import "./collectRefs-DFE6zV31.js";

function C(h, r) {
    l(r, !0);
    const o = p("cartContext", {
        required: !1
    });
    let n = null;
    const {
        refs: a
    } = v({
        host: r.$$host,
        refs: {
            item: "cart-line-item",
            removeButton: "cart-line-item-remove",
            quantityPicker: {
                ref: "quantity-picker",
                required: !1
            }
        }
    }, (e, t) => {
        e.quantityPicker ?.addEventListener(y, s, {
            signal: t
        }), e.removeButton ?.addEventListener("click", m, {
            signal: t
        })
    }), u = (e, t, i) => {
        n && clearTimeout(n), n = setTimeout(() => {
            o ?.onChangeQuantity({
                id: e,
                quantity: t,
                previousQuantity: i
            })
        }, 500)
    }, s = e => {
        const t = a ?.item ?.dataset.variantId;
        if (!t) return;
        const {
            quantity: i,
            previousQuantity: c
        } = e.detail;
        u(t, i, c)
    }, m = async e => {
        e.preventDefault();
        const t = a ?.item ?.dataset.variantId;
        t && o ?.onChangeQuantity({
            id: t,
            previousQuantity: parseInt(a ?.item ?.dataset.quantity || "0", 10),
            quantity: 0
        })
    };
    f()
}
customElements.define("cart-line-item", d(C, {}, [], [], !1));