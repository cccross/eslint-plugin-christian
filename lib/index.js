const commonOverridenRules = {
  'comma-dangle': 'off',
  'no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true }
  ],
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'then' // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ]
    }
  ],
  'import/prefer-default-export': 'off'
};

const reactOverridenRules = {
  'react/forbid-prop-types': 'off',
  'react/jsx-filename-extension': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'warn',
  'react/react-in-jsx-scope': 'off'
};

module.exports = {
  configs: {
    common: {
      plugins: ['prettier'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
      rules: commonOverridenRules
    },
    'react-app': {
      plugins: ['prettier'],
      extends: ['airbnb', 'plugin:prettier/recommended'],
      rules: {
        ...commonOverridenRules,
        ...reactOverridenRules
      },
      env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
      },
      settings: {
        react: {
          version: 'detect'
        },
        'import/resolver': {
          node: {
            paths: ['src']
          }
        }
      }
    },
    typescript: {
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['prettier'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
      ],
      rules: commonOverridenRules
    },
    'typescript-react': {
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['prettier'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended'
      ],
      rules: {
        ...commonOverridenRules,
        ...reactOverridenRules
      }
    }
  }
};
