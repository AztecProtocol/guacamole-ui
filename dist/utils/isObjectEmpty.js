"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isObjectEmpty;

function isObjectEmpty(obj) {
  for (var key in obj) {
    // eslint-disable-line no-restricted-syntax
    if (Object.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}