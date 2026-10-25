import "./disclose-version-DsnmJJEf.js";
import {
    c as s,
    p as a,
    a as c,
    h as m
} from "./custom-element-CoS1ay5O.js";
import {
    p as f
} from "./props-BfMGM-PW.js";
import {
    f as d
} from "./fetch-sections-Cuvl7RxI.js";
import {
    r as o
} from "./renderSection-CFhfkgyb.js";
import {
    u as p
} from "./useInit.svelte-ItIJhPfT.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function u(h, t) {
    a(t, !0);
    let e = f(t, "sectionId");
    p({
        host: t.$$host
    });
    var i = {
        rerender: async r => {
            if (r) await o({
                sections: r,
                host: t.$$host
            }).rerender();
            else {
                if (!e()) return;
                const n = await d({
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
            e(r), m()
        }
    };
    return c(i)
}
customElements.define("main-footer", s(u, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));