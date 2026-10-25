const n = "script[data-gtm-item]",
    a = r => {
        try {
            const t = JSON.parse(r.textContent ?? "");
            return !t ?.variant_id || !t ?.item_id || !t ?.item_name ? null : t
        } catch (t) {
            return console.error("[gtm] Failed to parse GTM item payload", t), null
        }
    },
    u = r => {
        if (!r) return null;
        const t = r.querySelector(n);
        return t ? a(t) : null
    },
    o = r => Array.from(r.querySelectorAll(n)).map(a).filter(t => t !== null),
    c = r => o(document).find(t => String(t.variant_id) === String(r)) ?? null,
    l = (r, t = r.quantity ?? 1) => ({ ...r,
        quantity: t
    }),
    m = r => r.reduce((t, e) => {
        const i = e.price ?? 0,
            s = e.quantity ?? 1;
        return t + i * s
    }, 0);
export {
    o as a, c as f, m as g, u as r, l as w
};