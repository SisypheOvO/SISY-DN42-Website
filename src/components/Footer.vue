<template>
    <footer class="border-t bg-(--bg-secondary) border-(--border-panel) px-8 py-6 max-md:px-6">
        <div class="mx-auto flex w-full h-10 max-w-300 flex-row justify-end items-center gap-4">
            <a class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-(--border-panel) bg-(--bg-panel) text-[#8888a0] transition hover:translate-y-[-0.05rem] hover:border-[rgba(232,213,183,0.25)] hover:bg-[rgba(232,213,183,0.1)] hover:text-[#f0f0f5]" :href="githubUrl" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <img :src="githubIcon" class="h-5 w-5" alt="" aria-hidden="true" />
            </a>

            <p class="m-0 text-[0.95rem] leading-none text-[#8888a0]">© {{ baseInfo.from_date }} {{ baseInfo.network_name }}. {{ baseInfo.asn }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { baseInfo, githubUrl } from "@/data"
import githubIcon from "@/assets/svg/github.svg"
</script>
