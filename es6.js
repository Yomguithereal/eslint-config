module.exports = {
  extends: [
    './legacy.js',
    './rules/es6.js',
  ].map(require.resolve),
  rules: {}
};
