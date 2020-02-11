"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toDayKey;

function toDayKey(day) {
  return day.format('YYMMDD');
}