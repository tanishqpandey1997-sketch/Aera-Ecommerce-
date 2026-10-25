import {
    s as t
} from "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
const c = async (s, r) => {
    const o = {
        items: s.items
    };
    if (s.sections && s.sections.length > 0) {
        if (s.sections.length > 5) throw new Error("addToCart supports up to 5 section names per request.");
        o.sections = s.sections.join(",")
    }
    return s.url && (o.sections_url = s.url), t("/cart/add.js", {
        method: "POST",
        body: o
    }, r, "Error adding to cart")
};
export {
    c as a
};