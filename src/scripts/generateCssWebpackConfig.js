import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import generateCssName from './utils/generateCssName';

const projectRoot = path.resolve(__dirname, '../../');
const srcPath = path.resolve(projectRoot, 'src');

export default function generateCssWebpackConfig({
  output: {
    path: outputPath = path.resolve(__dirname, '../../dist'),
    filename = 'guacamole.css',
    variablesFilename = 'guacamole-vars.scss',
  } = {},
  ignoreFonts = false,
} = {}) {
  const variablesSassFilename = variablesFilename.replace(/.js$/, '.scss');

  return {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json'],
      alias: {
        src: srcPath,
        utils: path.resolve(srcPath, 'utils'),
        outputStyles: outputPath,
      },
    },
    resolveLoader: {
      modules: [
        path.resolve(__dirname, '../modules'),
        path.resolve(projectRoot, 'node_modules'),
        'node_modules',
      ],
    },
    mode: 'production',
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    entry: [
      path.resolve(srcPath, 'index.js'),
    ],
    target: 'web',
    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'index.js',
    },
    performance: {
      maxAssetSize: 10000000,
      maxEntrypointSize: 10000000,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'production',
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new MiniCssExtractPlugin({
        filename,
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: new RegExp(filename),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: /guacamole-ui/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: ignoreFonts
            ? {
              loader: 'ignore-loader',
            }
            : [
              {
                loader: 'file-loader',
                options: {
                  outputPath: (url, resourcePath) => {
                    const srcFonts = '/src/fonts/';
                    const cutAt = resourcePath.lastIndexOf(srcFonts);
                    return `fonts/${resourcePath.substr(cutAt + srcFonts.length)}`;
                  },
                },
              },
            ],
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                name: '[name]_[hash:base64:3]',
                extract: false,
              },
            },
          ],
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  getLocalIdent: (context, localIdentName, localName) => {
                    const {
                      resourcePath,
                    } = context;

                    return generateCssName(resourcePath, localName);
                  },
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // eslint-disable-next-line global-require
                plugins: () => [require('autoprefixer')],
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                prependData: `@import "~outputStyles/${variablesSassFilename}";`,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
          ],
        },
      ],
    },
  };
}
