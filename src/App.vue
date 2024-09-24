<script setup>
  import NavBar from './components/nav-bar.vue';
  import FadeTransition from './transitions/fade-transition.vue';
  const pageStyle = {
    padding: "12px 12px",
    borderWidth: "0px 12px",
    borderColor: "transparent",
    backgroundClip: "padding-box",
    borderStyle: "solid",
    margin: "0px auto",
    backgroundColor: "white",
    maxWidth: "1000px",
    width: "100%",
    flexGrow: 1
  }
</script>

<template>
  <NavBar/>
  <router-view v-slot="{ Component, route }">
    <FadeTransition :mode="route.meta.transitionMode">
      <component 
        :is="Component" 
        :key="route.fullPath"
        :style="pageStyle"
      />
    </FadeTransition>
  </router-view>
</template>