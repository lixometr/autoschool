module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "@typescript-eslint/ban-ts-ignore": 'off',
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: 'none',    // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',    // 'semi' or 'comma'
        requireLast: false,
      },
    }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-const": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/naming-convention": "off",
    'no-restricted-imports': 'off',
    'no-unused-expressions': 'off',
    "@typescript-eslint/no-unused-vars": 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
