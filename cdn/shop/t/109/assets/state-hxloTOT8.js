const a = "gtm:ready",
    r = () => document.documentElement.dataset.gtmTrackingAllowed === "true",
    c = (e, t) => {
        if (r()) {
            e();
            return
        }
        document.addEventListener(a, e, {
            once: !0,
            signal: t
        })
    },
    o = () => (window.dataLayer = window.dataLayer ?? [], window.dataLayer),
    d = () => {
        const e = window.Shopify ?.currency ?.active;
        if (typeof e == "string" && e.length > 0) return e
    },
    s = (e, t) => {
        if (!r()) return;
        const n = o();
        n.push({
            ecommerce: null
        }), n.push({
            event: e,
            ecommerce: t
        })
    };
export {
    d as g, s as p, c as r
};