<script setup>
  import ImageEditor from '../components/image-editor.vue';
  import draggable from 'vuedraggable';
  import { useRouter } from 'vue-router';
  import { reactive, ref } from 'vue';
  import { auth } from '../scripts/token';

  const props = defineProps({
    allImages: Object
  })

  const seriesShown = ref("bodies");
  const router = useRouter();
  const allImages = reactive(props.allImages)

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
    
    fetch('https://artistapi.bannisterwebservices.co.uk/reorder', 
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
    <div class="controls">
      <select v-model="seriesShown">
        <option value="bodies">Bodies</option>
        <option value="flowers">Flowers</option>
        <option value="designs">Designs</option>
        <option value="plates">Plates</option>
      </select>
      <button @click="() => { router.push('/admin/new') }">Add Image</button>
    </div>

    <draggable class="grid-container" v-model="allImages[seriesShown]" item-key="id" animation="300" @change="reorder(seriesShown)">
      <template #item="{element: image}">
        <ImageEditor :image=image :allImages=allImages></ImageEditor>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
  .controls {
    display: flex; 
    justify-content: space-evenly;
  }
</style>