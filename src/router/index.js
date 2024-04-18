import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Adjust import paths for components
import Contact from '../components/Contact.vue'; // Adjust import paths for components
import FAQs from '../components/FAQs.vue'; // Adjust import paths for components
import Restaurants from '../components/Restaurants.vue'; // Adjust import paths for components

const routes = [
  { path: '/', component: Home },
  { path: '/restaurants', component: Restaurants },
  { path: '/faq', component: FAQs },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


createApp(App).use(router).mount('#app');
