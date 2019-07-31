module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: [1, 'single']
  },

  parserOptions: {
    parser: 'babel-eslint'
  },
};
