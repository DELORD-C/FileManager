<template>
  <div id="nav">
    <router-link v-if="isAuth" to="/">Home |</router-link>
    <router-link v-if="isAuth === false" to="/login">Login</router-link>
    <button v-else v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { clearAuthToken, isLoggedIn } from '../utils/auth'

export default {
  name: "Nav",
  data() {
    return {
      isAuth: isLoggedIn(),
    }
  },
  methods: {
    logout() {
      clearAuthToken()
      this.$router.push('/login')
      location.reload()
    }
  }
};
</script>

<style scoped></style>
