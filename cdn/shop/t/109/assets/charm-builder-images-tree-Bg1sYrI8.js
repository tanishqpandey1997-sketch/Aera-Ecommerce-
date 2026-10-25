import "./disclose-version-DsnmJJEf.js";
import {
    c as B,
    p as W,
    j as G,
    a as q,
    h as A
} from "./custom-element-CoS1ay5O.js";
import {
    p as C
} from "./props-BfMGM-PW.js";
import {
    g as z
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    s as H,
    u as j,
    a as R,
    b as U,
    r as J
} from "./drag-DqpPHY2z.js";
import {
    o as Q,
    r as V,
    a as Z,
    b as k,
    c as v,
    d as $
} from "./render-elements-Bte3oLBE.js";
import {
    m as ee,
    f as te,
    c as ne
} from "./utils-CGGikbjy.js";
import {
    u as oe
} from "./useInit.svelte-ItIJhPfT.js";
import {
    S as re
} from "./constants-DTIr96ux.js";
import "./utils-fhgEClr6.js";
import "./collectRefs-DFE6zV31.js";

function ae(se, d) {
    W(d, !0);
    let N = C(d, "enableDynamicOffset", 7, !1),
        p = C(d, "enableDragAndDrop", 7, !1),
        u = C(d, "imageSize", 7, null);
    const {
        refs: b
    } = oe({
        host: d.$$host,
        refs: {
            imagesLayer: "charm-builder-images-tree-images",
            handlesLayer: "charm-builder-images-tree-handles"
        }
    }, e => {
        u() && d.$$host.style.setProperty("--image-size", `${u()}px`), p() && e.imagesLayer ?.style.setProperty("--offset-enabled", "1")
    });
    let f = new Map;
    const m = new Map;
    let s = null;
    G(() => {
        const e = z().getForm(),
            n = e ? ee(e) : null,
            o = te(n);
        M(f, o, m), f = o, requestAnimationFrame(() => {
            p() && I(m), N() && Q(e, b.imagesLayer)
        })
    });
    const M = (e, n, o) => {
            const r = b.imagesLayer;
            if (r) {
                for (const t of e.keys()) n.has(t) || L(t, o);
                for (const [t, i] of n) {
                    const a = e.get(t);
                    e.has(t) ? a && (a.node.pinpoint ?.x !== i.node.pinpoint ?.x || a.node.pinpoint ?.y !== i.node.pinpoint ?.y) && (L(t, o), S(t, i, n, o, r, !1)) : S(t, i, n, o, r)
                }
            }
        },
        S = (e, n, o, r, t, i = !0) => {
            const {
                node: a,
                parentKey: c
            } = n, l = V(), E = Z(a), D = k(a, E, i);
            l.append(D);
            let g = null;
            if (c === null) t.append(l);
            else {
                const h = r.get(c),
                    w = o.get(c);
                if (!h || !w) return;
                g = v(w.node, a), g.append(l), h.rootElement.append(g)
            }
            const y = a.type === "charm" && p() ? $(a, e, h => {
                x(h, e, m)
            }) : null;
            y && b.handlesLayer ?.append(y);
            const _ = {
                rootElement: l,
                slotElement: g,
                imageWrapperElement: D,
                imageElement: E,
                handleElement: y,
                node: a
            };
            r.set(e, _);
            const P = () => {
                H(_, d.$$host)
            };
            y && (requestAnimationFrame(() => requestAnimationFrame(P)), E.addEventListener("load", P, {
                once: !0
            }), D.addEventListener("transitionend", P, {
                once: !0
            }))
        },
        L = (e, n) => {
            const o = n.get(e);
            o && (o.slotElement ? o.slotElement.remove() : o.rootElement.remove(), o.handleElement ?.remove(), n.delete(e))
        },
        I = e => {
            e.values().forEach(n => {
                H(n, d.$$host)
            })
        },
        O = () => {
            I(m)
        },
        x = (e, n, o) => {
            if (e.button !== 0) return;
            const r = o.get(n),
                t = r ?.handleElement;
            if (!r || !t) return;
            e.preventDefault(), H(r, d.$$host), s = {
                sourceKey: n,
                sourceHandle: t,
                sourceNode: r,
                pointerId: e.pointerId,
                startClientX: e.clientX,
                startClientY: e.clientY
            }, t.setPointerCapture(e.pointerId);
            const i = new AbortController,
                a = i.signal;
            t.addEventListener("pointermove", l => {
                l.pointerId === e.pointerId && T(l)
            }, {
                signal: a
            });
            const c = l => {
                l.pointerId === e.pointerId && (X(l, o), i.abort())
            };
            t.addEventListener("pointerup", c, {
                signal: a
            }), t.addEventListener("pointercancel", c, {
                signal: a
            }), t.addEventListener("lostpointercapture", c, {
                signal: a
            })
        },
        T = e => {
            if (!s || s.pointerId !== e.pointerId) return;
            j(s.sourceNode, e.clientX - s.startClientX, e.clientY - s.startClientY);
            const n = K(e.clientX, e.clientY, s.sourceHandle),
                o = n ? m.get(n) : null;
            R(o ?? null, s.sourceNode, m)
        },
        X = (e, n) => {
            if (!s || s.pointerId !== e.pointerId) return;
            const o = s.sourceKey,
                r = n.get(o),
                t = K(e.clientX, e.clientY, s.sourceHandle),
                i = t ? n.get(t) : null,
                a = t ? f.get(t ?? "") : null,
                c = a ?.parentKey ? f.get(a.parentKey) : null;
            if (!i || !r || !ne(r.node, i.node)) {
                F(n);
                return
            }
            U(r, i, c ?.node), setTimeout(() => {
                z() ?.swapCharmPositions({
                    source: {
                        charmGroupIndex: r.node.charmGroupIndex,
                        pinpointId: r.node.pinpointId
                    },
                    target: {
                        charmGroupIndex: i.node.charmGroupIndex,
                        pinpointId: i.node.pinpointId
                    }
                }), F(n)
            }, re)
        },
        K = (e, n, o) => document.elementsFromPoint(e, n).map(t => t.closest('[data-js="charm-builder-images-tree-drag-handle"]')).find(t => t && t !== o) ?.dataset.nodeKey ?? null,
        F = e => {
            s && (J(s.sourceNode, () => {
                I(e)
            }), s = null)
        };
    var Y = {
        syncHandlePositionsWithMountedNodes: O,
        get enableDynamicOffset() {
            return N()
        },
        set enableDynamicOffset(e = !1) {
            N(e), A()
        },
        get enableDragAndDrop() {
            return p()
        },
        set enableDragAndDrop(e = !1) {
            p(e), A()
        },
        get imageSize() {
            return u()
        },
        set imageSize(e = null) {
            u(e), A()
        }
    };
    return q(Y)
}
customElements.define("charm-builder-images-tree", B(ae, {
    enableDynamicOffset: {
        attribute: "enable-dynamic-offset",
        type: "Boolean"
    },
    enableDragAndDrop: {
        attribute: "enable-drag-and-drop",
        type: "Boolean"
    },
    imageSize: {
        attribute: "image-size",
        type: "Number"
    }
}, [], ["syncHandlePositionsWithMountedNodes"], !1));