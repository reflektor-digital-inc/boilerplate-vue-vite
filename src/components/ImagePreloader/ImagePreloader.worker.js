import { ref, watchEffect, onUnmounted } from 'vue';

const useImagePreloaderWorker = (src) => {
  const worker = ref(null);
  const preloadedImage = ref(null);
  const workerImagePreloadError = ref(false);
  const handleWorkerMessageRef = ref(null);

  const handleWorkerMessage = ({ data }) => {
    try {
      if (data instanceof Error || (data.blob && data.blob.size === 0)) {
        throw new Error(data);
      }

      const { blob } = data;
      if (blob) {
        const objectURL = URL.createObjectURL(blob);
        preloadedImage.value = objectURL;
      }
    } catch (error) {
      console.error('handleWorkerMessage error:', error.message);
      workerImagePreloadError.value = true;
    }
  };

  const loadImageWithWorker = () => {
    if (worker.value) {
      worker.value.removeEventListener(
        'message',
        handleWorkerMessageRef.value
      );
      worker.value.terminate();
    }
    worker.value = new Worker('/workers/image-loader.js');
    if (worker.value) {
      handleWorkerMessageRef.value = handleWorkerMessage;
      worker.value.addEventListener('message', handleWorkerMessage);
      worker.value.postMessage({ source : src });
    }
  };

  onUnmounted(() => {
    if (worker.value) {
      worker.value.removeEventListener('message', handleWorkerMessage);
      worker.value.terminate();
      worker.value = null;
    }
  }, []);

  return { loadImageWithWorker, preloadedImage, workerImagePreloadError };
};

export default useImagePreloaderWorker;
