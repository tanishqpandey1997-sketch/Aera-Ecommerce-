import "./disclose-version-DsnmJJEf.js";
import {
    c as V,
    p as z,
    a as M,
    b as I,
    s as _,
    g as q
} from "./custom-element-CoS1ay5O.js";
import {
    u as N
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";
const T = "quantity-picker:change";

function L(A, o) {
    z(o, !0);
    let m = _(0);
    const b = () => o.$$host.dataset.snapInput !== "false",
        p = t => ({
            min: parseInt(t.min, 10) || 0,
            max: t.max ? parseInt(t.max, 10) : 1 / 0,
            increment: parseInt(t.step, 10) || 1
        }),
        k = (t, n = 0) => parseInt(t || "", 10) || n,
        a = (t, n = 0) => k(t.value, n),
        d = t => {
            const {
                min: n,
                max: e,
                increment: r
            } = t;
            return Number.isFinite(e) ? e < n ? n : n + Math.floor((e - n) / r) * r : 1 / 0
        },
        c = (t, n) => {
            const {
                min: e,
                increment: r
            } = n, i = d(n);
            if (t <= e) return e;
            if (t >= i) return i;
            const y = Math.round((t - e) / r);
            return Math.min(e + y * r, i)
        },
        v = (t, n) => {
            const r = c(t, n) - n.increment;
            return Math.max(n.min, r)
        },
        E = (t, n) => {
            const e = d(n),
                r = c(t, n),
                i = r + n.increment;
            return i > e ? r : i
        },
        {
            refs: s
        } = N({
            host: o.$$host,
            refs: {
                decreaseButton: "quantity-picker-decrease",
                increaseButton: "quantity-picker-increase",
                input: "quantity-picker-input"
            }
        }, (t, n) => {
            if (!t.input) return;
            const e = p(t.input);
            I(m, a(t.input, e.min), !0), Q(t), t.decreaseButton ?.addEventListener("click", g, {
                signal: n
            }), t.increaseButton ?.addEventListener("click", B, {
                signal: n
            }), t.input.addEventListener("input", C, {
                signal: n
            })
        }),
        u = () => s.input ? p(s.input) : null,
        h = () => {
            const t = u();
            return !t || !s.input ? 0 : a(s.input, t.min)
        },
        Q = (t = s) => {
            const {
                input: n,
                decreaseButton: e,
                increaseButton: r
            } = t;
            if (!n) return;
            const i = p(n),
                y = d(i),
                x = c(a(n, i.min), i);
            e && (e.disabled = n.disabled || x <= i.min), r && (r.disabled = n.disabled || x >= y)
        },
        l = t => {
            const n = u();
            if (!n || !s.input) return 0;
            const e = c(t, n);
            return s.input.value = e.toString(), Q(), e
        },
        f = t => {
            const n = {
                quantity: t,
                previousQuantity: q(m)
            };
            I(m, t, !0), o.$$host.dispatchEvent(new CustomEvent(T, {
                detail: n,
                bubbles: !0
            }))
        },
        g = () => {
            const t = u();
            if (!t) return;
            const n = l(v(h(), t));
            f(n)
        },
        B = () => {
            const t = u();
            if (!t) return;
            const n = h(),
                e = E(n, t);
            if (e === n) return;
            const r = l(e);
            f(r)
        },
        C = () => {
            const t = u();
            if (!t || !s.input) return;
            const n = b() ? l(a(s.input, t.min)) : a(s.input, t.min);
            f(n)
        };
    M()
}
customElements.define("quantity-picker", V(L, {}, [], [], !1));
export {
    T as Q
};