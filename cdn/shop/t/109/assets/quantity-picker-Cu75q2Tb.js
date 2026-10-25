import "./disclose-version-DsnmJJEf.js";
import {
    c as V,
    p as z,
    a as M,
    b as x,
    s as _,
    g as N
} from "./custom-element-CoS1ay5O.js";
import {
    u as T
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";
const q = "quantity-picker:change";

function L(A, c) {
    z(c, !0);
    let m = _(0);
    const I = () => c.$$host.dataset.snapInput !== "false",
        p = t => ({
            min: parseInt(t.min, 10) || 0,
            max: t.max ? parseInt(t.max, 10) : 1 / 0,
            increment: parseInt(t.step, 10) || 1
        }),
        b = (t, n = 0) => parseInt(t || "", 10) || n,
        a = (t, n = 0) => b(t.value, n),
        d = t => {
            const {
                min: n,
                max: e,
                increment: r
            } = t;
            return Number.isFinite(e) ? e < n ? n : n + Math.floor((e - n) / r) * r : 1 / 0
        },
        o = (t, n) => {
            const {
                min: e,
                increment: r
            } = n, s = d(n);
            if (t <= e) return e;
            if (t >= s) return s;
            const y = Math.round((t - e) / r);
            return Math.min(e + y * r, s)
        },
        k = (t, n) => {
            const e = o(t, n);
            if (e <= n.min) return 0;
            const r = e - n.increment;
            return Math.max(n.min, r)
        },
        v = (t, n) => {
            const e = d(n),
                r = o(t, n),
                s = r + n.increment;
            return s > e ? r : s
        },
        {
            refs: i
        } = T({
            host: c.$$host,
            refs: {
                decreaseButton: "quantity-picker-decrease",
                increaseButton: "quantity-picker-increase",
                input: "quantity-picker-input"
            }
        }, (t, n) => {
            if (!t.input) return;
            const e = p(t.input);
            x(m, a(t.input, e.min), !0), Q(t), t.decreaseButton ?.addEventListener("click", E, {
                signal: n
            }), t.increaseButton ?.addEventListener("click", g, {
                signal: n
            }), t.input.addEventListener("input", B, {
                signal: n
            })
        }),
        u = () => i.input ? p(i.input) : null,
        h = () => {
            const t = u();
            return !t || !i.input ? 0 : a(i.input, t.min)
        },
        Q = (t = i) => {
            const {
                input: n,
                decreaseButton: e,
                increaseButton: r
            } = t;
            if (!n) return;
            const s = p(n),
                y = d(s),
                C = o(a(n, s.min), s);
            e && (e.disabled = n.disabled), r && (r.disabled = n.disabled || C >= y)
        },
        l = (t, n = !1) => {
            const e = u();
            if (!e || !i.input) return 0;
            const r = n && t === 0 ? 0 : o(t, e);
            return i.input.value = r.toString(), Q(), r
        },
        f = t => {
            const n = {
                quantity: t,
                previousQuantity: N(m)
            };
            x(m, t, !0), c.$$host.dispatchEvent(new CustomEvent(q, {
                detail: n,
                bubbles: !0
            }))
        },
        E = () => {
            const t = u();
            if (!t) return;
            const n = l(k(h(), t), !0);
            f(n)
        },
        g = () => {
            const t = u();
            if (!t) return;
            const n = h(),
                e = v(n, t);
            if (e === n) return;
            const r = l(e);
            f(r)
        },
        B = () => {
            const t = u();
            if (!t || !i.input) return;
            const n = I() ? l(a(i.input, t.min)) : a(i.input, t.min);
            f(n)
        };
    M()
}
customElements.define("quantity-picker", V(L, {}, [], [], !1));
export {
    q as Q
};