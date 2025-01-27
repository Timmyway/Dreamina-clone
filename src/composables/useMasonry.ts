import Masonry from "masonry-layout";
import { ref, type Ref } from "vue";

export function useMasonry(gallery: Ref<HTMLElement | null>, itemClass: string, transitionDuration = '0.4s') {
    const msnry = ref(new Masonry(gallery.value!, {
        itemSelector: itemClass,
        columnWidth: itemClass,
        percentPosition: true,
        transitionDuration,
        gutter: 12, // Matches the SCSS gap
    }));

    const initMasonry = (lazyImages: NodeListOf<HTMLElement>) => {
        lazyImages.forEach((img) => {
            img.addEventListener('load', () => {
                img.classList.add('loaded'); // Show the image
                msnry.value.layout();
            });
        });
    };

    return { initMasonry }
}