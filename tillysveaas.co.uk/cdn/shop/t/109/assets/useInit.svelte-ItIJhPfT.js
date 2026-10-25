import {
    H as f
} from "./custom-element-CoS1ay5O.js";
import {
    c as I
} from "./collectRefs-DFE6zV31.js";
const l = "__USE_INIT_INITIALIZED_COMPONENT";

function _(e) {
    return e instanceof HTMLElement && e[l] === !0
}

function h(e) {
    e[l] = !0
}

function z(e) {
    delete e[l]
}
const O = (e, r) => {
    let i = null;
    const s = {},
        a = () => {
            const t = e.host;
            return (typeof t == "function" ? t() : t) ?? null
        },
        n = () => {
            const t = a();
            if (t) {
                if (i ?.abort(), i = new AbortController, e.refs) {
                    const o = I(t, e.refs);
                    Object.assign(s, o)
                }
                r ?.(s, i.signal)
            }
        };
    return f(() => {
        const t = a();
        if (!t) return;
        const o = Object.prototype.hasOwnProperty.call(t, "reinitialize"),
            u = t ?.reinitialize ?? null;
        let c = !1;
        return typeof t.reinitialize != "function" && (t.reinitialize = n, c = !0), h(t), n(), () => {
            i ?.abort(), i = null, z(t), c && t ?.reinitialize === n && (o ? t.reinitialize = u ?? void 0 : delete t.reinitialize)
        }
    }), {
        reinitialize: n,
        getSignal: () => i ?.signal ?? null,
        refs: s
    }
};

function d(e, r) {
    return O(e, r)
}
export {
    _ as i, d as u
};