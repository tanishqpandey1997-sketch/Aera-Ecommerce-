import "./disclose-version-DsnmJJEf.js";
import {
    c as f,
    p as y,
    a as g
} from "./custom-element-CoS1ay5O.js";
import {
    t as l,
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
    g as n
} from "./getGlobalElement-Do2Hw5Hq.js";
import "./items-DNi4Eu8t.js";
import "./state-hxloTOT8.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./collectRefs-DFE6zV31.js";

function w(_, s) {
    y(s, !0), h({
        host: s.$$host
    });
    const c = () => window.location.pathname,
        u = async a => {
            const e = n("miniCart", {
                    required: !1
                }),
                o = n("cartIcon", {
                    required: !1
                }),
                i = n("mainCart", {
                    required: !1
                });
            i ?.setLoading(!0), e ?.setLoading(!0);
            try {
                const t = await q({
                    items: a,
                    sections: ["main-cart", "mini-cart", "cart-icon", "cart-upsell"],
                    url: c()
                });
                return await e ?.rerender(t.sections), await o ?.rerender(t.sections), await i ?.rerender(t.sections), await n("cartUpsellPanel", {
                    required: !1
                }) ?.rerender(t.sections), l(t.items.map(r => ({
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
                i ?.setLoading(!1), e ?.setLoading(!1)
            }
        },
        p = async a => {
            const e = n("miniCart", {
                    required: !1
                }),
                o = n("cartIcon", {
                    required: !1
                }),
                i = n("mainCart", {
                    required: !1
                });
            i ?.setLoading(!0), e ?.setLoading(!0);
            try {
                const t = await v({
                    variantId: a.id,
                    quantity: a.quantity,
                    sections: ["main-cart", "mini-cart", "cart-icon", "cart-upsell"],
                    url: c()
                });
                if (await e ?.rerender(t.sections), await o ?.rerender(t.sections), await i ?.rerender(t.sections), await n("cartUpsellPanel", {
                        required: !1
                    }) ?.rerender(t.sections), typeof a.previousQuantity == "number" && a.previousQuantity !== a.quantity) {
                    const r = Math.abs(a.previousQuantity - a.quantity);
                    a.quantity > a.previousQuantity ? l([{
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
                i ?.setLoading(!1), e ?.setLoading(!1)
            }
        },
        d = () => {
            n("dialogMiniCart") ?.showModal()
        };
    var m = {
        onAddToCart: u,
        onChangeQuantity: p,
        openCartDialog: d
    };
    return g(m)
}
customElements.define("cart-context", f(w, {}, [], ["onAddToCart", "onChangeQuantity", "openCartDialog"], !0));