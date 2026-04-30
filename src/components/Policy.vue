<template>
    <section id="policy" class="px-8 py-16 max-md:px-1 md:py-20">
        <div class="rounded-2xl border border-(--border-panel) bg-(--bg-panel) p-10 max-md:p-6">
            <h2 class="mb-6 flex items-center gap-3 text-[1.5rem] font-semibold">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgba(232,213,183,0.1),rgba(232,213,183,0.05))] text-[1.1rem]">📋</span>
                <span>{{ $t("policy.title") }}</span>
            </h2>

            <div class="mt-6 rounded-xl border border-[rgba(232,213,183,0.2)] bg-[linear-gradient(135deg,rgba(232,213,183,0.08),rgba(232,213,183,0.03))] p-6">
                <p class="m-0 leading-7 text-[#8888a0]">{{ $t("policy.advertiseLabel") }}</p>
                <p class="mt-3 flex flex-wrap items-center gap-3">
                    <code class="rounded-sm bg-black/30 px-2 py-1 font-mono text-[0.9rem] text-[#e8d5b7]">{{ baseInfo.ipv4 }}</code>
                    <code class="rounded-sm bg-black/30 px-2 py-1 font-mono text-[0.9rem] text-[#e8d5b7]">{{ baseInfo.ipv6 }}</code>
                </p>
            </div>

            <div class="mt-6 rounded-xl border border-[rgba(239,68,68,0.3)] bg-[linear-gradient(135deg,rgba(239,68,68,0.08),rgba(239,68,68,0.03))] p-6">
                <p class="m-0 leading-[1.8] text-[#8888a0]">{{ $t("policy.disclaimer") }}</p>
            </div>

            <div class="mt-6 grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                <div v-for="item in $tm('policy.items')" :key="item" class="flex items-start gap-3 rounded-[10px] border border-(--border-panel) bg-[rgba(255,255,255,0.03)] p-4">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-[0.8rem] text-[#22c55e]">✓</span>
                    <span class="text-[0.95rem] leading-normal text-[#f0f0f5]">{{ item }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { baseInfo } from "@/data"
</script>
