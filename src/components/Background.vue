<template>
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div class="absolute -left-1/4 -top-1/4 h-[200%] w-[200%] bg-[radial-gradient(ellipse_800px_600px_at_20%_20%,rgba(232,213,183,0.08)_0%,transparent_50%),radial-gradient(ellipse_600px_400px_at_80%_80%,rgba(74,158,255,0.05)_0%,transparent_50%),radial-gradient(ellipse_400px_300px_at_60%_30%,rgba(168,85,247,0.04)_0%,transparent_50%)] opacity-80 animate-[bgFloat_30s_ease-in-out_infinite]"></div>
        <div class="absolute inset-0">
            <span v-for="(star, index) in stars" :key="index" class="absolute size-0.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(232,213,183,0.5)] animate-[twinkle_4s_ease-in-out_infinite]" :style="star"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const stars = Array.from({ length: 120 }, (_, index) => ({
    left: `${(index * 17.39) % 100}%`,
    top: `${(index * 29.73) % 100}%`,
    animationDelay: `${((index * 0.37) % 4).toFixed(2)}s`,
    animationDuration: `${(3.2 + ((index * 0.11) % 3)).toFixed(2)}s`,
}))
</script>
