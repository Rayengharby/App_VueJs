<template>
  <div class=" container events py-5">
    <h1> New Collection </h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/Eventcard.vue";
import axios from "axios";
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null
    }
  },
  created() {
  axios.get('https://my-json-server.typicode.com/Rayengharby/Events_shop/events')
    .then(response => {
      //console.log('events:', response.data);
      this.events = response.data;
    })
    .catch(error => {
      console.error( error);
    });
}

};
</script>
<style scoped>
.events{
  display:flex;
  flex-direction: column ;
  align-items: center;
}
</style>
