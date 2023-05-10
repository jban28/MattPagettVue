<script setup>
  import FadeTransition from '../transitions/fade-transition.vue';
  import { ref, reactive, watch } from 'vue'

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

  const src = ref()
  watch(
    () => props.imgUrl,
    () => {
    src.value = new URL(props.imgUrl, import.meta.url)
    show.showing = false
  }, {immediate: true})
</script>

<template>
  <div class="frame">
    <FadeTransition><div v-show="!show.showing" class="loader"></div></FadeTransition>
    <router-link :to="props.route"><FadeTransition><img v-show="show.showing" class="image" :src="src" @load="showImg()"/></FadeTransition></router-link>
  </div>
</template>

<style scoped>
  .frame {
    width: 33.3333%;
    aspect-ratio: 1/1;
    margin: 0px;
    /*inline-block leaves space for descenders (e.g: letter y or g) so space between rows is wrong*/
    display: inline-flex;
    position: relative;
    padding: 6px;
  }

  .image {
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    position: absolute;
  }

  .loader {
    border: 4px solid var(--grey);
    border-top: 4px solid var(--darkGrey);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 5s linear infinite;
    position: absolute;
    left: calc(50% - 15px);
    top: calc(50% - 15px);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>