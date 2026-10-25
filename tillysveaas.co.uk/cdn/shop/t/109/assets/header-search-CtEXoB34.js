import "./disclose-version-DsnmJJEf.js";
import {
    c as g,
    p as f,
    a as m
} from "./custom-element-CoS1ay5O.js";
import {
    g as p
} from "./getGlobalElement-DI3uduNr.js";
import {
    c as y
} from "./createHeaderFlyoutController-CIjgsquX.js";
import {
    u as C
} from "./useInit.svelte-ItIJhPfT.js";
import "./headerFlyoutState-CTRNbteD.js";
import "./collectRefs-DFE6zV31.js";

function E(F, a) {
    f(a, !0);
    const c = "Escape",
        o = "tab-search";
    let n = null;
    const {
        refs: t
    } = C({
        host: a.$$host,
        refs: {
            trigger: "header-search-trigger",
            flyoutContent: "header-search-flyout-content",
            search: "search"
        }
    }, (r, s) => {
        n = p("mainHeader", {
            required: !1
        }), t.trigger ?.addEventListener("click", e.requestToggle, {
            signal: s
        }), window.addEventListener("keydown", d, {
            signal: s
        })
    }), e = y({
        tabId: o,
        getFlyoutContent: () => t.flyoutContent,
        getExpandedTrigger: () => t.trigger,
        onAfterStateUpdate: r => {
            r && t.search ?.focusInput()
        }
    }), l = e.getFlyoutHeight, u = e.handleContentChange, d = r => {
        r.key !== c || n ?.headerState.activeTabId !== o || e.requestClose()
    }, i = e.updateFlyoutStatus;
    var h = {
        getFlyoutHeight: l,
        handleContentChange: u,
        updateFlyoutStatus: i
    };
    return m(h)
}
customElements.define("header-search", g(E, {}, [], ["getFlyoutHeight", "handleContentChange", "updateFlyoutStatus"], !1));