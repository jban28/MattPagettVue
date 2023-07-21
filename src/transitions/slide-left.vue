<template>
  <Transition name="slide-left">
    <slot></slot> 
  </Transition>
</template>

<style>
  .slide-left-enter-active, 
  .slide-left-leave-active {
    transition: transform 1s ease;
  }

  .slide-left-enter-from {
    transform: translateX(100vw)
  }
  .slide-left-leave-to {
    transform: translateX(-100vw)
  }
</style>