<script setup>
  import FadeTransition from '../transitions/fade-transition.vue';
  import { reactive } from 'vue'

  const props = defineProps({
    imgUrl: String,
    route: String
  })

  let getURL = function () {
    return new URL(props.imgUrl, import.meta.url);
  }

  let show = reactive({showing: false});
  let showImg = function () {
    show.showing = true;
  }
</script>

<template>
  <div class="frame">
    <FadeTransition><div v-show="!show.showing" class="loader"></div></FadeTransition>
    <RouterLink :to="props.route"><FadeTransition><img v-show="show.showing" class="image" :src="getURL()" @load="showImg()"/></FadeTransition></RouterLink>
  </div>
</template>

<style scoped>
  .frame {
    width: 33.3333%;
    height: calc(33.333cqw - 9px);
    max-height: 329px;
    margin: 0px;
    display: inline-block;
    position: relative;
    padding: 6px;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .loader {
    border: 8px solid var(--color-3);
    border-top: 8px solid var(--color-1);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    position: absolute;
    left: calc(50% - 30px);
    top: calc(50% - 30px);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>