<script setup lang="ts">
import TwSidebar from './components/TwSideBar.vue';
import TwMenuTop from './components/TwMenuTop.vue';
import TwTab from './components/ui/TwTab.vue';
import TwGallery from './components/TwGallery.vue';
import { useGalleryStore } from './stores/galleryStore';
import { storeToRefs } from 'pinia';
import { useTagTabs } from './composables/useTagTabs';
import './assets/fa/css/all.min.css';

const galleryStore = useGalleryStore();
const { imagesShowcase, imagesAIShorts } = storeToRefs(galleryStore);

const { tagTabs, activeTabClass, changeTab } = useTagTabs();
</script>

<template>
  <main class="bg-primary">
    <div class="grid grid-cols-12">
      <div class="tw-app-sidebar col-span-2 p-2 text-white">
        <tw-sidebar></tw-sidebar>
      </div>
      <div class="col-span-10">
        <section>
          <!-- Menu en haut -->
          <div>
            <tw-menu-top></tw-menu-top>
          </div>

          <div>
            <!-- Deux onglets : showCase, aiShorts -->
            <tw-tab>
              <template #header>
                <div class="flex items-center gap-1 py-4 px-2">
                  <button
                    v-for="(tagTab,index) in tagTabs" :key="index"
                    class="px-3 py-1 rounded-lg border border-solid border-gray-300"
                    :class="[activeTabClass(tagTab)]"
                    @click="changeTab(tagTab)"
                  >
                    {{ tagTab }}
                  </button>                  
                </div>
              </template>
              <template #showCase>
                <div class="p-4">
                  <!-- Gallerie d'image -->
                  <tw-gallery :images="imagesShowcase"></tw-gallery>
                </div>
              </template>
              <template #aiShorts>
                <div class="p-4">
                  <!-- Gallerie d'image -->
                  <tw-gallery :images="imagesAIShorts"></tw-gallery>
                </div>
              </template>
            </tw-tab>            
          </div>
        </section>        
      </div>
    </div>
  </main>
</template>

<style scoped>
.tw-app-sidebar {
  min-width: 12rem;  
}
</style>
