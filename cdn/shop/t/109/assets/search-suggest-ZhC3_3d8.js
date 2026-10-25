import {
    s as c
} from "./client-CbBC4y6h.js";
import "./fetchWithRetry-DqgNyu8R.js";
const a = r => {
        const e = {
            q: r.query,
            section_id: r.sectionId
        };
        if (r.resources) {
            const {
                type: i,
                limit: o,
                limit_scope: t,
                options: s
            } = r.resources;
            i && (e["resources[type]"] = Array.isArray(i) ? i.join(",") : i), o !== void 0 && (e["resources[limit]"] = o), t && (e["resources[limit_scope]"] = t), s && (s.unavailable_products && (e["resources[options][unavailable_products]"] = s.unavailable_products), s.fields && s.fields.length > 0 && (e["resources[options][fields]"] = s.fields.join(",")))
        }
        return e
    },
    l = async (r, e) => {
        const i = a(r),
            o = new URLSearchParams;
        for (const [t, s] of Object.entries(i)) o.set(t, String(s));
        return c("/search/suggest", {
            method: "GET",
            queryParams: o,
            responseType: "text"
        }, e, "Error fetching predictive search section")
    };
export {
    l as s
};