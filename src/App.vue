<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png" />
    <FilesTable />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import FilesTable from "./components/FilesTable.vue";

export default {
  name: "App",
  components: {
    FilesTable,
  },
};
</script>

=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

>>>>>>> 50366b208edbd4b30d38969f5e51b72657d73202
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
