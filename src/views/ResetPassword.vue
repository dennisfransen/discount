<template>
  <v-container fill-height>
    <v-card class="mx-auto py-6" flat width="800" v-if="!getMessage">
        <v-card-text>
            <h1 class="text-center font-weight-light">Reset your password</h1>
        </v-card-text>
        <v-card-text>
            <v-text-field solo type="email" label="Email" v-model="email" clearable @keyup.enter="onResetPasswordPressed"></v-text-field>
        </v-card-text>
        <v-card-actions class="px-4">
            <v-btn block height="48" x-large color="accent" @click="onResetPasswordPressed">Send email</v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn block text x-large to="/">Back</v-btn>
        </v-card-actions>
    </v-card>
    <v-card v-else class="mx-auto py-6" flat width="800">
        <v-card-text>
            <h1 class="text-center font-weight-light line-height">
                Email has been sent to <br> {{ getMessage }}
            </h1>
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name: "ResetPassword",
    created() {
        this.setMessage(null);
    },
    data: () => ({
        email: "",
    }),
    computed: {
        ...mapGetters(["getMessage"]),
    },
    methods: {
        ...mapActions(["sendPasswordReset"]),
        ...mapMutations(["setMessage"]),
        onResetPasswordPressed() {
            this.sendPasswordReset(this.email);
            setTimeout(() => {
                this.$router.go(-1)
            }, 3000)
        },
    }
}
</script>

<style scoped>
.line-height {
    line-height: 3rem;
}
</style>