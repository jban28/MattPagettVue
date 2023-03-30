<script setup>
  import fadeTransition from '../transitions/fade-transition.vue'
  import { reactive } from 'vue'
  let show = reactive({showing: false});
  let showImg = function () {
    show.showing = true;
  }
</script>

<template>
  
  <div class="fill-page">
    <fadeTransition><div v-show="!show.showing" class="loader"></div></fadeTransition>
    <RouterLink to="/bodies/3C"><fadeTransition><img v-show="show.showing" class="fill-page" src="/src/assets/images/index.jpg" @load="showImg()"/></fadeTransition></RouterLink>
  </div>
</template>

<style scoped>
  div.fill-page {
    height: 100%;
    overflow: hidden;
  }

  img.fill-page {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #cc0000; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    position: absolute;
    left: calc(50% - 60px);
    top: calc(50% - 60px);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>