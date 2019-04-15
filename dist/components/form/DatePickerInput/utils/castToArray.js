"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = castToArray;

function castToArray(strOrArr) {
  if (!strOrArr) {
    return [];
  }

  if (typeof strOrArr === 'string') {
    return [strOrArr];
  }

  return strOrArr;
}