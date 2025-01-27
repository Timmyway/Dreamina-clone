<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';
import { useGalleryStore } from '../stores/galleryStore';
import type { Image } from '../types/gallery.types';
import { useMasonry } from '../composables/useMasonry';

interface Props {
    images: Image[];
}

defineProps<Props>();

const galleryStore = useGalleryStore();

const gallery = ref<HTMLElement | null>(null);

const { startObserving } = useIntersectionObserver(galleryStore.loadImage,
    { threshold: 0.1 }
);

onMounted(() => {
    const { initMasonry } = useMasonry(gallery, '.tw-gallery__image');
    const lazyImages = document.querySelectorAll('.lazy') as NodeListOf<HTMLElement>;
    startObserving(lazyImages); 
    initMasonry(lazyImages);   
});
</script>

<template>
    <div class="tw-gallery" ref="gallery">
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    // grid-template-rows: auto;
    // grid-auto-flow: dense;
    gap: 12px;
    &__image {
        border-radius: 9px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;        
        max-width: 240px; /* Ensure images don't exceed their container */
        height: auto; /* Keep aspect ratio */
        opacity: 0;
        transition: opacity .5s ease-in-out;
        margin: 6px auto;
        display: block;
        // When not loaded, the image should have a fixed size
        min-width: 320px;
        min-height: 320px;
        &.loaded {
            opacity: 1;
            border: 6px solid white;
            // When loaded, the image should have a fluid size
            min-width: 0;
            min-height: 0;
        }
    }    
    @media (min-width: 480px) {
        // grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) {
        // grid-template-columns: repeat(4, 1fr);
    }
}
</style>