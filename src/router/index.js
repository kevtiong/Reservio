import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Adjusted import path for components
import Contact from '../components/Contact.vue'; // Adjusted import path for components
import FAQs from '../components/FAQs.vue'; // Adjusted import path for components
import Restaurants from '../components/Restaurants.vue'; // Adjusted import path for components

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
