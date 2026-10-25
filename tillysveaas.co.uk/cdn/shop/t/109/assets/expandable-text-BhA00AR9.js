import "./disclose-version-DsnmJJEf.js";
import {
    c as i,
    p as g,
    a as c
} from "./custom-element-CoS1ay5O.js";
import {
    u as r
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function u(x, e) {
    g(e, !0);
    const {
        refs: t
    } = r({
        host: e.$$host,
        refs: {
            content: "expandable-text__content",
            toggleButton: "expandable-text__toggle",
            toggleButtonText: "expandable-text__toggle-text"
        }
    }, (n, o) => {
        d(o)
    }), s = () => e.$$host.dataset.expandText ?? "Read more", a = () => e.$$host.dataset.collapseText ?? "Read less", l = () => {
        if (!t.content || !t.toggleButton || !t.toggleButtonText) return;
        t.content.classList.contains("is-expanded") ? (t.content.classList.remove("is-expanded"), t.content.classList.add("is-collapsed"), t.toggleButton.setAttribute("aria-expanded", "false"), t.toggleButtonText.textContent = s()) : (t.content.classList.remove("is-collapsed"), t.content.classList.add("is-expanded"), t.toggleButton.setAttribute("aria-expanded", "true"), t.toggleButtonText.textContent = a())
    }, d = n => {
        if (!t.content || !t.toggleButton) return;
        t.content.classList.remove("is-expanded"), t.content.classList.add("is-collapsed"), t.toggleButton.setAttribute("aria-expanded", "false"), t.content.scrollHeight > t.content.clientHeight + 1 ? (t.toggleButton.classList.remove("is-pending"), t.toggleButton.classList.remove("is-hidden"), t.toggleButton.setAttribute("aria-hidden", "false"), t.toggleButton.disabled = !1, t.toggleButton.tabIndex = 0) : (t.toggleButton.classList.remove("is-pending"), t.toggleButton.classList.add("is-hidden"), t.toggleButton.setAttribute("aria-hidden", "true"), t.toggleButton.disabled = !0, t.toggleButton.tabIndex = -1), t.toggleButton.addEventListener("click", l, {
            signal: n
        })
    };
    c()
}
customElements.define("expandable-text", i(u, {}, [], [], !1));