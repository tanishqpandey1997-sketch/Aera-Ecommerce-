import "./disclose-version-DsnmJJEf.js";
import {
    c as S,
    p as x,
    j as C,
    a as y
} from "./custom-element-CoS1ay5O.js";
import {
    g as r
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    r as I
} from "./renderSection-CFhfkgyb.js";
import {
    u as v
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as h
} from "./utils-DXLervcz.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
import "./utils-fhgEClr6.js";

function A(L, e) {
    x(e, !0), C(() => {
        const t = r().getForm(),
            a = r().getActiveStepIndex(),
            n = c(),
            s = d(),
            i = t.type === "bracelet" && s === "charms" ? n - 1 : n;
        o.stepCount && (o.stepCount.textContent = String(i)), o.loopLabel && (o.loopLabel.hidden = t.type === "bracelet");
        const l = h(t, a, n, s, m());
        u(l)
    });
    const {
        refs: o
    } = v({
        host: e.$$host,
        refs: {
            metaContainer: "step-meta",
            stepCount: "step-count",
            loopLabel: "loop-label"
        }
    }, () => {
        e.$$host.addEventListener("click", p)
    }), u = t => {
        b(t.metaInfo), e.$$host.setAttribute("data-completed", String(t.completed)), e.$$host.setAttribute("data-active", String(t.active)), e.$$host.setAttribute("data-hidden", String(t.hidden)), e.$$host.setAttribute("data-disabled", String(t.disabled))
    }, p = t => {
        const a = r().getForm(),
            n = r().getActiveStepIndex(),
            s = c(),
            i = d();
        if (h(a, n, s, i, m()).disabled) return;
        const g = t.detail === 0;
        r().setActiveStepIndex(c(), {
            keyboard: g
        })
    }, b = t => {
        o.metaContainer ?.replaceChildren(), t.forEach(a => {
            if (!a) return;
            const n = document.createElement("p");
            n.textContent = String(a), o.metaContainer ?.appendChild(n)
        })
    }, d = () => e.$$host.getAttribute("data-type"), c = () => Number(e.$$host.getAttribute("data-index")), m = () => ({
        maxCharms: e.$$host.dataset.maxCharmsLabel,
        connectorOptional: e.$$host.dataset.connectorOptionalLabel,
        connectorMandatory: e.$$host.dataset.connectorMandatoryLabel,
        connectorNone: e.$$host.dataset.connectorNoneLabel
    });
    var f = {
        rerender: async t => {
            await I({
                sections: t,
                host: e.$$host
            }).rerender()
        }
    };
    return y(f)
}
customElements.define("charm-builder-step", S(A, {}, [], ["rerender"], !1));