class l {
    drawerElement;
    previouslyFocusedElement = null;
    handleTabKeyBound;
    handleEscapeKeyBound;
    onEscape;
    constructor(e, t) {
        this.drawerElement = e, this.handleTabKeyBound = this.#t.bind(this), this.handleEscapeKeyBound = this.#n.bind(this), this.onEscape = t
    }
    trapFocus(e, t) {
        this.previouslyFocusedElement = e || document.activeElement, t && (this.onEscape = t), document.addEventListener("keydown", this.handleTabKeyBound), document.addEventListener("keydown", this.handleEscapeKeyBound), setTimeout(() => {
            const s = this.#e();
            if (s.length > 0) {
                const n = s.find(a => a.tagName === "INPUT" && a.type === "search");
                n ? n.focus() : s[0].focus()
            } else this.drawerElement.setAttribute("tabindex", "-1"), this.drawerElement.focus()
        }, 100)
    }
    restoreFocus() {
        document.removeEventListener("keydown", this.handleTabKeyBound), document.removeEventListener("keydown", this.handleEscapeKeyBound), setTimeout(() => {
            this.previouslyFocusedElement ?.focus()
        }, 100)
    }
    #t = e => {
        if (e.key !== "Tab") return;
        const t = this.#e();
        if (t.length === 0) return;
        const s = t[0],
            n = t[t.length - 1];
        e.shiftKey ? document.activeElement === s && (e.preventDefault(), n.focus()) : document.activeElement === n && (e.preventDefault(), s.focus())
    };
    #n = e => {
        e.key === "Escape" && this.onEscape && (e.preventDefault(), this.onEscape())
    };
    #e = () => Array.from(this.drawerElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(t => {
        const s = t;
        if (s.matches(":disabled") || s.getAttribute("tabindex") === "-1") return !1;
        let n = t.parentElement;
        for (; n && n !== this.drawerElement;) {
            if (n.getAttribute("aria-hidden") === "true") return !1;
            n = n.parentElement
        }
        const a = window.getComputedStyle(s);
        return a.display !== "none" && a.visibility !== "hidden"
    })
}
export {
    l as D
};