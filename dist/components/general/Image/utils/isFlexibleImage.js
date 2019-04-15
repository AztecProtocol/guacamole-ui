"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFlexibleImage;

function isFlexibleImage(_ref) {
  var ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height;

  if (ratio) {
    return false;
  }

  return !width || !height || width === 'auto' || height === 'auto';
}