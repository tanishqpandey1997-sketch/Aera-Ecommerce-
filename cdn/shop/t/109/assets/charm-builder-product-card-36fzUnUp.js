import "./disclose-version-DsnmJJEf.js";
import {
    c as A,
    p,
    a as v
} from "./custom-element-CoS1ay5O.js";
import {
    u as E
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as y,
    a as h
} from "./charm-builder.svelte-WMHNSnyo.js";
import "./collectRefs-DFE6zV31.js";

function B(C, t) {
    p(t, !0);
    const {
        refs: a
    } = E({
        host: t.$$host,
        refs: {
            productInfoButton: {
                ref: "product-info-button",
                required: !1
            }
        }
    }, (e, r) => {
        o(), t.$$host.addEventListener("click", d, {
            signal: r
        }), t.$$host.addEventListener("keyup", I, {
            signal: r
        }), a.productInfoButton ?.addEventListener("click", g, {
            signal: r
        }), a.productInfoButton ?.addEventListener("mouseenter", u, {
            signal: r
        }), a.productInfoButton ?.addEventListener("focus", u, {
            signal: r
        })
    }), f = () => {
        t.$$host.setAttribute("data-checked", "true"), o()
    }, m = () => {
        t.$$host.setAttribute("data-checked", "false"), o()
    }, l = () => {
        t.$$host.setAttribute("data-disabled", "true"), o()
    }, b = () => {
        t.$$host.removeAttribute("data-disabled"), o()
    }, o = () => {
        t.$$host.setAttribute("aria-pressed", String(t.$$host.getAttribute("data-checked") === "true")), t.$$host.setAttribute("aria-disabled", String(t.$$host.getAttribute("data-disabled") === "true"))
    }, d = () => {
        const e = t.$$host.getAttribute("data-checked") === "true",
            r = t.$$host.getAttribute("data-charm-group-index"),
            i = r ? Number(r) : void 0,
            c = n();
        if (!c) return;
        const s = y();
        if (e) {
            if (c.type === "chain") return;
            s.unselectProduct({
                productId: c.productId,
                type: c.type,
                charmGroupIndex: i
            })
        } else s.selectProduct({ ...c,
            charmGroupIndex: i
        })
    }, I = e => {
        e.key === "Enter" && d()
    }, g = async e => {
        e.preventDefault(), e.stopPropagation();
        const r = n();
        r ?.handle && await h() ?.open ?.(r.handle)
    }, u = () => {
        const e = n();
        e ?.handle && h() ?.prefetch ?.(e.handle)
    }, n = () => {
        const e = t.$$host.getAttribute("data-configurator-item");
        if (e) return JSON.parse(e)
    }, k = n() ?.productId;
    var P = {
        checkProduct: f,
        uncheckProduct: m,
        disableProduct: l,
        enableProduct: b,
        productId: k
    };
    return v(P)
}
customElements.define("charm-builder-product-card", A(B, {}, [], ["checkProduct", "uncheckProduct", "disableProduct", "enableProduct", "productId"], !1));