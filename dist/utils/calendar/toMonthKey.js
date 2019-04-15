"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toMonthKey;

function toMonthKey(month) {
  return month.format('YYYYMM');
}