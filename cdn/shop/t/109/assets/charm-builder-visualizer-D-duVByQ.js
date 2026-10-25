import "./disclose-version-DsnmJJEf.js";
import {
    c as f,
    p as g,
    j as b,
    a as B
} from "./custom-element-CoS1ay5O.js";
import {
    g as s
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    u as v
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function E(A, o) {
    g(o, !0);
    const {
        refs: e
    } = v({
        host: o.$$host,
        refs: {
            expandButton: "charm-builder-visualizer-expand-toggle",
            canvas: "charm-builder-visualizer-canvas",
            imagesTree: "charm-builder-images-tree",
            infoBanner: "charm-builder-visualizer-info-banner"
        }
    }, (t, n) => {
        t.expandButton ?.addEventListener("click", u, {
            signal: n
        })
    });
    b(() => {
        const t = s() ?.getForm ?.();
        t ?.charms && t.charms.length > 1 ? m() : h(), c(!!t ?.chain)
    });
    const d = 500;
    let a = null;
    const u = () => {
            const t = s().getForm(),
                r = !(e.canvas ?.getAttribute("data-expanded") === "true");
            e.canvas ?.setAttribute("data-expanded", String(r)), e.expandButton ?.setAttribute("aria-expanded", String(r)), e.canvas ?.setAttribute("data-no-connector", String(!t.connector));
            const i = r ? e.expandButton ?.dataset.collapseLabel : e.expandButton ?.dataset.expandLabel;
            i && e.expandButton ?.setAttribute("aria-label", i), a && clearTimeout(a), a = setTimeout(() => {
                e.imagesTree ?.syncHandlePositionsWithMountedNodes(), a = null
            }, d)
        },
        c = t => {
            const n = e.canvas ?.querySelector(".charm-builder-visualizer__media");
            n && (n.setAttribute("data-hidden", String(t)), e.expandButton && (e.expandButton.dataset.emptyForm = String(!t)))
        },
        l = () => {
            e.expandButton && (e.expandButton.dataset.hidden = "false")
        },
        p = () => {
            e.expandButton && (e.expandButton.dataset.hidden = "true")
        },
        m = () => {
            e.infoBanner ?.setAttribute("data-hidden", "false")
        },
        h = () => {
            e.infoBanner ?.setAttribute("data-hidden", "true")
        };
    var x = {
        showExpandToggle: l,
        hideExpandToggle: p
    };
    return B(x)
}
customElements.define("charm-builder-visualizer", f(E, {}, [], ["showExpandToggle", "hideExpandToggle"], !1));