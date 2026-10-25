import "./disclose-version-DsnmJJEf.js";
import {
    c as x,
    p as $,
    a as H
} from "./custom-element-CoS1ay5O.js";
import {
    g as f
} from "./client-DeirsjOi.js";
import {
    g as N,
    f as U,
    a as E,
    b as G,
    c as V
} from "./lists-DnuJsp8m.js";
import {
    f as b
} from "./cards-CPNUwLZt.js";
import {
    b as z,
    c as A
} from "./share-B1v_0eNK.js";
import {
    u as J
} from "./useInit.svelte-ItIJhPfT.js";
import "./fetch-sections-Cuvl7RxI.js";
import "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
import "./requestCache-Q-JlL15V.js";
import "./collectRefs-DFE6zV31.js";

function R(j, m) {
    $(m, !0);
    const o = {
            title: "swym-wishlist-page__title",
            count: "swym-wishlist-page__count",
            shareButton: "swym-wishlist-page__share",
            shareFeedback: "swym-wishlist-page__share-feedback",
            status: "swym-wishlist-page__status",
            statusTitle: "swym-wishlist-page__status-title",
            statusDescription: "swym-wishlist-page__status-description",
            grid: "swym-wishlist-page__grid"
        },
        v = ["addedToWishlist", "removedFromWishlist", "removeWishlistCollection"];
    let h = null,
        T = !1;
    const S = () => m.$$host,
        {
            refs: n
        } = J({
            host: m.$$host,
            refs: {
                title: o.title,
                count: o.count,
                shareButton: o.shareButton,
                shareFeedback: o.shareFeedback,
                status: o.status,
                statusTitle: o.statusTitle,
                statusDescription: o.statusDescription,
                grid: o.grid
            }
        }, (t, e) => {
            u() && t.title && (t.title.textContent = r("sharedTitle") || "Shared wishlist"), p(!!h), t.shareButton ?.addEventListener("click", M, {
                signal: e
            }), T || (T = !0, _()), O(e)
        }),
        d = () => ({
            title: n.title,
            count: n.count,
            shareButton: n.shareButton,
            shareFeedback: n.shareFeedback,
            status: n.status,
            statusTitle: n.statusTitle,
            statusDescription: n.statusDescription,
            grid: n.grid
        }),
        r = t => S().dataset[t] ?? "",
        c = () => {
            const t = u();
            return {
                emptyTitle: r(t ? "sharedEmptyTitle" : "emptyTitle"),
                emptyDescription: r(t ? "sharedEmptyDescription" : "emptyDescription"),
                errorTitle: r(t ? "sharedErrorTitle" : "errorTitle"),
                errorDescription: r("errorDescription"),
                loadingTitle: r("loadingTitle"),
                countOne: r("countOne"),
                countOther: r("countOther"),
                shareLabel: r("shareLabel"),
                sharedMissingDetails: r("sharedMissingDetails")
            }
        },
        u = () => {
            const t = new URLSearchParams(window.location.search);
            return t.has("hkey") || t.has("lid")
        },
        D = () => r("sharePagePath"),
        L = t => {
            const {
                count: e
            } = d(), {
                countOne: s,
                countOther: a
            } = c();
            e.hidden = !1, e.textContent = `${t} ${t===1?s:a}`
        },
        p = t => {
            const {
                shareButton: e
            } = d();
            e.hidden = u(), e.disabled = !t, e.textContent = c().shareLabel
        },
        w = t => {
            const {
                shareFeedback: e
            } = d();
            if (!t) {
                e.hidden = !0, delete e.dataset.state;
                return
            }
            e.hidden = !1, e.dataset.state = t
        },
        g = (t, e = "") => {
            const {
                status: s,
                grid: a,
                statusTitle: i,
                statusDescription: l
            } = d();
            s.hidden = !1, a.hidden = !0, i.textContent = t, l.textContent = e, l.hidden = !e
        },
        y = t => {
            const e = c();
            g(e.errorTitle, t ?? e.errorDescription)
        },
        C = () => {
            const t = c();
            g(t.emptyTitle, t.emptyDescription)
        },
        W = async t => {
            const e = G(await V(t)),
                s = E(e);
            return {
                wishlistId: e ?.listId ?? null,
                productCount: s.length,
                cards: await b(s)
            }
        },
        k = async t => {
            const {
                hkey: e,
                lid: s
            } = N();
            if (!e && !s) throw new Error(c().sharedMissingDetails);
            const a = await U(t, {
                    hkey: e,
                    lid: s
                }),
                i = E(a);
            return {
                wishlistId: null,
                productCount: i.length,
                cards: await b(i)
            }
        },
        F = t => {
            const {
                status: e,
                grid: s
            } = d(), a = document.createDocumentFragment();
            t.forEach(i => {
                const l = document.createElement("div");
                l.className = "swym-wishlist-page__item", l.dataset.key = i.key, l.innerHTML = i.html, a.appendChild(l)
            }), e.hidden = !0, s.hidden = !1, s.replaceChildren(a), S().reinitialize ?.()
        },
        B = () => {
            h = null, p(!1), g(c().loadingTitle)
        },
        I = async t => u() ? await k(t) : await W(t),
        P = t => {
            if (h = t.wishlistId, p(!!h), L(t.productCount), t.productCount === 0) {
                C();
                return
            }
            if (t.cards.length === 0) {
                y();
                return
            }
            F(t.cards)
        },
        _ = async ({
            preserveGrid: t = !1
        } = {}) => {
            w(), t || B();
            try {
                const e = await f(),
                    s = await I(e);
                P(s)
            } catch (e) {
                if (console.error("[swym-wishlist-page] Failed to render wishlist", e), e instanceof Error && e.message === c().sharedMissingDetails) {
                    y(e.message);
                    return
                }
                y()
            }
        },
        O = async t => {
            if (!u()) try {
                const e = await f();
                if (t ?.aborted || !e.evtLayer) return;
                const s = v.map(i => e.JSEvents ?.[i]).filter(i => !!i);
                if (s.length === 0) return;
                const a = () => {
                    _({
                        preserveGrid: !0
                    })
                };
                s.forEach(i => {
                    e.evtLayer ?.addEventListener(i, a)
                }), t ?.addEventListener("abort", () => {
                    s.forEach(i => {
                        e.evtLayer ?.removeEventListener(i, a)
                    })
                }, {
                    once: !0
                })
            } catch (e) {
                console.error("[swym-wishlist-page] Failed to bind wishlist events", e)
            }
        },
        M = async () => {
            if (h) try {
                const t = await z(await f(), h, D());
                await A(t), w("success")
            } catch (t) {
                console.error("[swym-wishlist-page] Failed to share wishlist", t), w("failure")
            }
        };
    H()
}
customElements.define("swym-wishlist-page", x(R, {}, [], [], !1));