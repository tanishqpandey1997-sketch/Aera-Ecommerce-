"use strict";
(self.__swymWebpackJsonp = self.__swymWebpackJsonp || []).push([
    [5905], {
        45905(t, e, r) {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach(function(e) {
                        a(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function a(t, e, r) {
                return (e = function(t) {
                    var e = function(t) {
                        if ("object" != n(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var r = e.call(t, "string");
                            if ("object" != n(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(t)
                    }(t);
                    return "symbol" == n(e) ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function d() {
                if (!window._swat.isStoreCartInstrumentationRunning) {
                    window._swat.isStoreCartInstrumentationRunning = !0;
                    var t = window._swat.ui.uiRef.log,
                        e = window._swat.ui.uiRef.settings,
                        r = window._swat.storage.get("productCartAction");
                    window._swat.evtLayer.addEventListener(window._swat.JSEvents.storeAddedToCart, function(e) {
                        "Shopify" == window._swat.platform.type && (e.detail.d.cartId = e.detail.d.cartId || window.swymCart.token || n("cart"), e.detail.d.products.forEach(function(r) {
                            t("storeAddToCart", i(i({}, r), {}, {
                                ct: e.detail.d.cartId
                            })), o(r.epi)
                        }), window._swat._isSwymInstrumenting = !1)
                    }), window._swat.evtLayer.addEventListener(window._swat.JSEvents.storeRemovedFromCart, function(r) {
                        var a, d, s, w, u = null == e || null === (a = e.Wishlist) || void 0 === a ? void 0 : a.Enabled,
                            c = window._swat.storage.getLocal(window._swat.key.ABTESTING) || {},
                            l = Object.prototype.hasOwnProperty.call(c, "SFL"),
                            p = "test" === (null == c || null === (d = c.SFL) || void 0 === d ? void 0 : d.bkt),
                            f = window._swat.storage.get("preview-sfl") || (null == e || null === (s = e.SFL) || void 0 === s ? void 0 : s.SFLFeatureEnabled) && (null == e || null === (w = e.SFL) || void 0 === w || null === (w = w.PopUpSettings) || void 0 === w ? void 0 : w.PopUpEnabled) && u && (p || !l);
                        if (r.detail.d.reloadsPage && f) {
                            var y = r.detail.d.unpreparedProducts;
                            null != y && y.length && window._swat.storage.setLocal("scheduledSFLAsk", y)
                        }
                        "Shopify" == window._swat.platform.type && (r.detail.d.cartId = r.detail.d.cartId || window.swymCart.token || n("cart"), r.detail.d.products.forEach(function(e) {
                            t("storeRemoveFromCart", i(i({}, e), {}, {
                                ct: r.detail.d.cartId
                            })), o(e.epi)
                        }), window._swat._isSwymInstrumenting = !1)
                    }), setTimeout(function() {
                        if (null != r && "Shopify" == window._swat.platform.type && "add" == r.type) {
                            var t = window.swymCart.items.filter(function(t) {
                                return t.variant_id == r.epi
                            })[0];
                            if (!t) return;
                            var e = window.swymCart.token || n("cart");
                            window._swat.triggerSwymEvent(window._swat.JSEvents.storeAddedToCart, {
                                products: [{
                                    epi: t.variant_id,
                                    empi: t.product_id
                                }],
                                cartId: e
                            }), o(t.epi)
                        }
                    }, 500)
                }

                function n(t) {
                    var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]+)"));
                    return e ? e[2] : null
                }

                function o(t) {
                    var e = window._swat.storage.get("productCartAction");
                    null != e && t == e.epi && window._swat.storage.remove("productCartAction")
                }
            }
            r.d(e, {
                initStoreCartInstrumention: () => d
            })
        }
    }
]);