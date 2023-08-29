<script setup>
  import ImageEditor from '../components/image-editor.vue';
  import draggable from 'vuedraggable';
  import { ref, reactive } from 'vue';
  import { auth } from '../scripts/token';

  const props = defineProps({
    allImages: Object
  })

  let seriesShown = ref("bodies");

  let allImages = reactive(props.allImages);

  let updateList = function () {
    seriesShown.value = document.getElementById("series-select").value;
  }

  let reorder = function (series) {
    let newList = [];
    let changeList = allImages[series];
    let index = changeList.length - 1;
    for (let image of changeList) {
      if (image.sequence != index) {
        newList.push({_id: image._id, newSequence: {sequence: index}});
        image.sequence = index;
      }
      index -= 1;
    }
    
    fetch('https://artist-api.bannisterwebservices.co.uk/reorder', 
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token
      },
      body: JSON.stringify(newList)
    })
    .then(async http => {
      let response = http.text();
      if (http.ok) {
        console.log("complete");
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
  <div>
    <div class="center">
      <div class="w-50">
        <button><router-link to="/admin/new">Add Image</router-link></button>
      </div>
      <div class="w-50">
        <select id="series-select" @change="updateList">
          <option value="bodies">Bodies</option>
          <option value="flowers">Flowers</option>
          <option value="designs">Designs</option>
        </select>
      </div>
    </div>

    <draggable class="grid-container" v-model="allImages[seriesShown]" item-key="id" animation="300" @change="reorder(seriesShown)">
      <template #item="{element: image}">
        <ImageEditor :image=image :allImages=allImages></ImageEditor>
      </template>
    </draggable>
  </div>
</template>

<style>
  .w-50 {
    width:50%;
    display: inline-block;
  }
</style>