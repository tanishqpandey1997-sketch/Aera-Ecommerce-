import "./disclose-version-DsnmJJEf.js";
import {
    c as i,
    p as c,
    a as m,
    h as a
} from "./custom-element-CoS1ay5O.js";
import {
    p as d
} from "./props-BfMGM-PW.js";
import {
    f as u
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as o
} from "./renderSection-CFhfkgyb.js";
import {
    u as f
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function p(h, t) {
    c(t, !0);
    let e = d(t, "sectionId");
    f({
        host: t.$$host
    });
    var s = {
        rerender: async r => {
            if (r) await o({
                sections: r,
                host: t.$$host
            }).rerender();
            else {
                if (!e()) return;
                const n = await u({
                    sections: [e()]
                });
                await o({
                    sections: n,
                    host: t.$$host,
                    sectionId: e()
                }).rerender()
            }
        },
        get sectionId() {
            return e()
        },
        set sectionId(r) {
            e(r), a()
        }
    };
    return m(s)
}
customElements.define("section-two-columns", i(p, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));