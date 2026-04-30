<template>
    <section class="border-t border-(--border-panel) px-8 py-16 max-md:px-6 md:py-20">
        <div id="contact" class="mx-auto max-w-125 border border-(--border-panel) bg-(--bg-panel) p-10 max-md:p-6 rounded-2xl">
            <h3 class="m-0 text-[1.6rem] font-semibold tracking-[-0.04em]">{{ $t("contact.title") }}</h3>
            <p class="mt-3 m-0 text-[#8888a0]">{{ $t("contact.subtitle") }}</p>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <a :href="`mailto:${myEmail}`" class="inline-flex min-h-[3.3rem] items-center justify-center gap-2.5 rounded-[0.95rem] border border-(--border-panel) bg-(--bg-panel) px-4 py-3 transition hover:-translate-y-0.5 hover:border-[rgba(232,213,183,0.25)] hover:bg-[rgba(232,213,183,0.1)]">
                    <img :src="emailIcon" class="h-4 w-4 shrink-0" alt="" aria-hidden="true" />
                    {{ myEmail }}
                </a>
                <a :href="myTelegramUrl" class="inline-flex min-h-[3.3rem] items-center justify-center gap-2.5 rounded-[0.95rem] border border-(--border-panel) bg-(--bg-panel) px-4 py-3 transition hover:-translate-y-0.5 hover:border-[rgba(232,213,183,0.25)] hover:bg-[rgba(232,213,183,0.1)]" target="_blank" rel="noreferrer">
                    <img :src="telegramIcon" class="h-4 w-4 shrink-0" alt="" aria-hidden="true" />
                    Telegram
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { myEmail, myTelegramUrl } from "@/data"
import emailIcon from "@/assets/svg/email.svg"
import telegramIcon from "@/assets/svg/telegram.svg"
</script>
