import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Restaurants from './components/Restaurants.vue';
import FAQs from './components/FAQs.vue';
import Contact from './components/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/restaurants', component: Restaurants },
  { path: '/faqs', component: FAQs },
  { path: '/contact', component: Contact },
 ];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

createApp(Home).use(router).mount('#app');
