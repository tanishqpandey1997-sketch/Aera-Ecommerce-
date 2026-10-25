import {
    a as m
} from "./utils-fhgEClr6.js";
const p = (n, r) => n.type === r ? n : { ...n,
        type: r,
        chain: null,
        connector: null,
        charms: null
    },
    d = (n, r) => ({ ...n,
        chain: { ...r
        },
        connector: null,
        charms: null
    }),
    t = (n, r) => {
        if (!n.chain) return n;
        const c = n.chain.variants.find(o => o.id === r);
        return c ? { ...n,
            chain: { ...n.chain,
                length: c.length,
                variants: n.chain.variants.map(o => ({ ...o,
                    selected: o.id === r
                }))
            }
        } : n
    },
    s = (n, r) => !n.chain || !m(n.chain) ? n : { ...n,
        connector: { ...r
        },
        charms: null
    },
    l = (n, r, c) => {
        if (!n.chain) return n;
        const o = { ...r,
                pinpointId: c
            },
            e = n.charms ? [...n.charms, o] : [o];
        return { ...n,
            charms: e
        }
    },
    I = (n, r) => r.type === "chain" ? { ...n,
        chain: null,
        connector: null,
        charms: null
    } : r.type === "connector" ? { ...n,
        connector: null,
        charms: null,
        type: n.type
    } : r.type === "charm" && n.charms && r.charmGroupIndex !== void 0 ? { ...n,
        charms: n.charms.filter(c => c.productId !== r.productId || r.charmGroupIndex !== c.charmGroupIndex)
    } : n,
    a = (n, r) => {
        if (!n.charms) return n;
        const c = n.charms.findIndex(i => i.charmGroupIndex === r.source.charmGroupIndex && i.pinpointId === r.source.pinpointId),
            o = n.charms.findIndex(i => i.charmGroupIndex === r.target.charmGroupIndex && i.pinpointId === r.target.pinpointId);
        if (c < 0 || o < 0 || c === o) return n;
        const e = [...n.charms],
            u = e[c],
            h = e[o];
        return e[c] = { ...u,
            charmGroupIndex: h.charmGroupIndex,
            pinpointId: h.pinpointId
        }, e[o] = { ...h,
            charmGroupIndex: u.charmGroupIndex,
            pinpointId: u.pinpointId
        }, { ...n,
            charms: e
        }
    },
    f = {
        selectType: p,
        selectChain: d,
        updateChainLength: t,
        selectConnector: s,
        selectCharm: l,
        unselectProduct: I,
        swapCharmPositions: a
    };
export {
    f as r
};