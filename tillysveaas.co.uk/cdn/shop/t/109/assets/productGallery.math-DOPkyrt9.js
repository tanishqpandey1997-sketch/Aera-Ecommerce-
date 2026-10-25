const T = 3;
const E = 32,
    _ = 280;
const e = (t, s, a) => Math.min(Math.max(t, s), a),
    c = (t, s) => (t % s + s) % s,
    M = (t, s) => Number.isNaN(t) ? 0 : e(t, 0, s - 1),
    I = ({
        deltaX: t,
        deltaY: s,
        shiftKey: a
    }) => a && t === 0 ? s : Math.abs(t) > Math.abs(s) * 1.2 ? t : 0,
    f = (t, s) => e(t - 1, 0, s - 3),
    L = (t, s) => ({
        left: Math.max(t.offsetLeft - s.offsetLeft, 0),
        top: Math.max(t.offsetTop - s.offsetTop, 0)
    }),
    N = (t, s, a, o) => {
        const n = Math.abs(s - t);
        return o ? Math.min(n, a - n) : n
    };
export {
    T as M, E as W, _ as a, f as b, L as c, M as d, N as e, I as g, c as n
};