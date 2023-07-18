<script setup>
  import FadeTransition from '../transitions/fade-transition.vue';
  import { ref, reactive, watch } from 'vue'

  const props = defineProps({
    imgUrl: String,
    route: String
  })

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
    <div v-show="!show.showing" class="loader"></div>
    <router-link :to="props.route"><FadeTransition><img v-show="show.showing" class="image" :src="src" @load="showImg()"/></FadeTransition></router-link>
  </div>
</template>

<style scoped>
  .frame {
    aspect-ratio: 1/1;
  }

  .image {
    width: 100%;
  }
  .loader {
    border: 4px solid var(--grey);
    border-top: 4px solid var(--darkGrey);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 5s linear infinite;
    position: relative;
    left: calc(50% - 15px);
    top: calc(50% - 15px);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>