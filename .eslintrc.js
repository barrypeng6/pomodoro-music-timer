module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],
    'operator-assignment': ['error', 'never'],
    'react/prop-types': 0,
    camelcase: 0,
    'operator-linebreak': ['error', 'before'],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  settings: { 'import/core-modules': ['styled-jsx/css'] },
  env: {
    browser: true,
    node: true,
  },
};
