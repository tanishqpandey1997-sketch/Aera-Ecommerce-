import "./disclose-version-DsnmJJEf.js";
import {
    c as d,
    p as u,
    a as f,
    h as g
} from "./custom-element-CoS1ay5O.js";
import {
    p as h
} from "./props-BfMGM-PW.js";
import {
    f as b
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

function _(y, s) {
    u(s, !0);
    let r = h(s, "sectionId");
    const {
        refs: n
    } = p({
        host: s.$$host,
        refs: {
            thumbnails: ["section-image-gallery__thumbnail"],
            slides: ["section-image-gallery__slide"],
            infos: ["section-image-gallery__info"]
        }
    }, (e, t) => {
        e.thumbnails ?.forEach(i => {
            i.addEventListener("click", c, {
                signal: t
            })
        })
    }), a = async e => {
        if (e) await o({
            sections: e,
            host: s.$$host
        }).rerender();
        else {
            if (!r()) return;
            const t = await b({
                sections: [r()]
            });
            await o({
                sections: t,
                host: s.$$host,
                sectionId: r()
            }).rerender()
        }
    }, c = e => {
        const i = e.currentTarget.getAttribute("data-index");
        i && m(i)
    }, m = e => {
        n.slides ?.forEach(t => {
            t.classList.toggle("is-active", t.getAttribute("data-index") === e)
        }), n.infos ?.forEach(t => {
            t.classList.toggle("is-active", t.getAttribute("data-index") === e)
        }), n.thumbnails ?.forEach(t => {
            const i = t.getAttribute("data-index") === e;
            t.classList.toggle("is-active", i), t.tabIndex = i ? -1 : 0
        })
    };
    var l = {
        rerender: a,
        get sectionId() {
            return r()
        },
        set sectionId(e) {
            r(e), g()
        }
    };
    return f(l)
}
customElements.define("section-image-gallery", d(_, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["rerender"], !1));