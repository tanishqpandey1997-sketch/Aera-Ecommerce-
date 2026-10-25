import "./disclose-version-DsnmJJEf.js";
import {
    c as b,
    p as A,
    j as E,
    a as P,
    h as N,
    b as y,
    s as h,
    g as c,
    u as q
} from "./custom-element-CoS1ay5O.js";
import {
    p as _
} from "./props-BfMGM-PW.js";
import {
    d as x
} from "./trackers-BKtP3_by.js";
import {
    r as T
} from "./state-hxloTOT8.js";
import {
    r as s
} from "./renderSection-CFhfkgyb.js";
import {
    u as V
} from "./useFiltersAndSort.svelte-JUkgDo6A.js";
import {
    u as M
} from "./usePagination.svelte-BfeRd_-A.js";
import {
    u as U
} from "./useInit.svelte-ItIJhPfT.js";
import "./items-DNi4Eu8t.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";
import "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";

function $(j, n) {
    A(n, !0);
    let l = h(1),
        g = h(1),
        a = _(n, "sectionId");
    const {
        refs: e
    } = U({
        host: n.$$host,
        refs: {
            grid: "grid",
            quickLinks: "quick-links",
            activeLink: "active-quick-link",
            emptyStateClearButton: "clear-filters",
            controlsForm: "controls-form",
            controlsClearButton: "controls-clear",
            controlsApplyButton: "controls-apply",
            openControlsDialogButton: "open-controls-dialog",
            controlsDialog: "dialog-collection-controls",
            paginationButtons: ["pagination-page"],
            paginationPrevButton: "pagination-prev",
            paginationNextButton: "pagination-next"
        }
    }, (t, o) => {
        v(), T(() => x(n.$$host), o), y(l, Number(t ?.grid ?.getAttribute("data-page") || 1), !0), y(g, Number(t ?.grid ?.getAttribute("data-total-pages") || 1), !0), t ?.openControlsDialogButton ?.addEventListener("click", k, {
            signal: o
        }), t ?.emptyStateClearButton ?.addEventListener("click", f, {
            signal: o
        }), t ?.controlsForm ?.addEventListener("change", B, {
            signal: o
        }), t ?.controlsClearButton ?.addEventListener("click", f, {
            signal: o
        }), t ?.controlsApplyButton ?.addEventListener("click", L, {
            signal: o
        }), t ?.paginationButtons ?.forEach(r => {
            r.addEventListener("click", p, {
                signal: o
            })
        }), t ?.paginationPrevButton ?.addEventListener("click", p, {
            signal: o
        }), t ?.paginationNextButton ?.addEventListener("click", p, {
            signal: o
        })
    }), u = M({
        sectionIds: [a()],
        get totalPages() {
            return c(g)
        },
        get currentPage() {
            return c(l)
        },
        urlSync: !0
    }), i = V({
        sectionIds: [a()],
        urlSync: !1
    }), d = q(() => u.loading || i.loading);
    E(() => {
        e ?.controlsForm && (e.controlsForm.style.opacity = i.loading ? "0.7" : "1", e.controlsForm.style.pointerEvents = i.loading ? "none" : "auto")
    });

    function v() {
        const t = e.quickLinks;
        if (!t) return;
        const o = e.activeLink;
        if (!o) return;
        const r = t.style.scrollBehavior;
        t.style.scrollBehavior = "auto";
        const I = t.getBoundingClientRect(),
            C = o.getBoundingClientRect(),
            w = parseInt(getComputedStyle(t).paddingLeft, 10) || 0,
            S = C.left - I.left + t.scrollLeft - w;
        t.scrollLeft = S, t.classList.add("is-ready"), t.style.scrollBehavior = r
    }

    function k(t) {
        t.preventDefault(), e.controlsDialog ?.showModal()
    }

    function m(t) {
        t.preventDefault(), e.controlsDialog ?.close()
    }
    async function L(t) {
        if (t.preventDefault(), !(!e ?.controlsForm || c(d))) try {
            const o = new FormData(e.controlsForm),
                r = await i.apply(o);
            await s({
                sections: r,
                host: n.$$host,
                sectionId: a()
            }).rerender(), i.syncUrl(o), m(t)
        } catch (o) {
            console.error("Failed to apply filters and sort:", o)
        }
    }
    async function B(t) {
        if (t.preventDefault(), !(!e ?.controlsForm || c(d))) try {
            const o = new FormData(e.controlsForm),
                r = await i.apply(o);
            await s({
                sections: r,
                host: n.$$host,
                sectionId: a()
            }).rerenderRef("controls-form")
        } catch (o) {
            console.error("Failed to apply filters and sort:", o)
        }
    }
    async function f(t) {
        if (t.preventDefault(), !c(d)) try {
            const o = await i.clearAll();
            await s({
                sections: o,
                host: n.$$host,
                sectionId: a()
            }).rerender(), i.syncUrl(), m(t)
        } catch (o) {
            console.error("Failed to clear controls:", o)
        }
    }

    function p(t) {
        t.preventDefault();
        const o = t.currentTarget,
            r = Number(o.getAttribute("data-page"));
        Number.isFinite(r) && F(r)
    }
    async function F(t) {
        if (!u.loading && t !== c(l)) try {
            const o = await u.goToPage(t);
            await s({
                sections: o,
                host: n.$$host,
                sectionId: a()
            }).rerender(), n.$$host.scrollIntoView({
                block: "start"
            })
        } catch (o) {
            console.error("Failed to change page:", o)
        }
    }
    var D = {
        get sectionId() {
            return a()
        },
        set sectionId(t) {
            a(t), N()
        }
    };
    return P(D)
}
customElements.define("main-collection", b($, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    },
    isFirst: {
        attribute: "is-first",
        type: "String"
    },
    isPriority: {
        attribute: "is-priority",
        type: "String"
    }
}, [], [], !1));