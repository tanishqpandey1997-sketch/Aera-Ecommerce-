import {
    f as _,
    w as u,
    g as m,
    a as c,
    r as o
} from "./items-DNi4Eu8t.js";
import {
    p as i,
    g as n
} from "./state-hxloTOT8.js";
const v = e => {
        const t = o(e);
        if (!t) return;
        const a = String(t.variant_id);
        e.dataset.gtmViewItemSignature !== a && (e.dataset.gtmViewItemSignature = a, i("view_item", {
            currency: n(),
            value: t.price ?? 0,
            items: [t]
        }))
    },
    k = e => {
        const t = c(e);
        if (t.length === 0) return;
        const a = t.map(r => String(r.variant_id)).join("|");
        e.dataset.gtmViewItemListSignature !== a && (e.dataset.gtmViewItemListSignature = a, i("view_item_list", {
            item_list_name: t[0] ?.item_list_name ?? void 0,
            items: t
        }))
    },
    y = (e, t) => {
        const a = e.trim();
        a.length !== 0 && t.dataset.gtmSearchTerm !== a && (t.dataset.gtmSearchTerm = a, i("search", {
            search_term: a
        }))
    },
    w = e => {
        if (e.dataset.gtmViewCartTracked === "true") return;
        const t = c(e);
        t.length !== 0 && (e.dataset.gtmViewCartTracked = "true", i("view_cart", {
            currency: n(),
            value: m(t),
            items: t
        }))
    },
    I = e => {
        const t = c(e);
        t.length !== 0 && i("begin_checkout", {
            currency: n(),
            value: m(t),
            items: t
        })
    },
    d = e => {
        const t = e.fallback;
        return !t ?.item_id || !t.item_name ? null : u({
            variant_id: t.variant_id ?? e.variantId,
            product_id: t.product_id ?? null,
            item_id: t.item_id,
            item_name: t.item_name,
            item_brand: t.item_brand ?? null,
            item_category: t.item_category ?? null,
            item_category2: t.item_category2 ?? null,
            item_category3: t.item_category3 ?? null,
            item_category4: t.item_category4 ?? null,
            item_category5: t.item_category5 ?? null,
            item_variant: t.item_variant ?? null,
            item_list_name: t.item_list_name ?? null,
            index: t.index ?? null,
            price: t.price ?? 0
        }, e.quantity)
    },
    l = (e, t) => {
        const a = t.map(r => {
            const s = _(r.variantId);
            return s ? u(s, r.quantity) : d(r)
        }).filter(r => r !== null);
        a.length !== 0 && i(e, {
            currency: n(),
            value: m(a),
            items: a
        })
    },
    p = e => {
        l("add_to_cart", e)
    },
    V = e => {
        l("remove_from_cart", e)
    };
export {
    V as a, I as b, w as c, k as d, y as e, v as f, p as t
};