(() => {
    var me = Object.create;
    var j = Object.defineProperty,
        he = Object.defineProperties,
        fe = Object.getOwnPropertyDescriptor,
        ge = Object.getOwnPropertyDescriptors,
        we = Object.getOwnPropertyNames,
        re = Object.getOwnPropertySymbols,
        _e = Object.getPrototypeOf,
        ne = Object.prototype.hasOwnProperty,
        Se = Object.prototype.propertyIsEnumerable;
    var oe = (r, t, i) => t in r ? j(r, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : r[t] = i,
        ce = (r, t) => {
            for (var i in t || (t = {})) ne.call(t, i) && oe(r, i, t[i]);
            if (re)
                for (var i of re(t)) Se.call(t, i) && oe(r, i, t[i]);
            return r
        },
        ie = (r, t) => he(r, ge(t));
    var D = (r, t) => () => (r && (t = r(r = 0)), t);
    var xe = (r, t) => () => (t || r((t = {
        exports: {}
    }).exports, t), t.exports);
    var Ee = (r, t, i, A) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let y of we(t)) !ne.call(r, y) && y !== i && j(r, y, {
                get: () => t[y],
                enumerable: !(A = fe(t, y)) || A.enumerable
            });
        return r
    };
    var Te = (r, t, i) => (i = r != null ? me(_e(r)) : {}, Ee(t || !r || !r.__esModule ? j(i, "default", {
        value: r,
        enumerable: !0
    }) : i, r));
    var I = (r, t, i) => new Promise((A, y) => {
        var u = _ => {
                try {
                    L(i.next(_))
                } catch (P) {
                    y(P)
                }
            },
            k = _ => {
                try {
                    L(i.throw(_))
                } catch (P) {
                    y(P)
                }
            },
            L = _ => _.done ? A(_.value) : Promise.resolve(_.value).then(u, k);
        L((i = i.apply(r, t)).next())
    });
    var ae, se = D(() => {
        ae = "WebPixel::Render"
    });
    var G, de = D(() => {
        se();
        G = r => shopify.extend(ae, r)
    });
    var ue = D(() => {
        de()
    });
    var le = D(() => {
        ue()
    });
    var pe = xe(v => {
        le();
        G(({
            analytics: r,
            browser: t,
            init: i,
            settings: A
        }) => {
            let y = !1,
                u = {},
                k = [],
                L = 10,
                _ = () => I(null, null, function*() {
                    try {
                        for (; k.length;) {
                            let e = k.shift();
                            try {
                                yield e()
                            } catch (n) {
                                console.warn("Swym queued event error", n)
                            }
                        }
                    } catch (e) {
                        console.warn("Swym flush queued events error", e)
                    }
                });
            r.subscribe("swym:loaded", e => {
                y || (y = !0, u = e == null ? void 0 : e.customData, _())
            });
            let P = e => n => I(null, null, function*() {
                if (!y) {
                    k.length >= L && k.shift(), k.push(() => e(n));
                    return
                }
                return e(n)
            });
            r.subscribe("checkout_completed", e => {
                ye(e)
            }), r.subscribe("product_added_to_cart", P(e => K(e, 3))), r.subscribe("product_removed_from_cart", P(e => K(e, 7))), r.subscribe("collection_viewed", P(Z)), r.subscribe("search_submitted", P(Z));

            function z() {
                var e, n;
                try {
                    return ((n = (e = u == null ? void 0 : u.retailerSettings) == null ? void 0 : e.FeatureToggles) == null ? void 0 : n.LogShopperJourney) || !1
                } catch (a) {
                    return console.warn("Error parsing shopperJourneyflag", a), !1
                }
            }

            function W(e) {
                if (e === "") return e;
                var n = e;
                try {
                    n = JSON.parse(e)
                } catch (a) {
                    console.warn("Swym:Error parsing JSON", a)
                }
                return n
            }

            function V(e) {
                return I(this, null, function*() {
                    var a = yield t.cookie.get("swym-" + e);
                    return a ? W(a) : null
                })
            }

            function B(e, n = "{}") {
                return I(this, null, function*() {
                    var l = yield t.localStorage.getItem("swym-" + e);
                    return W(l || n)
                })
            }

            function H(e) {
                return I(this, null, function*() {
                    try {
                        let n = u == null ? void 0 : u.regid,
                            a = u == null ? void 0 : u.pid,
                            l = u == null ? void 0 : u.sessionId;
                        if (!n || !a || !l) return;
                        let f = A.swymApiEndpoint,
                            S = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                                },
                                body: new URLSearchParams({
                                    regid: n || "",
                                    sessionid: l || "",
                                    event: e
                                })
                            },
                            m = yield fetch(f + "/api/v2/provider/collect?pid=" + encodeURIComponent(a || ""), S), h = yield m.json();
                        return m.ok && (h == null ? void 0 : h.batch_report) === !0 && (yield t.localStorage.setItem("swym-instrumentMap", "{}")), h
                    } catch (n) {
                        console.warn("Swym /collect error", n)
                    }
                })
            }

            function ye(e) {
                return I(this, null, function*() {
                    var n, a, l;
                    try {
                        let f = (n = e.data.checkout.order) == null ? void 0 : n.id,
                            S = (a = e.data.checkout.totalPrice) == null ? void 0 : a.amount,
                            m = e.data.checkout.email,
                            h = (l = e.data.checkout.lineItems) == null ? void 0 : l.map(c => {
                                var d, g;
                                return {
                                    empi: c.variant.product.id,
                                    epi: c.variant.id,
                                    price: c.variant.price.amount,
                                    currency: c.variant.price.currencyCode,
                                    quantity: c.quantity,
                                    discountedPrice: (d = c.finalLinePrice) == null ? void 0 : d.amount,
                                    discountAllocations: (g = c.discountAllocations) == null ? void 0 : g.map(p => {
                                        var N, R, q, w, M, o, F;
                                        return {
                                            amount: (N = p.amount) == null ? void 0 : N.amount,
                                            discountApplication: {
                                                title: (R = p.discountApplication) == null ? void 0 : R.title,
                                                allocationMethod: (q = p.discountApplication) == null ? void 0 : q.allocationMethod,
                                                targetSelection: (w = p.discountApplication) == null ? void 0 : w.targetSelection,
                                                targetType: (M = p.discountApplication) == null ? void 0 : M.targetType,
                                                value: (o = p.discountApplication) == null ? void 0 : o.value,
                                                discountType: (F = p.discountApplication) == null ? void 0 : F.type
                                            }
                                        }
                                    })
                                }
                            }),
                            O = JSON.stringify(h),
                            x = yield V("swymRegid"), E = yield V("pid");
                        if (!x || !E) return;
                        let J = yield V("session-id"), b = A.swymApiEndpoint, C = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                            },
                            body: new URLSearchParams({
                                regid: x || "",
                                sessionid: J || "",
                                orderid: f,
                                orderval: S,
                                lineitems: O,
                                "checkout-email": m
                            })
                        }, T = yield fetch(b + "/api/v3/provider/reportOrderId?pid=" + encodeURIComponent(E || ""), C), U = yield T.json();
                        if (m) {
                            let c = yield t.localStorage.getItem("swym-products");
                            try {
                                c = JSON.parse(c)
                            } catch (p) {
                                c = ""
                            }
                            let d = c === null ? null : c.all,
                                g = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                                    },
                                    body: new URLSearchParams({
                                        regid: x || "",
                                        e: btoa(m),
                                        s: btoa("shopify"),
                                        m: btoa("orderstatus"),
                                        wd: d !== null && d.length !== 0
                                    })
                                };
                            T = yield fetch(b + "/api/v2/provider/c-id?pid=" + encodeURIComponent(E || ""), g), U = yield T.json()
                        }
                    } catch (f) {
                        console.warn("Swym error processing the checkout-pixel event: ", f)
                    }
                })
            }

            function K(e, n) {
                return I(this, null, function*() {
                    var a, l, f, S, m, h, O, x, E, J, b, C, T, U, c, d, g, p, N, R, q, w;
                    try {
                        if (!(yield z())) return;
                        let o = (a = e.data) == null ? void 0 : a.cartLine,
                            F = (yield t.cookie.get("cart")) || "",
                            Y = yield B("instrumentMap"), s = {
                                et: n,
                                ts: (() => {
                                    try {
                                        return new Date(e.timestamp).getTime()
                                    } catch (Q) {
                                        return
                                    }
                                })(),
                                empi: (f = (l = o == null ? void 0 : o.merchandise) == null ? void 0 : l.product) == null ? void 0 : f.id,
                                epi: (S = o == null ? void 0 : o.merchandise) == null ? void 0 : S.id,
                                dt: (h = (m = o == null ? void 0 : o.merchandise) == null ? void 0 : m.product) == null ? void 0 : h.title,
                                du: (E = (x = (O = e.context) == null ? void 0 : O.document) == null ? void 0 : x.location) == null ? void 0 : E.href,
                                ct: (b = (J = o == null ? void 0 : o.merchandise) == null ? void 0 : J.product) == null ? void 0 : b.type,
                                pr: (T = (C = o == null ? void 0 : o.cost) == null ? void 0 : C.totalAmount) == null ? void 0 : T.amount,
                                currency: (c = (U = o == null ? void 0 : o.cost) == null ? void 0 : U.totalAmount) == null ? void 0 : c.currencyCode,
                                iu: (g = (d = o == null ? void 0 : o.merchandise) == null ? void 0 : d.image) == null ? void 0 : g.src,
                                uri: (R = (N = (p = e.context) == null ? void 0 : p.document) == null ? void 0 : N.location) == null ? void 0 : R.href,
                                available: !0,
                                qty: o == null ? void 0 : o.quantity,
                                cart: F,
                                type: "product-variant",
                                ri: Y,
                                ru: (w = (q = e.context) == null ? void 0 : q.document) == null ? void 0 : w.referrer
                            };
                        if (!s.dt || !s.du || !s.epi) return;
                        let X = JSON.stringify(s);
                        yield H(X)
                    } catch (M) {
                        console.warn("Swym error processing the cart-pixel event", M)
                    }
                })
            }

            function Z(e) {
                return I(this, null, function*() {
                    var n, a, l, f, S, m, h, O, x, E, J, b, C, T;
                    try {
                        if (!(yield z())) return;
                        let c = (n = e.data) == null ? void 0 : n.collection,
                            d = (a = e.data) == null ? void 0 : a.searchResult,
                            g = (S = (f = (l = e.context) == null ? void 0 : l.document) == null ? void 0 : f.location) == null ? void 0 : S.href,
                            p = (h = (m = e.context) == null ? void 0 : m.document) == null ? void 0 : h.referrer,
                            N = (E = (x = (O = e.context) == null ? void 0 : O.document) == null ? void 0 : x.location) == null ? void 0 : E.search,
                            R = (yield t.cookie.get("cart")) || "",
                            q = yield B("instrumentMap"), w = (c == null ? void 0 : c.productVariants) || (d == null ? void 0 : d.productVariants) || [], M = w.slice(0, 5).map(s => {
                                var X, Q, $, ee, te;
                                return {
                                    epi: s == null ? void 0 : s.id,
                                    iu: (X = s == null ? void 0 : s.image) == null ? void 0 : X.src,
                                    du: (($ = (Q = e.context) == null ? void 0 : Q.window) == null ? void 0 : $.origin) + ((ee = s == null ? void 0 : s.product) == null ? void 0 : ee.url),
                                    dt: (te = s == null ? void 0 : s.product) == null ? void 0 : te.title
                                }
                            }), o = (b = (J = w[0]) == null ? void 0 : J.price) == null ? void 0 : b.currencyCode, F = ie(ce({
                                et: 2,
                                ts: (() => {
                                    try {
                                        return new Date(e.timestamp).getTime()
                                    } catch (s) {
                                        return
                                    }
                                })(),
                                dt: (T = (C = e.context) == null ? void 0 : C.document) == null ? void 0 : T.title,
                                du: g,
                                uri: g,
                                ru: p,
                                type: "product-group",
                                currency: o,
                                rtype: "/collect",
                                ri: q,
                                cart: R,
                                collection: {
                                    id: (c == null ? void 0 : c.id) || "",
                                    title: (c == null ? void 0 : c.title) || ""
                                }
                            }, d ? {
                                searchQuery: d == null ? void 0 : d.query,
                                resultsCount: Array.isArray(w) ? w.length : void 0
                            } : {}), {
                                topProducts: M,
                                querystring: N
                            }), Y = JSON.stringify(F);
                        yield H(Y)
                    } catch (U) {
                        console.warn("Swym error processing the collections-pixel event", U)
                    }
                })
            }
        })
    });
    var qe = Te(pe());
})();