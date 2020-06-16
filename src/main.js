import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from 'firebase/app';
import "firebase/auth"

Vue.config.productionTip = false

let app = '';

const firebaseConfig = {
  apiKey: "AIzaSyBeZ63AOv2xKC6bgO2C9DqY0F3Kg958C0M",
  authDomain: "disevent-1d879.firebaseapp.com",
  databaseURL: "https://disevent-1d879.firebaseio.com",
  projectId: "disevent-1d879",
  storageBucket: "disevent-1d879.appspot.com",
  messagingSenderId: "338200746333",
  appId: "1:338200746333:web:806228dc35bea79ee8f0b4",
  measurementId: "G-DGSMK3JM8R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    store.dispatch("autoLogin", user);
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
});


