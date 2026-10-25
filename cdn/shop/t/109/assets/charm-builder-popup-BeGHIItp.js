import "./disclose-version-DsnmJJEf.js";
import {
    c as u,
    p as m,
    a as v
} from "./custom-element-CoS1ay5O.js";
import {
    u as f
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function g(h, i) {
    m(i, !0);
    let s = null,
        t = null;
    const {
        refs: o
    } = f({
        host: i.$$host,
        refs: {
            dialog: "popup-dialog",
            approveButton: {
                ref: "approve-button",
                required: !1
            },
            dismissButton: "dismiss-button"
        }
    }, (e, n) => {
        e.approveButton ?.addEventListener("click", a, {
            signal: n
        }), e.dismissButton ?.addEventListener("click", r, {
            signal: n
        }), e.dialog ?.addEventListener("cancel", d, {
            signal: n
        }), e.dialog ?.addEventListener("close", p, {
            signal: n
        })
    }), l = e => {
        t ?.(e), t = null
    };

    function a() {
        s = "approve", o.dialog ?.close("approve")
    }

    function r() {
        s = "dismiss", o.dialog ?.close("dismiss")
    }

    function d() {
        s = "dismiss"
    }

    function p() {
        l((s ?? "dismiss") === "approve"), s = null
    }
    var c = {
        open: async () => {
            if (!o.dialog) return !1;
            o.dialog.open && o.dialog.close(), s = null;
            const e = new Promise(n => {
                t = n
            });
            return o.dialog.showModal(), e
        },
        close: () => {
            o.dialog ?.close()
        }
    };
    return v(c)
}
customElements.define("charm-builder-popup", u(g, {}, [], ["open", "close"], !1));