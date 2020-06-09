<template>
  <v-slide-group class="py-1" v-model="selected" mandatory center-active>
    <v-slide-item v-for="d in data" :key="d.id">
      <v-card dark class="mr-2 my-2" height="150" width="250" @click="goToItem(d.id)">
        <v-img :src="d.imageUrl" height="100%">
          <div class="img-overlay">
            <v-row class="fill-height" align="center" justify="center">
              <h1>{{ d.title }}</h1>
            </v-row>
          </div>
        </v-img>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "Slider",
  data: () => ({
    selected: null,
  }),
  props: {
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
.img-overlay {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
