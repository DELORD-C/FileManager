<template>
  <div v-if="dfiles" class="table">
    <table>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(file, index) in dfiles.data" v-bind:key="index">
        <td>{{ file.file }}</td>
        <td>{{ file.size }}</td>
        <td>{{ file.mtime }}</td>
        <td>
          <button>VIEW</button>
          <button>RENAME</button>
          <button>DELETE</button>
          <button>DOWNLOAD</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { getUserInfo } from '../utils/auth';
export default {
  name: "FilesTable",
  data() {
    return {
      dfiles: []
    };
  },
  async mounted() {
    let user = getUserInfo();
    if (!user) {
      this.$router.push('/login');
    }
    else {
      const response = await axios({
                  url: "http://localhost:3000/ls",
                  method: 'POST',
                  data: {
                      username: user.username
                  }
              });
      this.dfiles = response.data;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
