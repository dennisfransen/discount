<template>
    <v-row no-gutters>
        <v-col cols="6" class="pr-1">
            <v-dialog ref="dialog1" v-model="startDateModal" :return-value.sync="startDate" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <p>Start date</p>
                    <v-text-field
                        v-model="startDate"
                        solo
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="startDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="startDateModal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="onSaveDatePressed">OK</v-btn>
                </v-date-picker>
            </v-dialog>
        </v-col>
        <v-col cols="6" class="pl-1">
            <v-dialog ref="dialog2" v-model="endDateModal" :return-value.sync="endDate" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <p>End date</p>
                    <v-text-field
                    v-model="endDate"
                    solo
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="endDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="endDateModal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="onSaveDatePressed">OK</v-btn>
                </v-date-picker>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => ({
    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    startDateModal: false,
    endDateModal: false,
  }),
  methods: {
    onSaveDatePressed() {
      this.$refs.dialog1.save(this.startDate);
      this.$refs.dialog2.save(this.endDate);
      this.$emit("dates", this.startDate, this.endDate);
      //   this.modal = false;
    }
  }
};
</script>
