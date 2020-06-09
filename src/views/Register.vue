<template>
  <v-container fill-height>
    <v-card class="mx-auto py-6" flat width="800">
      <v-card-text>
        <h1 class="text-center font-weight-light">Welcome friend</h1>
      </v-card-text>
      <v-card-text>
        <v-text-field solo type="text" label="Username" v-model="username" clearable></v-text-field>
        <v-text-field solo type="email" label="Email" v-model="email" clearable></v-text-field>
        <v-text-field solo type="password" label="Password" v-model="password" clearable></v-text-field>
        <v-text-field solo type="password" label="Repeat password" v-model="passwordVerify" clearable></v-text-field>
      </v-card-text>
      <v-card-actions class="px-4">
        <v-btn block height="48" x-large color="accent">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
  })
};
</script>
