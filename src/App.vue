<template>
  <v-app>
    <Headery v-if="isLoggedIn" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Headery from "@/components/templates/Header";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["getUser"]),
    isLoggedIn() {
      return this.getUser !== undefined && this.getUser !== null;
    },
  },
  components: {
    Headery,
  },
};
</script>
