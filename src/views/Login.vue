<template>
  <div class="login">
    <h1>Login Page</h1>

    <div class="input-group">
      <label for="username">Username</label>
      <input type="text" v-model="username">
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" v-model="password">
    </div>

    <button type="button" v-on:click="login">Login</button>

  </div>
</template>

<script>
import { loginUser } from '../utils/auth'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        loginUser(this.username, this.password)
        this.$router.push('/')
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}



</script>
