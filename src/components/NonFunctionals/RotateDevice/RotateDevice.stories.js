import RotateDevice from './RotateDevice.vue';

const RotateDeviceStories = {
  title     : 'components/NonFunctionals/RotateDevice',
  component : RotateDevice
};

const Template = (args) => ({
  components : { RotateDevice },
  setup() { return { args }; },
  template   : '<RotateDevice v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};

export default RotateDeviceStories;
