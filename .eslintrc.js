module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  settings: {
    "import/resolver": {
      "babel-module": {},
      alias: {
        map: [
          ["src", "./src"]
        ],
        extensions: [".jsx", ".js", ".scss"]
      }
    }
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/aria-role': 0,
    'no-nested-ternary': 0,
    'max-len': [
      'warn',
      100,
      2,
      {
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
  },
  overrides: [
    {
      files: ['*.spec.js', '*.spec.jsx'],
      rules: {
        'no-unused-expressions': 0
      }
    }
  ]
};
