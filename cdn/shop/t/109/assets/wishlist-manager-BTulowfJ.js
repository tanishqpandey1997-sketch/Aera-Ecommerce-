import {
    g as v,
    c as u,
    t as h
} from "./client-DeirsjOi.js";
const y = "[data-wishlist-toggle]",
    o = new Set;
let l = null,
    m = !1,
    c = !1;
const n = t => String(t),
    S = t => {
        const e = t.dataset.productId,
            s = t.dataset.variantId,
            i = t.dataset.productUrl;
        return !e || !s || !i ? null : {
            empi: Number(e),
            epi: Number(s),
            du: i
        }
    },
    d = t => {
        const e = n(t),
            s = o.has(e);
        document.querySelectorAll(`${y}[data-product-id="${t}"]`).forEach(r => {
            r.dataset.wishlisted = String(s)
        })
    },
    f = () => {
        document.querySelectorAll(y).forEach(e => {
            const s = e.dataset.productId;
            if (!s) return;
            const i = n(s);
            e.dataset.wishlisted = String(o.has(i))
        })
    },
    w = async t => {
        const e = await u((s, i) => {
            t.fetch(s, r => i(h(r, "Swym fetch failed")))
        }, "Swym fetch timed out");
        o.clear(), e.forEach(s => {
            s.empi != null && o.add(n(s.empi))
        }), f()
    },
    p = async (t, e) => {
        const s = n(e.empi);
        o.add(s), d(e.empi);
        try {
            c = !0, await u((i, r) => {
                t.addToWishList(e, i, a => r(h(a, "Swym addToWishList failed")))
            }, "Swym addToWishList timed out")
        } catch (i) {
            throw o.delete(s), d(e.empi), i
        } finally {
            c = !1
        }
    },
    g = async (t, e) => {
        const s = n(e.empi);
        o.delete(s), d(e.empi);
        try {
            c = !0, await u((i, r) => {
                t.removeFromWishList(e, i, a => r(h(a, "Swym removeFromWishList failed")))
            }, "Swym removeFromWishList timed out")
        } catch (i) {
            throw o.add(s), d(e.empi), i
        } finally {
            c = !1
        }
    },
    W = async t => {
        const e = t.target.closest(y);
        if (!e || !l) return;
        const s = S(e);
        if (!s) return;
        t.preventDefault(), t.stopPropagation();
        const i = n(s.empi),
            r = o.has(i);
        try {
            r ? await g(l, s) : await p(l, s)
        } catch (a) {
            console.error("[wishlist] Failed to toggle wishlist", a)
        }
    },
    E = () => {
        let t = !1;
        const e = () => {
            t || (t = !0, requestAnimationFrame(() => {
                t = !1, f()
            }))
        };
        new MutationObserver(e).observe(document.body, {
            childList: !0,
            subtree: !0
        })
    },
    b = t => {
        if (!t.evtLayer) return;
        const e = () => {
            c || w(t)
        };
        [t.JSEvents ?.addedToWishlist, t.JSEvents ?.removedFromWishlist, t.JSEvents ?.removeWishlistCollection].filter(i => !!i).forEach(i => {
            t.evtLayer ?.addEventListener(i, e)
        })
    },
    F = async () => {
        if (!m) {
            m = !0;
            try {
                const t = await v();
                l = t, await w(t), document.addEventListener("click", e => {
                    W(e)
                }, !0), E(), b(t)
            } catch (t) {
                console.error("[wishlist] Failed to initialize wishlist manager", t), m = !1
            }
        }
    };
export {
    F as i
};