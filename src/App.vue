<template>
  <div>
    App component
  </div>
</template>

<script setup>
  import { useGsapPlugins, useNonFunctionalCheck, useWindowResizeListener } from '@/composables';

  useGsapPlugins();
  useNonFunctionalCheck();
  useWindowResizeListener();
</script>

<style lang="scss">
  @import '@/styles/index';
</style>
