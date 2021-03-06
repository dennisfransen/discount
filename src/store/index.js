import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Discounts from "./discounts";
import Events from "./events";
import Categories from "./categories";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    message: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    register({ commit }, { email, password, displayName}) {
      commit("setError", null);
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (data) => {
          await firebase.auth().currentUser.updateProfile({
            displayName: displayName,
          });
          return data;
        })
        .then(data => {
          commit("setUser", data.user);
          router.replace("/");
        })
        .catch(err => {
          commit("setError", err);
        })
    },
    login({ commit }, user) {
      commit("setError", null);
      firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
          commit("setUser", user);
          router.replace("/");
        })
        .catch(err => {
          commit("setError", err);
        })
    },
    logout({ commit }) {
      commit("setError", null);
      firebase.auth().signOut()
        .then(() => {
          commit("setUser", null);
          router.replace("/login");
        })
        .catch(err => {
          commit("setError", err);
        })
    },
    autoLogin({ commit }, user) {
      commit("setUser", user);
      // router.replace("/");
    },
    sendPasswordReset({ commit }, email) {
      commit("setError", null);
      firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        commit("setMessage", email);
      }).catch(function(err) {
        commit("setError", err);
      });
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getError: (state) => {
      return state.error;
    },
    getMessage: (state) => {
      return state.message;
    },
  },
  modules: {
    Discounts,
    Events,
    Categories,
  },
});
