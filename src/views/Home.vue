<template>
  <v-container>
    <section id="map-selector">
      <SelectMapLocation />
    </section>
    <div class="py-2"></div>
    <section id="trending-events">
      <TitleWithButton title="Trending events" ctaTitle="See all" route="events" />
      <Slider route="events" :data="getTrendingEvents" />
    </section>
    <div class="py-2"></div>
    <section id="trending-discounts">
      <TitleWithButton title="Trending discounts" ctaTitle="See all" route="discounts" />
      <Slider route="discounts" :data="getTrendingDiscounts" />
    </section>
    <div class="py-2"></div>
    <section id="categories">
      <!-- <TitleWithButton title="Trending categories" ctaTitle="See all" route="categories" /> -->
      <CategoryGrid route="categories" :data="getTrendingCategories" />
    </section>
  </v-container>
</template>

<script>
import TitleWithButton from "@/components/utils/TitleWithButton";
import SelectMapLocation from "@/components/utils/SelectMapLocation";
import Slider from "@/components/utils/Slider";
import CategoryGrid from "@/components/utils/CategoryGrid";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("Events", ["getTrendingEvents"]),
    ...mapGetters("Discounts", ["getTrendingDiscounts"]),
    ...mapGetters("Categories", ["getTrendingCategories"]),
  },
  components: {
    TitleWithButton,
    SelectMapLocation,
    Slider,
    CategoryGrid,
  },
};
</script>
