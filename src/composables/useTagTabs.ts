import { ref } from 'vue';

export function useTagTabs() {
    const activeTab = ref('trends');
        const tagTabs = ref(['trends', 'photo', 'product-design', 'anime']);

    const activeTabClass = (tab: string) => {
        return (activeTab.value === tab) ? 'bg-slate-600 text-white font-bold' : 'bg-slate-900 text-gray-300';
    };

    const changeTab = (tab: string) => {
        activeTab.value = tab;
    }

    return { tagTabs, activeTabClass, changeTab }
}