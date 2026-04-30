<template>
    <footer class="border-t bg-(--bg-secondary) border-(--border-panel) px-8 py-6 max-md:px-6">
        <div class="mx-auto flex w-full h-10 max-w-300 flex-row justify-end items-center gap-6">
            <!-- <ul class="flex flex-wrap items-center justify-center gap-4 p-0 text-[#8888a0] md:gap-5">
                <li><a href="https://lg.sisy.cc/" target="_blank" rel="noreferrer">Looking Glass</a></li>
                <li><a href="https://peeringdb.com/asn/214207" target="_blank" rel="noreferrer">PeeringDB</a></li>
                <li><a href="https://bgp.tools/as/214207" target="_blank" rel="noreferrer">BGP.Tools</a></li>
            </ul> -->

            <p class="m-0 text-[0.95rem] text-[#8888a0]">© {{ baseInfo.from_date }} {{ baseInfo.network_name }}. {{ baseInfo.asn }}</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { baseInfo } from "@/data"
</script>
