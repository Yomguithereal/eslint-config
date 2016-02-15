module.exports = {
  extends: [
    './es6.js',
    './rules/es7.js'
  ].map(require.resolve),
  rules: {}
};
