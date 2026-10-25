import {
    D as o,
    d as p,
    g as _,
    b as D,
    e as b,
    f as m,
    i as E
} from "./custom-element-CoS1ay5O.js";

function x(d, t, h, n) {
    var a = n,
        f = !0,
        s = () => (f && (f = !1, a = n), a),
        i;
    i = d[t], i === void 0 && n !== void 0 && (i = s());
    var v;
    v = () => {
        var r = d[t];
        return r === void 0 ? s() : (f = !0, r)
    };
    var u = !1,
        e = p(() => (u = !1, v()));
    o && (e.label = t);
    var c = b;
    return (function(r, g) {
        if (arguments.length > 0) {
            const l = g ? _(e) : r;
            return D(e, l), u = !0, a !== void 0 && (a = l), r
        }
        return E && u || (c.f & m) !== 0 ? e.v : _(e)
    })
}
export {
    x as p
};