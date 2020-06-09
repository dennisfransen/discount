import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import Discounts from "./discounts";
import Events from "./events";
import Categories from "./categories";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: "hello@gmail.com",
      password: "MyPassword",
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    register({ commit, dispatch }, user) {
      commit("setUser", user);
      dispatch("login", user);
    },
    login({ commit }, user) {
      commit("setUser", user);
      router.replace("/");
    },
    logout({ commit }) {
      commit("setUser", null);
      router.replace("/login");
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  modules: {
    Discounts,
    Events,
    Categories,
  },
});
