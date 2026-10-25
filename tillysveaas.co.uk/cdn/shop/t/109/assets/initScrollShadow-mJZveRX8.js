const d = (s, o, e, r = "has-scroll-shadow") => {
    const t = () => {
        const c = s.scrollHeight > s.clientHeight,
            a = s.scrollTop + s.clientHeight >= s.scrollHeight - 2;
        o.classList.toggle(r, c && !a)
    };
    t(), s.addEventListener("scroll", t, {
        passive: !0,
        signal: e
    });
    const i = new ResizeObserver(t);
    i.observe(s), e.addEventListener("abort", () => i.disconnect())
};
export {
    d as i
};