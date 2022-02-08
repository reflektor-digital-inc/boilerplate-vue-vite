module.exports = {
  severity     : 'warning',
  customSyntax : 'postcss-scss',
  plugins      : ['stylelint-scss'],
  rules        : {
    'block-no-empty'                       : true,
    'declaration-block-trailing-semicolon' : 'always',
    'selector-type-no-unknown'             : true,
    'selector-type-case'                   : 'lower',
    'color-no-invalid-hex'                 : true,
    'no-extra-semicolons'                  : true,
    'value-list-comma-newline-after'       : 'always-multi-line',
    'string-quotes'                        : 'single',
    'property-no-vendor-prefix'            : null,
    'rule-empty-line-before'               : null,
    'color-function-notation'              : null,
    'no-invalid-position-at-import-rule'   : null,
    'declaration-colon-space-after'        : 'always',
    'block-opening-brace-space-before'     : 'always',
    'at-rule-no-unknown'                   : [
      true,
      {
        'ignoreAtRules' : [
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'else if',
          'error',
          'extend',
          'font-face',
          'for',
          'function',
          'if',
          'import',
          'include',
          'keyframes',
          'media',
          'mixin',
          'page',
          'return',
          'warn',
          'while',
          'use'
        ]
      }
    ],
    'scss/dollar-variable-pattern'           : null,
    'scss/dollar-variable-empty-line-before' : null
  },
  overrides : [
    {
      'files'        : ['*.html', '**/*.html', '**/*.vue'],
      'customSyntax' : 'postcss-html'
    }
  ]
};
