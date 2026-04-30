<template>
    <div v-if="tooltip.visible" class="pointer-events-none fixed z-50 rounded-xl bg-[#52d18e]/95 px-4 py-2 text-sm font-semibold text-[#07080d] shadow-[0_16px_40px_rgba(0,0,0,0.35)] animate-[tooltip-in_0.14s_ease-out]" :style="styleObject">
        {{ tooltip.text }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    tooltip: {
        visible: boolean
        text: string
        x: number
        y: number
    }
    styleObject: {
        left: string
        top: string
    }
}>()
</script>
