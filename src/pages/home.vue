<template>
  <div class="Home">
    This is a website
  </div>
</template>

<script setup>
</script>

<style lang="scss">
  .Home {
    @include full-size;
    @include flex-center;
    background-color: $black;
    color: $white;
    font-family: monospace;
    font-size: px(42);
  }
</style>
