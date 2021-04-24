import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services";
import Offers from "../views/Offers";
import Deduction from "../views/Deduction";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/deduction",
    name: "Deduction",
    component: Deduction,
  },
  {
    path: "/offers",
    name: "Offers",
    component: Offers,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
