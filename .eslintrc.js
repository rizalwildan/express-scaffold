module.exports = {
  extends: [
    'semistandard',
    'prettier'
  ],
  plugins: [
    'jest'
  ],
  env: {
    'jest/globals': true
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};