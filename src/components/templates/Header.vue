<template>
  <div id="header">
    <v-app-bar app color="white" flat height="64">
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/" id="discount-title">
          <span class="font-weight-light">dis</span>
          <span class="font-weight-bold">Event</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary right width="100%">
      <v-list>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data: () => ({
    drawer: false,
    item: 1,
    items: [
      { text: "Home", icon: "mdi-home", link: "/" },
      { text: "Events", icon: "mdi-music-note-eighth", link: "/events" },
      { text: "Discounts", icon: "mdi-tag", link: "/discounts" },
      { text: "Categories", icon: "mdi-shape", link: "/categories" },
      { text: "Profile", icon: "mdi-account", link: "/profile" },
    ],
  }),
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
#discount-title {
  text-decoration: none;
  color: grey;
}
</style>
