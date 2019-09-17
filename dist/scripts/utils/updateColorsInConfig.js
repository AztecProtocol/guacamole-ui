"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateColorsInConfig;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateColorsInConfig(source) {
  var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultColorMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var customColorMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var defaultColors = defaultColorMap || source.colorMap;

  if (!defaultColors) {
    return source;
  }

  var customColors = customColorMap || customConfig.colorMap || {};

  var config = _objectSpread({}, source);

  Object.keys(source).filter(function (key) {
    return key.endsWith('Name');
  }).forEach(function (key) {
    var colorName = customConfig[key] || source[key];
    if (!defaultColors[colorName]) return;
    var styleName = key.substr(0, key.length - 4);

    if (source[styleName] && !customConfig[styleName]) {
      config[styleName] = customColors[colorName] || defaultColors[colorName];
    }
  });
  return config;
}