<script setup>
  import Navbar from './components/navbar.vue'
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <main>
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>
