<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    
      <a class="navbar-brand" href="#">
      </a>

      <div class="navbar-collapse justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/store">Store</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Events">Events</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link> |
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link> |
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
    </router-view>

</template>
<script>

export default {
 
  name: "app",

 
 // data() {
   // return {
     // ph: require("@/assets/logo.png"),
    //};
  //},
};
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.6s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.6s ease-in;
}

.navbar ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #4fc3dc;
  text-decoration: none;
  transition: 0.3s;
}

.navbar ul li:last-child a {
  border: none; 
}




</style>
