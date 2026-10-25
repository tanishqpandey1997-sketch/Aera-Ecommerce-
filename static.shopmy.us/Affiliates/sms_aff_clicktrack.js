(() => {
    let _ = {
        version: "2.1.1",
        script_loaded_after_ms: Math.round(performance.now()),
        referrer: document.referrer || null
    };
    var e = !(l = (i = (e, t) => {
        try {
            return new URL(e).searchParams.get(t)
        } catch (e) {
            return null
        }
    })(window.location.href, "smsclickid")) && document.referrer ? i(document.referrer, "smsclickid") : null;
    let t = null;
    if (!l && !e) try {
        t = sessionStorage.getItem("sms_click_id")
    } catch (e) {}
    let m = l || e || t;
    var i = (i = i(window.location.href, "smscode") || (document.referrer ? i(document.referrer, "smscode") : null)) && /^[a-zA-Z0-9_!.-]+$/.test(i) ? i : null,
        o = (e && (_.recovered_from_referrer = !0), t && (_.recovered_from_session = !0), (e = 30) => {
            var e = (new Date).getTime() + 864e5 * e,
                t = new Date;
            return t.setTime(e), t.toUTCString()
        }),
        s = (document.currentScript ?.src ?.split("?")[1] || "").split("&").reduce((e, t) => ({ ...e,
            [t.split("=")[0]]: t.split("=")[1]
        }), {});
    let c = s.domain || null,
        r = parseInt(s.expires) || 30,
        h = () => Boolean(window.Shopify),
        f = () => h() && Boolean(document.querySelector('script[src*="cdn.shopify.com"], link[href*="cdn.shopify.com"]')) || 2 <= Array.from(document.querySelectorAll('[class*="shopify"]')).length,
        p = () => {
            try {
                var e = self && self.location && self.location.hostname || "";
                if (/\.shopifycloud\.com$/.test(e) && /(sandbox|pixels-manager)/.test(e)) return "script_in_shopify_web_pixel_sandbox_err"
            } catch (e) {}
            return !1
        },
        u = () => document.cookie.split(";").reduce((e, t) => ({ ...e,
            [(t.split("=")[0] || "").trim()]: (t.split("=")[1] || "").trim()
        }), {});
    var n = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (m && (c ? (document.cookie = `sms_click_id=${m};domain=${c};expires=${o(r)};path=/;`, document.cookie = `sms_click_time=${(new Date).toUTCString()};domain=${c};expires=${o(r)};path=/;`) : (document.cookie = `sms_click_id=${m};expires=${o(r)};path=/;`, document.cookie = `sms_click_time=${(new Date).toUTCString()};expires=${o(r)};path=/;`), console.info(`ShopMy: Registered click ${m}.`)), l || e) try {
        sessionStorage.setItem("sms_click_id", m)
    } catch {}
    let a = !!s.splitcookies;
    if (a) {
        var l = e => {
                try {
                    for (var [t, i] of new URL(e).searchParams.entries())
                        if (t.startsWith("smsclickid_")) {
                            var o = t.split("smsclickid_")[1];
                            if (o && /^[a-zA-Z0-9-]+$/.test(i)) return {
                                suffix: o,
                                clickIdForProperty: i
                            }
                        }
                } catch {}
                return null
            },
            e = l(window.location.href) || (document.referrer ? l(document.referrer) : null);
        if (e) {
            var {
                suffix: l,
                clickIdForProperty: e
            } = e;
            c ? (document.cookie = `sms_click_id_${l}=${e};domain=${c};expires=${o(r)};path=/;`, document.cookie = `sms_click_time_${l}=${(new Date).toUTCString()};domain=${c};expires=${o(r)};path=/;`) : (document.cookie = `sms_click_id_${l}=${e};expires=${o(r)};path=/;`, document.cookie = `sms_click_time_${l}=${(new Date).toUTCString()};expires=${o(r)};path=/;`);
            try {
                sessionStorage.setItem("sms_click_id_" + l, e)
            } catch {}
            console.info(`ShopMy: Registered click ${e} for property ${l}.`)
        }
    }
    if (m) {
        let a = e => t(!0, e),
            l = e => t(!1, e),
            t = (e, t) => {
                var e = {
                        clickId: m,
                        validation_status: !!e,
                        url: window.location.href,
                        metadata: _
                    },
                    {
                        sms_click_id: i,
                        sms_click_time: o
                    } = u();
                e.metadata.cookies_succeeded = !!i && !!o, t && (e.detail_msg = t), e.metadata.click_confirmed_after_sms_script_load_ms = Math.round(performance.now()) - _.script_loaded_after_ms, c && (e.metadata.custom_cookie_domain = c), r && (e.metadata.custom_cookie_expire_in_days = r), fetch("https://api.shopmy.us/api/confirm_click", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }).then(e => e.json()).then(e => {
                    e.success ? console.info(`ShopMy: Confirmed click ${m} with backend.`) : console.info(`ShopMy: Failed to confirm click ${m} with backend.`)
                }).catch(() => console.info(`ShopMy: Error confirming click ${m} with backend.`))
            },
            d = ({
                enableValidation: c = !0,
                ATTEMPT_NUMBER: r = 1,
                MAX_NUM_ATTEMPTS: i = 3
            } = {}) => {
                let n = r < i;
                if (f()) {
                    let t = (e, t = "Unknown") => {
                            setTimeout(() => d({
                                enableValidation: c,
                                ATTEMPT_NUMBER: r + 1,
                                MAX_NUM_ATTEMPTS: i
                            }), e), c && console.info(`ShopMy failed to set click: ${t}.`)
                        },
                        o = e => {
                            if (404 === e.status) throw new Error("cart_js_unavailable_404");
                            return 409 !== e.status && 429 === e.status ? t(750, "http_" + e.status) : t(250, "http_" + e.status)
                        },
                        s = window.location.href.replace(/^(http|https):\/\//, "").split(/[/?#]/)[0];
                    return fetch(`https://${s}/cart.js`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(async e => {
                        if (!e.ok) {
                            if (n) return o(e);
                            throw new Error(`cart_read_http_${e.status}_after_retry_` + r)
                        }
                        let t = {};
                        try {
                            var i = await e.json();
                            i.token && "string" == typeof i.token && (_.cart_token = i.token.split("?")[0]), t = { ...i.attributes || {},
                                sms_click_id: m,
                                sms_click_time: (new Date).toUTCString()
                            }
                        } catch {
                            throw new Error("cart_read_invalid_json")
                        }
                        return fetch(`https://${s}/cart/update.js`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                attributes: t
                            })
                        }).then(e => {
                            if (!e.ok) {
                                if (n) return o(e);
                                throw new Error(`cart_update_http_${e.status}_after_retry_` + r)
                            }
                            c && console.info(`ShopMy: Successfully sent click ${m} to cart object.`), c && a("cart_update_success")
                        })
                    }).catch(e => {
                        n && !e.message ?.includes("404") ? t(250, e.message) : (c && console.info(`ShopMy: Cart operation failed for ${s}: ` + e.message), c && l("cart_update_err: " + e.message))
                    })
                }
                if (c) {
                    var e = p();
                    if (e) return void l(e);
                    var {
                        sms_click_id: e,
                        sms_click_time: t
                    } = u();
                    !!e && !!t ? a(h() ? "shopify_headless_cookie_set" : "non_shopify_cookie_set") : l(h() ? "shopify_headless_cookie_set_failed" : "non_shopify_cookie_set_failed")
                }
            };
        e = () => d({
            enableValidation: !0,
            MAX_NUM_ATTEMPTS: 3
        });
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e(), setTimeout(() => d({
            enableValidation: !1,
            MAX_NUM_ATTEMPTS: 1
        }), 1750)
    }
    i && (f() ? (l = window.location.href.replace(/^(http|https):\/\//, "").split(/[/?#]/)[0], fetch(`https://${l}/discount/` + i), console.info(`ShopMy: Automatically applied discount code ${i}.`)) : (c ? document.cookie = `sms_code=${i};domain=${c};expires=${o(r)};path=/;` : document.cookie = `sms_code=${i};expires=${o(r)};path=/;`, console.info(`ShopMy: Stored cookie for coupon ${i}.`))), e = () => {
        let {
            sms_click_id: t,
            sms_code: i
        } = u();
        t && Array.from(document.querySelectorAll('a[href*=".myshopify"][href*="checkout"]')).forEach(e => {
            e.href.includes("smsclickid") || (console.info("ShopMy: Migrating Cookie to Checkout URL"), e.href = `${e.href}${e.href.includes("?")?"&":"?"}smsclickid=` + t + (i ? "&smscode=" + i : ""))
        })
    }, setTimeout(e, 250), setInterval(e, 1750);
    let d = (s.decoratehosts || "").split(",").filter(Boolean);
    if (l = () => {
            let i = u();
            var e, t = [];
            if (i.sms_click_id && t.push("smsclickid=" + i.sms_click_id), a && (e = Object.keys(i).map(e => e.startsWith("sms_click_id_") ? e.slice("sms_click_id_".length) : null).filter(e => e && i["sms_click_id_" + e]).sort((e, t) => new Date(i["sms_click_time_" + t] || 0) - new Date(i["sms_click_time_" + e] || 0))[0]) && t.push(`smsclickid_${e}=` + i["sms_click_id_" + e]), t.length) {
                let i = t.join("&"),
                    o = t => d.some(e => t.includes(e));
                Array.from(document.querySelectorAll("a[href]")).forEach(e => {
                    o(e.href) && !e.href.includes("smsclickid") && (e.href = "" + e.href + (e.href.includes("?") ? "&" : "?") + i)
                }), Array.from(document.querySelectorAll("form[action]")).forEach(e => {
                    var t = e.getAttribute("action") || "";
                    o(t) && !t.includes("smsclickid") && e.setAttribute("action", "" + t + (t.includes("?") ? "&" : "?") + i)
                })
            }
        }, d.length && (setTimeout(l, 250), setInterval(l, 1750)), n) {
        o = () => {
            var {
                sms_click_id: e,
                sms_click_time: t
            } = u();
            return !e || !t || 6e5 < Date.now() - new Date(t).getTime() ? clearInterval(i) : void(window.location.search.includes("smsclickid=") || (t = window.location.search ? "&" : "?", t = window.location.href.split("#")[0] + t + "smsclickid=" + e + window.location.hash, history.replaceState(history.state, "", t)))
        };
        let i;
        o(), i = setInterval(o, 1e3), setTimeout(() => clearInterval(i), 6e5)
    }
})();