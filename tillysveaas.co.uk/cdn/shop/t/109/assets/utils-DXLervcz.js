import {
    a as r,
    r as p,
    f as C
} from "./utils-fhgEClr6.js";
const G = (e, i, t, h, a) => {
    if (h === "type") return {
        active: i === t,
        completed: !!e.type,
        disabled: !1,
        hidden: !1,
        metaInfo: e.type ? [e.type.charAt(0).toUpperCase() + e.type.slice(1)] : []
    };
    if (h === "chain") {
        const n = [e.chain ?.title, e.chain ?.length ?.toString()].filter(s => !!s);
        return {
            active: i === t,
            completed: !!e.chain,
            disabled: !1,
            hidden: !1,
            metaInfo: n
        }
    }
    if (h === "connector") {
        const n = [],
            s = e.type === "bracelet";
        e.connector ? n.push(e.connector.title) : e.chain && (r(e.chain) && !p(e.chain) ? n.push(`${a.connectorOptional}`) : r(e.chain) && p(e.chain) ? n.push(`${a.connectorMandatory}`) : n.push(`${a.connectorNone}`));
        const b = s || !e.chain || !r(e.chain);
        return {
            active: i === t,
            completed: !!e.connector,
            disabled: b,
            hidden: s,
            metaInfo: n
        }
    }
    const c = t - 4,
        l = C(e),
        d = e.charms ?.filter(n => n.charmGroupIndex === c),
        o = [];
    a.maxCharms && l[c] && o.push(a.maxCharms ?.replace("{{ count }}", String(l[c].pinpoints.length))), d ?.forEach(n => {
        o.push(n.title)
    });
    const u = !e.connector && (!e.chain || p(e.chain)),
        g = e.chain ? l.length <= c : c !== 0;
    return {
        active: i === t,
        completed: !!d ?.length,
        disabled: u,
        hidden: g,
        metaInfo: o
    }
};
export {
    G as g
};