const n = ({
        isActive: t,
        wasActive: r,
        status: e
    }) => t && e === "ENTERED" ? "state--entered" : t && e === "ENTERING" ? "state--entering" : t && e === "SWITCHING" ? "state--switching_entering" : t && e === "EXITING" ? "state--exiting" : r && e === "SWITCHING" ? "state--switching_exiting" : "state--exited",
    s = (t, r) => {
        t && (t.classList.forEach(e => {
            e.startsWith("state--") && t.classList.remove(e)
        }), t.classList.add(r))
    };
export {
    n as g, s
};