<template>
  <div class="App">
    <router-view />
    <NonFunctionals />
  </div>
</template>

<script setup>
  import NonFunctionals from './components/NonFunctionals/NonFunctionals.vue';
  import { useGsapPlugins, useNonFunctionalCheck, useWindowResizeListener } from '@/composables';

  useGsapPlugins();
  useNonFunctionalCheck();
  useWindowResizeListener();
</script>

<style lang="scss">
  @import '@/styles/index';
</style>
