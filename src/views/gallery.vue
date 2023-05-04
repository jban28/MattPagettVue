<script setup>
  import ImageLoader from "../components/image-loader.vue";
  import Content from '../components/content.vue';

  const props = defineProps({
    imageSet: Array,
    accentColor: String
  })
</script>

<template>
  <Content>
    <ImageLoader v-for='image in imageSet' :route='image.url' :img-url='image.srcThumb' :accent-color='accentColor'/>
</Content>
</template>

<style scoped>
</style>