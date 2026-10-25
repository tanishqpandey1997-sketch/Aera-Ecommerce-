function f(r, l) {
    return typeof r != "number" || !Number.isFinite(r) || r <= 0 ? l : r
}

function g(r) {
    return typeof r != "number" || !Number.isFinite(r) || r < 1 ? 50 : Math.floor(r)
}

function T(r = {}) {
    const l = f(r.ttlMs, 3e4),
        d = g(r.maxEntries),
        t = new Map,
        i = new Map,
        o = () => {
            const e = Date.now();
            for (const [n, s] of t.entries()) s.expiresAt <= e && t.delete(n);
            for (; t.size > d;) {
                const n = t.keys().next().value;
                if (n === void 0) break;
                t.delete(n)
            }
        };
    return {
        get(e) {
            o();
            const n = t.get(e);
            if (n) return t.delete(e), t.set(e, n), n.value
        },
        getPending(e) {
            return i.get(e)
        },
        set(e, n, s) {
            const u = f(s, l);
            t.delete(e), t.set(e, {
                value: n,
                expiresAt: Date.now() + u
            }), o()
        },
        setPending(e, n) {
            i.set(e, n)
        },
        delete(e) {
            t.delete(e), i.delete(e)
        },
        deletePending(e) {
            i.delete(e)
        },
        clear() {
            t.clear(), i.clear()
        },
        prune: o,
        getOrFetch(e, n, s = {}) {
            const u = i.get(e);
            if (u) return u;
            if (!s.skipCache) {
                o();
                const c = t.get(e);
                if (c) return t.delete(e), t.set(e, c), Promise.resolve(c.value)
            }
            const a = n();
            return i.set(e, a), a.then(c => {
                s.skipCache || (t.delete(e), t.set(e, {
                    value: c,
                    expiresAt: Date.now() + l
                }), o())
            }).catch(() => {}).finally(() => {
                i.delete(e)
            }), a
        }
    }
}
export {
    T as c
};