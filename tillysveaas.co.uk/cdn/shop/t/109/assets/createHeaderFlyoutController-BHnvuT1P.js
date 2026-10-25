import {
    g as C
} from "./getGlobalElement-Do2Hw5Hq.js";
import {
    g as I,
    s as g
} from "./headerFlyoutState-CTRNbteD.js";
const b = s => Math.floor(s ?.getBoundingClientRect().height ?? 0),
    w = ({
        tabId: s,
        getFlyoutContent: c,
        getAnimatedItems: h = () => [],
        getExpandedTrigger: S = () => null,
        onAfterStateUpdate: f,
        closeOptions: T
    }) => {
        const n = C("mainHeader", {
                required: !1
            }),
            i = () => typeof s == "function" ? s() : s,
            o = () => n ?.headerState,
            r = () => b(c()),
            l = () => {
                const t = i(),
                    e = r(),
                    a = o() ?.navigationStatus;
                if (a === "EXITED" || a === "EXITING") {
                    n ?.handleOpen(t, e);
                    return
                }
                n ?.handleSwitch(t, e)
            },
            u = () => {
                o() ?.navigationStatus !== "EXITED" && n ?.handleClose(T ?.skipDelay)
            };
        return {
            getFlyoutHeight: r,
            requestOpenOrSwitch: l,
            requestToggle: () => {
                if (i() === o() ?.activeTabId) {
                    u();
                    return
                }
                l()
            },
            requestClose: u,
            handleContentChange: () => {
                const t = i();
                o() ?.activeTabId === t && n ?.handleResize(t, r())
            },
            updateFlyoutStatus: () => {
                const t = i(),
                    e = o(),
                    a = e ?.activeTabId === t,
                    p = e ?.lastSwitchedTabId === t,
                    d = I({
                        isActive: !!a,
                        wasActive: !!p,
                        status: e ?.navigationStatus
                    });
                g(c(), d), h().forEach(v => {
                    g(v, d)
                }), S() ?.setAttribute("aria-expanded", a ? "true" : "false"), f ?.(!!a)
            }
        }
    };
export {
    w as c
};