"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorPropDefinition;

function errorPropDefinition(value, propName, componentName) {
  return new Error("Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ". Value = ").concat(value));
}