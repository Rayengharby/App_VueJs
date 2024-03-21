<template>
  <div class="container py-4">
    <div class="row car-section d-flex align-items-stretch">
      <div v-for="(product, index) in products" :key="index" class="col-lg-4 mb-5">
        <div class="card shadow rounded">
          <img v-if="product.instock" :src="product.image" alt="">
          <img v-else :src="horsstock" alt="">
          <div class="card-body">
            <h5 class="card-title text-center">{{ product.name }} </h5>
            <h6> {{ product.brand }}</h6> <hr>
            <div class=" text-center">
            <strong><h7> Prix : {{ product.prix }}</h7> </strong><hr>
          </div>
            <div class="text-center">
              
              <button
  class="btn btn-primary mx-2"
  @click="addToCart"
  :disabled="!product.instock"
  :class="{ 'disabledButton': !product.instock }"
>
  Add to cart
</button>
              <button class="btn btn-danger" @click="removeFromCart">Remove </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store1World",
  props: {
    products: Array,
  },
  data(){
    return{
      horsstock: require('@/assets/images/out-of-stock-img.png'),
    };
  },
  methods: {
    addToCart() {
      this.$emit('addtocart');
    },
    removeFromCart() {
      this.$emit('removetocart');
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
