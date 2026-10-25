import {
    n as o,
    o as l,
    q as d
} from "./custom-element-CoS1ay5O.js";

function h(e, n, s) {
    if (e == null) return n(void 0), o;
    const r = l(() => e.subscribe(n, s));
    return r.unsubscribe ? () => r.unsubscribe() : r
}
const i = [];

function g(e, n) {
    return {
        subscribe: p(e, n).subscribe
    }
}

function p(e, n = o) {
    let s = null;
    const r = new Set;

    function c(u) {
        if (d(e, u) && (e = u, s)) {
            const b = !i.length;
            for (const t of r) t[1](), i.push(t, e);
            if (b) {
                for (let t = 0; t < i.length; t += 2) i[t][0](i[t + 1]);
                i.length = 0
            }
        }
    }

    function f(u) {
        c(u(e))
    }

    function a(u, b = o) {
        const t = [u, b];
        return r.add(t), r.size === 1 && (s = n(c, f) || o), u(e), () => {
            r.delete(t), r.size === 0 && s && (s(), s = null)
        }
    }
    return {
        set: c,
        update: f,
        subscribe: a
    }
}

function q(e) {
    let n;
    return h(e, s => n = s)(), n
}
const _ = g(!1, e => {
    const n = window.matchMedia("(hover: none)"),
        s = () => e(n.matches);
    return s(), n.addEventListener("change", s), () => n.removeEventListener("change", s)
});
export {
    q as g, _ as i, h as s
};