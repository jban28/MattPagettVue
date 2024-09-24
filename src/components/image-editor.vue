<script setup>
  import { ref, useTemplateRef } from 'vue';

  const props = defineProps(['image']);

  const emit = defineEmits(['update', 'delete'])

  const nameInput = useTemplateRef('nameInput');
  const captionInput = useTemplateRef('captionInput');

  const editing = ref(false);
  const showDelete = ref(false)

  const submit = () => {
    // ToDo: API Update call

    emit('update', {
      name: nameInput.value.value,
      caption: captionInput.value.value
    })
    editing.value = false;
  }

  const cancel = () => {
    editing.value = false;
    showDelete.value = false;
  }

  const handleDelete = () => {
    // ToDo: API Delete call
    emit('delete');
    cancel();
  }

</script>

<template>
  <div class="edit-box">
    <img class="thumbnail" :src="image.srcThumb"/>

    <label :for="image._id + '_name'">Name:</label>
    <p v-if="!editing">{{ image.name }}</p>
    <input ref="nameInput" class="text-field" v-if="editing" type="text" :value="image.name" :id="image._id + '_name'"/>

    <label :for="image._id + '_caption'">Caption:</label>
    <p v-if="!editing">{{ image.caption }}</p>
    <input ref="captionInput" class="text-field" v-if="editing" type="text" :value="image.caption" :id="image._id + '_caption'"/>

    <button @click="showDelete=true" v-if="editing">Delete</button>
    <button @click="editing=true" v-if="!editing">Edit</button>
    <button @click="cancel" v-if="editing">Cancel</button>
    <button @click="submit" v-if="editing">Save</button>

    <div v-if="showDelete" class="delete-panel">
      Are you sure you want to permanently delete this image?
      <button @click="showDelete=false" v-if="showDelete">Cancel</button>
      <button @click="handleDelete" v-if="showDelete">Delete Permanently</button>
    </div>
  </div>
</template>

<style scoped>
  .edit-box {
    position: relative;
  }

  .edit-box input {
    width: 100%;
    margin-bottom: 12px;
  }

  .edit-box button {
    margin-block: 12px;
    display: block;
    width: 100%
  }

  .thumbnail {
    width: 100%;
    cursor: grab;
  }

  .thumbnail:active {
    cursor: grabbing;
  }

  .delete-panel {
    width: 100%;
    height: 100%;
    background-color: #000000dd;
    position: absolute;
    top: 0;
    left: 0;
    display: 'flex';
    align-content: center;
    padding: 12px;
    color: white;
    text-align: center;
  }
</style>

<!-- 

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
</style> -->