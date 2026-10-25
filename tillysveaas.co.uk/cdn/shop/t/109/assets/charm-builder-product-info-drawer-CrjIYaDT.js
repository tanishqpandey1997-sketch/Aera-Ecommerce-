import "./disclose-version-DsnmJJEf.js";
import {
    c as I,
    p as S,
    a as T
} from "./custom-element-CoS1ay5O.js";
import {
    E as y
} from "./embla-carousel.esm-CMPFBS9o.js";
import {
    f as x
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as A
} from "./renderSection-CFhfkgyb.js";
import {
    u as C
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as D,
    W,
    a as M,
    M as N,
    b as V,
    c as k
} from "./productGallery.math-DOPkyrt9.js";
import {
    b as q
} from "./charm-builder.svelte-WMHNSnyo.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function P(B, f) {
    S(f, !0);
    const w = "charm-builder-product-info-drawer";
    let o = null;
    const m = async e => await x({
            sections: [w],
            url: `/products/${encodeURIComponent(e)}`
        }, {
            cache: !0
        }),
        h = () => {
            o ?.destroy(), o = null
        },
        p = (e, r) => {
            e.forEach((t, n) => {
                const a = n === r;
                t.classList.toggle("is-active", a), t.setAttribute("aria-hidden", a ? "false" : "true")
            })
        },
        b = (e, r) => {
            e.forEach((t, n) => {
                const a = n === r;
                t.classList.toggle("is-active", a), t.setAttribute("aria-current", a ? "true" : "false")
            })
        },
        _ = ({
            thumbsViewport: e,
            thumbButtons: r,
            activeThumbIndex: t,
            smooth: n
        }) => {
            if (!e || r.length <= N) return;
            const a = V(t, r.length),
                l = r[a],
                u = r[0];
            if (!l || !u) return;
            const s = k(l, u);
            e.scrollTo({ ...s,
                behavior: n ? "smooth" : "auto"
            })
        },
        {
            refs: i
        } = C({
            host: f.$$host,
            refs: {
                gallery: {
                    ref: "charm-builder-product-info-drawer__gallery",
                    required: !1
                },
                mainViewport: {
                    ref: "charm-builder-product-info-drawer__main-viewport",
                    required: !1
                },
                mainSlides: {
                    ref: ["charm-builder-product-info-drawer__main-slide"],
                    required: !1
                },
                thumbsViewport: {
                    ref: "charm-builder-product-info-drawer__thumbs-viewport",
                    required: !1
                },
                thumbButtons: {
                    ref: ["charm-builder-product-info-drawer__thumb"],
                    required: !1
                },
                arrowPrev: {
                    ref: "charm-builder-product-info-drawer__arrow-prev",
                    required: !1
                },
                arrowNext: {
                    ref: "charm-builder-product-info-drawer__arrow-next",
                    required: !1
                }
            }
        }, (e, r) => {
            v(r)
        }),
        v = e => {
            h();
            const r = i.mainSlides ?? [],
                t = i.thumbButtons ?? [],
                n = r.length || Number(i.gallery ?.dataset.mediaCount ?? 0),
                a = n > 1;
            if (!i.mainViewport || n === 0) return;
            if (n === 1) {
                p(r, 0);
                return
            }
            o = y(i.mainViewport, {
                align: "start",
                loop: a,
                watchDrag: a,
                startIndex: 0
            });
            const l = d => {
                if (!o) return;
                const c = o.selectedScrollSnap();
                p(r, c), b(t, c), _({
                    thumbsViewport: i.thumbsViewport ?? void 0,
                    thumbButtons: t,
                    activeThumbIndex: c,
                    smooth: d
                })
            };
            o.on("select", () => l(!0)), o.on("reInit", () => l(!1)), i.arrowPrev ?.addEventListener("click", () => {
                o ?.scrollPrev()
            }, {
                signal: e
            }), i.arrowNext ?.addEventListener("click", () => {
                o ?.scrollNext()
            }, {
                signal: e
            });
            let u = !1,
                s = null;
            const L = () => {
                    u = !1, s = null
                },
                g = () => {
                    s !== null && window.clearTimeout(s), s = window.setTimeout(L, M)
                };
            i.mainViewport.addEventListener("wheel", d => {
                if (!o || !a) return;
                const c = D(d);
                Math.abs(c) < W || u || (u = !0, c > 0 ? o.scrollNext() : o.scrollPrev(), g())
            }, {
                signal: e,
                passive: !0
            }), t.forEach((d, c) => {
                d.addEventListener("click", () => {
                    o ?.scrollTo(c)
                }, {
                    signal: e
                })
            }), l(!1), e.addEventListener("abort", () => {
                s !== null && window.clearTimeout(s)
            }, {
                once: !0
            }), e.addEventListener("abort", h, {
                once: !0
            })
        };
    var E = {
        prefetch: async e => {
            if (e) try {
                await m(e)
            } catch (r) {
                console.error("[charm-builder-product-info-drawer] Failed to prefetch", {
                    productHandle: e,
                    error: r
                })
            }
        },
        open: async e => {
            if (e) try {
                const r = await m(e);
                await A({
                    sections: r,
                    host: f.$$host
                }).rerender();
                const t = q();
                t ?.open || t ?.showModal()
            } catch (r) {
                console.error("[charm-builder-product-info-drawer] Failed to open", {
                    productHandle: e,
                    error: r
                })
            }
        }
    };
    return T(E)
}
customElements.define("charm-builder-product-info-drawer", I(P, {}, [], ["prefetch", "open"], !1));