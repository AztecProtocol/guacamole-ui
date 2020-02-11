"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = jsToSassLoader;

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _jsToSass = _interopRequireDefault(require("../utils/jsToSass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function jsToSassLoader(content) {
  var _ref = _loaderUtils["default"].getOptions(this) || {},
      entry = _ref.entry;

  this.addDependency(entry);

  var fileContent = require(entry)["default"]; // eslint-disable-line


  if (_typeof(fileContent) !== 'object' || Array.isArray(fileContent)) {
    return content;
  }

  return [(0, _jsToSass["default"])(fileContent), content].join('\n');
}