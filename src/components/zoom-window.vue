<script setup>
  import { onMounted } from 'vue';
  import FadeTransition from '../transitions/fade-transition.vue';
  import { reactive } from 'vue';

  const props = defineProps({
    source: String,
  })

  let show = reactive({showing: false});
  let showImg = function () {
    show.showing = true;
  }

  let getURL = function () {
    return new URL(props.source, import.meta.url);
  }

  onMounted(() => {

    const image = document.querySelector("#image");
    const frame = document.querySelector('#frame');
    const slider = document.querySelector("#slider");
    const fullScreenBtn = document.querySelector("#full-screen");
    const helpButton = document.querySelector("#help-button");
    const helpWindow = document.querySelector("#help-window");
    const helpClose = document.querySelector("#help-close");

    let zoomValue;
    let isMouseDown = false;
    let isTouch = false;
    let touchSeparation;
    let mousedownX;
    let mousedownY;
    let mouseX;
    let mouseY;
    let scrollAmountX;
    let scrollAmountY;
    frame.scrollBy({behavior: 'smooth'});

    let fitWindow = function(){
      let minDimension = Math.min(frame.offsetHeight, frame.offsetWidth);
      image.width = frame.offsetWidth;
      image.height = image.naturalHeight * (image.width / image.naturalWidth);
      /*if ((image.naturalHeight/frame.offsetHeight) > (image.naturalWidth/frame.offsetWidth)) {
        image.height = frame.offsetHeight;
        image.width = image.naturalWidth * (image.height / image.naturalHeight);
      }
      else {
        image.width = frame.offsetWidth;
        image.height = image.naturalHeight * (image.width / image.naturalWidth);
      }*/
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

    helpButton.addEventListener('click', (e) => {
      helpWindow.style.display = "block";
    })

    helpClose.addEventListener('click', (e) => {
      helpWindow.style.display = "none";
    })

    window.addEventListener('click', (e) => {
      if (e.target == helpWindow){helpWindow.style.display = "none";}
    })
  })
</script>

<template>
  <FadeTransition appear>
    <div id="controls">
      <span id="help-button" class="material-icons">help_outline</span>
      <span id="full-screen" class="material-icons">fullscreen</span>
      <span id="slider-box" class="material-icons"><input type="range" min="0" max="1" value="0" step="0.01" id="slider" label="zoom"/></span>
    </div>
  </FadeTransition>
  <div id="external-frame">
    <div id="frame">
      <FadeTransition><div v-show="!show.showing" class="loader"></div></fadeTransition>
      <FadeTransition><img v-show="show.showing" @load="showImg()" id= "image" :src="getURL()"/></fadeTransition>
    </div>
  </div>
    
  <div id="help-window">
    <div id="help-content">
      <span id="help-close" class="material-icons">close</span>
      <p>On mobile/touchscreen, the image can be zoomed using the slider or by pinching the image with two fingers. Tapping on the image will zoom by a fixed amount.</p>
      <p>On desktop, the image can be zoomed using the mouse wheel or trackpad scroll function. Clicking the image will zoom by a fixed amount. The image can be moved around by clicking and dragging or by using the arrow keys.</p>
      <p>You can enter fullscreen mode by clicking on the <span class="material-icons">fullscreen</span> icon</p>
      <p>You can navigate to the previous image in the set using <span class="material-icons">west</span> and to the next image in the set using <span class="material-icons">east</span></p>
    </div>
  </div>
</template>

<style scoped>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  #image {
    cursor: zoom-in;
  }

  #external-frame{
    height: 100%;
    max-height: 100%;
    padding: 12px;
    overflow: hidden;
    z-index: 0;
  }

  #frame {
    height: 100%;
    text-align: center;
    overflow: hidden;
  }

  #controls {
    cursor: pointer;
    padding: 6px 12px;
    overflow: visible;
    color: var(--color-1);
    height: 36px;
  }

  #help-button{
    display: none;
  }

  .material-icons {
    color: inherit;
    float: bottom;
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
    border-radius: 0; /* iOS */
  }

  ::-webkit-slider-runnable-track {
    background: var(--color-3);
  }

  /*
  * 1. Set to 0 width and remove border for a slider without a thumb
  * 2. Shadow is negative the full width of the input and has a spread 
  *    of the width of the input.
  */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; /* 1 */
    height: 16px;
    background: var(--color-3);
    box-shadow: -200px 0 0 200px var(--color-1);
    border: 1px solid var(--color-2);
  }

  ::-moz-range-track {
    height: 40px;
    background: var(--color-3);
  }

  ::-moz-range-thumb {
    background: var(--color-3);
    height: 16px;
    width: 16px;
    border: 1px solid var(--color-2);
    border-radius: 0 !important;
    box-shadow: -200px 0 0 200px var(--color-1);
    box-sizing: border-box;
  }

  ::-ms-fill-lower { 
    background: var(--color-1);
  }

  ::-ms-thumb { 
    background: var(--color-3);
    border: 2px solid var(--color-2);
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
    background: var(--color-3);
    color: transparent;
    height: 16px;
    border: none;
  }

  ::-ms-tooltip { 
    display: none;
  }

  #help-window {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: var(--color-2); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  #help-content {
    margin: 100px auto;
    max-width: 500px;
    padding: 12px;
    background-color: var(--color-1);
    vertical-align: middle;
  }

  #help-close {
    float: right;
    color: var(--color-2);
    cursor: pointer;
  }
  .loader {
    border: 16px solid var(--color-3);
    border-top: 16px solid var(--color-1);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    position: absolute;
    left: calc(50% - 60px);
    top: calc(50%);
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>