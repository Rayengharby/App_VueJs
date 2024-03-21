<template>
  <div class="contact">
    <div v-if="message" class="success-message">
      <div class="success-content">
        <p>Formulaire soumis avec succès!</p>
        <ul v-if="reviews.length > 0">
          <li v-for="(review, index) in reviews" :key="index">
           <strong> {{ review.name }} </strong> Le propriétaire de ce courrier <strong>{{ review.email }}</strong> a donneé ce msg <strong>{{ review.message }} </strong>
          </li>
        </ul>
      </div>
    </div>
    <ContactWorld @review-submitted="addReview"></ContactWorld>
  </div>
</template>

<script>
import ContactWorld from "@/components/ContactWorld.vue";

export default {
  name: "ContactView",
  data() {
    return {
      reviews: [],
      message: false
    };
  },
  components: {
    ContactWorld,
  },
  methods: {
    addReview(review) {
      this.reviews.push(review);
      this.message = true;
      console.log(this.reviews);
    }
  }
};
</script>

<style scoped>
.success-message {
  background-color: #e6f7e9;
  border: 1px solid #52c41a;
  color: #52c41a;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
