<template>
  Vue-Vite boilerplate
</template>

<script setup>
  import { useWindowSizeStore } from '@/store';

  const { counter } = useWindowSizeStore();

  console.log(counter);
</script>

<style lang="scss">
  @import '@/styles/index';
</style>
