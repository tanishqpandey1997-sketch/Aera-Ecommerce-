import "./disclose-version-DsnmJJEf.js";
import {
    c as n,
    p as u,
    a as i
} from "./custom-element-CoS1ay5O.js";
import {
    f as d
} from "./fetch-sections-Cuvl7RxI.js";
import {
    g as m
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    r as p
} from "./renderSection-CFhfkgyb.js";
import {
    u as f
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function l(h, o) {
    u(o, !0), f({
        host: o.$$host,
        refs: {
            swatches: {
                ref: ["product-card__swatch"],
                required: !1
            },
            quickBuyButtons: ["product-card-quick-buy"]
        }
    }, (r, c) => {
        r.swatches ?.forEach(t => {
            t.addEventListener("click", e, {
                signal: c
            })
        }), r.quickBuyButtons ?.forEach(t => {
            t.addEventListener("click", a, {
                signal: c
            })
        })
    });
    const e = async r => {
            r.preventDefault();
            const t = r.currentTarget.dataset.for;
            if (!t) return;
            const s = await d({
                sections: ["product-card-cart"],
                url: t
            });
            await p({
                sections: s,
                host: o.$$host,
                sectionId: "product-card-cart"
            }).rerender()
        },
        a = async r => {
            r.preventDefault();
            const t = r.currentTarget.dataset.productHandle ?.trim();
            t && await m("quickBuy") ?.open ?.(t)
        };
    i()
}
customElements.define("product-card-cart", n(l, {}, [], [], !1));