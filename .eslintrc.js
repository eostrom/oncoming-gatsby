module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],

  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': 'error'
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  plugins: ['prettier']
}
