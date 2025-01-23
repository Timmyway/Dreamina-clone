<script setup lang="ts">
import type { SidebarItem } from '../../types/sidebar.types';
import TwMenuItem from './TwMenuItem.vue';

interface Props {
    items: SidebarItem[],
    groupTitle?: string;
}

withDefaults(defineProps<Props>(), {
    groupTitle: ''
});
</script>

<template>
    <h4 class="text-xs text-gray-300">{{ groupTitle }}</h4>
    <ul class="flex flex-col gap-2">
        <template v-for="item in items" :key="item.id">
            <tw-menu-item
                :label="item.label"
                :icon-class="item.icon"
            ></tw-menu-item>
        </template>
    </ul>
</template>

<style scoped>
</style>