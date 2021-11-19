import WindowTooSmall from './WindowTooSmall.vue';

const WindowTooSmallStories = {
  title     : 'components/NonFunctionals/WindowTooSmall',
  component : WindowTooSmall
};

const Template = (args) => ({
  components : { WindowTooSmall },
  setup() { return { args }; },
  template   : '<WindowTooSmall v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};

export default WindowTooSmallStories;
