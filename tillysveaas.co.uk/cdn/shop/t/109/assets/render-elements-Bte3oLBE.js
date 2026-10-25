const o = () => {
        const t = document.createElement("div");
        return t.className = "charm-builder-images-tree__node", t
    },
    s = t => {
        const n = document.createElement("img"),
            r = t.attachmentPoint ?? {
                x: 0,
                y: 0
            },
            e = t.pinpoint ?.rotation ?? 0;
        return n.className = "charm-builder-images-tree__node__image", n.src = t.image, n.style.transform = `translate(-${r.x}%,-${r.y}%) rotate(${e}deg)`, n.style.transformOrigin = `${r.x}% ${r.y}%`, n
    },
    c = (t, n, r = !0) => {
        const e = document.createElement("div"),
            a = t.attachmentPoint ?? {
                x: 0,
                y: 0
            };
        return e.className = `charm-builder-images-tree__node__image-wrapper ${t.attachmentPoint&&r?"enter":""}`, e.style.transformOrigin = `${a.x}% ${a.y}%`, e.append(n), requestAnimationFrame(() => {
            e.classList.remove("enter")
        }), e
    },
    m = (t, n, r) => {
        const e = document.createElement("button");
        return e.className = "charm-builder-images-tree__drag-handle", e.dataset.js = "charm-builder-images-tree-drag-handle", e.type = "button", e.dataset.nodeKey = n, e.setAttribute("aria-label", `Move charm ${t.productId}`), e.addEventListener("pointerdown", r), e
    },
    i = (t, n) => {
        const r = document.createElement("div");
        r.className = "charm-builder-images-tree__node__slot";
        const e = t.attachmentPoint ?? {
                x: 0,
                y: 0
            },
            a = n.pinpoint ?? {
                x: 0,
                y: 0
            };
        return r.style.transform = `translate(${a.x-e.x}%, ${a.y-e.y}%)`, r
    },
    l = (t, n) => {
        if (!n) return;
        if (!t ?.chain || !t.connector) {
            n.style.setProperty("--offset-y", "0");
            return
        }
        const r = t.connector.pinpointGroups.flatMap(e => e.pinpoints).reduce((e, a) => a.y > (e ?.y ?? -0) ? a : e, null);
        r && n.style.setProperty("--offset-y", `-${r.y}`)
    };
export {
    s as a, c as b, i as c, m as d, l as o, o as r
};