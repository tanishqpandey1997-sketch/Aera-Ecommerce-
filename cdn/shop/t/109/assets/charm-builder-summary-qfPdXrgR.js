import "./disclose-version-DsnmJJEf.js";
import {
    c as N,
    p as v,
    j as P,
    g as e,
    u as i,
    a as I
} from "./custom-element-CoS1ay5O.js";
import {
    g as A
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    u as k
} from "./useInit.svelte-ItIJhPfT.js";
import {
    g as w
} from "./charm-builder.svelte-WMHNSnyo.js";
import {
    f as b,
    a as S,
    b as j,
    c as q
} from "./pricing-DNZUsTnz.js";
import "./collectRefs-DFE6zV31.js";

function z(D, a) {
    v(a, !0);
    const f = A("cartContext", {
            required: !1
        }),
        {
            refs: t
        } = k({
            host: a.$$host,
            refs: {
                dialog: "summary-dialog",
                title: "summary-title",
                price: "summary-price",
                items: "summary-items",
                addToCartButton: "summary-add-to-cart",
                addToCartLabel: "summary-button-label",
                addToCartPrice: "summary-button-price"
            }
        }, (o, u) => {
            t.addToCartButton ?.addEventListener("click", E, {
                signal: u
            })
        }),
        c = i(() => w().getForm()),
        d = i(() => S(e(c))),
        p = i(() => q(e(c))),
        l = i(() => j(e(c)));
    P(() => {
        T()
    });
    const _ = () => {
            t.dialog ?.showModal()
        },
        T = () => {
            const o = a.$$host.dataset.currency ?? "$",
                u = (e(c).type === "bracelet" ? a.$$host.dataset.summaryTitleBracelet : a.$$host.dataset.summaryTitle) ?? "",
                x = a.$$host.dataset.summaryColorLabel ?? "Color:",
                B = a.$$host.dataset.summaryLengthLabel ?? "Length:",
                $ = a.$$host.dataset.addToCartLabel ?? "";
            t.title && (t.title.textContent = u), t.price && (t.price.textContent = b(e(d), o)), t.addToCartLabel && (t.addToCartLabel.textContent = $), t.addToCartPrice && (t.addToCartPrice.textContent = e(d) > 0 ? ` - ${b(e(d),o)}` : ""), t.addToCartButton && (t.addToCartButton.disabled = e(l).length === 0, t.addToCartButton.setAttribute("aria-disabled", e(l).length === 0 ? "true" : "false")), t.items && t.items.replaceChildren(...e(p).map(r => {
                const h = document.createElement("article");
                h.className = "charm-builder-summary__item";
                const C = document.createElement("div");
                C.className = "charm-builder-summary__item-media";
                const s = document.createElement("img");
                s.className = "charm-builder-summary__item-image", s.src = r.image, s.alt = r.title, s.loading = "lazy", C.append(s);
                const n = document.createElement("div");
                n.className = "charm-builder-summary__item-content";
                const g = document.createElement("h3");
                g.className = "charm-builder-summary__item-title", g.textContent = r.title;
                const y = document.createElement("div");
                if (y.className = "pricing charm-builder-summary__item-price", y.textContent = b(r.price, o), n.append(g, y), r.color) {
                    const m = document.createElement("p");
                    m.className = "charm-builder-summary__item-color", m.textContent = `${x} ${r.color}`.trim(), n.append(m)
                }
                if (r.length) {
                    const m = document.createElement("p");
                    m.className = "charm-builder-summary__item-length", m.textContent = `${B} ${r.length}`.trim(), n.append(m)
                }
                return h.append(C, n), h
            }))
        },
        E = async o => {
            o.preventDefault(), e(l).length !== 0 && (await f ?.onAddToCart ?.(e(l)), t.dialog ?.close())
        };
    var L = {
        open: _
    };
    return I(L)
}
customElements.define("charm-builder-summary", N(z, {}, [], ["open"], !1));