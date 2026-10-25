import "./disclose-version-DsnmJJEf.js";
import {
    c as i,
    p as n,
    a as s,
    h as c
} from "./custom-element-CoS1ay5O.js";
import {
    p as a
} from "./props-BfMGM-PW.js";
import {
    r as m
} from "./renderSection-CFhfkgyb.js";
import {
    u as d
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function u(p, e) {
    n(e, !0);
    let t = a(e, "sectionId");
    d({
        host: e.$$host
    });
    var o = {
        rerender: async r => {
            await m({
                sections: r,
                host: e.$$host,
                sectionId: t()
            }).rerender()
        },
        get sectionId() {
            return t()
        },
        set sectionId(r) {
            t(r), c()
        }
    };
    return s(o)
}
customElements.define("section-utility-page", i(u, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));