/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-lone-template': 'off',
    'vue/script-indent': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest',
  }
}
