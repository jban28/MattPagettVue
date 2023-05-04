<script setup>
  import ImageLoader from "../components/image-loader.vue";
  import Content from '../components/content.vue';

  const props = defineProps({
    imageSet: Array,
  })
</script>

<template>
  <Content>
    <ImageLoader v-for='image in imageSet' :route='image.url' :img-url='image.srcThumb'/>
</Content>
</template>

<style scoped>
</style>