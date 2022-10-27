module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: [
    '.eslintrc.js',
    '*.config.js',
    'sidebars.js'
  ],
  rules: {
    semi: 'error',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ["error", { beforeColon: false }],
    '@typescript-eslint/keyword-spacing': ["error", { before: true }],
    'no-multi-spaces': ["error", { ignoreEOLComments: true }],
    '@typescript-eslint/quotes': ["error", "double", { allowTemplateLiterals: true }],
    'semi-style': ["error", "last"],
    'space-before-function-paren': ["error", "never"],
    'arrow-spacing': "error",
    'array-bracket-spacing': ["error", "never"],
    'array-bracket-newline': ["error", "consistent"],
    'block-spacing': "error",
    '@typescript-eslint/brace-style': "error",
    'space-infix-ops': "error"
  }
}
