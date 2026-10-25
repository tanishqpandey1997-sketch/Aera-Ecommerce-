const l = "data-js",
    R = `[${l}]`,
    p = "data-section-id",
    E = e => {
        if (!(e instanceof Element)) return "<node>";
        const t = e.localName,
            r = e.getAttribute(p);
        return r ? `<${t} data-section-id="${r}">` : `<${t}>`
    },
    $ = e => Array.isArray(e),
    m = e => typeof e == "object" && e !== null && "ref" in e,
    h = e => typeof e == "string" || Array.isArray(e) ? {
        ref: e,
        required: !0
    } : !m(e) || typeof e.ref != "string" && !Array.isArray(e.ref) ? null : {
        ref: e.ref,
        required: e.required ?? !0
    },
    d = e => {
        const t = new Map,
            r = e.querySelectorAll(R);
        for (const o of r) {
            const n = o.getAttribute(l);
            n && (t.has(n) || t.set(n, []), t.get(n).push(o))
        }
        return t
    },
    y = (e, t) => {
        const r = t.trim();
        return r ? d(e).get(r) ?.[0] ?? null : null
    },
    T = (e, t, r = {}) => {
        if (!t) return {};
        const o = `${r.logPrefix??"[refs]"} ${E(e)}`,
            n = d(e),
            f = {};
        for (const s in t) {
            if (!Object.hasOwn(t, s)) continue;
            const g = t[s],
                i = h(g);
            if (!i) {
                console.error(`${o} Invalid ref config for "${s}"`);
                continue
            }
            const u = $(i.ref),
                a = u ? i.ref[0] : i.ref;
            if (typeof a != "string") {
                console.error(`${o} Invalid ref config for "${s}"`);
                continue
            }
            const A = a,
                c = n.get(A) ?? [];
            if (u) {
                i.required && c.length, f[s] = c;
                continue
            }
            i.required && c.length, f[s] = c[0] ?? null
        }
        return f
    };
export {
    T as c, y as f
};