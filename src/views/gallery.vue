<script setup>
  import ImageLoader from "../components/image-loader.vue";

  const props = defineProps({
    imageSet: Array,
    accentColor: String
  })
</script>

<template>
  <div class="gallery content">
    <ImageLoader v-for='image in imageSet' :route='image.url' :img-url='image.srcThumb' :accent-color='accentColor'/>
  </div>
</template>

<style scoped>
</style>