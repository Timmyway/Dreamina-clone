import { defineStore } from "pinia"
import { ref } from "vue"
import type { SidebarItems } from "../types/sidebar.types";

export const useSidebarStore = defineStore('sidebar', () => {
    const items = ref<SidebarItems>({
        main: [
            { id: 1, label: 'Home', url: '', icon: 'fa-home' },
            { id: 2, label: 'Explore', url: '', icon: 'fa-bomb' },
            { id: 3, label: 'Profile', url: '', icon: 'fa-user' },
        ],
        aiTools: [
            { id: 1, label: 'Assets', url: '' },
            { id: 2, label: 'Image generator', url: '' },
            { id: 3, label: 'Canvas editor', url: '' },
            { id: 4, label: 'Video generator', url: '' },
            { id: 5, label: 'Music generator', url: '' },
        ],
        misc: [
            { id: 1, label: 'Notifications', url: '' },
            { id: 2, label: 'Feedback', url: '' },
            { id: 3, label: 'Invite', url: '' },  
        ]
    });
  
    return { items }
  })