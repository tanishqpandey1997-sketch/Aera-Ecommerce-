import "./disclose-version-DsnmJJEf.js";
import {
    c,
    p as u,
    a as m
} from "./custom-element-CoS1ay5O.js";
import {
    f as l
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as a
} from "./renderSection-CFhfkgyb.js";
import {
    u as f
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as p
} from "./charm-builder.svelte-WMHNSnyo.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function g(b, t) {
    u(t, !0), f({
        host: t.$$host,
        refs: {
            optionInputs: {
                ref: ["option-input"],
                required: !1
            }
        }
    }, (e, n) => {
        e.optionInputs ?.forEach(r => {
            r.addEventListener("change", s, {
                signal: n
            })
        })
    });
    const s = e => {
            const n = e.currentTarget,
                r = Number(n.dataset.variantId),
                i = n.dataset.productHandle;
            !Number.isFinite(r) || !i || (p().selectChainLength ?.({
                variantId: r
            }), o(i, r))
        },
        h = () => {
            t.$$host.setAttribute("data-hidden", "true")
        },
        o = async (e, n) => {
            t.$$host.setAttribute("data-loading", "true"), t.$$host.setAttribute("data-hidden", "false");
            const r = n ? `/products/${e}?variant=${n}` : `/products/${e}`,
                i = await l({
                    sections: ["charm-builder-chain-length-options"],
                    url: r
                });
            await a({
                sections: i,
                host: t.$$host
            }).rerender(), t.$$host.setAttribute("data-loading", "false")
        };
    var d = {
        hide: h,
        renderChainLengthOptions: o,
        rerender: async e => {
            await a({
                sections: e,
                host: t.$$host
            }).rerender()
        }
    };
    return m(d)
}
customElements.define("charm-builder-chain-length-options", c(g, {}, [], ["hide", "renderChainLengthOptions", "rerender"], !1));