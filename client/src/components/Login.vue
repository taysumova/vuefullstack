<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 login-form">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            type="email"
            name="email"
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            type="password"
            name="password"
            v-model="password"
            label="Password"
          ></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn
            class="cyan"
            dark
            @click="login">
            login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
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
    .login-form {
        max-width: 1000px;
    }
</style>
