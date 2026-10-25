import {
    r as i
} from "./items-DNi4Eu8t.js";

function m(r) {
    return r ? r.matches("[data-gtm-item-container]") ? r : r.closest("[data-gtm-item-container]") : null
}

function _(r) {
    const t = i(m(r));
    if (!t) return;
    const e = {};
    if (t.item_category ?.trim() && (e._ga_category_level_1 = t.item_category.trim()), t.item_category2 ?.trim() && (e._ga_category_level_2 = t.item_category2.trim()), t.item_category3 ?.trim() && (e._ga_category_level_3 = t.item_category3.trim()), t.item_category4 ?.trim() && (e._ga_category_level_4 = t.item_category4.trim()), t.item_category5 ?.trim() && (e._ga_category_level_5 = t.item_category5.trim()), Object.keys(e).length !== 0) return e
}
export {
    _ as g
};