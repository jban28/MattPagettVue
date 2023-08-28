<script setup>
  import { auth } from '../scripts/token';
  import { useRouter } from 'vue-router';
  import {ref} from 'vue';

  let router = useRouter();
  let autoThumb = ref(true);

  let createImage = function () {
    let postData = new FormData();

    postData.append("file", document.getElementById("select-image").files[0]);
    postData.append("name", document.getElementById("img-name").value)
    postData.append("caption", document.getElementById("caption").value)
    postData.append("series", document.getElementById("series").value)

    if (!document.getElementById("select-thumb").disabled){
      postData.append("thumb", document.getElementById("select-thumb").files[0]);
    }
    
    //fetch('https://artist-api.bannisterwebservices.co.uk/image',
    fetch('http://localhost:5000/image',
      {
        method: 'POST',
        headers: {
          'Authorization': auth.token
        },
        body: postData
      })
      .then(async https => {
        let response = https.text();
        if (https.ok) {
          router.push({path: "admin/edit"})
        }
        else {
          return response.then(response => {throw new Error(response);})
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
</script>

<template>
  <div class="new-image">
    <label class="new-image" for="select-image">Select Image:</label>
    <input id="select-image" name="image" type="file"/><br/>

    <label class="new-image" for="auto-thumb">Autogenerate thumbnail?</label>
    <input id="auto-thumb" type="checkbox" :checked=autoThumb @change="autoThumb=!autoThumb"/><br/>

    <label class="new-image" for="select-thumb">Select Thumbnail:</label>
    <input id="select-thumb" name="thumb" type="file" :disabled="autoThumb"/><br/>

    <label class="new-image" for="img-name">Name:</label>
    <input id="img-name" type="text"/><br/>

    <label class="new-image" for="caption">Caption:</label>
    <textarea id="caption" rows="5"></textarea><br/>

    <label class="new-image" for="series">Series:</label>
    <select id="series">
      <option value="bodies">Bodies</option>
      <option value="flowers">Flowers</option>
    </select><br/>
    
    <button style="margin-left: 112px" @click="createImage">Submit</button>
    <button @click="router.push({path: '/edit'})">Cancel</button>
  </div>
</template>

<style>
  .new-image label {
    width: 124px;
  }

  .new-image textarea {
    width: calc(100% - 136px) 
  }
</style>