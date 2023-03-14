<template>
  <router-link v-for='image in images' :to='"/" + $route.params.series + "/" + image.row + image.col'><img :src=image.source></router-link>
</template>


<script setup>
  import {useRoute} from "vue-router";
  const indices = ["A", "B", "C"];
  let images = [];
  let series = useRoute().params.series;
  let last;
  if (series == "bodies") {last = 16;}
  else if (series == "flowers") {last = 19;}
  for (let i = 1; ; i++) {
    for (let j of indices) {
      images.push({row: i, col: j, source: "../src/assets/images/360 " + series +  "/360_" + series + "_" + i + j + ".jpg"});
    }
    if (i == last) {break};
  }
</script>

<style scoped>
  img {
    width: 33%;
  }
</style>