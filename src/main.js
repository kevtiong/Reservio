import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue'; // Assuming you have an App.vue file as the root component
import router from './router';

createApp(App).use(router).mount('#app');

