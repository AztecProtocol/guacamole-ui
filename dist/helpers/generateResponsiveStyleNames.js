"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateResponsiveStyleNames;
exports.notEmptyString = void 0;

var _layout = require("../config/layout");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultValidation = function defaultValidation() {
  return true;
};

var notEmptyString = function notEmptyString(v) {
  return v !== '';
};

exports.notEmptyString = notEmptyString;

function generateResponsiveStyleNames(prefix, sizes) {
  var validation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValidation;
  var sizeMap = _typeof(sizes) !== 'object' ? _defineProperty({}, _layout.defaultDeviceBreakpoint, "".concat(sizes)) : sizes;
  return _layout.deviceBreakpoints.filter(function (key) {
    return key in sizeMap && validation(sizeMap[key]);
  }).map(function (key) {
    return "".concat(prefix).concat(prefix && '-' || '').concat(key !== _layout.defaultDeviceBreakpoint ? key : '', "-").concat(sizeMap[key]);
  });
}