<template>
  <div class="AboutView">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="text-left">
            <h1 class="text-primary"> {{  Titlef  }}</h1>
            <p>{{ description }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-img">
            <img v-bind:src="pho" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      title: "BIENVENU ",
      title1: "Chez Vue_Shop",
      pho: require("@/assets/concept-marketing-appareil_23-2149835027-removebg.png"),
      description: "Bienvenue chez Vue_Shop, votre destination incontournable pour la mode tendance et stylée.  c'est un mode de vie, une expression de soi et une manière de se sentir confiant chaque jour. Notre mission est de vous offrir une expérience shopping exceptionnelle en vous proposant une sélection soigneusement choisie des dernières tendances de la mode. nous avons ce qu'il vous faut pour affirmer votre style unique. Nous travaillons avec passion pour vous offrir des vêtements de qualité qui allient confort, style et durabilité. Notre équipe est constamment à l'affût des dernières tendances, parcourant le monde pour dénicher les meilleures pièces pour votre garde-robe. Chez Vue_Shop, l'expérience client est notre priorité. Nous nous engageons à fournir un service exceptionnel, des conseils de mode personnalisés et une livraison rapide pour que vous puissiez profiter au maximum de votre shopping en ligne. Merci de faire partie de notre communauté de passionnés de la mode. Explorez notre collection et découvrez le plaisir de s'habiller avec style chez Vue_Shop. À la mode, L'équipe de Vue_Shop"
    };
  },
  computed:{
    Titlef(){
      return this.title +" " + this.title1;

    },
  }
};
</script>
<style scoped>
.AboutView{
  background-color: #F1EAFF;
}
.text-left {
  text-align: center;
  max-width: 100%; 
  padding:40px;
  
}

.container {
  max-width: 1300px; 
  margin: 0 auto;
  
}

.form-img img {
  width: 120%; 
  height: auto;
  
}


.row {
  align-items: flex-start;
}


.AboutView {
  background-color: #f8f9fa; 
  padding: 50px 0; 
}

.text-primary {
  color: #007bff; 
}


@media (max-width: 768px) {
  .col-md-6 {
    width: 100%; 
  }
}
</style>
