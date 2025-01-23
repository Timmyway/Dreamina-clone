<script setup lang="ts">
import { useSidebarStore } from '../stores/sidebarStore';
import TwMenuItems from './menu/TwMenuItems.vue';

const sidebarStore = useSidebarStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <tw-menu-items :items="sidebarStore.items.main"></tw-menu-items>
    <hr class="h-[1px] bg-gray-200 border-none" />
    <tw-menu-items :items="sidebarStore.items.aiTools" group-title="Ai tools"></tw-menu-items>  
    <hr class="h-[1px] bg-gray-200 border-none" />
    <tw-menu-items :items="sidebarStore.items.misc"></tw-menu-items>  
  </div>
</template>

<style scoped>
</style>
