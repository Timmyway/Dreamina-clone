import { defineStore } from "pinia"
import { ref } from "vue";
import type { Image } from "../types/gallery.types";

export const useGalleryStore = defineStore('gallery', () => {
    const imagesShowcase = ref<Image[]>([
        { id: 1, url: 'https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg', alt: 'Nature' },
        { id: 2, url: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_640.jpg', alt: 'Nature' },
        { id: 3, url: 'https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg', alt: 'Nature' },
        { id: 4, url: 'https://cdn.pixabay.com/photo/2023/09/04/19/10/butterfly-8233505_640.jpg', alt: 'Nature' },
        { id: 5, url: 'https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715_640.jpg', alt: 'Nature' },
        { id: 6, url: 'https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_640.jpg', alt: 'Nature' },
        { id: 7, url: 'https://cdn.pixabay.com/photo/2014/07/05/08/18/bicycle-384566_640.jpg', alt: 'Nature' },
        { id: 8, url: 'https://cdn.pixabay.com/photo/2014/08/15/22/48/cowgirl-419084_640.jpg', alt: 'Nature' },
        { id: 9, url: 'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg', alt: 'Nature' },
        { id: 10, url: 'https://cdn.pixabay.com/photo/2018/07/28/14/30/soccer-3568168_640.jpg', alt: 'Nature' },
        { id: 11, url: 'https://picsum.photos/1080/720', alt: 'Random Image 11' },
        { id: 12, url: 'https://picsum.photos/500/750', alt: 'Random Image 12' },
        { id: 13, url: 'https://picsum.photos/640/960', alt: 'Random Image 13' },
        { id: 14, url: 'https://picsum.photos/1200/600', alt: 'Random Image 14' },
        { id: 15, url: 'https://picsum.photos/960/640', alt: 'Random Image 15' },
        { id: 16, url: 'https://picsum.photos/750/500', alt: 'Random Image 16' },
        { id: 17, url: 'https://picsum.photos/1080/1350', alt: 'Random Image 17' },
        { id: 18, url: 'https://picsum.photos/500/400', alt: 'Random Image 18' },
        { id: 19, url: 'https://picsum.photos/1200/1200', alt: 'Random Image 19' },
        { id: 20, url: 'https://picsum.photos/700/1000', alt: 'Random Image 20' },
        { id: 21, url: 'https://picsum.photos/1080/720', alt: 'Random Image 21' },
        { id: 22, url: 'https://picsum.photos/800/1200', alt: 'Random Image 22' },
        { id: 23, url: 'https://picsum.photos/1200/900', alt: 'Random Image 23' },
        { id: 24, url: 'https://picsum.photos/600/400', alt: 'Random Image 24' },
        { id: 25, url: 'https://picsum.photos/960/640', alt: 'Random Image 25' },
        { id: 26, url: 'https://picsum.photos/640/480', alt: 'Random Image 26' },
        { id: 27, url: 'https://picsum.photos/750/500', alt: 'Random Image 27' },
        { id: 28, url: 'https://picsum.photos/500/750', alt: 'Random Image 28' },
        { id: 29, url: 'https://picsum.photos/640/960', alt: 'Random Image 29' },
        { id: 30, url: 'https://picsum.photos/1200/800', alt: 'Random Image 30' },
        { id: 31, url: 'https://picsum.photos/800/600', alt: 'Random Image 31' },
        { id: 32, url: 'https://picsum.photos/900/600', alt: 'Random Image 32' },
        { id: 33, url: 'https://picsum.photos/1080/720', alt: 'Random Image 33' },
        { id: 34, url: 'https://picsum.photos/500/600', alt: 'Random Image 34' },
        { id: 35, url: 'https://picsum.photos/600/900', alt: 'Random Image 35' },
        { id: 36, url: 'https://picsum.photos/750/500', alt: 'Random Image 36' },
        { id: 37, url: 'https://picsum.photos/500/500', alt: 'Random Image 37' },
        { id: 38, url: 'https://picsum.photos/1200/900', alt: 'Random Image 38' },
        { id: 39, url: 'https://picsum.photos/700/1000', alt: 'Random Image 39' },
        { id: 40, url: 'https://picsum.photos/1080/1350', alt: 'Random Image 40' },
        { id: 41, url: 'https://picsum.photos/600/800', alt: 'Random Image 41' },
        { id: 42, url: 'https://picsum.photos/1200/600', alt: 'Random Image 42' },
        { id: 43, url: 'https://picsum.photos/800/1000', alt: 'Random Image 43' },
        { id: 44, url: 'https://picsum.photos/640/960', alt: 'Random Image 44' },
        { id: 45, url: 'https://picsum.photos/1200/800', alt: 'Random Image 45' },
        { id: 46, url: 'https://picsum.photos/800/600', alt: 'Random Image 46' },
        { id: 47, url: 'https://picsum.photos/700/1050', alt: 'Random Image 47' },
        { id: 48, url: 'https://picsum.photos/500/500', alt: 'Random Image 48' },
        { id: 49, url: 'https://picsum.photos/1080/720', alt: 'Random Image 49' },
        { id: 50, url: 'https://picsum.photos/600/400', alt: 'Random Image 50' }
    ]);

    const imagesAIShorts = ref<Image[]>([
        { id: 1, url: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg', alt: 'Nature' },
        { id: 2, url: 'https://cdn.pixabay.com/photo/2017/08/06/05/44/people-2589186_640.jpg', alt: 'Nature' },
        { id: 3, url: 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg', alt: 'Nature' },
        { id: 4, url: 'https://cdn.pixabay.com/photo/2019/07/13/10/39/desk-4334527_640.jpg', alt: 'Nature' },
        { id: 5, url: 'https://cdn.pixabay.com/photo/2019/07/14/16/37/desk-4337547_640.jpg', alt: 'Nature' },        
        { id: 6, url: 'https://cdn.pixabay.com/photo/2015/08/07/00/34/lenovo-878838_640.jpg', alt: 'Nature' },        
    ]);  
    
    const loadImage = (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
            const target = entry.target as HTMLImageElement;
            target.src = target.dataset.src as string;
            // Add a 'loaded' class for animation
            target.classList.add('loaded');
        }
    }

    return { imagesShowcase, imagesAIShorts, loadImage }
});