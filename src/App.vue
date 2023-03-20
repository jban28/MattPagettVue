<script setup>
  import Navbar from './components/navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view :key="$route.fullPath"></router-view>
</template>