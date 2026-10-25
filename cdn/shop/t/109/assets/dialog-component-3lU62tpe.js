import "./disclose-version-DsnmJJEf.js";
import {
    r as v,
    v as E,
    w as A,
    D as N,
    N as S,
    x as k,
    y as C,
    z as M,
    c as L,
    p as D,
    A as I,
    B as h,
    C as T,
    E as O,
    a as z,
    h as B,
    F as H,
    G as f
} from "./custom-element-CoS1ay5O.js";
import {
    p as R
} from "./props-BfMGM-PW.js";
import {
    u as U
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";
var g = new Map;

function X(o, t) {
    var e = g.get(o);
    e || (e = new Set, g.set(o, e)), e.add(t)
}

function j(o, t, e, n, r) {
    v && E();
    var i = t.$$slots ?.[e],
        a = !1;
    i === !0 && (i = t.children, a = !0), i === void 0 || i(o, a ? () => n : n)
}

function q(o, t) {
    A(() => {
        var e = o.getRootNode(),
            n = e.host ? e : e.head ?? e.ownerDocument.head;
        if (!n.querySelector("#" + t.hash)) {
            const r = document.createElement("style");
            r.id = t.hash, r.textContent = t.code, n.appendChild(r), N && X(t.hash, r)
        }
    })
}
const b = [...` 	
\r\f \v\uFEFF`];

function F(o, t, e) {
    var n = "" + o;
    if (e) {
        for (var r in e)
            if (e[r]) n = n ? n + " " + r : r;
            else if (n.length)
            for (var i = r.length, a = 0;
                (a = n.indexOf(r, a)) >= 0;) {
                var s = a + i;
                (a === 0 || b.includes(n[a - 1])) && (s === n.length || b.includes(n[s])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(s + 1): a = s
            }
    }
    return n === "" ? null : n
}

function G(o, t, e, n, r, i) {
    var a = o.__className;
    if (v || a !== e || a === void 0) {
        var s = F(e, n, i);
        (!v || s !== o.getAttribute("class")) && (s == null ? o.removeAttribute("class") : o.className = s), o.__className = e
    } else if (i && r !== i)
        for (var c in i) {
            var l = !!i[c];
            (r == null || l !== !!r[c]) && o.classList.toggle(c, l)
        }
    return i
}
const K = Symbol("is custom element"),
    P = Symbol("is html");

function V(o, t, e, n) {
    var r = J(o);
    v && (r[t] = o.getAttribute(t)), r[t] !== (r[t] = e) && (e == null ? o.removeAttribute(t) : typeof e != "string" && Q(o).includes(t) ? o[t] = e : o.setAttribute(t, e))
}

function J(o) {
    return o.__attributes ??= {
        [K]: o.nodeName.includes("-"),
        [P]: o.namespaceURI === S
    }
}
var w = new Map;

function Q(o) {
    var t = o.getAttribute("is") || o.nodeName,
        e = w.get(t);
    if (e) return e;
    w.set(t, e = []);
    for (var n, r = o, i = Element.prototype; i !== r;) {
        n = C(r);
        for (var a in n) n[a].set && e.push(a);
        r = k(r)
    }
    return e
}
var W = I('<div><div class="dialog-component__container svelte-aoc7sl"><button class="dialog-component__overlay svelte-aoc7sl" type="button" aria-label="Close dialog"></button> <div class="dialog-component__content svelte-aoc7sl" role="dialog" aria-modal="true"><!></div></div></div>');
const Y = {
    hash: "svelte-aoc7sl",
    code: `.svelte-aoc7sl:export {xs:375px;sm:430px;md:740px;lg:1000px;xl:1290px;xxl:1900px;}.svelte-aoc7sl:export {xs:(min-width: 375px);sm:(min-width: 430px);md:(min-width: 740px);lg:(min-width: 1000px);xl:(min-width: 1290px);xxl:(min-width: 1900px);}.svelte-aoc7sl:export {primary:#10100f;secondary:#6b6965;gradient_primary:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 10%, rgba(255, 255, 255, 0.08) 20%, rgba(255, 255, 255, 0.22) 30%, rgba(255, 255, 255, 0.45) 45%, rgba(255, 255, 255, 0.55) 55%, rgba(255, 255, 255, 0.78) 70%, rgba(255, 255, 255, 0.92) 80%, rgba(255, 255, 255, 0.98) 90%, rgb(255, 255, 255) 100%);neutral_white:#ffffff;neutral_50:#fefdfa;neutral_100:#f5f4f0;neutral_200:#d7d5d0;neutral_300:#b4b3af;neutral_400:#9d9b97;neutral_500:#7e8186;neutral_600:#6b6965;neutral_700:#504f4c;neutral_800:#363532;neutral_900:#10100f;neutral_black:#080808;success_50:#f4fcf8;success_100:#caf0da;success_200:#a4e4c0;success_300:#7cd9a4;success_400:#54cd88;success_500:#2cc16c;success_600:#239a56;success_700:#1a7441;success_800:#124d2b;success_900:#092716;warning_50:#fdfcf4;warning_100:#f5f1c6;warning_200:#eee69d;warning_300:#e7db71;warning_400:#dfd046;warning_500:#d8c51a;warning_600:#ad9e15;warning_700:#827610;warning_800:#564f0a;warning_900:#2b2705;critical_50:#fcf4f4;critical_100:#f0c6c6;critical_200:#e69d9d;critical_300:#da7272;critical_400:#cf4646;critical_500:#c41b1b;critical_600:#9d1616;critical_700:#761010;critical_800:#4e0b0b;critical_900:#270505;}

@keyframes svelte-aoc7sl-spin {
  to {
    transform: rotate(360deg);
  }
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}
@media (hover: hover) {
}.dialog-component__root.svelte-aoc7sl {position:fixed;top:0;left:0;visibility:hidden;opacity:0;z-index:1000;transition:opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease;background-color:rgba(0, 0, 0, 0);width:100vw;height:100%;pointer-events:none;}.dialog-component__root[aria-hidden=true].svelte-aoc7sl {visibility:hidden;}.dialog-component__root.active.svelte-aoc7sl {visibility:visible;opacity:1;background-color:rgba(0, 0, 0, 0.5);pointer-events:auto;}.dialog-component__root.active.svelte-aoc7sl .dialog-component__content:where(.svelte-aoc7sl) {transform:translateX(0);}.dialog-component__root.svelte-aoc7sl .dialog-component__container:where(.svelte-aoc7sl) {display:grid;position:fixed;top:0;left:0;justify-content:end;width:100vw;height:100%;}.dialog-component__root.svelte-aoc7sl .dialog-component__overlay:where(.svelte-aoc7sl) {position:fixed;top:0;right:0;bottom:0;left:0;border:0;background:transparent;padding:0;}.dialog-component__root.svelte-aoc7sl .dialog-component__content:where(.svelte-aoc7sl) {display:grid;transform:translateX(100%);transition:transform 0.3s ease-in-out;background:white;width:100vw;height:100%;overflow:auto;}
@media (min-width: 740px) {.dialog-component__root.svelte-aoc7sl .dialog-component__content:where(.svelte-aoc7sl) {width:450px;}
}:host {display:contents;}`
};

function Z(o, t) {
    D(t, !0), q(o, Y);
    let e = R(t, "open", 7, !1);
    U({
        host: t.$$host
    }, (d, x) => {
        window.addEventListener("keydown", s, {
            signal: x
        })
    });
    const n = () => {
            e(!1)
        },
        r = () => {
            n()
        };

    function i() {
        e(!0)
    }

    function a() {
        n()
    }
    const s = d => {
        d.key === "Escape" && n()
    };
    var c = {
            show: i,
            hide: a,
            get open() {
                return e()
            },
            set open(d = !1) {
                e(d), B()
            }
        },
        l = W();
    let _;
    var m = h(l),
        p = h(m);
    p.__click = r;
    var u = H(p, 2),
        y = h(u);
    return j(y, t, "default", {}), f(u), f(m), f(l), T(() => {
        _ = G(l, 1, "dialog-component__root svelte-aoc7sl", null, _, {
            active: e()
        }), V(l, "aria-hidden", !e())
    }), O(o, l), z(c)
}
M(["click"]);
customElements.define("dialog-component", L(Z, {
    open: {
        attribute: "open",
        type: "Boolean"
    }
}, ["default"], ["show", "hide"], !0));