<template>
  <form @submit.prevent="login" class="login">
    <h1>Login Page</h1>

    <div class="input-group">
      <label for="username">Username</label>
      <input type="text" v-model="username">
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" v-model="password">
    </div>

    <button type="submit">Login</button>

  </form>
</template>

<script>
import { loginUser, setAuthToken } from '../utils/auth'

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
        loginUser(this.username, this.password).then((res) => {
          setAuthToken(res.data.access_token)
          this.$router.push('/')
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}



</script>
