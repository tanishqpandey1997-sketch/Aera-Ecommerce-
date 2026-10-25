function s(r) {
    return new Promise(t => setTimeout(t, r))
}
const n = async (r, t, e = 1, h) => {
        const o = c => {
            if (t === 0) throw new Error(JSON.stringify(c));
            return s(e * 300).then(() => n(r, t - 1, e + 1))
        };
        return r().catch(o)
    },
    i = (...r) => n(() => fetch(...r), 3);
export {
    i as f
};