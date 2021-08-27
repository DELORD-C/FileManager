<template>
  <div v-if="dfiles" class="table">
    <table>
      <tr v-if="dfiles.length > 1">
        <th>Nom</th>
        <th>Taille</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
      <tr v-else>
        <th>Vide</th>
      </tr>
      <tr v-for="(file, index) in dfiles" v-bind:key="index">
        <a v-if="file.file == '..'" :href="file.get" class='prevFolder'>
          <img class='filePrev' src="../assets/prev.png">
          <img class='fileIcon' src="../assets/folder.png">
        </a>
        <td v-else-if="file.isFolder" class='alignLeft' :title='file.fullFile'>
          <a :href="file.get">
            <img class='fileIcon' src="../assets/folder.png">
            {{ file.file }}
          </a>
        </td>
        <td v-else class='alignLeft' :title='file.fullFile'>
          <img v-if="file.ext == '.aep'" class='fileIcon' src="../assets/files/aep.svg">
          <img v-else-if="file.ext == '.ai'" class='fileIcon' src="../assets/files/ai.svg">
          <img v-else-if="file.ext == '.avi'" class='fileIcon' src="../assets/files/avi.svg">
          <img v-else-if="file.ext == '.css'" class='fileIcon' src="../assets/files/css.svg">
          <img v-else-if="file.ext == '.docx'" class='fileIcon' src="../assets/files/docx.svg">
          <img v-else-if="file.ext == '.exe'" class='fileIcon' src="../assets/files/exe.svg">
          <img v-else-if="file.ext == '.html'" class='fileIcon' src="../assets/files/html.svg">
          <img v-else-if="file.ext == '.jpg'" class='fileIcon' src="../assets/files/jpg.svg">
          <img v-else-if="file.ext == '.jpeg'" class='fileIcon' src="../assets/files/jpg.svg">
          <img v-else-if="file.ext == '.js'" class='fileIcon' src="../assets/files/js.svg">
          <img v-else-if="file.ext == '.json'" class='fileIcon' src="../assets/files/json.svg">
          <img v-else-if="file.ext == '.mp3'" class='fileIcon' src="../assets/files/mp3.svg">
          <img v-else-if="file.ext == '.mp4'" class='fileIcon' src="../assets/files/mp4.svg">
          <img v-else-if="file.ext == '.pdf'" class='fileIcon' src="../assets/files/pdf.svg">
          <img v-else-if="file.ext == '.png'" class='fileIcon' src="../assets/files/png.svg">
          <img v-else-if="file.ext == '.psd'" class='fileIcon' src="../assets/files/psd.svg">
          <img v-else-if="file.ext == '.svg'" class='fileIcon' src="../assets/files/svg.svg">
          <img v-else-if="file.ext == '.txt'" class='fileIcon' src="../assets/files/txt.svg">
          <img v-else-if="file.ext == '.xlsx'" class='fileIcon' src="../assets/files/xlsx.svg">
          <img v-else-if="file.ext == '.xls'" class='fileIcon' src="../assets/files/xlsx.svg">
          <img v-else-if="file.ext == '.zip'" class='fileIcon' src="../assets/files/zip.svg">
          <img v-else-if="file.ext == '.rar'" class='fileIcon' src="../assets/files/zip.svg">
          <img v-else class='fileIcon' src="../assets/files/file.svg">
          {{ file.file }}
        </td>
        <td v-if="!file.isFolder">{{ file.size }}</td>
        <td v-if="!file.isFolder">{{ file.mtime }}</td>
        <td v-if="!file.isFolder">
          <button v-if="file.ext == '.mp3'" class='actionBtn view' v-on:click="showMusic(file.download)"><img src='../assets/view.png' alt='VIEW'></button>
          <button v-if="file.ext == '.mp4'" class='actionBtn view' v-on:click="showVideoMP4(file.download)"><img src='../assets/view.png' alt='VIEW'></button>
          <button v-if="file.ext == '.svg'" class='actionBtn view' v-on:click="showImg(file.download)"><img src='../assets/view.png' alt='VIEW'></button>
          <button v-if="file.ext == '.png'" class='actionBtn view' v-on:click="showImg(file.download)"><img src='../assets/view.png' alt='VIEW'></button>
          <button v-if="file.ext == '.jpg'" class='actionBtn view' v-on:click="showImg(file.download)"><img src='../assets/view.png' alt='VIEW'></button>
          <button v-if="file.ext == '.jpeg'" class='actionBtn view' v-on:click="showImg(file.download, event)"><img src='../assets/view.png' alt='VIEW'></button>
          <button class='actionBtn rename'><img src='../assets/rename.png' alt='RENAME'></button>
          <button :id="file.id" class='actionBtn delete'><img src='../assets/delete.png' v-on:click="deleteFile(file.id, file.download)" alt='DELETE'></button>
          <a target='_BLANK' :href="file.download" class='actionBtn download'><img src='../assets/download.png' alt='DOWNLOAD'></a>
        </td>
      </tr>
    </table>
    <div id='popup' v-on:click="closePopup(event)">
      <div id='popupIn'></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getAuthToken, getUserInfo } from '../utils/auth';
export default {
  name: "FilesTable",
  data() {
    return {
      dfiles: []
    };
  },
  methods: {
    closePopup: function() {
      document.getElementById('popupIn').innerHTML = "";
      document.getElementById('popup').style.opacity = "0";
      document.getElementById('popup').style.pointerEvents = "none";
    },
    showMusic: function(url) {
      document.getElementById('popupIn').innerHTML = "<audio controls src='" + url + "'>Your browser does not support the <code>audio</code> element.</audio>";
      document.getElementById('popup').style.opacity = "1";
      document.getElementById('popup').style.pointerEvents = "all";
    },
    showVideoMP4: function(url) {
      document.getElementById('popupIn').innerHTML = "<video preload='auto' controls><source src="+ url +" type='video/mp4'><p>Votre navigateur ne prend pas en charge les vidéos HTML5.</p></video>";
      document.getElementById('popup').style.opacity = "1";
      document.getElementById('popup').style.pointerEvents = "all";
    },
    showImg: function(url) {
      document.getElementById('popupIn').innerHTML = "<img src='" + url + "'>";
      document.getElementById('popup').style.opacity = "1";
      document.getElementById('popup').style.pointerEvents = "all";
    },
    deleteFile: function(id, url) {
      document.getElementById(id).remove();
      // const response = await axios({
      //   url: "http://localhost:3000/rm?cwd=" + url,
      //   method: 'POST',
      //   data: {
      //       token: getAuthToken()
      //   }
      // });
      console.log(url);
    }
  },
  async mounted() {
    let user = getUserInfo();
    if (!user) {
      this.$router.push('/login');
    }
    else {
      let url = "http://localhost:3000/ls",
          options = window.location.search.slice(1)
          .split('&')
          .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
            b = b.split('=');
            a[b[0]] = decodeURIComponent(b[1]);
            return a;
          }, {});
          if (options.folder) {
            url = url + "?cwd=" + options.folder;
          }
          const response = await axios({
              url: url,
              method: 'POST',
              data: {
                  token: getAuthToken()
              }
          });
      this.dfiles = response.data.data.files;
      const orderArray = (arr, key) => arr.sort((a, b) => a[key] - b[key]);
      const orderArrayRev = (arr, key) => arr.sort((a, b) => b[key] - a[key]);
      await orderArray(this.dfiles, 'file');
      await orderArrayRev(this.dfiles, 'isFolder');
    }
  },
  
};


</script>