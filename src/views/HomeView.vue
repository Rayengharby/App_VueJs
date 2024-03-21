<template>
  <div class="home-container py-5">
    <div class="text-content">
      <h1>{{ product.toUpperCase() }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      product: "Bienvenue sur Web Store",
      description: "Achat en ligne des vêtements Nouvelle collection",
    };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: url("@/assets/background.jpg");
  background-size: cover;
  background-position: center 120%; 
  background-repeat: no-repeat;
  color: white;
  height: 100vh;
}


.text-content {
  width: 50%;
}

h1 {
  color: #333;
}

p {
  color: #242323;
  font-size: 22px;
}
</style>
