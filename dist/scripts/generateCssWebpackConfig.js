"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCssWebpackConfig;

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));

var _optimizeCssAssetsWebpackPlugin = _interopRequireDefault(require("optimize-css-assets-webpack-plugin"));

var _generateCssName = _interopRequireDefault(require("./utils/generateCssName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectRoot = _path.default.resolve(__dirname, '../../');

var srcPath = _path.default.resolve(projectRoot, 'src');

function generateCssWebpackConfig() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$output = _ref.output;

  _ref$output = _ref$output === void 0 ? {} : _ref$output;
  var _ref$output$path = _ref$output.path,
      outputPath = _ref$output$path === void 0 ? _path.default.resolve(__dirname, '../../dist') : _ref$output$path,
      _ref$output$filename = _ref$output.filename,
      filename = _ref$output$filename === void 0 ? 'guacamole.css' : _ref$output$filename,
      _ref$output$variables = _ref$output.variablesFilename,
      variablesFilename = _ref$output$variables === void 0 ? 'guacamole-vars.scss' : _ref$output$variables,
      _ref$ignoreFonts = _ref.ignoreFonts,
      ignoreFonts = _ref$ignoreFonts === void 0 ? false : _ref$ignoreFonts;
  return {
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json'],
      alias: {
        src: srcPath,
        utils: _path.default.resolve(srcPath, 'utils'),
        outputStyles: outputPath
      }
    },
    resolveLoader: {
      modules: [_path.default.resolve(__dirname, '../modules'), _path.default.resolve(projectRoot, 'node_modules'), 'node_modules']
    },
    mode: 'production',
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    entry: [_path.default.resolve(srcPath, 'index.js')],
    target: 'web',
    output: {
      path: outputPath,
      publicPath: '/',
      filename: 'index.js'
    },
    performance: {
      maxAssetSize: 10000000,
      maxEntrypointSize: 10000000
    },
    plugins: [new _webpack.default.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    }), new _webpack.default.NoEmitOnErrorsPlugin(), new _miniCssExtractPlugin.default({
      filename: filename
    }), new _optimizeCssAssetsWebpackPlugin.default({
      assetNameRegExp: new RegExp(filename)
    })],
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
          }
        }
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: ignoreFonts ? {
          loader: 'ignore-loader'
        } : [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
          }
        }]
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images'
          }
        }]
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'svg-sprite-loader',
          options: {
            name: '[name]_[hash:base64:3]',
            extract: false
          }
        }]
      }, {
        test: /\.(sa|sc)ss$/,
        use: [{
          loader: _miniCssExtractPlugin.default.loader
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            getLocalIdent: function getLocalIdent(context, localIdentName, localName) {
              var resourcePath = context.resourcePath;
              return (0, _generateCssName.default)(resourcePath, localName);
            }
          }
        }, {
          loader: 'postcss-loader',
          options: {
            // eslint-disable-next-line global-require
            plugins: function plugins() {
              return [require('autoprefixer')];
            }
          }
        }, 'resolve-url-loader', {
          loader: 'sass-loader',
          options: {
            includePaths: [srcPath],
            data: "@import \"~outputStyles/".concat(variablesFilename, "\";")
          }
        }]
      }, {
        test: /\.css$/,
        use: [{
          loader: _miniCssExtractPlugin.default.loader
        }, 'css-loader']
      }]
    }
  };
}