import "./disclose-version-DsnmJJEf.js";
import {
    c as o,
    p as n,
    a as s
} from "./custom-element-CoS1ay5O.js";
import {
    r as i
} from "./renderSection-CFhfkgyb.js";
import {
    u as m
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function a(c, e) {
    n(e, !0), m({
        host: e.$$host
    });
    var r = {
        rerender: async t => {
            await i({
                sections: t,
                host: e.$$host
            }).rerender()
        }
    };
    return s(r)
}
customElements.define("section-simple-hero", o(a, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));