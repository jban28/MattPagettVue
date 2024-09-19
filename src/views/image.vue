<script setup>
  import ImageFrame from '../components/image-frame.vue';
  const props = defineProps(['image', 'nextImage', 'previousImage'])
</script>

<template>
    <ImageFrame 
      :src="props.image.srcFull" 
      :nextUrl="props.nextImage.url"
      :prevUrl="props.previousImage.url"
    />

</template>

<style scoped>
</style>