import {
    d,
    e as I
} from "./utils-fhgEClr6.js";
const m = n => {
        if (!n.chain) return null;
        const t = {
            type: "chain",
            productId: n.chain.productId,
            image: n.chain.image,
            children: [],
            pinpointGroups: n.chain.pinpointGroups
        };
        if (n.connector) {
            const p = n.chain.pinpointGroups.find(r => r.type === "connector") ?.pinpoints[0];
            if (!p) return t;
            const c = {
                type: "connector",
                productId: n.connector.productId,
                pinpoint: p,
                image: n.connector.image,
                pinpointGroups: n.connector.pinpointGroups,
                attachmentPoint: n.connector.attachmentPoint,
                children: []
            };
            return n.charms && a(n, c), t.children.push(c), t
        }
        return n.charms && a(n, t), t
    },
    a = (n, t) => {
        d(n) ?.forEach((c, r) => {
            n.charms ?.filter(i => i.charmGroupIndex === r) ?.forEach(i => {
                const e = c.pinpoints.find(u => I(u) === i.pinpointId);
                if (!e) return;
                const s = {
                    type: "charm",
                    productId: i.productId,
                    image: i.image,
                    attachmentPoint: i.attachmentPoint,
                    children: [],
                    pinpoint: e,
                    charmGroupIndex: i.charmGroupIndex,
                    pinpointId: i.pinpointId
                };
                t.children.push(s)
            })
        })
    },
    h = n => n.charmGroupIndex ? `${n.productId}-${n.charmGroupIndex}` : String(n.productId),
    G = n => {
        const t = new Map;
        if (!n) return t;
        const p = (c, r, o) => {
            t.set(r, {
                key: r,
                parentKey: o,
                node: c
            }), c.children.forEach(i => {
                const e = h(i);
                p(i, e, r)
            })
        };
        return p(n, h(n), null), t
    },
    x = (n, t) => n.type !== "charm" || t.type !== "charm" || n === t ? !1 : n.charmGroupIndex === t.charmGroupIndex;
export {
    x as c, G as f, m
};