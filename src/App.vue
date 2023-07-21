<script setup>
  import Navbar from './components/navbar.vue';
  import FadeTransition from './transitions/fade-transition.vue';
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component, route }">
    <FadeTransition :mode="route.meta.transitionMode">
      <component :is="Component" :key="route.fullPath"/>
    </FadeTransition>
  </router-view>
</template>