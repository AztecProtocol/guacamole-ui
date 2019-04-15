"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shiftSize = exports.badgeSizeMap = exports.avatarTextSizeMap = exports.avatarSizesMap = exports.shapeSizeKeys = exports.imageRatioNames = exports.shadowLayerKeys = exports.defaultRoundedCornerKey = exports.roundedCornerKeys = exports.roundedCornerMap = void 0;

var _layout = require("./layout");

var roundedCornerMap = {
  none: '0',
  xxs: '2px',
  xs: '4px',
  s: '6px',
  m: '8px',
  l: '12px',
  circular: '100%'
};
exports.roundedCornerMap = roundedCornerMap;
var roundedCornerKeys = Object.keys(roundedCornerMap);
exports.roundedCornerKeys = roundedCornerKeys;
var defaultRoundedCornerKey = 'xs';
exports.defaultRoundedCornerKey = defaultRoundedCornerKey;
var shadowLayerKeys = [0, 1, 2, 3];
exports.shadowLayerKeys = shadowLayerKeys;
var imageRatioNames = ['square', // 1 * 1
'classic', // 3 * 2
'golden', // 16.18 * 10
'landscape', // 16 * 9
'ultra'];
exports.imageRatioNames = imageRatioNames;
var shapeSizeKeys = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
exports.shapeSizeKeys = shapeSizeKeys;
var avatarSizesMap = {
  xxs: '20px',
  xs: '24px',
  s: '32px',
  m: '40px',
  l: '48px',
  xl: '56px',
  xxl: '72px'
};
exports.avatarSizesMap = avatarSizesMap;
var avatarTextSizeMap = {
  xxs: 'xxs',
  xs: 'xxs',
  s: 'xxs',
  m: 'xs',
  l: 'm',
  xl: 'l',
  xxl: 'xl'
};
exports.avatarTextSizeMap = avatarTextSizeMap;
var badgeSizeMap = {
  xxs: '16px',
  xs: '20px',
  s: '24px',
  m: '28px',
  l: '32px',
  xl: '36px',
  xxl: '48px'
};
exports.badgeSizeMap = badgeSizeMap;

var shiftSize = function shiftSize(size, diff) {
  var allowZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var newIndex = _layout.sizeKeys.indexOf(size) + diff;

  if (!allowZero && newIndex <= 0) {
    newIndex = 1;
  } else if (newIndex >= _layout.sizeKeys.length) {
    newIndex = _layout.sizeKeys.length - 1;
  }

  return _layout.sizeKeys[newIndex];
};

exports.shiftSize = shiftSize;