# Composables

This is where you can put your Vue composables with the `use-` prefix.
These are automatically imported by Nuxt so no explicit import is needed in order to use them.
Check out `app.vue` to see an example of how to use these.

Please note, however, that any auto-imports will have to be explicitly declared in `.eslintrc`'s `globals` property
so that it doesn't interfere with ESLint's `no-undef` rule.
