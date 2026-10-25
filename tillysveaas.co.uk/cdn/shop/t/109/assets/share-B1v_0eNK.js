import {
    a as n,
    c,
    t as s
} from "./client-DeirsjOi.js";
const m = async (t, a) => {
        const e = n(t, "generateSharedListURL");
        if (!e) throw new Error("Swym share API is unavailable");
        return await c((o, r) => {
            e(a, o, i => r(s(i, "Swym generateSharedListURL failed")))
        }, `Swym generateSharedListURL timed out for "${a}"`)
    },
    d = async (t, a) => {
        const e = n(t, "markListPublic");
        if (!e) throw new Error("Swym markListPublic API is unavailable");
        await c((o, r) => {
            e(a, () => o(), i => r(s(i, "Swym markListPublic failed")))
        }, `Swym markListPublic timed out for "${a}"`)
    },
    y = async (t, a, e) => {
        await d(t, a);
        const o = new URL(await m(t, a), window.location.origin),
            r = new URL(e, window.location.origin);
        return o.searchParams.forEach((i, l) => {
            r.searchParams.set(l, i)
        }), r.toString()
    },
    u = async t => {
        try {
            await navigator.clipboard.writeText(t);
            return
        } catch {
            const a = document.createElement("textarea");
            a.value = t, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.opacity = "0", document.body.appendChild(a), a.select();
            const e = document.execCommand("copy");
            if (a.remove(), !e) throw new Error("Fallback clipboard copy failed")
        }
    };
export {
    y as b, u as c
};