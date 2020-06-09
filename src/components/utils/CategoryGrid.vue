<template>
  <v-row>
    <v-col cols="4" v-for="d in data" :key="d.id">
      <v-card id="category-sheet" :color="d.color" @click="goToItem(d.id)">
        <v-row class="fill-height" align="center" justify="center">
          <v-icon color="white" x-large>
            {{ d.icon }}
          </v-icon>
        </v-row>
      </v-card>
      <p class="text-center body-2 mt-2 mb-0">
        {{ d.title }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CategoryGrid",
  props: {
    title: String,
    route: String,
    data: Array,
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/${this.route}/${id}`);
    },
  },
};
</script>

<style scoped>
#category-sheet {
  height: 90px;
  max-width: 90px;
  border-radius: 25px;
  margin: auto;
}
</style>
