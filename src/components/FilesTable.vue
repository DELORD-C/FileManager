<template>
  <div class="table">
    <table>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
      <tr v-for="file in dfiles" :key="file.name">
        <td>{{ file.name }}</td>
        <td>{{ file.size }}</td>
        <td>{{ file.date }}</td>
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
export default {
  name: "FilesTable",
  data() {
    return {
      dfiles: [
        {
          path: "photos/summer/june/windsurf.jpg",
          name: "windsurf.jpg",
          size: 400,
          type: "file",
          extension: ".jpg",
        },
        {
          path: "photos/winter",
          name: "winter",
          size: 200,
          type: "directory",
        },
        {
          path: "photos/winter/january",
          name: "january",
          size: 200,
          type: "directory",
        },
        {
          path: "photos/winter/january/ski.png",
          name: "ski.png",
          size: 100,
          type: "file",
          extension: ".png",
        },
        {
          path: "photos/winter/january/snowboard.jpg",
          name: "snowboard.jpg",
          size: 100,
          type: "file",
          extension: ".jpg",
        },
      ],
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
