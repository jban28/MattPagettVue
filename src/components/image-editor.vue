<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps({
    image: Object,
    token: String
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
        'Authorization': props.token
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
    
    <p>Name:</p>
    <p v-show="!edit">{{ image.name }}</p>
    <input class="text-field" v-show="edit" type="text" v-model="image.name"/>
    <p>Caption:</p>
    <p v-show="!edit">{{ image.caption }}</p>
    <input class="text-field" v-show="edit" type="text" v-model="image.caption"/>
    <button @click="edit=!edit" v-show="!edit">Edit</button>
    <button @click="submit" v-show="edit">Submit</button>
  </div>
</template>

<style>
  .edit-box {
    width: 33.333333%;
    margin: 0px;
    padding: 6px;
    text-align: left;
    display: inline-block;
    text-align: left;
  }

  .thumbnail {
    width: calc(100% - 12px);
    display: block;
    margin: auto;
    cursor: grab;
  }

  .thumbnail:active {
    cursor: grabbing;
  }

  .text-field {
    width: 100%;
  }
</style>