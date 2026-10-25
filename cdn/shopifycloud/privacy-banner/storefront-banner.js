var privacyBanner = function(n) {
    "use strict";
    var e = function() {
        return e = Object.assign || function(n) {
            for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }, e.apply(this, arguments)
    };

    function t(n, e, t, o) {
        return new(t || (t = Promise))(function(r, i) {
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
                var e;
                n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t(function(n) {
                    n(e)
                })).then(a, c)
            }
            s((o = o.apply(n, e || [])).next())
        })
    }

    function o(n, e) {
        var t, o, r, i = {
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                        if (t = 1, o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, c[1])).done) return r;
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
                        c = e.call(n, i)
                    } catch (n) {
                        c = [6, n], o = 0
                    } finally {
                        t = r = 0
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
    class r extends TypeError {
        constructor(n) {
            super(n), this.name = "ConsentValidationError", Object.setPrototypeOf(this, r.prototype)
        }
    }
    const i = "trackingConsentAccepted",
        a = "trackingConsentDeclined",
        c = "firstPartyMarketingConsentAccepted",
        s = "thirdPartyMarketingConsentAccepted",
        l = "analyticsConsentAccepted",
        d = "preferencesConsentAccepted",
        u = "firstPartyMarketingConsentDeclined",
        p = "thirdPartyMarketingConsentDeclined",
        f = "analyticsConsentDeclined",
        h = "preferencesConsentDeclined",
        m = "visitorConsentCollected",
        g = "consentTrackingApiLoaded",
        y = "yes",
        v = "no",
        b = "no_interaction",
        w = "",
        C = "",
        x = "1",
        k = "0",
        _ = "p",
        I = "a",
        D = "m",
        E = "t",
        T = "m",
        A = "a",
        S = "p",
        B = "s",
        O = "marketing",
        P = "analytics",
        M = "preferences",
        R = "sale_of_data",
        H = "email",
        L = "headlessStorefront",
        N = "rootDomain",
        j = "checkoutRootDomain",
        $ = "storefrontRootDomain",
        q = "storefrontAccessToken",
        W = "isExtensionToken",
        U = "metafields",
        F = "customerAccountRequestInfo",
        z = () => "undefined" == typeof window,
        V = () => "undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__;
    let J = class {};
    J.warn = n => {
        V() || console.warn(n)
    }, J.error = n => {
        V() || console.error(n)
    }, J.info = n => {
        V() || console.info(n)
    }, J.debug = n => {
        V() || console.debug(n)
    }, J.trace = n => {
        V() || console.trace(n)
    };
    const G = J;

    function X(n, e) {
        if (null === n) return "null";
        if (Array.isArray(n)) {
            return `[${n.map(n=>X(n,!0)).join(",")}]`
        }
        if ("object" == typeof n) {
            let t = [];
            for (const e in n) n.hasOwnProperty(e) && void 0 !== n[e] && "" !== n[e] && t.push(`${e}:${X(n[e],!0)}`);
            const o = t.join(",");
            return e ? `{${o}}` : o
        }
        return "string" == typeof n ? JSON.stringify(n) : `${n}`
    }

    function K(n, ...e) {
        if (0 === e.length) return n;
        const t = e[0];
        return n[t] || (n[t] = {}), K(n[t], ...e.slice(1))
    }

    function Z(n) {
        try {
            return decodeURIComponent(n)
        } catch (n) {
            return ""
        }
    }

    function Y() {
        if (!z()) return window
    }
    const Q = "_tracking_consent";

    function nn(n, e = !1) {
        const t = function() {
            try {
                return document.cookie
            } catch {
                return !1
            }
        }() ? document.cookie.split("; ") : [];
        for (let e = 0; e < t.length; e++) {
            const [o, r] = t[e].split("=");
            if (n === Z(o)) {
                return Z(r)
            }
        }
        if (e && "_tracking_consent" === n && !window.localStorage.getItem("tracking_consent_fetched")) {
            if (V()) return;
            return console.debug("_tracking_consent missing"),
                function(n = "/") {
                    const e = new XMLHttpRequest;
                    e.open("HEAD", n, !1), e.withCredentials = !0, e.send()
                }(), window.localStorage.setItem("tracking_consent_fetched", "true"), nn(n, !1)
        }
    }

    function en(n) {
        return n === encodeURIComponent(Z(n))
    }

    function tn(n, e, t, o) {
        if (!en(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!en(n)) throw new TypeError("Cookie name is not correctly URI encoded.");
        let r = `${n}=${o}`;
        r += "; path=/", e && (r += `; domain=${e}`), r += `; expires=${new Date((new Date).getTime()+t).toUTCString()}`, document.cookie = r
    }
    let on = class n {
        constructor() {
            if (n.instance) return n.instance;
            n.instance = this
        }
        produce(n, e) {
            if (!z()) try {
                const t = {
                        schema_id: "customer_privacy_api_events/2.0",
                        payload: {
                            shop_domain: window.location.host,
                            method_name: n,
                            call_details: e || null
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
                    body: JSON.stringify(t),
                    method: "POST",
                    mode: "cors",
                    credentials: "omit"
                }).catch(() => {});
                console.log("Monorail event from consent API:", o, t)
            } catch (n) {}
        }
    };

    function rn() {
        var n, e;
        return z() ? {} : (null === (n = window.Shopify) || void 0 === n || null === (e = n.customerPrivacy) || void 0 === e ? void 0 : e.config) || {}
    }
    on.instance = void 0;

    function an(n) {
        try {
            return n()
        } catch {
            return
        }
    }

    function cn() {
        var n, e;
        if (!pn() && ! function() {
                try {
                    const n = performance.getEntriesByType("navigation")[0].serverTiming;
                    return !!n && 0 != n.length
                } catch {
                    return !1
                }
            }()) {
            const n = new on;
            let e = "failed_to_fetch";
            try {
                e = navigator.userAgent
            } catch {}
            n.produce("navigationServerTiming", JSON.stringify({
                    failed: !0,
                    userAgent: e
                })),
                function() {
                    if (pn()) return;
                    K(Y(), "Shopify", "customerPrivacy").serverTimingSupportVerified = !0
                }()
        }
        const t = null === (n = performance) || void 0 === n || null === (e = n.getEntriesByType) || void 0 === e ? void 0 : e.call(n, "navigation");
        if (!t) return;
        const o = t.map(dn).find(n => n);
        if (o) try {
            sessionStorage.setItem("consentHeader", o)
        } catch {}
        return o
    }
    let sn;

    function ln() {
        var n, e;
        const t = null === (n = performance) || void 0 === n || null === (e = n.getEntriesByType) || void 0 === e ? void 0 : e.call(n, "resource");
        let o = sn;
        for (let n = t.length - 1; n >= 0; n--) {
            let e = dn(t[n]);
            if (e) {
                o = e;
                break
            }
        }
        return sn = o, o
    }

    function dn(n) {
        var e, t;
        if (n) return null === (e = n.serverTiming) || void 0 === e || null === (t = e.find(n => "_cmp" == n.name)) || void 0 === t ? void 0 : t.description
    }

    function un() {
        var n, e;
        const t = Y();
        return !0 === (null == t || null === (n = t.Shopify) || void 0 === n || null === (e = n.customerPrivacy) || void 0 === e ? void 0 : e.backendConsentEnabled) || !0 === rn().asyncVisitorState
    }

    function pn() {
        var n, e;
        const t = Y();
        return null == t || null === (n = t.Shopify) || void 0 === n || null === (e = n.customerPrivacy) || void 0 === e ? void 0 : e.serverTimingSupportVerified
    }

    function fn() {
        if (!z()) {
            var n, e;
            const t = (null === (n = window.Shopify) || void 0 === n || null === (e = n.customerPrivacy) || void 0 === e ? void 0 : e.injectedConsent) || rn().injectedConsent;
            return t ? Z(t) : void 0
        }
    }

    function hn() {
        var n;
        if (!z()) return null === (n = window.Shopify) || void 0 === n ? void 0 : n.customerPrivacy
    }

    function mn() {
        var n;
        return null === (n = hn()) || void 0 === n ? void 0 : n.consentStatus
    }

    function gn(n) {
        const e = hn();
        e && (e.consentStatus = n)
    }

    function yn() {
        bn(g)
    }

    function vn(n, e) {
        void 0 !== n.granular_consent && function(n) {
            gn("loaded");
            const e = n[D],
                t = n[E],
                o = n[I],
                r = n[_];
            !0 === e ? bn(c) : !1 === e && bn(u);
            !0 === t ? bn(s) : !1 === t && bn(p);
            !0 === o ? bn(l) : !1 === o && bn(f);
            !0 === r ? bn(d) : !1 === r && bn(h);
            const g = function(n) {
                const e = {
                    marketingAllowed: n[D],
                    saleOfDataAllowed: n[E],
                    analyticsAllowed: n[I],
                    preferencesAllowed: n[_],
                    firstPartyMarketingAllowed: n[D],
                    thirdPartyMarketingAllowed: n[E]
                };
                return e
            }(n);
            bn(m, g);
            const y = [o, r, e, t];
            y.every(n => !0 === n) && bn(i);
            y.every(n => !1 === n) && bn(a)
        }(e)
    }

    function bn(n, e) {
        if (!z()) try {
            document.dispatchEvent(new CustomEvent(n, {
                detail: e || {}
            }))
        } catch (e) {
            console.error(`[Shopify Customer Privacy] Error in event listener for "${n}":`, e)
        }
    }

    function wn() {
        let n;
        if (n = z() ? fn() : function() {
                var n, e;
                const t = null === (n = window.Shopify) || void 0 === n || null === (e = n.customerPrivacy) || void 0 === e ? void 0 : e.cachedConsent;
                return t ? Z(t) : void 0
            }() || fn() || new URLSearchParams(window.location.search).get("_cs") || void 0 || nn(Q) || function() {
                let n;
                if (n = un() && an(ln) || an(cn), !n) {
                    let n;
                    try {
                        n = sessionStorage.getItem("consentHeader")
                    } catch {}
                    return n || void 0
                }
                try {
                    n = decodeURIComponent(n)
                } catch {}
                return n
            }(), void 0 !== n) return function(n) {
            if ("%" == n.slice(0, 1)) try {
                n = decodeURIComponent(n)
            } catch {}
            const e = n.slice(0, 1);
            if ("{" == e) return function(n) {
                var e;
                let t;
                try {
                    t = JSON.parse(n)
                } catch {
                    return
                }
                if ("2.1" !== t.v) return;
                if (null === (e = t.con) || void 0 === e || !e.CMP) return;
                return t
            }(n);
            if ("3" == e) return function(n) {
                const e = n.slice(1).split("_"),
                    [t, o, r, i, a] = e;
                let c, s;
                try {
                    c = e[5] ? JSON.parse(e.slice(5).join("_")) : void 0
                } catch {}
                if (a) {
                    const n = a.replace(/\*/g, "/").replace(/-/g, "+"),
                        e = atob(n);
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        const o = e.charCodeAt(n).toString(16);
                        t += 1 === o.length ? "0" + o : o
                    }
                    s = [8, 13, 18, 23].reduce((n, e) => n.slice(0, e) + "-" + n.slice(e), t)
                }

                function l(n) {
                    const e = t.split(".")[0];
                    return e.includes(n.toLowerCase()) ? k : e.includes(n.toUpperCase()) ? x : C
                }

                function d(n) {
                    return t.includes(n.replace("t", "s").toUpperCase())
                }
                return {
                    v: "3",
                    con: {
                        CMP: {
                            [A]: l(A),
                            [S]: l(S),
                            [T]: l(T),
                            [B]: l(B)
                        }
                    },
                    region: o || "",
                    cus: c,
                    purposes: {
                        [I]: d(I),
                        [_]: d(_),
                        [D]: d(D),
                        [E]: d(E)
                    },
                    sale_of_data_region: "t" == i,
                    display_banner: "t" == r,
                    consent_id: s
                }
            }(n);
            return
        }(n)
    }

    function Cn() {
        try {
            let n = wn();
            if (!n) return;
            return n
        } catch {
            return
        }
    }

    function xn() {
        return {
            m: En(T),
            a: En(A),
            p: En(S),
            s: En(B)
        }
    }

    function kn() {
        return xn()[B]
    }

    function _n(n = null) {
        return null === n && (n = Cn()), void 0 === n
    }

    function In(n) {
        switch (n) {
            case x:
                return y;
            case k:
                return v;
            default:
                return w
        }
    }

    function Dn(n) {
        switch (n) {
            case A:
                return P;
            case T:
                return O;
            case S:
                return M;
            case B:
                return R
        }
    }

    function En(n) {
        const e = Cn();
        if (!e) return C;
        const t = e.con.CMP;
        return t ? t[n] : C
    }

    function Tn(n) {
        const e = Cn();
        if (!e || !e.purposes) return !0;
        const t = e.purposes[n];
        return "boolean" != typeof t || t
    }

    function An() {
        return Tn(_)
    }

    function Sn() {
        return Tn(I)
    }

    function Bn() {
        return Tn(D)
    }

    function On() {
        return Tn(E)
    }

    function Pn() {
        const n = Cn();
        return !!n && ("boolean" == typeof n.display_banner && n.display_banner)
    }

    function Mn() {
        const n = Cn();
        return n && n.sale_of_data_region || !1
    }
    const Rn = "v0.2",
        Hn = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        Ln = "00000000-0000-0000-0000-000000000000",
        Nn = "00000000-0000-0000-5000-000000000000";

    function jn(n) {
        return !!n && Hn.test(n.trim().toLowerCase())
    }

    function $n(n) {
        if (!jn(n)) return;
        const e = n.trim();
        return e !== Ln && e !== Nn ? e : void 0
    }

    function qn(n, e) {
        const t = Y();
        if (!t) return;
        const o = K(t, "Shopify", "customerPrivacy", "cachedToken");
        if (e) {
            const t = "_shopify_s" === n ? 18e5 : 31536e6;
            o[n] = e, o[n + "_expires_at"] = Date.now() + t
        } else delete o[n], delete o[n + "_expires_at"]
    }

    function Wn(n, e) {
        if (!n) return;
        const t = function(n) {
            const e = new URL(n, window.location.origin),
                t = Fn(n) ? Un(e) : Un(e).replace(window.location.origin, ""),
                o = document.querySelectorAll(`a[href^="${t}"]`),
                r = document.querySelectorAll(`a[href*="${window.location.hostname}/customer_authentication"]`),
                i = new Set,
                a = [];
            for (let n = 0; n < o.length; n++) i.has(o[n]) || (i.add(o[n]), a.push(o[n]));
            for (let n = 0; n < r.length; n++) i.has(r[n]) || (i.add(r[n]), a.push(r[n]));
            return a
        }(n);
        if (t.length)
            for (let o = 0; o < t.length; o++) {
                const r = t[o],
                    i = r.getAttribute("href");
                if (!i) continue;
                const a = new URL(i, window.location.origin);
                a.searchParams.set("_cs", e);
                const c = Fn(n) ? a.toString() : a.toString().replace(window.location.origin, "");
                r.setAttribute("href", c)
            }
    }

    function Un(n) {
        return `${n.origin}${e=n.pathname,e.replace(/\/$/,"")}`;
        var e
    }

    function Fn(n) {
        return n.startsWith("http://") || n.startsWith("https://")
    }
    const zn = "shopify-y",
        Vn = "shopify-s",
        Jn = "serialized-shopifyY",
        Gn = "serialized-shopifyS",
        Xn = "new-cookie-storage-activated",
        Kn = "serialized-isNewCookieStorageEnabled";

    function Zn(n) {
        if (!z()) try {
            var e, t;
            return null === (e = document.querySelector(`meta[name="${n}"]`)) || void 0 === e || null === (t = e.getAttribute("content")) || void 0 === t ? void 0 : t.trim()
        } catch {
            return
        }
    }

    function Yn(n) {
        const e = Zn(n);
        if (e) try {
            const n = JSON.parse(e);
            return "string" == typeof n ? n.trim() : void 0
        } catch {
            return
        }
    }

    function Qn(n) {
        const e = Zn(n);
        if (!e) return !1;
        const t = e.replace(/^"(.*)"$/, "$1").toLowerCase();
        return "true" === t || "t" === t
    }

    function ne() {
        return Qn(Xn)
    }

    function ee() {
        return Qn(Kn)
    }

    function te(n) {
        return void 0 === Zn(n) ? null : Qn(n)
    }

    function oe(n, e) {
        if (ee()) {
            const n = $n(Yn(e));
            if (n) return n
        }
        if (ne()) {
            const e = $n(Zn(n));
            if (e) return e
        }
    }

    function re() {
        return oe(zn, Jn)
    }

    function ie() {
        return oe(Vn, Gn)
    }
    const ae = {
        value: void 0,
        placeholder: !1,
        disallowed: !1,
        source: void 0,
        duplicated: !1,
        bothConventions: !1
    };

    function ce(n, e) {
        if (n) return n === Ln ? {
            value: void 0,
            placeholder: !0,
            disallowed: !1,
            source: e
        } : n === Nn ? {
            value: void 0,
            placeholder: !1,
            disallowed: !0,
            source: e
        } : {
            value: jn(n) ? n : void 0,
            placeholder: !1,
            disallowed: !1,
            source: e
        }
    }

    function se(n) {
        if (z()) return 0;
        try {
            return document.querySelectorAll(`meta[name="${n}"]`).length
        } catch {
            return 0
        }
    }

    function le(n, e) {
        var t, o;
        return { ...null !== (t = null !== (o = ce(Yn(e), "c1")) && void 0 !== o ? o : ce(Zn(n), "sfr")) && void 0 !== t ? t : ae,
            duplicated: se(n) > 1 || se(e) > 1,
            bothConventions: !!Zn(n) && !!Zn(e)
        }
    }
    const de = {},
        ue = /^https?:\/\/([^/]+)(\/api\/(?:unstable|2\d{3}-\d{2})\/graphql\.json(?=$|\?))?/;

    function pe(n) {
        try {
            var e, t, o, r;
            return null === (e = document.cookie) || void 0 === e || null === (t = e.split(";")) || void 0 === t || null === (o = t.find(e => e.includes(n))) || void 0 === o || null === (r = o.split("=")[1]) || void 0 === r ? void 0 : r.trim()
        } catch {
            return
        }
    }

    function fe(n) {
        if (un()) {
            const e = function(n) {
                try {
                    var e, t;
                    const i = null === (e = performance) || void 0 === e || null === (t = e.getEntriesByType) || void 0 === t ? void 0 : t.call(e, "resource");
                    if (i) {
                        const e = window.location.host;
                        for (let t = i.length - 1; t >= 0; t--) {
                            var o, r;
                            const a = i[t];
                            if ("fetch" !== a.initiatorType) continue;
                            const c = a.name.match(ue);
                            if (!c) continue;
                            const [, s, l] = c;
                            if (!(s === e || l && (null == s ? void 0 : s.endsWith(`.${e}`)))) continue;
                            const d = null === (o = a.serverTiming) || void 0 === o || null === (r = o.find(e => e.name === n)) || void 0 === r ? void 0 : r.description;
                            if (d) return de[n] = d, d
                        }
                    }
                    return
                } catch {
                    return
                }
            }(n);
            if (e) return {
                value: e,
                source: "resource"
            };
            const t = de[n];
            if (t) return {
                value: t,
                source: "cache"
            }
        }
        const e = function(n) {
            try {
                var e, t, o, r;
                return null === (e = performance) || void 0 === e || null === (t = e.getEntriesByType("navigation")[0]) || void 0 === t || null === (o = t.serverTiming) || void 0 === o || null === (r = o.find(e => e.name == n)) || void 0 === r ? void 0 : r.description
            } catch {
                return
            }
        }(n);
        return e ? {
            value: e,
            source: "navigation"
        } : {
            value: void 0,
            source: null
        }
    }

    function he(n, e, t) {
        if (!Sn() && !Bn()) return;
        const o = function(n) {
            var e, t, o, r, i, a;
            const c = Y();
            if (!c) return;
            const s = null === (e = c.Shopify) || void 0 === e || null === (t = e.customerPrivacy) || void 0 === t || null === (o = t.cachedToken) || void 0 === o ? void 0 : o[n],
                l = null === (r = c.Shopify) || void 0 === r || null === (i = r.customerPrivacy) || void 0 === i || null === (a = i.cachedToken) || void 0 === a ? void 0 : a[n + "_expires_at"];
            return !s || !l || l < (new Date).getTime() ? void 0 : s
        }(n);
        if (o) return o;
        const r = t();
        if (r) return r;
        const i = function(n) {
            return fe(n).value
        }(e);
        if (i) return i;
        const a = pe(n);
        if (a) return a;
        try {
            ! function(n) {
                (new on).produce("trackingTokenMissing", JSON.stringify({
                    token: n,
                    metaAge: "to_implement",
                    serverTimingAge: "to_implement"
                }))
            }(n)
        } catch {}
    }

    function me() {
        return he("_shopify_y", "_y", re)
    }

    function ge() {
        return he("_shopify_s", "_s", ie)
    }

    function ye(n) {
        return pe("y" === n ? "_shopify_y" : "_shopify_s")
    }

    function ve(n) {
        return fe("y" === n ? "_y" : "_s")
    }
    const be = "Shopify-Storefront-Consent-Management";

    function we(n) {
        const e = n.granular_consent;
        return {
            query: `query { consentManagement { cookies(${X({visitorConsent:{marketing:e.marketing,analytics:e.analytics,preferences:e.preferences,saleOfData:e.sale_of_data,...e.metafields&&{metafields:e.metafields}},...e.email&&{visitorEmail:e.email},origReferrer:n.referrer,landingPage:n.landing_page})}) { trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie shopifyUnique shopifyVisit } customerAccountUrl } }`,
            variables: {}
        }
    }

    function Ce(n, e, t = !1, o) {
        const r = e.granular_consent;
        let i = "",
            a = {};
        if (r.customerAccountRequestInfo) i = r.customerAccountRequestInfo.url, a = r.customerAccountRequestInfo.headers;
        else {
            const e = rn(),
                o = r.storefrontAccessToken || e.storefrontAccessToken || function() {
                    try {
                        const n = document.documentElement.querySelector("#shopify-features"),
                            e = "Could not find liquid access token";
                        if (!n) return void G.warn(e);
                        const t = n.textContent;
                        if (!t) return void G.warn(e);
                        let o;
                        try {
                            o = JSON.parse(t).accessToken
                        } catch {
                            return void G.warn(e)
                        }
                        return o || void G.warn(e)
                    } catch {
                        return void G.warn("Could not find liquid access token")
                    }
                }();
            i = `${/^(localhost|127\.0\.0\.1)(:|$)/.test(n)?"http:":"https:"}//${n}/api/unstable/graphql.json`;
            const c = r.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token";
            if (a = o ? {
                    [c]: o
                } : {}, t) {
                const n = me(),
                    e = ge();
                a = { ...a,
                    ...n ? {
                        "X-Shopify-UniqueToken": n
                    } : {},
                    ...e ? {
                        "X-Shopify-VisitToken": e
                    } : {}
                }
            }
        }
        const c = {
            headers: {
                "content-type": "application/json",
                ...!0 === rn().asyncConsent && new URL(i).origin === window.location.origin && {
                    [be]: "1"
                },
                ...a,
                ...V() ? {
                    "x-test-payload": JSON.stringify(e)
                } : {}
            },
            body: JSON.stringify(we(e)),
            method: "POST"
        };
        let s;
        try {
            s = fetch(i, c)
        } catch (n) {
            s = Promise.reject(n)
        }
        return s.then(n => {
            try {
                null == o || o(n)
            } catch {}
            if (n.ok) return n.json(); {
                const e = new Error("Server error");
                throw e.cause = {
                    status: n.status
                }, e
            }
        })
    }
    let xe;

    function ke(n, e, t, o = {}) {
        const r = rn().consentDomain || e.granular_consent.checkoutRootDomain || window.location.host;
        const i = () => Ce(r, e, o.includeVisitorTokenHeaders, o.onResponse).then(n => {
            var r, i;
            const a = n.data.consentManagement.cookies.cookieDomain,
                c = n.data.consentManagement.cookies.trackingConsentCookie,
                s = n.data.consentManagement.cookies.shopifyUnique,
                l = n.data.consentManagement.cookies.shopifyVisit,
                d = null !== (r = null === (i = n.data.consentManagement) || void 0 === i ? void 0 : i.customerAccountUrl) && void 0 !== r ? r : "";
            var u;
            if (c && (u = c, K(window, "Shopify", "customerPrivacy").cachedConsent = u), qn("_shopify_y", s), qn("_shopify_s", l), function(n) {
                    return n.granular_consent.headlessStorefront
                }(e) && !un()) {
                const n = 31536e6,
                    t = e.granular_consent,
                    o = a || t.checkoutRootDomain || window.location.hostname,
                    r = t.storefrontRootDomain || a || window.location.hostname;
                tn(Q, o, n, c), r !== o && tn(Q, r, n, c)
            }
            return !1 !== o.emitEvents && vn(e, {
                [_]: An(),
                [I]: Sn(),
                [D]: Bn(),
                [E]: On()
            }), Wn(d, c), void 0 !== t && t(null, n), n
        }).catch(n => {
            var e;
            const o = "Error while setting storefront API consent: " + n.message,
                r = null === (e = n.cause) || void 0 === e ? void 0 : e.status,
                i = {
                    error: o
                };
            if (void 0 !== r && (i.statusCode = r), void 0 === t) throw i;
            t(i)
        });
        if (!0 !== rn().asyncConsent) return i();
        const a = xe = xe ? xe.then(i, i) : i(),
            c = () => {
                xe === a && (xe = void 0)
            };
        return a.then(c, c), a
    }
    const _e = [O, P, M, R],
        Ie = [..._e, H, N, j, $, q, L, W, U, F],
        De = _e.map(n => `"${n}"`).join(", "),
        Ee = "https://shopify.dev/docs/api/customer-privacy";

    function Te(n, e) {
        if (z()) throw new Error("setTrackingConsent is not supported in Node.js environments. This function requires browser APIs (XHR, cookies, window) and can only be called client-side.");
        const t = new on;
        if (Sn() && t.produce("setTrackingConsent", Rn), function(n) {
                if ("boolean" != typeof n && "object" != typeof n) throw new r(`setTrackingConsent received an invalid argument of type "${typeof n}". Expected an object with consent keys. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${Ee} for documentation.`);
                if ("object" == typeof n) {
                    const e = Object.keys(n);
                    if (0 === e.length) throw new r(`The submitted consent object is empty. Expected at least one consent key: ${De}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${Ee} for documentation.`);
                    for (const n of e)
                        if (!Ie.includes(n)) throw new r(`The submitted consent object contains an invalid key: "${n}". Valid keys are: ${De}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${Ee} for documentation.`)
                }
            }(n), void 0 !== e && "function" != typeof e) throw new r(`setTrackingConsent received an invalid callback of type "${typeof e}". The second argument must be a function if provided. Example: setTrackingConsent({ analytics: true }, (error, result) => { ... }). See ${Ee} for documentation.`);
        const o = function(n) {
                if (!n) return null;
                try {
                    return Be() ? document.referrer : ""
                } catch {
                    return ""
                }
            }(n.analytics),
            i = function(n) {
                if (!n) return null;
                if (!Be()) return "/";
                try {
                    return window.location.pathname + window.location.search
                } catch {
                    return "/"
                }
            }(n.analytics);
        return ke(0, {
            granular_consent: n,
            ...null !== o && {
                referrer: o
            },
            ...null !== i && {
                landing_page: i
            }
        }, e)
    }

    function Ae() {
        const n = new on;
        if (Sn() && n.produce("getTrackingConsent", Rn), _n()) return w;
        const e = xn();
        return e[T] === x && e[A] === x ? y : e[T] === k || e[A] === k ? v : b
    }

    function Se() {
        return function() {
            const n = Cn();
            return _n(n) ? "" : n.region || ""
        }()
    }

    function Be() {
        try {
            if ("" === document.referrer) return !0;
            const n = document.createElement("a");
            return n.href = document.referrer, window.location.hostname != n.hostname
        } catch {
            return !0
        }
    }

    function Oe() {
        return !!_n() || Bn() && Sn()
    }

    function Pe() {
        return Mn() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function Me() {
        return Pn() && Ae() === b
    }

    function Re() {
        return !1 === Pe() ? v : (n = kn(), _n() ? w : n === C ? b : In(n));
        var n
    }

    function He() {
        return !0
    }

    function Le(n) {
        return function(n) {
            const e = Cn();
            if (_n(e) || !e.cus) return;
            const t = e.cus[encodeURIComponent(n)];
            return t ? decodeURIComponent(t) : t
        }(n)
    }

    function Ne() {
        const n = {},
            e = xn();
        for (const t of Object.keys(e)) n[Dn(t)] = In(e[t]);
        return n
    }

    function je() {
        return function() {
            const n = Cn();
            return n && n.consent_id || ""
        }()
    }
    const $e = "95ba910bcec4542ef2a0b64cd7ca666c";

    function qe(n, e, t) {
        try {
            var o;
            ! function(n) {
                const e = new XMLHttpRequest;
                e.open("POST", "https://error-analytics-production.shopifysvc.com", !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Bugsnag-Api-Key", $e), e.setRequestHeader("Bugsnag-Payload-Version", "5");
                const t = function(n) {
                    var e;
                    const t = function(n) {
                        return n ? n.stackTrace || n.stack || n.description || n.name : void 0
                    }(n.error);
                    let o, r;
                    if (null !== (e = n.error) && void 0 !== e && e.name) {
                        var i, a;
                        o = n.error.name, r = null !== (i = null === (a = n.error) || void 0 === a ? void 0 : a.message) && void 0 !== i ? i : ""
                    } else {
                        const e = (t || "unknown error").split("\n")[0],
                            i = e.indexOf(":");
                        var c, s, l;
                        if (i > 0) o = e.substring(0, i).trim(), r = e.substring(i + 1).trim();
                        else o = e.trim() || "unknown error", r = (null === (c = n.error) || void 0 === c ? void 0 : c.message) || (null === (s = n.error) || void 0 === s ? void 0 : s.error) || (null === (l = n.error) || void 0 === l ? void 0 : l.toString()) || "No error message available"
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
                                    method: t
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
                e.send(t)
            }({
                error: n,
                context: null != e ? e : "",
                shopId: Ue() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: null != t ? t : ""
            })
        } catch (n) {}
    }

    function We(n) {
        return (...e) => {
            try {
                return n(...e)
            } catch (n) {
                throw n instanceof r || qe(n), n
            }
        }
    }

    function Ue() {
        try {
            var n;
            const e = null === (n = document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return e ? JSON.parse(e).shopId : null
        } catch (n) {
            return null
        }
    }

    function Fe() {
        return Bn()
    }

    function ze() {
        return Sn()
    }

    function Ve() {
        return An()
    }

    function Je() {
        return On()
    }

    function Ge(n = {
        useBugsnagReporting: !1
    }) {
        return (({
            useBugsnagReporting: n
        }) => {
            kn() != k && !1 === Pe() && Te({
                sale_of_data: !1
            }, () => !1);
            const e = {
                analyticsProcessingAllowed: Sn,
                currentVisitorConsent: Ne,
                doesMerchantSupportGranularConsent: He,
                firstPartyMarketingAllowed: Fe,
                getCCPAConsent: Re,
                getRegion: Se,
                getTrackingConsent: Ae,
                getTrackingConsentMetafield: Le,
                marketingAllowed: Fe,
                preferencesProcessingAllowed: An,
                saleOfDataAllowed: Je,
                saleOfDataRegion: Mn,
                setTrackingConsent: Te,
                shouldShowBanner: Pn,
                shouldShowGDPRBanner: Me,
                thirdPartyMarketingAllowed: Je,
                userCanBeTracked: Oe,
                consentId: je,
                unstable: {},
                __metadata__: {
                    name: "@shopify/consent-tracking-api",
                    version: Rn,
                    description: "Shopify Consent Tracking API"
                },
                config: rn()
            };
            if (!n) return e;
            const t = e;
            for (const n in t)
                if (t.hasOwnProperty(n)) {
                    const e = t[n];
                    "function" == typeof e && (t[n] = We(e))
                }
            return e
        })(n)
    }
    const Xe = .01;
    let Ke, Ze = !1,
        Ye = !1;

    function Qe(n, e) {
        var t, o;
        const r = null == n ? void 0 : n.split(",").find(n => n.trim().split(";", 1)[0] === `_${e}`),
            i = null == r ? void 0 : r.match(/;\s*desc\s*=\s*(?:"([^"]*)"|([^;,\s]*))/i),
            a = null === (t = null !== (o = null == i ? void 0 : i[1]) && void 0 !== o ? o : null == i ? void 0 : i[2]) || void 0 === t ? void 0 : t.trim(),
            c = void 0 !== r,
            s = !!$n(a),
            l = a === Nn;
        return {
            present: c,
            available: s,
            disallowed: l,
            invalid: c && !s && !l
        }
    }

    function nt(n, e) {
        var t, o;
        const r = ve(n),
            i = null === (t = r.value) || void 0 === t ? void 0 : t.trim(),
            a = !!$n(i),
            c = i === Nn;
        return {
            available: !!$n("y" === n ? me() : ge()),
            serverTimingAvailable: a,
            serverTimingDisallowed: c,
            serverTimingInvalid: void 0 !== i && !a && !c,
            serverTimingSource: r.source,
            responseHeader: null !== (o = null == e ? void 0 : e[n]) && void 0 !== o ? o : null
        }
    }

    function et(n = null) {
        return {
            y: nt("y", n),
            s: nt("s", n)
        }
    }

    function tt(n) {
        const e = null == n ? void 0 : n.statusCode;
        return "number" == typeof e ? e : null
    }

    function ot(n, e = null) {
        try {
            (new on).produce("hydrogenVisitorState", JSON.stringify({ ...n,
                after: et(e),
                sampleRate: Xe
            }))
        } catch {}
    }

    function rt(n) {
        try {
            var e, t, o;
            const r = null === (e = performance) || void 0 === e || null === (t = e.getEntriesByType) || void 0 === t ? void 0 : t.call(e, "navigation")[0];
            return !(null == r || null === (o = r.serverTiming) || void 0 === o || !o.some(e => e.name === n))
        } catch {
            return !1
        }
    }

    function it() {
        if (!Ye) {
            Ye = !0;
            try {
                if (!0 === rn().asyncConsent) return;
                if (Math.random() >= Xe) return;
                ot({
                    generation: "classic",
                    flow: rt("_server_tracking") ? "classic_server_forwarded" : rt("_sfapi_proxy") ? "classic_browser_fetch" : "classic_no_fetch",
                    requestOk: null,
                    status: null,
                    before: null
                })
            } catch {
                return
            }
        }
    }

    function at() {
        try {
            if (! function() {
                    const n = rn();
                    if (!0 !== n.asyncConsent || !un()) return !1;
                    try {
                        const e = n.consentDomain || window.location.host,
                            t = /^(localhost|127\.0\.0\.1)(:|$)/.test(e) ? "http:" : "https:";
                        return new URL(`${t}//${e}`).origin === window.location.origin
                    } catch {
                        return !1
                    }
                }()) return;
            if (Math.random() >= Xe) return;
            const n = et();
            let e = null,
                t = !1;
            return {
                observeResponse(n) {
                    e = function(n) {
                        try {
                            const e = n.headers.get("server-timing");
                            return {
                                y: Qe(e, "y"),
                                s: Qe(e, "s")
                            }
                        } catch {
                            return null
                        }
                    }(n)
                },
                report(o, r) {
                    if (!t) {
                        t = !0;
                        try {
                            ot({
                                generation: "new",
                                flow: "cta_initialize",
                                requestOk: o,
                                status: tt(r),
                                before: n
                            }, e)
                        } catch {}
                    }
                }
            }
        } catch {
            return
        }
    }

    function ct() {
        if (z()) return;
        if (Ke) return Ke;
        const n = mn();
        if ("loading" === n) return;
        if ("loaded" === n) return;
        if (!_n()) return void gn("loaded");
        if (!0 !== rn().asyncConsent) return;
        gn("loading");
        const e = function() {
            const n = at();
            return ke(0, {
                granular_consent: {}
            }, void 0, {
                emitEvents: !1,
                includeVisitorTokenHeaders: un(),
                onResponse: e => null == n ? void 0 : n.observeResponse(e)
            }).then(() => {
                null == n || n.report(!0)
            }, e => {
                throw null == n || n.report(!1, e), e
            })
        }().then(() => {
            gn("loaded")
        });
        return Ke = e, e.then(() => {
            Ke === e && (Ke = void 0)
        }, () => {
            "loading" === mn() && gn(void 0), Ke === e && (Ke = void 0)
        }), e
    }
    let st = !1;

    function lt(n, e) {
        return !!n && !!e
    }

    function dt() {
        try {
            return performance.now()
        } catch {
            return 0
        }
    }

    function ut() {
        try {
            return window.__st.reqid
        } catch {
            return null
        }
    }

    function pt() {
        try {
            const n = navigator.userAgent;
            return !n || "" === n.trim() || (!0 === navigator.webdriver || /bot|crawl|curl|email|feed|fetch|googleother|headless|index|link|monitoring|robot|rss|scan|search|spider/i.test(n))
        } catch {
            return null
        }
    }
    const ft = /^https:\/\/shopify\.com\/\d+\/account\/?/i,
        ht = /^https:\/\/shopify\..*?\.shop\.dev\/\d+\/account\/?/i,
        mt = /^https:\/\/account\..*/i;

    function gt(n) {
        return function() {
            try {
                var n;
                const e = window.location.href;
                return ft.test(e) || ht.test(e) || mt.test(e) || (null === (n = window) || void 0 === n ? void 0 : n.__CUSTOMER_ACCOUNT__) || null !== document.querySelector('[data-serialized-id="app-base-path"]')
            } catch {
                return !1
            }
        }() ? "accounts" : n.source || null
    }

    function yt(n, e, t) {
        var o, r;
        const i = t.value,
            a = e.value,
            c = $n(a),
            s = z() ? null : function() {
                try {
                    const n = ut();
                    if (!n) return null;
                    const e = 1e3 * parseInt(n.split("-").slice(-1)[0], 10);
                    return Number.isFinite(e) ? e : null
                } catch {
                    return null
                }
            }();
        return {
            hasCookie: !!n,
            cookieValid: n ? !!$n(n) : null,
            hasServerTiming: !!c,
            serverTimingDisallowed: (null == a ? void 0 : a.trim()) === Nn,
            serverTimingSource: e.source,
            hasMeta: !!i,
            metaDuplicated: t.duplicated,
            bothConventions: t.bothConventions,
            metaPlaceholder: t.placeholder,
            metaDisallowed: t.disallowed,
            metaSource: gt(t),
            cookieMatchesMeta: lt(n, i) ? n === i : null,
            cookieMatchesServerTiming: lt(n, c) ? n === c : null,
            metaMatchesServerTiming: lt(i, c) ? i === c : null,
            cookieValue: n,
            metaValue: i,
            serverTimingValue: c,
            performanceNow: z() ? 0 : dt(),
            htmlAgeSeconds: s ? (Date.now() - s) / 1e3 : null,
            requestId: ut(),
            consentWasCollected: !(null === (o = window.Shopify) || void 0 === o || null === (r = o.customerPrivacy) || void 0 === r || !r.cachedConsent),
            isBot: pt()
        }
    }

    function vt(n) {
        return n.hasCookie || n.hasServerTiming || n.serverTimingDisallowed || null !== n.metaSource
    }

    function bt(n) {
        return n.hasServerTiming || n.serverTimingDisallowed || null !== n.metaSource
    }

    function wt() {
        try {
            const n = new URLSearchParams(window.location.search);
            return n.has("_y") || n.has("_s")
        } catch {
            return !1
        }
    }

    function Ct() {
        try {
            var n, e, t;
            return null !== (n = null === (e = performance) || void 0 === e || null === (t = e.getEntriesByType("navigation")[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : null
        } catch {
            return null
        }
    }

    function xt() {
        try {
            var n, e;
            const o = yt(ye("y"), ve("y"), le(zn, Jn)),
                r = yt(ye("s"), ve("s"), le(Vn, Gn));
            if (!vt(o) && !vt(r)) return;
            const i = bt(o) || bt(r),
                a = i ? .01 : .001;
            if (t = a, !(Math.random() < t)) return;
            (new on).produce("trackingTokenParity", JSON.stringify({
                gateActive: ne() || ee(),
                gateSfr: te(Xn),
                gateC1: te(Kn),
                navigationType: Ct(),
                urlTokenOverride: wt(),
                readyStateAtEmit: document.readyState,
                consentStored: !_n(),
                analyticsAllowed: Sn(),
                controlSample: !i,
                sampleRate: a,
                hasTheme: null === (n = window) || void 0 === n || null === (e = n.Shopify) || void 0 === e ? void 0 : e.theme,
                href: window.location.href,
                y: o,
                s: r
            }))
        } catch {}
        var t
    }

    function kt() {
        var n;
        z() || (st || (st = !0, n = xt, "undefined" != typeof document && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => n(), {
            once: !0
        }) : n())))
    }
    var _t, It, Dt, Et, Tt, At;
    ! function(n) {
        n.BottomCenter = "bottom_center", n.BottomFullWidth = "bottom_full_width", n.BottomLeft = "bottom_left", n.BottomRight = "bottom_right", n.Center = "center"
    }(_t || (_t = {})),
    function(n) {
        n.Custom = "custom", n.Dark = "dark", n.Light = "light"
    }(It || (It = {})),
    function(n) {
        n[n.Yes = 1] = "Yes", n[n.No = 0] = "No"
    }(Dt || (Dt = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__banner__styles", n.DialogId = "shopify-pc__banner", n.DialogClass = "shopify-pc__banner__dialog", n.WrapperClass = "shopify-pc__banner__wrapper", n.BodyClass = "shopify-pc__banner__body", n.BodyTitleId = "shopify-pc__banner__body-title", n.BodyCopyPolicyLinkId = "shopify-pc__banner__body-policy-link", n.ButtonsClass = "shopify-pc__banner__btns", n.ButtonsGranularClass = "shopify-pc__banner__btns-granular", n.ButtonAcceptId = "shopify-pc__banner__btn-accept", n.ButtonAcceptClass = "shopify-pc__banner__btn-accept", n.ButtonDeclineId = "shopify-pc__banner__btn-decline", n.ButtonDeclineClass = "shopify-pc__banner__btn-decline", n.ButtonManagePrefsId = "shopify-pc__banner__btn-manage-prefs", n.ButtonManagePrefsClass = "shopify-pc__banner__btn-manage-prefs"
    }(Et || (Et = {})),
    function(n) {
        n.StylesContainerId = "shopify-pc__prefs__styles", n.OverlayId = "shopify-pc__prefs__overlay", n.OverlayClass = "shopify-pc__prefs__overlay", n.WrapperId = "shopify-pc__prefs", n.WrapperClass = "shopify-pc__prefs", n.DialogId = "shopify-pc__prefs__dialog", n.DialogClass = "shopify-pc__prefs__dialog", n.DialogScrollableClass = "shopify-pc__prefs__scrollable", n.HeaderTitleId = "shopify-pc__prefs__header-title", n.HeaderActionsClass = "shopify-pc__prefs__header-actions", n.HeaderSaveId = "shopify-pc__prefs__header-save", n.HeaderAcceptId = "shopify-pc__prefs__header-accept", n.HeaderDeclineId = "shopify-pc__prefs__header-decline", n.HeaderCloseId = "shopify-pc__prefs__header-close", n.HeaderCloseClass = "shopify-pc__prefs__header-close", n.IntroClass = "shopify-pc__prefs__intro", n.IntroMainClass = "shopify-pc__prefs__intro-main", n.IntroExplainWrapperClass = "shopify-pc__prefs__intro-explain", n.IntroExplainAcceptClass = "shopify-pc__prefs__intro-explain-accept", n.IntroExplainDeclineClass = "shopify-pc__prefs__intro-explain-decline", n.OptionWrapperClass = "shopify-pc__prefs__options", n.OptionClass = "shopify-pc__prefs__option", n.OptionEssentialId = "shopify-pc__prefs__essential", n.OptionEssentialInputId = "shopify-pc__prefs__essential-input", n.OptionMarketingId = "shopify-pc__prefs__marketing", n.OptionMarketingInputId = "shopify-pc__prefs__marketing-input", n.OptionAnalyticsId = "shopify-pc__prefs__analytics", n.OptionAnalyticsInputId = "shopify-pc__prefs__analytics-input", n.OptionPreferencesId = "shopify-pc__prefs__preferences", n.OptionPreferencesInputId = "shopify-pc__prefs__preferences-input"
    }(Tt || (Tt = {})),
    function(n) {
        n.Black = "#333", n.White = "#fff", n.Gray = "#ccc", n.Green = "#3AA83A", n.LightGray = "#F7F8F9", n.DarkGray = "#36454F", n.VeryDarkGray = "#666", n.VeryLightGray = "#e5e5e5"
    }(At || (At = {}));
    var St = function(n) {
        return "\n    border: 1px solid ".concat(n.button.borderColor, ";\n    color: ").concat(n.button.fontColor, ";\n    background: ").concat(n.button.backgroundColor, ";\n  ")
    };

    function Bt(n, e, t, o) {
        void 0 === e && (e = "0,0,100,100"), void 0 === t && (t = "0,0,0,100"), void 0 === o && (o = "0,0,100,100");
        var r = n.split(","),
            i = r[0],
            a = r[1],
            c = r[2],
            s = r[3],
            l = e.split(","),
            d = l[0],
            u = l[1],
            p = l[2],
            f = l[3],
            h = t.split(","),
            m = h[0],
            g = h[1],
            y = h[2],
            v = h[3],
            b = o.split(","),
            w = b[0],
            C = b[1],
            x = b[2],
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
            D = {
                hue: Number(m),
                saturation: Number(g),
                lightness: Number(y),
                alpha: Number(v)
            },
            E = {
                hue: Number(w),
                saturation: Number(C),
                lightness: Number(x),
                alpha: Number(k)
            },
            T = {
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
            font: Ot(_),
            fontSubdued: Ot(T),
            buttonFont: Ot(D),
            buttonBackground: Ot(E),
            background: Ot(I),
            divider: Ot(A),
            focused: Ot(S)
        }
    }

    function Ot(n) {
        return "hsl(".concat(n.hue, "deg, ").concat(n.saturation, "%, ").concat(n.lightness, "%, ").concat(n.alpha, "%)")
    }

    function Pt(n, e, t, o, r) {
        var i = "0,0,0,100",
            a = "0,0,100,100",
            c = Bt("0,0,12,100", "0,0,100,100", "0,0,12,100", "0,0,100,100"),
            s = Bt("0,0,100,87", "0,0,12,100", "0,0,100,87", "0,0,12,100"),
            l = Bt(null != e ? e : i, null != t ? t : a, null != o ? o : i, null != r ? r : a),
            d = function() {
                switch (n) {
                    case It.Light:
                        return c;
                    case It.Dark:
                        return s;
                    case It.Custom:
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

    function Mt(n) {
        var e = n.bannerData,
            t = n.selectorPrefix,
            o = t ? "".concat(t, " ") : "",
            r = Pt(e.theme.theme, e.theme.fontColor, e.theme.backgroundColor, e.theme.buttonFontColor, e.theme.buttonBackgroundColor),
            i = function(n, e, t) {
                var o = "1280px",
                    r = "\n    ".concat(t, ".").concat(Et.WrapperClass, " {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-direction: column;\n    }\n  "),
                    i = "\n    position: fixed;\n    z-index: 2000000;\n    box-shadow: 0px 4px 10px rgb(63 63 68 / 40%);\n    max-height: 90%;\n    box-sizing: border-box;\n    opacity: 1;\n    padding: 32px;\n    background-color: ".concat(e.backgroundColor, ";\n    overflow: auto;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    border: none;\n    text-align: left;\n  "),
                    a = function() {
                        var n = "\n      ".concat(t, ".").concat(Et.ButtonsClass, " {\n        flex-direction: column;\n      }\n      ").concat(t, ".").concat(Et.ButtonsGranularClass, " :nth-child(1) {\n        order: 3;\n      }\n      ").concat(t, ".").concat(Et.ButtonsGranularClass, " :nth-child(2) {\n        order: 1;\n      }\n      ").concat(t, ".").concat(Et.ButtonsGranularClass, " :nth-child(3) {\n        order: 2;\n      }\n    ");
                        return "\n      @media only screen and (max-width: 480px) {\n        ".concat(n, "\n      }\n    ")
                    },
                    c = "\n    ".concat(t, ".").concat(Et.DialogClass, " {\n      ").concat(i, "\n      bottom: 0%;\n      width: 100%;\n    }\n    ").concat(t, ".").concat(Et.DialogClass, " button {\n      margin: 0 10px 0 0;\n    }\n    @media only screen and (max-width: ").concat(o, ") {\n      ").concat(t, ".").concat(Et.DialogClass, " button {\n        margin: 15px 10px 0 0;\n      }\n    }\n    ").concat(r, "\n    ").concat(t, ".").concat(Et.WrapperClass, " {\n      flex-direction: row;\n    }\n    @media only screen and (max-width: ").concat(o, ") {\n      ").concat(t, ".").concat(Et.WrapperClass, " {\n        flex-direction: column;\n      }\n    }\n    ").concat(t, ".").concat(Et.BodyClass, " {\n      margin-right: 5%;\n      margin-bottom: 0;\n    }\n    @media only screen and (max-width: ").concat(o, ") {\n      ").concat(t, ".").concat(Et.BodyClass, " {\n        margin-right: 0;\n        margin-bottom: 10px;\n        width: 100%;\n      }\n    }\n    ").concat(t, ".").concat(Et.ButtonsClass, " {\n      display: flex;\n      min-width: 580px;\n      flex-direction: row;\n    }\n    @media only screen and (max-width: ").concat(o, ") {\n      ").concat(t, ".").concat(Et.ButtonsClass, " {\n        min-width: auto;\n        width: 100%;\n        justify-content: flex-end;\n      }\n    }\n    ").concat(a(), "\n  "),
                    s = "\n    ".concat(t, ".").concat(Et.DialogClass, " {\n      ").concat(i, "\n      top: 50%;\n      left: 25%;\n      width: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n    }\n    ").concat(r, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(t, ".").concat(Et.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(t, ".").concat(Et.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    ").concat(t, ".").concat(Et.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(t, ".").concat(Et.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    ").concat(a(), "\n  "),
                    l = "\n    ".concat(t, ".").concat(Et.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      left: 0;\n      max-width: 650px;\n      border-top-right-radius: 3px;\n    }\n    ").concat(r, "\n    ").concat(t, ".").concat(Et.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(t, ".").concat(Et.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    ").concat(a(), "\n  "),
                    d = "\n    ".concat(t, ".").concat(Et.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      right: 0;\n      max-width: 650px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(r, "\n    ").concat(t, ".").concat(Et.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(t, ".").concat(Et.ButtonsClass, " {\n      display: flex;\n      justify-content: flex-end;\n      width: 100%;\n      flex-direction: row;\n    }\n    ").concat(a(), "\n  "),
                    u = "\n    ".concat(t, ".").concat(Et.DialogClass, " {\n      ").concat(i, "\n      bottom: 0;\n      left: 25%;\n      width: 50%;\n      min-width: 280px;\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n    }\n    ").concat(r, "\n    @media only screen and (max-width: 1300px) {\n      ").concat(t, ".").concat(Et.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 900px) {\n      ").concat(t, ".").concat(Et.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n    ").concat(t, ".").concat(Et.BodyClass, " {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    ").concat(t, ".").concat(Et.ButtonsClass, " {\n      display: flex;\n      width: 100%;\n      justify-content: flex-end;\n      flex-direction: row;\n    }\n    ").concat(a(), "\n  ");
                switch (n) {
                    case _t.BottomFullWidth:
                        return c;
                    case _t.Center:
                        return s;
                    case _t.BottomLeft:
                        return l;
                    case _t.BottomRight:
                        return d;
                    case _t.BottomCenter:
                        return u;
                    default:
                        return c
                }
            }(e.position, r, o),
            a = function(n, e) {
                if (n === It.Custom) return {
                    accept: St(e),
                    decline: St(e),
                    manage: (t = e, "\n    border: none;\n    color: ".concat(t.fontColor, ";\n    background: transparent;\n  "))
                };
                var t, o = n === It.Dark,
                    r = "\n    background: ".concat(o ? At.Black : At.White, ";\n    color: ").concat(o ? At.White : At.Black, ";\n  ");
                return {
                    accept: r,
                    decline: r,
                    manage: "\n    background: transparent;\n    border: none;\n    color: ".concat(o ? At.White : At.Black, ";\n  ")
                }
            }(e.theme.theme, r);
        return "\n    ".concat(o, ".").concat(Et.DialogClass, " h2 {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      font-size: 120%;\n      margin: 0 0 .5em 0;\n      padding: 0;\n      font-weight: bold;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " p {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      line-height: 1.3;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " a {\n      color: ").concat(r.fontColor, ";\n      text-decoration: underline;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button {\n      border: none;\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px;\n      margin: 15px 20px 0 0;\n      font-size: 100%;\n      flex-basis: 50%;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n      text-align: center;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button.").concat(Et.ButtonAcceptClass, " {\n      border: 1px solid ").concat(r.button.borderColor, ";\n      ").concat(a.accept, "\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button.").concat(Et.ButtonManagePrefsClass, " {\n      text-decoration: underline;\n      ").concat(a.manage, "\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button.").concat(Et.ButtonManagePrefsClass, ":focus {\n      box-shadow: none;\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button.").concat(Et.ButtonManagePrefsClass, ":focus span {\n      outline: 2px solid ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(Et.DialogClass, " button.").concat(Et.ButtonDeclineClass, " {\n      border: 1px solid ").concat(r.button.borderColor, ";\n      ").concat(a.decline, "\n    }\n    ").concat(o, ".").concat(Et.BodyClass, " p a:focus {\n      outline: 2px solid ").concat(r.focused, ";\n      box-shadow: none;\n    }\n    ").concat(i, "\n  ")
    }
    var Rt = "8e9cb600c40a8849ba2b6151bb05805c";

    function Ht(n, e, t) {
        var o;
        try {
            ! function(n) {
                var e = new XMLHttpRequest;
                e.open("POST", "https://error-analytics-production.shopifysvc.com", !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Bugsnag-Api-Key", Rt), e.setRequestHeader("Bugsnag-Payload-Version", "5");
                var t = function(n) {
                    var e = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        t = n.error && "string" == typeof n.error.name && n.error.name.trim() || "",
                        o = n.error && "string" == typeof n.error.message && n.error.message.trim() || "",
                        r = (e || "unknown error").split("\n")[0],
                        i = t || "Error",
                        a = o || r;
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "privacyBanner",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: i.trim(),
                                message: (a || "").trim(),
                                stacktrace: [{
                                    file: "storefront-banner.js",
                                    lineNumber: "1",
                                    method: e
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general",
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
                        }]
                    })
                }(n);
                e.send(t)
            }({
                error: n,
                context: e,
                shopId: Lt() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: t
            })
        } catch (n) {}
    }

    function Lt() {
        var n;
        try {
            var e = null === (n = null === document || void 0 === document ? void 0 : document.getElementById("shopify-features")) || void 0 === n ? void 0 : n.textContent;
            return e ? JSON.parse(e).shopId : null
        } catch (n) {
            return null
        }
    }

    function Nt(n) {
        var e = window.location.search.substring(1);
        if (0 === e.length) return null;
        var t = e.split("&").map(function(n) {
                return n.split("=")
            }),
            o = t.filter(function(e) {
                return e[0] === n
            })[0];
        return (o ? o[1] : null) || null
    }

    function jt(n) {
        var e = {
            marketing: n.marketing,
            analytics: n.analytics,
            preferences: n.preferences,
            sale_of_data: n.sale_of_data
        };
        !(Object.keys(rn()).length > 0) && n.storefrontAccessToken && (e.headlessStorefront = !0, e.checkoutRootDomain = n.checkoutRootDomain, e.storefrontRootDomain = n.storefrontRootDomain, e.storefrontAccessToken = n.storefrontAccessToken), Te(e, n.callback)
    }
    var $t = function() {
            var n = Ne();
            return n.marketing === w && n.analytics === w && n.preferences === w
        },
        qt = ["127.0.0.1"],
        Wt = function() {
            var n, e = Pn() && $t();
            return !window.location.pathname.match(/\/password$/) && (n = window.location.hostname || window.location.host || "", !qt.some(function(e) {
                return n.startsWith(e)
            })) && e
        },
        Ut = function() {
            return "1" === Nt("preview_privacy_banner")
        },
        Ft = function() {
            var n;
            return Boolean(!0 === (null === (n = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === n ? void 0 : n.previewMode)) && $t()
        },
        zt = function() {
            return Ut() || Ft()
        },
        Vt = function() {
            function n() {}
            return n.getServerData = function(n, e, r, i, a) {
                return t(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return this.domain = n, this.accessToken = null != e ? e : a ? void 0 : this.liquidAccessToken(), this.locale = r, this.country = i, this.isOptionalToken = a, [2, this.getDataFromStorefrontApi()]
                    })
                })
            }, n.getEmbeddedData = function() {
                var n = document.getElementById("scb4127");
                if (n) return JSON.parse(n.textContent || "")
            }, n.fetchParams = function(n) {
                var e = n.accessToken,
                    t = n.unlocalized,
                    o = this.currentLanguage(),
                    r = this.currentCountry(),
                    i = !o || !r || t ? "" : "@inContext(language: ".concat(o, ", country: ").concat(r, ")"),
                    a = zt(),
                    c = {
                        "content-type": "application/json"
                    };
                return e && (c["x-shopify-storefront-access-token"] = e), {
                    headers: c,
                    body: JSON.stringify({
                        query: "\n        query bannerQuery ($isPreviewMode: Boolean = ".concat(a, ") ").concat(i, " {\n          consentManagement {\n            banner {\n              enabled\n              position\n              policyLinkText\n              policyLinkUrl\n              title\n              text\n              buttonPrefsOpenText\n              buttonAcceptText\n              buttonDeclineText\n              regionVisibility @include(if: $isPreviewMode)\n              theme {\n                theme\n                fontColor\n                backgroundColor\n                buttonFontColor\n                buttonBackgroundColor\n              }\n              preferences {\n                title\n                introTitle\n                introText\n                buttonAcceptText\n                buttonDeclineText\n                buttonSaveText\n                bulletPoints {\n                  enabled\n                  title\n                  firstText\n                  secondText\n                  thirdText\n                }\n                purposes {\n                  essentialName\n                  essentialDesc\n                  performanceName\n                  performanceDesc\n                  preferencesName\n                  preferencesDesc\n                  marketingName\n                  marketingDesc\n                }\n              }\n            }\n          }\n        }"),
                        variables: {
                            isPreviewMode: zt()
                        }
                    }),
                    method: "POST"
                }
            }, n.getDataFromStorefrontApi = function(n) {
                return t(this, void 0, void 0, function() {
                    var t, r, i, a, c, s, l, d;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.accessToken && !this.isOptionalToken) throw new Error("Missing access token");
                                return t = /^(localhost|127\.0\.0\.1)(:|$)/.test(this.domain || "") ? "http" : "https", r = this.domain ? "".concat(t, "://").concat(this.domain) : "", i = "".concat(r, "/api/unstable/graphql.json"), [4, fetch(i, this.fetchParams({
                                    accessToken: this.accessToken,
                                    unlocalized: n
                                }))];
                            case 1:
                                return 200 !== (a = o.sent()).status ? [3, 3] : [4, a.json()];
                            case 2:
                                if ((c = o.sent()).errors) {
                                    if ((s = c.errors.find(function(n) {
                                            return "argumentLiteralsIncompatible" === n.extensions.code || "variableLiteralsIncompatible" === n.extensions.code
                                        })) && !n) return l = s.message || "", d = l.includes("Directive 'inContext'") && l.includes("invalid value"), window.Weglot || d ? console.log("Banner localization error", s.message) : Ht(new Error(s.message), "DataFetching"), [2, this.getDataFromStorefrontApi(!0)];
                                    throw new Error(c.errors[0].message)
                                }
                                return [2, e({}, c.data.consentManagement.banner)];
                            case 3:
                                throw new Error("Could not reach the server")
                        }
                    })
                })
            }, n.liquidAccessToken = function() {
                var n = document.documentElement.querySelector("#shopify-features");
                if (n) {
                    var e = JSON.parse(n.textContent || "").accessToken;
                    if (e) return e;
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
        }();

    function Jt(n, e, t) {
        return (e = function(n) {
            var e = function(n, e) {
                if ("object" != typeof n || !n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var o = t.call(n, e);
                    if ("object" != typeof o) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(n)
            }(n, "string");
            return "symbol" == typeof e ? e : e + ""
        }(e)) in n ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = t, n
    }

    function Gt(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(n);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }

    function Xt(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Gt(Object(t), !0).forEach(function(e) {
                Jt(n, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Gt(Object(t)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return n
    }
    const Kt = "http://localhost:8082",
        Zt = "https://monorail-edge.shopifysvc.com",
        Yt = "/v1/produce";
    class Qt {
        constructor(n) {
            this.producer = n
        }
        do(n, e) {
            return void 0 !== n.schemaId ? this.producer.produce(n) : this.producer.produceBatch(n)
        }
    }

    function no() {
        if ("undefined" != typeof crypto && crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID();
        const n = new Array(36);
        for (let e = 0; e < 36; e++) n[e] = Math.floor(16 * Math.random());
        return n[14] = 4, n[19] = n[19] &= -5, n[19] = n[19] |= 8, n[8] = n[13] = n[18] = n[23] = "-", n.map(n => n.toString(16)).join("")
    }

    function eo(n, e = !0) {
        return n && Object.keys(n).length && e ? Object.keys(n).map(e => ({
            [to(e)]: n[e]
        })).reduce((n, e) => Xt(Xt({}, n), e)) : n
    }

    function to(n) {
        return n.split(/(?=[A-Z])/).join("_").toLowerCase()
    }

    function oo(n) {
        return n.events.map(n => {
            let e = !0,
                t = !0;
            return n && n.options && Object.prototype.hasOwnProperty.call(n.options, "convertEventCase") && (e = Boolean(n.options.convertEventCase)), n && n.options && Object.prototype.hasOwnProperty.call(n.options, "convertMetaDataCase") && (t = Boolean(n.options.convertMetaDataCase)), {
                schema_id: n.schemaId,
                payload: eo(n.payload, e),
                metadata: eo(n.metadata, t)
            }
        })
    }
    class ro extends Error {
        constructor(n) {
            super(`Error producing to the Monorail Edge. Response received: ${JSON.stringify(n)}`), this.response = n, Object.setPrototypeOf(this, ro.prototype)
        }
    }
    class io extends Error {
        constructor(n) {
            super(`Error producing to the Monorail Edge. Response received: ${JSON.stringify(n)}`), Object.setPrototypeOf(this, io.prototype), this.response = n
        }
    }
    class ao extends Error {
        constructor(n) {
            super(`Error completing request. A network failure may have prevented the request from completing. Error: ${n}`), Object.setPrototypeOf(this, ao.prototype)
        }
    }
    class co {
        static withEndpoint(n) {
            return new co(`https://${new URL(n).hostname}`)
        }
        constructor(n = Kt, e = !1) {
            this.edgeDomain = n, this.keepalive = e
        }
        async produceBatch(n) {
            const e = {
                events: oo(n),
                metadata: eo(n.metadata)
            };
            let t;
            try {
                t = await fetch(this.produceBatchEndpoint(), {
                    method: "post",
                    headers: so(n.metadata),
                    body: JSON.stringify(e),
                    keepalive: this.keepalive
                })
            } catch (n) {
                throw new ao(n)
            }
            if (207 === t.status) {
                const n = await t.json();
                throw new io(n)
            }
            if (!t.ok) throw new ro({
                status: t.status,
                message: await t.text()
            });
            return {
                status: t.status
            }
        }
        async produce(n) {
            let e, t = !0;
            n && n.options && Object.prototype.hasOwnProperty.call(n.options, "convertEventCase") && (t = Boolean(n.options.convertEventCase));
            try {
                e = await async function({
                    endpoint: n,
                    event: e,
                    keepalive: t
                }) {
                    return fetch(null != n ? n : Zt + Yt, {
                        method: "post",
                        headers: so(e.metadata),
                        body: JSON.stringify({
                            schema_id: e.schemaId,
                            payload: e.payload
                        }),
                        keepalive: t
                    })
                }({
                    endpoint: this.produceEndpoint(),
                    keepalive: this.keepalive,
                    event: Xt(Xt({}, n), {}, {
                        payload: eo(n.payload, t)
                    })
                })
            } catch (n) {
                throw new ao(n)
            }
            if (!e) throw new ro({
                message: "No response from edge"
            });
            if (!e.ok) throw new ro({
                status: e.status,
                message: await e.text()
            });
            return {
                status: e.status
            }
        }
        produceBatchEndpoint() {
            return this.edgeDomain + "/unstable/produce_batch"
        }
        produceEndpoint() {
            return this.edgeDomain + Yt
        }
    }

    function so(n) {
        const e = {
            "Content-Type": "application/json; charset=utf-8",
            "X-Monorail-Edge-Event-Created-At-Ms": (n && n.eventCreatedAtMs || Date.now()).toString(),
            "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
            "X-Monorail-Edge-Client-Message-Id": (n && n.clientMessageId || no()).toString()
        };
        return n && n.userAgent && (e["User-Agent"] = n.userAgent), n && n.remoteIp && (e["X-Forwarded-For"] = n.remoteIp), e
    }
    class lo {
        static printWelcomeMessage(n) {
            console.log(`%c👋 from Monorail%c\n\nWe've noticed that you're${n?"":" not"} running in debug mode. As such, we will ${n?"produce":"not produce"} Monorail events to the console. \n\nIf you want Monorail events to ${n?"stop":"start"} appearing here, %cset debugMode=${(!n).toString()}%c, for the Monorail Log Producer in your code.`, "font-size: large;", "font-size: normal;", "font-weight: bold;", "font-weight: normal;")
        }
        constructor(n) {
            this.sendToConsole = n, n && lo.printWelcomeMessage(n)
        }
        produce(n) {
            return this.sendToConsole && console.log("Monorail event produced", n), new Promise(e => {
                e(n)
            })
        }
        produceBatch(n) {
            return this.sendToConsole && console.log("Monorail Batch event produced", n), new Promise(e => {
                e(n)
            })
        }
    }
    class uo {
        static createLogProducer(n) {
            return new uo(new lo(n.debugMode), n.middleware || [])
        }
        static createHttpProducerWithEndpoint(n, e = []) {
            return new uo(co.withEndpoint(n), e)
        }
        static createHttpProducer(n) {
            const e = n.options && n.options.keepalive;
            return new uo(n.production ? new co(Zt, e) : new co(Kt, e), n.middleware || [])
        }
        static buildMiddlewareChain(n, e = 0) {
            return e === n.length ? this.identityFn : t => n[e].do(t, this.buildMiddlewareChain(n, e + 1))
        }
        constructor(n, e) {
            this.producer = n, this.middleware = e, this.executeChain = uo.buildMiddlewareChain(this.middleware.concat(new Qt(n)))
        }
        produce(n) {
            return n.metadata = Xt({
                eventCreatedAtMs: Date.now(),
                clientMessageId: no()
            }, n.metadata), this.executeChain(n)
        }
        produceBatch(n) {
            return this.executeChain(n)
        }
    }
    var po, fo, ho, mo, go = function() {
        function n(n) {
            var e = void 0 === n ? {} : n,
                t = e.shopDomain,
                o = e.isHeadless;
            this.VISIT_TOKEN = "_shopify_s", this.shopDomain = t, this.isHeadless = o, this.monorail = uo.createHttpProducer({
                production: !0
            })
        }
        return n.prototype.shouldEmit = function() {
            return !(this.isHeadless && !0)
        }, n.prototype.emitInteraction = function(n, t) {
            if (void 0 === t && (t = ""), this.shouldEmit()) {
                var o = this.getCommonPayload();
                try {
                    this.monorail.produce({
                        schemaId: "privacy_banner_interact/1.2",
                        payload: e(e(e({}, o), t && {
                            interactionMetadata: t
                        }), {
                            interactionType: n
                        })
                    })
                } catch (n) {
                    console.log("Error emitting interaction:", n)
                }
            }
        }, n.prototype.emitRender = function() {
            if (this.shouldEmit()) {
                var n = this.getCommonPayload();
                try {
                    this.monorail.produce({
                        schemaId: "privacy_banner_render/1.1",
                        payload: e({}, n)
                    })
                } catch (n) {
                    console.log("Error emitting interaction:", n)
                }
            }
        }, n.prototype.emitInitialized = function() {
            if (this.shouldEmit()) {
                var n = this.getCommonPayload();
                try {
                    this.monorail.produce({
                        schemaId: "privacy_banner_initialized/1.0",
                        payload: e({}, n)
                    })
                } catch (n) {
                    console.log("Error emitting interaction:", n)
                }
            }
        }, n.prototype.visitorRegion = function() {
            var n = document.cookie.split(";").find(function(n) {
                return n.includes("_tracking_consent=")
            });
            if (!n) return null;
            var e = {};
            try {
                e = JSON.parse(unescape(n.split("=")[1]))
            } catch (n) {
                return null
            }
            return e.region || null
        }, n.prototype.getCommonPayload = function() {
            var n, t = this.shopDomain || (null === (n = window.Shopify) || void 0 === n ? void 0 : n.shop),
                o = function(n) {
                    for (var e = 0, t = decodeURIComponent(document.cookie).split(";"); e < t.length; e++) {
                        var o = t[e].split("="),
                            r = o[0],
                            i = o[1];
                        if (r.trim() === n) return i
                    }
                    return ""
                }(this.VISIT_TOKEN) || "0",
                r = window.location.pathname,
                i = this.visitorRegion();
            return e({
                shopPermanentDomain: t,
                sessionToken: o,
                regulation: "CMP",
                path: r
            }, i && {
                region: i
            })
        }, n
    }();

    function yo(n, e) {
        return (null == e ? void 0 : e.id) && n.setAttribute("id", e.id), (null == e ? void 0 : e.class) && n.setAttribute("class", e.class), (null == e ? void 0 : e.onClick) && n.addEventListener("click", e.onClick), (null == e ? void 0 : e.appendTo) && e.appendTo.appendChild(n), (null == e ? void 0 : e.role) && n.setAttribute("role", e.role), (null == e ? void 0 : e.autofocus) && n.setAttribute("autofocus", ""), (null == e ? void 0 : e.ariaHidden) && n.setAttribute("aria-hidden", "".concat(null == e ? void 0 : e.ariaHidden)), n
    }

    function vo(n) {
        var e = yo(document.createElement("div"), n);
        return (null == n ? void 0 : n.text) && (e.textContent = n.text), (null == n ? void 0 : n.ariaModal) && e.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && e.setAttribute("aria-labelledby", n.ariaLabelledby), e
    }

    function bo(n) {
        var e = yo(document.createElement("span"), n);
        return (null == n ? void 0 : n.text) && (e.textContent = n.text), e
    }

    function wo(n) {
        var e, t = yo(document.createElement("button"), n);
        return t.textContent = null !== (e = null == n ? void 0 : n.text) && void 0 !== e ? e : null, n.disabled && t.setAttribute("disabled", ""), n.ariaHaspopup && t.setAttribute("aria-haspopup", n.ariaHaspopup), n.type && t.setAttribute("type", n.type), n.ariaLabel && t.setAttribute("aria-label", n.ariaLabel), t
    }

    function Co(n) {
        var e = yo(document.createElement("p"), n);
        return e.textContent = n.text, e
    }

    function xo(n, e) {
        var t = yo(document.createElement(n), e);
        return t.textContent = e.text, t
    }

    function ko(n) {
        return xo(ho.H2, n)
    }

    function _o(n) {
        return xo(ho.H3, n)
    }

    function Io(n) {
        var e = yo(document.createElement("style"), n);
        return e.textContent = n.content, e
    }

    function Do(n) {
        var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        e.setAttributeNS(null, "width", n.width), e.setAttributeNS(null, "height", n.height), e.setAttributeNS(null, "viewBox", "0 0 ".concat(n.width, " ").concat(n.height)), (null == n ? void 0 : n.fillRule) && e.setAttributeNS(null, "fill-rule", n.fillRule), (null == n ? void 0 : n.clipRule) && e.setAttributeNS(null, "clip-rule", n.clipRule);
        var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return t.setAttributeNS(null, "fill", (null == n ? void 0 : n.colour) || "#000"), t.setAttributeNS(null, "d", n.path), e.appendChild(t), (null == n ? void 0 : n.id) && e.setAttribute("id", n.id), (null == n ? void 0 : n.class) && e.setAttribute("class", n.class), (null == n ? void 0 : n.dataIconType) && e.setAttribute("data-icon-type", n.dataIconType), (null == n ? void 0 : n.ariaHidden) && e.setAttribute("aria-hidden", "".concat(null == n ? void 0 : n.ariaHidden)), (null == n ? void 0 : n.focusable) && e.setAttribute("focusable", "".concat(null == n ? void 0 : n.focusable)), (null == n ? void 0 : n.appendTo) && n.appendTo.appendChild(e), e
    }

    function Eo(n) {
        var e = yo(document.createElement("section"), n);
        return (null == n ? void 0 : n.text) && (e.textContent = n.text), (null == n ? void 0 : n.ariaModal) && e.setAttribute("aria-modal", n.ariaModal), (null == n ? void 0 : n.ariaLabelledby) && e.setAttribute("aria-labelledby", n.ariaLabelledby), e
    }

    function To(n) {
        var e = n.bannerData,
            t = Eo({
                id: Et.DialogId,
                class: Et.DialogClass,
                role: "alertdialog",
                ariaModal: "false",
                ariaLabelledby: Et.BodyTitleId
            }),
            o = vo({
                class: Et.WrapperClass
            });
        t.appendChild(o);
        var r = vo({
            class: Et.BodyClass
        });
        o.appendChild(r);
        var i = vo({
            class: Et.ButtonsClass
        });
        return i.classList.add(Et.ButtonsGranularClass), o.appendChild(i),
            function(n, e) {
                if (n.title) {
                    var t = ko({
                        id: Et.BodyTitleId,
                        text: n.title
                    });
                    e.appendChild(t)
                }
            }(e, r),
            function(n, e) {
                var t = Co({
                        text: "".concat(n.text, " ")
                    }),
                    o = function(n) {
                        var e = yo(document.createElement("a"), n);
                        return e.setAttribute("href", n.href), e.textContent = n.text, e.setAttribute("target", void 0 === n.target ? "_blank" : n.target), n.target && "_blank" !== n.target || e.setAttribute("rel", "noopener noreferrer"), e
                    }({
                        id: Et.BodyCopyPolicyLinkId,
                        href: n.policyLinkUrl,
                        target: "_blank",
                        text: n.policyLinkText ? n.policyLinkText : "Privacy Policy"
                    });
                t.appendChild(o), e.appendChild(t)
            }(e, r),
            function(n, e) {
                var t = bo({
                        text: n.buttonPrefsOpenText
                    }),
                    o = wo({
                        id: Et.ButtonManagePrefsId,
                        class: Et.ButtonManagePrefsClass,
                        ariaHaspopup: "dialog",
                        type: "button"
                    });
                o.appendChild(t), e.appendChild(o)
            }(e, i),
            function(n, e) {
                e.appendChild(wo({
                    id: Et.ButtonAcceptId,
                    class: Et.ButtonAcceptClass,
                    type: "button",
                    text: n.buttonAcceptText
                }))
            }(e, i),
            function(n, e) {
                e.appendChild(wo({
                    id: Et.ButtonDeclineId,
                    class: Et.ButtonDeclineClass,
                    type: "button",
                    text: n.buttonDeclineText
                }))
            }(e, i), t
    }

    function Ao(n, e) {
        var t, o, r, i, a = (t = {
            appendTo: n
        }, yo(document.createElement("header"), t));
        o = a, r = "Close dialog", Do({
            appendTo: i = wo({
                id: Tt.HeaderCloseId,
                class: Tt.HeaderCloseClass,
                ariaLabel: r,
                type: "button",
                text: ""
            }),
            ariaHidden: !0,
            width: "12",
            height: "12",
            path: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z"
        }), o.appendChild(i), ko({
            id: Tt.HeaderTitleId,
            text: e.preferences.title,
            appendTo: a
        });
        var c = vo({
            class: Tt.HeaderActionsClass,
            appendTo: a
        });
        return function(n, e) {
                n.appendChild(wo({
                    id: Tt.HeaderAcceptId,
                    type: "button",
                    text: e
                }))
            }(c, e.preferences.buttonAcceptText),
            function(n, e) {
                n.appendChild(wo({
                    id: Tt.HeaderDeclineId,
                    type: "button",
                    text: e
                }))
            }(c, e.preferences.buttonDeclineText),
            function(n, e) {
                n.appendChild(wo({
                    id: Tt.HeaderSaveId,
                    type: "button",
                    text: e
                }))
            }(c, e.preferences.buttonSaveText), a
    }

    function So(n, e) {
        var t = vo({
            class: Tt.IntroClass,
            appendTo: n
        });
        return function(n, e) {
            var t = vo({
                class: Tt.IntroMainClass,
                appendTo: n
            });
            _o({
                text: e.preferences.introTitle,
                appendTo: t
            }), Co({
                text: e.preferences.introText,
                appendTo: t
            })
        }(t, e), e.preferences.bulletPoints.enabled && function(n, e) {
            var t = vo({
                    class: Tt.IntroExplainWrapperClass,
                    appendTo: n
                }),
                o = vo({
                    class: Tt.IntroExplainAcceptClass,
                    appendTo: t
                });
            _o({
                text: e.preferences.bulletPoints.title || "",
                appendTo: o
            });
            var r = [];
            e.preferences.bulletPoints.firstText && r.push(e.preferences.bulletPoints.firstText);
            e.preferences.bulletPoints.secondText && r.push(e.preferences.bulletPoints.secondText);
            e.preferences.bulletPoints.thirdText && r.push(e.preferences.bulletPoints.thirdText);
            (function(n) {
                var e = yo(document.createElement("ul"), n);
                n.lis && n.lis.forEach(function(n) {
                    var t = document.createElement("li");
                    t.textContent = n, e.appendChild(t)
                })
            })({
                lis: r,
                appendTo: o
            })
        }(t, e), t
    }

    function Bo(n) {
        var t = n.themeColours,
            o = n.purpose,
            r = n.ids,
            i = n.parent,
            a = r.input === Tt.OptionEssentialInputId,
            c = Do({
                dataIconType: "unchecked",
                width: "24",
                height: "24",
                path: "M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",
                colour: t.iconColor,
                focusable: !0
            }),
            s = function(n) {
                return Do({
                    dataIconType: "checked",
                    width: "24",
                    height: "24",
                    path: "M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",
                    colour: n,
                    focusable: !0
                })
            }(t.iconColor),
            l = vo({
                class: Tt.OptionClass,
                id: r.section
            }),
            d = function(n) {
                var e = yo(document.createElement("label"), n);
                return e.setAttribute("for", n.for), (null == n ? void 0 : n.text) && (e.textContent = n.text), e
            }({
                appendTo: l,
                for: r.input,
                text: o.description
            });
        ! function(n) {
            var e = yo(document.createElement("input"), n);
            e.setAttribute("type", n.type), n.checked && e.setAttribute("checked", "true"), n.disabled && e.setAttribute("disabled", "".concat(n.disabled)), (null == n ? void 0 : n.onChange) && e.addEventListener("change", n.onChange), n.tabindex && e.setAttribute("tabindex", "".concat(n.tabindex)), !0 === n.ariaReadonly && e.setAttribute("aria-readonly", "".concat(n.ariaReadonly))
        }(e({
            appendTo: d,
            id: r.input,
            type: "checkbox",
            checked: a,
            ariaReadonly: a
        }, n.tabindex && {
            tabindex: n.tabindex
        }));
        var u = bo({
            appendTo: d,
            ariaHidden: !0
        });
        u.appendChild(s), u.appendChild(c), Co({
            appendTo: l,
            text: o.longDescription
        }), a ? (s.style.display = "block", c.style.display = "none") : (s.style.display = "none", c.style.display = "block"), i.appendChild(l)
    }

    function Oo(n) {
        var e = n.bannerData,
            t = vo({
                id: Tt.WrapperId,
                class: Tt.WrapperClass
            }),
            o = vo({
                id: Tt.OverlayId,
                class: Tt.OverlayClass,
                text: " "
            });
        t.appendChild(o);
        var r = Eo({
            id: Tt.DialogId,
            class: Tt.DialogClass,
            role: "dialog",
            ariaModal: "true",
            ariaLabelledby: Tt.HeaderTitleId
        });
        t.appendChild(r), Ao(r, e);
        var i = vo({
            class: Tt.DialogScrollableClass
        });
        return r.appendChild(i), So(i, e),
            function(n, e) {
                var t = Pt(e.theme.theme, e.theme.fontColor, e.theme.backgroundColor, e.theme.buttonFontColor, e.theme.buttonBackgroundColor),
                    o = vo({
                        class: Tt.OptionWrapperClass
                    });
                n.appendChild(o), Bo({
                    themeColours: t,
                    ids: {
                        section: Tt.OptionEssentialId,
                        input: Tt.OptionEssentialInputId
                    },
                    purpose: {
                        description: e.preferences.purposes.essentialName,
                        longDescription: e.preferences.purposes.essentialDesc
                    },
                    parent: o,
                    tabindex: "-1"
                }), Bo({
                    themeColours: t,
                    ids: {
                        section: Tt.OptionPreferencesId,
                        input: Tt.OptionPreferencesInputId
                    },
                    purpose: {
                        description: e.preferences.purposes.preferencesName,
                        longDescription: e.preferences.purposes.preferencesDesc
                    },
                    parent: o
                }), Bo({
                    themeColours: t,
                    ids: {
                        section: Tt.OptionMarketingId,
                        input: Tt.OptionMarketingInputId
                    },
                    purpose: {
                        description: e.preferences.purposes.marketingName,
                        longDescription: e.preferences.purposes.marketingDesc
                    },
                    parent: o
                }), Bo({
                    themeColours: t,
                    ids: {
                        section: Tt.OptionAnalyticsId,
                        input: Tt.OptionAnalyticsInputId
                    },
                    purpose: {
                        description: e.preferences.purposes.performanceName,
                        longDescription: e.preferences.purposes.performanceDesc
                    },
                    parent: o
                })
            }(i, e), t
    }! function(n) {
        n.Accepted = "accept", n.Declined = "decline", n.AcceptedAll = "accept_all", n.DeclinedAll = "decline_all", n.ManagePreferences = "manage_preferences", n.Save = "save", n.LeavePreferences = "leave_preferences", n.PrivacyPolicyView = "privacy_policy_view"
    }(po || (po = {})),
    function(n) {
        n.BottomFullWidth = "bottom-full-width", n.BottomLeft = "bottom-left", n.Center = "center", n.BottomRight = "bottom-right", n.BottomCenter = "bottom-center"
    }(fo || (fo = {})),
    function(n) {
        n.H1 = "h1", n.H2 = "h2", n.H3 = "h3"
    }(ho || (ho = {})),
    function(n) {
        n.Escape = "Escape", n.Tab = "Tab"
    }(mo || (mo = {}));
    var Po = function() {
            function n(n) {
                var e = n.bannerData,
                    t = n.storefrontAccessToken,
                    o = n.checkoutRootDomain,
                    r = n.storefrontRootDomain,
                    i = n.isHeadless;
                this.bannerData = e, i ? (this.storefrontAccessToken = t, this.checkoutRootDomain = o, this.storefrontRootDomain = r, this.logger = new go({
                    shopDomain: o,
                    isHeadless: i
                })) : this.logger = new go
            }
            return n.show = function() {
                var n = document.getElementById(Tt.WrapperId);
                null !== n && (n.style.display = "block", document.body.style.setProperty("overflow", "hidden"))
            }, n.hide = function(n) {
                var e = document.getElementById(Tt.WrapperId);
                null !== e && (e.style.display = "none", document.body.style.removeProperty("overflow")), n && n.focus()
            }, n.hideModalAndBanner = function(e) {
                n.hide();
                var t = document.getElementById(Et.DialogId);
                null !== t && (t.style.display = "none"), e && e.focus()
            }, n.selectedConsent = function() {
                var n = document.getElementById(Tt.OptionMarketingInputId),
                    e = document.getElementById(Tt.OptionAnalyticsInputId),
                    t = document.getElementById(Tt.OptionPreferencesInputId),
                    o = n.checked ? "1" : "0",
                    r = e.checked ? "1" : "0",
                    i = t.checked ? "1" : "0";
                return "".concat(o).concat(r).concat(i)
            }, n.prototype.init = function() {
                return t(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        return this.render(), [2]
                    })
                })
            }, n.prototype.setCheckboxesToCurrentConsent = function() {
                var n = document.getElementById(Tt.OptionAnalyticsInputId),
                    e = document.getElementById(Tt.OptionPreferencesInputId),
                    t = document.getElementById(Tt.OptionMarketingInputId);
                this.handleOptionChange({
                    target: n,
                    isReadOnly: !1,
                    sectionId: Tt.OptionAnalyticsId,
                    checked: ze()
                }), this.handleOptionChange({
                    target: e,
                    isReadOnly: !1,
                    sectionId: Tt.OptionPreferencesId,
                    checked: Ve()
                }), this.handleOptionChange({
                    target: t,
                    isReadOnly: !1,
                    sectionId: Tt.OptionMarketingId,
                    checked: Fe()
                })
            }, n.prototype.render = function() {
                this.addCSS(this.bannerData), this.addHTML(this.bannerData), this.previouslyFocusedElement = document.activeElement, n.show(), this.setupCheckboxEventHandlers(), this.setupButtonEventHandlers(), this.setupKeyboardEventHandlers(), this.logger.emitInteraction(po.ManagePreferences)
            }, n.prototype.addCSS = function(n) {
                var e = function(n) {
                        var e = n.bannerData,
                            t = n.selectorPrefix,
                            o = t ? "".concat(t, " ") : "",
                            r = Pt(e.theme.theme, e.theme.fontColor, e.theme.backgroundColor, e.theme.buttonFontColor, e.theme.buttonBackgroundColor);
                        return "\n    ".concat(o, ".").concat(Tt.WrapperClass, " {\n      position: relative;\n    }\n    ").concat(o, ".").concat(Tt.WrapperClass, ':after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n\n    ').concat(o, ".").concat(Tt.DialogClass, " {\n      box-shadow: 0 5px 10px rgb(63 63 68 / 50%);\n      position: fixed;\n      z-index: 2000002;\n      opacity: 1;\n      background-color: ").concat(r.backgroundColor, ";\n      max-height: 80%;\n      overflow-y: auto;\n      top: 50%;\n      transform: translate(0, -50%);\n      min-width: 280px;\n      border-radius: 3px;\n      display: flex;\n      flex-direction: column;\n      left: 25%;\n      width: 50%;\n      text-align: left;\n    }\n    @media only screen and (max-width: 1900px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " {\n        left: 20%;\n        width: 60%;\n      }\n    }\n    @media only screen and (max-width: 1600px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " {\n        left: 15%;\n        width: 70%;\n      }\n    }\n    @media only screen and (max-width: 1350px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " {\n        left: 5%;\n        width: 90%;\n      }\n    }\n\n    ").concat(o, ".").concat(Tt.OverlayClass, " {\n      z-index: 2000001;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.6);\n    }\n\n    /* Header */\n\n    ").concat(o, ".").concat(Tt.DialogClass, " header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      padding: 32px 32px 20px 32px;\n      border-bottom: 1px solid ").concat(r.sectionDivider, ";\n      position: relative;\n      background: transparent;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " header {\n        flex-direction: column;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " header {\n        padding: 15px 20px 10px 20px;\n      }\n    }\n    ").concat(o, ".").concat(Tt.DialogClass, " header h2 {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0 20px 0 0 !important;\n      font-weight: 600;\n      font-size: 130%;\n      line-height: 1.2;\n      width: 100%;\n      text-align: left;\n      word-break: normal;\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " header h2 {\n        margin: 0 0 .8em 0;\n        padding: 0 !important;\n        text-align: center;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(Tt.DialogClass, " header h2 {\n        text-align: left;\n        padding: 0 25px 0 0 !important;\n      }\n    }\n\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, " {\n      position: absolute;\n      top: 40px;\n      right: 35px;\n      width: 24px;\n      height: 24px;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n      border-radius: 50%;\n      min-width: 24px;\n    }\n\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, " svg {\n      height: 12px;\n      width: 12px;\n    }\n\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(Tt.HeaderCloseClass, " {\n        top: 20px;\n        right: 20px;\n      }\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(Tt.HeaderCloseClass, " {\n        top: 30px;\n        right: 30px;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(Tt.HeaderCloseClass, " {\n        top: 15px;\n        right: 15px;\n      }\n    }\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, ":hover {\n      cursor: pointer;\n    }\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, ":focus {\n      outline: none;\n      box-shadow: 0 0 0 3px ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, " svg path {\n      fill: ").concat(r.fontColor, ";\n    }\n    ").concat(o, ".").concat(Tt.HeaderCloseClass, ":disabled svg path {\n      fill: ").concat(r.sectionDivider, ";\n    }\n\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " {\n      margin: 0;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: row;\n      padding: 0 50px 0 0;\n      width: auto;\n    }\n\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(Tt.HeaderActionsClass, " {\n        flex-direction: column;\n        width: 100%;\n      }\n    }\n    @media only screen and (max-width: 1200px) {\n      ").concat(o, ".").concat(Tt.HeaderActionsClass, " {\n        padding: 0;\n      }\n    }\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " button {\n      text-decoration: none;\n      font-family: inherit;\n      padding: 8px 25px 10px 25px;\n      margin: 0 20px 0 0;\n      font-size: 110%;\n      background: ").concat(r.button.backgroundColor, ";\n      color: ").concat(r.button.fontColor, ";\n      border: 1px solid ").concat(r.button.borderColor, ";\n      white-space: nowrap;\n      border-radius: 2px;\n      line-height: 120%;\n      height: unset;\n    }\n    @media only screen and (max-width: 750px) {\n      ").concat(o, ".").concat(Tt.HeaderActionsClass, " button {\n        width: 100%;\n        margin-bottom: 15px;\n      }\n    }\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " button.primary {\n      background: ").concat(r.primaryButton.backgroundColor, ";\n      color: ").concat(r.primaryButton.fontColor, ";\n      border: 1px solid ").concat(r.primaryButton.borderColor, ";\n    }\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " button:last-child {\n      margin-right: 0;\n    }\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " button:hover {\n      cursor: pointer;\n    }\n    ").concat(o, ".").concat(Tt.HeaderActionsClass, " button:focus {\n      outline: none;\n      box-shadow: 0 0 0 4px ").concat(r.focused, ";\n    }\n\n    ").concat(o, ".").concat(Tt.DialogScrollableClass, " {\n      overflow-y: auto;\n      position: relative;\n    }\n\n    ").concat(o, ".").concat(Tt.DialogScrollableClass, "::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n\n    /* Intro */\n\n    ").concat(o, ".").concat(Tt.IntroClass, " h3 {\n      color: ").concat(r.fontColor, ";\n      font-family: inherit;\n      margin: 0 0 15px 0;\n      padding: 0 !important;\n      font-weight: 600;\n      line-height: 1.2;\n      text-align: left;\n    }\n    ").concat(o, ".").concat(Tt.IntroClass, " p {\n      color: ").concat(r.fontSubduedColor, ";\n      font-family: inherit;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(Tt.IntroClass, " ul {\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(Tt.IntroClass, " ul li {\n      margin: 0 0 0.5em 1.7em;\n      padding: 0;\n      line-height: 1.2;\n    }\n    ").concat(o, ".").concat(Tt.IntroMainClass, " {\n      padding: 20px 32px 0 32px;\n      line-height: 1.5;\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(Tt.IntroMainClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(o, ".").concat(Tt.IntroMainClass, " p {\n      padding-bottom: 20px;\n    }\n    ").concat(o, ".").concat(Tt.IntroMainClass, " h3 {\n      font-size: 110%;\n    }\n    ").concat(o, ".").concat(Tt.IntroMainClass, " p {\n      font-size: 105%;\n      margin: 0;\n      padding: 0;\n    }\n    ").concat(o, ".").concat(Tt.IntroExplainWrapperClass, " {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      margin: 0;\n      padding: 20px 32px 0 32px;\n      color: ").concat(r.fontSubduedColor, ";\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(Tt.IntroExplainWrapperClass, " {\n        flex-direction: column;\n        padding-bottom: 0;\n      }\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(Tt.IntroExplainWrapperClass, " {\n        padding: 20px 20px 0 20px;\n      }\n    }\n    ").concat(o, ".").concat(Tt.IntroExplainAcceptClass, " {\n      width: 100%;\n      padding: 0 40px 0 0;\n    }\n    ").concat(o, ".").concat(Tt.IntroExplainAcceptClass, " li {\n      list-style-type: disc;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(Tt.IntroExplainAcceptClass, " {\n        width: 100%;\n        padding-right: 0;\n      }\n    }\n    ").concat(o, ".").concat(Tt.IntroExplainAcceptClass, " h3 {\n      font-size: 110%;\n    }\n\n    /* Options */\n\n    ").concat(o, ".").concat(Tt.OptionWrapperClass, " {\n      padding: 0 32px 32px 32px;\n      color: ").concat(r.fontColor, ";\n    }\n    @media only screen and (max-width: 400px) {\n      ").concat(o, ".").concat(Tt.OptionWrapperClass, " {\n        padding: 0 20px 15px 20px;\n      }\n    }\n\n    ").concat(o, ".").concat(Tt.OptionClass, " {\n      margin: 0;\n      font-size: 100%;\n      line-height: 1.1;\n      padding: 20px 0 0 0;\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, ":first-child {\n      padding: 25px 0 0 0;\n      margin: 20px 0 0 0;\n      border-top: 1px solid ").concat(r.sectionDivider, ";\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " label {\n      display: flex;\n      gap: 20px;\n      color: ").concat(r.fontColor, ";\n      cursor: pointer;\n      font-family: inherit;\n      margin: 0 0 5px 0;\n      padding: 0;\n      font-weight: 600;\n      font-size: 110%;\n      line-height: 1.2;\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " label input {\n      position: absolute;\n      clip: rect(1px, 1px, 1px, 1px);\n      padding: 0;\n      border: 0;\n      height: 1px;\n      width: 1px;\n      overflow: hidden;\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " label span {\n      order: -1;\n      display: inline-block;\n      background-color: ").concat(r.backgroundColor, ";\n      width: 24px;\n      height: 24px;\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " label span svg {\n      background-color: ").concat(r.backgroundColor, ";\n      border-radius: 3px;\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, ' label input[aria-readonly="true"] ~ span svg {\n      opacity: 0.2;\n      cursor: not-allowed;\n    }\n    ').concat(o, ".").concat(Tt.OptionClass, " label input:focus ~ span {\n      background-color: ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " label input:focus ~ span svg {\n      outline: none;\n      border-radius: 5px;\n      box-shadow: 0 0 0 4px ").concat(r.focused, ";\n    }\n    ").concat(o, ".").concat(Tt.OptionClass, " p {\n      line-height: 1.3;\n      font-size: 100%;\n      color: ").concat(r.fontSubduedColor, ";\n      margin: 0;\n      padding: 0 0 0 45px;\n    }\n    @media only screen and (max-width: 700px) {\n      ").concat(o, ".").concat(Tt.OptionClass, " p {\n        width: 100%;\n        line-height: 1.4;\n      }\n    }\n  ")
                    }({
                        bannerData: n
                    }),
                    t = Io({
                        id: Tt.StylesContainerId,
                        content: e
                    });
                document.head.appendChild(t)
            }, n.prototype.addHTML = function(e) {
                var t, o, r, i = Oo({
                        bannerData: e
                    }),
                    a = document.getElementById(Et.DialogId);
                o = i, null === (r = null == (t = a) ? void 0 : t.parentNode) || void 0 === r || r.insertBefore(o, t.nextSibling);
                var c = document.getElementById(Tt.DialogId);
                c && (this.setCheckboxesToCurrentConsent(), c.dataset.consent = n.selectedConsent()), n.hide()
            }, n.prototype.handleOptionChange = function(e) {
                var t = e.target,
                    o = e.isReadOnly,
                    r = e.sectionId,
                    i = e.checked;
                (void 0 !== i && i || o) && (t.checked = !0);
                var a, c, s, l = t.checked,
                    d = document.getElementById(r),
                    u = d.querySelector('svg[data-icon-type="checked"]'),
                    p = d.querySelector('svg[data-icon-type="unchecked"]');
                l ? (u.style.display = "block", p.style.display = "none") : (u.style.display = "none", p.style.display = "block"), a = n.selectedConsent(), c = document.getElementById(Tt.DialogId), s = document.getElementById(Tt.HeaderSaveId), (null == c ? void 0 : c.dataset.consent) && (null == c ? void 0 : c.dataset.consent) !== a ? s.className = "primary" : s.className = ""
            }, n.prototype.setupCheckboxEventHandlers = function() {
                var n = this,
                    e = document.getElementById(Tt.OptionEssentialInputId);
                null == e || e.addEventListener("change", function(e) {
                    n.handleOptionChange({
                        target: e.target,
                        isReadOnly: !0,
                        sectionId: Tt.OptionEssentialId
                    })
                });
                var t = document.getElementById(Tt.OptionAnalyticsInputId);
                null == t || t.addEventListener("change", function(e) {
                    n.handleOptionChange({
                        target: e.target,
                        isReadOnly: !1,
                        sectionId: Tt.OptionAnalyticsId
                    })
                });
                var o = document.getElementById(Tt.OptionPreferencesInputId);
                null == o || o.addEventListener("change", function(e) {
                    n.handleOptionChange({
                        target: e.target,
                        isReadOnly: !1,
                        sectionId: Tt.OptionPreferencesId
                    })
                });
                var r = document.getElementById(Tt.OptionMarketingInputId);
                null == r || r.addEventListener("change", function(e) {
                    n.handleOptionChange({
                        target: e.target,
                        isReadOnly: !1,
                        sectionId: Tt.OptionMarketingId
                    })
                })
            }, n.prototype.setupButtonEventHandlers = function() {
                var e = this,
                    t = document.getElementById(Tt.HeaderCloseId);
                null == t || t.addEventListener("click", function() {
                    n.hide(e.previouslyFocusedElement), e.logger.emitInteraction(po.LeavePreferences)
                });
                var o = document.getElementById(Tt.HeaderSaveId);
                null == o || o.addEventListener("click", function() {
                    if (Ut()) n.hideModalAndBanner(e.previouslyFocusedElement);
                    else {
                        var t = document.getElementById(Tt.OptionMarketingInputId),
                            o = document.getElementById(Tt.OptionAnalyticsInputId),
                            r = document.getElementById(Tt.OptionPreferencesInputId),
                            i = t.checked,
                            a = o.checked,
                            c = r.checked;
                        jt({
                            marketing: i,
                            analytics: a,
                            preferences: c,
                            checkoutRootDomain: e.checkoutRootDomain,
                            storefrontRootDomain: e.storefrontRootDomain,
                            storefrontAccessToken: e.storefrontAccessToken,
                            callback: function() {
                                n.hideModalAndBanner(e.previouslyFocusedElement)
                            }
                        }), e.logger.emitInteraction(po.Save, "".concat(i ? "m" : "").concat(a ? "a" : "").concat(c ? "p" : ""))
                    }
                });
                var r = document.getElementById(Tt.HeaderAcceptId);
                null == r || r.addEventListener("click", function() {
                    Ut() ? n.hideModalAndBanner(e.previouslyFocusedElement) : (jt({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: e.checkoutRootDomain,
                        storefrontRootDomain: e.storefrontRootDomain,
                        storefrontAccessToken: e.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(e.previouslyFocusedElement)
                        }
                    }), e.logger.emitInteraction(po.AcceptedAll))
                });
                var i = document.getElementById(Tt.HeaderDeclineId);
                null == i || i.addEventListener("click", function() {
                    Ut() ? n.hideModalAndBanner(e.previouslyFocusedElement) : (jt({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: e.checkoutRootDomain,
                        storefrontRootDomain: e.storefrontRootDomain,
                        storefrontAccessToken: e.storefrontAccessToken,
                        callback: function() {
                            n.hideModalAndBanner(e.previouslyFocusedElement)
                        }
                    }), e.logger.emitInteraction(po.DeclinedAll))
                })
            }, n.prototype.setupKeyboardEventHandlers = function() {
                var n = this,
                    e = document.getElementById(Tt.DialogId);
                if (e) {
                    var t = this.getFocusableElements(e);
                    e.addEventListener("keydown", function(e) {
                        n.escToClose(e), n.tabTrap(e, t)
                    }), this.focusFirstEle(t)
                }
            }, n.prototype.getFocusableElements = function(n) {
                return Array.from(n.querySelectorAll('button, [href], input:not([tabindex="-1"]), select, textarea, [tabindex="0"]'))
            }, n.prototype.focusFirstEle = function(n) {
                (null == n ? void 0 : n.length) && n[0].focus()
            }, n.prototype.escToClose = function(e) {
                e.key === mo.Escape && (n.hide(this.previouslyFocusedElement), this.logger.emitInteraction(po.LeavePreferences))
            }, n.prototype.tabTrap = function(n, e) {
                if ((null == e ? void 0 : e.length) && n.key === mo.Tab) {
                    var t = e[0],
                        o = e[e.length - 1];
                    t && o && (n.shiftKey && document.activeElement === t ? (n.preventDefault(), o.focus()) : n.shiftKey || document.activeElement !== o || (n.preventDefault(), t.focus()))
                }
            }, n
        }(),
        Mo = function() {
            function n(n) {
                var e = n.isHeadless,
                    t = n.storefrontAccessToken,
                    o = n.checkoutRootDomain,
                    r = n.storefrontRootDomain,
                    i = n.locale,
                    a = n.country;
                this.locale = i, this.country = a, this.storefrontAccessToken = t, this.isHeadless = null != e ? e : Boolean(t), this.isHeadless && (this.checkoutRootDomain = o, this.storefrontRootDomain = r), this.logger = new go({
                    shopDomain: o,
                    isHeadless: this.isHeadless
                }), this.preferencesModal = void 0
            }
            return n.show = function() {
                var n = document.getElementById(Et.DialogId);
                if (null !== n) {
                    n.style.display = "block";
                    var e = function(n) {
                        if ("Tab" === n.code) {
                            n.preventDefault();
                            var t = document.getElementById(Et.ButtonManagePrefsId);
                            null == t || t.focus()
                        }
                        window.removeEventListener("keydown", e)
                    };
                    window.addEventListener("keydown", e)
                }
            }, n.hide = function() {
                var n = document.getElementById(Et.DialogId);
                null !== n && (n.style.display = "none")
            }, n.prototype.init = function() {
                return t(this, arguments, void 0, function(t) {
                    var r, i, a;
                    return void 0 === t && (t = !1), o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 3, , 4]), r = Boolean(this.isHeadless), [4, Vt.getServerData(this.checkoutRootDomain, this.storefrontAccessToken, this.locale, this.country, r)];
                            case 1:
                                return (i = o.sent()) && Object.keys(i).length ? [4, "loading" !== document.readyState ? Promise.resolve() : new Promise(function(n) {
                                    document.addEventListener("DOMContentLoaded", n)
                                })] : (console.warn("banner not rendered due to lack of saved data"), [2, Promise.resolve(!1)]);
                            case 2:
                                return o.sent(), this.removeExistingElements(), this.render(e({}, i)), t && (this.preferencesModal = new Po({
                                    bannerData: i,
                                    storefrontAccessToken: this.storefrontAccessToken,
                                    checkoutRootDomain: this.checkoutRootDomain,
                                    storefrontRootDomain: this.storefrontRootDomain,
                                    isHeadless: this.isHeadless
                                }), this.preferencesModal.init(), n.hide()), [2, Promise.resolve(!0)];
                            case 3:
                                return a = o.sent(), this.removeExistingElements(), [2, Promise.reject(a)];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, n.prototype.render = function(e) {
                var t = e.enabled,
                    o = window.Shopify.country,
                    r = Ft() && this.isCountryInRegionVisibility(o, e),
                    i = Ut() || r || t;
                i && !document.getElementById(Et.DialogId) && (this.addCSS(e), this.addBannerHTML(e)), i && Wt() && (n.show(), Ft() || this.logger.emitRender())
            }, n.prototype.isCountryInRegionVisibility = function(n, e) {
                var t;
                return null === (t = e.regionVisibility) || void 0 === t ? void 0 : t.includes(n)
            }, n.prototype.addCSS = function(n) {
                var e = Io({
                    id: Et.StylesContainerId,
                    content: Mt({
                        bannerData: n
                    })
                });
                document.head.appendChild(e)
            }, n.prototype.addBannerHTML = function(n) {
                var e = To({
                        bannerData: n
                    }),
                    t = document.getElementsByTagName("body")[0];
                t.insertBefore(e, t.firstChild), this.addEventListeners(n)
            }, n.prototype.removeExistingElements = function() {
                var n, e, t, o, r = document.getElementById(Et.DialogId),
                    i = document.getElementById(Et.StylesContainerId),
                    a = document.getElementById(Tt.WrapperId),
                    c = document.getElementById(Tt.StylesContainerId);
                null === (n = null == r ? void 0 : r.parentNode) || void 0 === n || n.removeChild(r), null === (e = null == i ? void 0 : i.parentNode) || void 0 === e || e.removeChild(i), null === (t = null == a ? void 0 : a.parentNode) || void 0 === t || t.removeChild(a), null === (o = null == c ? void 0 : c.parentNode) || void 0 === o || o.removeChild(c)
            }, n.prototype.addEventListeners = function(n) {
                var e = this;
                this.addEssentialEventListeners(), Ut() || this.addMetricsEventListeners();
                var t = document.getElementById(Et.ButtonManagePrefsId);
                null == t || t.addEventListener("click", function(t) {
                    t.preventDefault(), e.preferencesModal = new Po({
                        bannerData: n,
                        storefrontAccessToken: e.storefrontAccessToken,
                        checkoutRootDomain: e.checkoutRootDomain,
                        storefrontRootDomain: e.storefrontRootDomain,
                        isHeadless: e.isHeadless
                    }), e.preferencesModal.init()
                })
            }, n.prototype.addEssentialEventListeners = function() {
                var e = this,
                    t = document.getElementById(Et.ButtonAcceptId);
                null == t || t.addEventListener("click", function() {
                    Ut() ? n.hide() : jt({
                        marketing: !0,
                        analytics: !0,
                        preferences: !0,
                        checkoutRootDomain: e.checkoutRootDomain,
                        storefrontRootDomain: e.storefrontRootDomain,
                        storefrontAccessToken: e.storefrontAccessToken,
                        callback: n.hide
                    })
                });
                var o = document.getElementById(Et.ButtonDeclineId);
                null == o || o.addEventListener("click", function() {
                    Ut() ? n.hide() : jt({
                        marketing: !1,
                        analytics: !1,
                        preferences: !1,
                        checkoutRootDomain: e.checkoutRootDomain,
                        storefrontRootDomain: e.storefrontRootDomain,
                        storefrontAccessToken: e.storefrontAccessToken,
                        callback: n.hide
                    })
                })
            }, n.prototype.addMetricsEventListeners = function() {
                var n = this,
                    e = document.getElementById(Et.BodyCopyPolicyLinkId);
                null == e || e.addEventListener("click", function() {
                    n.logger.emitInteraction(po.PrivacyPolicyView)
                });
                var t = document.getElementById(Et.ButtonAcceptId);
                null == t || t.addEventListener("click", function() {
                    n.logger.emitInteraction(po.Accepted)
                });
                var o = document.getElementById(Et.ButtonDeclineId);
                null == o || o.addEventListener("click", function() {
                    n.logger.emitInteraction(po.Declined)
                })
            }, n
        }(),
        Ro = "#shopifyReshowConsentBanner";

    function Ho(n, e) {
        var t, o = n.target;
        (null == (t = o) ? void 0 : t.closest('a[href$="'.concat(Ro, '"]'))) && e(n)
    }
    var Lo = !1;

    function No(n) {
        var e = n.isClassicHydrogen,
            t = n.asyncConsent,
            o = n.checkoutRootDomain;
        if (e && !0 !== t && function(n) {
                if (!n) return !1;
                try {
                    var e = n.includes("://") ? n : "".concat(window.location.protocol, "//").concat(n);
                    return new URL(e).origin === window.location.origin
                } catch (n) {
                    return !1
                }
            }(o) && function() {
                var n, e, t = "function" == typeof(null === (e = null === (n = window.Shopify) || void 0 === n ? void 0 : n.customerPrivacy) || void 0 === e ? void 0 : e.setTrackingConsent),
                    o = window.privacyBanner,
                    r = "function" == typeof(null == o ? void 0 : o.loadBanner) && "function" == typeof(null == o ? void 0 : o.showPreferences);
                return t && r
            }()) try {
            ! function() {
                if (!z() && !Ze) try {
                    document.addEventListener("shopifyCustomerPrivacyApiLoaded", it), Ze = !0
                } catch {
                    return
                }
            }()
        } catch (n) {}
    }

    function jo() {
        return t(this, arguments, void 0, function(n) {
            var e, r, i, a, c, s, l, d, u, p, f, h, m, g, y = this,
                v = void 0 === n ? {} : n,
                b = v.storefrontAccessToken,
                w = v.checkoutRootDomain,
                C = v.storefrontRootDomain,
                x = v.showPreferences,
                k = void 0 !== x && x,
                _ = v.locale,
                I = v.country,
                D = v.forceShow,
                E = void 0 !== D && D;
            return o(this, function(n) {
                return e = rn(), r = Boolean(b), i = null !== (p = e.isHeadless) && void 0 !== p ? p : r, a = r && void 0 === e.isHeadless, b || (b = e.storefrontAccessToken), w || (w = null !== (f = e.consentDomain) && void 0 !== f ? f : window.location.hostname), C || (C = null !== (h = e.consentDomain) && void 0 !== h ? h : window.location.hostname), _ || (_ = null === (m = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === m ? void 0 : m.locale), I || (I = null === (g = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === g ? void 0 : g.country), No({
                    isClassicHydrogen: a,
                    asyncConsent: e.asyncConsent,
                    checkoutRootDomain: w
                }), c = function() {
                    return t(y, void 0, void 0, function() {
                        var n, e;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), n = new go({
                                        shopDomain: w,
                                        isHeadless: i
                                    }), !(zt() || Wt() || k || E) || function() {
                                        var n;
                                        return (null === (n = null === window || void 0 === window ? void 0 : window.Shopify) || void 0 === n ? void 0 : n.designMode) || !1
                                    }() ? [3, 2] : [4, new Mo({
                                        isHeadless: i,
                                        storefrontAccessToken: b,
                                        checkoutRootDomain: w,
                                        storefrontRootDomain: C,
                                        locale: _,
                                        country: I
                                    }).init(k)];
                                case 1:
                                    t.sent() && (E && Mo.show(), a && yn()), t.label = 2;
                                case 2:
                                    return n.emitInitialized(), [3, 4];
                                case 3:
                                    return e = t.sent(), console.error("Error initializing banner", e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, a ? (e.injectedConsent ? c() : (s = Ne(), jt({
                    marketing: (l = {
                        yes: !0,
                        no: !1
                    })[s.marketing],
                    analytics: l[s.analytics],
                    preferences: l[s.preferences],
                    sale_of_data: l[s.sale_of_data],
                    storefrontAccessToken: b,
                    checkoutRootDomain: w,
                    storefrontRootDomain: C,
                    callback: c
                })), [2]) : (d = ct(), u = function() {
                    return i && (Lo || (Lo = !0, yn())), c()
                }, d ? d.then(u, function(n) {
                    return console.error("Unable to collect initial consent", n), c()
                }) : u(), [2])
            })
        })
    }

    function $o() {
        window.Shopify || (window.Shopify = {}), (!window.Shopify.trackingConsent || !window.Shopify.customerPrivacy || Object.keys(window.Shopify.customerPrivacy).length <= 1) && (window.Shopify.customerPrivacy = window.Shopify.trackingConsent = Ge())
    }

    function qo() {
        return t(this, arguments, void 0, function(n) {
            var t, r;
            return void 0 === n && (n = {}), o(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = rn(), r = Boolean(n.storefrontAccessToken), (t.isHeadless || r) && $o(), [4, jo(e(e({}, n), {
                            showPreferences: !0
                        }))];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    }

    function Wo() {
        var n, e;
        if ("0" !== Nt("pb")) {
            try {
                kt()
            } catch (n) {}
            var t = rn(),
                o = Boolean(window.Shopify),
                r = null !== (n = t.isHeadless) && void 0 !== n ? n : !o,
                i = null !== (e = t.isHeadless) && void 0 !== e ? e : o;
            r && $o(), i && jo();
            var a = function(n) {
                n.preventDefault(), qo()
            };
            document.addEventListener("click", function(n) {
                Ho(n, a)
            })
        }
    }
    return Wo(), n.boot = Wo, n.loadBanner = jo, n.showBanner = function() {
        return t(this, arguments, void 0, function(n) {
            var t, r;
            return void 0 === n && (n = {}), o(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = rn(), r = Boolean(n.storefrontAccessToken), (t.isHeadless || r) && $o(), [4, jo(e(e({}, n), {
                            showPreferences: !1,
                            forceShow: !0
                        }))];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    }, n.showPreferences = qo, n
}({});