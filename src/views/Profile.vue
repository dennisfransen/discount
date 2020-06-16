<template>
  <v-container>{{ getUser.displayName }}</v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>

<style scoped></style>
