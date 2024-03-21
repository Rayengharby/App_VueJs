<template>
  <div class="home-container py-5">
    <Store1World :products="products" @addtocart="addtocart" @removetocart="removetocart" />
    <!-- panier -->
    <div class="cart-container">
      <router-link to="/cart" class="cart-icon">
        <i class="bi bi-cart4"></i>
        <span class="badge bg-dark text-white rounded-pill">{{ cart }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Store1World from "@/components/Store1World.vue";

export default {
  name: "StoreView",
  components: {
    Store1World,
  },
  data() {
    return {
      cart: 0,
      products: [
        { id: 1, name: "Jacket", brand: "imitation leather", image: require('@/assets/Jacket.jpg'), prix: "180 DT", instock: true },
        { id: 2, name: "T-shirt", brand: "White", image: require('@/assets/t-shirt_blanc.jpg'), prix: "30 DT", instock: true },
        { id: 3, name: "Socks", brand: "Blue", image: require('@/assets/socks_blue.jpg'), prix: "10 DT", instock: true },
        { id: 4, name: "Hood", brand: "Black", image: require('@/assets/capuche.jpg'), prix: "80 DT", instock: false },
        { id: 5, name: "T-shirt ", brand: "Mario", image: require('@/assets/mario-3d-land.jpg'), prix: "120 DT", instock: true },
        { id: 6, name: "Hood ", brand: "Red & Green", image: require('@/assets/red_and_green_hoodie_mockup.jpg'), prix: "100 DT", instock: true },
        { id: 7, name: "Jeans ", brand: "Blue", image: require('@/assets/jeans-bleus-isoles-fond-transparent_191095-17299.jpg'), prix: "79 DT", instock: true },
        { id: 8, name: "T-shirt ", brand: "Mario", image: require('@/assets/images.jpg'), prix: "60 DT", instock: true },
        { id: 9, name: " Hood ", brand: "Motors", image: require('@/assets/capuche2.jpg'), prix: "249 DT", instock: true },
      ],
    };
  },
  methods: {
    addtocart() {
      this.cart += 1;
    },
    removetocart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
  },
};
</script>

<style scoped>
.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

.home-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #F1EAFF;
}

.cart-container {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

.cart-icon {
  font-size: 24px;
  color: black;
  text-decoration: none;
  position: relative;
}

.cart-icon i {
  margin-right: 5px;
}
</style>
