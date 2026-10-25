import "./disclose-version-DsnmJJEf.js";
import {
    c as w,
    p as C,
    a as _
} from "./custom-element-CoS1ay5O.js";
import {
    f as d
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as m
} from "./renderSection-CFhfkgyb.js";
import {
    u as E
} from "./useInit.svelte-ItIJhPfT.js";
import {
    i as S
} from "./initScrollShadow-mJZveRX8.js";
import {
    g as c
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    g as x
} from "./getGtmLineItemProperties-DtKjLVqr.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
import "./items-DNi4Eu8t.js";

function A(F, i) {
    C(i, !0);
    const {
        refs: o
    } = E({
        host: i.$$host,
        refs: {
            thumbnails: {
                ref: ["quick-buy__thumbnail"],
                required: !1
            },
            slides: {
                ref: ["quick-buy__slide"],
                required: !1
            },
            form: {
                ref: "quick-buy__form",
                required: !1
            },
            button: {
                ref: "quick-buy__button",
                required: !1
            },
            giftCardForm: {
                ref: "gift-card-recipient-form",
                required: !1
            }
        }
    }, (t, e) => {
        t.thumbnails ?.forEach(r => {
            r.addEventListener("click", h, {
                signal: e
            })
        }), t.form ?.addEventListener("change", p, {
            signal: e
        }), t.form ?.addEventListener("submit", q, {
            signal: e
        }), t.form && S(t.form, t.form, e)
    }), u = async t => await d({
        sections: ["quick-buy"],
        url: `/products/${encodeURIComponent(t)}`
    }, {
        cache: !0
    }), l = async t => {
        if (t) try {
            await u(t)
        } catch (e) {
            console.error("[quick-buy] Failed to prefetch quick buy content", {
                productHandle: t,
                error: e
            })
        }
    }, b = async t => {
        if (t) try {
            const e = await u(t);
            await m({
                sections: e,
                host: i.$$host
            }).rerender(), c("dialogQuickBuy") ?.showModal ?.()
        } catch (e) {
            console.error("[quick-buy] Failed to open quick buy dialog", {
                productHandle: t,
                error: e
            })
        }
    }, g = () => {
        o.button && !o.button.disabled && o.button.focus()
    }, p = async t => {
        const e = t.target,
            {
                variantId: r,
                productHandle: n
            } = e.dataset;
        if (!n) return;
        let a = `/products/${n}`;
        r && (a += `?variant=${r}`);
        const s = await d({
            sections: ["quick-buy"],
            url: a
        }, {
            cache: !0
        });
        await m({
            sections: s,
            host: i.$$host
        }).rerender(), g()
    }, h = t => {
        const r = t.currentTarget.getAttribute("data-index");
        r && y(r)
    }, y = t => {
        o.slides ?.forEach(e => {
            e.classList.toggle("is-active", e.getAttribute("data-index") === t)
        }), o.thumbnails ?.forEach(e => {
            const r = e.getAttribute("data-index") === t;
            e.classList.toggle("is-active", r), e.tabIndex = r ? -1 : 0
        })
    }, q = async t => {
        t.preventDefault();
        const e = t.currentTarget;
        if (!e || !e.reportValidity()) return;
        const r = new FormData(e).get("id") ?.toString().trim(),
            n = new FormData(e).get("quantity") ?.toString(),
            a = parseInt(n || "", 10) || 1;
        if (!r) return;
        o ?.button && (o.button.dataset.loading = "true");
        const s = o.giftCardForm ?.getProperties ?.(),
            v = x(i.$$host),
            f = { ...s,
                ...v
            };
        await c("cartContext", {
            required: !1
        }) ?.onAddToCart ?.([{
            id: r,
            quantity: a,
            properties: Object.keys(f).length ? f : void 0
        }]), c("dialogQuickBuy") ?.close ?.(), o ?.button && (o.button.dataset.loading = "false")
    };
    var k = {
        prefetch: l,
        open: b
    };
    return _(k)
}
customElements.define("quick-buy", w(A, {}, [], ["prefetch", "open"], !1));