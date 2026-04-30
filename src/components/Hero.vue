<template>
    <section class="px-8 pb-16 pt-40 text-center max-md:px-6 max-md:pb-12 max-md:pt-32">
        <p class="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#e8d5b7]">
            <!-- kicker -->
            {{ baseInfo.network_name }} · DN42
        </p>
        <h1 class="mx-auto max-w-5xl bg-[linear-gradient(135deg,#f0f0f5_0%,#e8d5b7_100%)] bg-clip-text text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-transparent">{{ $t("hero.title") }}</h1>
        <p class="mx-auto mt-4 max-w-175 text-[1.15rem] leading-8 text-[#8888a0]">{{ $t("hero.subtitle") }}</p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
            <span class="inline-flex items-center rounded-md border border-(--border-panel) bg-(--bg-panel) px-4 py-2 font-mono text-[0.9rem] text-[#e8d5b7]">{{ baseInfo.asn }}</span>
            <span class="inline-flex items-center rounded-md border border-(--border-panel) bg-(--bg-panel) px-4 py-2 font-mono text-[0.9rem] text-[#e8d5b7]">{{ baseInfo.ipv4 }}</span>
            <span class="inline-flex items-center rounded-md border border-(--border-panel) bg-(--bg-panel) px-4 py-2 font-mono text-[0.9rem] text-[#e8d5b7]">{{ baseInfo.ipv6 }}</span>
        </div>
    </section>
</template>

<script setup lang="ts">
import { baseInfo } from "@/data"
</script>
