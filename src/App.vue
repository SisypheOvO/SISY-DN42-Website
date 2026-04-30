<template>
    <div id="top" class="relative min-h-screen overflow-x-hidden text-[#f7f1e8]">
        <Background />
        <TopBar :active-section="spy.current.value" />

        <main class="mx-auto w-[min(1200px,calc(100%-2rem))] pb-4 md:w-[min(1200px,calc(100%-4rem))]">
            <Hero />
            <Policy />
            <Nodes :nodes="nodes" :copied-text="copiedText" @copy="copyValue" />
            <Contact />
        </main>

        <Footer />
        <CopyTooltip :tooltip="tooltip" :style-object="tooltipStyle" />
    </div>
</template>

<script setup lang="ts">
import Background from "@/components/Background.vue"
import Contact from "@/components/Contact.vue"
import CopyTooltip from "@/components/CopyTooltip.vue"
import Footer from "@/components/Footer.vue"
import Hero from "@/components/Hero.vue"
import Nodes from "@/components/Nodes.vue"
import Policy from "@/components/Policy.vue"
import TopBar from "@/components/TopBar.vue"
import { nodes } from "@/data"
import { usePanel } from "@/composables/usePanel"
import useScrollSpy from "@/composables/useScrollSpy"
import { onMounted } from "vue"

const { copiedText, tooltip, tooltipStyle, copyValue } = usePanel()

const spy = useScrollSpy()
onMounted(() => {
    // observe main sections to keep URL hash in sync
    spy.init(["policy", "nodes", "contact"])
})
</script>
