import "./disclose-version-DsnmJJEf.js";
import {
    c as o,
    p as s,
    a as n
} from "./custom-element-CoS1ay5O.js";
import {
    r as i
} from "./renderSection-CFhfkgyb.js";
import {
    u as a
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function c(m, e) {
    s(e, !0), a({
        host: e.$$host
    });
    var t = {
        rerender: async r => {
            await i({
                sections: r,
                host: e.$$host
            }).rerender()
        }
    };
    return n(t)
}
customElements.define("section-stockists-page", o(c, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));