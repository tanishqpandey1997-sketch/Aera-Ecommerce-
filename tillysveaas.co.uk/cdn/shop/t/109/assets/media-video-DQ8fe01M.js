import "./disclose-version-DsnmJJEf.js";
import {
    c as y,
    p as h,
    a as I
} from "./custom-element-CoS1ay5O.js";
import {
    u as L
} from "./useInit.svelte-ItIJhPfT.js";
import "./collectRefs-DFE6zV31.js";

function P(M, s) {
    h(s, !0);
    const {
        refs: e
    } = L({
        host: s.$$host,
        refs: {
            playPauseButton: {
                ref: "media-video-play-pause-button",
                required: !1
            },
            muteButton: {
                ref: "media-video-mute-button",
                required: !1
            },
            playIcon: {
                ref: "media-video-play-icon",
                required: !1
            },
            pauseIcon: {
                ref: "media-video-pause-icon",
                required: !1
            },
            muteIcon: {
                ref: "media-video-mute-icon",
                required: !1
            },
            unmuteIcon: {
                ref: "media-video-unmute-icon",
                required: !1
            },
            previewElement: {
                ref: "media-video-preview",
                required: !1
            },
            videoElement: {
                ref: "media-video-element",
                required: !1
            },
            sourceElements: ["media-video-source"]
        }
    }, (t, n) => {
        t.videoElement ?.addEventListener("canplay", l, {
            signal: n,
            once: !0
        }), t.videoElement ?.addEventListener("play", o, {
            signal: n
        }), t.videoElement ?.addEventListener("pause", o, {
            signal: n
        }), t.videoElement ?.addEventListener("ended", o, {
            signal: n
        }), t.videoElement ?.addEventListener("volumechange", a, {
            signal: n
        }), e.playPauseButton ?.addEventListener("click", v, {
            signal: n
        }), e.muteButton ?.addEventListener("click", f, {
            signal: n
        }), o(), a(), c(n)
    }), i = () => {
        const t = e.videoElement;
        t && t.dataset.deferredMediaLoaded !== "true" && (e.sourceElements ?.forEach(n => {
            !n.dataset.src || n.src || (n.src = n.dataset.src)
        }), t.load(), t.dataset.deferredMediaLoaded = "true")
    }, c = t => {
        const n = e.videoElement;
        if (!n || n.dataset.loadStrategy !== "viewport") return;
        if (typeof IntersectionObserver > "u") {
            i();
            return
        }
        const d = new IntersectionObserver(([E]) => {
            E ?.isIntersecting && (i(), d.disconnect())
        }, {
            rootMargin: "1000px 0px"
        });
        d.observe(n), t.addEventListener("abort", () => {
            d.disconnect()
        })
    }, m = () => {
        i()
    }, l = () => {
        if (e.videoElement) {
            if (!e.videoElement.autoplay) {
                u();
                return
            }
            e.videoElement.play().then(() => {
                u()
            }).catch(() => {
                console.log("Autoplay failed")
            })
        }
    }, u = () => {
        e.previewElement && (e.previewElement.hidden = !0)
    }, r = (t, n) => {
        t && t.classList.toggle("active", n)
    }, o = () => {
        if (!e.videoElement) return;
        const t = !e.videoElement.paused && !e.videoElement.ended;
        r(e.playIcon, !t), r(e.pauseIcon, t)
    }, a = () => {
        if (!e.videoElement) return;
        const t = e.videoElement.muted;
        r(e.muteIcon, t), r(e.unmuteIcon, !t)
    }, v = t => {
        if (t.preventDefault(), !e.videoElement) return;
        const d = e.videoElement.paused ? e.videoElement.play() : e.videoElement.pause();
        d instanceof Promise ? d.then(o).catch(() => {}) : o()
    }, f = t => {
        t.preventDefault(), e.videoElement && (e.videoElement.muted = !e.videoElement.muted, a())
    };
    var p = {
        loadMedia: m
    };
    return I(p)
}
customElements.define("media-video", y(P, {}, [], ["loadMedia"], !1));