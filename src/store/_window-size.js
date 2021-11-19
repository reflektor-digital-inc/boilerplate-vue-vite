import { defineStore } from 'pinia';

const useWindowSizeStore = defineStore('windowSize', {
  state : () => ({
    // example
    counter : 0
  }),
  actions : {
    // example
    setCounter(value) {
      this.counter = value;
    }
  }
});

export default useWindowSizeStore;
