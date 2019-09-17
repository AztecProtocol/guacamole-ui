"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeCssConfig;

var _config = _interopRequireDefault(require("../../config"));

var styleConstants = _interopRequireWildcard(require("../../config/styleConstants"));

var _deepMerge = _interopRequireDefault(require("./deepMerge"));

var _updateColorsInConfig = _interopRequireDefault(require("./updateColorsInConfig"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var capitalize = function capitalize(text) {
  return "".concat(text[0].toUpperCase()).concat(text.substr(1).toLowerCase());
};

function mergeCssConfig(theme) {
  var config = _objectSpread({}, (0, _deepMerge.default)(_config.default, theme), styleConstants);

  var _ref = theme || {},
      deviceBreakpointMap = _ref.deviceBreakpointMap;

  if (deviceBreakpointMap) {
    Object.keys(deviceBreakpointMap).forEach(function (key) {
      config["minDeviceWidth".concat(capitalize(key))] = deviceBreakpointMap[key];
    });
  }

  config = (0, _updateColorsInConfig.default)(config, theme);
  return config;
}