<script setup>
  import ImageFrame from '../components/image-frame.vue';
  const props = defineProps(['imageData', 'nextUrl', 'prevUrl'])
</script>

<template>
    <ImageFrame 
      :src="props.imageData.srcFull" 
      :caption="props.imageData.caption" 
      :nextUrl="props.nextUrl"
      :prevUrl="props.prevUrl"
    />

</template>

<style scoped>
</style>