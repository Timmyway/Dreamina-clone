import { createApp } from 'vue'
import './sass/app.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

const pinia = createPinia();
app.use(pinia);

app.mount('#app');