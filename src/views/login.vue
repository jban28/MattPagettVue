<script setup>

  import {reactive} from 'vue';
  import {useRouter} from 'vue-router';
  import {auth} from '../scripts/token.js';

  const router = useRouter();

  let username;
  let password;
  let message = reactive({text: ""});

  let getToken = function () {
    fetch('https://artist-api.bannisterwebservices.co.uk/login',
    {
      method: 'POST',
      headers: {
        'Authorization': `${username}:${password}`
      }
    })
    .then(async https => {
      let content = https.text();
      if (https.ok) {
        return content;
      }
      else {
        return content.then(content => {throw new Error(content);})
      }
    })
    .then(jwt => {
      auth.setToken(jwt);
      router.push({
        path: "/admin/edit",
      })
    })
    .catch(error => {
      message.text = error.message;
    })
  }
</script>

<template>
  <div id="login-box" class="center">
    <h1>Admin login</h1>
    <input id="username" class="form" type="text" placeholder="Username" v-model="username" autocomplete="true"><br/>
    <input id="password" class="form" type="password" placeholder="Password" v-model="password" autocomplete="true"><br/>
    <button class="form" @click="getToken">Login</button>
    <div class="form error">{{ message.text }}</div>
  </div>
</template>