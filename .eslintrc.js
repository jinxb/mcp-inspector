// mcp-suite/.eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // project: ['./tsconfig.base.json', './packages/*/tsconfig.json'], // 启用类型信息（可能增加 lint 时长）
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // 更严格的类型检查
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 忽略以 `_` 开头的未使用参数
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          { pattern: '@mcp-suite/**', group: 'internal', position: 'before' }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'off', // 由 TypeScript 处理模块解析
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        // project: ['./tsconfig.base.json', './packages/*/tsconfig.json'], // 路径别名解析
      },
    },
  },
  env: { node: true, es6: true },
  overrides: [
    { 
      files: ['*.test.ts', '*.spec.ts'],
      env: { jest: true } // 测试环境配置
    },
  ],
};