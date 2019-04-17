"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssSizeValue = cssSizeValue;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _errorPropDefinition = _interopRequireDefault(require("./utils/errorPropDefinition"));

var _layout = require("../config/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cssSizes = ['0'].concat(_toConsumableArray(_layout.sizeKeys));

function isCssValue(value) {
  return value === '' || value.split(' ').every(function (val) {
    return cssSizes.indexOf(val) >= 0;
  });
}

function cssSizeValue(props, propName, componentName, location, propFullName) {
  var value = props[propName];

  if (value !== undefined && (typeof value !== 'string' || !isCssValue(value))) {
    return (0, _errorPropDefinition.default)(value, propFullName || propName, componentName);
  }
}

var _default = _propTypes.default.oneOfType([cssSizeValue, _propTypes.default.shape({
  xxl: cssSizeValue,
  xl: cssSizeValue,
  l: cssSizeValue,
  m: cssSizeValue,
  s: cssSizeValue,
  xs: cssSizeValue,
  xxs: cssSizeValue
})]);

exports.default = _default;