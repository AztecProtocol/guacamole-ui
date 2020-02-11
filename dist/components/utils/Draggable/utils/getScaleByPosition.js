"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScaleByPosition;

function getScaleByPosition(position, left, right) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step;

  var base = right - left;

  if (!base) {
    return min;
  }

  var pos = Math.max(left, position);
  var diff = Math.round((max - min) * (pos - left) / base);
  return Math.min(max, min + Math.round(diff / step) * step);
}