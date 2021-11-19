import { defineStore } from 'pinia';

const useNonFunctionalStore = defineStore('nonFunctional', {
  state : () => ({
    deviceSupport : {
      browser : true,
      os      : true
    },
    windowTooSmall : false,
    windowTooLarge : false,
    rotateDevice   : false,
    webglDisabled  : false
  }),
  actions : {
    setDeviceSupport(support) {
      this.deviceSupport = {
        browser : support.browser,
        os      : support.os
      };
    },
    setWindowTooSmall(tooSmall) { this.windowTooSmall = tooSmall; },
    setWindowTooLarge(tooLarge) { this.windowTooLarge = tooLarge; },
    setRotateDevice(rotate) { this.rotateDevice = rotate; },
    setWebglDisabled(disabled) { this.webglDisabled = disabled; },
  }
});

export default useNonFunctionalStore;
