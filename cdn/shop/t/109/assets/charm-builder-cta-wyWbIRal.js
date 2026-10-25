import "./disclose-version-DsnmJJEf.js";
import {
    c as l,
    p as m,
    j as d,
    g as o,
    u as f,
    a as b
} from "./custom-element-CoS1ay5O.js";
import {
    u as h
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as n
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    g,
    a as p
} from "./pricing-DNZUsTnz.js";
import "./collectRefs-DFE6zV31.js";

function C(B, r) {
    m(r, !0);
    const {
        refs: e
    } = h({
        host: r.$$host,
        refs: {
            ctaLabel: "cta-button-text",
            ctaButton: "cta-button"
        }
    }, (t, a) => {
        e.ctaButton ?.addEventListener("click", u, {
            signal: a
        })
    }), c = f(() => {
        const t = n();
        return p(t.getForm())
    });
    d(() => {
        s(), i()
    });
    const s = () => {
            if (!e.ctaLabel || !e.ctaButton) return;
            const t = e.ctaButton.dataset.label,
                a = e.ctaButton.dataset.currency;
            !t || !a || (e.ctaLabel.textContent = g(t, o(c), a))
        },
        i = () => {
            const t = n().getForm();
            r.$$host.dataset.hidden = String(!t.chain)
        },
        u = t => {
            t.preventDefault(), !(o(c) <= 0) && n().openReviewDesignDrawer ?.()
        };
    b()
}
customElements.define("charm-builder-cta", l(C, {}, [], [], !1));