
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 'error',
  },
};

module.exports = config;