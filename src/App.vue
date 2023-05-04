<script setup>
  import Navbar from './components/navbar.vue';
  import FadeTransition from './transitions/fade-transition.vue';
</script>

<template>
  <Navbar/>
  <router-view :key="$route.fullPath">
  </router-view>
</template>
