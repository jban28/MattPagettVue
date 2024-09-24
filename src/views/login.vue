<script setup>

  import { ref } from 'vue';
  import {useRouter} from 'vue-router';
  import {auth} from '../scripts/token.js';

  const router = useRouter();

  const username = ref(null);
  const password = ref(null);
  const message = ref(null);

  let getToken = function () {
    fetch('https://artistapi.bannisterwebservices.co.uk/login',
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
      message.value = error.message;
    })
  }
</script>

<template>
  <div style="text-align: center;">
    <h1>Admin login</h1>
    <input class="login-element" type="text" placeholder="Username" v-model="username" autocomplete="true"><br/>
    <input class="login-element" type="password" placeholder="Password" v-model="password" autocomplete="true"><br/>
    <button class="login-element" @click="getToken">Login</button>
    <div class="login-element">{{ message }}</div>
  </div>
</template>

<style scoped>
  .login-element {
    margin: 6px;
  }
</style>