import { onBeforeUnmount, ref } from "vue"

export default function useScrollSpy() {
    const current = ref<string | null>(null)
    let elements: HTMLElement[] = []
    let lastId: string | null = null
    let ticking = false
    let onScroll: (() => void) | null = null

    function updateHash(id: string) {
        if (!id || id === current.value) return
        current.value = id
        try {
            const url = new URL(window.location.href)
            url.hash = `#${id}`
            history.replaceState(null, document.title, url.toString())
        } catch {
            window.location.hash = id
        }
    }

    function detect() {
        // touching the bottom of the page should activate the last section
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
        if (atBottom && lastId) {
            updateHash(lastId)
            return
        }

        // find the element whose top is closest to the center of the viewport but not below it
        const center = window.innerHeight / 2
        let closest: HTMLElement | null = null
        let minDist = Infinity

        for (const el of elements) {
            const rect = el.getBoundingClientRect()
            // only consider elements whose top is already in the viewport (top <= center)
            if (rect.top <= center) {
                const dist = center - rect.top
                if (dist < minDist) {
                    minDist = dist
                    closest = el
                }
            }
        }

        if (closest) updateHash(closest.id)
    }

    function init(ids: string[]) {
        if (typeof window === "undefined") return

        elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
        if (!elements.length) return

        lastId = ids[ids.length - 1]

        onScroll = () => {
            if (!ticking) {
                ticking = true
                requestAnimationFrame(() => {
                    detect()
                    ticking = false
                })
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        // detect in case the page is not scrolled to top when loaded
        detect()
    }

    function destroy() {
        if (onScroll) {
            window.removeEventListener("scroll", onScroll)
            onScroll = null
        }
    }

    onBeforeUnmount(() => destroy())

    return { current, init, destroy }
}
