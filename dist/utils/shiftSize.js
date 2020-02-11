"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shiftSize;

var _styleConstants = require("../config/styleConstants");

function shiftSize(size, diff) {
  var newIndex = _styleConstants.sizeKeys.indexOf(size) + diff;

  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= _styleConstants.sizeKeys.length) {
    newIndex = _styleConstants.sizeKeys.length - 1;
  }

  return _styleConstants.sizeKeys[newIndex];
}