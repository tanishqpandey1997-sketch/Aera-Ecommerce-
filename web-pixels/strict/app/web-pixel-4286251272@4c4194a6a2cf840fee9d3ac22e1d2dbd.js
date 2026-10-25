(() => {
    var fe = Object.create;
    var g = Object.defineProperty,
        Ae = Object.defineProperties,
        xe = Object.getOwnPropertyDescriptor,
        he = Object.getOwnPropertyDescriptors,
        Ce = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        ge = Object.getPrototypeOf,
        v = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable;
    var U = (e, t, n) => t in e ? g(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        _ = (e, t) => {
            for (var n in t || (t = {})) v.call(t, n) && U(e, n, t[n]);
            if (f)
                for (var n of f(t)) V.call(t, n) && U(e, n, t[n]);
            return e
        },
        X = (e, t) => Ae(e, he(t));
    var Y = (e, t) => {
        var n = {};
        for (var o in e) v.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && f)
            for (var o of f(e)) t.indexOf(o) < 0 && V.call(e, o) && (n[o] = e[o]);
        return n
    };
    var E = (e, t) => () => (e && (t = e(e = 0)), t);
    var ve = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var be = (e, t, n, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Ce(t)) !v.call(e, i) && i !== n && g(e, i, {
                get: () => t[i],
                enumerable: !(o = xe(t, i)) || o.enumerable
            });
        return e
    };
    var Te = (e, t, n) => (n = e != null ? fe(ge(e)) : {}, be(t || !e || !e.__esModule ? g(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
    var d = (e, t, n) => new Promise((o, i) => {
        var s = a => {
                try {
                    c(n.next(a))
                } catch (l) {
                    i(l)
                }
            },
            r = a => {
                try {
                    c(n.throw(a))
                } catch (l) {
                    i(l)
                }
            },
            c = a => a.done ? o(a.value) : Promise.resolve(a.value).then(s, r);
        c((n = n.apply(e, t)).next())
    });
    var $, K = E(() => {
        $ = "WebPixel::Render"
    });
    var b, M = E(() => {
        K();
        b = e => shopify.extend($, e)
    });
    var T, Q = E(() => {
        T = {
            ANALYTICS_DECLINED: "analyticsConsentDeclined",
            ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
            CONSENT_COLLECTED: "visitorConsentCollected"
        }
    });
    var G = E(() => {
        M();
        Q()
    });
    var S = E(() => {
        G()
    });
    var F, J, W, j, P, w, q, A, H, z, Z, ee, te, ne, u, I = E(() => {
        F = "/a.klaviyo.com/client/event-bulk-create", J = "/a.klaviyo.com/client/events", W = "2024-10-15", j = "2025-07-15", P = "kl-post-identification-sync", w = "kl-post-identification-sync-shopify", q = "__kl_key", A = JSON.stringify([]), H = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, z = /^\+?[1-9]\d{1,14}$/, Z = "shopify-checkout-extension", ee = "shopify-web-pixel", te = "shopify-web-pixel", ne = "9BX3wh", u = "shopify_client_id"
    });
    var rt, x, ke, k, ie, oe, re, L = E(() => {
        I();
        rt = 1440 * 60 * 1e3, x = {
            maxChars: 5e4,
            maxEvents: 100,
            maxAgeDays: 30
        }, ke = x, k = (e, t) => typeof e == "number" && Number.isFinite(e) && e > 0 ? e : t, ie = e => {
            ke = {
                maxChars: k(e == null ? void 0 : e.anonymousQueueMaxChars, x.maxChars),
                maxEvents: k(e == null ? void 0 : e.anonymousQueueMaxEvents, x.maxEvents),
                maxAgeDays: k(e == null ? void 0 : e.anonymousQueueMaxAgeDays, x.maxAgeDays)
            }
        }, oe = Promise.resolve(), re = e => {
            let t = oe.then(e);
            return oe = t.catch(() => {}), t
        }
    });

    function h(e, t, n = 0, o, i) {
        return d(this, null, function*() {
            let s = i || 0,
                r = yield e();
            return (o ? o.includes(r.status) : r.status >= 400) && s < t ? (yield Ne(n), h(e, t, n, o, s + 1)) : r
        })
    }
    var Le, Oe, Ne, Re, ae, De, Be, O, Ue, Ve, Xe, Ye, se, $e, ce, Ke, le, N = E(() => {
        I();
        L();
        Le = e => H.test(e), Oe = e => z.test(e), Ne = e => new Promise(t => setTimeout(t, e));
        Re = (e, t, n) => d(null, null, function*() {
            let o = yield e.getItem(t), s = JSON.parse(o || A).slice(0, n);
            return {
                events: s,
                deleteCallback: () => re(() => d(null, null, function*() {
                    let r = JSON.parse((yield e.getItem(t)) || A);
                    yield e.setItem(t, JSON.stringify(r.slice(s.length)))
                }))
            }
        }), ae = (e, t = P, n = 1e3) => Re(e, t, n), De = new Set(["$exchange_id", "email", "id", "$email", "$id", "$anonymous", "$phone_number"]), Be = e => Set.prototype.has.call(De, e), O = !1, Ue = new Set(["klaviyo", "shopify"]), Ve = (e, t, n) => ({
            data: {
                type: "event-bulk-create",
                attributes: {
                    profile: {
                        data: {
                            type: "profile",
                            attributes: _({}, t),
                            meta: {
                                identifiers: t
                            }
                        }
                    },
                    events: {
                        data: e.map(o => {
                            let m = o,
                                {
                                    name: i,
                                    properties: s
                                } = m,
                                r = Y(m, ["name", "properties"]),
                                c = _(_({}, s), n || {});
                            (s == null ? void 0 : s.anonymous_backfill_source) !== void 0 && (c.anonymous_backfill_source = s.anonymous_backfill_source);
                            let a = c.service;
                            delete c.service;
                            let l = Ue.has(a) ? {
                                    name: i,
                                    service: a
                                } : {
                                    name: i
                                },
                                p = s == null ? void 0 : s.$event_id,
                                y = typeof p == "string" && p.length > 0 ? {
                                    unique_id: p
                                } : {};
                            return {
                                type: "event",
                                attributes: _(_(_({
                                    metric: {
                                        data: {
                                            type: "metric",
                                            attributes: l
                                        }
                                    }
                                }, r), y), Object.keys(c).length > 0 ? {
                                    properties: c
                                } : {})
                            }
                        })
                    }
                }
            }
        }), Xe = (e, t) => fetch(`${F}/?company_id=${e}`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "X-Klaviyo-Onsite": "1",
                "X-Klaviyo-API-Source": Z,
                revision: W
            },
            body: JSON.stringify(t)
        }), Ye = (e, t, n, o) => {
            let i = Ve(e, n, o);
            return h(() => Xe(t, i), 5, 1e3 + Math.random() * 1e3, [429])
        }, se = {
            $exchange_id: "_kx",
            email: "email",
            $email: "email",
            $phone_number: "phone_number",
            phone_number: "phone_number",
            $id: "external_id",
            id: "id",
            $kid: "id",
            $anonymous: "anonymous_id"
        }, $e = e => {
            let t = {};
            return Object.keys(se).forEach(n => {
                if (Be(n)) {
                    let o = e[n];
                    if (o) {
                        let i = (n === "$email" || n === "email") && !Le(o),
                            s = n === "$phone_number" && !Oe(o);
                        i || s || (t = X(_({}, t), {
                            [se[n]]: o
                        }))
                    }
                }
            }), t
        }, ce = (e, t, n, o, i, s) => {
            if (t.events.length !== 0) return Ye(t.events, n, o, s).then(r => {
                if (r.status === 429) throw Error("Saving event cache due to rate limit.");
                return t.deleteCallback()
            }).then(() => ae(i, e).then(r => ce(e, r, n, o, i, s)))
        }, Ke = (e, t, n, o, i) => {
            let s = e;
            if (!s || O) return;
            let r = $e(t);
            if (!r || Object.keys(r).length === 0) return;
            O = !0;
            let c = a => ae(n, a).then(l => ce(a, l, s, r, n, o));
            c(P).then(() => c(w)).then(() => {
                i && i()
            }).catch(() => {}).finally(() => {
                O = !1
            })
        }, le = (e, t) => d(null, null, function*() {
            let n = yield t.getItem(q);
            if (!n) return;
            let o = e.data.checkout.email,
                i = e.data.checkout.phone;
            Ke(n, _(_({}, o && {
                $email: o
            }), i && {
                $phone_number: i
            }), t, {
                anonymous_backfill_source: `checkout_pixel_${e.name}`
            })
        })
    });
    var Me, de, R, _e, D = E(() => {
        S();
        I();
        Me = "Thu, 01 Jan 1970 00:00:00 GMT", de = e => (e == null ? void 0 : e.analyticsProcessingAllowed) === !0 && (e == null ? void 0 : e.marketingAllowed) === !0, R = (e, t = !1) => d(null, null, function*() {
            return (yield e.cookie.get(u)) ? (yield e.cookie.set(u, `; expires=${Me}; Path=/`), t && console.log("[Klaviyo Web Pixel] Deleted shopify_client_id cookie (consent not granted)"), !0) : !1
        }), _e = (e, t, n, o = !1) => {
            var s;
            let i = de(e == null ? void 0 : e.customerPrivacy);
            return (s = t == null ? void 0 : t.subscribe) == null || s.call(t, T.CONSENT_COLLECTED, r => {
                i = de(r == null ? void 0 : r.customerPrivacy), o && console.log("[Klaviyo Web Pixel] Consent collected", {
                    clientIdCookieAllowed: i
                }), i || R(n, o)
            }), {
                isAllowed: () => i
            }
        }
    });
    var Qe, Ge, Ee, pe, ue = E(() => {
        N();
        I();
        D();
        Qe = (e, t) => fetch(`${J}/?company_id=${e}`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "X-Klaviyo-API-Source": ee,
                "X-Klaviyo-User-Agent": te,
                revision: j
            },
            body: JSON.stringify(t)
        }), Ge = (e, t) => h(() => Qe(e, t), 5, 1e3 + Math.random() * 1e3), Ee = (e, t, n, o, i = !1) => d(null, null, function*() {
            let s = yield t.sessionStorage.getItem("_kx");
            if (!s) {
                i && console.log("No encoded kx not processing");
                return
            }
            var r = "";
            try {
                r = atob(s)
            } catch (ye) {
                console.warn("Error while parsing exchange id.", ye.message);
                return
            }
            if (!r.includes(".")) {
                i && console.log("Invalid kx not processing");
                return
            }
            let c = r.split(".")[1];
            if (!c || c === ne) {
                i && console.log("Invalid cid not processing");
                return
            }
            let a = e.data.cartLine;
            if (!a) {
                i && console.log("Invalid cartLine not processing");
                return
            }
            let l = a.merchandise,
                p = l.product,
                y = p.id,
                m = l.id;
            if (!y) {
                console.log("Shopify product_added_to_cart web pixel event missing product id");
                return
            }
            if (!m) {
                console.log("Shopify product_added_to_cart web pixel event missing merchandise id");
                return
            }
            let B = {
                    $use_ip: !0,
                    _kx: r,
                    my_shopify_domain: o.data.shop.myshopifyDomain,
                    detail: {
                        metadata: {},
                        payload: {
                            event_id: e.id,
                            event_date_time: e.timestamp,
                            event_type: "product_added_to_cart",
                            user_agent: o.context.navigator.userAgent,
                            client_id: e.clientId,
                            page_url: o.context.window.location.href,
                            currency: l.price.currencyCode,
                            product: {
                                product_id: y,
                                product_title: p.title,
                                variant_id: m,
                                variant_title: l.title || p.title,
                                quantity: a.quantity,
                                variant_price: l.price.amount,
                                product_vendor: p.vendor
                            }
                        }
                    }
                },
                Ie = {
                    data: {
                        type: "event",
                        attributes: {
                            metric: {
                                data: {
                                    type: "metric",
                                    attributes: {
                                        name: "Added to Cart",
                                        service: "shopify"
                                    }
                                }
                            },
                            profile: {
                                data: {
                                    type: "profile",
                                    attributes: {
                                        _kx: r
                                    }
                                }
                            },
                            properties: B
                        }
                    }
                };
            i && console.log("Sending pixel event:", B), Ge(c, Ie)
        }), pe = function(e, t, n, o = !1) {
            return d(this, null, function*() {
                if (e.clientId) {
                    if (!n.isAllowed()) {
                        yield R(t, o), o && console.log("[Klaviyo Web Pixel] Skipped setting shopify_client_id cookie (consent not granted)");
                        return
                    }
                    let i = yield t.cookie.get(u);
                    if (!i || i !== e.clientId) {
                        let r = new Date;
                        r.setFullYear(r.getFullYear() + 1);
                        let c = e.clientId;
                        yield t.cookie.set(u, `${c}; expires=${r.toUTCString()}; Path=/`), o && console.log("[Klaviyo Web Pixel] Set shopify_client_id cookie", {
                            clientId: e.clientId,
                            previousValue: i || "none",
                            action: i ? "updated" : "new"
                        })
                    } else o && console.log("[Klaviyo Web Pixel] Skipped setting shopify_client_id cookie (unchanged)", {
                        clientId: e.clientId
                    })
                }
            })
        }
    });
    var me = ve(C => {
        S();
        N();
        ue();
        D();
        L();
        var Fe = ["checkout_completed", "payment_info_submitted", "checkout_contact_info_submitted", "checkout_shipping_info_submitted"];
        b(({
            analytics: e,
            browser: t,
            settings: n,
            init: o,
            customerPrivacy: i
        }) => {
            console.info("k-web-pixel-version", 3), Fe.map(a => {
                e.subscribe(a, l => d(null, null, function*() {
                    return le(l, t.localStorage)
                }))
            });
            var s = !1,
                r = !1;
            if (n && n.webPixelConfig) try {
                let a = atob(n.webPixelConfig),
                    l = JSON.parse(a);
                s = l.enableAddedToCartEvents === !0, r = l.debugging === !0, ie(l)
            } catch (a) {
                console.error("Error while parsing web pixel config data", a.message)
            }
            let c = _e(o, i, t, r);
            e.subscribe("page_viewed", a => d(null, null, function*() {
                pe(a, t, c, r)
            })), s && e.subscribe("product_added_to_cart", a => d(null, null, function*() {
                Ee(a, t, n, o, r)
            }))
        })
    });
    var kt = Te(me());
})();