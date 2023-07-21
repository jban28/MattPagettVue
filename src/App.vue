<script setup>
  import Navbar from './components/navbar.vue';
  import './transitions/fade-transition.vue';
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component, route }">
    <transition :name="fade" :mode="route.meta.transitionMode">
      <component :is="Component" :key="route.fullPath"/>
    </transition>
  </router-view>
</template>