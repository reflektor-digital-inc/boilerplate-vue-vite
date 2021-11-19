const path = require('path');

const SETTINGS = {
  TEMPLATE : {
    // Component
    COMPONENT_VUE : path.resolve(
      __dirname,
      'templates/component/Component.vue.txt'
    ),
    COMPONENT_STORIES : path.resolve(
      __dirname,
      'templates/component/Component.stories.txt'
    ),

    // Page
    PAGE_VUE     : path.resolve(__dirname, 'templates/page/Page.vue.txt'),
    PAGE_STORIES : path.resolve(__dirname, 'templates/page/Page.stories.txt'),
  },
  OUTPUT : {
    // Component
    COMPONENTS_DIR : path.resolve(__dirname, '../../src/components'),

    // Page
    PAGES_DIR : path.resolve(__dirname, '../../src/pages'),
  }
};

module.exports = SETTINGS;
