(() => {
    var Ee = Object.defineProperty,
        tr = Object.defineProperties;
    var rr = Object.getOwnPropertyDescriptors;
    var H = Object.getOwnPropertySymbols;
    var Pe = Object.prototype.hasOwnProperty,
        Ie = Object.prototype.propertyIsEnumerable;
    var ke = (e, t, r) => t in e ? Ee(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        m = (e, t) => {
            for (var r in t || (t = {})) Pe.call(t, r) && ke(e, r, t[r]);
            if (H)
                for (var r of H(t)) Ie.call(t, r) && ke(e, r, t[r]);
            return e
        },
        _ = (e, t) => tr(e, rr(t));
    var Se = (e, t) => {
        var r = {};
        for (var o in e) Pe.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (e != null && H)
            for (var o of H(e)) t.indexOf(o) < 0 && Ie.call(e, o) && (r[o] = e[o]);
        return r
    };
    var or = (e, t) => {
        for (var r in t) Ee(e, r, {
            get: t[r],
            enumerable: !0
        })
    };
    var g = (e, t, r) => new Promise((o, n) => {
        var i = c => {
                try {
                    u(r.next(c))
                } catch (a) {
                    n(a)
                }
            },
            s = c => {
                try {
                    u(r.throw(c))
                } catch (a) {
                    n(a)
                }
            },
            u = c => c.done ? o(c.value) : Promise.resolve(c.value).then(i, s);
        u((r = r.apply(e, t)).next())
    });
    var Te = "WebPixel::Render";
    var ue = e => shopify.extend(Te, e);
    var ce = {
        ANALYTICS_DECLINED: "analyticsConsentDeclined",
        ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
        CONSENT_COLLECTED: "visitorConsentCollected"
    };
    var Ce;

    function d(e, t, r) {
        var u;

        function o(c, a) {
            if (c._zod || Object.defineProperty(c, "_zod", {
                    value: {
                        def: a,
                        constr: s,
                        traits: new Set
                    },
                    enumerable: !1
                }), c._zod.traits.has(e)) return;
            c._zod.traits.add(e), t(c, a);
            let p = s.prototype,
                l = Object.keys(p);
            for (let f = 0; f < l.length; f++) {
                let h = l[f];
                h in c || (c[h] = p[h].bind(c))
            }
        }
        let n = (u = r == null ? void 0 : r.Parent) != null ? u : Object;
        class i extends n {}
        Object.defineProperty(i, "name", {
            value: e
        });

        function s(c) {
            var l;
            var a;
            let p = r != null && r.Parent ? new i : this;
            o(p, c), (l = (a = p._zod).deferred) != null || (a.deferred = []);
            for (let f of p._zod.deferred) f();
            return p
        }
        return Object.defineProperty(s, "init", {
            value: o
        }), Object.defineProperty(s, Symbol.hasInstance, {
            value: c => {
                var a, p;
                return r != null && r.Parent && c instanceof r.Parent ? !0 : (p = (a = c == null ? void 0 : c._zod) == null ? void 0 : a.traits) == null ? void 0 : p.has(e)
            }
        }), Object.defineProperty(s, "name", {
            value: e
        }), s
    }
    var I = class extends Error {
        constructor() {
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
        }
    };
    var Ae;
    (Ae = (Ce = globalThis).__zod_globalConfig) != null || (Ce.__zod_globalConfig = {});
    var ae = globalThis.__zod_globalConfig;

    function C(e) {
        return e && Object.assign(ae, e), ae
    }

    function Me(e) {
        let t = Object.values(e).filter(o => typeof o == "number");
        return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n)
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

    function le(e) {
        return e == null
    }

    function J(e) {
        let t = e.startsWith("^") ? 1 : 0,
            r = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, r)
    }
    var Oe = Symbol("evaluating");

    function z(e, t, r) {
        let o;
        Object.defineProperty(e, t, {
            get() {
                if (o !== Oe) return o === void 0 && (o = Oe, o = r()), o
            },
            set(n) {
                Object.defineProperty(e, t, {
                    value: n
                })
            },
            configurable: !0
        })
    }
    var de = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

    function De(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }
    var Ue = new Set(["string", "number", "symbol"]);

    function fe(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function Y(e, t, r) {
        let o = new e._zod.constr(t != null ? t : e._zod.def);
        return (!t || r != null && r.parent) && (o._zod.parent = e), o
    }

    function v(e) {
        let t = e;
        if (!t) return {};
        if (typeof t == "string") return {
            error: () => t
        };
        if ((t == null ? void 0 : t.message) !== void 0) {
            if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
            t.error = t.message
        }
        return delete t.message, typeof t.error == "string" ? _(m({}, t), {
            error: () => t.error
        }) : t
    }

    function Le(e) {
        return Object.keys(e).filter(t => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional")
    }
    var nr = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    };

    function D(e, t = 0) {
        var r;
        if (e.aborted === !0) return !0;
        for (let o = t; o < e.issues.length; o++)
            if (((r = e.issues[o]) == null ? void 0 : r.continue) !== !0) return !0;
        return !1
    }

    function je(e, t = 0) {
        var r;
        if (e.aborted === !0) return !0;
        for (let o = t; o < e.issues.length; o++)
            if (((r = e.issues[o]) == null ? void 0 : r.continue) === !1) return !0;
        return !1
    }

    function Q(e, t) {
        return t.map(r => {
            var n;
            var o;
            return (n = (o = r).path) != null || (o.path = []), r.path.unshift(e), r
        })
    }

    function X(e) {
        return typeof e == "string" ? e : e == null ? void 0 : e.message
    }

    function O(e, t, r) {
        var c, a, p, l, f, h, b, E, P, A, we;
        let o = e.message ? e.message : (A = (P = (b = (f = X((p = (a = (c = e.inst) == null ? void 0 : c._zod.def) == null ? void 0 : a.error) == null ? void 0 : p.call(a, e))) != null ? f : X((l = t == null ? void 0 : t.error) == null ? void 0 : l.call(t, e))) != null ? b : X((h = r.customError) == null ? void 0 : h.call(r, e))) != null ? P : X((E = r.localeError) == null ? void 0 : E.call(r, e))) != null ? A : "Invalid input",
            Ze = e,
            {
                inst: n,
                continue: i,
                input: s
            } = Ze,
            u = Se(Ze, ["inst", "continue", "input"]);
        return (we = u.path) != null || (u.path = []), u.message = o, t != null && t.reportInput && (u.input = s), u
    }

    function me(e) {
        return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown"
    }
    var Fe = (e, t) => {
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
        Ve = d("$ZodError", Fe),
        F = d("$ZodError", Fe, {
            Parent: Error
        });

    function he(e, t = r => r.message) {
        let r = {},
            o = [];
        for (let n of e.issues) n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : o.push(t(n));
        return {
            formErrors: o,
            fieldErrors: r
        }
    }

    function _e(e, t = r => r.message) {
        let r = {
                _errors: []
            },
            o = (n, i = []) => {
                for (let s of n.issues)
                    if (s.code === "invalid_union" && s.errors.length) s.errors.map(u => o({
                        issues: u
                    }, [...i, ...s.path]));
                    else if (s.code === "invalid_key") o({
                    issues: s.issues
                }, [...i, ...s.path]);
                else if (s.code === "invalid_element") o({
                    issues: s.issues
                }, [...i, ...s.path]);
                else {
                    let u = [...i, ...s.path];
                    if (u.length === 0) r._errors.push(t(s));
                    else {
                        let c = r,
                            a = 0;
                        for (; a < u.length;) {
                            let p = u[a];
                            a === u.length - 1 ? (c[p] = c[p] || {
                                _errors: []
                            }, c[p]._errors.push(t(s))) : c[p] = c[p] || {
                                _errors: []
                            }, c = c[p], a++
                        }
                    }
                }
            };
        return o(e), r
    }
    var sr = e => (t, r, o, n) => {
            var u;
            let i = o ? _(m({}, o), {
                    async: !1
                }) : {
                    async: !1
                },
                s = t._zod.run({
                    value: r,
                    issues: []
                }, i);
            if (s instanceof Promise) throw new I;
            if (s.issues.length) {
                let c = new((u = n == null ? void 0 : n.Err) != null ? u : e)(s.issues.map(a => O(a, i, C())));
                throw de(c, n == null ? void 0 : n.callee), c
            }
            return s.value
        },
        ee = sr(F),
        ur = e => (t, r, o, n) => g(null, null, function*() {
            var u;
            let i = o ? _(m({}, o), {
                    async: !0
                }) : {
                    async: !0
                },
                s = t._zod.run({
                    value: r,
                    issues: []
                }, i);
            if (s instanceof Promise && (s = yield s), s.issues.length) {
                let c = new((u = n == null ? void 0 : n.Err) != null ? u : e)(s.issues.map(a => O(a, i, C())));
                throw de(c, n == null ? void 0 : n.callee), c
            }
            return s.value
        }),
        te = ur(F),
        cr = e => (t, r, o) => {
            let n = o ? _(m({}, o), {
                    async: !1
                }) : {
                    async: !1
                },
                i = t._zod.run({
                    value: r,
                    issues: []
                }, n);
            if (i instanceof Promise) throw new I;
            return i.issues.length ? {
                success: !1,
                error: new(e != null ? e : Ve)(i.issues.map(s => O(s, n, C())))
            } : {
                success: !0,
                data: i.value
            }
        },
        V = cr(F),
        ar = e => (t, r, o) => g(null, null, function*() {
            let n = o ? _(m({}, o), {
                    async: !0
                }) : {
                    async: !0
                },
                i = t._zod.run({
                    value: r,
                    issues: []
                }, n);
            return i instanceof Promise && (i = yield i), i.issues.length ? {
                success: !1,
                error: new e(i.issues.map(s => O(s, n, C())))
            } : {
                success: !0,
                data: i.value
            }
        }),
        B = ar(F);
    var Be = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    var Ke = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        Ge = new RegExp(`^${Ke}$`);

    function We(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
    }

    function qe(e) {
        return new RegExp(`^${We(e)}$`)
    }

    function He(e) {
        let t = We({
                precision: e.precision
            }),
            r = ["Z"];
        e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        let o = `${t}(?:${r.join("|")})`;
        return new RegExp(`^${Ke}T(?:${o})$`)
    }
    var Xe = e => {
        var r, o;
        let t = e ? `[\\s\\S]{${(r=e==null?void 0:e.minimum)!=null?r:0},${(o=e==null?void 0:e.maximum)!=null?o:""}}` : "[\\s\\S]*";
        return new RegExp(`^${t}$`)
    };
    var Je = /^-?\d+(?:\.\d+)?$/;
    var R = d("$ZodCheck", (e, t) => {
            var o, n;
            var r;
            (o = e._zod) != null || (e._zod = {}), e._zod.def = t, (n = (r = e._zod).onattach) != null || (r.onattach = [])
        }),
        pr = {
            number: "number",
            bigint: "bigint",
            object: "date"
        };
    var Ye = d("$ZodCheckGreaterThan", (e, t) => {
        R.init(e, t);
        let r = pr[typeof t.value];
        e._zod.onattach.push(o => {
            var s;
            let n = o._zod.bag,
                i = (s = t.inclusive ? n.minimum : n.exclusiveMinimum) != null ? s : Number.NEGATIVE_INFINITY;
            t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value)
        }), e._zod.check = o => {
            (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
                origin: r,
                code: "too_small",
                minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
                input: o.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort
            })
        }
    });
    var Qe = d("$ZodCheckMaxLength", (e, t) => {
        var o;
        var r;
        R.init(e, t), (o = (r = e._zod.def).when) != null || (r.when = n => {
            let i = n.value;
            return !le(i) && i.length !== void 0
        }), e._zod.onattach.push(n => {
            var s;
            let i = (s = n._zod.bag.maximum) != null ? s : Number.POSITIVE_INFINITY;
            t.maximum < i && (n._zod.bag.maximum = t.maximum)
        }), e._zod.check = n => {
            let i = n.value;
            if (i.length <= t.maximum) return;
            let u = me(i);
            n.issues.push({
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
    var et = d("$ZodCheckLengthEquals", (e, t) => {
            var o;
            var r;
            R.init(e, t), (o = (r = e._zod.def).when) != null || (r.when = n => {
                let i = n.value;
                return !le(i) && i.length !== void 0
            }), e._zod.onattach.push(n => {
                let i = n._zod.bag;
                i.minimum = t.length, i.maximum = t.length, i.length = t.length
            }), e._zod.check = n => {
                let i = n.value,
                    s = i.length;
                if (s === t.length) return;
                let u = me(i),
                    c = s > t.length;
                n.issues.push(_(m({
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
                    input: n.value,
                    inst: e,
                    continue: !t.abort
                }))
            }
        }),
        ge = d("$ZodCheckStringFormat", (e, t) => {
            var n, i;
            var r, o;
            R.init(e, t), e._zod.onattach.push(s => {
                var c;
                let u = s._zod.bag;
                u.format = t.format, t.pattern && ((c = u.patterns) != null || (u.patterns = new Set), u.patterns.add(t.pattern))
            }), t.pattern ? (n = (r = e._zod).check) != null || (r.check = s => {
                t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push(_(m({
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
            }) : (i = (o = e._zod).check) != null || (o.check = () => {})
        }),
        tt = d("$ZodCheckRegex", (e, t) => {
            ge.init(e, t), e._zod.check = r => {
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
    var ot = {
        major: 4,
        minor: 4,
        patch: 3
    };
    var k = d("$ZodType", (e, t) => {
            var n, i, s;
            var r;
            e != null || (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ot;
            let o = [...(n = e._zod.def.checks) != null ? n : []];
            e._zod.traits.has("$ZodCheck") && o.unshift(e);
            for (let u of o)
                for (let c of u._zod.onattach) c(e);
            if (o.length === 0)(i = (r = e._zod).deferred) != null || (r.deferred = []), (s = e._zod.deferred) == null || s.push(() => {
                e._zod.run = e._zod.parse
            });
            else {
                let u = (a, p, l) => {
                        let f = D(a),
                            h;
                        for (let b of p) {
                            if (b._zod.def.when) {
                                if (je(a) || !b._zod.def.when(a)) continue
                            } else if (f) continue;
                            let E = a.issues.length,
                                P = b._zod.check(a);
                            if (P instanceof Promise && (l == null ? void 0 : l.async) === !1) throw new I;
                            if (h || P instanceof Promise) h = (h != null ? h : Promise.resolve()).then(() => g(null, null, function*() {
                                yield P, a.issues.length !== E && (f || (f = D(a, E)))
                            }));
                            else {
                                if (a.issues.length === E) continue;
                                f || (f = D(a, E))
                            }
                        }
                        return h ? h.then(() => a) : a
                    },
                    c = (a, p, l) => {
                        if (D(a)) return a.aborted = !0, a;
                        let f = u(p, o, l);
                        if (f instanceof Promise) {
                            if (l.async === !1) throw new I;
                            return f.then(h => e._zod.parse(h, l))
                        }
                        return e._zod.parse(f, l)
                    };
                e._zod.run = (a, p) => {
                    if (p.skipChecks) return e._zod.parse(a, p);
                    if (p.direction === "backward") {
                        let f = e._zod.parse({
                            value: a.value,
                            issues: []
                        }, _(m({}, p), {
                            skipChecks: !0
                        }));
                        return f instanceof Promise ? f.then(h => c(h, a, p)) : c(f, a, p)
                    }
                    let l = e._zod.parse(a, p);
                    if (l instanceof Promise) {
                        if (p.async === !1) throw new I;
                        return l.then(f => u(f, o, p))
                    }
                    return u(l, o, p)
                }
            }
            z(e, "~standard", () => ({
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
                        return B(e, u).then(p => {
                            var l;
                            return p.success ? {
                                value: p.data
                            } : {
                                issues: (l = p.error) == null ? void 0 : l.issues
                            }
                        })
                    }
                },
                vendor: "zod",
                version: 1
            }))
        }),
        ve = d("$ZodString", (e, t) => {
            var r, o, n;
            k.init(e, t), e._zod.pattern = (n = [...(o = (r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) != null ? o : []].pop()) != null ? n : Xe(e._zod.bag), e._zod.parse = (i, s) => {
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
        U = d("$ZodStringFormat", (e, t) => {
            ge.init(e, t), ve.init(e, t)
        });
    var ut = d("$ZodISODateTime", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = He(t)), U.init(e, t)
        }),
        ct = d("$ZodISODate", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = Ge), U.init(e, t)
        }),
        at = d("$ZodISOTime", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = qe(t)), U.init(e, t)
        }),
        pt = d("$ZodISODuration", (e, t) => {
            var r;
            (r = t.pattern) != null || (t.pattern = Be), U.init(e, t)
        });
    var lt = d("$ZodNumber", (e, t) => {
        var r;
        k.init(e, t), e._zod.pattern = (r = e._zod.bag.pattern) != null ? r : Je, e._zod.parse = (o, n) => {
            if (t.coerce) try {
                o.value = Number(o.value)
            } catch (u) {}
            let i = o.value;
            if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return o;
            let s = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
            return o.issues.push(m({
                expected: "number",
                code: "invalid_type",
                input: i,
                inst: e
            }, s ? {
                received: s
            } : {})), o
        }
    });
    var dt = d("$ZodUnknown", (e, t) => {
        k.init(e, t), e._zod.parse = r => r
    });

    function nt(e, t, r) {
        e.issues.length && t.issues.push(...Q(r, e.issues)), t.value[r] = e.value
    }
    var ft = d("$ZodArray", (e, t) => {
        k.init(e, t), e._zod.parse = (r, o) => {
            let n = r.value;
            if (!Array.isArray(n)) return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: n,
                inst: e
            }), r;
            r.value = Array(n.length);
            let i = [];
            for (let s = 0; s < n.length; s++) {
                let u = n[s],
                    c = t.element._zod.run({
                        value: u,
                        issues: []
                    }, o);
                c instanceof Promise ? i.push(c.then(a => nt(a, r, s))) : nt(c, r, s)
            }
            return i.length ? Promise.all(i).then(() => r) : r
        }
    });

    function re(e, t, r, o, n, i) {
        let s = r in o;
        if (e.issues.length) {
            if (n && i && !s) return;
            t.issues.push(...Q(r, e.issues))
        }
        if (!s && !n) {
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

    function dr(e) {
        var o, n, i, s;
        let t = Object.keys(e.shape);
        for (let u of t)
            if (!((s = (i = (n = (o = e.shape) == null ? void 0 : o[u]) == null ? void 0 : n._zod) == null ? void 0 : i.traits) != null && s.has("$ZodType"))) throw new Error(`Invalid element at key "${u}": expected a Zod schema`);
        let r = Le(e.shape);
        return _(m({}, e), {
            keys: t,
            keySet: new Set(t),
            numKeys: t.length,
            optionalKeys: new Set(r)
        })
    }

    function fr(e, t, r, o, n, i) {
        let s = [],
            u = n.keySet,
            c = n.catchall._zod,
            a = c.def.type,
            p = c.optin === "optional",
            l = c.optout === "optional";
        for (let f in t) {
            if (f === "__proto__" || u.has(f)) continue;
            if (a === "never") {
                s.push(f);
                continue
            }
            let h = c.run({
                value: t[f],
                issues: []
            }, o);
            h instanceof Promise ? e.push(h.then(b => re(b, r, f, t, p, l))) : re(h, r, f, t, p, l)
        }
        return s.length && r.issues.push({
            code: "unrecognized_keys",
            keys: s,
            input: t,
            inst: i
        }), e.length ? Promise.all(e).then(() => r) : r
    }
    var mt = d("$ZodObject", (e, t) => {
        k.init(e, t);
        let r = Object.getOwnPropertyDescriptor(t, "shape");
        if (!(r != null && r.get)) {
            let u = t.shape;
            Object.defineProperty(t, "shape", {
                get: () => {
                    let c = m({}, u);
                    return Object.defineProperty(t, "shape", {
                        value: c
                    }), c
                }
            })
        }
        let o = Ne(() => dr(t));
        z(e._zod, "propValues", () => {
            var a;
            let u = t.shape,
                c = {};
            for (let p in u) {
                let l = u[p]._zod;
                if (l.values) {
                    (a = c[p]) != null || (c[p] = new Set);
                    for (let f of l.values) c[p].add(f)
                }
            }
            return c
        });
        let n = De,
            i = t.catchall,
            s;
        e._zod.parse = (u, c) => {
            s != null || (s = o.value);
            let a = u.value;
            if (!n(a)) return u.issues.push({
                expected: "object",
                code: "invalid_type",
                input: a,
                inst: e
            }), u;
            u.value = {};
            let p = [],
                l = s.shape;
            for (let f of s.keys) {
                let h = l[f],
                    b = h._zod.optin === "optional",
                    E = h._zod.optout === "optional",
                    P = h._zod.run({
                        value: a[f],
                        issues: []
                    }, c);
                P instanceof Promise ? p.push(P.then(A => re(A, u, f, a, b, E))) : re(P, u, f, a, b, E)
            }
            return i ? fr(p, a, u, c, o.value, e) : p.length ? Promise.all(p).then(() => u) : u
        }
    });

    function it(e, t, r, o) {
        for (let i of e)
            if (i.issues.length === 0) return t.value = i.value, t;
        let n = e.filter(i => !D(i));
        return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
            code: "invalid_union",
            input: t.value,
            inst: r,
            errors: e.map(i => i.issues.map(s => O(s, o, C())))
        }), t)
    }
    var ht = d("$ZodUnion", (e, t) => {
        k.init(e, t), z(e._zod, "optin", () => t.options.some(o => o._zod.optin === "optional") ? "optional" : void 0), z(e._zod, "optout", () => t.options.some(o => o._zod.optout === "optional") ? "optional" : void 0), z(e._zod, "values", () => {
            if (t.options.every(o => o._zod.values)) return new Set(t.options.flatMap(o => Array.from(o._zod.values)))
        }), z(e._zod, "pattern", () => {
            if (t.options.every(o => o._zod.pattern)) {
                let o = t.options.map(n => n._zod.pattern);
                return new RegExp(`^(${o.map(n=>J(n.source)).join("|")})$`)
            }
        });
        let r = t.options.length === 1 ? t.options[0]._zod.run : null;
        e._zod.parse = (o, n) => {
            if (r) return r(o, n);
            let i = !1,
                s = [];
            for (let u of t.options) {
                let c = u._zod.run({
                    value: o.value,
                    issues: []
                }, n);
                if (c instanceof Promise) s.push(c), i = !0;
                else {
                    if (c.issues.length === 0) return c;
                    s.push(c)
                }
            }
            return i ? Promise.all(s).then(u => it(u, o, e, n)) : it(s, o, e, n)
        }
    });
    var _t = d("$ZodEnum", (e, t) => {
        k.init(e, t);
        let r = Me(t.entries),
            o = new Set(r);
        e._zod.values = o, e._zod.pattern = new RegExp(`^(${r.filter(n=>Ue.has(typeof n)).map(n=>typeof n=="string"?fe(n):n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
            let s = n.value;
            return o.has(s) || n.issues.push({
                code: "invalid_value",
                values: r,
                input: s,
                inst: e
            }), n
        }
    });

    function st(e, t) {
        return t === void 0 && (e.issues.length || e.fallback) ? {
            issues: [],
            value: void 0
        } : e
    }
    var xt = d("$ZodOptional", (e, t) => {
        k.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", z(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), z(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${J(r.source)})?$`) : void 0
        }), e._zod.parse = (r, o) => {
            if (t.innerType._zod.optin === "optional") {
                let n = r.value,
                    i = t.innerType._zod.run(r, o);
                return i instanceof Promise ? i.then(s => st(s, n)) : st(i, n)
            }
            return r.value === void 0 ? r : t.innerType._zod.run(r, o)
        }
    });
    var gt = d("$ZodNullable", (e, t) => {
        k.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "pattern", () => {
            let r = t.innerType._zod.pattern;
            return r ? new RegExp(`^(${J(r.source)}|null)$`) : void 0
        }), z(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, o) => r.value === null ? r : t.innerType._zod.run(r, o)
    });

    function vt(e, t) {
        return new e(m({
            type: "string"
        }, v(t)))
    }

    function zt(e, t) {
        return new e(m({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null
        }, v(t)))
    }

    function $t(e, t) {
        return new e(m({
            type: "string",
            format: "date",
            check: "string_format"
        }, v(t)))
    }

    function yt(e, t) {
        return new e(m({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null
        }, v(t)))
    }

    function bt(e, t) {
        return new e(m({
            type: "string",
            format: "duration",
            check: "string_format"
        }, v(t)))
    }

    function Zt(e, t) {
        return new e(m({
            type: "number",
            checks: []
        }, v(t)))
    }

    function wt(e) {
        return new e({
            type: "unknown"
        })
    }

    function L(e, t) {
        return new Ye(_(m({
            check: "greater_than"
        }, v(t)), {
            value: e,
            inclusive: !0
        }))
    }

    function oe(e, t) {
        return new Qe(_(m({
            check: "max_length"
        }, v(t)), {
            maximum: e
        }))
    }

    function ze(e, t) {
        return new et(_(m({
            check: "length_equals"
        }, v(t)), {
            length: e
        }))
    }

    function N(e, t) {
        return new tt(_(m({
            check: "string_format",
            format: "regex"
        }, v(t)), {
            pattern: e
        }))
    }
    var S = d("ZodMiniType", (e, t) => {
            if (!e._zod) throw new Error("Uninitialized schema in ZodMiniType.");
            k.init(e, t), e.def = t, e.type = t.type, e.parse = (r, o) => ee(e, r, o, {
                callee: e.parse
            }), e.safeParse = (r, o) => V(e, r, o), e.parseAsync = (r, o) => g(null, null, function*() {
                return te(e, r, o, {
                    callee: e.parseAsync
                })
            }), e.safeParseAsync = (r, o) => g(null, null, function*() {
                return B(e, r, o)
            }), e.check = (...r) => {
                var o;
                return e.clone(_(m({}, t), {
                    checks: [...(o = t.checks) != null ? o : [], ...r.map(n => typeof n == "function" ? {
                        _zod: {
                            check: n,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : n)]
                }), {
                    parent: !0
                })
            }, e.with = e.check, e.clone = (r, o) => Y(e, r, o), e.brand = () => e, e.register = ((r, o) => (r.add(e, o), e)), e.apply = r => r(e)
        }),
        kt = d("ZodMiniString", (e, t) => {
            ve.init(e, t), S.init(e, t)
        });

    function K(e) {
        return vt(kt, e)
    }
    var G = d("ZodMiniStringFormat", (e, t) => {
        U.init(e, t), kt.init(e, t)
    });
    var xr = d("ZodMiniNumber", (e, t) => {
        lt.init(e, t), S.init(e, t)
    });

    function ne(e) {
        return Zt(xr, e)
    }
    var gr = d("ZodMiniUnknown", (e, t) => {
        dt.init(e, t), S.init(e, t)
    });

    function Et() {
        return wt(gr)
    }
    var vr = d("ZodMiniArray", (e, t) => {
        ft.init(e, t), S.init(e, t)
    });

    function Pt(e, t) {
        return new vr(m({
            type: "array",
            element: e
        }, v(t)))
    }
    var zr = d("ZodMiniObject", (e, t) => {
        mt.init(e, t), S.init(e, t), z(e, "shape", () => t.shape)
    });

    function ie(e, t) {
        let r = m({
            type: "object",
            shape: e != null ? e : {}
        }, v(t));
        return new zr(r)
    }
    var $r = d("ZodMiniUnion", (e, t) => {
        ht.init(e, t), S.init(e, t)
    });

    function It(e, t) {
        return new $r(m({
            type: "union",
            options: e
        }, v(t)))
    }
    var yr = d("ZodMiniEnum", (e, t) => {
        _t.init(e, t), S.init(e, t), e.options = Object.values(t.entries)
    });

    function W(e, t) {
        let r = Array.isArray(e) ? Object.fromEntries(e.map(o => [o, o])) : e;
        return new yr(m({
            type: "enum",
            entries: r
        }, v(t)))
    }
    var br = d("ZodMiniOptional", (e, t) => {
        xt.init(e, t), S.init(e, t)
    });

    function $(e) {
        return new br({
            type: "optional",
            innerType: e
        })
    }
    var Zr = d("ZodMiniNullable", (e, t) => {
        gt.init(e, t), S.init(e, t)
    });

    function Z(e) {
        return new Zr({
            type: "nullable",
            innerType: e
        })
    }
    var q = {};
    or(q, {
        ZodMiniISODate: () => Tt,
        ZodMiniISODateTime: () => St,
        ZodMiniISODuration: () => At,
        ZodMiniISOTime: () => Ct,
        date: () => Pr,
        datetime: () => Er,
        duration: () => Sr,
        time: () => Ir
    });
    var St = d("ZodMiniISODateTime", (e, t) => {
        ut.init(e, t), G.init(e, t)
    });

    function Er(e) {
        return zt(St, e)
    }
    var Tt = d("ZodMiniISODate", (e, t) => {
        ct.init(e, t), G.init(e, t)
    });

    function Pr(e) {
        return $t(Tt, e)
    }
    var Ct = d("ZodMiniISOTime", (e, t) => {
        at.init(e, t), G.init(e, t)
    });

    function Ir(e) {
        return yt(Ct, e)
    }
    var At = d("ZodMiniISODuration", (e, t) => {
        pt.init(e, t), G.init(e, t)
    });

    function Sr(e) {
        return bt(At, e)
    }

    function Ot(e) {
        return e.customerPrivacy.analyticsProcessingAllowed ? "granted" : "unknown"
    }

    function Mt(e) {
        return e.analyticsProcessingAllowed ? "granted" : "denied"
    }

    function Rt(e, t) {
        e.subscribe(ce.CONSENT_COLLECTED, r => {
            t(r)
        })
    }
    var Nt = "https://uat-pixel-service.api-swap-os.com/events";
    var T = {
            SESSION_ID: "session_id",
            SESSION_EXPIRES_AT: "session_expires_at",
            USER_ID: "user_id"
        },
        Dt = {
            LOCALIZATION: "localization"
        },
        x = {
            LISTING: "listing",
            PRODUCT: "product",
            CONTENT: "content",
            CHECKOUT: "checkout"
        },
        y = {
            PAGE_VIEW: "page_view",
            ADD_TO_CART: "add_to_cart",
            REMOVE_FROM_CART: "remove_from_cart",
            CHECKOUT_STARTED: "checkout_started",
            CHECKOUT_COMPLETED: "checkout_completed"
        };
    var Ut = "swap:checkout_plus_added",
        Lt = "swap:checkout_plus_removed",
        Tr = {
            pdp: x.PRODUCT,
            cart_drawer: x.CONTENT,
            cart_page: x.CONTENT,
            checkout: x.CHECKOUT
        };

    function Cr(e) {
        return e === "pdp" || e === "cart_drawer" || e === "cart_page" || e === "checkout" ? e : "unknown"
    }

    function Ar(e) {
        var r;
        let t = (r = e.document.location.pathname) != null ? r : "";
        return t.includes("/collections") || t.includes("/search") ? x.LISTING : t.includes("/products") ? x.PRODUCT : x.CONTENT
    }

    function jt(e) {
        return e.map(t => {
            var r, o, n, i, s, u, c;
            return {
                productId: (o = (r = t.variant) == null ? void 0 : r.product.id) != null ? o : null,
                variantId: (i = (n = t.variant) == null ? void 0 : n.id) != null ? i : null,
                title: (s = t.title) != null ? s : null,
                quantity: t.quantity,
                price: (c = (u = t.variant) == null ? void 0 : u.price.amount) != null ? c : null
            }
        })
    }

    function j(e, t) {
        var s, u;
        let r = (u = (s = t == null ? void 0 : t.data) == null ? void 0 : s.shop) == null ? void 0 : u.myshopifyDomain,
            {
                pathname: o,
                search: n,
                href: i
            } = e.document.location;
        return r ? `https://${r}${o!=null?o:""}${n!=null?n:""}` : i
    }

    function Ft(e) {
        return (t, r) => {
            var n, i, s, u, c, a, p, l;
            let o = (n = t.data.cartLine) == null ? void 0 : n.merchandise;
            return {
                outboundEvent: e,
                stage: x.PRODUCT,
                payload: {
                    url: j(t.context, r),
                    productId: (i = o == null ? void 0 : o.product.id) != null ? i : null,
                    variantId: (s = o == null ? void 0 : o.id) != null ? s : null,
                    productTitle: (u = o == null ? void 0 : o.product.title) != null ? u : null,
                    quantity: (a = (c = t.data.cartLine) == null ? void 0 : c.quantity) != null ? a : 0,
                    price: (p = o == null ? void 0 : o.price.amount) != null ? p : null,
                    currency: (l = o == null ? void 0 : o.price.currencyCode) != null ? l : null
                }
            }
        }
    }

    function Vt(e, t) {
        return {
            outboundEvent: y.PAGE_VIEW,
            stage: Ar(e.context),
            payload: {
                url: j(e.context, t),
                title: e.context.document.title
            }
        }
    }

    function Bt(e, t) {
        var o, n, i;
        let r = e.data.productVariant;
        return {
            outboundEvent: y.PAGE_VIEW,
            stage: x.PRODUCT,
            payload: {
                url: j(e.context, t),
                title: e.context.document.title,
                productId: (n = (o = r == null ? void 0 : r.product) == null ? void 0 : o.id) != null ? n : null,
                variantId: (i = r == null ? void 0 : r.id) != null ? i : null,
                eventData: r
            }
        }
    }
    var Kt = Ft(y.ADD_TO_CART),
        Gt = Ft(y.REMOVE_FROM_CART);

    function $e(e) {
        return typeof e == "string" && e !== "" ? e : typeof e == "number" && Number.isFinite(e) ? String(e) : null
    }

    function Or(e) {
        return typeof e == "number" && Number.isFinite(e) && e >= 0 || typeof e == "string" && /^\d+(\.\d{1,2})?$/.test(e) ? e : null
    }

    function Mr(e) {
        return typeof e == "string" && /^[A-Z]{3}$/.test(e) ? e : null
    }

    function Rr(e) {
        return typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : void 0
    }

    function Wt(e, t, r) {
        var l;
        let o = (l = e.customData) != null ? l : {},
            n = Cr(o.source),
            i = $e(o.productId),
            s = $e(o.variantId),
            u = $e(o.productTitle),
            c = Or(o.price),
            a = Mr(o.currency),
            p = Rr(o.quantity);
        return {
            outboundEvent: r,
            stage: n === "unknown" ? x.CONTENT : Tr[n],
            payload: _(m(m(m(m(m(m({
                url: j(e.context, t)
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
            }), p != null && {
                quantity: p
            }), {
                eventData: {
                    checkoutPlusSource: n
                }
            })
        }
    }

    function qt(e, t) {
        return Wt(e, t, y.ADD_TO_CART)
    }

    function Ht(e, t) {
        return Wt(e, t, y.REMOVE_FROM_CART)
    }

    function Xt(e, t) {
        var o, n, i, s, u;
        let r = e.data.checkout;
        return {
            outboundEvent: y.CHECKOUT_STARTED,
            stage: x.CHECKOUT,
            payload: {
                url: j(e.context, t),
                checkoutId: (o = r.token) != null ? o : null,
                totalPrice: (i = (n = r.totalPrice) == null ? void 0 : n.amount) != null ? i : null,
                currency: (u = (s = r.totalPrice) == null ? void 0 : s.currencyCode) != null ? u : null,
                lineItems: jt(r.lineItems)
            }
        }
    }

    function Jt(e, t) {
        var o, n, i, s, u, c, a;
        let r = e.data.checkout;
        return {
            outboundEvent: y.CHECKOUT_COMPLETED,
            stage: x.CHECKOUT,
            payload: {
                url: j(e.context, t),
                checkoutId: (o = r.token) != null ? o : null,
                orderId: (i = (n = r.order) == null ? void 0 : n.id) != null ? i : null,
                totalPrice: (u = (s = r.totalPrice) == null ? void 0 : s.amount) != null ? u : null,
                currency: (a = (c = r.totalPrice) == null ? void 0 : c.currencyCode) != null ? a : null,
                lineItems: jt(r.lineItems)
            }
        }
    }
    var Yt = {
        product_viewed: Bt,
        product_added_to_cart: Kt,
        product_removed_from_cart: Gt,
        checkout_started: Xt,
        checkout_completed: Jt
    };

    function Qt(e, t, r, o) {
        e.subscribe("page_viewed", i => {
            var c;
            if (((c = i.context.document.location.pathname) != null ? c : "").includes("/products")) return;
            let u = Vt(i, o);
            t(u.outboundEvent, u.stage, u.payload, r())
        }), Object.keys(Yt).forEach(i => {
            e.subscribe(i, s => {
                let u = Yt[i](s, o);
                t(u.outboundEvent, u.stage, u.payload, r())
            })
        });

        function n(i, s) {
            e.subscribe(i, u => {
                let c = s(u, o);
                t(c.outboundEvent, c.stage, c.payload, r())
            })
        }
        n(Ut, qt), n(Lt, Ht)
    }
    var Nr = W([x.LISTING, x.PRODUCT, x.CONTENT, x.CHECKOUT]),
        Dr = W(["shopify_customer_id", "anonymous_consented", "guest"]),
        Ur = W(["granted", "denied", "unknown"]),
        Lr = W([y.PAGE_VIEW, y.ADD_TO_CART, y.REMOVE_FROM_CART, y.CHECKOUT_STARTED, y.CHECKOUT_COMPLETED]),
        jr = /^[^\0<>]*$/,
        Fr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function w(e) {
        return K().check(oe(e), N(jr))
    }
    var Vr = w(2048).check(N(/^https:\/\//, "url must use https")),
        ye = Z(It([ne().check(L(0)), K().check(N(/^\d+(\.\d{1,2})?$/, "invalid price format"))])),
        Br = ie({
            productId: Z(w(64)),
            variantId: Z(w(64)),
            title: Z(w(512)),
            quantity: ne().check(L(0)),
            price: ye
        }),
        Kr = ie({
            event: Lr,
            stage: Nr,
            sessionId: K().check(N(Fr, "sessionId must be a UUID")),
            timestamp: q.datetime(),
            userId: Z(w(512)),
            userIdType: Dr,
            localization: Z(w(16)),
            privacy: $(ie({
                consent_state: Ur
            })),
            url: $(Vr),
            title: $(w(512)),
            eventData: $(Et()),
            productId: $(Z(w(64))),
            variantId: $(Z(w(64))),
            productTitle: $(Z(w(2048))),
            price: $(ye),
            currency: $(Z(K().check(ze(3), N(/^[A-Z]{3}$/, "currency must be a 3-letter ISO code")))),
            quantity: $(ne().check(L(0))),
            checkoutId: $(Z(w(128))),
            orderId: $(Z(w(128))),
            totalPrice: $(ye),
            lineItems: $(Pt(Br).check(oe(100)))
        });

    function er(e) {
        return Kr.safeParse(e)
    }

    function be(e, t, r) {
        return g(this, null, function*() {
            yield Promise.all([e.localStorage.setItem(T.SESSION_ID, t), e.localStorage.setItem(T.SESSION_EXPIRES_AT, String(r))])
        })
    }

    function Gr(e) {
        return g(this, null, function*() {
            let [t, r] = yield Promise.all([e.localStorage.getItem(T.SESSION_ID), e.localStorage.getItem(T.SESSION_EXPIRES_AT)]), o = Date.now(), n = r ? Number(r) : 0;
            if (!t) {
                let i = crypto.randomUUID();
                return yield be(e, i, o + 18e5), i
            }
            if (!r) return yield be(e, t, o + 18e5), t;
            if (o >= n) {
                let i = crypto.randomUUID();
                return yield be(e, i, o + 18e5), i
            }
            return yield e.localStorage.setItem(T.SESSION_EXPIRES_AT, String(o + 18e5)), t
        })
    }

    function Wr(e) {
        return g(this, null, function*() {
            let t = yield e.localStorage.getItem(T.USER_ID);
            return t || (t = crypto.randomUUID(), yield e.localStorage.setItem(T.USER_ID, t)), t
        })
    }

    function qr(e, t) {
        return g(this, null, function*() {
            var n;
            let r = (n = t.data.customer) == null ? void 0 : n.id;
            if (r) return {
                userId: r,
                userIdType: "shopify_customer_id"
            };
            let o = yield e.localStorage.getItem(T.USER_ID);
            return o ? {
                userId: o,
                userIdType: "anonymous_consented"
            } : {
                userId: null,
                userIdType: "guest"
            }
        })
    }

    function Hr(e) {
        return g(this, null, function*() {
            return (yield e.cookie.get(Dt.LOCALIZATION)) || null
        })
    }

    function Xr({
        browser: e,
        init: t,
        endpoint: r,
        isDebug: o
    }) {
        return {
            browser: e,
            init: t,
            isDebug: o,
            track: (i, s, u, c) => g(null, null, function*() {
                let [a, p, l] = yield Promise.all([Gr(e), qr(e, t), Hr(e)]), f = m(_(m({
                    event: i,
                    stage: s,
                    sessionId: a,
                    timestamp: new Date().toISOString(),
                    localization: l
                }, p), {
                    privacy: c !== "unknown" ? {
                        consent_state: c
                    } : void 0
                }), u), h = er(f);
                if (!h.success) {
                    console.error("[swap-pixel] Invalid event payload:", he(h.error)), o && console.error("[swap-pixel] Validation details:", _e(h.error));
                    return
                }
                o && console.log("[swap-pixel]", i, h.data), fetch(r, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(h.data),
                    keepalive: !0
                }).catch(b => console.error("[swap-pixel] Send failed:", b))
            })
        }
    }
    ue(i => g(null, [i], function*({
        analytics: e,
        browser: t,
        customerPrivacy: r,
        init: o,
        settings: n
    }) {
        var l;
        let s = n,
            u = (l = s.serverUrl) != null ? l : Nt,
            c = s.debugMode === "true";
        if (!u) {
            console.error("[swap-pixel] No endpoint configured \u2014 pixel will not fire.");
            return
        }
        let a = Ot(o),
            p = Xr({
                browser: t,
                init: o,
                endpoint: u,
                isDebug: c
            });
        Rt(r, f => g(null, null, function*() {
            a = Mt(f.customerPrivacy), a === "granted" && (yield Wr(t))
        })), Qt(e, p.track, () => a, o)
    }));
})();