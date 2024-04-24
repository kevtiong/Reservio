<template>
    <div id="app">
      <Header />
      <main>
        <router-view></router-view>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
import { createRouter, createWebHistory } from 'vue-router';
import Header from './Header.vue'; // Import the header component
import Footer from './Footer.vue'; // Import the footer component
import Home from './components/Home.vue'; // Import your Home component
import About from './components/About.vue'; // Import your About component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  components: {
    Header,
    Footer
  },
  router // Attach the router instance to the component
}
</script>
  
  <style>
  #app {
    font-family: Arial, sans-serif; /* Set the font family for the entire app */
    min-height: 100vh; /* Ensure the app takes at least the full height of the viewport */
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack child elements vertically */
  }
  
  main {
    flex: 1; /* Allow the main content area to grow to fill available space */
    padding: 20px; /* Add some padding around the main content */
  }
  
  /* Add any other global styles here */
  
  </style>
  