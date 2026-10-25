import "./disclose-version-DsnmJJEf.js";
import {
    c as A,
    p as L,
    s as l,
    k as G,
    j as F,
    g as n,
    a as H,
    b as s
} from "./custom-element-CoS1ay5O.js";
import {
    r as M
} from "./renderSection-CFhfkgyb.js";
import {
    u as O
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as T,
    h as f,
    c as _,
    b as y
} from "./utils-fhgEClr6.js";
import {
    r as h
} from "./reducers-gy7-0n4y.js";
import "./charm-builder-chain-length-header-DTh3Mf5F.js";
import "./morph-CjE7B4pu.js";
import "./collectRefs-DFE6zV31.js";

function N($, u) {
    L(u, !0);
    const {
        refs: t
    } = O({
        host: u.$$host,
        refs: {
            typeStep: "type-step",
            chainStep: "chain-step",
            chainLengthHeader: "chain-length-header",
            chainLengthOptions: "chain-length-options",
            connectorStep: "connector-step",
            charmsSteps: ["charms-step"],
            maxCharmsPopup: "max-charms-popup",
            startFromScratchPopup: "start-from-scratch-popup",
            summaryDrawer: "charm-builder-summary",
            decorativeImage: "decorative-image"
        }
    });
    let r = l(G({
            type: null,
            chain: null,
            connector: null,
            charms: null
        })),
        p = l(1);
    const m = (e, c) => {
            w(e, c), s(p, e, !0)
        },
        g = () => n(p),
        S = () => n(r);
    F(() => {
        D()
    });

    function I(e) {
        s(r, h.selectType(n(r), e), !0), t.chainLengthHeader ?.hide(), t.chainLengthOptions ?.hide(), t.chainStep ?.uncheckAll(), t.connectorStep ?.uncheckAll(), a()
    }
    async function C(e) {
        if (e.type) {
            if (e.type === "chain") {
                if ((n(r).connector || f(n(r))) && !await t.startFromScratchPopup ?.open()) return;
                s(r, h.selectChain(n(r), e), !0), t.chainStep ?.checkProduct(e.productId, !0), e.variants.length > 1 ? (t.chainLengthHeader ?.show(), t.chainLengthOptions ?.renderChainLengthOptions(e.handle)) : (t.chainLengthHeader ?.hide(), t.chainLengthOptions ?.hide()), t.connectorStep ?.uncheckAll(), a()
            }
            if (e.type === "connector") {
                if (f(n(r)) && !await t.startFromScratchPopup ?.open()) return;
                s(r, h.selectConnector(n(r), e), !0), t.connectorStep ?.checkProduct(e.productId, !0), a();
                return
            }
            if (e.type === "charm") {
                if (!_(n(r), e.charmGroupIndex)) {
                    t.maxCharmsPopup ?.open();
                    return
                }
                const i = y(n(r), e.charmGroupIndex);
                if (!i) {
                    t.maxCharmsPopup ?.open();
                    return
                }
                s(r, h.selectCharm(n(r), e, i), !0);
                const o = t.charmsSteps ?.[e.charmGroupIndex];
                if (!o) return;
                o ?.checkProduct(e.productId), d()
            }
        }
    }

    function P(e) {
        s(r, h.updateChainLength(n(r), e.variantId), !0)
    }

    function x(e) {
        s(r, h.swapCharmPositions(n(r), e), !0), d()
    }

    function v(e) {
        if (s(r, h.unselectProduct(n(r), e), !0), e.type === "chain" && (t.chainLengthHeader ?.hide(), t.chainStep ?.uncheckProduct(e.productId), t.connectorStep ?.uncheckAll(), a()), e.type === "connector" && (t.connectorStep ?.uncheckProduct(e.productId), a()), e.type === "charm" && e.charmGroupIndex !== void 0) {
            const c = t.charmsSteps ?.[e.charmGroupIndex];
            if (!c) return;
            c ?.uncheckProduct(e.productId)
        }
    }
    const a = () => {
            t.charmsSteps ?.forEach(e => {
                e.uncheckAll()
            })
        },
        d = () => {
            t.charmsSteps ?.forEach((e, c) => {
                const i = n(r) ?.charms ?.filter(o => o.charmGroupIndex === c).map(o => o.productId);
                i ?.length && e.syncCheckedProducts(i)
            })
        },
        w = (e, c) => {
            if (e === 1) {
                t.typeStep ?.openMobileDialog(c);
                return
            }
            if (e === 2) {
                t.chainStep ?.openMobileDialog(c);
                return
            }
            if (e === 3) {
                t.connectorStep ?.openMobileDialog(c);
                return
            }
            const i = e - 4,
                o = t.charmsSteps ?.[i];
            o && o.openMobileDialog(c)
        },
        k = e => {
            const c = T(n(r), n(p));
            c !== null && m(c, e)
        },
        D = () => {
            t.decorativeImage && n(r).chain && (t.decorativeImage.style.visibility = "visible")
        };
    var b = {
        setActiveStepIndex: m,
        getActiveStepIndex: g,
        getForm: S,
        selectType: I,
        selectProduct: C,
        selectChainLength: P,
        swapCharmPositions: x,
        unselectProduct: v,
        goToNextStep: k,
        openReviewDesignDrawer: () => {
            t.summaryDrawer ?.open ?.()
        },
        rerender: async e => {
            await M({
                sections: e,
                host: u.$$host
            }).rerender()
        }
    };
    return H(b)
}
customElements.define("section-charm-builder", A(N, {
    sectionId: {
        attribute: "section-id",
        type: "String"
    }
}, [], ["setActiveStepIndex", "getActiveStepIndex", "getForm", "selectType", "selectProduct", "selectChainLength", "swapCharmPositions", "unselectProduct", "goToNextStep", "openReviewDesignDrawer", "rerender"], !1));