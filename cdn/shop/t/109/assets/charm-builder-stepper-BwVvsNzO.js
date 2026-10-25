import "./disclose-version-DsnmJJEf.js";
import {
    c as o,
    p as s,
    a as m
} from "./custom-element-CoS1ay5O.js";
import {
    r as i
} from "./renderSection-CFhfkgyb.js";
import {
    u as p
} from "./useInit.svelte-ItIJhPfT.js";
import "./charm-builder-step-C8x677lE.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
import "./charm-builder.svelte-WMHNSnyo.js";
import "./utils-DXLervcz.js";
import "./utils-fhgEClr6.js";

function a(n, r) {
    s(r, !0), p({
        host: r.$$host,
        refs: {
            steps: ["charm-builder-step"]
        }
    });
    var e = {
        rerender: async t => {
            await i({
                sections: t,
                host: r.$$host
            }).rerender()
        }
    };
    return m(e)
}
customElements.define("charm-builder-stepper", o(a, {}, [], ["rerender"], !1));