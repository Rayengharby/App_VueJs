import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( "../views/AboutView.vue"),
  },
  {
    path: "/Events",
    name: "Events",
    component: () =>
    import("../views/EventList.vue"),   
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () =>
      import("../views/ContactView.vue"),
  },
  
  {
    path: "/store",
    name: "StoreView",
    component: () =>
      import("../views/StoreView .vue"),
  },
  
 
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
