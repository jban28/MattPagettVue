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

  let imageName = image.value.name;
  let imageCaption = image.value.caption;

  watch(() => props.image, 
  ()=>{
    image.value = props.image;
    imageName = image.value.name;
    imageCaption = image.value.caption;
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
        name: imageName, 
        caption: imageCaption
      })
    })
    .then(async http => {
      let response = http.text();
      if (http.ok) {
        image.value.name = imageName;
        image.value.caption = imageCaption;
        edit.value = !edit.value;
        showDelete.value = false;
      }
      else {
        return response.then(response => {throw new Error(response);})
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  let cancel = function () {
    imageName = image.value.name;
    imageCaption = image.value.caption;
    edit.value = !edit.value;
    showDelete.value = false;
  }
</script>

<template>
  <div class="edit-box">
    <img class="thumbnail" :src="image.srcThumb"/>

    <label :for="image._id + '_name'">Name:</label>
    <p v-show="!edit">{{ imageName }}</p>
    <input class="text-field" v-show="edit" type="text" v-model="imageName" :id="image._id + '_name'"/>

    <label :for="image._id + '_caption'">Caption:</label>
    <p v-if="!edit">{{ imageCaption }}</p>
    <input class="text-field" v-if="edit" type="text" v-model="imageCaption" :id="image._id + '_caption'"/>

    <button @click="showDelete=!showDelete" v-show="(!showDelete)*edit">Delete</button>
    <button @click="showDelete=!showDelete" v-show="showDelete">Do not delete</button>
    <button @click="confirmDelete" v-show="showDelete">Delete Permanently</button>
    <button @click="edit=!edit" v-show="!edit">Edit</button>
    <button @click="cancel" v-show="edit">Cancel</button>
    <button @click="submit" v-show="edit">Save</button>
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

  .edit-box button {
    width: 100%;
    margin-top: 6px;
  }
</style>