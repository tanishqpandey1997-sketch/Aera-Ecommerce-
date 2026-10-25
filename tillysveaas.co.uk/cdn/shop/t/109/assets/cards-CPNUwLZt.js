import {
    f as o
} from "./fetch-sections-Cuvl7RxI.js";
import {
    w as c,
    t as a
} from "./client-DeirsjOi.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
const l = 15e3,
    s = t => {
        const i = new URL(t, window.location.origin);
        return `${i.pathname}${i.search}`
    },
    d = (t, i = 0) => {
        const r = t.productId != null ? String(t.productId) : "",
            e = t.variantId != null ? String(t.variantId) : "",
            n = t.productUrl ? s(t.productUrl) : "";
        return [r, e, n || String(i)].filter(Boolean).join(":")
    },
    h = (t, i) => {
        const r = document.createElement("template");
        r.innerHTML = t.trim();
        const e = r.content.firstElementChild;
        return e ?.id && (e.id = `${e.id}-wishlist-${i}`), r.innerHTML.trim()
    },
    m = async t => (await c((r, e) => {
        o({
            sections: ["wishlist-product-card"],
            url: t
        }, {
            cache: !0
        }).then(r).catch(n => e(a(n, `Failed to fetch product card for "${t}"`)))
    }, l, `Timed out fetching product card for "${t}"`))["wishlist-product-card"],
    u = async (t, i) => {
        const r = d(t, i),
            e = await m(s(t.productUrl));
        return {
            key: r,
            html: h(e, r),
            product: t
        }
    },
    T = async t => (await Promise.allSettled(t.map((r, e) => u(r, e)))).flatMap(r => r.status === "fulfilled" ? [r.value] : (console.error("[swym-wishlist] Failed to fetch wishlist product card", r.reason), []));
export {
    T as f
};