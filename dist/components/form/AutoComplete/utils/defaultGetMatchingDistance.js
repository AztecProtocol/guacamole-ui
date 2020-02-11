"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultGetMatchingDistance;

function defaultGetMatchingDistance(value, item) {
  var formatedValue = value.trim().toLowerCase();

  if (!formatedValue) {
    return 0;
  }

  var title = item.title;
  return title.toLowerCase().includes(formatedValue) ? 1 : 0;
}