const xe = {},
    b = Symbol(),
    $n = Symbol("filename"),
    Vr = "http://www.w3.org/1999/xhtml",
    gn = "production",
    d = !gn.toLowerCase().startsWith("prod");
var mn = Array.isArray,
    bn = Array.prototype.indexOf,
    En = Array.from,
    Fe = Object.keys,
    H = Object.defineProperty,
    ue = Object.getOwnPropertyDescriptor,
    Wr = Object.getOwnPropertyDescriptors,
    xn = Object.prototype,
    Tn = Array.prototype,
    Sn = Object.getPrototypeOf,
    Et = Object.isExtensible;
const zr = () => {};

function kn(e) {
    for (var t = 0; t < e.length; t++) e[t]()
}

function Nt() {
    var e, t, n = new Promise((r, s) => {
        e = r, t = s
    });
    return {
        promise: n,
        resolve: e,
        reject: t
    }
}
const E = 2,
    Le = 4,
    Ge = 8,
    Ct = 1 << 24,
    W = 16,
    se = 32,
    ie = 64,
    ht = 128,
    P = 512,
    k = 1024,
    R = 2048,
    z = 4096,
    J = 8192,
    X = 16384,
    Ke = 32768,
    Ye = 65536,
    He = 1 << 17,
    Dt = 1 << 18,
    _e = 1 << 19,
    An = 1 << 20,
    te = 32768,
    st = 1 << 21,
    Ze = 1 << 22,
    Q = 1 << 23,
    ye = Symbol("$state"),
    On = Symbol("legacy props"),
    Pt = Symbol("proxy path"),
    pe = new class extends Error {
        name = "StaleReactionError";
        message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
    },
    Rn = 3,
    Je = 8;

function Nn(e) {
    if (d) {
        const t = new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
        throw t.name = "Svelte error", t
    } else throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Cn() {
    if (d) {
        const e = new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function Dn() {
    if (d) {
        const e = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/derived_references_self")
}

function Pn(e) {
    if (d) {
        const t = new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
        throw t.name = "Svelte error", t
    } else throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Mn() {
    if (d) {
        const e = new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function In(e) {
    if (d) {
        const t = new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
        throw t.name = "Svelte error", t
    } else throw new Error("https://svelte.dev/e/effect_orphan")
}

function jn() {
    if (d) {
        const e = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Fn() {
    if (d) {
        const e = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/hydration_failed")
}

function Ln(e) {
    if (d) {
        const t = new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
        throw t.name = "Svelte error", t
    } else throw new Error("https://svelte.dev/e/rune_outside_svelte")
}

function Yn() {
    if (d) {
        const e = new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Hn() {
    if (d) {
        const e = new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function qn() {
    if (d) {
        const e = new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function Bn() {
    if (d) {
        const e = new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");
        throw e.name = "Svelte error", e
    } else throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
var Ae = "font-weight: bold",
    Oe = "font-weight: normal";

function _t(e) {
    d ? console.warn(`%c[svelte] hydration_mismatch
%cHydration failed because the initial UI does not match what was rendered on the server
https://svelte.dev/e/hydration_mismatch`, Ae, Oe) : console.warn("https://svelte.dev/e/hydration_mismatch")
}

function Un() {
    d ? console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, Ae, Oe) : console.warn("https://svelte.dev/e/lifecycle_double_unmount")
}

function tt(e) {
    d ? console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, Ae, Oe) : console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")
}

function Vn() {
    d ? console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, Ae, Oe) : console.warn("https://svelte.dev/e/state_proxy_unmount")
}

function Wn() {
    d ? console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop", Ae, Oe) : console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let S = !1;

function De(e) {
    S = e
}
let g;

function ne(e) {
    if (e === null) throw _t(), xe;
    return g = e
}

function Mt() {
    return ne(le(g))
}

function Kr(e) {
    if (S) {
        if (le(g) !== null) throw _t(), xe;
        g = e
    }
}

function zn(e = 1) {
    if (S) {
        for (var t = e, n = g; t--;) n = le(n);
        g = n
    }
}

function Gn(e = !0) {
    for (var t = 0, n = g;;) {
        if (n.nodeType === Je) {
            var r = n.data;
            if (r === "]") {
                if (t === 0) return n;
                t -= 1
            } else(r === "[" || r === "[!") && (t += 1)
        }
        var s = le(n);
        e && n.remove(), n = s
    }
}

function It(e) {
    return e === this.v
}

function Kn(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Zn(e) {
    return !Kn(e, this.v)
}
let Jn = !1;

function Y(e, t) {
    return e.label = t, jt(e.v, t), e
}

function jt(e, t) {
    return e ?.[Pt] ?.(t), e
}

function Xn(e) {
    const t = new Error,
        n = Qn();
    return n.length === 0 ? null : (n.unshift(`
`), H(t, "stack", {
        value: n.join(`
`)
    }), H(t, "name", {
        value: e
    }), t)
}

function Qn() {
    const e = Error.stackTraceLimit;
    Error.stackTraceLimit = 1 / 0;
    const t = new Error().stack;
    if (Error.stackTraceLimit = e, !t) return [];
    const n = t.split(`
`),
        r = [];
    for (let s = 0; s < n.length; s++) {
        const i = n[s],
            l = i.replaceAll("\\", "/");
        if (i.trim() !== "Error") {
            if (i.includes("validate_each_keys")) return [];
            l.includes("svelte/src/internal") || l.includes("node_modules/.vite") || r.push(i)
        }
    }
    return r
}
let A = null;

function we(e) {
    A = e
}
let Te = null;

function qe(e) {
    Te = e
}
let Re = null;

function xt(e) {
    Re = e
}

function er(e, t = !1, n) {
    A = {
        p: A,
        i: !1,
        c: null,
        e: null,
        s: e,
        x: null,
        l: null
    }, d && (A.function = n, Re = n)
}

function tr(e) {
    var t = A,
        n = t.e;
    if (n !== null) {
        t.e = null;
        for (var r of n) en(r)
    }
    return e !== void 0 && (t.x = e), t.i = !0, A = t.p, d && (Re = A ?.function ?? null), e ?? {}
}

function Ft() {
    return !0
}
let ae = [];

function Lt() {
    var e = ae;
    ae = [], kn(e)
}

function vt(e) {
    if (ae.length === 0 && !be) {
        var t = ae;
        queueMicrotask(() => {
            t === ae && Lt()
        })
    }
    ae.push(e)
}

function nr() {
    for (; ae.length > 0;) Lt()
}
const it = new WeakMap;

function Yt(e) {
    var t = y;
    if (t === null) return p.f |= Q, e;
    if (d && e instanceof Error && !it.has(e) && it.set(e, rr(e, t)), (t.f & Ke) === 0) {
        if ((t.f & ht) === 0) throw d && !t.parent && e instanceof Error && Ht(e), e;
        t.b.error(e)
    } else $e(e, t)
}

function $e(e, t) {
    for (; t !== null;) {
        if ((t.f & ht) !== 0) try {
            t.b.error(e);
            return
        } catch (n) {
            e = n
        }
        t = t.parent
    }
    throw d && e instanceof Error && Ht(e), e
}

function rr(e, t) {
    const n = ue(e, "message");
    if (!(n && !n.configurable)) {
        for (var r = $t ? "  " : "	", s = `
${r}in ${t.fn?.name||"<unknown>"}`, i = t.ctx; i !== null;) s += `
${r}in ${i.function?.[$n].split("/").pop()}`, i = i.p;
        return {
            message: e.message + `
${s}
`,
            stack: e.stack ?.split(`
`).filter(l => !l.includes("svelte/src/internal")).join(`
`)
        }
    }
}

function Ht(e) {
    const t = it.get(e);
    t && (H(e, "message", {
        value: t.message
    }), H(e, "stack", {
        value: t.stack
    }))
}
const sr = -7169;

function x(e, t) {
    e.f = e.f & sr | t
}

function pt(e) {
    (e.f & P) !== 0 || e.deps === null ? x(e, k) : x(e, z)
}

function qt(e) {
    if (e !== null)
        for (const t of e)(t.f & E) === 0 || (t.f & te) === 0 || (t.f ^= te, qt(t.deps))
}

function Bt(e, t, n) {
    (e.f & R) !== 0 ? t.add(e) : (e.f & z) !== 0 && n.add(e), qt(e.deps), x(e, k)
}
const Pe = new Set;
let $ = null,
    M = null,
    D = [],
    Xe = null,
    lt = !1,
    be = !1;
class I {
    committed = !1;
    current = new Map;
    previous = new Map;
    #e = new Set;
    #t = new Set;
    #s = 0;
    #f = 0;
    #i = null;
    #r = new Set;
    #n = new Set;
    skipped_effects = new Set;
    is_fork = !1;
    is_deferred() {
        return this.is_fork || this.#f > 0
    }
    process(t) {
        D = [], this.apply();
        var n = [],
            r = [];
        for (const s of t) this.#l(s, n, r);
        this.is_fork || this.#a(), this.is_deferred() ? (this.#o(r), this.#o(n)) : ($ = null, Tt(r), Tt(n), this.#i ?.resolve()), M = null
    }
    #l(t, n, r) {
        t.f ^= k;
        for (var s = t.first, i = null; s !== null;) {
            var l = s.f,
                f = (l & (se | ie)) !== 0,
                u = f && (l & k) !== 0,
                _ = u || (l & J) !== 0 || this.skipped_effects.has(s);
            if (!_ && s.fn !== null) {
                f ? s.f ^= k : i !== null && (l & (Le | Ge | Ct)) !== 0 ? i.b.defer_effect(s) : (l & Le) !== 0 ? n.push(s) : Ce(s) && ((l & W) !== 0 && this.#r.add(s), ke(s));
                var h = s.first;
                if (h !== null) {
                    s = h;
                    continue
                }
            }
            var o = s.parent;
            for (s = s.next; s === null && o !== null;) o === i && (i = null), s = o.next, o = o.parent
        }
    }
    #o(t) {
        for (var n = 0; n < t.length; n += 1) Bt(t[n], this.#r, this.#n)
    }
    capture(t, n) {
        n !== b && !this.previous.has(t) && this.previous.set(t, n), (t.f & Q) === 0 && (this.current.set(t, t.v), M ?.set(t, t.v))
    }
    activate() {
        $ = this, this.apply()
    }
    deactivate() {
        $ === this && ($ = null, M = null)
    }
    flush() {
        if (this.activate(), D.length > 0) {
            if (Ut(), $ !== null && $ !== this) return
        } else this.#s === 0 && this.process([]);
        this.deactivate()
    }
    discard() {
        for (const t of this.#t) t(this);
        this.#t.clear()
    }
    #a() {
        if (this.#f === 0) {
            for (const t of this.#e) t();
            this.#e.clear()
        }
        this.#s === 0 && this.#u()
    }
    #u() {
        if (Pe.size > 1) {
            this.previous.clear();
            var t = M,
                n = !0;
            for (const s of Pe) {
                if (s === this) {
                    n = !1;
                    continue
                }
                const i = [];
                for (const [f, u] of this.current) {
                    if (s.current.has(f))
                        if (n && u !== s.current.get(f)) s.current.set(f, u);
                        else continue;
                    i.push(f)
                }
                if (i.length === 0) continue;
                const l = [...s.current.keys()].filter(f => !this.current.has(f));
                if (l.length > 0) {
                    var r = D;
                    D = [];
                    const f = new Set,
                        u = new Map;
                    for (const _ of i) Vt(_, l, f, u);
                    if (D.length > 0) {
                        $ = s, s.apply();
                        for (const _ of D) s.#l(_, [], []);
                        s.deactivate()
                    }
                    D = r
                }
            }
            $ = null, M = t
        }
        this.committed = !0, Pe.delete(this)
    }
    increment(t) {
        this.#s += 1, t && (this.#f += 1)
    }
    decrement(t) {
        this.#s -= 1, t && (this.#f -= 1), this.revive()
    }
    revive() {
        for (const t of this.#r) this.#n.delete(t), x(t, R), re(t);
        for (const t of this.#n) x(t, z), re(t);
        this.flush()
    }
    oncommit(t) {
        this.#e.add(t)
    }
    ondiscard(t) {
        this.#t.add(t)
    }
    settled() {
        return (this.#i ??= Nt()).promise
    }
    static ensure() {
        if ($ === null) {
            const t = $ = new I;
            Pe.add($), be || I.enqueue(() => {
                $ === t && t.flush()
            })
        }
        return $
    }
    static enqueue(t) {
        vt(t)
    }
    apply() {}
}

function ir(e) {
    var t = be;
    be = !0;
    try {
        for (var n;;) {
            if (nr(), D.length === 0 && ($ ?.flush(), D.length === 0)) return Xe = null, n;
            Ut()
        }
    } finally {
        be = t
    }
}

function Ut() {
    var e = ce;
    lt = !0;
    var t = d ? new Set : null;
    try {
        var n = 0;
        for (We(!0); D.length > 0;) {
            var r = I.ensure();
            if (n++ > 1e3) {
                if (d) {
                    var s = new Map;
                    for (const l of r.current.keys())
                        for (const [f, u] of l.updated ?? []) {
                            var i = s.get(f);
                            i || (i = {
                                error: u.error,
                                count: 0
                            }, s.set(f, i)), i.count += u.count
                        }
                    for (const l of s.values()) l.error && console.error(l.error)
                }
                lr()
            }
            if (r.process(D), ee.clear(), d)
                for (const l of r.current.keys()) t.add(l)
        }
    } finally {
        if (lt = !1, We(e), Xe = null, d)
            for (const l of t) l.updated = null
    }
}

function lr() {
    try {
        jn()
    } catch (e) {
        d && H(e, "stack", {
            value: ""
        }), $e(e, Xe)
    }
}
let B = null;

function Tt(e) {
    var t = e.length;
    if (t !== 0) {
        for (var n = 0; n < t;) {
            var r = e[n++];
            if ((r.f & (X | J)) === 0 && Ce(r) && (B = new Set, ke(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? sn(r) : r.fn = null), B ?.size > 0)) {
                ee.clear();
                for (const s of B) {
                    if ((s.f & (X | J)) !== 0) continue;
                    const i = [s];
                    let l = s.parent;
                    for (; l !== null;) B.has(l) && (B.delete(l), i.push(l)), l = l.parent;
                    for (let f = i.length - 1; f >= 0; f--) {
                        const u = i[f];
                        (u.f & (X | J)) === 0 && ke(u)
                    }
                }
                B.clear()
            }
        }
        B = null
    }
}

function Vt(e, t, n, r) {
    if (!n.has(e) && (n.add(e), e.reactions !== null))
        for (const s of e.reactions) {
            const i = s.f;
            (i & E) !== 0 ? Vt(s, t, n, r) : (i & (Ze | W)) !== 0 && (i & R) === 0 && Wt(s, t, r) && (x(s, R), re(s))
        }
}

function Wt(e, t, n) {
    const r = n.get(e);
    if (r !== void 0) return r;
    if (e.deps !== null)
        for (const s of e.deps) {
            if (t.includes(s)) return !0;
            if ((s.f & E) !== 0 && Wt(s, t, n)) return n.set(s, !0), !0
        }
    return n.set(e, !1), !1
}

function re(e) {
    for (var t = Xe = e; t.parent !== null;) {
        t = t.parent;
        var n = t.f;
        if (lt && t === y && (n & W) !== 0 && (n & Dt) === 0) return;
        if ((n & (ie | se)) !== 0) {
            if ((n & k) === 0) return;
            t.f ^= k
        }
    }
    D.push(t)
}

function fr(e) {
    let t = 0,
        n = Ne(0),
        r;
    return d && Y(n, "createSubscriber version"), () => {
        gt() && (U(n), tn(() => (t === 0 && (r = hn(() => e(() => Ee(n)))), t += 1, () => {
            vt(() => {
                t -= 1, t === 0 && (r ?.(), r = void 0, Ee(n))
            })
        })))
    }
}
var or = Ye | _e | ht;

function ar(e, t, n) {
    new ur(e, t, n)
}
class ur {
    parent;
    is_pending = !1;
    #e;
    #t = S ? g : null;
    #s;
    #f;
    #i;
    #r = null;
    #n = null;
    #l = null;
    #o = null;
    #a = null;
    #u = 0;
    #c = 0;
    #h = !1;
    #_ = new Set;
    #v = new Set;
    #d = null;
    #g = fr(() => (this.#d = Ne(this.#u), d && Y(this.#d, "$effect.pending()"), () => {
        this.#d = null
    }));
    constructor(t, n, r) {
        this.#e = t, this.#s = n, this.#f = r, this.parent = y.b, this.is_pending = !!this.#s.pending, this.#i = Rr(() => {
            if (y.b = this, S) {
                const i = this.#t;
                Mt(), i.nodeType === Je && i.data === "[!" ? this.#b() : (this.#m(), this.#c === 0 && (this.is_pending = !1))
            } else {
                var s = this.#w();
                try {
                    this.#r = oe(() => r(s))
                } catch (i) {
                    this.error(i)
                }
                this.#c > 0 ? this.#y() : this.is_pending = !1
            }
            return () => {
                this.#a ?.remove()
            }
        }, or), S && (this.#e = g)
    }
    #m() {
        try {
            this.#r = oe(() => this.#f(this.#e))
        } catch (t) {
            this.error(t)
        }
    }
    #b() {
        const t = this.#s.pending;
        t && (this.#n = oe(() => t(this.#e)), I.enqueue(() => {
            var n = this.#w();
            this.#r = this.#p(() => (I.ensure(), oe(() => this.#f(n)))), this.#c > 0 ? this.#y() : (Ie(this.#n, () => {
                this.#n = null
            }), this.is_pending = !1)
        }))
    }
    #w() {
        var t = this.#e;
        return this.is_pending && (this.#a = Qe(), this.#e.before(this.#a), t = this.#a), t
    }
    defer_effect(t) {
        Bt(t, this.#_, this.#v)
    }
    is_rendered() {
        return !this.is_pending && (!this.parent || this.parent.is_rendered())
    }
    has_pending_snippet() {
        return !!this.#s.pending
    }
    #p(t) {
        var n = y,
            r = p,
            s = A;
        L(this.#i), O(this.#i), we(this.#i.ctx);
        try {
            return t()
        } catch (i) {
            return Yt(i), null
        } finally {
            L(n), O(r), we(s)
        }
    }
    #y() {
        const t = this.#s.pending;
        this.#r !== null && (this.#o = document.createDocumentFragment(), this.#o.append(this.#a), Dr(this.#r, this.#o)), this.#n === null && (this.#n = oe(() => t(this.#e)))
    }
    #$(t) {
        if (!this.has_pending_snippet()) {
            this.parent && this.parent.#$(t);
            return
        }
        if (this.#c += t, this.#c === 0) {
            this.is_pending = !1;
            for (const n of this.#_) x(n, R), re(n);
            for (const n of this.#v) x(n, z), re(n);
            this.#_.clear(), this.#v.clear(), this.#n && Ie(this.#n, () => {
                this.#n = null
            }), this.#o && (this.#e.before(this.#o), this.#o = null)
        }
    }
    update_pending_count(t) {
        this.#$(t), this.#u += t, this.#d && Ue(this.#d, this.#u)
    }
    get_effect_pending() {
        return this.#g(), U(this.#d)
    }
    error(t) {
        var n = this.#s.onerror;
        let r = this.#s.failed;
        if (this.#h || !n && !r) throw t;
        this.#r && (F(this.#r), this.#r = null), this.#n && (F(this.#n), this.#n = null), this.#l && (F(this.#l), this.#l = null), S && (ne(this.#t), zn(), ne(Gn()));
        var s = !1,
            i = !1;
        const l = () => {
            if (s) {
                Wn();
                return
            }
            s = !0, i && Bn(), I.ensure(), this.#u = 0, this.#l !== null && Ie(this.#l, () => {
                this.#l = null
            }), this.is_pending = this.has_pending_snippet(), this.#r = this.#p(() => (this.#h = !1, oe(() => this.#f(this.#e)))), this.#c > 0 ? this.#y() : this.is_pending = !1
        };
        var f = p;
        try {
            O(null), i = !0, n ?.(t, l), i = !1
        } catch (u) {
            $e(u, this.#i && this.#i.parent)
        } finally {
            O(f)
        }
        r && vt(() => {
            this.#l = this.#p(() => {
                I.ensure(), this.#h = !0;
                try {
                    return oe(() => {
                        r(this.#e, () => t, () => l)
                    })
                } catch (u) {
                    return $e(u, this.#i.parent), null
                } finally {
                    this.#h = !1
                }
            })
        })
    }
}

function cr(e, t, n, r) {
    const s = zt;
    if (n.length === 0 && e.length === 0) {
        r(t.map(s));
        return
    }
    var i = $,
        l = y,
        f = dr();

    function u() {
        Promise.all(n.map(_ => _r(_))).then(_ => {
            f();
            try {
                r([...t.map(s), ..._])
            } catch (h) {
                (l.f & X) === 0 && $e(h, l)
            }
            i ?.deactivate(), Be()
        }).catch(_ => {
            $e(_, l)
        })
    }
    e.length > 0 ? Promise.all(e).then(() => {
        f();
        try {
            return u()
        } finally {
            i ?.deactivate(), Be()
        }
    }) : u()
}

function dr() {
    var e = y,
        t = p,
        n = A,
        r = $;
    if (d) var s = Te;
    return function(l = !0) {
        L(e), O(t), we(n), l && r ?.activate(), d && qe(s)
    }
}

function Be() {
    L(null), O(null), we(null), d && qe(null)
}
const hr = new Set;

function zt(e) {
    var t = E | R,
        n = p !== null && (p.f & E) !== 0 ? p : null;
    return y !== null && (y.f |= _e), {
        ctx: A,
        deps: null,
        effects: null,
        equals: It,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: b,
        wv: 0,
        parent: n ?? y,
        ac: null
    }
}

function _r(e, t, n) {
    let r = y;
    r === null && Cn();
    var s = r.b,
        i = void 0,
        l = Ne(b);
    d && (l.label = t);
    var f = !p,
        u = new Map;
    return Or(() => {
        var _ = Nt();
        i = _.promise;
        try {
            Promise.resolve(e()).then(_.resolve, _.reject).then(() => {
                h === $ && h.committed && h.deactivate(), Be()
            })
        } catch (c) {
            _.reject(c), Be()
        }
        var h = $;
        if (f) {
            var o = s.is_rendered();
            s.update_pending_count(1), h.increment(o), u.get(h) ?.reject(pe), u.delete(h), u.set(h, _)
        }
        const a = (c, v = void 0) => {
            if (h.activate(), v) v !== pe && (l.f |= Q, Ue(l, v));
            else {
                (l.f & Q) !== 0 && (l.f ^= Q), Ue(l, c);
                for (const [w, m] of u) {
                    if (u.delete(w), w === h) break;
                    m.reject(pe)
                }
            }
            f && (s.update_pending_count(-1), h.decrement(o))
        };
        _.promise.then(a, c => a(null, c || "unknown"))
    }), Tr(() => {
        for (const _ of u.values()) _.reject(pe)
    }), d && (l.f |= Ze), new Promise(_ => {
        function h(o) {
            function a() {
                o === i ? _(l) : h(i)
            }
            o.then(a, a)
        }
        h(i)
    })
}

function Zr(e) {
    const t = zt(e);
    return fn(t), t
}

function ft(e) {
    var t = e.effects;
    if (t !== null) {
        e.effects = null;
        for (var n = 0; n < t.length; n += 1) F(t[n])
    }
}
let nt = [];

function vr(e) {
    for (var t = e.parent; t !== null;) {
        if ((t.f & E) === 0) return (t.f & X) === 0 ? t : null;
        t = t.parent
    }
    return null
}

function yt(e) {
    var t, n = y;
    if (L(vr(e)), d) {
        let r = ge;
        St(new Set);
        try {
            nt.includes(e) && Dn(), nt.push(e), e.f &= ~te, ft(e), t = at(e)
        } finally {
            L(n), St(r), nt.pop()
        }
    } else try {
        e.f &= ~te, ft(e), t = at(e)
    } finally {
        L(n)
    }
    return t
}

function Gt(e) {
    var t = yt(e);
    if (!e.equals(t) && (e.wv = an(), (!$ ?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
        x(e, k);
        return
    }
    he || (M !== null ? (gt() || $ ?.is_fork) && M.set(e, t) : pt(e))
}
let ge = new Set;
const ee = new Map;

function St(e) {
    ge = e
}
let wt = !1;

function pr() {
    wt = !0
}

function Ne(e, t) {
    var n = {
        f: 0,
        v: e,
        reactions: null,
        equals: It,
        rv: 0,
        wv: 0
    };
    return n
}

function K(e, t) {
    const n = Ne(e);
    return fn(n), n
}

function yr(e, t = !1, n = !0) {
    const r = Ne(e);
    return t || (r.equals = Zn), r
}

function Z(e, t, n = !1) {
    p !== null && (!j || (p.f & He) !== 0) && Ft() && (p.f & (E | W | Ze | He)) !== 0 && !V ?.includes(e) && qn();
    let r = n ? me(t) : t;
    return d && jt(r, e.label), Ue(e, r)
}

function Ue(e, t) {
    if (!e.equals(t)) {
        var n = e.v;
        he ? ee.set(e, t) : ee.set(e, n), e.v = t;
        var r = I.ensure();
        if (r.capture(e, n), d) {
            if (y !== null) {
                e.updated ??= new Map;
                const s = (e.updated.get("") ?.count ?? 0) + 1;
                if (e.updated.set("", {
                        error: null,
                        count: s
                    }), s > 5) {
                    const i = Xn("updated at");
                    if (i !== null) {
                        let l = e.updated.get(i.stack);
                        l || (l = {
                            error: i,
                            count: 0
                        }, e.updated.set(i.stack, l)), l.count++
                    }
                }
            }
            y !== null && (e.set_during_effect = !0)
        }
        if ((e.f & E) !== 0) {
            const s = e;
            (e.f & R) !== 0 && yt(s), pt(s)
        }
        e.wv = an(), Zt(e, R), y !== null && (y.f & k) !== 0 && (y.f & (se | ie)) === 0 && (C === null ? Pr([e]) : C.push(e)), !r.is_fork && ge.size > 0 && !wt && Kt()
    }
    return t
}

function Kt() {
    wt = !1;
    var e = ce;
    We(!0);
    const t = Array.from(ge);
    try {
        for (const n of t)(n.f & k) !== 0 && x(n, z), Ce(n) && ke(n)
    } finally {
        We(e)
    }
    ge.clear()
}

function Ee(e) {
    Z(e, e.v + 1)
}

function Zt(e, t) {
    var n = e.reactions;
    if (n !== null)
        for (var r = n.length, s = 0; s < r; s++) {
            var i = n[s],
                l = i.f;
            if (d && (l & He) !== 0) {
                ge.add(i);
                continue
            }
            var f = (l & R) === 0;
            if (f && x(i, t), (l & E) !== 0) {
                var u = i;
                M ?.delete(u), (l & te) === 0 && (l & P && (i.f |= te), Zt(u, z))
            } else f && ((l & W) !== 0 && B !== null && B.add(i), re(i))
        }
}
const wr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

function me(e) {
    if (typeof e != "object" || e === null || ye in e) return e;
    const t = Sn(e);
    if (t !== xn && t !== Tn) return e;
    var n = new Map,
        r = mn(e),
        s = K(0),
        i = de,
        l = h => {
            if (de === i) return h();
            var o = p,
                a = de;
            O(null), Ot(i);
            var c = h();
            return O(o), Ot(a), c
        };
    r && (n.set("length", K(e.length)), d && (e = gr(e)));
    var f = "";
    let u = !1;

    function _(h) {
        if (!u) {
            u = !0, f = h, Y(s, `${f} version`);
            for (const [o, a] of n) Y(a, fe(f, o));
            u = !1
        }
    }
    return new Proxy(e, {
        defineProperty(h, o, a) {
            (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Yn();
            var c = n.get(o);
            return c === void 0 ? c = l(() => {
                var v = K(a.value);
                return n.set(o, v), d && typeof o == "string" && Y(v, fe(f, o)), v
            }) : Z(c, a.value, !0), !0
        },
        deleteProperty(h, o) {
            var a = n.get(o);
            if (a === void 0) {
                if (o in h) {
                    const c = l(() => K(b));
                    n.set(o, c), Ee(s), d && Y(c, fe(f, o))
                }
            } else Z(a, b), Ee(s);
            return !0
        },
        get(h, o, a) {
            if (o === ye) return e;
            if (d && o === Pt) return _;
            var c = n.get(o),
                v = o in h;
            if (c === void 0 && (!v || ue(h, o) ?.writable) && (c = l(() => {
                    var m = me(v ? h[o] : b),
                        G = K(m);
                    return d && Y(G, fe(f, o)), G
                }), n.set(o, c)), c !== void 0) {
                var w = U(c);
                return w === b ? void 0 : w
            }
            return Reflect.get(h, o, a)
        },
        getOwnPropertyDescriptor(h, o) {
            var a = Reflect.getOwnPropertyDescriptor(h, o);
            if (a && "value" in a) {
                var c = n.get(o);
                c && (a.value = U(c))
            } else if (a === void 0) {
                var v = n.get(o),
                    w = v ?.v;
                if (v !== void 0 && w !== b) return {
                    enumerable: !0,
                    configurable: !0,
                    value: w,
                    writable: !0
                }
            }
            return a
        },
        has(h, o) {
            if (o === ye) return !0;
            var a = n.get(o),
                c = a !== void 0 && a.v !== b || Reflect.has(h, o);
            if (a !== void 0 || y !== null && (!c || ue(h, o) ?.writable)) {
                a === void 0 && (a = l(() => {
                    var w = c ? me(h[o]) : b,
                        m = K(w);
                    return d && Y(m, fe(f, o)), m
                }), n.set(o, a));
                var v = U(a);
                if (v === b) return !1
            }
            return c
        },
        set(h, o, a, c) {
            var v = n.get(o),
                w = o in h;
            if (r && o === "length")
                for (var m = a; m < v.v; m += 1) {
                    var G = n.get(m + "");
                    G !== void 0 ? Z(G, b) : m in h && (G = l(() => K(b)), n.set(m + "", G), d && Y(G, fe(f, m)))
                }
            if (v === void 0)(!w || ue(h, o) ?.writable) && (v = l(() => K(void 0)), d && Y(v, fe(f, o)), Z(v, me(a)), n.set(o, v));
            else {
                w = v.v !== b;
                var wn = l(() => me(a));
                Z(v, wn)
            }
            var mt = Reflect.getOwnPropertyDescriptor(h, o);
            if (mt ?.set && mt.set.call(c, a), !w) {
                if (r && typeof o == "string") {
                    var bt = n.get("length"),
                        et = Number(o);
                    Number.isInteger(et) && et >= bt.v && Z(bt, et + 1)
                }
                Ee(s)
            }
            return !0
        },
        ownKeys(h) {
            U(s);
            var o = Reflect.ownKeys(h).filter(v => {
                var w = n.get(v);
                return w === void 0 || w.v !== b
            });
            for (var [a, c] of n) c.v !== b && !(a in h) && o.push(a);
            return o
        },
        setPrototypeOf() {
            Hn()
        }
    })
}

function fe(e, t) {
    return typeof t == "symbol" ? `${e}[Symbol(${t.description??""})]` : wr.test(t) ? `${e}.${t}` : /^\d+$/.test(t) ? `${e}[${t}]` : `${e}['${t}']`
}

function rt(e) {
    try {
        if (e !== null && typeof e == "object" && ye in e) return e[ye]
    } catch {}
    return e
}
const $r = new Set(["copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift"]);

function gr(e) {
    return new Proxy(e, {
        get(t, n, r) {
            var s = Reflect.get(t, n, r);
            return $r.has(n) ? function(...i) {
                pr();
                var l = s.apply(this, i);
                return Kt(), l
            } : s
        }
    })
}

function mr() {
    const e = Array.prototype,
        t = Array.__svelte_cleanup;
    t && t();
    const {
        indexOf: n,
        lastIndexOf: r,
        includes: s
    } = e;
    e.indexOf = function(i, l) {
        const f = n.call(this, i, l);
        if (f === -1) {
            for (let u = l ?? 0; u < this.length; u += 1)
                if (rt(this[u]) === i) {
                    tt("array.indexOf(...)");
                    break
                }
        }
        return f
    }, e.lastIndexOf = function(i, l) {
        const f = r.call(this, i, l ?? this.length - 1);
        if (f === -1) {
            for (let u = 0; u <= (l ?? this.length - 1); u += 1)
                if (rt(this[u]) === i) {
                    tt("array.lastIndexOf(...)");
                    break
                }
        }
        return f
    }, e.includes = function(i, l) {
        const f = s.call(this, i, l);
        if (!f) {
            for (let u = 0; u < this.length; u += 1)
                if (rt(this[u]) === i) {
                    tt("array.includes(...)");
                    break
                }
        }
        return f
    }, Array.__svelte_cleanup = () => {
        e.indexOf = n, e.lastIndexOf = r, e.includes = s
    }
}
var kt, $t, Jt, Xt;

function ot() {
    if (kt === void 0) {
        kt = window, $t = /Firefox/.test(navigator.userAgent);
        var e = Element.prototype,
            t = Node.prototype,
            n = Text.prototype;
        Jt = ue(t, "firstChild").get, Xt = ue(t, "nextSibling").get, Et(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Et(n) && (n.__t = void 0), d && (e.__svelte_meta = null, mr())
    }
}

function Qe(e = "") {
    return document.createTextNode(e)
}

function Ve(e) {
    return Jt.call(e)
}

function le(e) {
    return Xt.call(e)
}

function Jr(e, t) {
    if (!S) return Ve(e);
    var n = Ve(g);
    return n === null && (n = g.appendChild(Qe())), ne(n), n
}

function Xr(e, t = 1, n = !1) {
    let r = S ? g : e;
    for (var s; t--;) s = r, r = le(r);
    if (!S) return r;
    if (n && r ?.nodeType !== Rn) {
        var i = Qe();
        return r === null ? s ?.after(i) : r.before(i), ne(i), i
    }
    return ne(r), r
}

function br(e) {
    e.textContent = ""
}

function Qt(e) {
    var t = p,
        n = y;
    O(null), L(null);
    try {
        return e()
    } finally {
        O(t), L(n)
    }
}

function Er(e) {
    y === null && (p === null && In(e), Mn()), he && Pn(e)
}

function xr(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function q(e, t, n) {
    var r = y;
    if (d)
        for (; r !== null && (r.f & He) !== 0;) r = r.parent;
    r !== null && (r.f & J) !== 0 && (e |= J);
    var s = {
        ctx: A,
        deps: null,
        nodes: null,
        f: e | R | P,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: r,
        b: r && r.b,
        prev: null,
        teardown: null,
        wv: 0,
        ac: null
    };
    if (d && (s.component_function = Re), n) try {
        ke(s), s.f |= Ke
    } catch (f) {
        throw F(s), f
    } else t !== null && re(s);
    var i = s;
    if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && (i.f & _e) === 0 && (i = i.first, (e & W) !== 0 && (e & Ye) !== 0 && i !== null && (i.f |= Ye)), i !== null && (i.parent = r, r !== null && xr(i, r), p !== null && (p.f & E) !== 0 && (e & ie) === 0)) {
        var l = p;
        (l.effects ??= []).push(i)
    }
    return s
}

function gt() {
    return p !== null && !j
}

function Tr(e) {
    const t = q(Ge, null, !1);
    return x(t, k), t.teardown = e, t
}

function Sr(e) {
    Er("$effect"), d && H(e, "name", {
        value: "$effect"
    });
    var t = y.f,
        n = !p && (t & se) !== 0 && (t & Ke) === 0;
    if (n) {
        var r = A;
        (r.e ??= []).push(e)
    } else return en(e)
}

function en(e) {
    return q(Le | An, e, !1)
}

function kr(e) {
    I.ensure();
    const t = q(ie | _e, e, !0);
    return () => {
        F(t)
    }
}

function Ar(e) {
    I.ensure();
    const t = q(ie | _e, e, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? Ie(t, () => {
            F(t), r(void 0)
        }) : (F(t), r(void 0))
    })
}

function Qr(e) {
    return q(Le, e, !1)
}

function Or(e) {
    return q(Ze | _e, e, !0)
}

function tn(e, t = 0) {
    return q(Ge | t, e, !0)
}

function es(e, t = [], n = [], r = []) {
    cr(r, t, n, s => {
        q(Ge, () => e(...s.map(U)), !0)
    })
}

function Rr(e, t = 0) {
    var n = q(W | t, e, !0);
    return d && (n.dev_stack = Te), n
}

function oe(e) {
    return q(se | _e, e, !0)
}

function nn(e) {
    var t = e.teardown;
    if (t !== null) {
        const n = he,
            r = p;
        At(!0), O(null);
        try {
            t.call(null)
        } finally {
            At(n), O(r)
        }
    }
}

function rn(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; n !== null;) {
        const s = n.ac;
        s !== null && Qt(() => {
            s.abort(pe)
        });
        var r = n.next;
        (n.f & ie) !== 0 ? n.parent = null : F(n, t), n = r
    }
}

function Nr(e) {
    for (var t = e.first; t !== null;) {
        var n = t.next;
        (t.f & se) === 0 && F(t), t = n
    }
}

function F(e, t = !0) {
    var n = !1;
    (t || (e.f & Dt) !== 0) && e.nodes !== null && e.nodes.end !== null && (Cr(e.nodes.start, e.nodes.end), n = !0), rn(e, t && !n), ze(e, 0), x(e, X);
    var r = e.nodes && e.nodes.t;
    if (r !== null)
        for (const i of r) i.stop();
    nn(e);
    var s = e.parent;
    s !== null && s.first !== null && sn(e), d && (e.component_function = null), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null
}

function Cr(e, t) {
    for (; e !== null;) {
        var n = e === t ? null : le(e);
        e.remove(), e = n
    }
}

function sn(e) {
    var t = e.parent,
        n = e.prev,
        r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function Ie(e, t, n = !0) {
    var r = [];
    ln(e, r, !0);
    var s = () => {
            n && F(e), t && t()
        },
        i = r.length;
    if (i > 0) {
        var l = () => --i || s();
        for (var f of r) f.out(l)
    } else s()
}

function ln(e, t, n) {
    if ((e.f & J) === 0) {
        e.f ^= J;
        var r = e.nodes && e.nodes.t;
        if (r !== null)
            for (const f of r)(f.is_global || n) && t.push(f);
        for (var s = e.first; s !== null;) {
            var i = s.next,
                l = (s.f & Ye) !== 0 || (s.f & se) !== 0 && (e.f & W) !== 0;
            ln(s, t, l ? n : !1), s = i
        }
    }
}

function Dr(e, t) {
    if (e.nodes)
        for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
            var s = n === r ? null : le(n);
            t.append(n), n = s
        }
}
let ce = !1;

function We(e) {
    ce = e
}
let he = !1;

function At(e) {
    he = e
}
let p = null,
    j = !1;

function O(e) {
    p = e
}
let y = null;

function L(e) {
    y = e
}
let V = null;

function fn(e) {
    p !== null && (V === null ? V = [e] : V.push(e))
}
let T = null,
    N = 0,
    C = null;

function Pr(e) {
    C = e
}
let on = 1,
    Se = 0,
    de = Se;

function Ot(e) {
    de = e
}

function an() {
    return ++on
}

function Ce(e) {
    var t = e.f;
    if ((t & R) !== 0) return !0;
    if (t & E && (e.f &= ~te), (t & z) !== 0) {
        for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
            var i = n[s];
            if (Ce(i) && Gt(i), i.wv > e.wv) return !0
        }(t & P) !== 0 && M === null && x(e, k)
    }
    return !1
}

function un(e, t, n = !0) {
    var r = e.reactions;
    if (r !== null && !V ?.includes(e))
        for (var s = 0; s < r.length; s++) {
            var i = r[s];
            (i.f & E) !== 0 ? un(i, t, !1) : t === i && (n ? x(i, R) : (i.f & k) !== 0 && x(i, z), re(i))
        }
}

function at(e) {
    var t = T,
        n = N,
        r = C,
        s = p,
        i = V,
        l = A,
        f = j,
        u = de,
        _ = e.f;
    T = null, N = 0, C = null, p = (_ & (se | ie)) === 0 ? e : null, V = null, we(e.ctx), j = !1, de = ++Se, e.ac !== null && (Qt(() => {
        e.ac.abort(pe)
    }), e.ac = null);
    try {
        e.f |= st;
        var h = e.fn,
            o = h(),
            a = e.deps;
        if (T !== null) {
            var c;
            if (ze(e, N), a !== null && N > 0)
                for (a.length = N + T.length, c = 0; c < T.length; c++) a[N + c] = T[c];
            else e.deps = a = T;
            if (gt() && (e.f & P) !== 0)
                for (c = N; c < a.length; c++)(a[c].reactions ??= []).push(e)
        } else a !== null && N < a.length && (ze(e, N), a.length = N);
        if (Ft() && C !== null && !j && a !== null && (e.f & (E | z | R)) === 0)
            for (c = 0; c < C.length; c++) un(C[c], e);
        return s !== null && s !== e && (Se++, C !== null && (r === null ? r = C : r.push(...C))), (e.f & Q) !== 0 && (e.f ^= Q), o
    } catch (v) {
        return Yt(v)
    } finally {
        e.f ^= st, T = t, N = n, C = r, p = s, V = i, we(l), j = f, de = u
    }
}

function Mr(e, t) {
    let n = t.reactions;
    if (n !== null) {
        var r = bn.call(n, e);
        if (r !== -1) {
            var s = n.length - 1;
            s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
        }
    }
    if (n === null && (t.f & E) !== 0 && (T === null || !T.includes(t))) {
        var i = t;
        (i.f & P) !== 0 && (i.f ^= P, i.f &= ~te), pt(i), ft(i), ze(i, 0)
    }
}

function ze(e, t) {
    var n = e.deps;
    if (n !== null)
        for (var r = t; r < n.length; r++) Mr(e, n[r])
}

function ke(e) {
    var t = e.f;
    if ((t & X) === 0) {
        x(e, k);
        var n = y,
            r = ce;
        if (y = e, ce = !0, d) {
            var s = Re;
            xt(e.component_function);
            var i = Te;
            qe(e.dev_stack ?? Te)
        }
        try {
            (t & (W | Ct)) !== 0 ? Nr(e) : rn(e), nn(e);
            var l = at(e);
            e.teardown = typeof l == "function" ? l : null, e.wv = on;
            var f;
            d && Jn && (e.f & R) !== 0 && e.deps
        } finally {
            ce = r, y = n, d && (xt(s), qe(i))
        }
    }
}

function U(e) {
    var t = e.f,
        n = (t & E) !== 0;
    if (p !== null && !j) {
        var r = y !== null && (y.f & X) !== 0;
        if (!r && !V ?.includes(e)) {
            var s = p.deps;
            if ((p.f & st) !== 0) e.rv < Se && (e.rv = Se, T === null && s !== null && s[N] === e ? N++ : T === null ? T = [e] : T.includes(e) || T.push(e));
            else {
                (p.deps ??= []).push(e);
                var i = e.reactions;
                i === null ? e.reactions = [p] : i.includes(p) || i.push(p)
            }
        }
    }
    if (d && hr.delete(e), he && ee.has(e)) return ee.get(e);
    if (n) {
        var l = e;
        if (he) {
            var f = l.v;
            return ((l.f & k) === 0 && l.reactions !== null || dn(l)) && (f = yt(l)), ee.set(l, f), f
        }
        var u = (l.f & P) === 0 && !j && p !== null && (ce || (p.f & P) !== 0),
            _ = l.deps === null;
        Ce(l) && (u && (l.f |= P), Gt(l)), u && !_ && cn(l)
    }
    if (M ?.has(e)) return M.get(e);
    if ((e.f & Q) !== 0) throw e.v;
    return e.v
}

function cn(e) {
    if (e.deps !== null) {
        e.f |= P;
        for (const t of e.deps)(t.reactions ??= []).push(e), (t.f & E) !== 0 && (t.f & P) === 0 && cn(t)
    }
}

function dn(e) {
    if (e.v === b) return !0;
    if (e.deps === null) return !1;
    for (const t of e.deps)
        if (ee.has(t) || (t.f & E) !== 0 && dn(t)) return !0;
    return !1
}

function hn(e) {
    var t = j;
    try {
        return j = !0, e()
    } finally {
        j = t
    }
}
const _n = new Set,
    ut = new Set;

function ts(e) {
    for (var t = 0; t < e.length; t++) _n.add(e[t]);
    for (var n of ut) n(e)
}
let Rt = null;

function Me(e) {
    var t = this,
        n = t.ownerDocument,
        r = e.type,
        s = e.composedPath ?.() || [],
        i = s[0] || e.target;
    Rt = e;
    var l = 0,
        f = Rt === e && e.__root;
    if (f) {
        var u = s.indexOf(f);
        if (u !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var _ = s.indexOf(t);
        if (_ === -1) return;
        u <= _ && (l = u)
    }
    if (i = s[l] || e.target, i !== t) {
        H(e, "currentTarget", {
            configurable: !0,
            get() {
                return i || n
            }
        });
        var h = p,
            o = y;
        O(null), L(null);
        try {
            for (var a, c = []; i !== null;) {
                var v = i.assignedSlot || i.parentNode || i.host || null;
                try {
                    var w = i["__" + r];
                    w != null && (!i.disabled || e.target === i) && w.call(i, e)
                } catch (m) {
                    a ? c.push(m) : a = m
                }
                if (e.cancelBubble || v === t || v === null) break;
                i = v
            }
            if (a) {
                for (let m of c) queueMicrotask(() => {
                    throw m
                });
                throw a
            }
        } finally {
            e.__root = t, delete e.currentTarget, O(h), L(o)
        }
    }
}

function Ir(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content
}

function ct(e, t) {
    var n = y;
    n.nodes === null && (n.nodes = {
        start: e,
        end: t,
        a: null,
        t: null
    })
}

function ns(e, t) {
    var n = (t & 2) !== 0,
        r, s = !e.startsWith("<!>");
    return () => {
        if (S) return ct(g, null), g;
        r === void 0 && (r = Ir(s ? e : "<!>" + e), r = Ve(r));
        var i = n || $t ? document.importNode(r, !0) : r.cloneNode(!0);
        return ct(i, i), i
    }
}

function jr(e, t) {
    if (S) {
        var n = y;
        ((n.f & Ke) === 0 || n.nodes.end === null) && (n.nodes.end = g), Mt();
        return
    }
    e !== null && e.before(t)
}
const Fr = ["touchstart", "touchmove"];

function Lr(e) {
    return Fr.includes(e)
}

function vn(e, t) {
    return pn(e, t)
}

function Yr(e, t) {
    ot(), t.intro = t.intro ?? !1;
    const n = t.target,
        r = S,
        s = g;
    try {
        for (var i = Ve(n); i && (i.nodeType !== Je || i.data !== "[");) i = le(i);
        if (!i) throw xe;
        De(!0), ne(i);
        const l = pn(e, { ...t,
            anchor: i
        });
        return De(!1), l
    } catch (l) {
        if (l instanceof Error && l.message.split(`
`).some(f => f.startsWith("https://svelte.dev/e/"))) throw l;
        return l !== xe && console.warn("Failed to hydrate: ", l), t.recover === !1 && Fn(), ot(), br(n), De(!1), vn(e, t)
    } finally {
        De(r), ne(s)
    }
}
const ve = new Map;

function pn(e, {
    target: t,
    anchor: n,
    props: r = {},
    events: s,
    context: i,
    intro: l = !0
}) {
    ot();
    var f = new Set,
        u = o => {
            for (var a = 0; a < o.length; a++) {
                var c = o[a];
                if (!f.has(c)) {
                    f.add(c);
                    var v = Lr(c);
                    t.addEventListener(c, Me, {
                        passive: v
                    });
                    var w = ve.get(c);
                    w === void 0 ? (document.addEventListener(c, Me, {
                        passive: v
                    }), ve.set(c, 1)) : ve.set(c, w + 1)
                }
            }
        };
    u(En(_n)), ut.add(u);
    var _ = void 0,
        h = Ar(() => {
            var o = n ?? t.appendChild(Qe());
            return ar(o, {
                pending: () => {}
            }, a => {
                if (i) {
                    er({});
                    var c = A;
                    c.c = i
                }
                if (s && (r.$$events = s), S && ct(a, null), _ = e(a, r) || {}, S && (y.nodes.end = g, g === null || g.nodeType !== Je || g.data !== "]")) throw _t(), xe;
                i && tr()
            }), () => {
                for (var a of f) {
                    t.removeEventListener(a, Me);
                    var c = ve.get(a);
                    --c === 0 ? (document.removeEventListener(a, Me), ve.delete(a)) : ve.set(a, c)
                }
                ut.delete(u), o !== n && o.parentNode ?.removeChild(o)
            }
        });
    return dt.set(_, h), _
}
let dt = new WeakMap;

function Hr(e, t) {
    const n = dt.get(e);
    return n ? (dt.delete(e), n(t)) : (d && (ye in e ? Vn() : Un()), Promise.resolve())
}
if (d) {
    let e = function(t) {
        if (!(t in globalThis)) {
            let n;
            Object.defineProperty(globalThis, t, {
                configurable: !0,
                get: () => {
                    if (n !== void 0) return n;
                    Ln(t)
                },
                set: r => {
                    n = r
                }
            })
        }
    };
    e("$state"), e("$effect"), e("$derived"), e("$inspect"), e("$props"), e("$bindable")
}

function rs(e) {
    A === null && Nn("onMount"), Sr(() => {
        const t = hn(e);
        if (typeof t == "function") return t
    })
}

function qr(e) {
    return new Br(e)
}
class Br {#e;
    #t;
    constructor(t) {
        var n = new Map,
            r = (i, l) => {
                var f = yr(l, !1, !1);
                return n.set(i, f), f
            };
        const s = new Proxy({ ...t.props || {},
            $$events: {}
        }, {
            get(i, l) {
                return U(n.get(l) ?? r(l, Reflect.get(i, l)))
            },
            has(i, l) {
                return l === On ? !0 : (U(n.get(l) ?? r(l, Reflect.get(i, l))), Reflect.has(i, l))
            },
            set(i, l, f) {
                return Z(n.get(l) ?? r(l, f), f), Reflect.set(i, l, f)
            }
        });
        this.#t = (t.hydrate ? Yr : vn)(t.component, {
            target: t.target,
            anchor: t.anchor,
            props: s,
            context: t.context,
            intro: t.intro ?? !1,
            recover: t.recover
        }), (!t ?.props ?.$$host || t.sync === !1) && ir(), this.#e = s.$$events;
        for (const i of Object.keys(this.#t)) i === "$set" || i === "$destroy" || i === "$on" || H(this, i, {
            get() {
                return this.#t[i]
            },
            set(l) {
                this.#t[i] = l
            },
            enumerable: !0
        });
        this.#t.$set = i => {
            Object.assign(s, i)
        }, this.#t.$destroy = () => {
            Hr(this.#t)
        }
    }
    $set(t) {
        this.#t.$set(t)
    }
    $on(t, n) {
        this.#e[t] = this.#e[t] || [];
        const r = (...s) => n.call(this, ...s);
        return this.#e[t].push(r), () => {
            this.#e[t] = this.#e[t].filter(s => s !== r)
        }
    }
    $destroy() {
        this.#t.$destroy()
    }
}
let yn;
typeof HTMLElement == "function" && (yn = class extends HTMLElement {
    $$ctor;
    $$s;
    $$c;
    $$cn = !1;
    $$d = {};
    $$r = !1;
    $$p_d = {};
    $$l = {};
    $$l_u = new Map;
    $$me;
    constructor(e, t, n) {
        super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({
            mode: "open"
        })
    }
    addEventListener(e, t, n) {
        if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
            const r = this.$$c.$on(e, t);
            this.$$l_u.set(t, r)
        }
        super.addEventListener(e, t, n)
    }
    removeEventListener(e, t, n) {
        if (super.removeEventListener(e, t, n), this.$$c) {
            const r = this.$$l_u.get(t);
            r && (r(), this.$$l_u.delete(t))
        }
    }
    async connectedCallback() {
        if (this.$$cn = !0, !this.$$c) {
            let e = function(r) {
                return s => {
                    const i = document.createElement("slot");
                    r !== "default" && (i.name = r), jr(s, i)
                }
            };
            if (await Promise.resolve(), !this.$$cn || this.$$c) return;
            const t = {},
                n = Ur(this);
            for (const r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
            for (const r of this.attributes) {
                const s = this.$$g_p(r.name);
                s in this.$$d || (this.$$d[s] = je(s, r.value, this.$$p_d, "toProp"))
            }
            for (const r in this.$$p_d) !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
            this.$$c = qr({
                component: this.$$ctor,
                target: this.shadowRoot || this,
                props: { ...this.$$d,
                    $$slots: t,
                    $$host: this
                }
            }), this.$$me = kr(() => {
                tn(() => {
                    this.$$r = !0;
                    for (const r of Fe(this.$$c)) {
                        if (!this.$$p_d[r] ?.reflect) continue;
                        this.$$d[r] = this.$$c[r];
                        const s = je(r, this.$$d[r], this.$$p_d, "toAttribute");
                        s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s)
                    }
                    this.$$r = !1
                })
            });
            for (const r in this.$$l)
                for (const s of this.$$l[r]) {
                    const i = this.$$c.$on(r, s);
                    this.$$l_u.set(s, i)
                }
            this.$$l = {}
        }
    }
    attributeChangedCallback(e, t, n) {
        this.$$r || (e = this.$$g_p(e), this.$$d[e] = je(e, n, this.$$p_d, "toProp"), this.$$c ?.$set({
            [e]: this.$$d[e]
        }))
    }
    disconnectedCallback() {
        this.$$cn = !1, Promise.resolve().then(() => {
            !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0)
        })
    }
    $$g_p(e) {
        return Fe(this.$$p_d).find(t => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e
    }
});

function je(e, t, n, r) {
    const s = n[e] ?.type;
    if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
    if (r === "toAttribute") switch (s) {
        case "Object":
        case "Array":
            return t == null ? null : JSON.stringify(t);
        case "Boolean":
            return t ? "" : null;
        case "Number":
            return t ?? null;
        default:
            return t
    } else switch (s) {
        case "Object":
        case "Array":
            return t && JSON.parse(t);
        case "Boolean":
            return t;
        case "Number":
            return t != null ? +t : t;
        default:
            return t
    }
}

function Ur(e) {
    const t = {};
    return e.childNodes.forEach(n => {
        t[n.slot || "default"] = !0
    }), t
}

function ss(e, t, n, r, s, i) {
    let l = class extends yn {
        constructor() {
            super(e, n, s), this.$$p_d = t
        }
        static get observedAttributes() {
            return Fe(t).map(f => (t[f].attribute || f).toLowerCase())
        }
    };
    return Fe(t).forEach(f => {
        H(l.prototype, f, {
            get() {
                return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f]
            },
            set(u) {
                u = je(f, u, t), this.$$d[f] = u;
                var _ = this.$$c;
                if (_) {
                    var h = ue(_, f) ?.get;
                    h ? _[f] = u : _.$set({
                        [f]: u
                    })
                }
            }
        })
    }), r.forEach(f => {
        H(l.prototype, f, {
            get() {
                return this.$$c ?.[f]
            }
        })
    }), e.element = l, l
}
export {
    ns as A, Jr as B, es as C, d as D, jr as E, Xr as F, Kr as G, rs as H, Vr as N, tr as a, Z as b, ss as c, zt as d, y as e, X as f, U as g, ir as h, he as i, Sr as j, me as k, H as l, yr as m, zr as n, hn as o, er as p, Kn as q, S as r, K as s, Tr as t, Zr as u, Mt as v, Qr as w, Sn as x, Wr as y, ts as z
};