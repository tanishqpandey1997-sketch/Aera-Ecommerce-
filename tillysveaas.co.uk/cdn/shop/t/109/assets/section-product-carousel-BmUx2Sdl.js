import "./disclose-version-DsnmJJEf.js";
import {
    c as _,
    p as v,
    a as w,
    h as y
} from "./custom-element-CoS1ay5O.js";
import {
    p as k
} from "./props-BfMGM-PW.js";
import {
    f as L
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as u
} from "./renderSection-CFhfkgyb.js";
import {
    u as b
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function E(I, s) {
    v(s, !0);
    const f = ".product-card__media, .section-product-carousel__link-card > :first-child";
    let o = k(s, "sectionId");
    const d = () => {
            const {
                track: e,
                arrowPrev: r,
                arrowNext: i
            } = c;
            if (!e) return;
            const t = e.scrollWidth - e.clientWidth;
            r && (r.disabled = e.scrollLeft <= 1), i && (i.disabled = e.scrollLeft >= t - 1)
        },
        {
            refs: c
        } = b({
            host: s.$$host,
            refs: {
                track: {
                    ref: "section-product-carousel__track",
                    required: !1
                },
                arrowPrev: {
                    ref: "section-product-carousel__arrow-prev",
                    required: !1
                },
                arrowNext: {
                    ref: "section-product-carousel__arrow-next",
                    required: !1
                }
            }
        }, (e, r) => {
            m(r)
        }),
        m = e => {
            const r = s.$$host,
                i = r.classList.contains("section-product-carousel--carousel");
            if (!c.track || !i) return;
            const t = c.track,
                l = h => {
                    t.scrollBy({
                        left: t.clientWidth * h
                    })
                };
            c.arrowPrev ?.addEventListener("click", () => l(-1), {
                signal: e
            }), c.arrowNext ?.addEventListener("click", () => l(1), {
                signal: e
            }), t.addEventListener("scroll", d, {
                passive: !0,
                signal: e
            });
            const n = t.querySelector(f),
                a = new ResizeObserver(() => {
                    n ?.offsetHeight && (r.style.setProperty("--media-height", `${n.offsetHeight}px`), r.classList.add("is-arrows-ready")), d()
                });
            a.observe(t), n && a.observe(n), e.addEventListener("abort", () => a.disconnect(), {
                once: !0
            })
        };
    var p = {
        rerender: async e => {
            if (e) await u({
                sections: e,
                host: s.$$host
            }).rerender();
            else {
                if (!o()) return;
                const r = await L({
                    sections: [o()]
                });
                await u({
                    sections: r,
                    host: s.$$host,
                    sectionId: o()
                }).rerender()
            }
        },
        get sectionId() {
            return o()
        },
        set sectionId(e) {
            o(e), y()
        }
    };
    return w(p)
}
customElements.define("section-product-carousel", _(E, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));