module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'template-curly-spacing': ['error', 'always'],

    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
  },
}
