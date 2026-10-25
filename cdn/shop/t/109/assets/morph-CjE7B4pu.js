const C = {
    childrenOnly: !0,
    reject(e, t) {
        return !!(t.nodeType === Node.TEXT_NODE && t.nodeValue ?.trim() === "" || t instanceof HTMLTemplateElement && t.shadowRootMode === "open" && e.parentElement && t.parentElement && e.parentElement.tagName === t.parentElement.tagName && e.parentElement ?.shadowRoot != null || t.nodeType === Node.COMMENT_NODE && t.nodeValue === "shopify:rendered_by_section_api")
    },
    onBeforeUpdate(e, t) {},
    onAfterUpdate(e) {}
};

function _(e, t, n = C) {
    if (!e || !t) throw new Error("Both oldTree and newTree must be provided");
    if (typeof t == "string") {
        const r = new DOMParser().parseFromString(t, "text/html").body.firstChild;
        if (!r) throw new Error("newTree string is not valid HTML");
        t = r
    }
    let i;
    if (n.childrenOnly) v(t, e, n), i = e;
    else {
        if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) throw new Error("newTree should have one root node (not a DocumentFragment)");
        g(t, e, n), v(t, e, n), n.onAfterUpdate ?.(e), i = e
    }
    return i instanceof Element && L(i), i
}

function A(e, t, n) {
    if (!t) return e;
    if (!e || e.isSameNode ?.(t)) return t;
    if (e.nodeType !== t.nodeType) return e;
    if (e instanceof Element && t instanceof Element) {
        if (t.tagName === "SHOPIFY-ACCELERATED-CHECKOUT-CART") return t;
        if (e.tagName !== t.tagName) return e;
        const i = E(e, n),
            r = E(t, n);
        if (i && r && i !== r) return e
    }
    return g(e, t, n), v(e, t, n), n.onAfterUpdate ?.(t), t
}

function g(e, t, n) {
    n.onBeforeUpdate ?.(t, e);
    const i = t instanceof HTMLDetailsElement && e instanceof HTMLDetailsElement || t instanceof HTMLDialogElement && e instanceof HTMLDialogElement ? t : null,
        r = i ?.open;
    let a, s, f, c;
    t instanceof HTMLElement && e instanceof HTMLElement && (a = t.getAttribute("slot"), s = t.getAttribute("sizes"), c = e.style.viewTransitionName || void 0, t.style.viewTransitionName && (f = t.style.viewTransitionName)), e instanceof Element && t instanceof Element ? O(e, t) : (e instanceof Text || e instanceof Comment) && t.nodeValue !== e.nodeValue && (t.nodeValue = e.nodeValue), i && r !== void 0 && (i.open = r), t instanceof HTMLElement && (a !== void 0 && (a === null ? t.removeAttribute("slot") : t.setAttribute("slot", a)), s !== void 0 && (s === null ? t.removeAttribute("sizes") : t.setAttribute("sizes", s)), f && !c && (t.style.viewTransitionName = f)), e instanceof HTMLInputElement && t instanceof HTMLInputElement ? V(e, t) : e instanceof HTMLOptionElement && t instanceof HTMLOptionElement ? y(e, t, "selected") : e instanceof HTMLTextAreaElement && t instanceof HTMLTextAreaElement && H(e, t)
}

function E(e, t) {
    return t ?.getNodeKey ?.(e) ?? (e instanceof Element ? e.getAttribute("data-key") ?? e.id : void 0)
}

function y(e, t, n) {
    const i = e[n],
        r = t[n];
    i !== r && (t[n] = i, i != null ? t.setAttribute(n, "") : t.removeAttribute(n))
}

function O(e, t) {
    const n = t.attributes,
        i = e.attributes;
    for (const r of Array.from(i)) {
        const {
            name: a,
            namespaceURI: s,
            value: f
        } = r, c = r.localName || a;
        (a === "src" || a === "href" || a === "srcset" || a === "poster") && t.getAttribute(a) === f || (s ? t.getAttributeNS(s, c) !== f && t.setAttributeNS(s, c, f) : t.hasAttribute(a) ? t.getAttribute(a) !== f && (f === "null" || f === "undefined" ? t.removeAttribute(a) : t.setAttribute(a, f)) : t.setAttribute(a, f))
    }
    for (const r of Array.from(n)) {
        const {
            name: a,
            namespaceURI: s
        } = r, f = r.localName || a;
        s ? e.hasAttributeNS(s, f) || t.removeAttributeNS(s, f) : e.hasAttribute(a) || t.removeAttribute(a)
    }
}

function V(e, t) {
    const n = e.value;
    y(e, t, "checked"), y(e, t, "disabled"), e.indeterminate !== t.indeterminate && (t.indeterminate = e.indeterminate), t.type !== "file" && (n !== t.value && (t.setAttribute("value", n), t.value = n), n === "null" && (t.value = "", t.removeAttribute("value")), e.hasAttributeNS(null, "value") ? t.type === "range" && (t.value = n) : t.removeAttribute("value"))
}

function H(e, t) {
    const n = e.value;
    n !== t.value && (t.value = n);
    const i = t.firstChild;
    if (i ?.nodeType === Node.TEXT_NODE) {
        if (n === "" && i.nodeValue === t.placeholder) return;
        i.nodeValue = n
    }
}

function L(e) {
    const t = e.querySelectorAll(".shopify-app-block script[src]");
    for (const n of Array.from(t)) {
        if (!(n instanceof HTMLScriptElement)) continue;
        const i = n.parentElement;
        if (!i) continue;
        const r = document.createElement("script");
        for (const a of Array.from(n.attributes)) r.setAttribute(a.name, a.value);
        n.textContent && (r.textContent = n.textContent), n.remove(), i.appendChild(r)
    }
}

function D(e, t) {
    const n = new Map;
    for (let i = 0; i < e.childNodes.length; i++) {
        const r = e.childNodes[i],
            a = E(r, t);
        if (a == null) continue;
        const s = n.get(a);
        s ? s.push(r) : n.set(a, [r])
    }
    return n
}

function v(e, t, n) {
    if (t instanceof Element && t.hasAttribute("data-skip-subtree-update") && e instanceof Element && e.hasAttribute("data-skip-subtree-update")) return;
    const i = D(t, n),
        r = Array.from(e.childNodes),
        a = r.length;
    let s, f = 0,
        c = 0;
    for (; f < t.childNodes.length || c < a;) {
        const u = t.childNodes[f],
            l = r[c];
        if (!l) {
            u && t.removeChild(u);
            continue
        }
        if (!u) {
            t.appendChild(l), f++, c++;
            continue
        }
        if (M(l, u, n)) {
            s = A(l, u, n), s !== u && t.replaceChild(s, u);
            const m = E(u, n);
            if (m != null) {
                const p = i.get(m);
                if (p) {
                    const b = p.indexOf(u);
                    b !== -1 && p.splice(b, 1), p.length === 0 && i.delete(m)
                }
            }
            f++, c++;
            continue
        }
        if (n.reject ?.(u, l)) {
            c++;
            continue
        }
        const h = E(l, n);
        let T;
        if (h != null) {
            const m = i.get(h);
            T = m ?.shift(), m ?.length === 0 && i.delete(h)
        } else
            for (let m = f; m < t.childNodes.length; m++) {
                const p = t.childNodes[m];
                if (p && M(p, l, n)) {
                    T = p;
                    break
                }
            }
        T ? (s = A(l, T, n), t.insertBefore(s, u), f++, c++) : !h && !E(u, n) ? (s = A(l, u, n), s !== u && t.replaceChild(s, u), f++, c++) : (t.insertBefore(l, u), f++, c++)
    }
}

function M(e, t, n) {
    if (e.nodeType !== t.nodeType) return !1;
    if (e.nodeType === Node.ELEMENT_NODE) {
        if (e instanceof Element && t instanceof Element && e.tagName !== t.tagName) return !1;
        const i = E(e, n),
            r = E(t, n);
        if (i && r && i !== r) return !1
    }
    return e.nodeType === Node.TEXT_NODE && t.nodeType === Node.TEXT_NODE || e.nodeType === Node.COMMENT_NODE && t.nodeType === Node.COMMENT_NODE ? e.nodeValue === t.nodeValue : !0
}
export {
    C as M, _ as m
};