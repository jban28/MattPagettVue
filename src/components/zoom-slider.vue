<script setup>
  import { computed } from 'vue';
  const props = defineProps(['minScale']);
  const scale = defineModel();
  const bGndPosition = computed(() => {
    return (100 * (scale.value - props.minScale) / (1 - props.minScale)) + '%'
  });
  </script>

<template>
  <input 
    class="zoom-slider" 
    v-model="scale" 
    :min="minScale" 
    max="1" 
    step="0.001" 
    type="range" />
</template>

<style scoped>
  .zoom-slider {
    appearance: none;
    -webkit-appearance: none;
    height: 16px;
    background: linear-gradient(to right, black 0%, black v-bind(bGndPosition), #c2c2c2 v-bind(bGndPosition), #c2c2c2 100%);
  }


  .zoom-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; 
    height: 16px;
    background: #c2c2c2;
    border: 1px solid black;
    cursor: pointer;
  }

  .zoom-slider::-moz-range-track {
    height: 16px;
    background: #c2c2c2;
  }

  .zoom-slider::-moz-range-progress {
    height: 16px;
    background: black;
  }

  .zoom-slider::-moz-range-thumb {
    background: #c2c2c2;
    height: 16px;
    width: 16px;
    border: 1px solid black;
    border-radius: 0 !important;
    box-sizing: border-box;
    cursor: pointer;
  }

    /* #slider { 
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    top: 4px;
    overflow: hidden;
    height: 16px;
    margin: auto;
    width: 200px;
    cursor: pointer;
    border-radius: 0; 
  }

  ::-webkit-slider-runnable-track {
    background: var(--grey);
  }


  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; 
    height: 16px;
    background: var(--grey);
    box-shadow: -200px 0 0 20px v-bind('accentColor');
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
  } */
</style>