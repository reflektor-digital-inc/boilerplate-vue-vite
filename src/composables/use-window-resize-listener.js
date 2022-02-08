import _throttle from 'lodash/throttle.js';
import { onMounted } from 'vue';
import { useWindowSizeStore } from '@store';

const setGlobalVhValue = (windowHeight) => {
  const root = document.documentElement;
  root.style.setProperty('--vh-val', `${windowHeight / 100}px`);
};

const useWindowResizeListener = () => {
  const windowSizeStore = useWindowSizeStore();
  const { setWindowSize } = windowSizeStore;

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    setGlobalVhValue(windowHeight);

    setWindowSize({
      width  : windowWidth,
      height : windowHeight,
    });
  };

  onMounted(() => {
    typeof window !== undefined && handleResize();

    const throttledHandleResize = _throttle(handleResize, 100, { trailing : true });
    window.addEventListener('resize', throttledHandleResize);

    return () => window.removeEventListener('resize', throttledHandleResize);
  });
};

export default useWindowResizeListener;
