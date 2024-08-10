module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'turbo'],
  plugins: [],
  rules: {
    'import/order': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1
    }],
    'vue/valid-v-slot': ['error', {
      allowModifiers: true
    }],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ]
}
