module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'promise',
    'jest',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'graphql',
    'fp',
    'prettier',
  ],
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'plugin:fp/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'no-use-before-define': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',

    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'fp/no-mutation': 'off',
    'fp/no-throw': 'off',
    'fp/no-nil': 'off',
    'fp/no-let': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-class': 'off',

    'promise/valid-params': 'off',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
