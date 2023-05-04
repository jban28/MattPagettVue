<script setup>
</script>

<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<style>
  .content {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    padding: 0px 6px 6px;
    border-width: 0px 12px;
    border-style: solid;
    border-color: #00000000;
    background-clip: padding-box;
    background-color: var(--white);
  }
</style>