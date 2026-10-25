(() => {
    var Je = Object.create;
    var K = Object.defineProperty;
    var Ke = Object.getOwnPropertyDescriptor;
    var He = Object.getOwnPropertyNames,
        ue = Object.getOwnPropertySymbols,
        je = Object.getPrototypeOf,
        pe = Object.prototype.hasOwnProperty,
        Ge = Object.prototype.propertyIsEnumerable;
    var le = (t, e, r) => e in t ? K(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        ge = (t, e) => {
            for (var r in e || (e = {})) pe.call(e, r) && le(t, r, e[r]);
            if (ue)
                for (var r of ue(e)) Ge.call(e, r) && le(t, r, e[r]);
            return t
        };
    var p = (t, e) => () => (t && (e = t(t = 0)), e);
    var Ye = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var Qe = (t, e, r, o) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of He(e)) !pe.call(t, n) && n !== r && K(t, n, {
                get: () => e[n],
                enumerable: !(o = Ke(e, n)) || o.enumerable
            });
        return t
    };
    var Xe = (t, e, r) => (r = t != null ? Je(je(t)) : {}, Qe(e || !t || !t.__esModule ? K(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t));
    var u = (t, e, r) => new Promise((o, n) => {
        var i = a => {
                try {
                    c(r.next(a))
                } catch (l) {
                    n(l)
                }
            },
            s = a => {
                try {
                    c(r.throw(a))
                } catch (l) {
                    n(l)
                }
            },
            c = a => a.done ? o(a.value) : Promise.resolve(a.value).then(i, s);
        c((r = r.apply(t, e)).next())
    });
    var de, me = p(() => {
        de = "WebPixel::Render"
    });
    var H, fe = p(() => {
        me();
        H = t => shopify.extend(de, t)
    });
    var he = p(() => {
        fe()
    });
    var xe = p(() => {
        he()
    });
    var x, b = p(() => {
        "use strict";
        x = class {
            constructor(e) {
                this.browser = e
            }
            refreshCookies(n, i) {
                return u(this, arguments, function*(e, r, o = new Date) {
                    let c = (yield this.browser.cookie.get()).split("; ");
                    for (let a of c) {
                        let l = a.split("=")[0];
                        r.some(m => l.startsWith(m)) && (yield this.refreshCookie(l, e, o))
                    }
                })
            }
            getAllAwcCookieValues(e) {
                return u(this, null, function*() {
                    let r = yield this.browser.cookie.get();
                    if (!r) return "";
                    let o = r.split("; "),
                        n = [];
                    e.forEach(c => {
                        n = n.concat(o.filter(a => a.startsWith(c)))
                    });
                    let i = n.map(c => c.split("=")[1]);
                    return Array.from(new Set(i)).join(",")
                })
            }
            getCookieValue(e) {
                return u(this, null, function*() {
                    return yield this.browser.cookie.get(e)
                })
            }
            setCookie(i, s, c) {
                return u(this, arguments, function*(e, r, o, n = new Date) {
                    if (!e || !o || !r || !n) return;
                    let a = new Date;
                    a.setTime(n.getTime() + 365 * 24 * 60 * 60 * 1e3);
                    let l = r + `;expires=${a.toUTCString()};path=/;domain=${o}`;
                    yield this.browser.cookie.set(e, l)
                })
            }
            setCookieWithCustomExpiration(e, r, o, n) {
                return u(this, null, function*() {
                    if (!e || !o || !n || !r) throw new Error("Invalid cookie parameters");
                    let i = r + `;expires=${n.toUTCString()};path=/;domain=${o}`;
                    yield this.browser.cookie.set(e, i)
                })
            }
            refreshCookie(n, i) {
                return u(this, arguments, function*(e, r, o = new Date) {
                    let s = yield this.getCookieValue(e);
                    s && (yield this.setCookie(e, s, r, o))
                })
            }
            hasOnlyCookieWithPrefix(e, r) {
                return u(this, null, function*() {
                    try {
                        let o = yield this.browser.cookie.get();
                        if (!o) return !1;
                        let n = o.split("; "),
                            i = !1,
                            s = !1;
                        for (let c of n) {
                            let a = c.split("=")[0];
                            if (a.startsWith(e) && (i = !0), r.some(l => a.startsWith(l))) {
                                s = !0;
                                break
                            }
                        }
                        return i && !s
                    } catch (o) {
                        return !1
                    }
                })
            }
        }
    });
    var ye = p(() => {
        "use strict"
    });
    var V, Pe, I, we = p(() => {
        "use strict";
        b();
        ye();
        V = "_aw_ca", Pe = "returning=1", I = class t {
            static setCookie(e, r) {
                return u(this, null, function*() {
                    let o = new Date;
                    yield new x(e).setCookie(V, Pe, r, o)
                })
            }
            static isCookieSet(e) {
                return u(this, null, function*() {
                    return (yield new x(e).getCookieValue(V)) === Pe
                })
            }
            static getCustomerAcquisition(e, r, o) {
                return u(this, null, function*() {
                    var n, i;
                    try {
                        return (o == null ? void 0 : o.isFirstOrder) != null ? o.isFirstOrder ? "NEW" : "RETURNING" : (yield t.isCookieSet(e)) ? "RETURNING" : ((i = (n = r.data) == null ? void 0 : n.customer) == null ? void 0 : i.ordersCount) != null ? r.data.customer.ordersCount === 0 ? "NEW" : r.data.customer.ordersCount > 0 ? "RETURNING" : "" : ""
                    } catch (s) {
                        return ""
                    }
                })
            }
        }
    });
    var j = p(() => {
        "use strict"
    });
    var G, M, Y = p(() => {
        "use strict";
        G = class t {
            constructor() {}
            static calculateAmount(e) {
                let r = 0;
                var o = this.getPreparedItemDetails(e.lineItems);
                for (let n of o) r += n.itemNetPrice * n.quantity;
                return t.roundToFixedCommercially(r).toFixed(2)
            }
            static roundToFixedCommercially(e) {
                return Math.round(e * 100) / 100
            }
            static getPreparedItemDetails(e) {
                if (!e) return [];
                for (var r = [], o = 0; o < e.length; o++) {
                    var n = Number(e[o].variant.price.amount),
                        i = n * e[o].quantity;
                    if (e[o].discountAllocations && e[o].discountAllocations.length > 0) {
                        for (var s = 0, c = 0; c < e[o].discountAllocations.length; c++) s += Number(e[o].discountAllocations[c].amount.amount);
                        i -= s, n -= s / e[o].quantity
                    }
                    r.push({
                        productId: e[o].variant.product.id,
                        title: e[o].variant.product.title,
                        itemNetPrice: t.roundToFixedCommercially(n),
                        lineNetPrice: t.roundToFixedCommercially(i),
                        quantity: e[o].quantity,
                        sku: e[o].variant.sku
                    })
                }
                return r
            }
        }, M = G
    });
    var Q, X, Ce = p(() => {
        "use strict";
        Q = class t {
            constructor() {}
            static extractQueryParameter(e, r) {
                return new URLSearchParams(e).get(r) || void 0
            }
            static extractSourceParameter(e, r) {
                if (r.optionalSourceParameterName) {
                    let o = t.extractQueryParameter(e, r.optionalSourceParameterName);
                    if (o) return o
                }
                return t.extractQueryParameter(e, "source")
            }
        }, X = Q
    });
    var ze, z, Ee, ke = p(() => {
        "use strict";
        ze = "DISCOUNT_CODE", z = class {
            constructor() {}
            static getVoucherFromCheckout(e) {
                if (e.discountApplications && e.discountApplications.length > 0) {
                    for (let r of e.discountApplications)
                        if (r.type === ze && r.title) return r.title
                }
                return ""
            }
        }, Ee = z
    });

    function Se(t, e) {
        return u(this, null, function*() {
            let r = new x(e.browser),
                o = X.extractQueryParameter(t.context.document.location.search, "awc");
            if (o) {
                let i = o.split("_");
                if (i.length === 3) {
                    let s = `${L}${i[0]}`;
                    yield r.setCookie(s, o, t.context.document.location.hostname, e.now)
                }
            } else yield r.refreshCookies(t.context.document.location.hostname, [L, te, re], e.now);
            let n = X.extractSourceParameter(t.context.document.location.search, e.settings);
            if (n) {
                let i = `${n}|${(e.now.getTime()+31536e6)/1e3|0}`;
                yield r.setCookie(ee, i, t.context.document.location.hostname, e.now)
            } else yield r.refreshCookie(ee, t.context.document.location.hostname, e.now);
            yield r.refreshCookie(V, t.context.document.location.hostname, e.now)
        })
    }

    function ve(t, e) {
        return u(this, null, function*() {
            var r, o, n, i;
            try {
                let s = (n = (o = (r = t.context) == null ? void 0 : r.document) == null ? void 0 : o.location) == null ? void 0 : n.hostname,
                    c = nt(t);
                ((i = c.data.checkout.order) == null ? void 0 : i.id) !== void 0 ? yield rt(c, e): console.warn("checkout-event", "order.id is undefined"), yield I.setCookie(e.browser, s)
            } catch (s) {}
        })
    }

    function rt(t, e) {
        return u(this, null, function*() {
            let r = e.settings,
                o = yield ot(t, e.browser, r, e.init, e.additionalCheckoutParameters), n = `${et}?${new URLSearchParams(o)}`;
            if (yield fetch(n, {
                    method: "POST",
                    keepalive: !0,
                    credentials: "include"
                }), r.originalNetwork === "sas") {
                let s = `${tt}?${new URLSearchParams(o)}`;
                yield fetch(s, {
                    method: "POST",
                    keepalive: !0,
                    credentials: "include"
                })
            }
            if (typeof Z == "string" && Z.length > 10) {
                let s = `${Z}?${new URLSearchParams(o)}`;
                yield fetch(s, {
                    method: "POST",
                    keepalive: !0,
                    credentials: "include"
                })
            }
        })
    }

    function ot(t, e, r, o, n) {
        return u(this, null, function*() {
            var C, E, k, S, v, A, N;
            let i = new x(e),
                c = ((C = yield i.getCookieValue(ee)) != null ? C : "").split("|")[0],
                a = (yield i.getAllAwcCookieValues([L, te, re])) || "",
                l = t.data.checkout,
                m = (k = (E = l.order) == null ? void 0 : E.id) != null ? k : "";
            m.match(/[^0-9]/) && (m = m.replace(/[^0-9]/g, ""));
            let g = M.calculateAmount(l),
                d = (v = (S = l.subtotalPrice) == null ? void 0 : S.currencyCode) != null ? v : "",
                f = Ee.getVoucherFromCheckout(l),
                w = yield I.getCustomerAcquisition(e, o, (N = (A = l.order) == null ? void 0 : A.customer) != null ? N : void 0), O = r.advertiserId.toString() === "123456" ? "null" : r.advertiserId.toString(), y = {
                    tt: "sp",
                    tv: "2",
                    ch: c,
                    cks: a,
                    merchant: O,
                    amount: g,
                    parts: `DEFAULT:${g}`,
                    ref: m,
                    vc: f,
                    cr: d,
                    customeracquisition: w,
                    p1: r.appVersion.toString(),
                    p3: "px",
                    cons: "1"
                };
            return n && Object.entries(n).forEach(([R, D]) => {
                y[R] = D
            }), typeof r.customTransactionTag != "undefined" && r.customTransactionTag !== null && (y.p6 = r.customTransactionTag.toString()), (yield i.hasOnlyCookieWithPrefix(re, [L, te])) && (y.p7 = "sn"), y
        })
    }

    function Ae(t) {
        return !(!t || !t.advertiserId || !t.appVersion || !t.shopDomain)
    }

    function nt(t) {
        if (t.context && delete t.context, t.data && t.data.checkout) {
            let e = t.data.checkout;
            e.billingAddress = null, e.phone = null, e.email = null, e.shippingAddress = null
        }
        return t
    }
    var ee, L, te, re, et, tt, Z, Ne = p(() => {
        "use strict";
        we();
        j();
        Y();
        b();
        Ce();
        ke();
        ee = "_aw_channel", L = "_awc_", te = "_aw_m_", re = "_aw_sn_", et = "https://www.awin1.com/sread.img", tt = "https://www.shareasale.com/sread.php", Z = "https://www.awinblackfriday.com/sread.php"
    });
    var F, h, $ = p(() => {
        "use strict";
        F = class F {
            static sendErrorLog(e, r, o, n) {
                return this.sendLog({
                    severity: "error",
                    source: {
                        app: "shopify-pixel-extension",
                        category: e
                    },
                    body: ge({
                        message: r,
                        error: o.message
                    }, n)
                })
            }
            static sendLog(e) {
                return u(this, null, function*() {
                    yield fetch(F.DEBUG_ENDPOINT, {
                        method: "POST",
                        keepalive: !0,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    })
                })
            }
        };
        F.DEBUG_ENDPOINT = "https://www.wepowerconnections.com/dbg";
        h = F
    });

    function st(t) {
        let e = t.split("-"),
            r = e.length - 1;
        return e[r] = (parseInt(e[r]) + 1).toString(), e.join("-")
    }

    function ct(t, e) {
        return u(this, null, function*() {
            try {
                let r = yield e.getCookieValue(t);
                return r ? JSON.parse(r) : void 0
            } catch (r) {
                throw new Error(`[JourneyPath] Error parsing journey cookie:${r}`)
            }
        })
    }
    var it, B, at, be = p(() => {
        "use strict";
        b();
        $();
        it = "_aw_j_", B = {
            name: "JourneyPath",
            priority: 100,
            checkoutCompleted: (t, e) => u(null, null, function*() {
                return at(t, e)
            })
        }, at = (t, e) => u(null, null, function*() {
            let r = t.settings,
                o = `${it}${r.advertiserId}`;
            try {
                let n = new x(t.browser),
                    i = e.context.document.location.hostname,
                    s = yield ct(o, n);
                if (!s) return t;
                let c = s.id;
                if (t.additionalCheckoutParameters.j = c, c) {
                    let a = JSON.parse(JSON.stringify(s));
                    c = st(c), a.id = c, yield n.setCookieWithCustomExpiration(o, JSON.stringify(a), i, new Date(s.expiration * 1e3))
                }
            } catch (n) {
                h.sendErrorLog("JourneyPath plugin", "checkoutHandler failed", n, {
                    cookieName: o
                })
            }
            return t
        })
    });
    var Ie = p(() => {
        "use strict";
        be()
    });
    var oe, _e, Te, Oe = p(() => {
        "use strict";
        oe = "lantern", _e = "https://lantern.roeye.com/track.php", Te = "https://wepowerconnections.com/track.php"
    });

    function _() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
            let e = Math.random() * 16 | 0;
            return (t === "x" ? e : e & 3 | 8).toString(16)
        })
    }

    function ne(t) {
        let r = /Order\/(\d+)/.exec(t);
        return r ? r[1] : t
    }
    var ie = p(() => {
        "use strict"
    });

    function Re(t, e) {
        return u(this, null, function*() {
            let r = _();
            try {
                let o = new x(t),
                    n = new Date;
                return n.setTime(n.getTime() + 720 * 60 * 60 * 1e3), yield o.setCookieWithCustomExpiration(oe, r, e, n), r
            } catch (o) {
                return
            }
        })
    }

    function lt(t, e) {
        return u(this, null, function*() {
            var o, n, i;
            let r = (i = (n = (o = e.context) == null ? void 0 : o.document) == null ? void 0 : n.location) == null ? void 0 : i.hostname;
            try {
                let c = yield new x(t.browser).getCookieValue(oe);
                if (!c) {
                    let a = yield Re(t.browser, r);
                    return a || (h.sendErrorLog("RoEyeSingleView", "Failed to save fingerprint cookie", new Error("Cookie creation failed"), {}), _())
                }
                return c
            } catch (s) {
                h.sendErrorLog("RoEyeSingleView", "Error getting/creating fingerprint", s, {});
                let c = yield Re(t.browser, r);
                return c || _()
            }
        })
    }

    function pt(s, c) {
        return u(this, arguments, function*({
            fingerprint: t,
            referrerFull: e,
            currentUrl: r,
            userAgent: o,
            data: n
        }, i) {
            try {
                let a = new URLSearchParams;
                a.append("fingerprint", t), a.append("referrer", e), a.append("landingpage", r), a.append("useragent", o);
                for (let d in n) a.append(d, String(n[d]));
                let l = a.toString(),
                    m = `${_e}?${l}`,
                    g = {
                        method: "GET",
                        keepalive: !0,
                        mode: "no-cors"
                    };
                try {
                    return yield fetch(m, g), !0
                } catch (d) {
                    h.sendErrorLog("RoEyeSingleView", "Using fallback endpoint for tracking", d, {
                        fingerprint: t,
                        advertiserId: i.advertiserId,
                        shopDomain: i.shopDomain,
                        isShareASale: i.originalNetwork === "sas"
                    });
                    let f = `${Te}?${l}`;
                    return yield fetch(f, g), !0
                }
            } catch (a) {
                return h.sendErrorLog("RoEyeSingleView", "Error sending tracking", a, {
                    fingerprint: t,
                    advertiserId: i.advertiserId,
                    shopDomain: i.shopDomain,
                    isShareASale: i.originalNetwork === "sas"
                }), !1
            }
        })
    }

    function gt(t) {
        var r, o, n, i, s, c, a, l, m;
        let e = t.settings;
        if (e.originalNetwork === "sas") {
            let g = (o = (r = t.init) == null ? void 0 : r.data) == null ? void 0 : o.shop,
                d = (s = g == null ? void 0 : g.storefrontUrl) != null ? s : (i = (n = t.init.context.document) == null ? void 0 : n.location) == null ? void 0 : i.hostname,
                f = typeof d == "string" && d.includes("//") && (c = d.split("//")[1]) != null ? c : d;
            return (!f || f.includes(".myshopify.com") || f === "") && (h.sendErrorLog("RoEyeSingleView", "Shop domain is not a valid domain", new Error(`Shop domain ${f} is not a valid domain for site ID`), {
                advertiserId: e.advertiserId,
                storeFrontUrl: g == null ? void 0 : g.storefrontUrl,
                locationHostname: (m = (l = (a = t.init.context) == null ? void 0 : a.document) == null ? void 0 : l.location) == null ? void 0 : m.hostname,
                myShopifyDomain: g == null ? void 0 : g.myshopifyDomain,
                originalNetwork: e.originalNetwork
            }), f = e.advertiserId === "15716" ? f : "_shopify_missing"), f
        }
        return String(e.advertiserId)
    }
    var W, ut, De = p(() => {
        "use strict";
        $();
        j();
        Y();
        b();
        Oe();
        ie();
        W = {
            name: "RoEyeSingleView",
            priority: 100,
            checkoutCompleted: (t, e) => u(null, null, function*() {
                return ut(t, e)
            })
        }, ut = (t, e) => u(null, null, function*() {
            var r, o, n, i, s, c, a, l, m, g, d, f, w, O, y, C, E, k, S, v, A, N, R, D, ae, se;
            try {
                let U = t.settings;
                if (!U.advertiserId) return h.sendErrorLog("RoEyeSingleView", "No advertiser ID available, tracking aborted", new Error("Advertiser ID missing"), {
                    event: "checkout_completed"
                }), t;
                let ce = gt(t),
                    Fe = (n = (o = (r = e.data) == null ? void 0 : r.checkout) == null ? void 0 : o.order) != null && n.id ? ne(e.data.checkout.order.id) : "!missing",
                    $e = parseFloat(M.calculateAmount((i = e.data) == null ? void 0 : i.checkout)),
                    Be = (l = (a = (c = (s = e.data) == null ? void 0 : s.checkout) == null ? void 0 : c.totalPrice) == null ? void 0 : a.currencyCode) != null ? l : "USD",
                    We = {
                        site: ce,
                        order_id: Fe,
                        order_value: $e,
                        order_currency: Be,
                        lantern_type: "conversion",
                        action_tracker_id: ce
                    },
                    J = {
                        referrerFull: (d = (g = (m = e.context) == null ? void 0 : m.document) == null ? void 0 : g.referrer) != null ? d : "",
                        referrerHost: (y = (O = (w = (f = e.context) == null ? void 0 : f.document) == null ? void 0 : w.referrer) == null ? void 0 : O.split("/")[2]) != null ? y : "",
                        currentUrl: (S = (k = (E = (C = e.context) == null ? void 0 : C.document) == null ? void 0 : E.location) == null ? void 0 : k.href) != null ? S : "",
                        currentHost: (R = (N = (A = (v = e.context) == null ? void 0 : v.document) == null ? void 0 : A.location) == null ? void 0 : N.hostname) != null ? R : "",
                        userAgent: (se = (ae = (D = e.context) == null ? void 0 : D.navigator) == null ? void 0 : ae.userAgent) != null ? se : ""
                    },
                    qe = yield lt(t, e);
                return yield pt({
                    fingerprint: qe,
                    referrerFull: J.referrerFull,
                    currentUrl: J.currentUrl,
                    userAgent: J.userAgent,
                    data: We
                }, U), t
            } catch (U) {
                return h.sendErrorLog("RoEyeSingleView", "Error in checkoutHandler", U, {
                    event: "checkout_completed"
                }), t
            }
        })
    });
    var Ue = p(() => {
        "use strict";
        De();
        ie()
    });
    var T, Ve = p(() => {
        "use strict";
        $();
        T = class t {
            constructor() {
                this.plugins = []
            }
            static getInstance() {
                return t.instance || (t.instance = new t), t.instance
            }
            registerPlugin(e) {
                this.plugins.push(e)
            }
            createContext(e) {
                return {
                    browser: e.browser,
                    settings: e.settings,
                    init: e.init,
                    additionalCheckoutParameters: {},
                    now: new Date
                }
            }
            executePluginHandler(e, r, o, n) {
                return u(this, null, function*() {
                    try {
                        if (r) return yield r(o, n)
                    } catch (i) {
                        h.sendErrorLog("PluginManager", "Error executing plugin", i, {
                            plugin: e.name
                        })
                    }
                    return o
                })
            }
            executePageViewPlugins(e, r) {
                return u(this, null, function*() {
                    let o = e;
                    for (let n of this.plugins) o = yield this.executePluginHandler(n, n.pageView, o, r);
                    return o
                })
            }
            executeCheckoutPlugins(e, r) {
                return u(this, null, function*() {
                    let o = e;
                    for (let n of this.plugins) o = yield this.executePluginHandler(n, n.checkoutCompleted, o, r);
                    return o
                })
            }
        }
    });
    var Me = p(() => {
        "use strict";
        Ie();
        Ue();
        Ve()
    });
    var Le = Ye(q => {
        "use strict";
        xe();
        Ne();
        Me();
        var P = T.getInstance();
        H(t => u(null, null, function*() {
            Ae(t.settings) && (P.registerPlugin(B), P.registerPlugin(W), t.analytics.subscribe("page_viewed", e => u(null, null, function*() {
                let r = P.createContext(t),
                    o = yield P.executePageViewPlugins(r, e);
                yield Se(e, o)
            })), t.analytics.subscribe("checkout_completed", e => u(null, null, function*() {
                let r = P.createContext(t),
                    o = yield P.executeCheckoutPlugins(r, e);
                yield ve(e, o)
            })))
        }))
    });
    var wr = Xe(Le());
})();