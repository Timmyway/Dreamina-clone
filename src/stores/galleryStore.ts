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
    ]);

    const imagesAIShorts = ref<Image[]>([
        { id: 1, url: 'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg', alt: 'Nature' },
        { id: 2, url: 'https://cdn.pixabay.com/photo/2017/08/06/05/44/people-2589186_640.jpg', alt: 'Nature' },
        { id: 3, url: 'https://cdn.pixabay.com/photo/2020/03/05/17/35/tech-news-4905017_640.jpg', alt: 'Nature' },
        { id: 4, url: 'https://cdn.pixabay.com/photo/2019/07/13/10/39/desk-4334527_640.jpg', alt: 'Nature' },
        { id: 5, url: 'https://cdn.pixabay.com/photo/2019/07/14/16/37/desk-4337547_640.jpg', alt: 'Nature' },        
        { id: 6, url: 'https://cdn.pixabay.com/photo/2015/08/07/00/34/lenovo-878838_640.jpg', alt: 'Nature' },        
    ]);    

    return { imagesShowcase, imagesAIShorts }
});