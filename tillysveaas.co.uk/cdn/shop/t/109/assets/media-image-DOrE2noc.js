import "./disclose-version-DsnmJJEf.js";
import {
    c as r,
    p as i,
    a as d
} from "./custom-element-CoS1ay5O.js";
import {
    u as o
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function c(m, t) {
    i(t, !0);
    const {
        refs: a
    } = o({
        host: t.$$host,
        refs: {
            image: "media-image-element"
        }
    });
    var s = {
        loadMedia: () => {
            const e = a.image;
            e && e.dataset.deferredMediaLoaded !== "true" && (e.dataset.srcset && e.getAttribute("srcset") !== e.dataset.srcset && (e.srcset = e.dataset.srcset), e.dataset.src && e.getAttribute("src") !== e.dataset.src && (e.src = e.dataset.src), e.loading = "eager", e.fetchPriority = "high", e.dataset.deferredMediaLoaded = "true")
        }
    };
    return d(s)
}
customElements.define("media-image", r(c, {}, [], ["loadMedia"], !1));