(() => {
    var Ee = Object.defineProperty,
        ur = Object.defineProperties;
    var cr = Object.getOwnPropertyDescriptors;
    var J = Object.getOwnPropertySymbols;
    var Pe = Object.prototype.hasOwnProperty,
        Ie = Object.prototype.propertyIsEnumerable;
    var ke = (e, t, r) => t in e ? Ee(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        d = (e, t) => {
            for (var r in t || (t = {})) Pe.call(t, r) && ke(e, r, t[r]);
            if (J)
                for (var r of J(t)) Ie.call(t, r) && ke(e, r, t[r]);
            return e
        },
        _ = (e, t) => ur(e, cr(t));
    var Se = (e, t) => {
        var r = {};
        for (var n in e) Pe.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && J)
            for (var n of J(e)) t.indexOf(n) < 0 && Ie.call(e, n) && (r[n] = e[n]);
        return r
    };
    var ar = (e, t) => {
        for (var r in t) Ee(e, r, {
            get: t[r],
            enumerable: !0
        })
    };
    var $ = (e, t, r) => new Promise((n, o) => {
        var i = c => {
                try {
                    u(r.next(c))
                } catch (a) {
                    o(a)
                }
            },
            s = c => {
                try {
                    u(r.throw(c))
                } catch (a) {
                    o(a)
                }
            },
            u = c => c.done ? n(c.value) : Promise.resolve(c.value).then(i, s);
        u((r = r.apply(e, t)).next())
    });
    var Te = "WebPixel::Render";
    var ae = e => shopify.extend(Te, e);
    var le = {
        ANALYTICS_DECLINED: "analyticsConsentDeclined",
        ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
        CONSENT_COLLECTED: "visitorConsentCollected"
    };
    var Ae;

    function m(e, t, r) {
        var u;

        function n(c, a) {
            if (c._zod || Object.defineProperty(c, "_zod", {
                    value: {
                        def: a,
                        constr: s,
                        traits: new Set
                    },
                    enumerable: !1
                }), c._zod.traits.has(e)) return;
            c._zod.traits.add(e), t(c, a);
            let l = s.prototype,
                p = Object.keys(l);
            for (let f = 0; f < p.length; f++) {
                let h = p[f];
                h in c || (c[h] = l[h].bind(c))
            }
        }
        let o = (u = r == null ? void 0 : r.Parent) != null ? u : Object;
        class i extends o {}
        Object.defineProperty(i, "name", {
            value: e
        });

        function s(c) {
            var p;
            var a;
            let l = r != null && r.Parent ? new i : this;
            n(l, c), (p = (a = l._zod).deferred) != null || (a.deferred = []);
            for (let f of l._zod.deferred) f();
            return l
        }
        return Object.defineProperty(s, "init", {
            value: n
        }), Object.defineProperty(s, Symbol.hasInstance, {
            value: c => {
                var a, l;
                return r != null && r.Parent && c instanceof r.Parent ? !0 : (l = (a = c == null ? void 0 : c._zod) == null ? void 0 : a.traits) == null ? void 0 : l.has(e)
            }
        }), Object.defineProperty(s, "name", {
            value: e
        }), s
    }
    var S = class extends Error {
        constructor() {
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
        }
    };
    var Ce;
    (Ce = (Ae = globalThis).__zod_globalConfig) != null || (Ae.__zod_globalConfig = {});
    var pe = globalThis.__zod_globalConfig;

    function C(e) {
        return e && Object.assign(pe, e), pe
    }

    function Me(e) {
        let t = Object.values(e).filter(n => typeof n == "number");
        return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o)
    }

    function Re(e, t) {
        return typeof t == "bigint" ? t.toString() : t
    }

    function Ne(e) {
        return {
            get value() {
                {
                    let r = e();
                    return Object.defineProperty(this, "value", {
                        value: r
                    }), r
                }
                throw new Error("cached value already set")
            }
        }
    }

    function fe(e) {
        return e == null
    }

    function ee(e) {
        let t = e.startsWith("^") ? 1 : 0,
            r = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, r)
    }
    var Oe = Symbol("evaluating");

    function w(e, t, r) {
        let n;
        Object.defineProperty(e, t, {
            get() {
                if (n !== Oe) return n === void 0 && (n = Oe, n = r()), n
            },
            set(o) {
                Object.defineProperty(e, t, {
                    value: o
                })
            },
            configurable: !0
        })
    }
    var me = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

    function De(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }
    var Ue = new Set(["string", "number", "symbol"]);

    function he(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function te(e, t, r) {
        let n = new e._zod.constr(t != null ? t : e._zod.def);
        return (!t || r != null && r.parent) && (n._zod.parent = e), n
    }

    function b(e) {
        let t = e;
        if (!t) return {};
        if (typeof t == "string") return {
            error: () => t
        };
        if ((t == null ? void 0 : t.message) !== void 0) {
            if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
            t.error = t.message
        }
        return delete t.message, typeof t.error == "string" ? _(d({}, t), {
            error: () => t.error
        }) : t
    }

    function Le(e) {
        return Object.keys(e).filter(t => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional")
    }
    var lr = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    };

    function D(e, t = 0) {
        var r;
        if (e.aborted === !0) return !0;
        for (let n = t; n < e.issues.length; n++)
            if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0) return !0;
        return !1
    }

    function Fe(e, t = 0) {
        var r;
        if (e.aborted === !0) return !0;
        for (let n = t; n < e.issues.length; n++)
            if (((r = e.issues[n]) == null ? void 0 : r.continue) === !1) return !0;
        return !1
    }

    function re(e, t) {
        return t.map(r => {
            var o;
            var n;
            return (o = (n = r).path) != null || (n.path = []), r.path.unshift(e), r
        })
    }

    function Q(e) {
        return typeof e == "string" ? e : e == null ? void 0 : e.message
    }

    function O(e, t, r) {
        var c, a, l, p, f, h, g, x, v, y, Y;
        let n = e.message ? e.message : (y = (v = (g = (f = Q((l = (a = (c = e.inst) == null ? void 0 : c._zod.def) == null ? void 0 : a.error) == null ? void 0 : l.call(a, e))) != null ? f : Q((p = t == null ? void 0 : t.error) == null ? void 0 : p.call(t, e))) != null ? g : Q((h = r.customError) == null ? void 0 : h.call(r, e))) != null ? v : Q((x = r.localeError) == null ? void 0 : x.call(r, e))) != null ? y : "Invalid input",
            j = e,
            {
                inst: o,
                continue: i,
                input: s
            } = j,
            u = Se(j, ["inst", "continue", "input"]);
        return (Y = u.path) != null || (u.path = []), u.message = n, t != null && t.reportInput && (u.input = s), u
    }

    function _e(e) {
        return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown"
    }
    var je = (e, t) => {
            e.name = "$ZodError", Object.defineProperty(e, "_zod", {
                value: e._zod,
                enumerable: !1
            }), Object.defineProperty(e, "issues", {
                value: t,
                enumerable: !1
            }), e.message = JSON.stringify(t, Re, 2), Object.defineProperty(e, "toString", {
                value: () => e.message,
                enumerable: !1
            })
        },
        Be = m("$ZodError", je),
        B = m("$ZodError", je, {
            Parent: Error
        });

    function xe(e, t = r => r.message) {
        let r = {},
            n = [];
        for (let o of e.issues) o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
        return {
            formErrors: n,
            fieldErrors: r
        }
    }

    function ge(e, t = r => r.message) {
        let r = {
                _errors: []
            },
            n = (o, i = []) => {
                for (let s of o.issues)
                    if (s.code === "invalid_union" && s.errors.length) s.errors.map(u => n({
                        issues: u
                    }, [...i, ...s.path]));
                    else if (s.code === "invalid_key") n({
                    issues: s.issues
                }, [...i, ...s.path]);
                else if (s.code === "invalid_element") n({
                    issues: s.issues
                }, [...i, ...s.path]);
                else {
                    let u = [...i, ...s.path];
                    if (u.length === 0) r._errors.push(t(s));
                    else {
                        let c = r,
                            a = 0;
                        for (; a < u.length;) {
                            let l = u[a];
                            a === u.length - 1 ? (c[l] = c[l] || {
                                _errors: []
                            }, c[l]._errors.push(t(s))) : c[l] = c[l] || {
                                _errors: []
                            }, c = c[l], a++
                        }
                    }
                }
            };
        return n(e), r
    }
    var dr = e => (t, r, n, o) => {
            var u;
            let i = n ? _(d({}, n), {
                    async: !1
                }) : {
                    async: !1
                },
                s = t._zod.run({
                    value: r,
                    issues: []
                }, i);
            if (s instanceof Promise) throw new S;
            if (s.issues.length) {
                let c = new((u = o == null ? void 0 : o.Err) != null ? u : e)(s.issues.map(a => O(a, i, C())));
                throw me(c, o == null ? void 0 : o.callee), c
            }
            return s.value
        },
        ne = dr(B),
        fr = e => (t, r, n, o) => $(null, null, function*() {
            var u;
            let i = n ? _(d({}, n), {
                    async: !0
                }) : {
                    async: !0
                },
                s = t._zod.run({
                    value: r,
                    issues: []
                }, i);
            if (s instanceof Promise && (s = yield s), s.issues.length) {
                let c = new((u = o == null ? void 0 : o.Err) != null ? u : e)(s.issues.map(a => O(a, i, C())));
                throw me(c, o == null ? void 0 : o.callee), c
            }
            return s.value
        }),
        oe = fr(B),
        mr = e => (t, r, n) => {
            let o = n ? _(d({}, n), {
                    async: !1
                }) : {
                    async: !1
                },
                i = t._zod.run({
                    value: r,
                    issues: []
                }, o);
            if (i instanceof Promise) throw new S;
            return i.issues.length ? {
                success: !1,
                error: new(e != null ? e : Be)(i.issues.map(s => O(s, o, C())))
            } : {
                success: !0,
                data: i.value
            }
        },
        V = mr(B),
        hr = e => (t, r, n) => $(null, null, function*() {
            let o = n ? _(d({}, n), {
                    async: !0
                }) : {
                    async: !0
                },
                i = t._zod.run({
                    value: r,
                    issues: []
                }, o);
            return i instanceof Promise && (i = yield i), i.issues.length ? {
                success: !1,
                error: new e(i.issues.map(s => O(s, o, C())))
            } : {
                success: !0,
                data: i.value
            }
        }),
        K = hr(B);
    var Ve = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    var Ke = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        Ge = new RegExp(`^${Ke}$`);

    function We(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
    }

    function He(e) {
        return new RegExp(`^${We(e)}$`)
    }

    function qe(e) {
        let t = We({
                precision: e.precision
            }),
            r = ["Z"];
        e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        let n = `${t}(?:${r.join("|")})`;
        return new RegExp(`^${Ke}T(?:${n})$`)
    }
    var Xe = e => {
        var r, n;
        let t = e ? `[\\s\\S]{${(r=e==null?void 0:e.minimum)!=null?r:0},${(n=e==null?void 0:e.maximum)!=null?n:""}}` : "[\\s\\S]*";
        return new RegExp(`^${t}$`)
    };
    var Ye = /^-?\d+(?:\.\d+)?$/;
    var R = m("$ZodCheck", (e, t) => {
            var n, o;
            var r;
            (n = e._zod) != null || (e._zod = {}), e._zod.def = t, (o = (r = e._zod).onattach) != null || (r.onattach = [])
        }),
        _r = {
            number: "number",
            bigint: "bigint",
            object: "date"
        };
    var Je = m("$ZodCheckGreaterThan", (e, t) => {
        R.init(e, t);
        let r = _r[typeof t.value];
        e._zod.onattach.push(n => {
            var s;
            let o = n._zod.bag,
                i = (s = t.inclusive ? o.minimum : o.exclusiveMinimum) != null ? s : Number.NEGATIVE_INFINITY;
            t.value > i && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value)
        }), e._zod.check = n => {
            (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
                origin: r,
                code: "too_small",
                minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
                input: n.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort
            })
        }
    });
    var Qe = m("$ZodCheckMaxLength", (e, t) => {
        var n;
        var r;
        R.init(e, t), (n = (r = e._zod.def).when) != null || (r.when = o => {
            let i = o.value;
            return !fe(i) && i.length !== void 0
        }), e._zod.onattach.push(o => {
            var s;
            let i = (s = o._zod.bag.maximum) != null ? s : Number.POSITIVE_INFINITY;
            t.maximum < i && (o._zod.bag.maximum = t.maximum)
        }), e._zod.check = o => {
            let i = o.value;
            if (i.length <= t.maximum) return;
            let u = _e(i);
            o.issues.push({
                origin: u,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: i,
                inst: e,
                continue: !t.abort
            })
        }
    });
    var et = m("$ZodCheckLengthEquals", (e, t) => {
            var n;
            var r;
            R.init(e, t), (n = (r = e._zod.def).when) != null || (r.when = o => {
                let i = o.value;
                return !fe(i) && i.length !== void 0
            }), e._zod.onattach.push(o => {
                let i = o._zod.bag;
                i.minimum = t.length, i.maximum = t.length, i.length = t.length
            }), e._zod.check = o => {
                let i = o.value,
                    s = i.length;
                if (s === t.length) return;
                let u = _e(i),
                    c = s > t.length;
                o.issues.push(_(d({
                    origin: u
                }, c ? {
                    code: "too_big",
                    maximum: t.length
                } : {
                    code: "too_small",
                    minimum: t.length
                }), {
                    inclusive: !0,
                    exact: !0,
                    input: o.value,
                    inst: e,
                    continue: !t.abort
                }))
            }
        }),
        ze = m("$ZodCheckStringFormat", (e, t) => {
            var o, i;
            var r, n;
            R.init(e, t), e._zod.onattach.push(s => {
                var c;
                let u = s._zod.bag;
                u.format = t.format, t.pattern && ((c = u.patterns) != null || (u.patterns = new Set), u.patterns.add(t.pattern))
            }), t.pattern ? (o = (r = e._zod).check) != null || (r.check = s => {
                t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push(_(d({
                    origin: "string",
                    code: "invalid_format",
                    format: t.format,
                    input: s.value
                }, t.pattern ? {
                    pattern: t.pattern.toString()
                } : {}), {
                    inst: e,
                    continue: !t.abort
                }))
            }) : (i = (n = e._zod).check) != null || (n.check = () => {})
        }),
        tt = m("$ZodCheckRegex", (e, t) => {
            ze.init(e, t), e._zod.check = r => {
                t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: r.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort
                })
            }
        });
    var nt = {
        major: 4,
        minor: 4,
        patch: 3
    };
    var I = m("$ZodType", (e, t) => {
            var o, i, s;
            var r;
            e != null || (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = nt;
            let n = [...(o = e._zod.def.checks) != null ? o : []];
            e._zod.traits.has("$ZodCheck") && n.unshift(e);
            for (let u of n)
                for (let c of u._zod.onattach) c(e);
            if (n.length === 0)(i = (r = e._zod).deferred) != null || (r.deferred = []), (s = e._zod.deferred) == null || s.push(() => {
                e._zod.run = e._zod.parse
            });
            else {
                let u = (a, l, p) => {
                        let f = D(a),
                            h;
                        for (let g of l) {
                            if (g._zod.def.when) {
                                if (Fe(a) || !g._zod.def.when(a)) continue
                            } else if (f) continue;
                            let x = a.issues.length,
                                v = g._zod.check(a);
                            if (v instanceof Promise && (p == null ? void 0 : p.async) === !1) throw new S;
                            if (h || v instanceof Promise) h = (h != null ? h : Promise.resolve()).then(() => $(null, null, function*() {
                                yield v, a.issues.length !== x && (f || (f = D(a, x)))
                            }));
                            else {
                                if (a.issues.length === x) continue;
                                f || (f = D(a, x))
                            }
                        }
                        return h ? h.then(() => a) : a
                    },
                    c = (a, l, p) => {
                        if (D(a)) return a.aborted = !0, a;
                        let f = u(l, n, p);
                        if (f instanceof Promise) {
                            if (p.async === !1) throw new S;
                            return f.then(h => e._zod.parse(h, p))
                        }
                        return e._zod.parse(f, p)
                    };
                e._zod.run = (a, l) => {
                    if (l.skipChecks) return e._zod.parse(a, l);
                    if (l.direction === "backward") {
                        let f = e._zod.parse({
                            value: a.value,
                            issues: []
                        }, _(d({}, l), {
                            skipChecks: !0
                        }));
                        return f instanceof Promise ? f.then(h => c(h, a, l)) : c(f, a, l)
                    }
                    let p = e._zod.parse(a, l);
                    if (p instanceof Promise) {
                        if (l.async === !1) throw new S;
                        return p.then(f => u(f, n, l))
                    }
                    return u(p, n, l)
                }
            }
            w(e, "~standard", () => ({
                validate: u => {
                    var c;
                    try {
                        let a = V(e, u);
                        return a.success ? {
                            value: a.data
                        } : {
                            issues: (c = a.error) == null ? void 0 : c.issues
                        }
                    } catch (a) {
                        return K(e, u).then(l => {
                            var p;
                            return l.success ? {
                                value: l.data
                            } : {
                                issues: (p = l.error) == null ? void 0 : p.issues
                            }
                        })
                    }
                },
                vendor: "zod",
                version: 1
            }))
        }),
        $e = m("$ZodString", (e, t) => {
            var r, n, o;
            I.init(e, t), e._zod.pattern = (o = [...(n = (r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) != null ? n : []].pop()) != null ? o : Xe(e._zod.bag), e._zod.parse = (i, s) => {
                if (t.coerce) try {
                    i.value = String(i.value)
                } catch (u) {}
                return typeof i.value == "string" || i.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: i.value,
                    inst: e
                }), i
            }
        }),
        U = m("$ZodStringFormat", (e, t) => {
            ze.init(e, t), $e.init(e, t)
        });
    var ut = m("$ZodISODateTime", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = qe(t)), U.init(e, t)
        }),
        ct = m("$ZodISODate", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = Ge), U.init(e, t)
        }),
        at = m("$ZodISOTime", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = He(t)), U.init(e, t)
        }),
        lt = m("$ZodISODuration", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = Ve), U.init(e, t)
        });
    var pt = m("$ZodNumber", (e, t) => {
        var r;
        I.init(e, t), e._zod.pattern = (r = e._zod.bag.pattern) != null ? r : Ye, e._zod.parse = (n, o) => {
            if (t.coerce) try {
                n.value = Number(n.value)
            } catch (u) {}
            let i = n.value;
            if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
            let s = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
            return n.issues.push(d({
                expected: "number",
                code: "invalid_type",
                input: i,
                inst: e
            }, s ? {
                received: s
            } : {})), n
        }
    });
    var dt = m("$ZodUnknown", (e, t) => {
        I.init(e, t), e._zod.parse = r => r
    });

    function ot(e, t, r) {
        e.issues.length && t.issues.push(...re(r, e.issues)), t.value[r] = e.value
    }
    var ft = m("$ZodArray", (e, t) => {
        I.init(e, t), e._zod.parse = (r, n) => {
            let o = r.value;
            if (!Array.isArray(o)) return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: o,
                inst: e
            }), r;
            r.value = Array(o.length);
            let i = [];
            for (let s = 0; s < o.length; s++) {
                let u = o[s],
                    c = t.element._zod.run({
                        value: u,
                        issues: []
                    }, n);
                c instanceof Promise ? i.push(c.then(a => ot(a, r, s))) : ot(c, r, s)
            }
            return i.length ? Promise.all(i).then(() => r) : r
        }
    });

    function ie(e, t, r, n, o, i) {
        let s = r in n;
        if (e.issues.length) {
            if (o && i && !s) return;
            t.issues.push(...re(r, e.issues))
        }
        if (!s && !o) {
            e.issues.length || t.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [r]
            });
            return
        }
        e.value === void 0 ? s && (t.value[r] = void 0) : t.value[r] = e.value
    }

    function gr(e) {
        var n, o, i, s;
        let t = Object.keys(e.shape);
        for (let u of t)
            if (!((s = (i = (o = (n = e.shape) == null ? void 0 : n[u]) == null ? void 0 : o._zod) == null ? void 0 : i.traits) != null && s.has("$ZodType"))) throw new Error(`Invalid element at key "${u}": expected a Zod schema`);
        let r = Le(e.shape);
        return _(d({}, e), {
            keys: t,
            keySet: new Set(t),
            numKeys: t.length,
            optionalKeys: new Set(r)
        })
    }

    function vr(e, t, r, n, o, i) {
        let s = [],
            u = o.keySet,
            c = o.catchall._zod,
            a = c.def.type,
            l = c.optin === "optional",
            p = c.optout === "optional";
        for (let f in t) {
            if (f === "__proto__" || u.has(f)) continue;
            if (a === "never") {
                s.push(f);
                continue
            }
            let h = c.run({
                value: t[f],
                issues: []
            }, n);
            h instanceof Promise ? e.push(h.then(g => ie(g, r, f, t, l, p))) : ie(h, r, f, t, l, p)
        }
        return s.length && r.issues.push({
            code: "unrecognized_keys",
            keys: s,
            input: t,
            inst: i
        }), e.length ? Promise.all(e).then(() => r) : r
    }
    var mt = m("$ZodObject", (e, t) => {
        I.init(e, t);
        let r = Object.getOwnPropertyDescriptor(t, "shape");
        if (!(r != null && r.get)) {
            let u = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    let c = d({}, u);
                    return Object.defineProperty(t, "shape", {
                        value: c
                    }), c
                }
            })
        }
        let n = Ne(() => gr(t));
        w(e._zod, "propValues", () => {
            var a;
            let u = t.shape,
                c = {};
            for (let l in u) {
                let p = u[l]._zod;
                if (p.values) {
                    (a = c[l]) != null || (c[l] = new Set);
                    for (let f of p.values) c[l].add(f)
                }
            }
            return c
        });
        let o = De,
            i = t.catchall,
            s;
        e._zod.parse = (u, c) => {
            s != null || (s = n.value);
            let a = u.value;
            if (!o(a)) return u.issues.push({
                expected: "object",
                code: "invalid_type",
                input: a,
                inst: e
            }), u;
            u.value = {};
            let l = [],
                p = s.shape;
            for (let f of s.keys) {
                let h = p[f],
                    g = h._zod.optin === "optional",
                    x = h._zod.optout === "optional",
                    v = h._zod.run({
                        value: a[f],
                        issues: []
                    }, c);
                v instanceof Promise ? l.push(v.then(y => ie(y, u, f, a, g, x))) : ie(v, u, f, a, g, x)
            }
            return i ? vr(l, a, u, c, n.value, e) : l.length ? Promise.all(l).then(() => u) : u
        }
    });

    function it(e, t, r, n) {
        for (let i of e)
            if (i.issues.length === 0) return t.value = i.value, t;
        let o = e.filter(i => !D(i));
        return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: r,
            errors: e.map(i => i.issues.map(s => O(s, n, C())))
        }), t)
    }
    var ht = m("$ZodUnion", (e, t) => {
        I.init(e, t), w(e._zod, "optin", () => t.options.some(n => n._zod.optin === "optional") ? "optional" : void 0), w(e._zod, "optout", () => t.options.some(n => n._zod.optout === "optional") ? "optional" : void 0), w(e._zod, "values", () => {
            if (t.options.every(n => n._zod.values)) return new Set(t.options.flatMap(n => Array.from(n._zod.values)))
        }), w(e._zod, "pattern", () => {
            if (t.options.every(n => n._zod.pattern)) {
                let n = t.options.map(o => o._zod.pattern);
                return new RegExp(`^(${n.map(o=>ee(o.source)).join("|")})$`)
            }
        });
        let r = t.options.length === 1 ? t.options[0]._zod.run : null;
        e._zod.parse = (n, o) => {
            if (r) return r(n, o);
            let i = !1,
                s = [];
            for (let u of t.options) {
                let c = u._zod.run({
                    value: n.value,
                    issues: []
                }, o);
                if (c instanceof Promise) s.push(c), i = !0;
                else {
                    if (c.issues.length === 0) return c;
                    s.push(c)
                }
            }
            return i ? Promise.all(s).then(u => it(u, n, e, o)) : it(s, n, e, o)
        }
    });
    var _t = m("$ZodEnum", (e, t) => {
        I.init(e, t);
        let r = Me(t.entries),
            n = new Set(r);
        e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter(o=>Ue.has(typeof o)).map(o=>typeof o=="string"?he(o):o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
            let s = o.value;
            return n.has(s) || o.issues.push({
                code: "invalid_value",
                values: r,
                input: s,
                inst: e
            }), o
        }
    });

    function st(e, t) {
        return t === void 0 && (e.issues.length || e.fallback) ? {
            issues: [],
            value: void 0
        } : e
    }
    var xt = m("$ZodOptional", (e, t) => {
        I.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", w(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), w(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${ee(r.source)})?$`) : void 0
        }), e._zod.parse = (r, n) => {
            if (t.innerType._zod.optin === "optional") {
                let o = r.value,
                    i = t.innerType._zod.run(r, n);
                return i instanceof Promise ? i.then(s => st(s, o)) : st(i, o)
            }
            return r.value === void 0 ? r : t.innerType._zod.run(r, n)
        }
    });
    var gt = m("$ZodNullable", (e, t) => {
        I.init(e, t), w(e._zod, "optin", () => t.innerType._zod.optin), w(e._zod, "optout", () => t.innerType._zod.optout), w(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${ee(r.source)}|null)$`) : void 0
        }), w(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n)
    });

    function vt(e, t) {
        return new e(d({
            type: "string"
        }, b(t)))
    }

    function zt(e, t) {
        return new e(d({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null
        }, b(t)))
    }

    function $t(e, t) {
        return new e(d({
            type: "string",
            format: "date",
            check: "string_format"
        }, b(t)))
    }

    function yt(e, t) {
        return new e(d({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null
        }, b(t)))
    }

    function bt(e, t) {
        return new e(d({
            type: "string",
            format: "duration",
            check: "string_format"
        }, b(t)))
    }

    function wt(e, t) {
        return new e(d({
            type: "number",
            checks: []
        }, b(t)))
    }

    function Zt(e) {
        return new e({
            type: "unknown"
        })
    }

    function L(e, t) {
        return new Je(_(d({
            check: "greater_than"
        }, b(t)), {
            value: e,
            inclusive: !0
        }))
    }

    function se(e, t) {
        return new Qe(_(d({
            check: "max_length"
        }, b(t)), {
            maximum: e
        }))
    }

    function ye(e, t) {
        return new et(_(d({
            check: "length_equals"
        }, b(t)), {
            length: e
        }))
    }

    function N(e, t) {
        return new tt(_(d({
            check: "string_format",
            format: "regex"
        }, b(t)), {
            pattern: e
        }))
    }
    var T = m("ZodMiniType", (e, t) => {
            if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
            I.init(e, t), e.def = t, e.type = t.type, e.parse = (r, n) => ne(e, r, n, {
                callee: e.parse
            }), e.safeParse = (r, n) => V(e, r, n), e.parseAsync = (r, n) => $(null, null, function*() {
                return oe(e, r, n, {
                    callee: e.parseAsync
                })
            }), e.safeParseAsync = (r, n) => $(null, null, function*() {
                return K(e, r, n)
            }), e.check = (...r) => {
                var n;
                return e.clone(_(d({}, t), {
                    checks: [...(n = t.checks) != null ? n : [], ...r.map(o => typeof o == "function" ? {
                        _zod: {
                            check: o,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : o)]
                }), {
                    parent: !0
                })
            }, e.with = e.check, e.clone = (r, n) => te(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.apply = r => r(e)
        }),
        kt = m("ZodMiniString", (e, t) => {
            $e.init(e, t), T.init(e, t)
        });

    function G(e) {
        return vt(kt, e)
    }
    var W = m("ZodMiniStringFormat", (e, t) => {
        U.init(e, t), kt.init(e, t)
    });
    var br = m("ZodMiniNumber", (e, t) => {
        pt.init(e, t), T.init(e, t)
    });

    function ue(e) {
        return wt(br, e)
    }
    var wr = m("ZodMiniUnknown", (e, t) => {
        dt.init(e, t), T.init(e, t)
    });

    function Et() {
        return Zt(wr)
    }
    var Zr = m("ZodMiniArray", (e, t) => {
        ft.init(e, t), T.init(e, t)
    });

    function Pt(e, t) {
        return new Zr(d({
            type: "array",
            element: e
        }, b(t)))
    }
    var kr = m("ZodMiniObject", (e, t) => {
        mt.init(e, t), T.init(e, t), w(e, "shape", () => t.shape)
    });

    function ce(e, t) {
        let r = d({
            type: "object",
            shape: e != null ? e : {}
        }, b(t));
        return new kr(r)
    }
    var Er = m("ZodMiniUnion", (e, t) => {
        ht.init(e, t), T.init(e, t)
    });

    function It(e, t) {
        return new Er(d({
            type: "union",
            options: e
        }, b(t)))
    }
    var Pr = m("ZodMiniEnum", (e, t) => {
        _t.init(e, t), T.init(e, t), e.options = Object.values(t.entries)
    });

    function H(e, t) {
        let r = Array.isArray(e) ? Object.fromEntries(e.map(n => [n, n])) : e;
        return new Pr(d({
            type: "enum",
            entries: r
        }, b(t)))
    }
    var Ir = m("ZodMiniOptional", (e, t) => {
        xt.init(e, t), T.init(e, t)
    });

    function Z(e) {
        return new Ir({
            type: "optional",
            innerType: e
        })
    }
    var Sr = m("ZodMiniNullable", (e, t) => {
        gt.init(e, t), T.init(e, t)
    });

    function E(e) {
        return new Sr({
            type: "nullable",
            innerType: e
        })
    }
    var q = {};
    ar(q, {
        ZodMiniISODate: () => Tt,
        ZodMiniISODateTime: () => St,
        ZodMiniISODuration: () => Ct,
        ZodMiniISOTime: () => At,
        date: () => Or,
        datetime: () => Cr,
        duration: () => Rr,
        time: () => Mr
    });
    var St = m("ZodMiniISODateTime", (e, t) => {
        ut.init(e, t), W.init(e, t)
    });

    function Cr(e) {
        return zt(St, e)
    }
    var Tt = m("ZodMiniISODate", (e, t) => {
        ct.init(e, t), W.init(e, t)
    });

    function Or(e) {
        return $t(Tt, e)
    }
    var At = m("ZodMiniISOTime", (e, t) => {
        at.init(e, t), W.init(e, t)
    });

    function Mr(e) {
        return yt(At, e)
    }
    var Ct = m("ZodMiniISODuration", (e, t) => {
        lt.init(e, t), W.init(e, t)
    });

    function Rr(e) {
        return bt(Ct, e)
    }

    function Ot(e) {
        return e.customerPrivacy.analyticsProcessingAllowed ? "granted" : "unknown"
    }

    function Mt(e) {
        return e.analyticsProcessingAllowed ? "granted" : "denied"
    }

    function Rt(e, t) {
        e.subscribe(le.CONSENT_COLLECTED, r => {
            t(r)
        })
    }
    var Nt = typeof process != "undefined" && "https://dev-pixel-service.api-swap-os.com/events" || "",
        X = 1800 * 1e3,
        A = {
            SESSION_ID: "session_id",
            SESSION_EXPIRES_AT: "session_expires_at",
            USER_ID: "user_id"
        },
        Dt = {
            LOCALIZATION: "localization"
        },
        Ut = "_swap_ab_bucket",
        Lt = "_swap_analytics_enabled",
        Ft = "swap:analytics_state",
        jt = "swap:ab_bucket",
        z = {
            LISTING: "listing",
            PRODUCT: "product",
            CONTENT: "content",
            CHECKOUT: "checkout"
        },
        k = {
            PAGE_VIEW: "page_view",
            ADD_TO_CART: "add_to_cart",
            REMOVE_FROM_CART: "remove_from_cart",
            CHECKOUT_STARTED: "checkout_started",
            CHECKOUT_COMPLETED: "checkout_completed"
        };

    function Nr(e) {
        var t;
        return ((t = e == null ? void 0 : e.find(r => (r == null ? void 0 : r.key) === Lt)) == null ? void 0 : t.value) === "true"
    }

    function Bt(e, t, r) {
        var i;
        let n = Nr((i = t.data.cart) == null ? void 0 : i.attributes),
            o = n;
        return e.subscribe(Ft, s => {
            let u = s.customData;
            n = (u == null ? void 0 : u.isConversionAnalyticsEnabled) === !0, n && !o && (o = !0, r == null || r())
        }), () => n
    }
    var Vt = "swap:checkout_plus_added",
        Kt = "swap:checkout_plus_removed",
        Dr = {
            pdp: z.PRODUCT,
            cart_drawer: z.CONTENT,
            cart_page: z.CONTENT,
            checkout: z.CHECKOUT
        };

    function Ur(e) {
        return e === "pdp" || e === "cart_drawer" || e === "cart_page" || e === "checkout" ? e : "unknown"
    }

    function Lr(e) {
        var r;
        let t = (r = e.document.location.pathname) != null ? r : "";
        return t.includes("/collections") || t.includes("/search") ? z.LISTING : t.includes("/products") ? z.PRODUCT : z.CONTENT
    }

    function Gt(e) {
        return e.map(t => {
            var r, n, o, i, s, u, c;
            return {
                productId: (n = (r = t.variant) == null ? void 0 : r.product.id) != null ? n : null,
                variantId: (i = (o = t.variant) == null ? void 0 : o.id) != null ? i : null,
                title: (s = t.title) != null ? s : null,
                quantity: t.quantity,
                price: (c = (u = t.variant) == null ? void 0 : u.price.amount) != null ? c : null
            }
        })
    }

    function F(e, t) {
        var s, u;
        let r = (u = (s = t == null ? void 0 : t.data) == null ? void 0 : s.shop) == null ? void 0 : u.myshopifyDomain,
            {
                pathname: n,
                search: o,
                href: i
            } = e.document.location;
        return r ? `https://${r}${n!=null?n:""}${o!=null?o:""}` : i
    }

    function Wt(e) {
        return (t, r) => {
            var o, i, s, u, c, a, l, p;
            let n = (o = t.data.cartLine) == null ? void 0 : o.merchandise;
            return {
                outboundEvent: e,
                stage: z.PRODUCT,
                payload: {
                    url: F(t.context, r),
                    productId: (i = n == null ? void 0 : n.product.id) != null ? i : null,
                    variantId: (s = n == null ? void 0 : n.id) != null ? s : null,
                    productTitle: (u = n == null ? void 0 : n.product.title) != null ? u : null,
                    quantity: (a = (c = t.data.cartLine) == null ? void 0 : c.quantity) != null ? a : 0,
                    price: (l = n == null ? void 0 : n.price.amount) != null ? l : null,
                    currency: (p = n == null ? void 0 : n.price.currencyCode) != null ? p : null
                }
            }
        }
    }

    function Ht(e, t) {
        return {
            outboundEvent: k.PAGE_VIEW,
            stage: Lr(e.context),
            payload: {
                url: F(e.context, t),
                title: e.context.document.title
            }
        }
    }

    function qt(e, t) {
        var n, o, i;
        let r = e.data.productVariant;
        return {
            outboundEvent: k.PAGE_VIEW,
            stage: z.PRODUCT,
            payload: {
                url: F(e.context, t),
                title: e.context.document.title,
                productId: (o = (n = r == null ? void 0 : r.product) == null ? void 0 : n.id) != null ? o : null,
                variantId: (i = r == null ? void 0 : r.id) != null ? i : null,
                eventData: r
            }
        }
    }
    var Xt = Wt(k.ADD_TO_CART),
        Yt = Wt(k.REMOVE_FROM_CART);

    function be(e) {
        return typeof e == "string" && e !== "" ? e : typeof e == "number" && Number.isFinite(e) ? String(e) : null
    }

    function Fr(e) {
        return typeof e == "number" && Number.isFinite(e) && e >= 0 || typeof e == "string" && /^\d+(\.\d{1,2})?$/.test(e) ? e : null
    }

    function jr(e) {
        return typeof e == "string" && /^[A-Z]{3}$/.test(e) ? e : null
    }

    function Br(e) {
        return typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : void 0
    }

    function Jt(e, t, r) {
        var p;
        let n = (p = e.customData) != null ? p : {},
            o = Ur(n.source),
            i = be(n.productId),
            s = be(n.variantId),
            u = be(n.productTitle),
            c = Fr(n.price),
            a = jr(n.currency),
            l = Br(n.quantity);
        return {
            outboundEvent: r,
            stage: o === "unknown" ? z.CONTENT : Dr[o],
            payload: _(d(d(d(d(d(d({
                url: F(e.context, t)
            }, i != null && {
                productId: i
            }), s != null && {
                variantId: s
            }), u != null && {
                productTitle: u
            }), c != null && {
                price: c
            }), a != null && {
                currency: a
            }), l != null && {
                quantity: l
            }), {
                eventData: {
                    checkoutPlusSource: o
                }
            })
        }
    }

    function Qt(e, t) {
        return Jt(e, t, k.ADD_TO_CART)
    }

    function er(e, t) {
        return Jt(e, t, k.REMOVE_FROM_CART)
    }

    function tr(e, t) {
        var n, o, i, s, u;
        let r = e.data.checkout;
        return {
            outboundEvent: k.CHECKOUT_STARTED,
            stage: z.CHECKOUT,
            payload: {
                url: F(e.context, t),
                checkoutId: (n = r.token) != null ? n : null,
                totalPrice: (i = (o = r.totalPrice) == null ? void 0 : o.amount) != null ? i : null,
                currency: (u = (s = r.totalPrice) == null ? void 0 : s.currencyCode) != null ? u : null,
                lineItems: Gt(r.lineItems)
            }
        }
    }

    function rr(e, t) {
        var n, o, i, s, u, c, a;
        let r = e.data.checkout;
        return {
            outboundEvent: k.CHECKOUT_COMPLETED,
            stage: z.CHECKOUT,
            payload: {
                url: F(e.context, t),
                checkoutId: (n = r.token) != null ? n : null,
                orderId: (i = (o = r.order) == null ? void 0 : o.id) != null ? i : null,
                totalPrice: (u = (s = r.totalPrice) == null ? void 0 : s.amount) != null ? u : null,
                currency: (a = (c = r.totalPrice) == null ? void 0 : c.currencyCode) != null ? a : null,
                lineItems: Gt(r.lineItems)
            }
        }
    }
    var nr = {
        product_viewed: qt,
        product_added_to_cart: Xt,
        product_removed_from_cart: Yt,
        checkout_started: tr,
        checkout_completed: rr
    };

    function or(e, t, r, n) {
        e.subscribe("page_viewed", i => {
            var c;
            if (((c = i.context.document.location.pathname) != null ? c : "").includes("/products")) return;
            let u = Ht(i, n);
            t(u.outboundEvent, u.stage, u.payload, r())
        }), Object.keys(nr).forEach(i => {
            e.subscribe(i, s => {
                let u = nr[i](s, n);
                t(u.outboundEvent, u.stage, u.payload, r())
            })
        });

        function o(i, s) {
            e.subscribe(i, u => {
                let c = s(u, n);
                t(c.outboundEvent, c.stage, c.payload, r())
            })
        }
        o(Vt, Qt), o(Kt, er)
    }
    var Vr = H([z.LISTING, z.PRODUCT, z.CONTENT, z.CHECKOUT]),
        Kr = H(["shopify_customer_id", "anonymous_consented", "guest"]),
        Gr = H(["granted", "denied", "unknown"]),
        Wr = H([k.PAGE_VIEW, k.ADD_TO_CART, k.REMOVE_FROM_CART, k.CHECKOUT_STARTED, k.CHECKOUT_COMPLETED]),
        Hr = /^[^\0<>]*$/,
        qr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function P(e) {
        return G().check(se(e), N(Hr))
    }
    var Xr = P(2048).check(N(/^https:\/\//, "url must use https")),
        we = E(It([ue().check(L(0)), G().check(N(/^\d+(\.\d{1,2})?$/, "invalid price format"))])),
        Yr = ce({
            productId: E(P(64)),
            variantId: E(P(64)),
            title: E(P(512)),
            quantity: ue().check(L(0)),
            price: we
        }),
        Jr = ce({
            event: Wr,
            stage: Vr,
            sessionId: G().check(N(qr, "sessionId must be a UUID")),
            timestamp: q.datetime(),
            userId: E(P(512)),
            userIdType: Kr,
            localization: E(P(16)),
            privacy: Z(ce({
                consent_state: Gr
            })),
            url: Z(Xr),
            title: Z(P(512)),
            eventData: Z(Et()),
            productId: Z(E(P(64))),
            variantId: Z(E(P(64))),
            productTitle: Z(E(P(2048))),
            price: Z(we),
            currency: Z(E(G().check(ye(3), N(/^[A-Z]{3}$/, "currency must be a 3-letter ISO code")))),
            quantity: Z(ue().check(L(0))),
            checkoutId: Z(E(P(128))),
            orderId: Z(E(P(128))),
            totalPrice: Z(we),
            lineItems: Z(Pt(Yr).check(se(100)))
        });

    function ir(e) {
        return Jr.safeParse(e)
    }

    function Ze(e, t, r) {
        return $(this, null, function*() {
            yield Promise.all([e.localStorage.setItem(A.SESSION_ID, t), e.localStorage.setItem(A.SESSION_EXPIRES_AT, String(r))])
        })
    }

    function Qr(e) {
        return $(this, null, function*() {
            let [t, r] = yield Promise.all([e.localStorage.getItem(A.SESSION_ID), e.localStorage.getItem(A.SESSION_EXPIRES_AT)]), n = Date.now(), o = r ? Number(r) : 0;
            if (!t) {
                let i = crypto.randomUUID();
                return yield Ze(e, i, n + X), i
            }
            if (!r) return yield Ze(e, t, n + X), t;
            if (n >= o) {
                let i = crypto.randomUUID();
                return yield Ze(e, i, n + X), i
            }
            return yield e.localStorage.setItem(A.SESSION_EXPIRES_AT, String(n + X)), t
        })
    }

    function en(e) {
        return $(this, null, function*() {
            let t = yield e.localStorage.getItem(A.USER_ID);
            return t || (t = crypto.randomUUID(), yield e.localStorage.setItem(A.USER_ID, t)), t
        })
    }

    function tn(e, t) {
        return $(this, null, function*() {
            var o;
            let r = (o = t.data.customer) == null ? void 0 : o.id;
            if (r) return {
                userId: r,
                userIdType: "shopify_customer_id"
            };
            let n = yield e.localStorage.getItem(A.USER_ID);
            return n ? {
                userId: n,
                userIdType: "anonymous_consented"
            } : {
                userId: null,
                userIdType: "guest"
            }
        })
    }

    function rn(e) {
        return $(this, null, function*() {
            return (yield e.cookie.get(Dt.LOCALIZATION)) || null
        })
    }

    function sr(e) {
        var r;
        let t = (r = e == null ? void 0 : e.find(n => (n == null ? void 0 : n.key) === Ut)) == null ? void 0 : r.value;
        return t === "test" || t === "control" ? t : null
    }

    function nn({
        browser: e,
        init: t,
        endpoint: r,
        isDebug: n,
        getAbBucket: o,
        isConversionAnalyticsEnabled: i
    }) {
        return {
            browser: e,
            init: t,
            isDebug: n,
            track: (u, c, a, l) => $(null, null, function*() {
                var j;
                if (!i()) return;
                let p = o(),
                    f = p ? _(d({}, a), {
                        eventData: _(d({}, (j = a.eventData) != null ? j : {}), {
                            checkoutPlusAbBucket: p
                        })
                    }) : a,
                    [h, g, x] = yield Promise.all([Qr(e), tn(e, t), rn(e)]), v = d(_(d({
                        event: u,
                        stage: c,
                        sessionId: h,
                        timestamp: new Date().toISOString(),
                        localization: x
                    }, g), {
                        privacy: l !== "unknown" ? {
                            consent_state: l
                        } : void 0
                    }), f), y = ir(v);
                if (!y.success) {
                    console.error("[swap-pixel] Invalid event payload:", xe(y.error)), n && console.error("[swap-pixel] Validation details:", ge(y.error));
                    return
                }
                n && console.log("[swap-pixel]", u, y.data), fetch(r, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(y.data),
                    keepalive: !0
                }).catch(Y => console.error("[swap-pixel] Send failed:", Y))
            })
        }
    }
    ae(i => $(null, [i], function*({
        analytics: e,
        browser: t,
        customerPrivacy: r,
        init: n,
        settings: o
    }) {
        var f, h;
        let s = o,
            u = (f = s.serverUrl) != null ? f : Nt,
            c = s.debugMode === "true";
        if (!u) {
            console.error("[swap-pixel] No endpoint configured \u2014 pixel will not fire.");
            return
        }
        let a = Ot(n),
            l = sr((h = n.data.cart) == null ? void 0 : h.attributes);
        e.subscribe("cart_updated", g => {
            var y;
            let x = (y = g.data) == null ? void 0 : y.cart,
                v = sr(x == null ? void 0 : x.attributes);
            x != null && x.attributes && (l = v)
        }), e.subscribe(jt, g => {
            let x = g.customData,
                v = x == null ? void 0 : x.bucket;
            (v === "test" || v === "control") && (l = v)
        });
        let p = nn({
            browser: t,
            init: n,
            endpoint: u,
            isDebug: c,
            getAbBucket: () => l,
            isConversionAnalyticsEnabled: Bt(e, n, () => {
                p.track("page_view", "listing", {
                    url: n.context.document.location.href,
                    title: n.context.document.title
                }, a)
            })
        });
        Rt(r, g => $(null, null, function*() {
            a = Mt(g.customerPrivacy), a === "granted" && (yield en(t))
        })), or(e, p.track, () => a, n)
    }));
})();