<script setup>
  import FadeTransition from '../transitions/fade-transition.vue';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { ref, reactive, watch } from 'vue';

  const router = useRouter();

  const props = defineProps({
    image: Object,
    nextImage: Object,
    previousImage: Object,
    accentColor: String
  })

  let show = reactive({showing: false});

  let showImg = function () {
    show.showing = true;
  }

  const src = ref()
  watch(
    () => props.image.url,
    () => {
    src.value = new URL(props.image.srcFull, import.meta.url)
    show.showing = false
  }, {immediate: true})

  onMounted(() => {
    const image = document.querySelector("#image");
    const frame = document.querySelector('#frame');
    const slider = document.querySelector("#slider");
    const fullScreenBtn = document.querySelector("#full-screen");

    let zoomValue;
    let isMouseDown = false;
    let isTouch = false;
    let touchSeparation;
    let mousedownX;
    let mousedownY;
    let mouseX;
    let mouseY;
    let touchX;
    let touchY;
    let scrollAmountX;
    let scrollAmountY;
    frame.scrollBy({behavior: 'smooth'});

    let fitWindow = function(){
      let minDimension = Math.min(frame.offsetHeight, frame.offsetWidth);
      image.height = minDimension;
      image.width = minDimension;
      zoomValue = image.height/image.naturalHeight;
      slider.min = minDimension/image.naturalHeight;
      slider.value = zoomValue;
    }

    let fullScreen = function() {
      if (!document.fullscreenElement) {
        if (frame.requestFullscreen) {
          frame.requestFullscreen();
        } else if (frame.webkitRequestFullscreen) { /* Safari */
          frame.webkitRequestFullscreen();
        } else if (frame.msRequestFullscreen) { /* IE11 */
          frame.msRequestFullscreen();
        }
      }
      else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
    }

    let setZoom = function(zoomTo) {
      let imageCenterX = (frame.offsetWidth / 2 + frame.scrollLeft) / zoomValue;
      let imageCenterY = (frame.offsetHeight / 2 + frame.scrollTop) / zoomValue;
      if (zoomTo > 1) {zoomValue = 1;}
      else if (zoomTo < slider.min) {zoomValue = slider.min;}
      else {zoomValue = zoomTo;}
      image.height = image.naturalHeight * zoomValue;
      image.width = image.naturalWidth * zoomValue;
      slider.value = zoomValue;
      frame.scrollLeft = imageCenterX * zoomValue - frame.offsetWidth / 2
      frame.scrollTop = imageCenterY * zoomValue - frame.offsetHeight / 2
    }

    let keyMove = function(e) {
      let scrollAmount = 10 * zoomValue;
      switch (e.key){
        case "ArrowLeft":
          scrollAmountX = -scrollAmount;
          break;
        case "ArrowRight":
          scrollAmountX = +scrollAmount;
          break;
        case "ArrowUp":
          scrollAmountY = -scrollAmount;
          break;
        case "ArrowDown":
          scrollAmountY = +scrollAmount;
          break;
      }
    }

    setInterval (function() {
      frame.scrollBy({
        top: scrollAmountY,
        left: scrollAmountX
      });
    },10);

    image.addEventListener('load', fitWindow);

    window.addEventListener("resize", fitWindow);

    document.addEventListener('keydown', keyMove);
    document.addEventListener('keyup', () => {
      scrollAmountX = 0;
      scrollAmountY = 0;
    });

    fullScreenBtn.addEventListener('click', fullScreen);

    image.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      mousedownX = e.pageX;
      mousedownY = e.pageY;
      mouseX = mousedownX;
      mouseY = mousedownY;
    });

    image.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!isMouseDown) {return;}
      frame.scrollLeft += mouseX - e.pageX;
      frame.scrollTop += mouseY - e.pageY;
      mouseX = e.pageX;
      mouseY = e.pageY;
      image.style.cursor = "grabbing";
    });

    image.addEventListener('mouseup', (e) => {
      isMouseDown = false;
      /* check if image dragged and zoom if not dragged */
      if ((e.pageX == mousedownX && e.pageY == mousedownY)) {
        setZoom(zoomValue * 1.2)
      }
      image.style.cursor = "zoom-in";
    });

    image.addEventListener('mouseleave', () => {
      isMouseDown = false;
      image.style.cursor = "zoom-in";
    });

    image.addEventListener('touchstart', (e) => {
      isTouch = true;
      let touchStartX = 0;
      let touchStartY = 0;
      if (e.touches.length == 1) {
        touchStartX = e.touches[0].pageX;
        touchStartY = e.touches[0].pageY;
      }
      else {
        touchStartX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
        touchStartY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
        touchSeparation = ((e.touches[0].pageX - e.touches[1].pageX) ** 2 + (e.touches[0].pageY - e.touches[1].pageY) ** 2) ** 0.5; 
      }
      touchX = touchStartX;
      touchY = touchStartY;
    });

    image.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if(!isTouch) {return;}
      let changeX = 0;
      let changeY = 0;
      let changeSeparation;
      if (e.touches.length == 1) {
        changeX = e.touches[0].pageX;
        changeY = e.touches[0].pageY;
      }
      else {
        changeX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
        changeY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
        changeSeparation = ((e.touches[0].pageX - e.touches[1].pageX) ** 2 + (e.touches[0].pageY - e.touches[1].pageY) ** 2) ** 0.5; 
        setZoom(zoomValue * changeSeparation/touchSeparation);
        touchSeparation = changeSeparation;
      }
      frame.scrollLeft += (touchX - changeX);
      frame.scrollTop += (touchY - changeY);
      touchX = changeX;
      touchY = changeY;
    });

    image.addEventListener('touchend', () => {
      isTouch = false;
    });

    image.addEventListener('wheel', (e) => {
      e.preventDefault();
      setZoom(zoomValue - 0.001*e.deltaY)
    })

    slider.addEventListener('input', (e) => {
      setZoom(e.target.value)
      slider.blur();
    });
  })
</script>

<template>

  <div class="content fill">
    <div>{{ image.caption }}</div>
    <div id="controls">
      <span class="material-icons" v-if='previousImage!==undefined' @click='router.push(previousImage.url)'>chevron_left</span>
      <span class="material-icons" @click='router.push("./")'>expand_less</span>
      <span class="material-icons" v-if='nextImage!==undefined' @click='router.push(nextImage.url)'>chevron_right</span>
      <span id="full-screen" class="material-icons">fullscreen</span>
      <span id="slider-box" class="material-icons"><input type="range" min="0" max="1" value="0" step="0.01" id="slider" label="zoom"/></span>
    </div>
      <div id="frame">
        <FadeTransition appear><div v-show="!show.showing" class="loader"></div></FadeTransition>
        <FadeTransition><img v-show="show.showing" @load="showImg()" id= "image" :src="src"/></FadeTransition>
      </div>
  </div>

</template>

<style scoped>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  .fill {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
  }

  #external-frame{
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  #frame {
    height: 100%;
    max-height: 100%;
    text-align: center;
    overflow: hidden;
  }

  #image {
    cursor: zoom-in;
  }

  .material-icons {
    cursor: pointer;
  }

  .material-icons:hover {
    color: var(--darkGrey)
  }
  
  .loader {
    border: 8px solid var(--grey);
    border-top: 8px solid var(--darkGrey);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 5s linear infinite;
    position: absolute;
    left: calc(50% - 30px);
    top: calc(50% + 30px);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  #slider-box {
    height: 24px;
    width: 200px;
    margin-left: 4px;
    display: inline-block;
    position: relative;
  }

  #slider { 
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    top: 4px;
    overflow: hidden;
    height: 16px;
    margin: auto;
    width: 200px;
    cursor: pointer;
    border-radius: 0; /*ios*/
  }

  ::-webkit-slider-runnable-track {
    background: var(--grey);
  }


  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; 
    height: 16px;
    background: var(--grey);
    box-shadow: -200px 0 0 200px v-bind('accentColor');
    border: 1px solid var(--black);
  }

  ::-moz-range-track {
    height: 40px;
    background: var(--grey);
  }

  ::-moz-range-thumb {
    background: var(--grey);
    height: 16px;
    width: 16px;
    border: 1px solid var(--black);
    border-radius: 0 !important;
    box-shadow: -200px 0 0 200px v-bind('accentColor');
    box-sizing: border-box;
  }

  ::-ms-fill-lower { 
    background: v-bind('accentColor');
  }

  ::-ms-thumb { 
    background: var(--grey);
    border: 2px solid var(--black);
    height: 16px;
    width: 16px;
    box-sizing: border-box;
  }

  ::-ms-ticks-after { 
    display: none; 
  }

  ::-ms-ticks-before { 
    display: none; 
  }

  ::-ms-track { 
    background: var(--grey);
    color: transparent;
    height: 16px;
    border: none;
  }

  ::-ms-tooltip { 
    display: none;
  }
</style>