module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/legacy.js',
    './rules/style.js',
    './rules/variables.js'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  globals: {
    Set: true,
    Map: true,
    WeakMap: true,
    Symbol: true,
    ArrayBuffer: true,
    Uint8Array: true,
    Uint8ClampedArray: true,
    Uint16Array: true,
    Uint32Array: true,
    Int8Array: true,
    Int16Array: true,
    Int32Array: true,
    Float32Array: true,
    Float64Array: true
  },
  rules: {}
};
