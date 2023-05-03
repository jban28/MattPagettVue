<script setup>
  import ZoomWindow from '../components/zoom-window.vue';
  import FadeTransition from '../transitions/fade-transition.vue';

  const props = defineProps({
    image: Object,
    nextImage: Object,
    previousImage: Object,
  })

</script>

<template>
    <div class="fill content">
      <FadeTransition>
        <div class="image-header">
          <p class="caption">{{ image.caption }}
            <router-link v-if='previousImage!==undefined' :to='previousImage.url'><span class="material-icons">west</span></router-link>
            <router-link v-if='nextImage!==undefined' :to='nextImage.url'><span class="material-icons">east</span></router-link>
            </p>
        </div>
      </FadeTransition>
    <ZoomWindow :source='image.srcFull' />    
    </div>
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  #image {
    cursor: zoom-in;
  }

  .image-header {
    max-width: 1000px;
    width: 100%;
    padding: 6px;
    margin: auto;
    position: relative;
    vertical-align: top;
  }

  .caption {
    display: inline-block;
    margin-bottom: 0px;
  }

  .material-icons { 
    display: inline-block;
    position: relative;
    top: 6px;
  }
</style>