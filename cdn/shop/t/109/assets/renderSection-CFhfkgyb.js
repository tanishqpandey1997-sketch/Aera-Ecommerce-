import {
    m as d,
    M as R
} from "./morph-CjE7B4pu.js";
import {
    c as p,
    f as w
} from "./collectRefs-DFE6zV31.js";
import {
    i as S
} from "./useInit.svelte-ItIJhPfT.js";
import "./custom-element-CoS1ay5O.js";
class i extends Error {
    data;
    constructor(t, e) {
        super(`[renderSection] ${t}`), this.data = e
    }
}
const g = (o, t) => {
        const e = o[t];
        if (!e) throw new i(`Section HTML not found "${t}"`, {
            sectionName: t
        });
        return new DOMParser().parseFromString(e, "text/html")
    },
    v = (o, t, e) => {
        const s = o.querySelector(t);
        if (!s) throw new i(`Section element not found for selector "${t}"`, {
            sectionName: e,
            selector: t
        });
        return s
    },
    x = o => {
        const t = o.querySelectorAll("*");
        for (const e of t) S(e) && e.reinitialize ?.()
    };

function N(o) {
    const {
        sections: t,
        host: e,
        refs: s,
        sectionId: a,
        morphOptions: O
    } = o;
    if (!S(e)) throw new i("Host is not a useInit-initialized component");
    if (!e.localName) throw new i("Host localName is missing");
    if (a && !(a in t)) throw new i("Section id not found in sections", {
        sectionId: a,
        availableSections: Object.keys(t)
    });
    const r = a ?? e.localName;
    if (!(r in t)) throw new i("Section name not found in sections", {
        sectionName: r,
        availableSections: Object.keys(t)
    });
    const y = g(t, r),
        m = v(y, e.localName, r),
        H = s ? p(e, s) : {},
        E = s ? p(m, s) : {},
        f = n => ({ ...R,
            ...O,
            ...n,
            childrenOnly: !1
        }),
        h = {
            section: {
                element: m,
                refs: E
            },
            host: {
                element: e,
                refs: H
            },
            morph: (n, c, l) => {
                n && c && d(n, c, f(l))
            }
        },
        u = () => {
            x(e), e.reinitialize ?.()
        };
    return {
        context: h,
        async rerender(n) {
            return Promise.resolve().then(async () => {
                n ? await n(h) : d(e, m, f()), u()
            })
        },
        async rerenderRef(n) {
            return Promise.resolve().then(() => {
                const c = w(m, n),
                    l = w(e, n);
                if (!l) throw new i(`Current element with data-js="${n}" not found in section "${r}".`, {
                    sectionName: r,
                    ref: n
                });
                c ? d(l, c, f()) : l.remove(), u()
            })
        }
    }
}
export {
    N as r
};