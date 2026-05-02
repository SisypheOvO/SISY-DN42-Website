import { createI18n } from "vue-i18n"
import { i18nLocalKey } from "@/data"
import zh from "./langs/zh"
import en from "./langs/en"

export type MessageSchema = typeof zh

export type Locale = "zh" | "en"

export const LOCALE_KEY = i18nLocalKey

function getInitialLocale(): Locale {
    if (typeof window === "undefined") {
        return "zh"
    }

    try {
        const saved = window.localStorage.getItem(LOCALE_KEY)
        if (saved === "zh" || saved === "en") {
            return saved
        }
    } catch {
        // ignore storage errors and fall back to browser locale
    }

    const browserLocale = window.navigator.language?.toLowerCase() ?? "en"
    return browserLocale.startsWith("zh") ? "zh" : "en"
}

const messages = {
    zh,
    en,
}

const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: "en",
    messages,
    globalInjection: true,
})

export default i18n
