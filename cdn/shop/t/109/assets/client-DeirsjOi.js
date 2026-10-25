const u = (t, e) => t instanceof Error ? t : new Error(e),
    l = async (t, e, a) => await new Promise((n, s) => {
        const w = window.setTimeout(() => {
                s(new Error(a))
            }, e),
            r = () => {
                window.clearTimeout(w)
            };
        t(i => {
            r(), n(i)
        }, i => {
            r(), s(i)
        })
    }),
    d = async (t, e) => await l(t, 45e3, e),
    _ = t => !!(t ?.fetchLists || t ?.fetchListDetails || t ?.generateSharedListURL || t ?.markListPublic || t ?.api ?.generateSharedListURL || t ?.api ?.markListPublic),
    c = () => [window.swat, window._swat, window.SwymStorefrontLayoutContext ?.swat].find(_) ?? null,
    L = (t, e) => t[e] ?? t.api ?.[e],
    m = async () => {
        const t = c();
        return t || await new Promise((e, a) => {
            let n = !1;
            const s = () => {
                    window.clearTimeout(i), window.clearInterval(S)
                },
                w = o => {
                    n || (n = !0, s(), e(o))
                },
                r = o => {
                    n || (n = !0, s(), a(o))
                },
                i = window.setTimeout(() => {
                    r(new Error("Swym SDK did not load in time"))
                }, 45e3),
                S = window.setInterval(() => {
                    const o = c();
                    o && w(o)
                }, 250);
            window.SwymCallbacks = window.SwymCallbacks || [], window.SwymCallbacks.push(w)
        })
    };
export {
    L as a, d as c, m as g, u as t, l as w
};