module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/legacy',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  env: {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': true,
    'jasmine': false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
