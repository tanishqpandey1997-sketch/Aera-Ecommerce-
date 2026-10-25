"use strict";
(self.webpackChunk_klaviyo_onsite_modules = self.webpackChunk_klaviyo_onsite_modules || []).push([
    ["38"], {
        21952: function(a, b, c) {
            b.A = () => {
                var a;
                let b = "https://static.klaviyo.com/onsite/js/",
                    d = null == (a = window.klaviyoModulesObject) ? void 0 : a.assetSource;
                c.p = d ? `${b}${d}` : b
            }
        },
        63662: function(a, b, c) {
            (0, c(21952).A)(), Promise.all([c.e("1520"), c.e("469"), c.e("5032"), c.e("4666"), c.e("2099"), c.e("5663")]).then(c.bind(c, 95243)).then(({
                default: a
            }) => {
                a()
            })
        }
    },
    function(a) {
        a(a.s = 63662)
    }
]);