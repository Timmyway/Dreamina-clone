<script setup lang="ts">
import { onMounted } from 'vue';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';
import { useGalleryStore } from '../stores/galleryStore';
import type { Image } from '../types/gallery.types';

interface Props {
    images: Image[];
}

defineProps<Props>();

const galleryStore = useGalleryStore();

const { startObserving } = useIntersectionObserver(galleryStore.loadImage,
    { threshold: 0.1 }
);

onMounted(() => {
    const lazyImages = document.querySelectorAll('.lazy') as NodeListOf<HTMLElement>;
    startObserving(lazyImages);
});
</script>

<template>
    <div class="tw-gallery">
        <template v-for="im in images" :key="`image-${im.id}`">
            <img
                class="tw-gallery__image lazy"
                :data-src="im.url"                
                :alt="im.alt"
            />
        </template>
    </div>
</template>

<style scoped lang="scss">
.tw-gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-flow: dense;
    gap: 12px;
    &__image {        
        border-radius: 9px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
}

@media (min-width: 480px) {
    .tw-gallery {        
        grid-template-columns: repeat(2, 1fr);
    }       
}

@media (min-width: 768px) {
    .tw-gallery {        
        grid-template-columns: repeat(4, 1fr);        
    }       
}


</style>