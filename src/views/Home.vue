<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FilesTable />
  </div>
</template>

<script>
// import { isLoggedIn } from '../utils/auth'
import FilesTable from "../components/FilesTable.vue";

export default {
  name: "Home",
  methods: {},
  components: { FilesTable },
};
</script>
