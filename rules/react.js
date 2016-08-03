module.exports = {
  plugins: [
    'react'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '15.0'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-uses-react': 2,
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-wrap-multilines': 2,
    'react/self-closing-comp': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/no-danger': 2,
    'react/no-set-state': 2,
    'react/no-is-mounted': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-render-return-value': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-handler-names': 0,
    'react/jsx-pascal-case': 2,
    'react/jsx-no-bind': [2, {ignoreRefs: true}],
    'react/jsx-no-undef': 2,
    'react/no-unknown-property': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-sort-props': 0,
    'react/sort-prop-types': 0,
    'react/jsx-boolean-value': 2,
    'react/sort-comp': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-max-props-per-line': [1, {maximum: 3}],
    'react/jsx-no-literals': 0,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-space-before-closing': 2,
    'react/no-direct-mutation-state': 2,
    'react/forbid-prop-types': 2,
    'react/prefer-es6-class': 2,
    'react/jsx-key': 2,
    'react/no-string-refs': 2,
    'react/prefer-stateless-function': 2,
    'react/require-render-return': 2,
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx']}],
    'react/require-optimization': 2,
    'react/no-find-dom-node': 2
  }
};
