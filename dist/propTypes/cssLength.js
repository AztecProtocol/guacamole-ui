"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cssLength;

var _errorPropDefinition = _interopRequireDefault(require("./utils/errorPropDefinition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isCSSLength(value) {
  return /^\d+(\.\d+)?(px|%)?$/i.test(value) || value === 'auto';
}

function cssLength(props, propName, componentName) {
  var prop = props[propName];

  if (prop !== undefined && !isCSSLength(prop)) {
    return (0, _errorPropDefinition["default"])(prop, propName, componentName);
  }

  return null;
}