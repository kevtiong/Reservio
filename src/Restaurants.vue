<template>
    <div class="header-container">
      <div class="header-image">
        <img src="./image/headerf.jpg" alt="Header Image">
      </div>
      <header>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/restaurants">Restaurants</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div class="top-restaurants">
        <h2>Top Restaurants</h2>
        <div class="restaurant-cards">
          <!-- Restaurant Card 1 -->
          <div class="restaurant-card" v-for="(restaurant, index) in filteredRestaurants" :key="index">
            <img :src="'./image/' + restaurant.image" :alt="restaurant.name + ' Image'">
            <div class="restaurant-info">
              <h3>{{ restaurant.name }}</h3>
              <p>{{ restaurant.description }}</p>
              <button @click="bookNow(restaurant)">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
        restaurants: [
          {
            name: 'Wolfgang Steakhouse',
            image: 'wolfgang.jpeg',
            description: 'Just like a well-cooked steak, the restaurant boasts of masculine and old-world charm. It incorporates the same design elements of original locations in New York, such as a long, mahogany solid wood bar, wooden planked floors, wood wainscoting, alabaster chandeliers and mosaic tile ceiling reminiscent of the original Gustavino tile ceiling of the first location in New York.'
          },
          {
            name: 'Mamou',
            image: 'mamou.jpg',
            description: 'Mamou Prime coming from the popular chain of restaurants “Mamou” is now ready to serve you at The Podium. Mamou Prime serves quality and flavorful dishes. They have an immensely wide variety of offerings. Don’t forget to try their popular home-kitchen dishes, especially their famous steak and pasta.'
          },
          {
            name: 'China Blue by Jereme Leung',
            image: 'chinablue.jpg',
            description: 'The premier Chinese restaurant of Conrad Manila. Conrad Manila has partnered with Chinese celebrity master chef, Jereme Leung, who is responsible for creating the menu for the restaurant. China Blue by Jereme Leung features dishes prepared using traditional Chinese cooking techniques with a modern approach to presentation.'
          },
          {
            name: 'Senju',
            image: 'senju.jpg',
            description: 'Artistically created and presented by a team of talented chefs that aim to bring out the real flavours of Japan, Senju’s gourmet creations will have you spellbound. The dishes use fresh, quality ingredients and are prepared in a cooking style that preserves each ingredient’s flavour and balances overall taste.'
          }
        ]
      }
    },
    computed: {
      filteredRestaurants() {
        if (!this.searchTerm) {
          return this.restaurants;
        }
        return this.restaurants.filter(restaurant => {
          return restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      }
    },
    methods: {
      bookNow(restaurant) {
        // Implement your booking logic here
        console.log('Booking now:', restaurant.name);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  