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

function isCssValue(value) {
  return value === '' || value.split(' ').every(function (val) {
    return _layout.sizeKeys.indexOf(val) >= 0;
  });
}

function cssSizeValue(props, propName, componentName, location, propFullName) {
  var value = props[propName];

  if (value !== undefined && (typeof value !== 'string' || !isCssValue(value))) {
    return (0, _errorPropDefinition.default)(value, propFullName || propName, componentName);
  }
}

var _default = _propTypes.default.oneOfType([cssSizeValue, _propTypes.default.shape({
  m: cssSizeValue,
  s: cssSizeValue,
  xs: cssSizeValue
})]);

exports.default = _default;