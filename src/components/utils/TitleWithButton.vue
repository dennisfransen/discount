<template>
  <v-row>
    <v-col cols="auto">
      <h1>{{ title }}</h1>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto">
      <div class="text-end">
        <v-btn dark small rounded text class="secondary" @click="goToRoute">
          {{ ctaTitle }}
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TitleWithButton",
  props: {
    title: String,
    ctaTitle: String,
    route: String,
  },
  methods: {
    goToRoute() {
      this.$router.push(`/${this.route}`);
    },
  },
};
</script>
