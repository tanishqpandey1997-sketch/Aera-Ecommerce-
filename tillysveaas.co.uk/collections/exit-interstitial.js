(() => {
    var s = Function.prototype.bind.bind(Function.prototype.call),
        yt = (l, r) => {
            for (let f = l; f; f = Object.getPrototypeOf(f)) {
                let y = Object.getOwnPropertyDescriptor(f, r);
                if (y) return y
            }
            throw new TypeError(`${r} is not defined`)
        },
        u = (l, r) => s(yt(l, r).get),
        B = (l, r) => s(yt(l, r).set);
    var Se = s(String.prototype.endsWith),
        k = s(RegExp.prototype.exec),
        Re = /^_(self|top|parent)$/i,
        xe = /(^|\s)noreferrer(\s|$)/i,
        ht = /^(no-referrer(-when-downgrade)?|same-origin|(strict-)?origin(-when-cross-origin)?|unsafe-url)$/i,
        Pe = /^(never|default|always|origin-when-crossorigin)$/i,
        Et = /^(no-referrer|same-origin|never)$/i,
        mt = l => {
            let r = `.${l}`;
            return f => f === l || Se(f, r)
        },
        wt = (l, r, f) => l !== void 0 && (l.protocol === "https:" || l.protocol === "http:") && l.origin !== r && !f(l.hostname),
        bt = (l, r, f) => l !== null && k(xe, l) !== null ? !0 : r !== null && k(ht, r) !== null ? k(Et, r) !== null : f,
        _t = (l, r) => k(ht, l) !== null || k(Pe, l) !== null ? k(Et, l) !== null : r,
        A = (l, {
            metaKey: r,
            ctrlKey: f,
            shiftKey: y,
            button: S
        }) => l && k(Re, l) === null ? l : r || f || y || S === 1 ? "_blank" : "";
    var Le = "http://www.w3.org/2000/svg",
        Oe = "http://www.w3.org/1999/xlink",
        G = ["rel", "referrerpolicy", "download", "ping", "hreflang", "type"];

    function kt(l) {
        let r = window;
        if (r.top !== r) return;
        let f = document,
            y = r.navigation,
            S = location.origin,
            v = URL,
            q = u(v.prototype, "href"),
            vt = u(v.prototype, "origin"),
            Nt = u(v.prototype, "protocol"),
            St = u(v.prototype, "hostname"),
            Y = s(Event.prototype.preventDefault),
            Rt = s(Event.prototype.stopPropagation),
            j = s(Event.prototype.stopImmediatePropagation),
            V = s(Event.prototype.composedPath),
            xt = u(Event.prototype, "type"),
            Pt = u(Event.prototype, "cancelable"),
            X = u(Event.prototype, "defaultPrevented"),
            Lt = u(Event.prototype, "bubbles"),
            Ot = u(Event.prototype, "currentTarget"),
            At = u(Event.prototype, "eventPhase"),
            {
                CAPTURING_PHASE: It
            } = Event,
            z = u(Event.prototype, "cancelBubble"),
            Tt = B(Event.prototype, "cancelBubble"),
            Wt = u(MouseEvent.prototype, "button"),
            Mt = u(MouseEvent.prototype, "metaKey"),
            Ct = u(MouseEvent.prototype, "ctrlKey"),
            Dt = u(MouseEvent.prototype, "shiftKey"),
            Ft = y && u(NavigateEvent.prototype, "destination"),
            Ht = y && u(NavigationDestination.prototype, "url"),
            J = y && u(NavigateEvent.prototype, "navigationType"),
            $t = y && u(NavigateEvent.prototype, "formData"),
            Q = y && "sourceElement" in NavigateEvent.prototype ? u(NavigateEvent.prototype, "sourceElement") : void 0,
            m = s(Element.prototype.getAttribute),
            Kt = s(Element.prototype.getAttributeNS),
            I = s(Element.prototype.setAttribute),
            Ut = u(Element.prototype, "localName"),
            Bt = u(Element.prototype, "namespaceURI"),
            Gt = s(Document.prototype.querySelector),
            qt = s(Document.prototype.querySelectorAll),
            Yt = u(NodeList.prototype, "length"),
            jt = s(NodeList.prototype.item),
            T = u(Node.prototype, "baseURI"),
            Vt = s(Document.prototype.createElement),
            Xt = s(HTMLElement.prototype.click),
            zt = s(r.open),
            Jt = s(location.assign),
            Qt = s(location.replace),
            Zt = encodeURIComponent,
            te = s(String.prototype.startsWith),
            Z = s(r.setTimeout),
            ee = s(r.addEventListener),
            ne = s(r.removeEventListener),
            tt = s(EventTarget.prototype.addEventListener),
            et = s(EventTarget.prototype.removeEventListener),
            nt = Object.defineProperties,
            ot = t => {
                let e = [],
                    n = [HTMLElement.prototype, SVGElement.prototype, Document.prototype, r];
                for (let o = 0; o < n.length; o += 1) try {
                    e[e.length] = {
                        get: u(n[o], t),
                        set: B(n[o], t)
                    }
                } catch {}
                return e
            },
            oe = {
                click: ot("onclick"),
                auxclick: ot("onauxclick")
            },
            rt = WeakMap,
            re = WeakSet,
            st = s(WeakMap.prototype.get),
            se = s(WeakMap.prototype.set),
            ce = s(WeakMap.prototype.delete),
            ie = s(WeakSet.prototype.add),
            ae = s(WeakSet.prototype.has),
            le = mt(l.site),
            ct = q(new v(l.exitPath, S)),
            ue = `${ct}?`,
            P = (t, e) => {
                try {
                    let n = new v(t, e);
                    return {
                        href: q(n),
                        origin: vt(n),
                        protocol: Nt(n),
                        hostname: St(n)
                    }
                } catch {
                    return
                }
            },
            pe = (t, e, n) => {
                let o = n ? "&noreferrer=1" : "";
                return `${ct}?q=${Zt(t.href)}&trigger=${e}${o}`
            },
            it = () => {
                let t = qt(f, 'meta[name="referrer" i][content]'),
                    e = !1;
                for (let n = 0; n < Yt(t); n += 1) e = _t(m(jt(t, n), "content"), e);
                return e
            },
            at = (t, e, {
                target: n,
                noReferrer: o,
                replaces: i
            }) => {
                let d = pe(t, e, o);
                if (n) {
                    zt(r, d, n, "noopener");
                    return
                }(i ? Qt : Jt)(location, d)
            },
            W = t => wt(t, S, le),
            L = 0,
            M, C = !1,
            fe = t => {
                if (L > 0) {
                    M = t;
                    return
                }
                t()
            },
            de = t => {
                if (L -= 1, t && (C = !0), L > 0) return;
                let e = C ? void 0 : M;
                M = void 0, C = !1, e && e()
            },
            ge = t => t !== void 0 && te(t.href, ue),
            lt = t => {
                try {
                    return Ut(t)
                } catch {
                    return
                }
            },
            ut = t => bt(m(t, "rel"), m(t, "referrerpolicy"), it()),
            ye = t => {
                let e = Q ? Q(t) : null,
                    n = e === null ? void 0 : lt(e);
                return n === "a" || n === "area" ? ut(e) : it()
            },
            he = t => {
                let e = P(Ht(Ft(t)));
                if (ge(e)) {
                    j(t);
                    return
                }
                if (!Pt(t) || J(t) === "traverse" || !W(e) || $t(t) !== null) return;
                Y(t);
                let n = {
                    target: "",
                    noReferrer: ye(t),
                    replaces: J(t) === "replace"
                };
                fe(() => at(e, "navigate", n))
            },
            R = t => {
                let e = m(t, "href");
                return e === null && Bt(t) === Le ? Kt(t, Oe, "href") : e
            },
            Ee = t => {
                let e = V(t);
                for (let n = 0; n < e.length; n += 1) {
                    let o = e[n],
                        i = lt(o);
                    if (i === "a" || i === "area") {
                        let d = R(o);
                        if (d !== null) return {
                            node: o,
                            href: d
                        }
                    }
                }
            },
            D = t => {
                let e = m(t, "target");
                if (e !== null) return e;
                let n = Gt(f, "base[target]");
                return n ? m(n, "target") : ""
            },
            me = t => {
                try {
                    return {
                        metaKey: Mt(t),
                        ctrlKey: Ct(t),
                        shiftKey: Dt(t),
                        button: Wt(t)
                    }
                } catch {
                    return
                }
            },
            pt = new re,
            we = t => {
                let e = !1,
                    n = () => {
                        e = !0
                    },
                    o = () => e || ae(pt, t);
                return nt(t, {
                    __proto__: null,
                    preventDefault: {
                        __proto__: null,
                        configurable: !0,
                        value: n
                    },
                    defaultPrevented: {
                        __proto__: null,
                        configurable: !0,
                        get: o
                    },
                    returnValue: {
                        __proto__: null,
                        configurable: !0,
                        get: () => !o(),
                        set: i => {
                            i || n()
                        }
                    }
                }), o
            },
            be = {
                click: new rt,
                auxclick: new rt
            },
            _e = (t, e) => {
                let n = oe[t],
                    o = be[t],
                    i = [],
                    d = p => {
                        for (let a = 0; a < i.length; a += 1)
                            if (i[a] === p) return !0;
                        return !1
                    },
                    w = (p, a, E) => {
                        let g = s(E);

                        function O(_) {
                            let x = g(this, _);
                            return x === !1 && typeof _ == "object" && _ !== null && ie(pt, _), x
                        }
                        return {
                            target: p,
                            accessor: a,
                            handler: E,
                            wrapper: O,
                            inFlight: 0
                        }
                    },
                    b = () => {
                        for (let p = 0; p < e.length; p += 1)
                            for (let a = 0; a < n.length; a += 1) {
                                let E;
                                try {
                                    E = n[a].get(e[p])
                                } catch {
                                    continue
                                }
                                if (typeof E == "function") {
                                    let g = st(o, e[p]);
                                    (!g || g.wrapper !== E) && (g = w(e[p], n[a], E), n[a].set(e[p], g.wrapper), se(o, e[p], g)), d(g) || (g.inFlight += 1, i[i.length] = g)
                                }
                                break
                            }
                    };
                return b(), {
                    wrap: b,
                    unwrap: () => {
                        for (let p = 0; p < i.length; p += 1) {
                            let a = i[p];
                            a.inFlight -= 1, !(a.inFlight > 0) && (st(o, a.target) === a && ce(o, a.target), a.accessor.get(a.target) === a.wrapper && a.accessor.set(a.target, a.handler))
                        }
                    }
                }
            },
            ft = (t, e, n) => {
                let o = R(t),
                    i = o === null ? void 0 : P(o, T(f));
                if (!W(i)) return;
                let d = {
                    target: A(D(t), n),
                    noReferrer: ut(t),
                    replaces: !1
                };
                return {
                    inWindow: d.target === "",
                    go: () => at(i, e, d)
                }
            },
            dt = t => {
                let e = R(t);
                if (e === null || m(t, "download") === null) return !1;
                let n = P(e, T(f));
                return n !== void 0 && (n.origin === S || n.protocol === "blob:" || n.protocol === "data:")
            },
            ke = (t, e) => R(t) !== null && !dt(t) && A(D(t), e) === "",
            ve = (t, e) => {
                let n = R(t);
                if (n === null) return !1;
                let o = Vt(f, "a"),
                    i = A(D(t), e);
                I(o, "href", n), I(o, "target", i || "_self");
                for (let d = 0; d < G.length; d += 1) {
                    let w = m(t, G[d]);
                    w !== null && I(o, G[d], w)
                }
                return Xt(o), i === "" && !dt(t)
            },
            Ne = (t, e, n, o) => {
                L += 1;
                let i = V(t),
                    d = i.length - 1,
                    w = 0,
                    b = !1,
                    F = !1,
                    p = c => {
                        F || (F = !0, de(c))
                    },
                    a = c => {
                        if (b) return;
                        b = !0;
                        let N = X(t),
                            h = N ? void 0 : ft(n, e, o),
                            U;
                        !N && (h || c) && (Y(t), U = we(t)), Z(r, () => {
                            if (!U) {
                                p(!X(t) && ke(n, o));
                                return
                            }
                            if (U()) {
                                p(!1);
                                return
                            }
                            if (c && (h = ft(n, e, o), !h)) {
                                p(ve(n, o));
                                return
                            }
                            h.go(), p(h.inWindow)
                        }, 0)
                    },
                    E = (c, N) => {
                        for (let h = 0; h < i.length; h += 1)
                            if (i[h] === c) return N === It ? d - h : i.length + h;
                        return -1
                    },
                    g = () => {
                        E(Ot(t), At(t)) <= w && a(!0)
                    },
                    O = c => {
                        c === t && a(!1)
                    },
                    _ = _e(e, i),
                    x = c => N => {
                        if (N === t) {
                            if (w = c, z(t)) {
                                a(!1);
                                return
                            }
                            _.wrap()
                        }
                    },
                    H = [],
                    $ = [],
                    K = Lt(t);
                if (K) {
                    for (let c = 0; c < d; c += 1) H[c] = x(d - c), $[c] = x(i.length + c), tt(i[c], e, H[c], !0), tt(i[c], e, $[c], !1);
                    ee(r, e, O, !1)
                }
                if (Z(r, () => {
                        if (b || p(!1), b = !0, _.unwrap(), !!K) {
                            for (let c = 0; c < d; c += 1) et(i[c], e, H[c], !0), et(i[c], e, $[c], !1);
                            ne(r, e, O, !1)
                        }
                    }, 0), !K) {
                    a(!0);
                    return
                }
                nt(t, {
                    __proto__: null,
                    stopPropagation: {
                        __proto__: null,
                        configurable: !0,
                        value: () => {
                            g(), Rt(t)
                        }
                    },
                    stopImmediatePropagation: {
                        __proto__: null,
                        configurable: !0,
                        value: () => {
                            a(!0), j(t)
                        }
                    },
                    cancelBubble: {
                        __proto__: null,
                        configurable: !0,
                        get: () => z(t),
                        set: c => {
                            c && g(), Tt(t, c)
                        }
                    }
                })
            },
            gt = t => {
                let e = xt(t),
                    n = me(t);
                if (!n || e === "auxclick" && n.button !== 1) return;
                let o = Ee(t);
                !o || !W(P(o.href, T(f))) || Ne(t, e, o.node, n)
            };
        y ?.addEventListener("navigate", he, !0), r.addEventListener("click", gt, !0), r.addEventListener("auxclick", gt, !0)
    }
    kt({
        "site": "tillysveaas.co.uk",
        "exitPath": "\/url"
    });
})();
//# sourceURL=exit-interstitial.js