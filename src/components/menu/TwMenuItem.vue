<script setup lang="ts">

interface Props {
    label: string;
    iconClass?: string;
}

withDefaults(defineProps<Props>(), {
    iconClass: '',
});
</script>

<template>
    <li class="py-2 px-4 tw-item">
        <a href="#" class="flex gap-3 items-center">
            <i class="fas text-xs" :class="iconClass"></i>
            <span>{{ label }}</span>
        </a>
    </li>
</template>

<style scoped>
.tw-item:hover {
    background-color: hsl(0, 2%, 17%);
    display: flex;
    align-items: center;
}
</style>
