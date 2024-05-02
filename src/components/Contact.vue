<template>
    <div class="header-container">
      <div class="header-image">
        <img src="../image/headerf.jpg" alt="Header Image">
      </div>
      <header>
        <div id="app">
          <nav>
            <button @click="goTo('/')">Home</button>
            <button @click="goTo('/restaurants')">Restaurants</button>
            <button @click="goTo('/faq')">FAQ</button>
            <button @click="goTo('/contact')">Contact Us</button>
          </nav>
        </div>
      </header>
  
      <div class="contact-container">
        <h2>Contact Us</h2>
        <div class="contact-info">
          <p>Email: gerswynlu@ust.edu.ph </p>
          <p>Phone: +1234567890</p>
          <p>Address: UST, MANILA</p>
        </div>
      </div>
    </div>
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
  .button {
    text-align: center;
    margin-top: 20px;
  }
  
  .button button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #54575a;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .contact-container {
    margin-top: 20px;
    text-align: center;
    font-family: "Garamond", serif;
    font-size: x-large;
  }
  
  .contact-info {
    margin-top: 20px;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .header-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    overflow-y: auto;
  }
  
  .header-image {
    position: relative;
    height: 60%;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }
  
  .header-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    z-index: 2;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    margin: 0 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    font-family: "Garamond", serif;
  }
  
  nav ul li a:hover {
    color: #ffffff;
    text-shadow: 0 0 10px #bfff00;
    font-size: 30px;
    outline: none;
  }
  </style>
  