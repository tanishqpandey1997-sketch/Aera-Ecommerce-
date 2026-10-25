var privacyBanner = function(n) {
    "use strict";
    var t = function() {
        return t = Object.assign || function(n) {
            for (var t, e = 1, o = arguments.length; e < o; e++)
                for (var r in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }, t.apply(this, arguments)
    };

    function e(n, t, e, o) {
        return new(e || (e = Promise))(function(r, i) {
            function a(n) {
                try {
                    s(o.next(n))
                } catch (n) {
                    i(n)
                }
            }

            function c(n) {
                try {
                    s(o.throw(n))
                } catch (n) {
                    i(n)
                }
            }

            function s(n) {
                var t;
                n.done ? r(n.value) : (t = n.value, t instanceof e ? t : new e(function(n) {
                    n(t)
                })).then(a, c)
            }
            s((o = o.apply(n, t || [])).next())
        })
    }

    function o(n, t) {
        var e, o, r, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = c(0), a.throw = c(1), a.return = c(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(c) {
            return function(s) {
                return function(c) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                        if (e = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
                        switch (o = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                            case 0:
                            case 1:
                                r = c;
                                break;
                            case 4:
                                return i.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = c[1], c = [0];
                                continue;
                            case 7:
                                c = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                    i.label = c[1];
                                    break
                                }
                                if (6 === c[0] && i.label < r[1]) {
                                    i.label = r[1], r = c;
                                    break
                                }
                                if (r && i.label < r[2]) {
                                    i.label = r[2], i.ops.push(c);
                                    break
                                }
                                r[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        c = t.call(n, i)
                    } catch (n) {
                        c = [6, n], o = 0
                    } finally {
                        e = r = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, s])
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    const r = () => "undefined" == typeof window,
        i = () => "undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__;
    class a {}
    a.warn = n => {
        i() || console.warn(n)
    }, a.error = n => {
        i() || console.error(n)
    }, a.info = n => {
        i() || console.info(n)
    }, a.debug = n => {
        i() || console.debug(n)
    }, a.trace = n => {
        i() || console.trace(n)
    };
    const c = a;

    function s(n, t) {
        if (null === n) return "null";
        if (Array.isArray(n)) {
            return `[${n.map(n=>s(n,!0)).join(",")}]`
        }
        if ("object" == typeof n) {
            let e = [];
            for (const t in n) n.hasOwnProperty(t) && void 0 !== n[t] && e.push(`${t}:${s(n[t],!0)}`);
            const o = e.join(",");
            return t ? `{${o}}` : o
        }
        return "string" == typeof n ? JSON.stringify(n) : `${n}`
    }

    function l(n, ...t) {
        if (0 === t.length) return n;
        const e = t[0];
        return n[e] || (n[e] = {}), l(n[e], ...t.slice(1))
    }

    function d(n) {
        try {
            return decodeURIComponent(n)
        } catch (n) {
            return ""
        }
    }

    function u() {
        if (!r()) return window
    }

    function p() {
        var n, t;
        return !r() && Boolean(null === (n = u()) || void 0 === n || null === (t = n.Shopify) || void 0 === t ? void 0 : t.theme)
    }

    function f() {
        var n;
        return !r() && Boolean(null === (n = u()) || void 0 === n ? void 0 : n.__CUSTOMER_ACCOUNT__)
    }

    function h() {
        try {
            return "undefined" != typeof PerformanceServerTiming
        } catch {
            return !1
        }
    }
    class m extends TypeError {
        constructor(n) {
            super(n), this.name = "ConsentValidationError", Object.setPrototypeOf(this, m.prototype)
        }
    }
    const g = "trackingConsentAccepted",
        y = "trackingConsentDeclined",
        v = "firstPartyMarketingConsentAccepted",
        b = "thirdPartyMarketingConsentAccepted",
        x = "analyticsConsentAccepted",
        C = "preferencesConsentAccepted",
        w = "firstPartyMarketingConsentDeclined",
        k = "thirdPartyMarketingConsentDeclined",
        _ = "analyticsConsentDeclined",
        I = "preferencesConsentDeclined",
        T = "visitorConsentCollected",
        D = "consentTrackingApiLoaded",
        E = "yes",
        A = "no",
        S = "no_interaction",
        B = "",
        O = "",
        P = "1",
        R = "0",
        H = "p",
        M = "a",
        N = "m",
        L = "t",
        j = "m",
        q = "a",
        F = "p",
        $ = "s",
        U = "marketing",
        W = "analytics",
        V = "preferences",
        z = "sale_of_data",
        J = "email",
        G = "headlessStorefront",
        X = "rootDomain",
        K = "checkoutRootDomain",
        Q = "storefrontRootDomain",
        Y = "storefrontAccessToken",
        Z = "isExtensionToken",
        nn = "metafields",
        tn = "customerAccountRequestInfo",
        en = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    function on(n, t) {
        if ("string" != typeof n) return;
        if (! function(n) {
                return !!n && en.test(n.trim().toLowerCase())
            }(n)) return;
        const e = n.trim();
        if ("00000000-0000-0000-0000-000000000000" === e) return;
        if ("00000000-0000-0000-5000-000000000000" === e) return;
        return Number.isFinite(NaN) && Date.now() > NaN ? void 0 : e
    }
    const rn = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

    function an(n) {
        return rn.replace(/[xy]/g, t => {
            const e = n();
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function cn() {
        const n = "undefined" != typeof crypto ? crypto : void 0;
        if ("function" == typeof(null == n ? void 0 : n.randomUUID)) return n.randomUUID();
        if ("function" == typeof(null == n ? void 0 : n.getRandomValues)) {
            const t = n.getRandomValues(new Uint8Array(36));
            let e = 0;
            return an(() => t[e++] % 16)
        }
        return an(() => 16 * Math.random() | 0)
    }
    const sn = "_tracking_consent";

    function ln() {
        try {
            return document.cookie
        } catch {
            return !1
        }
    }

    function dn() {
        return function(n) {
            const t = ln() ? document.cookie.split("; ") : [];
            for (let e = 0; e < t.length; e++) {
                const [o, r] = t[e].split("=");
                if (n === d(o)) return d(r)
            }
        }(sn)
    }

    function un(n) {
        return n === encodeURIComponent(d(n))
    }

    function pn(n, t, e, o) {
        if (!un(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!un(n)) throw new TypeError("Cookie name is not correctly URI encoded.");
        let r = `${n}=${o}`;
        r += "; path=/", t && (r += `; domain=${t}`), r += `; expires=${new Date((new Date).getTime()+e).toUTCString()}`, document.cookie = r
    }
    const fn = ["_shopify_y", "_shopify_s", sn];

    function hn() {
        if (r() || ! function() {
                const n = ln();
                return !!n && n.split(";").some(n => fn.includes(n.split("=")[0].trim()))
            }()) return;
        const n = window.location.hostname.split("."),
            t = ["", ...n.map((t, e) => n.slice(e).join("."))];
        for (const n of fn)
            for (const e of t) try {
                pn(n, e, -1, "")
            } catch {}
    }
    class mn {
        constructor() {
            if (mn.instance) return mn.instance;
            mn.instance = this
        }
        produce(n, t) {
            if (!r()) try {
                const e = {
                        schema_id: "customer_privacy_api_events/2.0",
                        payload: {
                            shop_domain: window.location.host,
                            method_name: n,
                            call_details: t || null
                        }
                    },
                    o = {
                        accept: "*/*",
                        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                        "content-type": "application/json; charset=utf-8",
                        "x-monorail-edge-event-created-at-ms": String(Date.now()),
                        "x-monorail-edge-event-sent-at-ms": String(Date.now())
                    };
                if (!window.location.host.endsWith("spin.dev")) return fetch("https://monorail-edge.shopifysvc.com/v1/produce", {
                    headers: o,
                    body: JSON.stringify(e),
                    method: "POST",
                    mode: "cors",
                    credentials: "omit"
                }).catch(() => {});
                console.log("Monorail event from consent API:", o, e)
            } catch (n) {}
        }
    }

    function gn() {
        var n, t;
        return r() ? {} : (null === (n = window.Shopify) || void 0 === n || null === (t = n.customerPrivacy) || void 0 === t ? void 0 : t.config) || {}
    }
    mn.instance = void 0;
    const yn = /^https?:\/\/([^/]+)(\/api\/(?:unstable|2\d{3}-\d{2})\/graphql\.json(?=$|\?))?/;

    function vn(n, t) {
        if ("fetch" !== n.initiatorType) return !1;
        const e = n.name.match(yn);
        if (!e) return !1;
        const [, o, r] = e;
        return o === t || !!r && !(null == o || !o.endsWith(`.${t}`))
    }
    const bn = "_cmp",
        xn = "consentHeader";

    function Cn(n) {
        if (!r()) {
            try {
                n = decodeURIComponent(n)
            } catch {}
            try {
                sessionStorage.setItem(xn, n)
            } catch {}
        }
    }

    function wn(n = bn) {
        let t;
        if (t = En() && kn(() => function(n = bn) {
                var t, e;
                if (r()) return;
                const o = null === (t = performance) || void 0 === t || null === (e = t.getEntriesByType) || void 0 === e ? void 0 : e.call(t, "resource"),
                    i = window.location.host;
                let a = In[n];
                for (let t = o.length - 1; t >= 0; t--) {
                    const e = o[t];
                    if (!vn(e, i)) continue;
                    const r = Tn(e, n);
                    if (r) {
                        a = r;
                        break
                    }
                }
                return In[n] = a, a
            }(n)) || kn(() => _n(n)), !t) {
            if (n !== bn) return;
            let t;
            try {
                t = sessionStorage.getItem(xn)
            } catch {}
            return t || void 0
        }
        try {
            t = decodeURIComponent(t)
        } catch {}
        return t
    }

    function kn(n) {
        try {
            return n()
        } catch {
            return
        }
    }

    function _n(n = bn) {
        var t, e;
        if (!An() && ! function() {
                try {
                    const n = performance.getEntriesByType("navigation")[0].serverTiming;
                    return !!n && 0 != n.length
                } catch {
                    return !1
                }
            }()) {
            const n = new mn;
            let t = "failed_to_fetch";
            try {
                t = navigator.userAgent
            } catch {}
            n.produce("navigationServerTiming", JSON.stringify({
                    failed: !0,
                    userAgent: t,
                    apiSupported: h()
                })),
                function() {
                    if (An()) return;
                    l(u(), "Shopify", "customerPrivacy").serverTimingSupportVerified = !0
                }()
        }
        const o = null === (t = performance) || void 0 === t || null === (e = t.getEntriesByType) || void 0 === e ? void 0 : e.call(t, "navigation");
        if (!o) return;
        const r = o.map(t => Tn(t, n)).find(n => n);
        return r && n === bn && Cn(r), r
    }
    const In = {};

    function Tn(n, t = bn) {
        var e, o;
        if (n) return null === (e = n.serverTiming) || void 0 === e || null === (o = e.find(n => n.name == t)) || void 0 === o ? void 0 : o.description
    }

    function Dn() {
        var n, t;
        const e = u();
        return !0 === (null == e || null === (n = e.Shopify) || void 0 === n || null === (t = n.customerPrivacy) || void 0 === t ? void 0 : t.backendConsentEnabled) || !0 === gn().asyncVisitorState
    }

    function En() {
        return !r() && (Dn() || !p() && !f() && ! function() {
            if (r()) return !1;
            try {
                return null !== document.querySelector('meta[name="serialized-trackingConsent"]')
            } catch {
                return !1
            }
        }())
    }

    function An() {
        var n, t;
        const e = u();
        return null == e || null === (n = e.Shopify) || void 0 === n || null === (t = n.customerPrivacy) || void 0 === t ? void 0 : t.serverTimingSupportVerified
    }

    function Sn() {
        if (!r()) {
            var n, t;
            const e = (null === (n = window.Shopify) || void 0 === n || null === (t = n.customerPrivacy) || void 0 === t ? void 0 : t.injectedConsent) || gn().injectedConsent;
            return e ? d(e) : void 0
        }
    }

    function Bn() {
        var n;
        if (!r()) return null === (n = window.Shopify) || void 0 === n ? void 0 : n.customerPrivacy
    }

    function On() {
        var n;
        return null === (n = Bn()) || void 0 === n ? void 0 : n.consentStatus
    }

    function Pn(n) {
        const t = Bn();
        t && (t.consentStatus = n)
    }

    function Rn() {
        Mn(D)
    }

    function Hn(n, t) {
        void 0 !== n.granular_consent && function(n) {
            Pn("loaded");
            const t = n[N],
                e = n[L],
                o = n[M],
                r = n[H];
            !0 === t ? Mn(v) : !1 === t && Mn(w);
            !0 === e ? Mn(b) : !1 === e && Mn(k);
            !0 === o ? Mn(x) : !1 === o && Mn(_);
            !0 === r ? Mn(C) : !1 === r && Mn(I);
            const i = function(n) {
                const t = {
                    marketingAllowed: n[N],
                    saleOfDataAllowed: n[L],
                    analyticsAllowed: n[M],
                    preferencesAllowed: n[H],
                    firstPartyMarketingAllowed: n[N],
                    thirdPartyMarketingAllowed: n[L]
                };
                return t
            }(n);
            Mn(T, i);
            const a = [o, r, t, e];
            a.every(n => !0 === n) && Mn(g);
            a.every(n => !1 === n) && Mn(y)
        }(t)
    }

    function Mn(n, t) {
        if (!r()) try {
            document.dispatchEvent(new CustomEvent(n, {
                detail: t || {}
            }))
        } catch (t) {
            console.error(`[Shopify Customer Privacy] Error in event listener for "${n}":`, t)
        }
    }

    function Nn() {
        let n;
        if (n = r() ? Sn() : function() {
                var n, t;
                const e = null === (n = window.Shopify) || void 0 === n || null === (t = n.customerPrivacy) || void 0 === t ? void 0 : t.cachedConsent;
                return e ? d(e) : void 0
            }() || Sn() || new URLSearchParams(window.location.search).get("_cs") || void 0 || dn() || wn(), void 0 !== n) return $n(n)
    }

    function Ln() {
        try {
            let n = Nn();
            if (!n) return;
            return n
        } catch {
            return
        }
    }

    function jn() {
        return {
            m: Vn(j),
            a: Vn(q),
            p: Vn(F),
            s: Vn($)
        }
    }

    function qn() {
        return jn()[$]
    }

    function Fn(n = null) {
        return null === n && (n = Ln()), void 0 === n
    }

    function $n(n) {
        if ("%" == n.slice(0, 1)) try {
            n = decodeURIComponent(n)
        } catch {}
        const t = n.slice(0, 1);
        return "{" == t ? function(n) {
            var t;
            let e;
            try {
                e = JSON.parse(n)
            } catch {
                return
            }
            if ("2.1" !== e.v) return;
            if (null === (t = e.con) || void 0 === t || !t.CMP) return;
            return e
        }(n) : "3" == t ? function(n) {
            const t = n.slice(1).split("_"),
                [e, o, r, i, a] = t;
            let c, s;
            try {
                c = t[5] ? JSON.parse(t.slice(5).join("_")) : void 0
            } catch {}
            if (a) {
                const n = a.replace(/\*/g, "/").replace(/-/g, "+"),
                    t = atob(n);
                let e = "";
                for (let n = 0; n < t.length; n++) {
                    const o = t.charCodeAt(n).toString(16);
                    e += 1 === o.length ? "0" + o : o
                }
                s = [8, 13, 18, 23].reduce((n, t) => n.slice(0, t) + "-" + n.slice(t), e)
            }

            function l(n) {
                const t = e.split(".")[0];
                return t.includes(n.toLowerCase()) ? R : t.includes(n.toUpperCase()) ? P : O
            }

            function d(n) {
                return e.includes(n.replace("t", "s").toUpperCase())
            }
            return {
                v: "3",
                con: {
                    CMP: {
                        [q]: l(q),
                        [F]: l(F),
                        [j]: l(j),
                        [$]: l($)
                    }
                },
                region: o || "",
                cus: c,
                purposes: {
                    [M]: d(M),
                    [H]: d(H),
                    [N]: d(N),
                    [L]: d(L)
                },
                sale_of_data_region: "t" == i,
                display_banner: "t" == r,
                consent_id: s
            }
        }(n) : void 0
    }

    function Un(n) {
        switch (n) {
            case P:
                return E;
            case R:
                return A;
            default:
                return B
        }
    }

    function Wn(n) {
        switch (n) {
            case q:
                return W;
            case j:
                return U;
            case F:
                return V;
            case $:
                return z
        }
    }

    function Vn(n) {
        const t = Ln();
        if (!t) return O;
        const e = t.con.CMP;
        return e ? e[n] : O
    }

    function zn(n) {
        const t = Ln();
        if (!t || !t.purposes) return !0;
        const e = t.purposes[n];
        return "boolean" != typeof e || e
    }

    function Jn() {
        return zn(H)
    }

    function Gn() {
        return zn(M)
    }

    function Xn() {
        return zn(N)
    }

    function Kn() {
        return zn(L)
    }

    function Qn() {
        const n = Ln();
        return !!n && ("boolean" == typeof n.display_banner && n.display_banner)
    }

    function Yn() {
        const n = Ln();
        return n && n.sale_of_data_region || !1
    }
    const Zn = "v1.1";

    function nt(n, t) {
        const e = u();
        if (!e) return;
        const o = l(e, "Shopify", "customerPrivacy", "cachedToken");
        if (t) {
            const e = "_shopify_s" === n ? 18e5 : 31536e6;
            o[n] = t, o[n + "_expires_at"] = Date.now() + e
        } else delete o[n], delete o[n + "_expires_at"]
    }

    function tt(n, t) {
        if (!n) return;
        const e = function(n) {
            const t = new URL(n, window.location.origin),
                e = ot(n) ? et(t) : et(t).replace(window.location.origin, ""),
                o = document.querySelectorAll(`a[href^="${e}"]`),
                r = document.querySelectorAll(`a[href*="${window.location.hostname}/customer_authentication"]`),
                i = new Set,
                a = [];
            for (let n = 0; n < o.length; n++) i.has(o[n]) || (i.add(o[n]), a.push(o[n]));
            for (let n = 0; n < r.length; n++) i.has(r[n]) || (i.add(r[n]), a.push(r[n]));
            return a
        }(n);
        if (e.length)
            for (let o = 0; o < e.length; o++) {
                const r = e[o],
                    i = r.getAttribute("href");
                if (!i) continue;
                const a = new URL(i, window.location.origin);
                a.searchParams.set("_cs", t);
                const c = ot(n) ? a.toString() : a.toString().replace(window.location.origin, "");
                r.setAttribute("href", c)
            }
    }

    function et(n) {
        return `${n.origin}${t=n.pathname,t.replace(/\/$/,"")}`;
        var t
    }

    function ot(n) {
        return n.startsWith("http://") || n.startsWith("https://")
    }
    const rt = "Shopify-Storefront-Consent-Management";

    function it(n) {
        return "" === n ? void 0 : n
    }

    function at(n) {
        const t = n.granular_consent;
        return {
            query: `query { consentManagement { cookies(${s({visitorConsent:{marketing:it(t.marketing),analytics:it(t.analytics),preferences:it(t.preferences),saleOfData:it(t.sale_of_data),...t.metafields&&{metafields:t.metafields}},...t.email&&{visitorEmail:t.email},origReferrer:it(n.referrer),landingPage:it(n.landing_page)})}) { trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie shopifyUnique shopifyVisit } customerAccountUrl } }`,
            variables: {}
        }
    }

    function ct(n, t, e, o) {
        const r = t.granular_consent;
        let a = "",
            s = {};
        if (r.customerAccountRequestInfo) a = r.customerAccountRequestInfo.url, s = r.customerAccountRequestInfo.headers;
        else {
            const t = gn(),
                o = r.storefrontAccessToken || t.storefrontAccessToken || function() {
                    if (!0 === gn().isHeadless) return;
                    try {
                        const n = document.documentElement.querySelector("#shopify-features"),
                            t = "Could not find liquid access token";
                        if (!n) return void c.warn(t);
                        const e = n.textContent;
                        if (!e) return void c.warn(t);
                        let o;
                        try {
                            o = JSON.parse(e).accessToken
                        } catch {
                            return void c.warn(t)
                        }
                        return o || void c.warn(t)
                    } catch {
                        return void c.warn("Could not find liquid access token")
                    }
                }();
            a = `${/^(localhost|127\.0\.0\.1)(:|$)/.test(n)?"http:":"https:"}//${n}/api/unstable/graphql.json`;
            const i = r.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token";
            s = o ? {
                [i]: o
            } : {}, e && (s = { ...s,
                ...e()
            })
        }
        const l = {
            headers: {
                "content-type": "application/json",
                ...!0 === gn().asyncConsent && new URL(a).origin === window.location.origin && {
                    [rt]: "1"
                },
                ...s,
                ...i() ? {
                    "x-test-payload": JSON.stringify(t)
                } : {}
            },
            body: JSON.stringify(at(t)),
            method: "POST"
        };
        let d;
        try {
            d = fetch(a, l)
        } catch (n) {
            d = Promise.reject(n)
        }
        return d.then(n => {
            try {
                null == o || o(n)
            } catch {}
            if (n.ok) return n.json(); {
                const t = new Error("Server error");
                throw t.cause = {
                    status: n.status
                }, t
            }
        })
    }
    let st;

    function lt(n, t, e, o = {}) {
        const r = gn().consentDomain || t.granular_consent.checkoutRootDomain || window.location.host;
        const i = () => ct(r, t, o.getVisitorTokenHeaders, o.onResponse).then(n => {
            var r, i;
            const a = null == n || null === (r = n.data) || void 0 === r ? void 0 : r.consentManagement;
            if (!a) {
                var c;
                const t = (null !== (c = null == n ? void 0 : n.errors) && void 0 !== c ? c : []).map(n => null == n ? void 0 : n.message).filter(Boolean).join("; ");
                throw new Error(t ? `GraphQL error: ${t}` : "GraphQL response missing consentManagement")
            }
            const s = a.cookies.cookieDomain,
                u = a.cookies.trackingConsentCookie,
                p = a.cookies.shopifyUnique,
                f = a.cookies.shopifyVisit,
                h = null !== (i = a.customerAccountUrl) && void 0 !== i ? i : "";
            if (!0 === gn().asyncConsent && u && ! function(n) {
                    try {
                        return void 0 !== $n(d(n))
                    } catch {
                        return !1
                    }
                }(u)) throw new Error("Consent response contains unreadable consent");
            var m, g;
            if (u && (m = u, l(window, "Shopify", "customerPrivacy").cachedConsent = m, !0 !== gn().asyncConsent && Cn(u)), nt("_shopify_y", p), nt("_shopify_s", f), !0 === gn().asyncConsent) null !== (g = n.errors) && void 0 !== g && g.length || !u || Fn() || hn();
            else if (function(n) {
                    return n.granular_consent.headlessStorefront
                }(t) && !Dn()) {
                const n = 31536e6,
                    e = t.granular_consent,
                    o = s || e.checkoutRootDomain || window.location.hostname,
                    r = e.storefrontRootDomain || s || window.location.hostname;
                pn(sn, o, n, u), r !== o && pn(sn, r, n, u)
            }
            return !1 !== o.emitEvents && Hn(t, {
                [H]: Jn(),
                [M]: Gn(),
                [N]: Xn(),
                [L]: Kn()
            }), tt(h, u), void 0 !== e && e(null, n), n
        }).catch(n => {
            var t;
            const o = "Error while setting storefront API consent: " + n.message,
                r = null === (t = n.cause) || void 0 === t ? void 0 : t.status,
                i = {
                    error: o
                };
            if (void 0 !== r && (i.statusCode = r), void 0 === e) throw i;
            e(i)
        });
        if (!0 !== gn().asyncConsent) return i();
        const a = st = st ? st.then(i, i) : i(),
            c = () => {
                st === a && (st = void 0)
            };
        return a.then(c, c), a
    }
    const dt = [U, W, V, z],
        ut = [...dt, J, X, K, Q, Y, G, Z, nn, tn],
        pt = dt.map(n => `"${n}"`).join(", "),
        ft = "https://shopify.dev/docs/api/customer-privacy";

    function ht(n, t) {
        if (r()) throw new Error("setTrackingConsent is not supported in Node.js environments. This function requires browser APIs (XHR, cookies, window) and can only be called client-side.");
        const e = new mn;
        if (Gn() && e.produce("setTrackingConsent", Zn), function(n) {
                if ("boolean" != typeof n && "object" != typeof n) throw new m(`setTrackingConsent received an invalid argument of type "${typeof n}". Expected an object with consent keys. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ft} for documentation.`);
                if ("object" == typeof n) {
                    const t = Object.keys(n);
                    if (0 === t.length) throw new m(`The submitted consent object is empty. Expected at least one consent key: ${pt}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ft} for documentation.`);
                    for (const n of t)
                        if (!ut.includes(n)) throw new m(`The submitted consent object contains an invalid key: "${n}". Valid keys are: ${pt}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ft} for documentation.`)
                }
            }(n), void 0 !== t && "function" != typeof t) throw new m(`setTrackingConsent received an invalid callback of type "${typeof t}". The second argument must be a function if provided. Example: setTrackingConsent({ analytics: true }, (error, result) => { ... }). See ${ft} for documentation.`);
        const o = function(n) {
                if (!n) return null;
                try {
                    return yt() ? document.referrer : ""
                } catch {
                    return ""
                }
            }(n.analytics),
            i = function(n) {
                if (!n) return null;
                if (!yt()) return "/";
                try {
                    return window.location.pathname + window.location.search
                } catch {
                    return "/"
                }
            }(n.analytics);
        return lt(0, {
            granular_consent: n,
            ...null !== o && {
                referrer: o
            },
            ...null !== i && {
                landing_page: i
            }
        }, t)
    }

    function mt() {
        const n = new mn;
        if (Gn() && n.produce("getTrackingConsent", Zn), Fn()) return B;
        const t = jn();
        return t[j] === P && t[q] === P ? E : t[j] === R || t[q] === R ? A : S
    }

    function gt() {
        return function() {
            const n = Ln();
            return Fn(n) ? "" : n.region || ""
        }()
    }

    function yt() {
        try {
            if ("" === document.referrer) return !0;
            const n = document.createElement("a");
            return n.href = document.referrer, window.location.hostname != n.hostname
        } catch {
            return !0
        }
    }

    function vt() {
        return !!Fn() || Xn() && Gn()
    }

    function bt() {
        return Yn() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function xt() {
        return Qn() && mt() === S
    }

    function Ct() {
        return !1 === bt() ? A : (n = qn(), Fn() ? B : n === O ? S : Un(n));
        var n
    }

    function wt() {
        return !0
    }

    function kt(n) {
        return function(n) {
            const t = Ln();
            if (Fn(t) || !t.cus) return;
            const e = t.cus[encodeURIComponent(n)];
            return e ? decodeURIComponent(e) : e
        }(n)
    }

    function _t() {
        const n = {},
            t = jn();
        for (const e of Object.keys(t)) n[Wn(e)] = Un(t[e]);
        return n
    }

    function It() {
        return function() {
            const n = Ln();
            return n && n.consent_id || ""
        }()
    }

    function Tt(n) {
        if (!r()) try {
            var t, e;
            return null === (t = document.querySelector(`meta[name="${n}"]`)) || void 0 === t || null === (e = t.getAttribute("content")) || void 0 === e ? void 0 : e.trim()
        } catch {
            return
        }
    }

    function Dt(n) {
        const t = Tt(n);
        if (t) try {
            const n = JSON.parse(t);
            return "string" == typeof n ? n.trim() : void 0
        } catch {
            return
        }
    }

    function Et(n) {
        return void 0 !== n && Date.now() > n
    }

    function At(n, t) {
        const e = on(Dt(t));
        if (e && !Et(function(n) {
                const t = Dt(`${n}Expiration`);
                if (!t) return;
                const e = Number(t);
                return Number.isFinite(e) ? e : void 0
            }(t))) return e;
        const o = on(Tt(n));
        return o && !Et(function(n) {
            if (!r()) try {
                var t, e;
                const o = null === (t = document.querySelector(`meta[name="${n}"]`)) || void 0 === t || null === (e = t.getAttribute("data-expiration")) || void 0 === e ? void 0 : e.trim();
                if (!o) return;
                const r = Number(o);
                return Number.isFinite(r) ? r : void 0
            } catch {
                return
            }
        }(n)) ? o : void 0
    }

    function St(n) {
        return "_shopify_y" === n ? At("shopify-y", "serialized-shopifyY") : "_shopify_s" === n ? At("shopify-s", "serialized-shopifyS") : void 0
    }
    let Bt, Ot = class n {
        constructor() {
            if (this.endpoint = "https://otlp-http-production.shopifysvc.com/v1/metrics", this.serviceName = "consent-tracking-api", this.scopeName = "consent-tracking-api-opentelemetry", n.instance) return n.instance;
            n.instance = this
        }
        increment(n, t = {}) {
            if (!r() && n) try {
                const e = this.buildMetricBody(n, t);
                if (window.location.host.endsWith("spin.dev")) return void console.log("OpenTelemetry metric from consent API:", e);
                if ("function" != typeof fetch) return;
                return fetch(this.endpoint, {
                    headers: {
                        accept: "*/*",
                        "content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify(e),
                    method: "POST",
                    mode: "cors",
                    credentials: "omit"
                }).catch(() => {})
            } catch (n) {}
        }
        buildMetricBody(n, t) {
            const e = 1e6 * Date.now();
            return {
                resourceMetrics: [{
                    resource: {
                        attributes: [{
                            key: "service.name",
                            value: {
                                stringValue: this.serviceName
                            }
                        }]
                    },
                    scopeMetrics: [{
                        scope: {
                            name: this.scopeName,
                            version: "1.1.0",
                            attributes: []
                        },
                        metrics: [{
                            name: n,
                            unit: "1",
                            sum: {
                                aggregationTemporality: 1,
                                isMonotonic: !0,
                                dataPoints: [{
                                    asDouble: 1,
                                    startTimeUnixNano: e,
                                    timeUnixNano: e,
                                    attributes: Pt(t)
                                }]
                            }
                        }]
                    }]
                }]
            }
        }
    };

    function Pt(n) {
        return Object.keys(n).reduce((t, e) => {
            const o = n[e];
            return null == o || t.push({
                key: e,
                value: Rt(o)
            }), t
        }, [])
    }

    function Rt(n) {
        return "string" == typeof n ? {
            stringValue: n
        } : "boolean" == typeof n ? {
            boolValue: n
        } : isFinite(n) ? Math.floor(n) === n ? {
            intValue: n
        } : {
            doubleValue: n
        } : {
            stringValue: String(n)
        }
    }

    function Ht() {
        var n;
        return null !== (n = Bt) && void 0 !== n ? n : Bt = new Ot
    }
    Ot.instance = void 0;

    function Mt(n, t) {
        try {
            if (Math.random() >= .01) return;
            Ht().increment("consent_tracking_api_tracking_token_read", {
                token: n,
                source: t
            })
        } catch {}
    }
    const Nt = {};

    function Lt(n) {
        if (!En()) return;
        const t = function(n) {
            try {
                var t, e;
                const i = null === (t = performance) || void 0 === t || null === (e = t.getEntriesByType) || void 0 === e ? void 0 : e.call(t, "resource");
                if (!i) return;
                const a = window.location.host;
                for (let t = i.length - 1; t >= 0; t--) {
                    var o, r;
                    const e = i[t];
                    if (!vn(e, a)) continue;
                    const c = null === (o = e.serverTiming) || void 0 === o || null === (r = o.find(t => t.name === n)) || void 0 === r ? void 0 : r.description;
                    if (c) return c
                }
                return
            } catch {
                return
            }
        }(n);
        return t && (Nt[n] = t), t
    }

    function jt(n) {
        return Lt(n) || function(n) {
            if (En()) return Nt[n]
        }(n) || function(n) {
            try {
                var t, e, o, r;
                return null === (t = performance) || void 0 === t || null === (e = t.getEntriesByType("navigation")[0]) || void 0 === e || null === (o = e.serverTiming) || void 0 === o || null === (r = o.find(t => t.name == n)) || void 0 === r ? void 0 : r.description
            } catch {
                return
            }
        }(n)
    }

    function qt() {
        const n = document.querySelector('[data-serialized-id="app-base-path"]');
        if (f() || n) {
            var t;
            const e = document.querySelector('[data-serialized-id="preview-mode-data"]');
            if ("/" !== JSON.parse((null == n ? void 0 : n.textContent) || "null") || !1 !== (null === (t = JSON.parse((null == e ? void 0 : e.textContent) || "null")) || void 0 === t ? void 0 : t.inPreviewMode)) return;
            return new URL("/customer/api/unstable/graphql", window.location.origin).href
        }
        const {
            protocol: e,
            host: o
        } = function() {
            const n = gn().consentDomain || window.location.host;
            return {
                protocol: /^(localhost|127\.0\.0\.1)(:|$)/.test(n) ? "http:" : "https:",
                host: n
            }
        }();
        return `${e}//${o}/api/unstable/graphql.json`
    }
    async function Ft(n) {
        try {
            var t, e;
            if (Math.random() > .01) return;
            let o = null;
            if (n) try {
                const t = await n.json();
                o = Array.isArray(null == t ? void 0 : t.errors) && t.errors.length > 0
            } catch {}
            Ht().increment("consent_tracking_api_persist", {
                ok: String(!(null == n || !n.ok)),
                status: String(null !== (t = null == n ? void 0 : n.status) && void 0 !== t ? t : "none"),
                graphql_errors: String(o)
            }), (new mn).produce("persistOutcome", JSON.stringify({
                ok: !(null == n || !n.ok),
                status: null !== (e = null == n ? void 0 : n.status) && void 0 !== e ? e : null,
                graphqlErrors: o,
                sampleRate: .01
            }))
        } catch {}
    }

    function $t(n, t, e) {
        if (!0 === gn().asyncConsent && "loaded" !== On()) return;
        ! function(n) {
            var t, e;
            Ht().increment("consent_tracking_api_tracking_token_missing");
            const o = u();
            (new mn).produce("trackingTokenMissing", JSON.stringify({
                token: n,
                hasTrekkie: !(null == o || !o.ShopifyAnalytics),
                hasTheme: !(null == o || null === (t = o.Shopify) || void 0 === t || !t.theme),
                domain: null == o || null === (e = o.location) || void 0 === e ? void 0 : e.hostname
            }))
        }(n);
        const o = t ? void 0 : cn(),
            i = e ? void 0 : cn();
        return o && nt("_shopify_y", o), i && nt("_shopify_s", i),
            function(n, t) {
                if (!r()) try {
                    const e = on(n),
                        o = on(t);
                    if (!e && !o) return;
                    const r = qt();
                    if (!r) return;
                    const i = new URLSearchParams,
                        a = {
                            "content-type": "application/json"
                        };
                    e && (i.set("_y", e), a["X-Shopify-UniqueToken"] = e), o && (i.set("_s", o), a["X-Shopify-VisitToken"] = o);
                    const c = `${r}?${i.toString()}`;
                    let s;
                    try {
                        s = fetch(c, {
                            headers: a,
                            body: JSON.stringify({
                                query: "query { consentManagement { cookies(visitorConsent:{}) { cookieDomain } } }",
                                variables: {}
                            }),
                            method: "POST",
                            mode: "cors",
                            credentials: "include"
                        })
                    } catch (n) {
                        s = Promise.reject(n)
                    }
                    s.then(n => Ft(n), () => Ft(void 0))
                } catch {}
            }(o, i), "_shopify_y" === n ? o : i
    }

    function Ut(n, {
        generateFallback: t = !1
    } = {}) {
        if (t && r()) throw new Error("Token generateFallback is not supported in Node.js environments, just browsers.");
        if (!Gn() && !Xn()) return;
        const e = function(n) {
            var t, e, o, r, i, a;
            const c = u();
            if (!c) return;
            const s = null === (t = c.Shopify) || void 0 === t || null === (e = t.customerPrivacy) || void 0 === e || null === (o = e.cachedToken) || void 0 === o ? void 0 : o[n],
                l = null === (r = c.Shopify) || void 0 === r || null === (i = r.customerPrivacy) || void 0 === i || null === (a = i.cachedToken) || void 0 === a ? void 0 : a[n + "_expires_at"];
            return !s || !l || l < (new Date).getTime() ? void 0 : on(s)
        }(n);
        if (e) return Mt(n, "window_cache"), e;
        if (function() {
                const n = u();
                if (null == n || !n.ShopPay) return !1;
                try {
                    const t = Object(n.ShopPay);
                    return Reflect.has(t, "trackingUnique") || Reflect.has(t, "trackingVisit")
                } catch {
                    return !1
                }
            }()) {
            const t = function(n) {
                const t = u();
                if (!t || !t.ShopPay) return;
                const e = {
                    _shopify_y: "trackingUnique",
                    _shopify_s: "trackingVisit"
                }[n];
                if (!e) return;
                return on(t.ShopPay[e])
            }(n);
            return Mt(n, "shop_pay"), t
        }
        const o = St(n);
        if (o) return Mt(n, "meta"), o;
        const i = function(n) {
            const t = n.replace("_shopify", ""),
                e = jt(t),
                o = Number(jt(`${t}e`));
            if (!o || Date.now() / 1e3 < o) return on(e)
        }(n);
        if (i) return Mt(n, "server_timing"), i;
        const a = function(n) {
            try {
                var t, e, o, r;
                return on(null === (t = document.cookie) || void 0 === t || null === (e = t.split(";")) || void 0 === e || null === (o = e.find(t => t.trim().startsWith(`${n}=`))) || void 0 === o || null === (r = o.split("=")[1]) || void 0 === r ? void 0 : r.trim())
            } catch {
                return
            }
        }(n);
        if (a) return Mt(n, "cookie"), a;
        if (Mt(n, "missing"), t) try {
            const t = Wt({
                generateFallback: !1
            });
            return $t(n, t, Vt({
                generateFallback: !1
            }))
        } catch {}
    }

    function Wt({
        generateFallback: n = !1
    } = {}) {
        return Ut("_shopify_y", {
            generateFallback: n
        })
    }

    function Vt({
        generateFallback: n = !1
    } = {}) {
        return Ut("_shopify_s", {
            generateFallback: n
        })
    }
    const zt = "95ba910bcec4542ef2a0b64cd7ca666c";

    function Jt(n, t, e) {
        try {
            var o;
            ! function(n) {
                const t = new XMLHttpRequest;
                t.open("POST", "https://error-analytics-production.shopifysvc.com", !0), t.setRequestHeader("Content-Type", "application/json"), t.setRequestHeader("Bugsnag-Api-Key", zt), t.setRequestHeader("Bugsnag-Payload-Version", "5");
                const e = function(n) {
                    var t;
                    const e = function(n) {
                        return n ? n.stackTrace || n.stack || n.description || n.name : void 0
                    }(n.error);
                    let o, r;
                    if (null !== (t = n.error) && void 0 !== t && t.name) {
                        var i, a;
                        o = n.error.name, r = null !== (i = null === (a = n.error) || void 0 === a ? void 0 : a.message) && void 0 !== i ? i : ""
                    } else {
                        const t = (e || "unknown error").split("\n")[0],
                            i = t.indexOf(":");
                        var c, s, l;
                        if (i > 0) o = t.substring(0, i).trim(), r = t.substring(i + 1).trim();
                        else o = t.trim() || "unknown error", r = (null === (c = n.error) || void 0 === c ? void 0 : c.message) || (null === (s = n.error) || void 0 === s ? void 0 : s.error) || (null === (l = n.error) || void 0 === l ? void 0 : l.toString()) || "No error message available"
                    }
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: o,
                                message: r,
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: e
                                }],
                                type: "browserjs"
                            }],
                            context: "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(n);
                t.send(e)
            }({
                error: n,
                context: null != t ? t : "",
                shopId: Xt() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: null != e ? e : ""
            })
        } catch (n) {}
    }

    function Gt(n) {
        return (...t) => {
            try {
                return n(...t)
            } catch (n) {
                throw n instanceof m || Jt(n), n
            }
        }
    }

    function Xt() {
        try {
            var n;
            const t = null === (n = document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return t ? JSON.parse(t).shopId : null
        } catch (n) {
            return null
        }
    }

    function Kt() {
        return Xn()
    }

    function Qt() {
        return Gn()
    }

    function Yt() {
        return Jn()
    }

    function Zt() {
        return Kn()
    }

    function ne(n = {
        useBugsnagReporting: !1
    }) {
        return (({
            useBugsnagReporting: n
        }) => {
            qn() != R && !1 === bt() && ht({
                sale_of_data: !1
            }, () => !1);
            const t = {
                analyticsProcessingAllowed: Gn,
                currentVisitorConsent: _t,
                doesMerchantSupportGranularConsent: wt,
                firstPartyMarketingAllowed: Kt,
                getCCPAConsent: Ct,
                getRegion: gt,
                getTrackingConsent: mt,
                getTrackingConsentMetafield: kt,
                marketingAllowed: Kt,
                preferencesProcessingAllowed: Jn,
                saleOfDataAllowed: Zt,
                saleOfDataRegion: Yn,
                setTrackingConsent: ht,
                shouldShowBanner: Qn,
                shouldShowGDPRBanner: xt,
                thirdPartyMarketingAllowed: Zt,
                userCanBeTracked: vt,
                consentId: It,
                unstable: {},
                __internal: {
                    uniqueToken: Wt,
                    visitToken: Vt
                },
                __metadata__: {
                    name: "@shopify/consent-tracking-api",
                    version: Zn,
                    description: "Shopify Consent Tracking API"
                },
                config: gn()
            };
            if (!n) return t;
            const e = t;
            for (const n in e)
                if (e.hasOwnProperty(n)) {
                    const t = e[n];
                    "function" == typeof t && (e[n] = Gt(t))
                }
            return t
        })(n)
    }
    let te;

    function ee() {
        const n = Wt(),
            t = Vt();
        return { ...n ? {
                "X-Shopify-UniqueToken": n
            } : {},
            ...t ? {
                "X-Shopify-VisitToken": t
            } : {}
        }
    }

    function oe() {
        if (r()) return;
        if (te) return te;
        const n = On();
        if ("loading" === n) return;
        if ("loaded" === n) return;
        const t = !0 === gn().asyncConsent;
        if (!Fn() && (!t || !dn())) return void Pn("loaded");
        if (!t) return;
        Pn("loading");
        const e = lt(0, {
            granular_consent: {}
        }, void 0, {
            emitEvents: !1,
            getVisitorTokenHeaders: Dn() ? ee : void 0
        }).then(() => {
            Pn("loaded")
        });
        return te = e, e.then(() => {
            te === e && (te = void 0)
        }, () => {
            "loading" === On() && Pn(void 0), te === e && (te = void 0)
        }), e
    }
    var re, ie, ae, ce, se, le;
    ! function() {
        try {
            var n, t, e, o, i;
            if (r() || p()) return;
            if ("function" != typeof(null === (n = performance) || void 0 === n ? void 0 : n.setResourceTimingBufferSize)) return;
            if ((null !== (t = null === (e = (o = performance).getEntriesByType) || void 0 === e || null === (i = e.call(o, "resource")) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) >= 1e3) return;
            performance.setResourceTimingBufferSize(1e3)
        } catch {}
    }(),
    function(n) {
        n.BottomCenter = "bottom_center", n.BottomFullWidth = "bottom_full_width", n.BottomLeft = "bottom_left", n.BottomRight = "bottom_right", n.Center = "center"
    }(re || (re = {})),
    function(n) {
        n.Custom = "custom", n.Dark = "dark", n.Light = "light"
    }(ie || (ie = {})),
    function(n) {
        n[n.Yes = 1] = "Yes", n[n.No = 0] = "No"
    }(ae || (ae = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__banner__styles", n.DialogId = "shopify-pc__banner", n.DialogClass = "shopify-pc__banner__dialog", n.WrapperClass = "shopify-pc__banner__wrapper", n.BodyClass = "shopify-pc__banner__body", n.BodyTitleId = "shopify-pc__banner__body-title", n.BodyCopyPolicyLinkId = "shopify-pc__banner__body-policy-link", n.ButtonsClass = "shopify-pc__banner__btns", n.ButtonsGranularClass = "shopify-pc__banner__btns-granular", n.ButtonAcceptId = "shopify-pc__banner__btn-accept", n.ButtonAcceptClass = "shopify-pc__banner__btn-accept", n.ButtonDeclineId = "shopify-pc__banner__btn-decline", n.ButtonDeclineClass = "shopify-pc__banner__btn-decline", n.ButtonManagePrefsId = "shopify-pc__banner__btn-manage-prefs", n.ButtonManagePrefsClass = "shopify-pc__banner__btn-manage-prefs", n.FocusTargetId = "shopify-pc__banner__focus-target"
    }(ce || (ce = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__prefs__styles", n.OverlayId = "shopify-pc__prefs__overlay", n.OverlayClass = "shopify-pc__prefs__overlay", n.WrapperId = "shopify-pc__prefs", n.WrapperClass = "shopify-pc__prefs", n.DialogId = "shopify-pc__prefs__dialog", n.DialogClass = "shopify-pc__prefs__dialog", n.DialogScrollableClass = "shopify-pc__prefs__scrollable", n.HeaderTitleId = "shopify-pc__prefs__header-title", n.HeaderActionsClass = "shopify-pc__prefs__header-actions", n.HeaderSaveId = "shopify-pc__prefs__header-save", n.HeaderAcceptId = "shopify-pc__prefs__header-accept", n.HeaderDeclineId = "shopify-pc__prefs__header-decline", n.HeaderCloseId = "shopify-pc__prefs__header-close", n.HeaderCloseClass = "shopify-pc__prefs__header-close", n.IntroClass = "shopify-pc__prefs__intro", n.IntroMainClass = "shopify-pc__prefs__intro-main", n.IntroExplainWrapperClass = "shopify-pc__prefs__intro-explain", n.IntroExplainAcceptClass = "shopify-pc__prefs__intro-explain-accept", n.IntroExplainDeclineClass = "shopify-pc__prefs__intro-explain-decline", n.OptionWrapperClass = "shopify-pc__prefs__options", n.OptionClass = "shopify-pc__prefs__option", n.OptionEssentialId = "shopify-pc__prefs__essential", n.OptionEssentialInputId = "shopify-pc__prefs__essential-input", n.OptionMarketingId = "shopify-pc__prefs__marketing", n.OptionMarketingInputId = "shopify-pc__prefs__marketing-input", n.OptionAnalyticsId = "shopify-pc__prefs__analytics", n.OptionAnalyticsInputId = "shopify-pc__prefs__analytics-input", n.OptionPreferencesId = "shopify-pc__prefs__preferences", n.OptionPreferencesInputId = "shopify-pc__prefs__preferences-input"
    }(se || (se = {})),
    function(n) {
        n.Black = "#333", n.White = "#fff", n.Gray = "#ccc", n.Green = "#3AA83A", n.LightGray = "#F7F8F9", n.DarkGray = "#36454F", n.VeryDarkGray = "#666", n.VeryLightGray = "#e5e5e5"
    }(le || (le = {}));
    var de = ["ar", "he", "ur"];

    function ue(n) {
        if (!n) return !1;
        var t = n.toLowerCase().replace(/_/g, "-").split("-")[0];
        return -1 !== de.indexOf(t)
    }
    var pe = function(n) {
        return "\n    border: 1px solid ".concat(n.button.borderColor, ";\n    color: ").concat(n.button.fontColor, ";\n    background: ").concat(n.button.backgroundColor, ";\n  ")
    };

    function fe(n, t, e, o) {
        void 0 === t && (t = "0,0,100,100"), void 0 === e && (e = "0,0,0,100"), void 0 === o && (o = "0,0,100,100");
        var r = n.split(","),
            i = r[0],
            a = r[1],
            c = r[2],
            s = r[3],
            l = t.split(","),
            d = l[0],
            u = l[1],
            p = l[2],
            f = l[3],
            h = e.split(","),
            m = h[0],
            g = h[1],
            y = h[2],
            v = h[3],
            b = o.split(","),
            x = b[0],
            C = b[1],
            w = b[2],
            k = b[3],
            _ = {
                hue: Number(i),
                saturation: Number(a),
                lightness: Number(c),
                alpha: Number(s)
            },
            I = {
                hue: Number(d),
                saturation: Number(u),
                lightness: Number(p),
                alpha: Number(f)
            },
            T = {
                hue: Number(m),
                saturation: Number(g),
                lightness: Number(y),
                alpha: Number(v)
            },
            D = {
                hue: Number(x),
                saturation: Number(C),
                lightness: Number(w),
                alpha: Number(k)
            },
            E = {
                hue: _.hue,
                saturation: _.saturation,
                lightness: _.lightness,
                alpha: _.alpha - 10
            },
            A = {
                hue: I.hue,
                saturation: I.saturation,
                lightness: I.lightness < 50 ? I.lightness + 14 : I.lightness - 12,
                alpha: I.alpha
            },
            S = {
                hue: 201,
                saturation: I.lightness < 50 ? 60 : 90,
                lightness: I.lightness < 50 ? 60 : 80,
                alpha: I.lightness < 50 ? 80 : 100
            };
        return {
            font: he(_),
            fontSubdued: he(E),
            buttonFont: he(T),
            buttonBackground: he(D),
            background: he(I),
            divider: he(A),
            focused: he(S)
        }
    }

    function he(n) {
        return "hsl(".concat(n.hue, "deg, ").concat(n.saturation, "%, ").concat(n.lightness, "%, ").concat(n.alpha, "%)")
    }

    function me(n, t, e, o, r) {
        var i = "0,0,0,100",
            a = "0,0,100,100",
            c = fe("0,0,12,100", "0,0,100,100", "0,0,12,100", "0,0,100,100"),
            s = fe("0,0,100,87", "0,0,12,100", "0,0,100,87", "0,0,12,100"),
            l = fe(null != t ? t : i, null != e ? e : a, null != o ? o : i, null != r ? r : a),
            d = function() {
                switch (n) {
                    case ie.Light:
                        return c;
                    case ie.Dark:
                        return s;
                    case ie.Custom:
                        return l;
                    default:
                        return c
                }
            }();
        return {
            backgroundColor: d.background,
            fontColor: d.font,
            fontSubduedColor: d.fontSubdued,
            sectionDivider: d.divider,
            iconColor: d.font,
            focused: d.focused,
            button: {
                borderColor: d.buttonFont,
                backgroundColor: d.buttonBackground,
                fontColor: d.buttonFont
            },
            primaryButton: {
                borderColor: d.buttonBackground,
                backgroundColor: d.buttonFont,
                fontColor: d.buttonBackground
            }
        }
    }

    function ge(n) {
        var t = n.bannerData,
            e = n.selectorPrefix,
            o = n.locale,
            r = e ? "".concat(e, " ") : "",
            i = ue(o),
            a = me(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor);
        return "\n    ".concat(r, ".").concat(se.WrapperClass, " {\n      position: relative;\n    }\n    ").concat(r, ".").concat(se.WrapperClass, ':after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n\n    ').concat(r, ".").concat(se.DialogClass, " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: fixed;\n      z-index: 2000002;\n      opacity: 1;\n      background-color: ").concat(a.backgroundColor, ";\n      max-height: 80%;\n      overflow-y: auto;\n      top: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: 25%;\n      width: 50%;\n      /* left is a fallback for Edge Legacy, which drops text-align: start */\n      text-align: left;\n      text-align: start;\n    }\n    @media only screen and (max-width: 1900px) {\n      ").concat(r, ".").concat(se.DialogClass, " {\n        left: 20%;\n        width: 60%;\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      ").concat(r, ".").concat(se.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      ").concat(r, ".").concat(se.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n\n    ").concat(r, ".").concat(se.OverlayClass, " {\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n\n    /* Header */\n\n    ").concat(r, ".").concat(se.DialogClass, " header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid ").concat(a.sectionDivider, ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(r, ".").concat(se.DialogClass, " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(r, ".").concat(se.DialogClass, " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    ").concat(r, ".").concat(se.DialogClass, " header h2 {\n      color: ").concat(a.fontColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      text-align: start;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(r, ".").concat(se.DialogClass, " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: center;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(r, ".").concat(se.DialogClass, " header h2 {\n        text-align: left;\n        text-align: start;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    ").concat(r, ".").concat(se.HeaderCloseClass, " {\n      position: absolute;\n      top: 40px;\n      right: 35px;\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    ").concat(r, ".").concat(se.HeaderCloseClass, " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(r, ".").concat(se.HeaderCloseClass, " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(r, ".").concat(se.HeaderCloseClass, " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(r, ".").concat(se.HeaderCloseClass, " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    ").concat(r, ".").concat(se.HeaderCloseClass, ":hover {\n      cursor: pointer;\n    }\n    ").concat(r, ".").concat(se.HeaderCloseClass, ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px ").concat(a.focused, ";\n    }\n    ").concat(r, ".").concat(se.HeaderCloseClass, " svg path {\n      fill: ").concat(a.fontColor, ";\n    }\n    ").concat(r, ".").concat(se.HeaderCloseClass, ":disabled svg path {\n      fill: ").concat(a.sectionDivider, ";\n    }\n\n    ").concat(r, ".").concat(se.HeaderActionsClass, " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: row;\n      padding: 0 50px 0 0;\n      width: auto;\n    }\n\n    @media only screen and (max-width: 750px) {\n      ").concat(r, ".").concat(se.HeaderActionsClass, " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(r, ".").concat(se.HeaderActionsClass, " {\n        padding: 0;\n      }\n    }\n    ").concat(r, ".").concat(se.HeaderActionsClass, " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: ").concat(a.button.backgroundColor, ";\n      color: ").concat(a.button.fontColor, ";\n      border: 1px solid ").concat(a.button.borderColor, ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(r, ".").concat(se.HeaderActionsClass, " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    ").concat(r, ".").concat(se.HeaderActionsClass, " button.primary {\n      background: ").concat(a.primaryButton.backgroundColor, ";\n      color: ").concat(a.primaryButton.fontColor, ";\n      border: 1px solid ").concat(a.primaryButton.borderColor, ";\n    }\n    ").concat(r, ".").concat(se.HeaderActionsClass, " button:last-child {\n      margin-right: 0;\n    }\n    ").concat(r, ".").concat(se.HeaderActionsClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(r, ".").concat(se.HeaderActionsClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(a.focused, ";\n    }\n\n    ").concat(r, ".").concat(se.DialogScrollableClass, " {\n      overflow-y: auto;\n      position: relative;\n    }\n\n    ").concat(r, ".").concat(se.DialogScrollableClass, "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    ").concat(r, ".").concat(se.IntroClass, " h3 {\n      color: ").concat(a.fontColor, ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n      text-align: start;\n    }\n    ").concat(r, ".").concat(se.IntroClass, " p {\n      color: ").concat(a.fontSubduedColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(r, ".").concat(se.IntroClass, " ul {\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(r, ".").concat(se.IntroClass, " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    ").concat(r, ".").concat(se.IntroMainClass, " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(r, ".").concat(se.IntroMainClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(r, ".").concat(se.IntroMainClass, " p {\n      padding-bottom: 20px;\n    }\n    ").concat(r, ".").concat(se.IntroMainClass, " h3 {\n      font-size: 110%;\n    }\n    ").concat(r, ".").concat(se.IntroMainClass, " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(r, ".").concat(se.IntroExplainWrapperClass, " {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: ").concat(a.fontSubduedColor, ";\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(r, ".").concat(se.IntroExplainWrapperClass, " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(r, ".").concat(se.IntroExplainWrapperClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(r, ".").concat(se.IntroExplainAcceptClass, " {\n      width: 100%;\n      padding: 0 40px 0 0;\n    }\n    ").concat(r, ".").concat(se.IntroExplainAcceptClass, " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(r, ".").concat(se.IntroExplainAcceptClass, " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    ").concat(r, ".").concat(se.IntroExplainAcceptClass, " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    ").concat(r, ".").concat(se.OptionWrapperClass, " {\n      padding: 0 32px 32px 32px;\n      color: ").concat(a.fontColor, ";\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(r, ".").concat(se.OptionWrapperClass, " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    ").concat(r, ".").concat(se.OptionClass, " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    ").concat(r, ".").concat(se.OptionClass, ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid ").concat(a.sectionDivider, ";\n    }\n    ").concat(r, ".").concat(se.OptionClass, " label {\n      display: flex;\n      gap: 20px;\n      color: ").concat(a.fontColor, ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    ").concat(r, ".").concat(se.OptionClass, " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    ").concat(r, ".").concat(se.OptionClass, " label span {\n      order: -1;\n      display: inline-block;\n      background-color: ").concat(a.backgroundColor, ";\n      width: 24px;\n      height: 24px;\n    }\n    ").concat(r, ".").concat(se.OptionClass, " label span svg {\n      background-color: ").concat(a.backgroundColor, ";\n      border-radius: 3px;\n    }\n    ").concat(r, ".").concat(se.OptionClass, ' label input[aria-readonly="true"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    ').concat(r, ".").concat(se.OptionClass, " label input:focus ~ span {\n      background-color: ").concat(a.focused, ";\n    }\n    ").concat(r, ".").concat(se.OptionClass, " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px ").concat(a.focused, ";\n    }\n    ").concat(r, ".").concat(se.OptionClass, " p {\n      line-height: 1.3;\n      font-size: 100%;\n      color: ").concat(a.fontSubduedColor, ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(r, ".").concat(se.OptionClass, " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n    ").concat(i ? function(n) {
            var t = "".concat(n, ".").concat(se.WrapperClass, '[dir="rtl"]');
            return "\n    ".concat(t, " .").concat(se.DialogClass, " header h2 {\n      padding: 0 0 0 20px !important;\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(t, " .").concat(se.DialogClass, " header h2 {\n        padding: 0 0 0 25px !important;\n      }\n    }\n    ").concat(t, " .").concat(se.HeaderCloseClass, " {\n      right: auto;\n      left: 35px;\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(t, " .").concat(se.HeaderCloseClass, " {\n        right: auto;\n        left: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(t, " .").concat(se.HeaderCloseClass, " {\n        right: auto;\n        left: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(t, " .").concat(se.HeaderCloseClass, " {\n        right: auto;\n        left: 15px;\n      }\n    }\n    ").concat(t, " .").concat(se.HeaderActionsClass, " {\n      padding: 0 0 0 50px;\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(t, " .").concat(se.HeaderActionsClass, " {\n        padding: 0;\n      }\n    }\n    ").concat(t, " .").concat(se.HeaderActionsClass, " button {\n      /* Longhands so the base margin-bottom rules still apply at mobile widths */\n      margin-right: 0;\n      margin-left: 20px;\n    }\n    ").concat(t, " .").concat(se.HeaderActionsClass, " button:last-child {\n      margin-left: 0;\n      margin-right: 0;\n    }\n    ").concat(t, " .").concat(se.IntroClass, " ul li {\n      margin-right: 1.7em;\n      margin-left: 0;\n    }\n    ").concat(t, " .").concat(se.IntroExplainAcceptClass, " {\n      padding-right: 0;\n      padding-left: 40px;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(t, " .").concat(se.IntroExplainAcceptClass, " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n    ").concat(t, " .").concat(se.OptionClass, " p {\n      padding-right: 45px;\n      padding-left: 0;\n    }\n  ")
        }(r) : "", "\n  ")
    }

    function ye(n) {
        var t = n.bannerData,
            e = n.selectorPrefix,
            o = n.locale,
            r = e ? "".concat(e, " ") : "",
            i = ue(o),
            a = me(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor),
            c = function(n, t, e, o) {
                void 0 === o && (o = !1);
                var r = "1280px",
                    i = "".concat(e, ".").concat(ce.DialogClass, '[dir="rtl"]'),
                    a = "\n    ".concat(e, ".").concat(ce.WrapperClass, " {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  "),
                    c = "\n    position: fixed;\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: 32px;\n    background-color: ".concat(t.backgroundColor, ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    /* left is a fallback for Edge Legacy, which drops text-align: start */\n    text-align: left;\n    text-align: start;\n  "),
                    s = function() {
                        var n = "\n      ".concat(e, ".").concat(ce.ButtonsClass, " {\n        flex-direction: column;\n      }\n      ").concat(e, ".").concat(ce.ButtonsGranularClass, " :nth-child(1) {\n        order: 3;\n      }\n      ").concat(e, ".").concat(ce.ButtonsGranularClass, " :nth-child(2) {\n        order: 1;\n      }\n      ").concat(e, ".").concat(ce.ButtonsGranularClass, " :nth-child(3) {\n        order: 2;\n      }\n    ");
                        return "\n      @media only screen and (max-width: 480px) {\n        ".concat(n, "\n      }\n    ")
                    },
                    l = "\n    ".concat(e, ".").concat(ce.DialogClass, " {\n      ").concat(c, "\n      bottom: 0%;\n      width: 100%;\n    }\n    ").concat(e, ".").concat(ce.DialogClass, " button {\n      margin: 0 10px 0 0;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ce.DialogClass, " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ce.WrapperClass, " {\n      flex-direction: row;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ce.WrapperClass, " {\n        flex-direction: column;\n      }\n    }\n    ").concat(e, ".").concat(ce.BodyClass, " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ce.BodyClass, " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    ").concat(e, ".").concat(ce.ButtonsClass, " {\n      display: flex;\n      min-width: 580px;\n      flex-direction: row;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(e, ".").concat(ce.ButtonsClass, " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    ").concat(s(), "\n  "),
                    d = "\n    ".concat(e, ".").concat(ce.DialogClass, " {\n      ").concat(c, "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    ").concat(a, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(e, ".").concat(ce.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(e, ".").concat(ce.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    ").concat(e, ".").concat(ce.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ce.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    ").concat(s(), "\n  "),
                    u = "\n    ".concat(e, ".").concat(ce.DialogClass, " {\n      ").concat(c, "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ce.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ce.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    ").concat(s(), "\n  "),
                    p = "\n    ".concat(e, ".").concat(ce.DialogClass, " {\n      ").concat(c, "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(a, "\n    ").concat(e, ".").concat(ce.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ce.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    ").concat(s(), "\n  "),
                    f = "\n    ".concat(e, ".").concat(ce.DialogClass, " {\n      ").concat(c, "\n      bottom: 0;\n      left: 25%;\n      width: 50%;\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(a, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(e, ".").concat(ce.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(e, ".").concat(ce.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    ").concat(e, ".").concat(ce.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(e, ".").concat(ce.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    ").concat(s(), "\n  "),
                    h = "\n    ".concat(i, " button {\n      margin: 15px 0 0 20px;\n    }\n  "),
                    m = "\n    ".concat(i, " button {\n      margin: 0 0 0 10px;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(i, " button {\n        margin: 15px 0 0 10px;\n      }\n    }\n    ").concat(i, " .").concat(ce.BodyClass, " {\n      margin-right: 0;\n      margin-left: 5%;\n    }\n    @media only screen and (max-width: ").concat(r, ") {\n      ").concat(i, " .").concat(ce.BodyClass, " {\n        margin-left: 0;\n      }\n    }\n  ");
                switch (n) {
                    case re.BottomFullWidth:
                        return o ? "".concat(l).concat(m) : l;
                    case re.Center:
                        return o ? "".concat(d).concat(h) : d;
                    case re.BottomLeft:
                        return o ? "".concat(u).concat(h) : u;
                    case re.BottomRight:
                        return o ? "".concat(p).concat(h) : p;
                    case re.BottomCenter:
                        return o ? "".concat(f).concat(h) : f;
                    default:
                        return o ? "".concat(l).concat(m) : l
                }
            }(t.position, a, r, i),
            s = function(n, t) {
                if (n === ie.Custom) return {
                    accept: pe(t),
                    decline: pe(t),
                    manage: (e = t, "\n    border: none;\n    color: ".concat(e.fontColor, ";\n    background: transparent;\n  "))
                };
                var e, o = n === ie.Dark,
                    r = "\n    background: ".concat(o ? le.Black : le.White, ";\n    color: ").concat(o ? le.White : le.Black, ";\n  ");
                return {
                    accept: r,
                    decline: r,
                    manage: "\n    background: transparent;\n    border: none;\n    color: ".concat(o ? le.White : le.Black, ";\n  ")
                }
            }(t.theme.theme, a);
        return "\n    ".concat(r, ".").concat(ce.DialogClass, " h2 {\n      color: ").concat(a.fontColor, ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " p {\n      color: ").concat(a.fontColor, ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " a {\n      color: ").concat(a.fontColor, ";\n      text-decoration: underline;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px;\n      /* RTL mirrors this margin in getCSSForBannerPlacement (rtlDefaultButtons). */\n      margin: 15px 20px 0 0;\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(a.focused, ";\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button.").concat(ce.ButtonAcceptClass, " {\n      border: 1px solid ").concat(a.button.borderColor, ";\n      ").concat(s.accept, "\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button.").concat(ce.ButtonManagePrefsClass, " {\n      text-decoration: underline;\n      ").concat(s.manage, "\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button.").concat(ce.ButtonManagePrefsClass, ":focus {\n      box-shadow: none;\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button.").concat(ce.ButtonManagePrefsClass, ":focus span {\n      outline: 2px solid ").concat(a.focused, ";\n    }\n    ").concat(r, ".").concat(ce.DialogClass, " button.").concat(ce.ButtonDeclineClass, " {\n      border: 1px solid ").concat(a.button.borderColor, ";\n      ").concat(s.decline, "\n    }\n    ").concat(r, ".").concat(ce.BodyClass, " p a:focus {\n      outline: 2px solid ").concat(a.focused, ";\n      box-shadow: none;\n    }\n    ").concat(c, "\n  ")
    }
    var ve = "8e9cb600c40a8849ba2b6151bb05805c";

    function be(n, e, o) {
        var r;
        try {
            ! function(n) {
                var e = new XMLHttpRequest;
                e.open("POST", "https://error-analytics-production.shopifysvc.com", !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Bugsnag-Api-Key", ve), e.setRequestHeader("Bugsnag-Payload-Version", "5");
                var o = function(n) {
                    var e = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        o = n.error && "string" == typeof n.error.name && n.error.name.trim() || "",
                        r = n.error && "string" == typeof n.error.message && n.error.message.trim() || "",
                        i = (e || "unknown error").split("\n")[0],
                        a = o || "Error",
                        c = r || i;
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "privacyBanner",
                            version: "latest",
                            url: "-"
                        },
                        events: [t(t({
                            exceptions: [{
                                errorClass: a.trim(),
                                message: (c || "").trim(),
                                stacktrace: [{
                                    file: "privacy-banner.js",
                                    lineNumber: "1",
                                    method: e
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general"
                        }, n.context ? {
                            groupingHash: "privacyBanner:".concat(n.context)
                        } : {}), {
                            app: {
                                id: "privacyBanner",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        })]
                    })
                }(n);
                e.send(o)
            }({
                error: n,
                context: e,
                shopId: xe() || (null === (r = window.Shopify) || void 0 === r ? void 0 : r.shop),
                notes: o
            })
        } catch (n) {}
    }

    function xe() {
        var n;
        try {
            var t = null === (n = null === document || void 0 === document ? void 0 : document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return t ? JSON.parse(t).shopId : null
        } catch (n) {
            return null
        }
    }

    function Ce(n) {
        var t = window.location.search.substring(1);
        if (0 === t.length) return null;
        var e = t.split("&").map(function(n) {
                return n.split("=")
            }),
            o = e.filter(function(t) {
                return t[0] === n
            })[0];
        return (o ? o[1] : null) || null
    }

    function we(n, t) {
        var e;
        null === (e = null == n ? void 0 : n.parentNode) || void 0 === e || e.insertBefore(t, n.nextSibling)
    }

    function ke(n) {
        var t = {
            marketing: n.marketing,
            analytics: n.analytics,
            preferences: n.preferences,
            sale_of_data: n.sale_of_data
        };
        !(void 0 !== gn().isHeadless) && n.storefrontAccessToken && (t.headlessStorefront = !0, t.checkoutRootDomain = n.checkoutRootDomain, t.storefrontRootDomain = n.storefrontRootDomain, t.storefrontAccessToken = n.storefrontAccessToken), ht(t, n.callback)
    }
    var _e, Ie, Te, De = function() {
            var n = _t();
            return n.marketing === B && n.analytics === B && n.preferences === B
        },
        Ee = ["127.0.0.1"],
        Ae = function() {
            var n, t = Qn() && De();
            return !window.location.pathname.match(/\/password$/) && (n = window.location.hostname || window.location.host || "", !Ee.some(function(t) {
                return n.startsWith(t)
            })) && t
        },
        Se = function() {
            return "1" === Ce("preview_privacy_banner")
        },
        Be = function() {
            var n;
            return Boolean(!0 === (null === (n = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === n ? void 0 : n.previewMode)) && De()
        },
        Oe = function() {
            return Se() || Be()
        },
        Pe = function() {
            function n() {}
            return n.getServerData = function(n, t, r, i, a) {
                return e(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        return this.domain = n, this.accessToken = null != t ? t : a ? void 0 : this.liquidAccessToken(), this.locale = r, this.country = i, this.isOptionalToken = a, [2, this.getDataFromStorefrontApi()]
                    })
                })
            }, n.getEmbeddedData = function() {
                var n = document.getElementById("scb4127");
                if (n) return JSON.parse(n.textContent || "")
            }, n.fetchParams = function(n) {
                var t = n.accessToken,
                    e = n.unlocalized,
                    o = n.includeCloseButtonText,
                    r = void 0 === o || o,
                    i = this.currentLanguage(),
                    a = this.currentCountry(),
                    c = !i || !a || e ? "" : "@inContext(language: ".concat(i, ", country: ").concat(a, ")"),
                    s = Oe(),
                    l = {
                        "content-type": "application/json"
                    };
                return t && (l["x-shopify-storefront-access-token"] = t), {
                    headers: l,
                    body: JSON.stringify({
                        query: "\n        query bannerQuery ($isPreviewMode: Boolean = ".concat(s, ") ").concat(c, " {\n          consentManagement {\n            banner {\n               enabled\n              position\n              policyLinkText\n              policyLinkUrl\n              title\n              text\n              buttonPrefsOpenText\n              buttonAcceptText\n              buttonDeclineText\n              regionVisibility @include(if: $isPreviewMode)\n              theme {\n                theme\n                fontColor\n                backgroundColor\n                buttonFontColor\n                buttonBackgroundColor\n              }\n              preferences {\n                title\n                introTitle\n                introText\n                buttonAcceptText\n                buttonDeclineText\n                buttonSaveText\n                ").concat(r ? "buttonCloseText" : "", "\n                bulletPoints {\n                  enabled\n                  title\n                  firstText\n                  secondText\n                  thirdText\n                }\n                purposes {\n                  essentialName\n                  essentialDesc\n                  performanceName\n                  performanceDesc\n                  preferencesName\n                  preferencesDesc\n                  marketingName\n                  marketingDesc\n                }\n              }\n            }\n          }\n        }"),
                        variables: {
                            isPreviewMode: Oe()
                        }
                    }),
                    method: "POST"
                }
            }, n.getDataFromStorefrontApi = function(n) {
                return e(this, arguments, void 0, function(n, e) {
                    var r, i, a, c, s, l, d, u, p;
                    return void 0 === e && (e = !0), o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.accessToken && !this.isOptionalToken) throw new Error("Missing access token");
                                return r = /^(localhost|127\.0\.0\.1)(:|$)/.test(this.domain || "") ? "http" : "https", i = this.domain ? "".concat(r, "://").concat(this.domain) : "", a = "".concat(i, "/api/unstable/graphql.json"), [4, fetch(a, this.fetchParams({
                                    accessToken: this.accessToken,
                                    unlocalized: n,
                                    includeCloseButtonText: e
                                }))];
                            case 1:
                                return 200 !== (c = o.sent()).status ? [3, 3] : [4, c.json()];
                            case 2:
                                if ((s = o.sent()).errors) {
                                    if (l = s.errors.some(function(n) {
                                            var t;
                                            return "undefinedField" === (null === (t = n.extensions) || void 0 === t ? void 0 : t.code) && "ConsentManagementBannerPreferences" === n.extensions.typeName && "buttonCloseText" === n.extensions.fieldName
                                        }), l && e) return [2, this.getDataFromStorefrontApi(n, !1)];
                                    if ((d = s.errors.find(function(n) {
                                            return "argumentLiteralsIncompatible" === n.extensions.code || "variableLiteralsIncompatible" === n.extensions.code
                                        })) && !n) return u = d.message || "", p = u.includes("Directive 'inContext'") && u.includes("invalid value"), window.Weglot || p ? console.log("Banner localization error", d.message) : be(new Error(d.message), "DataFetching"), [2, this.getDataFromStorefrontApi(!0, e)];
                                    throw new Error(s.errors[0].message)
                                }
                                return [2, t({}, s.data.consentManagement.banner)];
                            case 3:
                                throw new Error("Could not reach the server")
                        }
                    })
                })
            }, n.liquidAccessToken = function() {
                var n = document.documentElement.querySelector("#shopify-features");
                if (n) {
                    var t = JSON.parse(n.textContent || "").accessToken;
                    if (t) return t;
                    console.warn("Could not find liquid access token")
                } else console.warn("Could not find liquid access token")
            }, n.currentLanguage = function() {
                var n = this.locale;
                if (n) {
                    n = n.replace("-", "_").toUpperCase();
                    return ["PT_BR", "PT_PT", "ZH_CN", "ZH_TW"].includes(n) || (n = n.split("_")[0]), n
                }
            }, n.currentCountry = function() {
                var n;
                return null === (n = this.country) || void 0 === n ? void 0 : n.toUpperCase()
            }, n
        }(),
        Re = "privacy-banner",
        He = function() {
            function n() {}
            return n.prototype.increment = function(n, t) {
                if (void 0 === t && (t = {}), "undefined" != typeof window && n) try {
                    if ("function" != typeof fetch) return;
                    var e = 1e6 * Date.now(),
                        o = {
                            resourceMetrics: [{
                                resource: {
                                    attributes: [{
                                        key: "service.name",
                                        value: {
                                            stringValue: Re
                                        }
                                    }]
                                },
                                scopeMetrics: [{
                                    scope: {
                                        name: Re
                                    },
                                    metrics: [{
                                        name: n,
                                        unit: "1",
                                        sum: {
                                            aggregationTemporality: 1,
                                            isMonotonic: !0,
                                            dataPoints: [{
                                                asDouble: 1,
                                                startTimeUnixNano: e,
                                                timeUnixNano: e,
                                                attributes: Me(t)
                                            }]
                                        }
                                    }]
                                }]
                            }]
                        };
                    fetch("https://otlp-http-production.shopifysvc.com/v1/metrics", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json; charset=utf-8"
                        },
                        mode: "cors",
                        credentials: "omit",
                        body: JSON.stringify(o)
                    }).catch(function() {})
                } catch (n) {}
            }, n
        }();

    function Me(n) {
        return Object.keys(n).reduce(function(t, e) {
            var o = n[e];
            return null == o || t.push({
                key: e,
                value: Ne(o)
            }), t
        }, [])
    }

    function Ne(n) {
        return "string" == typeof n ? {
            stringValue: n
        } : "boolean" == typeof n ? {
            boolValue: n
        } : Number.isFinite(n) ? Math.floor(n) === n ? {
            intValue: n
        } : {
            doubleValue: n
        } : {
            stringValue: String(n)
        }
    }

    function Le(n) {
        var t = (void 0 === n ? {} : n).isHeadless;
        void 0 !== t && t || (null != _e ? _e : _e = new He).increment("privacy_banner_render_total")
    }

    function je(n, t) {
        return (null == t ? void 0 : t.id) && n.setAttribute("id", t.id), (null == t ? void 0 : t.class) && n.setAttribute("class", t.class), (null == t ? void 0 : t.onClick) && n.addEventListener("click", t.onClick), (null == t ? void 0 : t.appendTo) && t.appendTo.appendChild(n), (null == t ? void 0 : t.role) && n.setAttribute("role", t.role), (null == t ? void 0 : t.autofocus) && n.setAttribute("autofocus", ""), (null == t ? void 0 : t.ariaHidden) && n.setAttribute("aria-hidden", "".concat(null == t ? void 0 : t.ariaHidden)), (null == t ? void 0 : t.dir) && n.setAttribute("dir", t.dir), n
    }

    function qe(n) {
        var t = je(document.createElement("div"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), (null == n ? void 0 : n.ariaModal) && t.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && t.setAttribute("aria-labelledby", n.ariaLabelledby), t
    }

    function Fe(n) {
        var t = je(document.createElement("span"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), t
    }

    function $e(n) {
        var t, e = je(document.createElement("button"), n);
        return e.textContent = null !== (t = null == n ? void 0 : n.text) && void 0 !== t ? t : null, n.disabled && e.setAttribute("disabled", ""), n.ariaHaspopup && e.setAttribute("aria-haspopup", n.ariaHaspopup), n.type && e.setAttribute("type", n.type), n.ariaLabel && e.setAttribute("aria-label", n.ariaLabel), e
    }

    function Ue(n) {
        var t = je(document.createElement("p"), n);
        return t.textContent = n.text, t
    }

    function We(n, t) {
        var e = je(document.createElement(n), t);
        return e.textContent = t.text, e
    }

    function Ve(n) {
        return We(Ie.H2, n)
    }

    function ze(n) {
        return We(Ie.H3, n)
    }

    function Je(n) {
        var t = je(document.createElement("style"), n);
        return t.textContent = n.content, t
    }

    function Ge(n) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        t.setAttributeNS(null, "width", n.width), t.setAttributeNS(null, "height", n.height), t.setAttributeNS(null, "viewBox", "0 0 ".concat(n.width, " ").concat(n.height)), (null == n ? void 0 : n.fillRule) && t.setAttributeNS(null, "fill-rule", n.fillRule), (null == n ? void 0 : n.clipRule) && t.setAttributeNS(null, "clip-rule", n.clipRule);
        var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return e.setAttributeNS(null, "fill", (null == n ? void 0 : n.colour) || "#000"), e.setAttributeNS(null, "d", n.path), t.appendChild(e), (null == n ? void 0 : n.id) && t.setAttribute("id", n.id), (null == n ? void 0 : n.class) && t.setAttribute("class", n.class), (null == n ? void 0 : n.dataIconType) && t.setAttribute("data-icon-type", n.dataIconType), (null == n ? void 0 : n.ariaHidden) && t.setAttribute("aria-hidden", "".concat(null == n ? void 0 : n.ariaHidden)), (null == n ? void 0 : n.focusable) && t.setAttribute("focusable", "".concat(null == n ? void 0 : n.focusable)), (null == n ? void 0 : n.appendTo) && n.appendTo.appendChild(t), t
    }

    function Xe(n) {
        var t = je(document.createElement("section"), n);
        return (null == n ? void 0 : n.text) && (t.textContent = n.text), (null == n ? void 0 : n.ariaModal) && t.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && t.setAttribute("aria-labelledby", n.ariaLabelledby), t
    }

    function Ke(n) {
        var t = n.bannerData,
            e = n.locale,
            o = Xe({
                id: ce.DialogId,
                class: ce.DialogClass,
                role: "alertdialog",
                ariaModal: "false",
                ariaLabelledby: t.title ? ce.BodyTitleId : void 0,
                dir: ue(e) ? "rtl" : void 0
            });
        t.title || o.setAttribute("aria-label", t.buttonPrefsOpenText);
        var r = qe({
            class: ce.WrapperClass
        });
        o.appendChild(r);
        var i = qe({
            class: ce.BodyClass
        });
        r.appendChild(i);
        var a = qe({
            class: ce.ButtonsClass
        });
        return a.classList.add(ce.ButtonsGranularClass), r.appendChild(a),
            function(n, t) {
                if (n.title) {
                    var e = Ve({
                        id: ce.BodyTitleId,
                        text: n.title
                    });
                    t.appendChild(e)
                }
            }(t, i),
            function(n, t) {
                var e = Ue({
                        text: "".concat(n.text, " ")
                    }),
                    o = function(n) {
                        var t = je(document.createElement("a"), n);
                        return t.setAttribute("href", n.href), t.textContent = n.text, t.setAttribute("target", void 0 === n.target ? "_blank" : n.target), n.target && "_blank" !== n.target || t.setAttribute("rel", "noopener noreferrer"), t
                    }({
                        id: ce.BodyCopyPolicyLinkId,
                        href: n.policyLinkUrl,
                        target: "_blank",
                        text: n.policyLinkText ? n.policyLinkText : "Privacy Policy"
                    });
                e.appendChild(o), t.appendChild(e)
            }(t, i),
            function(n, t) {
                var e = Fe({
                        text: n.buttonPrefsOpenText
                    }),
                    o = $e({
                        id: ce.ButtonManagePrefsId,
                        class: ce.ButtonManagePrefsClass,
                        ariaHaspopup: "dialog",
                        type: "button"
                    });
                o.appendChild(e), t.appendChild(o)
            }(t, a),
            function(n, t) {
                t.appendChild($e({
                    id: ce.ButtonAcceptId,
                    class: ce.ButtonAcceptClass,
                    type: "button",
                    text: n.buttonAcceptText
                }))
            }(t, a),
            function(n, t) {
                t.appendChild($e({
                    id: ce.ButtonDeclineId,
                    class: ce.ButtonDeclineClass,
                    type: "button",
                    text: n.buttonDeclineText
                }))
            }(t, a), o
    }

    function Qe(n, t) {
        var e, o, r, i, a, c = (o = {
            appendTo: n
        }, je(document.createElement("header"), o));
        r = c, i = null !== (e = t.preferences.buttonCloseText) && void 0 !== e ? e : "Close dialog", Ge({
            appendTo: a = $e({
                id: se.HeaderCloseId,
                class: se.HeaderCloseClass,
                ariaLabel: i,
                type: "button",
                text: ""
            }),
            ariaHidden: !0,
            width: "12",
            height: "12",
            path: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z"
        }), r.appendChild(a), Ve({
            id: se.HeaderTitleId,
            text: t.preferences.title,
            appendTo: c
        });
        var s = qe({
            class: se.HeaderActionsClass,
            appendTo: c
        });
        return function(n, t) {
                n.appendChild($e({
                    id: se.HeaderAcceptId,
                    type: "button",
                    text: t
                }))
            }(s, t.preferences.buttonAcceptText),
            function(n, t) {
                n.appendChild($e({
                    id: se.HeaderDeclineId,
                    type: "button",
                    text: t
                }))
            }(s, t.preferences.buttonDeclineText),
            function(n, t) {
                n.appendChild($e({
                    id: se.HeaderSaveId,
                    type: "button",
                    text: t
                }))
            }(s, t.preferences.buttonSaveText), c
    }

    function Ye(n, t) {
        var e = qe({
            class: se.IntroClass,
            appendTo: n
        });
        return function(n, t) {
            var e = qe({
                class: se.IntroMainClass,
                appendTo: n
            });
            ze({
                text: t.preferences.introTitle,
                appendTo: e
            }), Ue({
                text: t.preferences.introText,
                appendTo: e
            })
        }(e, t), t.preferences.bulletPoints.enabled && function(n, t) {
            var e = qe({
                    class: se.IntroExplainWrapperClass,
                    appendTo: n
                }),
                o = qe({
                    class: se.IntroExplainAcceptClass,
                    appendTo: e
                });
            ze({
                text: t.preferences.bulletPoints.title || "",
                appendTo: o
            });
            var r = [];
            t.preferences.bulletPoints.firstText && r.push(t.preferences.bulletPoints.firstText);
            t.preferences.bulletPoints.secondText && r.push(t.preferences.bulletPoints.secondText);
            t.preferences.bulletPoints.thirdText && r.push(t.preferences.bulletPoints.thirdText);
            (function(n) {
                var t = je(document.createElement("ul"), n);
                n.lis && n.lis.forEach(function(n) {
                    var e = document.createElement("li");
                    e.textContent = n, t.appendChild(e)
                })
            })({
                lis: r,
                appendTo: o
            })
        }(e, t), e
    }

    function Ze(n) {
        var e = n.themeColours,
            o = n.purpose,
            r = n.ids,
            i = n.parent,
            a = r.input === se.OptionEssentialInputId,
            c = Ge({
                dataIconType: "unchecked",
                width: "24",
                height: "24",
                path: "M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",
                colour: e.iconColor,
                focusable: !0
            }),
            s = function(n) {
                return Ge({
                    dataIconType: "checked",
                    width: "24",
                    height: "24",
                    path: "M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",
                    colour: n,
                    focusable: !0
                })
            }(e.iconColor),
            l = qe({
                class: se.OptionClass,
                id: r.section
            }),
            d = function(n) {
                var t = je(document.createElement("label"), n);
                return t.setAttribute("for", n.for), (null == n ? void 0 : n.text) && (t.textContent = n.text), t
            }({
                appendTo: l,
                for: r.input,
                text: o.description
            });
        ! function(n) {
            var t = je(document.createElement("input"), n);
            t.setAttribute("type", n.type), n.checked && t.setAttribute("checked", "true"), n.disabled && t.setAttribute("disabled", "".concat(n.disabled)), (null == n ? void 0 : n.onChange) && t.addEventListener("change", n.onChange), n.tabindex && t.setAttribute("tabindex", "".concat(n.tabindex)), !0 === n.ariaReadonly && t.setAttribute("aria-readonly", "".concat(n.ariaReadonly))
        }(t({
            appendTo: d,
            id: r.input,
            type: "checkbox",
            checked: a,
            ariaReadonly: a
        }, n.tabindex && {
            tabindex: n.tabindex
        }));
        var u = Fe({
            appendTo: d,
            ariaHidden: !0
        });
        u.appendChild(s), u.appendChild(c), Ue({
            appendTo: l,
            text: o.longDescription
        }), a ? (s.style.display = "block", c.style.display = "none") : (s.style.display = "none", c.style.display = "block"), i.appendChild(l)
    }

    function no(n) {
        var t = n.bannerData,
            e = ue(n.locale) ? "rtl" : void 0,
            o = qe({
                id: se.WrapperId,
                class: se.WrapperClass,
                dir: e
            }),
            r = qe({
                id: se.OverlayId,
                class: se.OverlayClass,
                text: " "
            });
        o.appendChild(r);
        var i = Xe({
            id: se.DialogId,
            class: se.DialogClass,
            role: "dialog",
            ariaModal: "true",
            ariaLabelledby: t.preferences.title ? se.HeaderTitleId : void 0
        });
        t.preferences.title || i.setAttribute("aria-label", t.buttonPrefsOpenText), o.appendChild(i), Qe(i, t);
        var a = qe({
            class: se.DialogScrollableClass
        });
        return i.appendChild(a), Ye(a, t),
            function(n, t) {
                var e = me(t.theme.theme, t.theme.fontColor, t.theme.backgroundColor, t.theme.buttonFontColor, t.theme.buttonBackgroundColor),
                    o = qe({
                        class: se.OptionWrapperClass
                    });
                n.appendChild(o), Ze({
                    themeColours: e,
                    ids: {
                        section: se.OptionEssentialId,
                        input: se.OptionEssentialInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.essentialName,
                        longDescription: t.preferences.purposes.essentialDesc
                    },
                    parent: o,
                    tabindex: "-1"
                }), Ze({
                    themeColours: e,
                    ids: {
                        section: se.OptionPreferencesId,
                        input: se.OptionPreferencesInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.preferencesName,
                        longDescription: t.preferences.purposes.preferencesDesc
                    },
                    parent: o
                }), Ze({
                    themeColours: e,
                    ids: {
                        section: se.OptionMarketingId,
                        input: se.OptionMarketingInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.marketingName,
                        longDescription: t.preferences.purposes.marketingDesc
                    },
                    parent: o
                }), Ze({
                    themeColours: e,
                    ids: {
                        section: se.OptionAnalyticsId,
                        input: se.OptionAnalyticsInputId
                    },
                    purpose: {
                        description: t.preferences.purposes.performanceName,
                        longDescription: t.preferences.purposes.performanceDesc
                    },
                    parent: o
                })
            }(a, t), o
    }

    function to() {
        var n, t = document.getElementById(ce.DialogId);
        if (t && function(n) {
                var t = document.activeElement;
                if (!t || t === document.body) return !0;
                var e = document.getElementById(se.WrapperId);
                return n.contains(t) || Boolean(null == e ? void 0 : e.contains(t))
            }(t)) {
            null === (n = document.getElementById(ce.FocusTargetId)) || void 0 === n || n.remove();
            var e = document.createElement("div");
            e.id = ce.FocusTargetId, e.tabIndex = -1, e.style.cssText = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;outline:none;box-shadow:none;", e.addEventListener("blur", function n() {
                document.hasFocus() && (e.removeEventListener("blur", n), Promise.resolve().then(function() {
                    return e.remove()
                }))
            }), we(t, e), e.focus({
                preventScroll: !0
            })
        }
    }! function(n) {
        n.H1 = "h1", n.H2 = "h2", n.H3 = "h3"
    }(Ie || (Ie = {})),
    function(n) {
        n.Escape = "Escape", n.Tab = "Tab"
    }(Te || (Te = {}));
    var eo = function() {
            function n(n) {
                var t = n.bannerData,
                    e = n.storefrontAccessToken,
                    o = n.checkoutRootDomain,
                    r = n.storefrontRootDomain,
                    i = n.isHeadless,
                    a = n.locale;
                this.bannerData = t, this.locale = a, i && (this.storefrontAccessToken = e, this.checkoutRootDomain = o, this.storefrontRootDomain = r)
            }
            return n.show = function() {
                var n = document.getElementById(se.WrapperId);
                null !== n && (n.style.display = "block", document.body.style.setProperty("overflow", "hidden"))
            }, n.hide = function(n) {
                var t = document.getElementById(se.WrapperId);
                null !== t && (t.style.display = "none", document.body.style.removeProperty("overflow")), n && n.focus()
            }, n.hideModalAndBanner = function(t) {
                n.hide();
                var e = document.getElementById(ce.DialogId),
                    o = null !== e && "none" !== e.style.display,
                    r = !t || t === document.body || Boolean(null == e ? void 0 : e.contains(t));
                o && r ? to() : t && t.focus(), null !== e && (e.style.display = "none")
            }, n.selectedConsent = function() {
                var n = document.getElementById(se.OptionMarketingInputId),
                    t = document.getElementById(se.OptionAnalyticsInputId),
                    e = document.getElementById(se.OptionPreferencesInputId),
                    o = n.checked ? "1" : "0",
                    r = t.checked ? "1" : "0",
                    i = e.checked ? "1" : "0";
                return "".concat(o).concat(r).concat(i)
            }, n.prototype.init = function() {
                return e(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        return this.render(), [2]
                    })
                })
            }, n.prototype.setCheckboxesToCurrentConsent = function() {
                var n = document.getElementById(se.OptionAnalyticsInputId),
                    t = document.getElementById(se.OptionPreferencesInputId),
                    e = document.getElementById(se.OptionMarketingInputId);
                this.handleOptionChange({
                    target: n,
                    isReadOnly: !1,
                    sectionId: se.OptionAnalyticsId,
                    checked: Qt()
                }), this.handleOptionChange({
                    target: t,
                    isReadOnly: !1,
                    sectionId: se.OptionPreferencesId,
                    checked: Yt()
                }), this.handleOptionChange({
                    target: e,
                    isReadOnly: !1,
                    sectionId: se.OptionMarketingId,
                    checked: Kt()
                })
            }, n.prototype.render = function() {
                this.addCSS(this.bannerData), this.addHTML(this.bannerData), this.previouslyFocusedElement = document.activeElement, n.show(), this.setupCheckboxEventHandlers(), this.setupButtonEventHandlers(), this.setupKeyboardEventHandlers()
            }, n.prototype.addCSS = function(n) {
                var t = ge({
                        bannerData: n,
                        locale: this.locale
                    }),
                    e = Je({
                        id: se.StylesContainerId,
                        content: t
                    });
                document.head.appendChild(e)
            }, n.prototype.addHTML = function(t) {
                var e = no({
                    bannerData: t,
                    locale: this.locale
                });
                we(document.getElementById(ce.DialogId), e);
                var o = document.getElementById(se.DialogId);
                o && (this.setCheckboxesToCurrentConsent(), o.dataset.consent = n.selectedConsent()), n.hide()
            }, n.prototype.handleOptionChange = function(t) {
                var e = t.target,
                    o = t.isReadOnly,
                    r = t.sectionId,
                    i = t.checked;
                (void 0 !== i && i || o) && (e.checked = !0);
                var a, c, s, l = e.checked,
                    d = document.getElementById(r),
                    u = d.querySelector('svg[data-icon-type="checked"]'),
                    p = d.querySelector('svg[data-icon-type="unchecked"]');
                l ? (u.style.display = "block", p.style.display = "none") : (u.style.display = "none", p.style.display = "block"), a = n.selectedConsent(), c = document.getElementById(se.DialogId), s = document.getElementById(se.HeaderSaveId), (null == c ? void 0 : c.dataset.consent) && (null == c ? void 0 : c.dataset.consent) !== a ? s.className = "primary" : s.className = ""
            }, n.prototype.setupCheckboxEventHandlers = function() {
                var n = this,
                    t = document.getElementById(se.OptionEssentialInputId);
                null == t || t.addEventListener("change", function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !0,
                        sectionId: se.OptionEssentialId
                    })
                });
                var e = document.getElementById(se.OptionAnalyticsInputId);
                null == e || e.addEventListener("change", function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: se.OptionAnalyticsId
                    })
                });
                var o = document.getElementById(se.OptionPreferencesInputId);
                null == o || o.addEventListener("change", function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: se.OptionPreferencesId
                    })
                });
                var r = document.getElementById(se.OptionMarketingInputId);
                null == r || r.addEventListener("change", function(t) {
                    n.handleOptionChange({
                        target: t.target,
                        isReadOnly: !1,
                        sectionId: se.OptionMarketingId
                    })
                })
            }, n.prototype.setupButtonEventHandlers = function() {
                var t = this,
                    e = document.getElementById(se.HeaderCloseId);
                null == e || e.addEventListener("click", function() {
                    n.hide(t.previouslyFocusedElement)
                });
                var o = document.getElementById(se.HeaderSaveId);
                null == o || o.addEventListener("click", function() {
                    if (Se()) n.hideModalAndBanner(t.previouslyFocusedElement);
                    else {
                        var e = document.getElementById(se.OptionMarketingInputId),
                            o = document.getElementById(se.OptionAnalyticsInputId),
                            r = document.getElementById(se.OptionPreferencesInputId);
                        ke({
                            marketing: e.checked,
                            analytics: o.checked,
                            preferences: r.checked,
                            checkoutRootDomain: t.checkoutRootDomain,
                            storefrontRootDomain: t.storefrontRootDomain,
                            storefrontAccessToken: t.storefrontAccessToken,
                            callback: function() {
                                n.hideModalAndBanner(t.previouslyFocusedElement)
                            }
                        })
                    }
                });
                var r = document.getElementById(se.HeaderAcceptId);
                null == r || r.addEventListener("click", function() {
                    Se() ? n.hideModalAndBanner(t.previouslyFocusedElement) : ke({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(t.previouslyFocusedElement)
                        }
                    })
                });
                var i = document.getElementById(se.HeaderDeclineId);
                null == i || i.addEventListener("click", function() {
                    Se() ? n.hideModalAndBanner(t.previouslyFocusedElement) : ke({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(t.previouslyFocusedElement)
                        }
                    })
                })
            }, n.prototype.setupKeyboardEventHandlers = function() {
                var n = this,
                    t = document.getElementById(se.DialogId);
                if (t) {
                    var e = this.getFocusableElements(t);
                    t.addEventListener("keydown", function(t) {
                        n.escToClose(t), n.tabTrap(t, e)
                    }), this.focusFirstEle(e)
                }
            }, n.prototype.getFocusableElements = function(n) {
                return Array.from(n.querySelectorAll('button, [href], input:not([tabindex="-1"]), select, textarea, [tabindex="0"]'))
            }, n.prototype.focusFirstEle = function(n) {
                (null == n ? void 0 : n.length) && n[0].focus()
            }, n.prototype.escToClose = function(t) {
                t.key === Te.Escape && n.hide(this.previouslyFocusedElement)
            }, n.prototype.tabTrap = function(n, t) {
                if ((null == t ? void 0 : t.length) && n.key === Te.Tab) {
                    var e = t[0],
                        o = t[t.length - 1];
                    e && o && (n.shiftKey && document.activeElement === e ? (n.preventDefault(), o.focus()) : n.shiftKey || document.activeElement !== o || (n.preventDefault(), e.focus()))
                }
            }, n
        }(),
        oo = function() {
            function n(n) {
                var t = n.isHeadless,
                    e = n.storefrontAccessToken,
                    o = n.checkoutRootDomain,
                    r = n.storefrontRootDomain,
                    i = n.locale,
                    a = n.country;
                this.locale = i, this.country = a, this.storefrontAccessToken = e, this.isHeadless = null != t ? t : Boolean(e), this.isHeadless && (this.checkoutRootDomain = o, this.storefrontRootDomain = r), this.preferencesModal = void 0
            }
            return n.show = function() {
                var n = document.getElementById(ce.DialogId);
                if (null !== n) {
                    n.style.display = "block";
                    var t = function(n) {
                        if ("Tab" === n.code) {
                            n.preventDefault();
                            var e = document.getElementById(ce.ButtonManagePrefsId);
                            null == e || e.focus()
                        }
                        window.removeEventListener("keydown", t)
                    };
                    window.addEventListener("keydown", t)
                }
            }, n.hide = function() {
                var n = document.getElementById(ce.DialogId);
                null !== n && (n.style.display = "none")
            }, n.dismiss = function() {
                to(), n.hide()
            }, n.prototype.init = function() {
                return e(this, arguments, void 0, function(e) {
                    var r, i, a;
                    return void 0 === e && (e = !1), o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 3, , 4]), r = Boolean(this.isHeadless), [4, Pe.getServerData(this.checkoutRootDomain, this.storefrontAccessToken, this.locale, this.country, r)];
                            case 1:
                                return (i = o.sent()) && Object.keys(i).length ? [4, "loading" !== document.readyState ? Promise.resolve() : new Promise(function(n) {
                                    document.addEventListener("DOMContentLoaded", n)
                                })] : (console.warn("banner not rendered due to lack of saved data"), [2, Promise.resolve(!1)]);
                            case 2:
                                return o.sent(), this.removeExistingElements(), this.render(t({}, i)), e && (this.preferencesModal = new eo({
                                    bannerData: i,
                                    storefrontAccessToken: this.storefrontAccessToken,
                                    checkoutRootDomain: this.checkoutRootDomain,
                                    storefrontRootDomain: this.storefrontRootDomain,
                                    isHeadless: this.isHeadless,
                                    locale: this.locale
                                }), this.preferencesModal.init(), n.hide()), [2, Promise.resolve(!0)];
                            case 3:
                                return a = o.sent(), this.removeExistingElements(), [2, Promise.reject(a)];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, n.prototype.render = function(t) {
                var e = t.enabled,
                    o = window.Shopify.country,
                    r = Be() && this.isCountryInRegionVisibility(o, t),
                    i = Se() || r || e;
                i && !document.getElementById(ce.DialogId) && (this.addCSS(t), this.addBannerHTML(t)), i && Ae() && (n.show(), Be() || Se() || Le({
                    isHeadless: this.isHeadless
                }))
            }, n.prototype.isCountryInRegionVisibility = function(n, t) {
                var e;
                return null === (e = t.regionVisibility) || void 0 === e ? void 0 : e.includes(n)
            }, n.prototype.addCSS = function(n) {
                var t = Je({
                    id: ce.StylesContainerId,
                    content: ye({
                        bannerData: n,
                        locale: this.locale
                    })
                });
                document.head.appendChild(t)
            }, n.prototype.addBannerHTML = function(n) {
                var t = Ke({
                        bannerData: n,
                        locale: this.locale
                    }),
                    e = document.getElementsByTagName("body")[0];
                e.insertBefore(t, e.firstChild), this.addEventListeners(n)
            }, n.prototype.removeExistingElements = function() {
                var n, t, e, o, r, i = document.getElementById(ce.DialogId),
                    a = document.getElementById(ce.StylesContainerId),
                    c = document.getElementById(se.WrapperId),
                    s = document.getElementById(se.StylesContainerId);
                null === (n = null == i ? void 0 : i.parentNode) || void 0 === n || n.removeChild(i), null === (t = null == a ? void 0 : a.parentNode) || void 0 === t || t.removeChild(a), null === (e = null == c ? void 0 : c.parentNode) || void 0 === e || e.removeChild(c), null === (o = null == s ? void 0 : s.parentNode) || void 0 === o || o.removeChild(s), null === (r = document.getElementById(ce.FocusTargetId)) || void 0 === r || r.remove()
            }, n.prototype.addEventListeners = function(n) {
                var t = this;
                this.addEssentialEventListeners();
                var e = document.getElementById(ce.ButtonManagePrefsId);
                null == e || e.addEventListener("click", function(e) {
                    e.preventDefault(), t.preferencesModal = new eo({
                        bannerData: n,
                        storefrontAccessToken: t.storefrontAccessToken,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        isHeadless: t.isHeadless,
                        locale: t.locale
                    }), t.preferencesModal.init()
                })
            }, n.prototype.addEssentialEventListeners = function() {
                var t = this,
                    e = document.getElementById(ce.ButtonAcceptId);
                null == e || e.addEventListener("click", function() {
                    Se() ? n.dismiss() : ke({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: n.dismiss
                    })
                });
                var o = document.getElementById(ce.ButtonDeclineId);
                null == o || o.addEventListener("click", function() {
                    Se() ? n.dismiss() : ke({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: t.checkoutRootDomain,
                        storefrontRootDomain: t.storefrontRootDomain,
                        storefrontAccessToken: t.storefrontAccessToken,
                        callback: n.dismiss
                    })
                })
            }, n
        }(),
        ro = "#shopifyReshowConsentBanner";

    function io(n, t) {
        var e, o = n.target;
        (null == (e = o) ? void 0 : e.closest('a[href$="'.concat(ro, '"]'))) && t(n)
    }
    var ao = !1;

    function co() {
        return e(this, arguments, void 0, function(n) {
            var t, r, i, a, c, s, l, d, u, p, f, h, m, g, y = this,
                v = void 0 === n ? {} : n,
                b = v.storefrontAccessToken,
                x = v.checkoutRootDomain,
                C = v.storefrontRootDomain,
                w = v.showPreferences,
                k = void 0 !== w && w,
                _ = v.locale,
                I = v.country,
                T = v.forceShow,
                D = void 0 !== T && T;
            return o(this, function(n) {
                return t = gn(), r = Boolean(b), i = null !== (p = t.isHeadless) && void 0 !== p ? p : r, a = r && void 0 === t.isHeadless && !0 !== t.asyncConsent, b || (b = t.storefrontAccessToken), x || (x = null !== (f = t.consentDomain) && void 0 !== f ? f : window.location.hostname), C || (C = null !== (h = t.consentDomain) && void 0 !== h ? h : window.location.hostname), _ || (_ = null === (m = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === m ? void 0 : m.locale), I || (I = null === (g = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === g ? void 0 : g.country), c = function() {
                    return e(y, void 0, void 0, function() {
                        var n;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), !(Oe() || Ae() || k || D) || function() {
                                        var n;
                                        return (null === (n = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === n ? void 0 : n.designMode) || !1
                                    }() ? [3, 2] : [4, new oo({
                                        isHeadless: i,
                                        storefrontAccessToken: b,
                                        checkoutRootDomain: x,
                                        storefrontRootDomain: C,
                                        locale: _,
                                        country: I
                                    }).init(k)];
                                case 1:
                                    t.sent() && (D && oo.show(), a && Rn()), t.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    return n = t.sent(), console.error("Error initializing banner", n), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, a ? (t.injectedConsent ? c() : (s = _t(), ke({
                    marketing: (l = {
                        yes: !0,
                        no: !1
                    })[s.marketing],
                    analytics: l[s.analytics],
                    preferences: l[s.preferences],
                    sale_of_data: l[s.sale_of_data],
                    storefrontAccessToken: b,
                    checkoutRootDomain: x,
                    storefrontRootDomain: C,
                    callback: c
                })), [2]) : (d = oe(), u = function() {
                    return i && (ao || (ao = !0, Rn())), c()
                }, d ? d.then(u, function(n) {
                    return console.error("Unable to collect initial consent", n), c()
                }) : u(), [2])
            })
        })
    }
    var so = function(n) {
        return "function" == typeof(null == n ? void 0 : n.setTrackingConsent) && "function" == typeof(null == n ? void 0 : n.currentVisitorConsent) && "function" == typeof(null == n ? void 0 : n.shouldShowBanner)
    };

    function lo() {
        window.Shopify || (window.Shopify = {});
        var n = window.Shopify,
            t = n.customerPrivacy,
            e = n.trackingConsent;
        so(t) && so(e) || (window.Shopify.customerPrivacy = window.Shopify.trackingConsent = ne())
    }

    function uo() {
        return e(this, arguments, void 0, function(n) {
            var e, r;
            return void 0 === n && (n = {}), o(this, function(o) {
                switch (o.label) {
                    case 0:
                        return e = gn(), r = Boolean(n.storefrontAccessToken), (e.isHeadless || r) && lo(), [4, co(t(t({}, n), {
                            showPreferences: !0
                        }))];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    }

    function po() {
        var n, t;
        if ("0" !== Ce("pb")) {
            var e = gn(),
                o = Boolean(window.Shopify),
                r = null !== (n = e.isHeadless) && void 0 !== n ? n : !o,
                i = null !== (t = e.isHeadless) && void 0 !== t ? t : o;
            r && lo(), i && co();
            var a = function(n) {
                n.preventDefault(), uo()
            };
            document.addEventListener("click", function(n) {
                io(n, a)
            })
        }
    }
    return po(), n.boot = po, n.loadBanner = co, n.showBanner = function() {
        return e(this, arguments, void 0, function(n) {
            var e, r;
            return void 0 === n && (n = {}), o(this, function(o) {
                switch (o.label) {
                    case 0:
                        return e = gn(), r = Boolean(n.storefrontAccessToken), (e.isHeadless || r) && lo(), [4, co(t(t({}, n), {
                            showPreferences: !1,
                            forceShow: !0
                        }))];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    }, n.showPreferences = uo, n
}({});