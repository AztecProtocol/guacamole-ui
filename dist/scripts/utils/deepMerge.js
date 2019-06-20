"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deepMerge;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function deepMerge(obj1, obj2) {
  if (!obj1 || !obj2) {
    return obj1 || obj2;
  }

  if (_typeof(obj1) !== 'object' || Array.isArray(obj2)) {
    return obj2;
  }

  if (_typeof(obj2) !== 'object') {
    return obj1;
  }

  var obj = {};
  Object.keys(obj1).forEach(function (key) {
    obj[key] = deepMerge(obj1[key], obj2[key]);
  });
  Object.keys(obj2).forEach(function (key) {
    if (!(key in obj)) {
      obj[key] = obj2[key];
    }
  });
  return obj;
}