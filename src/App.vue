<template>
  <div id="app">
    <Nav/>
    <img alt="Vue logo" src="./assets/logo.png" />
    <FilesTable />

    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import FilesTable from "./components/FilesTable.vue";

export default {
  name: "App",
  components: {
    Nav,
    FilesTable,
  },
};
</script>

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
