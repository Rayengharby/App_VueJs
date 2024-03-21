<template>
  <div class="card event-card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-center"><strong>{{event.name}}</strong></h5>
      <h6 class="card-subtitle mb-2 text-body-secondary text-center">{{event.brand}}</h6>
      <h6 class="card-subtitle mb-2 text-body-secondary"> {{event.description}}  {{ event.date }}</h6>
      <p class="card-text">
       
      </p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  //props: {
  //msg: String,
  //},
  props: {
    event: Object,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>