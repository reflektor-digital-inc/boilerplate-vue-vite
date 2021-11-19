import WebGlDisabled from './WebGlDisabled.vue';

const WebGlDisabledStories = {
  title     : 'components/NonFunctionals/WebGlDisabled',
  component : WebGlDisabled
};

const Template = (args) => ({
  components : { WebGlDisabled },
  setup() { return { args }; },
  template   : '<WebGlDisabled v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};

export default WebGlDisabledStories;
