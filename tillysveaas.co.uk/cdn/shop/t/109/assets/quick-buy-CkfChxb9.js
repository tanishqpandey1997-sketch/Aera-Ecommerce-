import "./disclose-version-DsnmJJEf.js";
import {
    c as v,
    p as w,
    a as C
} from "./custom-element-CoS1ay5O.js";
import {
    f as m
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as f
} from "./renderSection-CFhfkgyb.js";
import {
    u as S
} from "./useInit.svelte-ItIJhPfT.js";
import {
    i as B
} from "./initScrollShadow-mJZveRX8.js";
import {
    g as s
} from "./getGlobalElement-DI3uduNr.js";
import {
    g as E
} from "./getGtmLineItemProperties-DtKjLVqr.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
import "./items-DNi4Eu8t.js";

function x(A, i) {
    w(i, !0);
    const {
        refs: r
    } = S({
        host: i.$$host,
        refs: {
            thumbnails: ["quick-buy__thumbnail"],
            slides: ["quick-buy__slide"],
            form: "quick-buy__form",
            options: ["quick-buy__options"],
            button: "quick-buy__button",
            giftCardForm: {
                ref: "gift-card-recipient-form",
                required: !1
            }
        }
    }, (t, e) => {
        t.thumbnails ?.forEach(o => {
            o.addEventListener("click", p, {
                signal: e
            })
        }), t.form ?.addEventListener("change", h, {
            signal: e
        }), t.form ?.addEventListener("submit", k, {
            signal: e
        }), t.form && B(t.form, t.form, e)
    }), u = async t => await m({
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
            await f({
                sections: e,
                host: i.$$host
            }).rerender(), s("dialogQuickBuy") ?.showModal ?.()
        } catch (e) {
            console.error("[quick-buy] Failed to open quick buy dialog", {
                productHandle: t,
                error: e
            })
        }
    }, g = () => {
        const t = i.$$host;
        if (!t) return;
        t.querySelector('[data-js="quick-buy__submit"]:not([disabled])') ?.focus()
    }, h = async t => {
        const e = t.target,
            {
                variantId: o,
                productHandle: n
            } = e.dataset;
        if (!n) return;
        let a = `/products/${n}`;
        o && (a += `?variant=${o}`);
        const c = await m({
            sections: ["quick-buy"],
            url: a
        }, {
            cache: !0
        });
        await f({
            sections: c,
            host: i.$$host
        }).rerender(), g()
    }, p = t => {
        const o = t.currentTarget.getAttribute("data-index");
        o && y(o)
    }, y = t => {
        r.slides ?.forEach(e => {
            e.classList.toggle("is-active", e.getAttribute("data-index") === t)
        }), r.thumbnails ?.forEach(e => {
            const o = e.getAttribute("data-index") === t;
            e.classList.toggle("is-active", o), e.tabIndex = o ? -1 : 0
        })
    }, k = async t => {
        t.preventDefault();
        const e = t.currentTarget;
        if (!e || !e.reportValidity()) return;
        const o = new FormData(e).get("id") ?.toString().trim(),
            n = new FormData(e).get("quantity") ?.toString(),
            a = parseInt(n || "", 10) || 1;
        if (!o) return;
        r ?.button && (r.button.dataset.loading = "true");
        const c = r.giftCardForm ?.getProperties ?.(),
            _ = E(i.$$host),
            d = { ...c,
                ..._
            };
        await s("cartContext", {
            required: !1
        }) ?.onAddToCart ?.([{
            id: o,
            quantity: a,
            properties: Object.keys(d).length ? d : void 0
        }]), s("dialogQuickBuy") ?.close ?.(), r ?.button && (r.button.dataset.loading = "false")
    };
    var q = {
        prefetch: l,
        open: b
    };
    return C(q)
}
customElements.define("quick-buy", v(x, {}, [], ["prefetch", "open"], !1));