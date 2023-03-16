<script setup>
  import Navbar from './components/navbar.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <Navbar/>
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>
