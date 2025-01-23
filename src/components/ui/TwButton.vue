<script lang="ts" setup>
interface Props {
    btnClass?: string;
}

withDefaults(defineProps<Props>(), {
    btnClass: 'bg-white'
})
</script>

<template>
    <button
        class="px-4 py-2 rounded-lg flex items-center justify-center font-bold lg:px-10"
        :class="[btnClass]"
    >
        <slot></slot>
    </button>
</template>