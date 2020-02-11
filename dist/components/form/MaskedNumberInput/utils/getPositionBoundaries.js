"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPositionBoundaries;

function getPositionBoundaries(e) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? '' : _ref$suffix,
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative;

  var value = e.target.value;
  var negativeSignLength = value.startsWith("-".concat(prefix)) ? 1 : 0;
  var boundaries = [];

  if (allowNegative && prefix) {
    boundaries.push([0, negativeSignLength]);
  }

  boundaries.push([prefix ? prefix.length + negativeSignLength : 0, value.length - suffix.length]);
  return boundaries;
}