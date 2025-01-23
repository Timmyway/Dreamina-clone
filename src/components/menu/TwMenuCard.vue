    <script setup lang="ts">
withDefaults(defineProps<{
    title: string;
    description: string;
    maxWidth?: string;
    minWidth?: string;
}>(), {
    maxWidth: '30%',
    minWidth: '320px',
});

</script>

<template>
<div class="tw-menu-card w-full flex flex-col p-4 gap-2"
    :style="{ maxWidth, minWidth }"
>
    <h4 class="text-2xl font-bold">{{ title }}</h4>
    <p class="text-gray-100">
        {{ description }}
    </p>
    <div class="flex items-center flex-wrap gap-4 mt-4">
        <!-- Boutons d'action -->
        <slot></slot>
    </div>
</div>
</template>

<style scoped lang="scss">
.tw-menu-card {    
    border-radius: 16px;        
    background: rgba(86, 116, 144, 0.2); /* Semi-transparent background */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); /* Subtle shadow */
    backdrop-filter: blur(10px); /* Blur effect */    
    border: 1px solid rgba(255, 255, 255, 0.3); /* Light border to enhance the glass look */
    text-align: center;
    color: hsl(0, 0%, 100%);
    position: relative;
    &::before {
        content: '';
        background-color: #e5e5f7;        
        opacity: 0.1;
        filter: blur(1px);
        background-image:  linear-gradient(135deg, #0F1115 25%, transparent 25%), linear-gradient(225deg, #0F1115 25%, transparent 25%), linear-gradient(45deg, #0F1115 25%, transparent 25%), linear-gradient(315deg, #0F1115 25%, #e5e5f7 25%);
        background-position:  10px 0, 10px 0, 0 0, 0 0;
        background-size: 20px 20px;
        background-repeat: repeat;
        position: absolute;
        right: 0; top: 0;
        width: 100%;
        height: 35%;
    }
}
</style>