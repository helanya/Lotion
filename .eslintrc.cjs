module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    './.eslinttrc-auto-import.json',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 2,
    'no-var': 2,
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
        multiline: {
          max: 1,
        },
      },
    ],
  },
}
