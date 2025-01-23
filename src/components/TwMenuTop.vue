<script lang="ts" setup>
import TwButton from './ui/TwButton.vue';
import TwMenuCard from './menu/TwMenuCard.vue';

</script>

<template>
    <section class="px-4 py-6 flex gap-4 flex-wrap">
        <tw-menu-card
            title="Image generator"
            description="Turn your idea into stunning images"
        >
            <tw-button btn-class="bg-slate-600">Generate</tw-button>
            <tw-button btn-class="bg-slate-600">Generate canvas</tw-button>
        </tw-menu-card>

        <tw-menu-card
            title="Video generator"
            description="Put your productivity in motion"
        >
            <tw-button btn-class="bg-slate-600 flex items-center gap-2">
                <span>Generate</span>
                <div class="px-1 py-1 text-cyan-300 bg-slate-500 rounded-md">Beta</div>
            </tw-button>
        </tw-menu-card>

        <tw-menu-card
            title="Music generator"
            description="Create music effortlessly with AI"
        >
            <tw-button btn-class="bg-slate-600 flex items-center gap-2">
                <span>Generate</span>
                <div class="px-1 py-1 text-cyan-300 bg-slate-500 rounded-md">Beta</div>
            </tw-button>
        </tw-menu-card>
    </section>
</template>

<style scoped>
.tw-menu-top {
    background-color: #567490;
    color: white;
}
</style>