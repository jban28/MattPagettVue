<script setup>
import { useRoute } from 'vue-router';
  const captions = {
        "bodies": {
          "1A": "Gardener 1 (R); pen and crayon on paper; 18 x 18 cm; 2021",
          "1B": "Gardener 1 (G); pen and crayon on paper; 18 x 18 cm; 2021",
          "1C": "Gardener 1 (B); pen and crayon on paper; 18 x 18 cm; 2021",
          "2A": "Gardener 2 (R); pen and crayon on paper; 18 x 18 cm; 2021",
          "2B": "Gardener 2 (G); pen and crayon on paper; 18 x 18 cm; 2021",
          "2C": "Gardener 2 (B); pen and crayon on paper; 18 x 18 cm; 2021",
          "3A": "Gardener 3 (R); pen and crayon on paper; 18 x 18 cm; 2021",
          "3B": "Gardener 3 (G); pen and crayon on paper; 18 x 18 cm; 2021",
          "3C": "Gardener 3 (B); pen and crayon on paper; 18 x 18 cm; 2021",
          "4A": "Gardener 4 (R); pen and crayon on paper; 18 x 18 cm; 2021",
          "4B": "Gardener 4 (G); pen and crayon on paper; 18 x 18 cm; 2021",
          "4C": "Gardener 4 (B); pen and crayon on paper; 18 x 18 cm; 2021",
          "5A": "7987419-insect-stag-beetle-isolated-in-white; pen on paper; 21 x 30 cm; 2015",
          "5B": "Insect_Safari_-_beetle_04; pen on paper; 21 x 30 cm; 2015",
          "5C": "Picture 004 Montoya 8-19-9; pen on paper; 21 x 30 cm; 2015",
          "6A": "Blue_Ground_beetle_urjsa; pen on paper; 21 x 30 cm; 2015",
          "6B": "longicorne; pen on paper; 21 x 30 cm; 2015",
          "6C": "il fullxfull.140575002; pen on paper; 21 x 30 cm; 2015",
          "7A": "Flip Horizontal: Smoker 1; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
          "7B": "Flip Horizontal: view; charcoal and chalk on 1m x 1.2m cardboard panels; dimensions variable; 2019",
          "7C": "Flip Horizontal: The Smoking Clock; charcoal and chalk on 60 x 21 x 30 cm cardboard panels; dimensions variable; 2019",
          "8A": "Jock 1; pen on paper; 21 x 21 cm, 2020",
          "8B": "Jock 2; pen on paper; 21 x 21 cm, 2020",
          "8C": "Jock 3; pen on paper; 21 x 21 cm, 2020",
          "9A": "Shorts 1; pen on paper; 21 x 21 cm, 2020",
          "9B": "Shorts 2; pen on paper; 21 x 21 cm, 2020",
          "9C": "Shorts 3; pen on paper; 21 x 21 cm, 2020",
          "10A": "Trainer 1; pen on paper; 21 x 21 cm, 2020",
          "10B": "Trainer 2; pen on paper; 21 x 21 cm, 2020",
          "10C": "Trainer 3; pen on paper; 21 x 21 cm, 2020",
          "11A": "Sock 1; pen on paper; 21 x 21 cm; 2020",
          "11B": "Sock 2; pen on paper; 21 x 21 cm; 2020",
          "11C": "Sock 3; pen on paper; 21 x 21 cm; 2020",
          "12A": "Trackies (R); pen and crayon on paper; 21 x 21 cm; 2022",
          "12B": "Trackies (G); pen and crayon on paper; 21 x 21 cm; 2022",
          "12C": "Trackies (B); pen and crayon on paper; 21 x 21 cm; 2022",
          "13A": "Backstreet 1R; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
          "13B": "Backstreet 2G; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017",
          "13C": "Backstreet 3B; charcoal and pastel on 30 sheets of A4 office paper;  105 x 180 cm; 2017",
          "14A": "Backstreet 4R; charcoal and pastel on 15 sheets of A4 office paper;  105 x 90 cm; 2017",
          "14B": "Backstreet 5B; charcoal and pastel on 9 sheets of A4 office paper; 63 x 90 cm; 2017",
          "14C": "Glove for a Film; pen on paper; 21 x 30 cm; 2022",
          "15A": "Fight for a Cassette; pen on paper; 30 x 42 cm; 2022",
          "15B": "Dear David 1; pen on paper; 40 x 60 cm; 2016",
          "15C": "Dear David 2; pen on paper; 40 x 60 cm; 2016",
          "16A": "Dear David 3; pen on paper; 40 x 60 cm; 2016",
          "16B": "Dear David 4; pen on paper; 40 x 60 cm; 2016",
          "16C": "Dear David 5; pen on paper; 40 x 60 cm; 2016",
        },
        "flowers": {
          "1A": "Sweet Pea (Sometimes); pen on paper; 29 x 29 cm; 2020",
          "1B": "Sweet Pea (Always); pen on paper; 29 x 29 cm; 2020",
          "1C": "Sweet Pea (Never); pen on paper; 29 x 29 cm; 2020",
          "2A": "Geranium Cut 1; pen on paper; 29 x 29 cm; 2021",
          "2B": "Geranium Cut 2; pen on paper; 29 x 29 cm; 2021",
          "2C": "Geranium Cut 3; pen on paper; 29 x 29 cm; 2021",
          "3A": "Begonia Flash R; pen and crayon on paper; 29 x 29 cm; 2021",
          "3B": "Begonia Flash G; pen and crayon on paper; 29 x 29 cm; 2021",
          "3C": "Begonia Flash B; pen and crayon on paper; 29 x 29 cm; 2021",
          "4A": "Rose (Before); pen on paper; 29 x 29 cm; 2020",
          "4B": "Rose (During); pen on paper; 29 x 29 cm; 2020",
          "4C": "Rose (After); pen on paper; 29 x 29 cm; 2020",
          "5A": "Marigold AR; pen and crayon on paper; 29 x 29 cm; 2021",
          "5B": "Marigold BG; pen and crayon on paper; 29 x 29 cm; 2021",
          "5C": "Marigold CB; pen and crayon on paper; 29 x 29 cm; 2021",
          "6A": "Rose Screen R; pen and crayon on paper; 29 x 29 cm; 2020",
          "6B": "Rose Screen G; pen and crayon on paper; 29 x 29 cm; 2020",
          "6C": "Rose Screen B; pen and crayon on paper; 29 x 29 cm; 2020",
          "7A": "Lobelia (Beginning); pen on paper; 20 x 24 cm; 2020",
          "7B": "Lobelia (Middle); pen on paper; 20 x 24 cm; 2020",
          "7C": "Lobelia (End); pen on paper; 20 x 24 cm; 2020",
          "8A": "Rose Screen 1; pen and pencil on paper; 29 x 29 cm; 2020",
          "8B": "Rose Screen 2; pen and pencil on paper; 29 x 29 cm; 2020",
          "8C": "Rose Screen 3; pen and pencil on paper; 29 x 29 cm; 2020",
          "9A": "Flower for a Funeral (Rose); crayon and charcoal on paper; 42 x 60 cm; 2022",
          "9B": "Flower for a Funeral (Eucalyptus); crayon and charcoal on paper; 42 x 60 cm; 2022",
          "9C": "Flower for a Funeral (Daffodil); crayon and charcoal on paper; 42 x 60 cm; 2022",
          "10A": "KL10: Flower for a Flowerbed, Southwark Park, London (Acanthus); hand-coloured photolithograph; 30 x 42 cm; 2012",
          "10B": "KL10: Flower for a Flowerbed, Southwark Park, London (Coleus); hand-coloured photolithograph; 30 x 42 cm; 2012 ",
          "10C": "KL10: Flower for a Flowerbed, Southwark Park, London (Delphinium); hand-coloured photolithograph; 30 x 42 cm; 2012",
          "11A": "KL10: Flower for a Flowerbed, Southwark Park, London (Lavender); hand-coloured photolithograph; 30 x 42 cm; 2012",
          "11B": "KL10: Flower for a Flowerbed, Southwark Park, London (Sempervivum); hand-coloured photolithograph; 30 x 42 cm; 2012",
          "11C": "KL10: Flower for a Flowerbed, Southwark Park, London (Snapdragon); hand-coloured photolithograph; 30 x 42 cm; 2012",
          "12A": "Rose from a petrol station 1; crayon and charcoal on paper; 83 x 83 cm; 2021 ",
          "12B": "Rose from a petrol station 2; crayon and charcoal on paper; 83 x 83 cm; 2021",
          "12C": "Rose in my neighbour’s garden 1; crayon and charcoal on paper; 74 x 74 cm; 2021",
          "13A": "Rose in my garden 1; crayon and charcoal on paper; 49 x 49 cm; 2021",
          "13B": "Rose overhanging an allotment 1; crayon and charcoal on paper; 42 x 42 cm; 2021",
          "13C": "Rose in my garden 2; crayon and charcoal on paper; 36 x 36 cm; 2021",
          "14A": "Roses in a Monastery exhibition view, 2021",
          "14B": "Roses in a Monastery exhibition view, 2021",
          "14C": "Roses in a Monastery exhibition view, 2021",
          "15A": "Daffodil (Red and Black); pen on paper; 26 x 26 cm; 2022",
          "15B": "Hydrangea (Green and Black); pen on paper; 26 x 26 cm; 2022",
          "15C": "Amaryllis (Blue and Black); pen on paper; 26 x 26 cm; 2022",
          "16A": "Sub Rosa (7557d8); pen on paper; 30 x 42 cm; 2014",
          "16B": "Sub Rosa (75508); pen on paper; 30 x 42 cm; 2014",
          "16C": "Sub Rosa (2627319); pen on paper; 30 x 42 cm; 2014",
          "17A": "Sub Rosa (170d956); pen on paper; 30 x 42 cm; 2014",
          "17B": "Sub Rosa (8733939); pen on paper; 30 x 42 cm; 2014",
          "17C": "Sub Rosa (SingleRose-wallpaper-Background); pen on paper; 30 x 42 cm; 2014",
          "18A": "Sub Rosa (75581a); pen on paper; 30 x 42 cm; 2014",
          "18B": "Sub Rosa (1172926); pen on paper; 30 x 42 cm; 2014",
          "18C": "Sub Rosa (Rose5); pen on paper; 30 x 42 cm; 2014",
          "19A": "Sub Rosa (8534670); pen on paper; 30 x 42 cm; 2014",
          "19B": "Sub Rosa (755234); pen on paper; 30 x 42 cm; 2014",
          "19C": "Sub Rosa (754fd8); pen on paper; 30 x 42 cm; 201"
        }
      }

  let caption = captions[useRoute().params.series][useRoute().params.image];
  console.log(captions["bodies"]);
  window.onload = function () {
    const image = document.querySelector("#image");
    const frame = document.querySelector('#frame');
    const slider = document.querySelector("#slider");
    const fullScreenBtn = document.querySelector("#full-screen");
    const helpButton = document.querySelector("#help-button");
    const helpWindow = document.querySelector("#help-window");
    const helpClose = document.querySelector("#help-close");

    var script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);

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
      if ((image.naturalHeight/frame.offsetHeight) > (image.naturalWidth/frame.offsetWidth)) {
        image.height = frame.offsetHeight;
        image.width = image.naturalWidth * (image.height / image.naturalHeight);
      }
      else {
        image.width = frame.offsetWidth;
        image.height = image.naturalHeight * (image.width / image.naturalWidth);
      }
      zoomValue = image.height/image.naturalHeight;
      slider.min = zoomValue;
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
  }
</script>

<template>
    <p>{{ caption }}</p>
    <div id="controls">
      <a href="../bodies/13A.html"><span class="material-icons">west</span></a><a href="../bodies/13C.html"><span class="material-icons">east</span></a>
      <span id="full-screen" class="material-icons">fullscreen</span>
      <span id="help-button" class="material-icons">help_outline</span>
      <input type="range" min="0" max="1" value="0" step="0.01" id="slider" label="zoom"/>
    </div>
    <div id="external-frame">
      <div id="frame">
        <img :src='"../src/assets/images/2480 " + $route.params.series + "/2480_" + $route.params.series + "_" + $route.params.image + ".jpg"' alt="Backstreet 2G; charcoal and pastel on 16 sheets of A4 office paper; 84 x 120 cm; 2017" id="image"/>
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

<style>
  #image {
    cursor: zoom-in;
  }

  #external-frame{
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 1000px;
    padding-left: 12px;
    padding-right: 12px;
    margin:auto;
    overflow: hidden;
  }

  #frame {
    height: 100%;
    text-align:center;
    overflow: hidden;
  }

  p {
    margin: 0px;
    vertical-align: bottom;
  }

  #controls {
    cursor: pointer;
    height: 28px;
    padding: 0px;
    padding-bottom: 4px;
    margin: 0px;
    overflow: visible;
    color: #cc0000;
  }

  .material-icons {
    color: inherit;
    float: bottom;
  }

  #slider { 
    -webkit-appearance: none;
    position: absolute;
    overflow: hidden;
    height: 16px;
    margin: 4px;
    width: 200px;
    cursor: pointer;
    border-radius: 0; /* iOS */
  }

  ::-webkit-slider-runnable-track {
    background: #ddd;
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
    background: #fff;
    box-shadow: -200px 0 0 200px #cc0000; /* 2 */
    border: 2px solid #999; /* 1 */
  }

  ::-moz-range-track {
    height: 40px;
    background: #ddd;
  }

  ::-moz-range-thumb {
    background: #fff;
    height: 16px;
    width: 16px;
    border: 3px solid #999;
    border-radius: 0 !important;
    box-shadow: -200px 0 0 200px #cc0000;
    box-sizing: border-box;
  }

  ::-ms-fill-lower { 
    background: #cc0000;
  }

  ::-ms-thumb { 
    background: #fff;
    border: 2px solid #999;
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
    background: #ddd;
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
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  #help-content {
    margin: 20% auto;
    max-width: 500px;
    padding: 12px;
    background-color: #cc0000;
    vertical-align: bottom;
  }

  #help-close {
    float: right;
    color: black;
    cursor: pointer;
  }
</style>