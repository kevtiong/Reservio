import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue'; // Import the App.vue file
import router from './router'; // Import your router configuration

createApp(App) // Create a new Vue app instance with App.vue as the root component
  .use(router) // Use the router configuration
  .mount('#app'); // Mount the app to the '#app' element in index.html
