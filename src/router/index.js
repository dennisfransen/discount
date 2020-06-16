import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./authGuard";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import Events from "@/views/Events"
import Event from "@/views/Event"
import Discounts from "@/views/Discounts"
import Discount from "@/views/Discount"
import Categories from "@/views/Categories"
import Category from "@/views/Category"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: AuthGuard,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: AuthGuard,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    beforeEnter: AuthGuard,
  },
  {
    path: "/events/:id",
    name: "Event",
    component: Event,
    beforeEnter: AuthGuard,
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: Discounts,
    beforeEnter: AuthGuard,
  },
  {
    path: "/discounts/:id",
    name: "Discount",
    component: Discount,
    beforeEnter: AuthGuard,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
    beforeEnter: AuthGuard,
  },
  {
    path: "/categories/:id",
    name: "Category",
    component: Category,
    beforeEnter: AuthGuard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
