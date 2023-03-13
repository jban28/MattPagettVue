<script setup>
  import Navbar from './components/navbar.vue'
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>
