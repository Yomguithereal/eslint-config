module.exports = {
  extends: [
    './es6',
    './rules/es7'
  ].map(require.resolve),
  rules: {}
};
