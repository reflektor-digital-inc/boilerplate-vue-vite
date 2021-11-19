const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/assets': path.resolve(__dirname, '../src/assets'),
      '@/styles': path.resolve(__dirname, '../src/styles'),
      '@/settings': path.resolve(__dirname, '../src/settings'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
      '@/store': path.resolve(__dirname, '../src/utils'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "src/styles/_shared.scss";'
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
