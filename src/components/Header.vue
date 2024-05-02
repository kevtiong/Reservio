<template>
    <header>
      <div class="logo">Logo?</div>
      <nav>
        <button @click="goTo('/')">Home</button>
          <button @click="goTo('/restaurants')">Restaurants</button>
          <button @click="goTo('/faq')">FAQ</button>
          <button @click="goTo('/contact')">Contact Us</button>
      </nav>
    </header>
  </template>
  
  <script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

  
  <style scoped>
  header {
    background-color: #333; /* Header background color */
    color: #fff; /* Text color */
    padding: 10px 20px; /* Padding */
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center align items vertically */
    justify-content: space-between; /* Space out items horizontally */
  }
  
  button { /* Home, restaurants button */
  padding: 10px 20px; /* Adjust padding as needed */
  margin: 0 10px; /* Adjust margin as needed */
  background-color: #dde1e6; /* Button background color */
  color: rgb(95, 62, 62); /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Cursor style */
  font-size: 16px; /* Font size */
}


  .logo {
    font-size: 24px; /* Logo font size */
  }
  
  nav {
    display: flex; /* Use flexbox for layout */
  }
  
  nav a {
    color: #fff; /* Link color */
    text-decoration: none; /* Remove underline */
    margin-left: 20px; /* Add spacing between links */
  }
  </style>
  