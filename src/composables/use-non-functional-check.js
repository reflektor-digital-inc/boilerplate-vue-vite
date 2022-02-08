import { onMounted } from 'vue';
import { useNonFunctionalStore, useWindowSizeStore } from '@store';
import device from '@utils/device';
import { checkDeviceSupport } from '@utils/device-support';
import { checkWindowTooSmall, checkWindowTooLarge } from '@utils/device-screen-size';
import { isWebGLAvailable, isWebGL2Available } from '@utils/webgl-support';

const useNonFunctionalCheck = () => {
  const windowSizeStore = useWindowSizeStore();
  const {
    setDeviceSupport,
    setWindowTooSmall,
    setWindowTooLarge,
    setWebglDisabled
  } = useNonFunctionalStore();

  // check browser and os support
  onMounted(() => {
    setDeviceSupport(checkDeviceSupport());

    if (!(isWebGLAvailable() && isWebGL2Available())) {
      setWebglDisabled(true);
    }
  });

  // check window size
  windowSizeStore.$subscribe((mutation, state) => {
    if (device.detection.isDesktop) {
      setWindowTooSmall(checkWindowTooSmall(state.windowSize));
      setWindowTooLarge(checkWindowTooLarge(state.windowSize));
    }
  });
};

export default useNonFunctionalCheck;
