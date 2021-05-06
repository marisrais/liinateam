import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Services from "../views/Services";
import Offers from "../views/Offers";
import Deduction from "../views/Deduction";
import admin_view from "../views/admin_view";
import { authGuard } from "@/auth/authGuard";

Vue.use(VueRouter)

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
    path: "/admin_view",
    name: "admin_view",
    component: admin_view,
    beforeEnter: authGuard,
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

const router = new VueRouter({
  routes
})


export default router;
