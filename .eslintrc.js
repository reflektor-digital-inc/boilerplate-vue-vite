module.exports = {
  plugins : [
    '@reflektor/vue'
  ],
  extends : [
    'plugin:@reflektor/vue/base'
  ],
  settings : {
    'import/resolver' : {
      'alias' : {
        'map' : [
          ['@', './src'],
          ['@components', './src/components'],
          ['@pages', './src/pages'],
          ['@assets', './src/assets'],
          ['@styles', './src/styles'],
          ['@settings', './src/settings'],
          ['@utils', './src/utils'],
          ['@store', './src/store'],
          ['@composables', './src/composables']
        ]
      }
    }
  }
};
