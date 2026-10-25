const h = n => n.pinpointGroups.some(t => t.type === "connector"),
    G = n => n.pinpointGroups.every(t => t.type === "connector"),
    l = n => n.connector ? n.connector.pinpointGroups.filter(r => r.type === "charm") : n.chain ? n.chain.pinpointGroups.filter(r => r.type === "charm") : [],
    f = n => n.connector ? n.connector.pinpointGroups.filter(t => t.type === "charm") : n.chain ? n.chain.pinpointGroups.filter(t => t.type === "charm") : [],
    u = (n, t) => f(n)[t],
    a = n => `${n.x}-${n.y}`,
    m = (n, t) => {
        if (!n.charms) return !0;
        const r = u(n, t);
        if (!r) return !1;
        const s = n.charms.filter(i => i.charmGroupIndex === t).length,
            e = r.pinpoints.length;
        return s < e
    },
    g = (n, t) => {
        const r = [...n.pinpoints].sort((e, i) => e.x - i.x);
        if (r.length === 0) return;
        const s = Math.floor((r.length - 1) / 2);
        for (let e = 0; e < r.length; e++) {
            if (e === 0) {
                const o = r[s],
                    c = a(o);
                if (!t.has(c)) return o;
                continue
            }
            const i = s - e;
            if (i >= 0) {
                const o = r[i],
                    c = a(o);
                if (!t.has(c)) return o
            }
            const p = s + e;
            if (p < r.length) {
                const o = r[p],
                    c = a(o);
                if (!t.has(c)) return o
            }
        }
    },
    P = (n, t) => {
        const r = u(n, t);
        if (!r) return null;
        const s = new Set((n.charms ?? []).filter(i => i.charmGroupIndex === t).map(i => i.pinpointId)),
            e = g(r, s);
        return e ? a(e) : null
    },
    y = (n, t) => {
        if (!n.type) return null;
        if (t === 1) return 2;
        if (!n.chain) return null;
        if (t === 1) return h(n.chain) ? 2 : 3;
        if (t == 2) return n.type === "bracelet" ? 4 : 3;
        const r = l(n).length;
        return t == 3 && r > 1 ? 4 : null
    },
    C = n => n.charms ? n.charms.length > 0 : !1;
export {
    h as a, P as b, m as c, f as d, a as e, l as f, y as g, C as h, u as i, G as r
};