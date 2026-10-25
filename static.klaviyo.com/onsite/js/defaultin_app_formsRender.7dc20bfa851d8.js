"use strict";
(self.webpackChunk_klaviyo_onsite_modules = self.webpackChunk_klaviyo_onsite_modules || []).push([
    [81], {
        78148: function(l, n, e) {
            e.d(n, {
                xA: function() {
                    return q
                },
                o4: function() {
                    return N
                },
                Tw: function() {
                    return R
                },
                ZB: function() {
                    return W
                },
                IB: function() {
                    return S
                }
            }), e(56816), e(26650);
            var t = e(53310),
                u = e.n(t),
                r = e(15268);
            let i = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;

            function a(l) {
                try {
                    if (!i.test(l)) return (0, r.lc)("Invalid JWT format: must be header.payload.signature"), null;
                    let n = l.split(".")[1];
                    if (!n) return (0, r.lc)("Malformed JWT: missing payload segment"), null;
                    let e = JSON.parse(function(l) {
                            let n = 4 - l.length % 4;
                            return atob((n < 4 ? l + "=".repeat(n) : l).replace(/-/g, "+").replace(/_/g, "/"))
                        }(n)),
                        t = e.exp;
                    if ("number" != typeof t || !Number.isFinite(t)) return (0, r.lc)("JWT missing or invalid exp claim"), null;
                    let u = e.iat;
                    if ("number" != typeof u || !Number.isFinite(u)) return (0, r.lc)("JWT missing or invalid iat claim"), null;
                    return {
                        iat: 1e3 * u,
                        exp: 1e3 * t
                    }
                } catch (l) {
                    return (0, r.lc)("Error parsing JWT claims", {
                        error: l,
                        stack: l instanceof Error ? l.stack : void 0
                    }), null
                }
            }

            function o(l) {
                var n, e;
                return null != (e = null == (n = a(l)) ? void 0 : n.exp) ? e : null
            }

            function s() {
                return (s = Object.assign || function(l) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (l[t] = e[t])
                    }
                    return l
                }).apply(this, arguments)
            }
            async function c(l, n) {
                let e, t = function(l) {
                    let n = l => l.replace(/'/g, "\\'");
                    return l.email ? `equals(email,'${n(l.email)}')` : l.phone_number ? `equals(phone_number,'${n(l.phone_number)}')` : l.external_id ? `equals(external_id,'${n(l.external_id)}')` : l._kx ? `equals(_kx,'${n(l._kx)}')` : null
                }(n);
                if (!t) return {
                    status: "empty"
                };
                let u = new URL("https://a.klaviyo.com/api/profiles/");
                u.searchParams.set("filter", t);
                try {
                    e = await fetch(u.toString(), {
                        headers: {
                            Authorization: `Bearer ${l}`,
                            revision: "2024-10-15"
                        }
                    })
                } catch (l) {
                    return {
                        status: "empty"
                    }
                }
                if (401 === e.status) return {
                    status: "unauthorized"
                };
                if (!e.ok) return {
                    status: "empty"
                };
                try {
                    var r, i, a, o, c, f, m, d, p, y, _, h, v, b, g;
                    let l = await e.json(),
                        n = null == l ? void 0 : l.data;
                    if (!Array.isArray(n) || 0 === n.length) return {
                        status: "empty"
                    };
                    let t = n[0],
                        u = null != (r = t.attributes) ? r : {},
                        k = s({}, u.properties, {
                            KlaviyoID: t.id,
                            id: t.id,
                            email: null != (i = u.email) ? i : null,
                            phone_number: null != (a = u.phone_number) ? a : null,
                            external_id: null != (o = u.external_id) ? o : null,
                            anonymous_id: null != (c = u.anonymous_id) ? c : null,
                            first_name: null != (f = u.first_name) ? f : null,
                            last_name: null != (m = u.last_name) ? m : null,
                            organization: null != (d = u.organization) ? d : null,
                            locale: null != (p = u.locale) ? p : null,
                            title: null != (y = u.title) ? y : null,
                            image: null != (_ = u.image) ? _ : null,
                            created: null != (h = u.created) ? h : null,
                            updated: null != (v = u.updated) ? v : null,
                            last_event_date: null != (b = u.last_event_date) ? b : null,
                            location: null != (g = u.location) ? g : null
                        });
                    return {
                        status: "success",
                        data: k
                    }
                } catch (l) {
                    return {
                        status: "empty"
                    }
                }
            }

            function f() {
                return (f = Object.assign || function(l) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (l[t] = e[t])
                    }
                    return l
                }).apply(this, arguments)
            }
            e(60624), e(75479);
            let m = null,
                d = !0,
                p = [],
                y = null,
                _ = null,
                h = null,
                v = null,
                b = 0,
                g = 0,
                k = null,
                w = null,
                x = null,
                T = null,
                $ = null,
                P = null,
                z = !1,
                E = null;

            function j() {
                null !== k && (clearTimeout(k), k = null), null !== w && (clearTimeout(w), w = null), null !== x && (clearTimeout(x), x = null), T = null
            }

            function A() {
                b += 1, v = null, E = null
            }

            function O() {
                j(), A(), _ = null, h = null, g = 0, $ = null, P = null, z = !1
            }
            async function D(l, n, e) {
                let t = await c(l, n);
                if (_ === l && y === n) {
                    if ("unauthorized" === t.status) {
                        O(), h = l, (0, r.lc)(`Firing (${p.length}) onTokenInvalid callbacks`), p.forEach(l => {
                            try {
                                l()
                            } catch (l) {
                                (0, r.lc)("Error in onTokenInvalid callback", {
                                    error: l,
                                    stack: l instanceof Error ? l.stack : void 0
                                })
                            }
                        }), e();
                        return
                    }
                    "success" === t.status && ($ = t.data), z = !0, P = null
                }
            }

            function J(l, n) {
                let e = a(l);
                return null === e ? null : l === h ? ((0, r.lc)("Rejected token previously invalidated by 401"), null) : e.exp - 3e4 <= Date.now() ? ((0, r.lc)("Rejected token expiring within leeway window"), null) : (j(), _ = l, h = null, null !== y && null === $ && (z = !1, P = D(l, y, n)), e)
            }

            function F(l, n) {
                let e = Date.now();
                if (w = setTimeout(() => {
                        w = null, O(), d && n()
                    }, Math.max(0, l.exp - 3e4 - e)), d && null !== m) {
                    let t = Math.max(Math.min(l.iat + .9 * (l.exp - l.iat), l.exp - 3e4), e + 5e3);
                    T = t, k = setTimeout(() => {
                        k = null, T = null, n()
                    }, t - e)
                }
            }

            function I() {
                if (null === m) return Promise.resolve();
                if (null !== v) return v;
                null !== x && (clearTimeout(x), x = null);
                let l = m,
                    n = b,
                    e = () => n === b && l === m,
                    t = () => {
                        if (null !== x) return;
                        let l = Math.min(1e3 * 2 ** g, 3e4);
                        g += 1, x = setTimeout(() => {
                            x = null, I()
                        }, l)
                    },
                    u = (async () => {
                        if (await Promise.resolve(), e()) try {
                            var u, i;
                            let n, r = await (i = l(null != (u = function() {
                                var l, n, e;
                                if (y) return null != (e = null != (n = null != (l = y._kx) ? l : y.email) ? n : y.phone_number) ? e : y.external_id
                            }()) ? u : ""), Promise.race([i.finally(() => clearTimeout(n)), new Promise((l, e) => {
                                n = setTimeout(() => e(Error("Provider timed out")), 5e3)
                            })]));
                            if (!e()) return;
                            if (_ === r) {
                                g = 0;
                                return
                            }
                            let a = J(r, I);
                            null !== a ? (g = 0, F(a, I)) : t()
                        } catch (l) {
                            (0, r.lc)("Token provider failed or timed out"), e() && t()
                        } finally {
                            n === b && (v = null)
                        }
                    })();
                return v = u, u
            }

            function M() {
                if (null !== _) {
                    let l = o(_);
                    if (null !== l && l - 3e4 < Date.now()) return O(), null
                }
                return _
            }

            function W(l) {
                let n = J(l, I);
                if (null !== n && (g = 0, F(n, I), null !== E)) {
                    let n = E;
                    E = null, n(l)
                }
            }

            function q() {
                return new Promise(l => {
                    E = l
                })
            }

            function R(l, n) {
                m = l, d = (null == n ? void 0 : n.proactiveRefresh) !== !1, A(), null !== x && (clearTimeout(x), x = null), g = 0, null === M() && d && I()
            }

            function S(l) {
                var n;
                if (null === (n = y) || n.email !== l.email || n.phone_number !== l.phone_number || n.external_id !== l.external_id || n.anonymous_id !== l.anonymous_id || n._kx !== l._kx) {
                    let n = f({}, l);
                    y = n, $ = null, P = null, z = !1;
                    let e = M();
                    if (null !== e) {
                        P = D(e, n, I);
                        return
                    }
                }
                null === M() && null !== m && d && I()
            }
            async function Z() {
                let l = M();
                if (null === l) return null;
                if (null !== $) return $;
                if (z) return null;
                if (null === P) {
                    if (null === y) return null;
                    P = D(l, y, I)
                }
                return await P, $
            }
            "undefined" != typeof document && document.addEventListener("visibilitychange", () => {
                "visible" === document.visibilityState && function() {
                    if (!d) return;
                    if (null === _) return I();
                    let l = o(_);
                    if (null === l || l - 3e4 < Date.now()) {
                        O(), I();
                        return
                    }
                    null !== T && T < Date.now() && (null !== k && (clearTimeout(k), k = null), T = null, I())
                }()
            });
            let B = new(u()).Environment(null);
            async function N(l) {
                try {
                    let n = await Z(),
                        e = l.replace(/\|(\w+)\s*:\s*(["'])(.*?)\2/g, "|$1($2$3$2)");
                    return B.renderString(e, {
                        person: null != n ? n : {}
                    })
                } catch (n) {
                    return l
                }
            }
            B.addFilter("lookup", (l, n) => l[n]), B.addFilter("default", (l, n) => null == l || "" === l ? n : l)
        }
    }
]);