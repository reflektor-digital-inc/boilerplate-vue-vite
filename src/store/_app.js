import { defineStore } from 'pinia';

const useAppStore = defineStore('app', {
  state   : () => ({ counter : 0 }),
  actions : {
    setCounter(value) {
      this.counter = value;
    }
  }
});

export default useAppStore;
