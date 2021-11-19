<template>
  <div class="NonFunctionals">
    <WindowTooSmall v-if="windowTooSmall" />
    <RotateDevice v-if="rotateDevice" />
    <WebGlDisabled v-if="webglDisabled" />
    <DeviceUnsupported v-if="deviceUnsupported.value" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import DeviceUnsupported from './DeviceUnsupported/DeviceUnsupported.vue';
  import RotateDevice from './RotateDevice/RotateDevice.vue';
  import WebGlDisabled from './WebGlDisabled/WebGlDisabled.vue';
  import WindowTooSmall from './WindowTooSmall/WindowTooSmall.vue';
  import { useNonFunctionalStore } from '@/store';

  const {
    deviceSupport,
    windowTooSmall,
    rotateDevice,
    webglDisabled
  } = storeToRefs(useNonFunctionalStore());

  const deviceUnsupported = ref(!(deviceSupport.browser && deviceSupport.os));
</script>

<style lang="scss">
  .NonFunctionals {
    @include full-size;
    pointer-events: none;
  }
</style>
