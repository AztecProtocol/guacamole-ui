"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bundleCss;

var _webpack = _interopRequireDefault(require("webpack"));

var _formatWebpackMessages = _interopRequireDefault(require("react-dev-utils/formatWebpackMessages"));

var _memoryFs = _interopRequireDefault(require("memory-fs"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _generateCssWebpackConfig = _interopRequireDefault(require("./generateCssWebpackConfig"));

var _fs2 = require("./utils/fs");

var _log = require("./utils/log");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

process.env.NODE_ENV = 'production';

var copyFilesFromMemory = function copyFilesFromMemory(mfs, outputPath) {
  mfs.readdirSync(outputPath).forEach(function (filename) {
    if (filename.endsWith('.js')) return;

    var filepath = _path["default"].join(outputPath, filename);

    if (mfs.statSync(filepath).isDirectory()) {
      (0, _fs2.ensureDirectory)(filepath);
      copyFilesFromMemory(mfs, filepath);
    } else {
      _fs["default"].writeFileSync(filepath, mfs.readFileSync(filepath));
    }
  });
};

function bundleCss() {
  var webpackOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _log.log)('Generating minified css. This will take a moment...');
  var config = (0, _generateCssWebpackConfig["default"])(webpackOptions);
  var compiler = (0, _webpack["default"])(config);
  var mfs = new _memoryFs["default"]();
  compiler.outputFileSystem = mfs;
  compiler.run(function (err, stats) {
    var messages = (0, _formatWebpackMessages["default"])(stats.toJson({}, true));

    if (messages.errors.length) {
      throw new Error(messages.errors.join('\n\n'));
    }

    var outputPath = config.output.path;
    copyFilesFromMemory(mfs, outputPath);

    if (messages.warnings.length) {
      (0, _log.warnLog)(messages.warnings.join('\n'));
    } else {
      var _webpackOptions$outpu = webpackOptions.output,
          filename = _webpackOptions$outpu.filename,
          variablesFilename = _webpackOptions$outpu.variablesFilename;
      (0, _log.successLog)('Your custom style files are compiled successfully!');
      var outputFiles = [filename, variablesFilename.replace(/.js$/, '.scss'), variablesFilename.replace(/.scss$/, '.js')];

      if (!webpackOptions.ignoreFonts) {
        outputFiles.push('fonts/');
      }

      (0, _log.logEntries)([].concat(outputFiles, ['', _chalk["default"].grey("path: ".concat(outputPath))]));
    }
  });
}