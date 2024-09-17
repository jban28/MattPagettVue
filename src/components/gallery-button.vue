<script setup>
    const props = defineProps(['icon'])
</script>

<template>
    <i class="material-icons">{{ icon }}</i>
</template>

<style scoped>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    .material-icons {
        cursor: pointer;
        font-size: 24px;
        vertical-align: middle;
        user-select: none;
    }
</style>