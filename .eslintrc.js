module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'react-app',
  ],
  plugins: [
    'security',
    'sonarjs',
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'max-len': ['error', 80],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'security/detect-object-injection': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};
