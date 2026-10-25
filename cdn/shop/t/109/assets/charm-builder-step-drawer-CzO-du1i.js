import "./disclose-version-DsnmJJEf.js";
import {
    c as F,
    p as q,
    j as m,
    g as K,
    u as $,
    a as N
} from "./custom-element-CoS1ay5O.js";
import {
    r as z
} from "./renderSection-CFhfkgyb.js";
import {
    u as j
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as s,
    c as p
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    g as G,
    a as H
} from "./pricing-DNZUsTnz.js";
import {
    g as V
} from "./utils-DyCH2Yz3.js";
import {
    i as J
} from "./utils-fhgEClr6.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function O(Q, c) {
    q(c, !0);
    const f = $(() => {
        const e = s();
        return H(e.getForm())
    });
    m(() => {
        const e = i();
        s().getActiveStepIndex() === e ? B() : x()
    }), m(() => {
        h(), P(), E(), T(), I()
    });
    const {
        refs: r
    } = j({
        host: c.$$host,
        refs: {
            productCards: {
                ref: ["product-card"],
                required: !1
            },
            closeMobileButton: "close-button",
            trigger: {
                ref: "drawer-trigger",
                required: !1
            },
            dialog: {
                ref: "step-drawer-dialog",
                required: !1
            },
            selectButton: "select-button",
            nextStepButton: "next-step-button",
            previewButton: "preview-button",
            previewButtonText: "preview-button-text",
            maxCharmsLabel: {
                ref: "max-charms-label",
                required: !1
            }
        }
    }, (e, t) => {
        e.trigger ?.addEventListener("click", g, {
            signal: t
        }), e.closeMobileButton ?.addEventListener("click", a, {
            signal: t
        }), e.nextStepButton ?.addEventListener("click", S, {
            signal: t
        }), e.selectButton ?.addEventListener("click", A, {
            signal: t
        }), e.previewButton ?.addEventListener("click", C, {
            signal: t
        }), c.$$host.addEventListener("charm-builder-step-filters:change", L, {
            signal: t
        }), h()
    }), g = () => {
        r.dialog ?.showModal()
    }, b = (e, t = !1) => {
        r.productCards ?.forEach(o => {
            o.productId === e ? o.checkProduct() : t && o.uncheckProduct()
        })
    }, y = e => {
        r.productCards ?.forEach(t => {
            t.productId === e && t.uncheckProduct()
        })
    }, v = () => {
        r.productCards ?.forEach(e => {
            e.uncheckProduct()
        })
    }, B = () => {
        c.$$host.setAttribute("data-active", "true")
    }, x = () => {
        c.$$host.setAttribute("data-active", "false")
    }, k = e => {
        c.$$host.setAttribute("data-mobile-open", "true"), p().hideExpandToggle(), requestAnimationFrame(() => {
            e ?.keyboard && r.trigger && r.trigger.focus()
        })
    }, a = () => {
        c.$$host.setAttribute("data-mobile-open", "false"), p().showExpandToggle()
    }, i = () => {
        const e = c.$$host.getAttribute("data-index");
        return Number(e)
    }, l = () => c.$$host.getAttribute("data-type"), w = e => {
        const t = new Set(e);
        r.productCards ?.forEach(o => {
            o.productId && t.has(o.productId) ? o.checkProduct() : o.uncheckProduct()
        })
    }, C = () => {
        s().openReviewDesignDrawer()
    }, P = () => {
        if (!r.previewButton || !r.previewButtonText) return;
        const e = r.previewButton.dataset.label,
            t = r.previewButton.dataset.currency;
        !e || !t || (r.previewButtonText.textContent = G(e, K(f), t))
    }, S = e => {
        s().goToNextStep({
            keyboard: e.detail === 0
        })
    }, A = () => {
        a()
    }, h = () => {
        const e = i(),
            t = l(),
            o = s().getForm(),
            n = V(o, t, e);
        !r.selectButton || !r.previewButton || !r.nextStepButton || (d(r.selectButton, n.select), d(r.nextStepButton, n.nextStep), d(r.previewButton, n.preview))
    }, d = (e, t) => {
        e.disabled = t === "disabled", e.dataset.state = t
    }, E = () => {
        const e = i(),
            t = l(),
            o = s().getForm();
        if (r.maxCharmsLabel && t === "charms") {
            const n = J(o, e - 4),
                u = c.$$host.dataset.maxCharmsLabel ?? "";
            if (!n) return;
            r.maxCharmsLabel.innerHTML = u.replace("{{ count }}", String(n.pinpoints.length))
        }
    }, L = e => {
        M(e.detail ?.colorKey)
    }, T = () => {
        if (l() !== "chain") return;
        const e = s().getForm().type;
        r.productCards ?.forEach(t => {
            const o = t.getAttribute("data-chain-type") ?? "";
            !e || o === e ? t.removeAttribute("data-type-filter-hidden") : t.setAttribute("data-type-filter-hidden", "true")
        })
    }, I = () => {
        const e = new Set((r.productCards ?? []).filter(t => !t.hasAttribute("data-type-filter-hidden")).flatMap(t => (t.getAttribute("data-color-keys") ?? "").split(",").map(n => n.trim()).filter(Boolean)));
        c.$$host.querySelectorAll(".charm-builder-step-filters__list [data-color-key]").forEach(t => {
            const o = t.dataset.colorKey;
            if (!o) return;
            const n = t.closest("li") ?? t;
            n.hidden = !e.has(o)
        })
    }, M = e => {
        const t = e ?? "";
        r.productCards ?.forEach(o => {
            const u = (o.getAttribute("data-color-keys") ?? "").split(",").map(D => D.trim()).filter(Boolean) ?? [];
            !t || u.includes(t) ? o.removeAttribute("data-filter-hidden") : o.setAttribute("data-filter-hidden", "true")
        })
    };
    var _ = {
        checkProduct: b,
        uncheckProduct: y,
        uncheckAll: v,
        openMobileDialog: k,
        closeMobileDialog: a,
        syncCheckedProducts: w,
        rerender: async e => {
            await z({
                sections: e,
                host: c.$$host
            }).rerender()
        }
    };
    return N(_)
}
customElements.define("charm-builder-step-drawer", F(O, {}, [], ["checkProduct", "uncheckProduct", "uncheckAll", "openMobileDialog", "closeMobileDialog", "syncCheckedProducts", "rerender"], !1));