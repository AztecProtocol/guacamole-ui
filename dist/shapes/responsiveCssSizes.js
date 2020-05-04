"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssSizeValue = cssSizeValue;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _errorPropDefinition = _interopRequireDefault(require("./utils/errorPropDefinition"));

var _styleConstants = require("../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cssSizes = ['0'].concat(_toConsumableArray(_styleConstants.sizeKeys));

function isCssValue(value) {
  return value === '' || value.split(' ').every(function (val) {
    return cssSizes.indexOf(val) >= 0;
  });
}

function cssSizeValue(props, propName, componentName, location, propFullName) {
  var value = props[propName];

  if (value !== undefined && (typeof value !== 'string' || !isCssValue(value))) {
    return (0, _errorPropDefinition["default"])(value, propFullName || propName, componentName);
  }

  return null;
}

var _default = _propTypes["default"].oneOfType([cssSizeValue, _propTypes["default"].shape({
  xxl: cssSizeValue,
  xl: cssSizeValue,
  l: cssSizeValue,
  m: cssSizeValue,
  s: cssSizeValue,
  xs: cssSizeValue,
  xxs: cssSizeValue
})]);

exports["default"] = _default;