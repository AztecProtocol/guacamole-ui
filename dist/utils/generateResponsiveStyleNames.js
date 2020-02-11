"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateResponsiveStyleNames;
exports.notEmptyString = void 0;

var _styleConstants = require("../config/styleConstants");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultValidation = function defaultValidation() {
  return true;
};

var notEmptyString = function notEmptyString(v) {
  return v !== '';
};

exports.notEmptyString = notEmptyString;

function generateResponsiveStyleNames(prefix, sizes) {
  var validation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultValidation;
  var sizeMap = _typeof(sizes) !== 'object' ? _defineProperty({}, _styleConstants.defaultDeviceBreakpointKey, "".concat(sizes)) : sizes;
  return _styleConstants.deviceBreakpointKeys.filter(function (key) {
    return key in sizeMap && validation(sizeMap[key]);
  }).map(function (key) {
    return [prefix, prefix ? '-' : '', key !== _styleConstants.defaultDeviceBreakpointKey ? key : '', prefix || key !== _styleConstants.defaultDeviceBreakpointKey ? '-' : '', sizeMap[key]].join('');
  });
}