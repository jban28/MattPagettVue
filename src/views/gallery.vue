<script setup>
  import ImageLoader from "../components/image-loader.vue";

  const props = defineProps({
    imageSet: Array,
  })
</script>

<template>
  <div class="content">
    <ImageLoader v-for='image in imageSet' :route='image.url' :img-url='image.srcThumb'/>
  </div>
</template>

<style scoped>
</style>