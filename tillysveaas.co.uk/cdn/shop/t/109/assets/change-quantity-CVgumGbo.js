import {
    s as o
} from "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
const a = async (t, e) => {
    const s = {
        id: t.variantId,
        quantity: t.quantity
    };
    if (t.sections && t.sections.length > 0) {
        if (t.sections.length > 5) throw new Error("changeQuantity supports up to 5 section names per request.");
        s.sections = t.sections.join(",")
    }
    return t.url && (s.sections_url = t.url), o("/cart/change.js", {
        method: "POST",
        body: s
    }, e, "Error changing quantity")
};
export {
    a as c
};