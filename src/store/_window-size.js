import { defineStore } from 'pinia';

const useWindowSizeStore = defineStore('windowSize', {
  state : () => ({
    windowSize : {
      width  : 0,
      height : 0
    }
  }),
  actions : {
    setWindowSize(size) {
      this.windowSize = {
        width  : size.width,
        height : size.height
      };
    }
  }
});

export default useWindowSizeStore;
