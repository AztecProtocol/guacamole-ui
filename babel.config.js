const path = require('path');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
  env: {
    transpile: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              src: './src',
            },
          },
        ],
        [
          'css-modules-transform',
          {
            extensions: ['.scss'],
            preprocessCss: path.resolve(__dirname, 'scripts/tasks/preprocessCss'),
            append: ['postcss-cssnext'],
            extractCss: path.resolve(__dirname, 'dist/guacamole-ui.css'),
          },
        ],
      ],
    },
  },
};
