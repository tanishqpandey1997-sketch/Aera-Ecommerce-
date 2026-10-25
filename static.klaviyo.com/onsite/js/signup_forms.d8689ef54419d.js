"use strict";
(self.webpackChunk_klaviyo_onsite_modules = self.webpackChunk_klaviyo_onsite_modules || []).push([
    ["180"], {
        177: function(a, b, c) {
            c.d(b, {
                mC: function() {
                    return g
                },
                RX: function() {
                    return h
                }
            }), c(59850);
            let d = /^[A-Za-z0-9_-]{43}$/,
                e = "#klaviyo-forms-preview=",
                f = a => `klaviyo-forms-preview:${a}`,
                g = a => {
                    let b = window.location.hash.slice(e.length);
                    if (window.location.hash.startsWith(e) && d.test(b)) {
                        window.history.replaceState(window.history.state, "", window.location.href.split("#")[0]);
                        try {
                            sessionStorage.setItem(f(a), b)
                        } catch (a) {}
                        return b
                    }
                    try {
                        let b = sessionStorage.getItem(f(a));
                        return b && d.test(b) ? b : null
                    } catch (a) {
                        return null
                    }
                },
                h = a => {
                    try {
                        sessionStorage.removeItem(f(a))
                    } catch (a) {}
                }
        },
        50804: function(a, b, c) {
            var d = c(21952);
            c(22918), c(71389);
            var e = c(47256),
                f = c(24678),
                g = c(88385),
                h = c(2422),
                i = c(177);
            let j = async ({
                getCompanyId: a,
                getHostname: b,
                getHref: d
            }) => {
                if ((0, e.A)()) return;
                let j = a(),
                    k = j ? (0, i.mC)(j) : null;
                await Promise.race([(0, f.A)(j), new Promise(a => setTimeout(a, 3e3))]);
                let l = d(),
                    m = b();
                if (j && k) {
                    let {
                        initializeOnsitePreview: a
                    } = await Promise.all([c.e("1520"), c.e("2099"), c.e("6025")]).then(c.bind(c, 3728));
                    await a(j, k, h.A);
                    return
                }
                "https://static.klaviyo-dev.com/index.html" === l || "localhost" === m && "static_page" === new URL(l).searchParams.get("env") ? Promise.all([c.e("1520"), c.e("4666"), c.e("2099"), c.e("5178"), c.e("6723"), c.e("5569"), c.e("1394")]).then(c.bind(c, 18681)).then(({
                    setupManualFormControl: a
                }) => {
                    a(h.A)
                }) : (0, g.Ay)(h.A)
            };
            (0, d.A)(), j({
                getCompanyId: () => window.__klKey,
                getHref: () => window.location.href,
                getHostname: () => window.location.hostname
            })
        }
    },
    function(a) {
        a.O(0, ["1104", "134", "1520", "4396", "469", "5032"], function() {
            return a(a.s = 50804)
        }), a.O()
    }
]);