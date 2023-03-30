<script>
// JavaScript hooks logic...
</script>

<template>
  <!-- wrap the built-in Transition component -->
  <Transition>
    <slot></slot> <!-- pass down slot content -->
  </Transition>
</template>

<style>
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }
</style>