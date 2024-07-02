module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        jest: true,
        node: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Add custom rules here
    },
};