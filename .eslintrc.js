module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:vue/base'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
