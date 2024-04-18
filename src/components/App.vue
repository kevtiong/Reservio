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
  import Header from './Header.vue'; // Import the header component
  import Footer from './Footer.vue'; // Import the footer component
  
  export default {
    components: {
      Header,
      Footer
    }
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
  