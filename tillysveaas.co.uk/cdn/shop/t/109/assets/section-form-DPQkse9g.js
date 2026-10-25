import "./disclose-version-DsnmJJEf.js";
import {
    c as o,
    p as n,
    a as s
} from "./custom-element-CoS1ay5O.js";
import {
    r as m
} from "./renderSection-CFhfkgyb.js";
import {
    u as a
} from "./useInit.svelte-ItIJhPfT.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function i(c, e) {
    n(e, !0), a({
        host: e.$$host
    });
    var r = {
        rerender: async t => {
            await m({
                sections: t,
                host: e.$$host
            }).rerender()
        }
    };
    return s(r)
}
customElements.define("section-form", o(i, {}, [], ["rerender"], !1));