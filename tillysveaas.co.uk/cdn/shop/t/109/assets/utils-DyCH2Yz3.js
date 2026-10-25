import {
    d as r
} from "./utils-fhgEClr6.js";
const v = (t, e, n) => e === "type" ? d(t) : e === "chain" ? o(t) : e === "connector" ? p(t) : h(t, n),
    d = t => ({
        select: t.type ? "active" : "disabled",
        preview: "hidden",
        nextStep: t.type ? "active" : "disabled"
    }),
    o = t => ({
        select: t.chain ? "active" : "disabled",
        preview: t.chain ? "active" : "hidden",
        nextStep: t.chain ? "active" : "disabled"
    }),
    p = t => ({
        select: t.connector ? "active" : "disabled",
        preview: "active",
        nextStep: t.connector ? "active" : "disabled"
    }),
    h = (t, e) => {
        const n = e - 4,
            a = t.charms ?.filter(s => s.charmGroupIndex === n),
            i = a && a.length > 0,
            c = r(t).length - 1 === n;
        return {
            select: i ? "active" : "disabled",
            preview: "active",
            nextStep: c ? "hidden" : i ? "active" : "disabled"
        }
    };
export {
    v as g
};