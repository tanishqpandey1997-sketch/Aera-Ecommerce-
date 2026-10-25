import {
    D as m
} from "./constants-DTIr96ux.js";
const g = (t, o) => {
        if (!t || !o || !t.handleElement || t.node.type !== "charm") return;
        const n = o.getBoundingClientRect(),
            e = t.imageWrapperElement.getBoundingClientRect(),
            a = t.node.attachmentPoint ?? {
                x: 0,
                y: 0
            },
            s = t.node.pinpoint ?.rotation ?? 0;
        t.handleElement.style.left = `${e.left-n.left}px`, t.handleElement.style.top = `${e.top-n.top}px`, t.handleElement.style.transform = `translate(-${a.x}%,-${a.y}%) rotate(${s}deg)`, t.handleElement.style.transformOrigin = `${a.x}% ${a.y}%`
    },
    E = (t, o, n) => {
        const e = t.rootElement,
            a = t.imageElement,
            s = t.node.attachmentPoint ?? {
                x: 0,
                y: 0
            },
            r = (t.node.pinpoint ?.rotation ?? 0) > 180 ? 360 : 0;
        !e || !a || (e.style.transform = `translate(${o}px, ${n}px)`, a.style.transform = `translate(-${s.x}%,-${s.y}%) rotate(${r}deg) scale(0.9)`)
    },
    h = (t, o) => {
        const n = t.rootElement,
            e = t.imageElement,
            a = t.node.attachmentPoint ?? {
                x: 0,
                y: 0
            },
            s = t.node.pinpoint ?.rotation ?? 0;
        !n || !e || (n.style.transition = m, n.style.transform = "translate(0px, 0px)", e.style.transform = `translate(-${a.x}%,-${a.y}%) rotate(${s}deg) scale(1)`, n.addEventListener("transitionend", () => {
            n.style.transition = "", o()
        }, {
            once: !0
        }))
    },
    P = (t, o, n) => {
        n.forEach(e => {
            const a = e.node.attachmentPoint ?? {
                    x: 0,
                    y: 0
                },
                s = e.node.pinpoint ?.rotation ?? 0;
            e === t && e.node.charmGroupIndex === o.node.charmGroupIndex ? e.imageElement.style.transform = `translate(-${a.x}%,-${a.y}%) rotate(${s}deg) scale(1.1)` : e !== o && (e.imageElement.style.transform = `translate(-${a.x}%,-${a.y}%) rotate(${s}deg)`)
        })
    },
    R = (t, o, n) => {
        if (!n) return;
        const e = (r, y) => {
                const i = r.node.attachmentPoint ?? {
                        x: 0,
                        y: 0
                    },
                    l = r.node.pinpoint ?.rotation ?? 0,
                    c = y.pinpoint ?.rotation ?? 0,
                    $ = f(l, c);
                r.imageElement.style.transform = `translate(-${i.x}%,-${i.y}%) rotate(${$}deg)`, r.imageElement.style.transformOrigin = `${i.x}% ${i.y}%`, r.imageWrapperElement.style.transformOrigin = `${i.x}% ${i.y}%`
            },
            a = (r, y, i) => {
                if (!r.slotElement) return;
                const l = y.attachmentPoint ?? {
                        x: 0,
                        y: 0
                    },
                    c = i.pinpoint ?? {
                        x: 0,
                        y: 0
                    };
                r.slotElement.style.transform = `translate(${c.x-l.x}%, ${c.y-l.y}%)`
            };
        t.rootElement.style.transition = m, t.rootElement.style.transform = "translate(0px, 0px)";
        const s = o.node,
            p = t.node;
        a(o, n, p), a(t, n, s), e(o, p), e(t, s)
    },
    f = (t, o) => {
        let n = (o - t) % 360;
        return n > 180 ? n -= 360 : n < -180 && (n += 360), t + n
    };
export {
    P as a, R as b, h as r, g as s, E as u
};