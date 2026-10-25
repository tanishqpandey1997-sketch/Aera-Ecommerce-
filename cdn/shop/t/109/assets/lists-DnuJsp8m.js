import {
    c as n,
    t as o
} from "./client-DeirsjOi.js";
const l = () => new URLSearchParams(window.location.search),
    d = t => ({
        productUrl: t.du,
        variantId: t.epi,
        productId: t.empi,
        listId: t.lid,
        title: t.dt,
        imageUrl: t.iu,
        providerItem: {
            rawItem: t
        }
    }),
    c = (t, s = t.listcontents ?? []) => ({
        listId: t.lid,
        name: t.lname,
        items: s.map(d)
    }),
    h = t => !!t.productUrl,
    u = async t => (await n((i, e) => {
        t.fetchLists({
            callbackFn: i,
            errorFn: r => e(o(r, "Swym fetchLists failed"))
        })
    }, "Swym fetchLists timed out")).map(i => c(i)),
    f = async (t, s) => {
        const i = await n((e, r) => {
            t.fetchListDetails({
                lid: s
            }, e, a => r(o(a, `Swym fetchListDetails failed for "${s}"`)))
        }, `Swym fetchListDetails timed out for "${s}"`);
        return c(i.list ?? {
            lid: s
        }, i.items ?? [])
    },
    m = async (t, s) => {
        const i = Array.from(new Set([s.hkey, s.lid].filter(Boolean)));
        if (i.length === 0) throw new Error("Shared wishlist link is missing both hkey and lid");
        let e = null;
        for (const r of i) try {
            return await f(t, r)
        } catch (a) {
            e || (e = o(a, "Unable to fetch shared wishlist details"))
        }
        throw e ?? new Error("Unable to fetch shared wishlist details")
    },
    y = t => {
        const s = l().get("lid");
        return s ? t.find(i => String(i.listId ?? "") === s) ?? t[0] ?? null : t[0] ?? null
    },
    S = () => ({
        hkey: l().get("hkey"),
        lid: l().get("lid")
    }),
    g = t => (t ?.items ?? []).filter(h);
export {
    g as a, y as b, u as c, m as f, S as g
};