import { computed, onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"
import type { Locale } from "@/i18n"
import { LOCALE_KEY } from "@/i18n"

export function usePanel() {
    const i18n = useI18n()
    const copiedText = ref<string | null>(null)
    const tooltip = ref({ visible: false, text: "", x: 0, y: 0 })
    let tooltipTimer: ReturnType<typeof window.setTimeout> | undefined

    const locale = computed(() => i18n.locale.value as Locale)
    const copy = computed(() => i18n.messages.value[i18n.locale.value] as any)
    const tooltipStyle = computed(() => ({
        left: `${tooltip.value.x}px`,
        top: `${tooltip.value.y}px`,
    }))

    function syncLocale(nextLocale: Locale) {
        if (typeof document !== "undefined") {
            document.documentElement.lang = nextLocale === "zh" ? "zh-CN" : "en"
        }

        try {
            window.localStorage.setItem(LOCALE_KEY, nextLocale)
        } catch {
            // ignore storage errors
        }
    }

    function setLocale(nextLocale: Locale) {
        i18n.locale.value = nextLocale
        syncLocale(nextLocale)
    }

    function showTooltip(text: string, x: number, y: number) {
        tooltip.value = {
            visible: true,
            text,
            x: x + 14,
            y: y - 38,
        }

        if (tooltipTimer) {
            window.clearTimeout(tooltipTimer)
        }

        tooltipTimer = window.setTimeout(() => {
            tooltip.value.visible = false
            tooltipTimer = undefined
        }, 1400)

        window.setTimeout(() => {
            copiedText.value = null
        }, 1400)
    }

    async function copyValue(text: string, event: MouseEvent) {
        try {
            await window.navigator.clipboard.writeText(text)
            copiedText.value = text
            showTooltip(i18n.t("copySuccess"), event.clientX, event.clientY)
        } catch {
            showTooltip(i18n.t("copyFail"), event.clientX, event.clientY)
        }
    }

    onMounted(() => {
        syncLocale(locale.value)
    })

    return {
        locale,
        copy,
        copiedText,
        tooltip,
        tooltipStyle,
        setLocale,
        copyValue,
    }
}
