import DeviceUnsupported from './DeviceUnsupported.vue';

const DeviceUnsupportedStories = {
  title     : 'components/NonFunctionals/DeviceUnsupported',
  component : DeviceUnsupported
};

const Template = (args) => ({
  components : { DeviceUnsupported },
  setup() { return { args }; },
  template   : '<DeviceUnsupported v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};

export default DeviceUnsupportedStories;
