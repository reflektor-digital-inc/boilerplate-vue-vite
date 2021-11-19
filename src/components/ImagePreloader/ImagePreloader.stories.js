import ImagePreloader from './ImagePreloader.vue';

const ImagePreloaderStories = {
  title     : 'components/ImagePreloader',
  component : ImagePreloader
};

const Template = (args) => ({
  components : { ImagePreloader },
  setup() { return { args }; },
  template   : '<ImagePreloader v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  src    : '/images/hero-char.png',
  width  : '200px',
  height : '300px',
  fit    : 'contain'
};

export default ImagePreloaderStories;
