const i = e => e ? e.variants.find(t => t.selected) ?? e.variants[0] : null,
    h = e => {
        let t = `${new Date().getTime()}`;
        return e.chain && (t += `-${e.chain.productId}`), e.connector && (t += `-${e.connector.productId}`), e.charms ?.forEach(n => {
            t += `-${n.productId}`
        }), t
    },
    a = (e, t) => ({
        key: t.key,
        type: t.type,
        title: e.title,
        image: e.featuredImage,
        price: t.price,
        variantId: t.variantId,
        color: t.color ?? e.color,
        length: t.length ?? e.length
    }),
    l = e => {
        const n = i(e.chain) ?.price ?? e.chain ?.price ?? 0,
            c = e.connector ?.price ?? 0,
            r = e.charms ?.reduce((d, p) => d + p.price, 0) ?? 0;
        return n + c + r
    },
    s = (e, t) => `${t}${e.toFixed(2)}`,
    o = (e, t, n) => t <= 0 ? e : `${e} - ${s(t,n)}`,
    u = e => {
        const t = [],
            n = i(e.chain);
        return e.chain && t.push(a(e.chain, {
            key: `chain-${e.chain.productId}`,
            type: "chain",
            price: n ?.price ?? e.chain.price,
            variantId: n ?.id ?? e.chain.variantId,
            length: e.type === "bracelet" ? "" : n ?.length ?? e.chain.length
        })), e.connector && t.push(a(e.connector, {
            key: `connector-${e.connector.productId}`,
            type: "connector",
            price: e.connector.price,
            variantId: e.connector.variantId
        })), e.charms ?.forEach((c, r) => {
            t.push(a(c, {
                key: `charm-${c.productId}-${c.charmGroupIndex}-${c.pinpointId}-${r}`,
                type: "charm",
                price: c.price,
                variantId: c.variantId
            }))
        }), t
    },
    I = e => {
        const t = h(e);
        return u(e).map(n => ({
            id: String(n.variantId),
            quantity: 1,
            properties: {
                _bundle_id: t,
                _bundle_type: e.chain ?.chainType ?? "necklace"
            }
        }))
    };
export {
    l as a, I as b, u as c, s as f, o as g
};