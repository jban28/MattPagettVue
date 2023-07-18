<script setup>
  import { ref, watch } from 'vue';
  import { auth } from '../scripts/token';

  const props = defineProps({
    image: Object
  })

  let edit = ref(false)
  let image = ref(props.image);

  watch(() => props.image, 
  ()=>{
    image.value = props.image;
  })

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
        console.log(image.value.name)
      }
      else {
        return response.then(response => {throw new Error(response);})
      }
    })
    .catch(error => {
      message.text = error;
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