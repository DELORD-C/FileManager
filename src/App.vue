<template>
  <div id="app">
    <Nav />

    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
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

.fileIcon {
  width: 20px;
  margin-right: 4px;
}

.filePrev {
  width: 14px;
}

.actionBtn {
  background: transparent;
  width: 32px;
  padding: 0 2px;
  border: none;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}

.alignLeft {
    text-align: left;
    vertical-align: middle;
    align-items: center;
    display: flex;
}

#popupIn {
    max-width: 800px;
    width: 100%;
}

#popupIn > * {
  width: 100%;
}

a {
  text-decoration: none;
}

.home > img {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    margin: auto;
}

#nav > button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid #4cc8ca;
    color: #4cc8ca;
    font-weight: bold;
    text-transform: uppercase;
    background: none;
    padding: 10px;
    cursor: pointer;
}

.actionBtn > img {
  width: 100%;
}

td {
  padding: 0 10px;
  height: 32px;
}

.prevFolder {
    position: absolute;
    top: -30px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
}

table {
  margin: 100px auto;
  position: relative;
}

#popup {
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.678);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
