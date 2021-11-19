import { onMounted } from 'vue';
import gsap from 'gsap';

/**
 * PLUGINS
 */
import SplitText from 'gsap/dist/SplitText.js';

const useGsapPlugins = () => {

  // register gsap plugins here
  onMounted(() => {
    gsap.registerPlugin(SplitText);
  });
};

export default useGsapPlugins;
