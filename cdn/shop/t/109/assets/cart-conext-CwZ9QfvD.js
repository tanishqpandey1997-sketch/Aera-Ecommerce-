import "./disclose-version-DsnmJJEf.js";
import {
    c as f,
    p as y,
    a as g
} from "./custom-element-CoS1ay5O.js";
import {
    t as u,
    a as C
} from "./trackers-BKtP3_by.js";
import {
    a as q
} from "./add-to-cart-CG6qTa89.js";
import {
    c as v
} from "./change-quantity-CVgumGbo.js";
import {
    u as h
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as e
} from "./getGlobalElement-DI3uduNr.js";
import "./items-DNi4Eu8t.js";
import "./state-hxloTOT8.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./collectRefs-DFE6zV31.js";

function _(w, s) {
    y(s, !0), h({
        host: s.$$host
    });
    const c = () => window.location.pathname,
        l = async a => {
            const n = e("miniCart", {
                    required: !1
                }),
                o = e("cartIcon", {
                    required: !1
                }),
                i = e("mainCart", {
                    required: !1
                });
            i ?.setLoading(!0), n ?.setLoading(!0);
            try {
                const t = await q({
                    items: a,
                    sections: ["main-cart", "mini-cart", "cart-icon"],
                    url: c()
                });
                return await n ?.rerender(t.sections), await o ?.rerender(t.sections), await i ?.rerender(t.sections), u(t.items.map(r => ({
                    variantId: r.variant_id,
                    quantity: r.quantity,
                    fallback: {
                        item_brand: r.vendor,
                        item_id: r.sku,
                        item_name: r.product_title,
                        item_variant: r.variant_title,
                        price: r.final_price / 100,
                        variant_id: r.variant_id
                    }
                }))), d(), t
            } catch (t) {
                console.error("[cart-context] Error adding item to cart", t)
            } finally {
                i ?.setLoading(!1), n ?.setLoading(!1)
            }
        },
        m = async a => {
            const n = e("miniCart", {
                    required: !1
                }),
                o = e("cartIcon", {
                    required: !1
                }),
                i = e("mainCart", {
                    required: !1
                });
            i ?.setLoading(!0), n ?.setLoading(!0);
            try {
                const t = await v({
                    variantId: a.id,
                    quantity: a.quantity,
                    sections: ["main-cart", "mini-cart", "cart-icon"],
                    url: c()
                });
                if (await n ?.rerender(t.sections), await o ?.rerender(t.sections), await i ?.rerender(t.sections), typeof a.previousQuantity == "number" && a.previousQuantity !== a.quantity) {
                    const r = Math.abs(a.previousQuantity - a.quantity);
                    a.quantity > a.previousQuantity ? u([{
                        variantId: a.id,
                        quantity: r
                    }]) : C([{
                        variantId: a.id,
                        quantity: r
                    }])
                }
                return t
            } catch (t) {
                console.error("[cart-context] Error changing quantity", t)
            } finally {
                i ?.setLoading(!1), n ?.setLoading(!1)
            }
        },
        d = () => {
            e("dialogMiniCart") ?.showModal()
        };
    var p = {
        onAddToCart: l,
        onChangeQuantity: m,
        openCartDialog: d
    };
    return g(p)
}
customElements.define("cart-context", f(_, {}, [], ["onAddToCart", "onChangeQuantity", "openCartDialog"], !0));