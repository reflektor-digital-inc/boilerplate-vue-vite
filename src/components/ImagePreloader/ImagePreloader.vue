<template>
  <div
    ref="wrapperRef"
    class="ImagePreloader"
    :style="containerStyles"
  >
    <img
      v-if="loaded"
      :class="imageClasses"
      :src="imageSource"
      :alt="props.alt"
      :style="imageStyles"
    >
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from 'vue';

  import useImagePreloaderWorker from './ImagePreloader.worker';

  const props = defineProps({
    src           : { type : String, default : '' },
    alt           : { type : String, default : '' },
    withWorker    : { type : Boolean, default : true },
    width         : { type : String, default : 'auto' },
    height        : { type : String, default : 'auto' },
    noFade        : { type : Boolean, default : false },
    imageSameSize : { type : Boolean, default : false },
    fit           : {
      type      : String,
      default   : 'cover',
      validator : (fit) => ['cover', 'contain', 'fill', 'scale-down'].includes(fit)
    }
  });

  const wrapperRef = ref(null);

  const {
    preloadedImage,
    loadImageWithWorker
  } = useImagePreloaderWorker(props.src);

  // computed
  const imageSource = computed(() => {
    if (props.withWorker && preloadedImage.value) {
      return preloadedImage.value;
    }
    return props.src;
  });
  const loaded = computed(() => {
    return preloadedImage.value;
  });
  const containerStyles = computed(() => {
    return {
      width  : props.width,
      height : props.height,
    };
  });
  const imageStyles = computed(() => {
    return props.imageSameSize ? {
      width  : props.width,
      height : props.height,
    } : {
      width  : '100%',
      height : '100%',
    };
  });
  const imageClasses = computed(() => {
    return [
      'ImagePreloader__image',
      `ImagePreloader__image--${props.fit}`
    ];
  });

  // watchers
  watch(loaded, () => {
    if (loaded.value) {
      // gsap.to(
      //   wrapperRef.value,
      //   { opacity : 1, duration : props.noFade ? 0 : 0.5 }
      // );
    }
  });

  // lifecycle hooks
  onMounted(() => {
    if (props.withWorker) {
      loadImageWithWorker();
    }
  });
</script>

<style lang="scss">
  .ImagePreloader {
    display: inline-block;
    opacity: 0;
    &__image {
      &--cover { object-fit: cover; }
      &--contain { object-fit: contain; }
      &--fill { object-fit: fill; }
      &--scale-down { object-fit: scale-down; }
    }
  }
</style>
