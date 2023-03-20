<template>
  <div class="fill-page">
    <img class="fill-page" src="/src/assets/images/index.jpg">
  </div>
</template>

<style scoped>
  div.fill-page {
    height: 100%;
    overflow: hidden;
  }

  img.fill-page {
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
</style>