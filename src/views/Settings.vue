<template>
  <v-container>
    <v-sheet class="mx-auto" max-width="800">
      <h2 class="ml-4">Välkommen {{ getUser.displayName }}</h2>
      <div class="py-2"></div>
      <v-list flat>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="mt-8 px-3">
        <v-btn block @click="logout" color="error">Logout</v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  data: () => ({
    item: null,
    items: [
      { text: "Add Event", icon: "mdi-plus", link: "/create-event" },
      { text: "Add Discount", icon: "mdi-plus", link: "/create-discount" },
      { text: "Add Category", icon: "mdi-plus", link: "/create-category" },
    ]
  }),
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
