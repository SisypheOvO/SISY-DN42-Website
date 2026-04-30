<template>
    <section id="nodes" class="px-8 py-16 max-md:px-6 md:py-20">
        <div class="mb-6">
            <span class="inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#e8d5b7]/90">NODES</span>
            <h2 class="mt-1.5 text-[clamp(1.6rem,3vw,2.35rem)] font-semibold tracking-[-0.04em]">{{ $t("nodes.title") }}</h2>
        </div>

        <div class="grid gap-6 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
            <article v-for="node in nodes" :key="node.code" class="overflow-hidden rounded-2xl border border-(--border-panel) bg-(--bg-panel) transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,213,183,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div class="flex items-start justify-between gap-4 border-b border-(--border-panel) bg-[linear-gradient(135deg,rgba(232,213,183,0.08),rgba(232,213,183,0.03))] px-6 py-6">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">{{ node.flag }}</span>
                        <div>
                            <h3 class="m-0 text-[1.2rem] font-semibold tracking-[-0.03em]">{{ node.code }}</h3>
                            <span class="mt-0.5 block text-sm text-[#8888a0]">{{ node.location }}</span>
                        </div>
                    </div>
                    <div :class="statusClass(node.status)">
                        <span class="h-2 w-2 rounded-full bg-current animate-pulse"></span>
                        <span>{{ nodeStatusLabel(node.status) }}</span>
                    </div>
                </div>

                <div class="px-6 py-6">
                    <div v-for="row in detailRows" :key="row.key" :class="row.containerClass">
                        <span :class="row.noWrap ? 'text-sm text-[#8888a0] whitespace-nowrap' : 'text-sm text-[#8888a0] md:max-w-full md:overflow-hidden md:whitespace-nowrap md:text-ellipsis'">
                            {{ $t(row.labelKey) }}
                            <template v-if="row.suffix"> {{ row.suffix }}</template>
                        </span>

                        <template v-if="row.kind === 'text'">
                            <span :class="row.valueClass">{{ row.value(node) }}</span>
                        </template>

                        <template v-else-if="row.kind === 'copy'">
                            <span :class="copyValueClass(copiedText === row.value(node), row.align, row.truncate) + (row.noWrap ? ' whitespace-nowrap' : '')" @click="emit('copy', row.value(node), $event)">{{ row.value(node) }}</span>
                        </template>

                        <template v-else>
                            <span class="font-mono text-sm text-[#f0f0f5] md:text-right space-y-1">
                                <span :class="copyValueClass(copiedText === row.firstValue(node), 'left')" @click="emit('copy', row.firstValue(node), $event)">{{ row.firstValue(node) }}</span>
                                <br />
                                <span :class="copyValueClass(copiedText === row.secondValue(node), 'left')" @click="emit('copy', row.secondValue(node), $event)">{{ row.secondValue(node) }}</span>
                            </span>
                        </template>
                    </div>

                    <div v-if="node.remark" :class="node.remarkTone === 'warning' ? 'mt-4 rounded-lg border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.1)] p-3 text-sm leading-7 text-[#8888a0]' : 'mt-4 rounded-lg border border-[rgba(74,158,255,0.2)] bg-[rgba(74,158,255,0.1)] p-3 text-sm leading-7 text-[#8888a0]'">
                        <span v-for="(line, index) in node.remark[locale]" :key="index"> {{ line }}<br v-if="index < node.remark[locale].length - 1" /> </span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import type { Locale, NodeEntry, NodeStatus } from "@/data"

type DetailRow =
    | {
          key: string
          kind: "text"
          labelKey: string
          value: (node: NodeEntry) => string
          valueClass: string
          containerClass: string
          suffix?: string
          noWrap?: boolean
      }
    | {
          key: string
          kind: "copy"
          labelKey: string
          value: (node: NodeEntry) => string
          containerClass: string
          suffix?: string
          noWrap?: boolean
          align?: "left" | "right"
          truncate?: boolean
      }
    | {
          key: string
          kind: "routing"
          labelKey: string
          firstValue: (node: NodeEntry) => string
          secondValue: (node: NodeEntry) => string
          containerClass: string
          suffix?: string
          noWrap?: boolean
      }

defineProps<{
    nodes: NodeEntry[]
    copiedText: string | null
}>()

const emit = defineEmits<{
    (event: "copy", text: string, eventObject: MouseEvent): void
}>()

const i18n = useI18n()
const locale = computed(() => i18n.locale.value as Locale)

const detailRows: DetailRow[] = [
    {
        key: "provider",
        kind: "text",
        labelKey: "node.provider",
        value: (node) => node.provider,
        valueClass: "text-left font-mono text-sm text-[#f0f0f5] md:text-right",
        containerClass: "grid min-w-0 grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "endpoint-v4",
        kind: "copy",
        labelKey: "node.endpoint",
        suffix: " v4",
        value: (node) => node.endpoint_v4,
        containerClass: "grid min-w-0 grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "endpoint-v6",
        kind: "copy",
        labelKey: "node.endpoint",
        suffix: " v6",
        value: (node) => node.endpoint_v6,
        containerClass: "grid min-w-0 grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "endpoint-dual",
        kind: "copy",
        labelKey: "node.endpoint",
        suffix: " dual-stack",
        noWrap: true,
        value: (node) => node.endpoint_dual,
        containerClass: "grid min-w-0 grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[auto_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "pubkey",
        kind: "copy",
        labelKey: "node.pubkey",
        value: (node) => node.pubkey,
        truncate: true,
        containerClass: "grid min-w-0 grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "routing",
        kind: "routing",
        labelKey: "node.routing",
        firstValue: (node) => node.routing4,
        secondValue: (node) => node.routing6,
        containerClass: "grid grid-cols-1 gap-2 border-b border-(--border-panel) py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
    {
        key: "lla",
        kind: "copy",
        labelKey: "node.lla",
        value: (node) => node.lla,
        containerClass: "grid min-w-0 grid-cols-1 gap-2 py-3 md:grid-cols-[9.4rem_minmax(0,1fr)] md:gap-4",
    },
]

function copyValueClass(isCopied: boolean, align: "left" | "right" = "right", truncate = false) {
    const base = `${truncate ? "inline-block max-w-full min-w-0 overflow-hidden whitespace-nowrap text-ellipsis " : "inline-flex w-fit "}cursor-pointer rounded-sm px-2 py-1 font-mono text-sm`
    const alignClass = align === "right" ? "justify-self-start md:justify-self-end text-left md:text-right" : "justify-self-start text-left"

    if (isCopied) {
        return `${base} ${alignClass} bg-[rgba(34,197,94,0.15)] text-[#22c55e]`
    }

    return `${base} ${alignClass} text-[#e8d5b7] transition hover:bg-[#e8d5b7]/10 hover:text-[#e8d5b7]`
}

function statusClass(status: NodeStatus) {
    return status === "warning" ? "inline-flex items-center gap-2 self-start text-xs text-[#f59e0b]" : "inline-flex items-center gap-2 self-start text-xs text-[#22c55e]"
}

function nodeStatusLabel(status: NodeStatus) {
    return status === "warning" ? i18n.t("node.statusWarning") : i18n.t("node.statusOpen")
}
</script>
