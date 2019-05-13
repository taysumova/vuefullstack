<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 register-form">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-2 pr-2 pt-2 pb-2">
          <input type="email" name="email" v-model="email" placeholder="email">
          <br>
          <input type="password" name="password" v-model="password" placeholder="password">
          <br>
          <div class="error" v-html="error"></div>
          <v-btn @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  <!-- <div>
    <h1>Register</h1>
  </div>-->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 1000px;
}
.error {
  color: red;
}
</style>
