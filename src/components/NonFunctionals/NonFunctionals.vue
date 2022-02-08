<template>
  <div class="NonFunctionals">
    <WindowTooSmall v-if="windowTooSmall" />
    <RotateDevice v-if="rotateDevice" />
    <WebGlDisabled v-if="webglDisabled" />
    <DeviceUnsupported v-if="deviceUnsupported.value" />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useNonFunctionalStore } from '@store';
  import DeviceUnsupported from './DeviceUnsupported/DeviceUnsupported.vue';
  import RotateDevice from './RotateDevice/RotateDevice.vue';
  import WebGlDisabled from './WebGlDisabled/WebGlDisabled.vue';
  import WindowTooSmall from './WindowTooSmall/WindowTooSmall.vue';

  //

  const {
    deviceSupport,
    windowTooSmall,
    rotateDevice,
    webglDisabled
  } = storeToRefs(useNonFunctionalStore());

  const deviceUnsupported = computed(() => {
    return !(deviceSupport.browser && deviceSupport.os);
  });
</script>

<style lang="scss">
  .NonFunctionals {
    @include full-size;
    pointer-events: none;
  }
</style>
