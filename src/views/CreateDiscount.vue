<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800">
      <v-card-text>
        <v-text-field label="Title" solo v-model="title"></v-text-field>
        <DatePicker @dates="dateListener" />
          <v-textarea solo label="Description" v-model="description"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="accent">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import DatePicker from "@/components/utils/DatePicker"

export default {
  name: "CreateDiscount",
  data: () => ({
    title: "",
    percentage: "",
    startDate: null,
    endDate: null,
    description: "",
  }),
  methods: {
    dateListener(startDate, endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    },
  },
  components: {
    DatePicker,
  },
};
</script>
