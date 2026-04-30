import { onMounted, onBeforeUnmount, ref } from "vue"

export default function useScrollSpy(options?: { offset?: number; rootMargin?: string }) {
    const current = ref<string | null>(null)
    let observer: IntersectionObserver | null = null

    function init(ids: string[]) {
        if (typeof window === "undefined" || !window.IntersectionObserver) return

        const offset = options?.offset ?? 0
        const rootMargin = options?.rootMargin ?? `-50% 0px -50% 0px`

        const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
        if (!elements.length) return

        const cb: IntersectionObserverCallback = (entries) => {
            // choose the entry with largest intersection ratio
            const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

            if (visible) {
                const id = visible.target.id
                if (id && id !== current.value) {
                    current.value = id
                    // update URL hash without scrolling
                    try {
                        const url = new URL(window.location.href)
                        url.hash = `#${id}`
                        history.replaceState(null, document.title, url.toString())
                    } catch (e) {
                        window.location.hash = id
                    }
                }
            }
        }

        observer = new IntersectionObserver(cb, { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] })
        elements.forEach((el) => observer?.observe(el))
    }

    function destroy() {
        observer?.disconnect()
        observer = null
    }

    onBeforeUnmount(() => destroy())

    return { current, init, destroy }
}
