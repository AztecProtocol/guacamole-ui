"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateResponsiveStyleNames;
exports.notEmptyString = exports.responsiveStyleConfigAdaptor = void 0;

var _layout = require("../config/layout");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultValidation = function defaultValidation() {
  return true;
};

var notEmptyString = function notEmptyString(v) {
  return v !== '';
}; // use this for config that has xl key before we change our default size to xl


exports.notEmptyString = notEmptyString;

var responsiveStyleConfigAdaptor = function responsiveStyleConfigAdaptor(value) {
  return _typeof(value) !== 'object' && {
    xl: "".concat(value)
  } || value;
};

exports.responsiveStyleConfigAdaptor = responsiveStyleConfigAdaptor;

function generateResponsiveStyleNames(prefix, sizes) {
  var validation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValidation;
  var sizeMap = _typeof(sizes) !== 'object' ? {
    m: "".concat(sizes)
  } : sizes;
  return _layout.deviceBreakpoints.filter(function (key) {
    return key in sizeMap && validation(sizeMap[key]);
  }).map(function (key) {
    return "".concat(prefix).concat(prefix && '-' || '').concat(key, "-").concat(sizeMap[key]);
  });
}