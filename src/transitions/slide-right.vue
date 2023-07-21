<template>
  <Transition name="slide-right">
    <slot></slot> 
  </Transition>
</template>

<style>
  .slide-right-enter-active, 
  .slide-right-leave-active {
    transition: transform 1s ease;
  }

  .slide-right-enter-from {
    transform: translateX(-100vw)
  }
  .slide-right-leave-to {
    transform: translateX(100vw)
  }
</style>