<script setup>
  import { auth } from '../scripts/token';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const props = defineProps({
    allImages: Object
  })

  const name = ref(null);
  const caption = ref(null);
  const series = ref(null);

  const router = useRouter();

  const handleSumbit = () => {
    console.log('submit')
  }
  // let createImage = function () {
  //   let postData = new FormData();

  //   postData.append("file", document.getElementById("select-image").files[0]);
  //   postData.append("name", document.getElementById("img-name").value)
  //   postData.append("caption", document.getElementById("caption").value)
  //   postData.append("series", document.getElementById("series").value)

  //   if (!document.getElementById("select-thumb").disabled){
  //     postData.append("thumb", document.getElementById("select-thumb").files[0]);
  //   }
    
  //   fetch('https://artistapi.bannisterwebservices.co.uk/image',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': auth.token
  //       },
  //       body: postData
  //     })
  //     .then(async http => {
  //       let content = http.json();
  //       if (http.ok) {
  //         return content;
  //       }
  //       else {
  //         return content.then(content => {throw new Error(content);})
  //       }
  //     })
  //     .then(newImage =>{
  //       console.log(newImage);
  //       props.allImages[newImage.series].unshift(newImage);
  //       router.push({path: "/admin/edit"})
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   }
</script>

<template>
  <div class="new-image-form">
    <label for="image">Select Image:</label>
    <input id="select-image" name="image" type="file"/>

    <label for="name">Name:</label>
    <input v-model="name" name="name" type="text"/>

    <label for="caption">Caption:</label>
    <textarea v-model="caption" name="caption" rows="5"></textarea>

    <label for="series">Series:</label>
    <select v-model="series" name="series">
      <option value="bodies">Bodies</option>
      <option value="flowers">Flowers</option>
      <option value="designs">Designs</option>
      <option value="plates">Plates</option>
    </select>

    <span class="btn-cell" >
      <button  @click="handleSumbit">Submit</button>
      <button @click="router.push({path: '/admin/edit'})">Cancel</button>
    </span>
  </div>
</template>

<style scoped>
  .new-image-form {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 12px;
    width: 100%;
    max-width: 812px;
    margin: auto;
  }

  .btn-cell {
    grid-column: 2 / 2;
  }

  @media screen and (max-width: 30rem) {
    .new-image-form {
      display: flow;
    }

    .new-image-form > * {
      display: block;
      width: 100%;
    }

    .new-image-form > label {
      margin-top: 12px;
    }

    .new-image-form > label:first-of-type {
      margin-top: 0;
    }

    .btn-cell {
      margin-top: 24px;
      display: flex;
      justify-content: space-evenly;
    }
  }
</style>