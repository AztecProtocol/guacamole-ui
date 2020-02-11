"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getConfig;

var _path = _interopRequireDefault(require("path"));

var _fs = require("./fs");

var _log = require("./log");

var _deepMerge = _interopRequireDefault(require("./deepMerge"));

var _guacamole = _interopRequireDefault(require("../../../guacamole.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CONFIG_FILE_NAME = 'guacamole.config.js';

function getConfig(configFilepath) {
  var config = _guacamole["default"];

  if (configFilepath) {
    var configFileDest = [configFilepath, _path["default"].join(configFilepath, CONFIG_FILE_NAME)].find(function (filepath) {
      return (0, _fs.isFile)(filepath);
    });

    if (configFileDest) {
      var processRoot = process.cwd();

      var configFileName = _path["default"].resolve(processRoot, configFileDest);

      try {
        var customConfig = require(configFileName); // eslint-disable-line


        config = (0, _deepMerge["default"])(config, customConfig);
      } catch (error) {
        (0, _log.errorLog)('Cannot require file\n', "path: ".concat(configFileName, "\n"), error);
      }
    }
  }

  return config;
}