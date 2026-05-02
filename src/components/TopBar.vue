<template>
    <nav class="fixed left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-(--border-panel) bg-[rgba(10,10,15,0.8)] px-4 py-3 backdrop-blur-[20px] md:px-12">
        <a class="inline-flex items-center gap-3 text-[#f0f0f5]" href="#top" :aria-label="baseInfo.network_name">
            <img class="h-10 w-10 rounded-full" src="/hero.png" alt="" />
            <span class="text-[1.25rem] font-semibold tracking-[-0.02em] whitespace-pre">{{ baseInfo.as_name + "   ·   " + baseInfo.asn_short }}</span>
        </a>

        <div class="hidden items-center gap-10 text-[0.95rem] text-[#8888a0] md:flex">
            <a :class="navClass('policy')" href="#policy">{{ $t("nav.policy") }}</a>
            <a :class="navClass('nodes')" href="#nodes">{{ $t("nav.nodes") }}</a>
            <a :class="navClass('contact')" href="#contact">{{ $t("nav.contact") }}</a>
        </div>

        <div class="inline-flex items-center gap-1 rounded-md border border-(--border-panel) bg-white/2 p-[0.5px]" aria-label="Language switch">
            <button :class="locale === 'zh' ? 'rounded-sm bg-[#e8d5b7] px-3 py-1 text-sm font-medium text-[#0a0a0f] transition' : 'rounded-sm px-3 py-1 text-sm font-medium text-[#8888a0] transition hover:text-[#f0f0f5]'" type="button" @click="setLocale('zh')">中</button>
            <button :class="locale === 'en' ? 'rounded-sm bg-[#e8d5b7] px-3 py-1 text-sm font-medium text-[#0a0a0f] transition' : 'rounded-sm px-3 py-1 text-sm font-medium text-[#8888a0] transition hover:text-[#f0f0f5]'" type="button" @click="setLocale('en')">EN</button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import type { Locale } from "@/i18n"
import { LOCALE_KEY } from "@/i18n"
import { baseInfo } from "@/data"

const props = defineProps<{ activeSection?: string | null }>()

const i18n = useI18n()
const locale = computed(() => i18n.locale.value as Locale)

function setLocale(lang: Locale) {
    i18n.locale.value = lang
    try {
        window.localStorage.setItem(LOCALE_KEY, lang)
    } catch {
        // ignore storage errors
    }
}

function navClass(name: string) {
    return props.activeSection === name ? "text-[#f0f0f5] font-medium" : ""
}
</script>
