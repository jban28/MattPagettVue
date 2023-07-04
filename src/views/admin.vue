<script setup>
  import Content from '../components/content.vue';
  import ImageEditor from '../components/image-editor.vue';
  import { reactive, ref, computed } from 'vue';

  let username;
  let password;
  let token;
  let message = reactive({text: ""});
  let login = reactive({failed: false, complete: false, newImage: false});
  let seriesShown = ref("bodies");
  let allImages = ref([]);
  let shownImages = computed(() => {
    return allImages.value.filter((image) => (image.series == seriesShown.value))
  })

  let updateList = function () {
    seriesShown.value = document.getElementById("series-select").value;
  }

  let createImage = function () {
    
    let postData = new FormData();

    postData.append("file", document.getElementById("select-image").files[0]);
    postData.append("name", document.getElementById("img-name").value)
    postData.append("caption", document.getElementById("caption").value)
    postData.append("series", document.getElementById("series").value)
    
    fetch('http://artistapi-env.eba-ptdactte.us-east-1.elasticbeanstalk.com/image',
      {
        method: 'POST',
        headers: {
          'Authorization': token
        },
        body: postData
      })
      .then(async http => {
        let response = http.text();
        if (http.ok) {
          console.log("created")
        }
        else {
          return response.then(response => {throw new Error(response);})
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  let getToken = function () {
    fetch('http://artistapi-env.eba-ptdactte.us-east-1.elasticbeanstalk.com/login?username=' + username + '&' + 'password=' + password)
    .then(async http => {
      let content = http.text();
      if (http.ok) {
        return content;
      }
      else {
        return content.then(content => {throw new Error(content);})
      }
    })
    .then(jwt => {
      login.failed = false;
      login.complete = true;
      token = jwt;
    })
    .catch(error => {
      login.failed = true;
      message.text = error.message;
    })
  }

  fetch('http://artistapi-env.eba-ptdactte.us-east-1.elasticbeanstalk.com/all-images?artist=Matt_Pagett')
    .then(async http => {
      let content = http.json();
      if (http.ok) {
        return content;
      }
      else {
        return content.then(content => {throw new Error(content);})
      }
    })
    .then(images => {
      for (let image of images){
        allImages.value.push(image)
      }
    })
    .catch(error => {
      message.text = error;
    })
</script>

<template>
  <div>
    <div id="login-box" class="center" v-show="!login.complete">
      <h1>Admin login</h1>
      <input id="username" class="form" type="text" placeholder="Username" v-model="username"><br/>
      <input id="password" class="form" type="password" placeholder="Password" v-model="password"><br/>
      <button class="form" @click="getToken">Login</button>
      <div class="form error" v-show="login.failed==true">{{ message.text }}</div>
    </div>

    <Content v-show="login.complete">
      <div class="options-bar">
        <select id="series-select" v-show="!login.newImage" @change="updateList">
          <option value="bodies">Bodies</option>
          <option value="flowers">Flowers</option>
        </select>
        <button @click="login.newImage=true" v-show="!login.newImage">New Image</button>
      </div>
      <ImageEditor v-show="!login.newImage" v-for='image in shownImages' :image="image" :token="token"/>

      <div class="new-image" v-show="login.newImage">
        <label class="new-image" for="select-image">Select Image:</label>
        <input id="select-image" name="image" type="file"/><br/>
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
        <button @click="login.newImage=false">Cancel</button>
      </div>
    </Content>

    
  </div>
</template>

<style>
  #login-box {
    margin: 12px auto;
    padding: 6px;
    width: 250px;
  }
  .form {
    width: 226px;
    margin: 6px;
  }
  .error {
    color: red;
  }

  .options-bar {
    width: 100%;
    text-align: center;
  }

  label.new-image {
    width: 112px;
  }

  div.new-image {
    padding: 6px;
  }

  textarea {
    width: calc(100% - 124px) 
  }
</style>