"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorPropDefinition;

function errorPropDefinition(prop, propName, componentName) {
  return new Error("Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ". Value = ").concat(prop));
}