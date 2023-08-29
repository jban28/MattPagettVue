<script setup>
  import { ref, watch } from 'vue';
  import { auth } from '../scripts/token';

  const props = defineProps({
    image: Object,
    allImages : Object
  })


  let edit = ref(false)
  let showDelete = ref(false)
  let image = ref(props.image);

  watch(() => props.image, 
  ()=>{
    image.value = props.image;
  })

  let confirmDelete = function () {
    fetch('https://artist-api.bannisterwebservices.co.uk/image/'+image.value._id, 
    {
      method: 'DELETE',
      headers: {
        'Authorization': auth.token
      }
    })
    .then(async http => {
      let response = http.text();
      if (http.ok) {
        edit.value = !edit.value;
        showDelete.value = !showDelete.value;
        props.allImages[image.value.series].splice(props.allImages[image.value.series].indexOf(image.value), 1);
      }
      else {
        return response.then(response => {throw new Error(response);})
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  let submit = function () {
    fetch('https://artist-api.bannisterwebservices.co.uk/image/'+image.value._id, 
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token
      },
      body: JSON.stringify({ 
        name: image.value.name, 
        caption: image.value.caption
      })
    })
    .then(async http => {
      let response = http.text();
      if (http.ok) {
        edit.value = !edit.value;
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
  <div class="edit-box">
    <img class="thumbnail" :src="image.srcThumb"/>

    <label :for="image._id + '_name'">Name:</label>
    <p v-show="!edit">{{ image.name }}</p>
    <input class="text-field" v-show="edit" type="text" v-model="image.name" :id="image._id + '_name'"/>

    <label :for="image._id + '_caption'">Caption:</label>
    <p v-show="!edit">{{ image.caption }}</p>
    <input class="text-field" v-show="edit" type="text" v-model="image.caption" :id="image._id + '_caption'"/>

    <button @click="showDelete=!showDelete" v-show="(!showDelete)*edit">Delete</button>
    <button @click="showDelete=!showDelete" v-show="showDelete">Cancel</button>
    <button @click="confirmDelete" v-show="showDelete">Delete Permanently</button>
    <button @click="edit=!edit" v-show="!edit">Edit</button>
    <button @click="submit" v-show="edit">Submit</button>
  </div>
</template>

<style>

  .thumbnail {
    width: 100%;
    cursor: grab;
  }

  .thumbnail:active {
    cursor: grabbing;
  }

  .text-field {
    width: 100%;
    margin-bottom: 12px;
  }
</style>