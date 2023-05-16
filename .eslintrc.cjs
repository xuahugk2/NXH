/* eslint-disable no-undef */
module.exports = {
    'env': { 'browser': true, 'es2020': true },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    'parserOptions': { 'ecmaVersion': 'latest', 'sourceType': 'module' },
    'settings': { 'react': { 'version': '18.2' } },
    'plugins': ['react-refresh'],
    'rules': {
        'react-refresh/only-export-components': 'warn',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'comma-dangle': [2, 'always-multiline'],
        'eol-last': [2, 'windows'],
        'semi': [2, 'always'],
        'max-len': [1, { code: 120 }],
    },
};
