import "./disclose-version-DsnmJJEf.js";
import {
    t as _,
    l as g,
    n as f,
    m as q,
    D as w,
    g as L,
    b as $,
    c as T,
    p as D,
    a as H
} from "./custom-element-CoS1ay5O.js";
import {
    s as S,
    g as M,
    i as R
} from "./isMobile-BMnRsYGr.js";
import {
    g as p
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    f as C
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as P
} from "./renderSection-CFhfkgyb.js";
import {
    u as I
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
let d = Symbol();

function N(o, s, u) {
    const r = u[s] ??= {
        store: null,
        source: q(void 0),
        unsubscribe: f
    };
    if (w && (r.source.label = s), r.store !== o && !(d in u))
        if (r.unsubscribe(), r.store = o ?? null, o == null) r.source.v = void 0, r.unsubscribe = f;
        else {
            var a = !0;
            r.unsubscribe = S(o, c => {
                a ? r.source.v = c : $(r.source, c)
            }), a = !1
        }
    return o && d in u ? M(o) : L(r.source)
}

function Q() {
    const o = {};

    function s() {
        _(() => {
            for (var u in o) o[u].unsubscribe();
            g(o, d, {
                enumerable: !1,
                value: !0
            })
        })
    }
    return [o, s]
}

function U(o, s) {
    D(s, !0);
    const u = () => N(R, "$isMobile", r),
        [r, a] = Q(),
        {
            refs: c
        } = I({
            host: s.$$host,
            refs: {
                mains: ["product-card__main"],
                thumbnails: ["product-card__thumbnail"],
                thumbnailsRoot: "product-card__thumbnails",
                swatches: {
                    ref: ["product-card__swatch"],
                    required: !1
                },
                quickBuyButtons: ["product-card-quick-buy"]
            }
        }, (t, e) => {
            t.swatches ?.forEach(n => {
                n.addEventListener("click", k, {
                    signal: e
                })
            }), t.thumbnailsRoot ?.addEventListener("mouseenter", b, {
                signal: e
            }), t.thumbnailsRoot ?.addEventListener("mouseleave", h, {
                signal: e
            }), t.thumbnailsRoot ?.addEventListener("click", v, {
                signal: e
            }), t.thumbnailsRoot ?.addEventListener("keydown", n => E(n), {
                signal: e
            }), t.quickBuyButtons ?.forEach(n => n.addEventListener("click", y, {
                signal: e
            })), t.quickBuyButtons ?.forEach(n => n.addEventListener("mouseenter", m, {
                signal: e
            })), t.quickBuyButtons ?.forEach(n => n.addEventListener("focus", m, {
                signal: e
            }))
        }),
        i = () => {
            c.mains ?.forEach(t => {
                const e = t.dataset.active !== "true";
                t.classList.toggle("is-active", e), t.dataset.active = String(e)
            }), c.thumbnails ?.forEach(t => {
                const e = t.dataset.active !== "true";
                t.classList.toggle("is-active", e), t.dataset.active = String(e)
            })
        },
        b = () => {
            u() || i()
        },
        h = () => {
            u() || i()
        },
        v = t => {
            u() && (t.preventDefault(), t.stopPropagation(), i())
        },
        E = t => {
            t.key === "Enter" && (t.preventDefault(), i())
        },
        k = async t => {
            t.preventDefault();
            const n = t.currentTarget.getAttribute("data-for");
            if (!n) return;
            const B = await C({
                sections: ["product-card"],
                url: n
            });
            await P({
                sections: B,
                host: s.$$host
            }).rerender()
        },
        l = t => t.currentTarget ?.dataset.productHandle ?.trim() || null,
        y = async t => {
            t.preventDefault();
            const e = l(t);
            if (!e) return;
            await p("quickBuy") ?.open ?.(e)
        },
        m = t => {
            const e = l(t);
            if (!e) return;
            p("quickBuy") ?.prefetch ?.(e)
        };
    H(), a()
}
customElements.define("product-card", T(U, {}, [], [], !1));