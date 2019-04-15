"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontWeightKeys = exports.fontWeightMap = exports.lineHeightMap = exports.fontSizeKeys = exports.fontSizeMap = exports.defaultTextSizeKey = exports.defaultFontFamily = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultFontFamily = '\'Cerebri Sans\', sans-serif';
exports.defaultFontFamily = defaultFontFamily;
var defaultTextSizeKey = 'xs';
exports.defaultTextSizeKey = defaultTextSizeKey;
var fontSizeMap = {
  xxs: '12px',
  xs: '14px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  xxl: '48px'
};
exports.fontSizeMap = fontSizeMap;
var fontSizeKeys = Object.keys(fontSizeMap);
exports.fontSizeKeys = fontSizeKeys;
var lineHeightMap = {
  xxs: '18px',
  xs: '20px',
  s: '24px',
  m: '28px',
  l: '36px',
  xl: '48px',
  xxl: '64px'
};
exports.lineHeightMap = lineHeightMap;
var fontWeightMap = {
  light: 300,
  normal: 400,
  book: 450,
  semibold: 500,
  bold: 600
};
exports.fontWeightMap = fontWeightMap;
var fontWeightKeys = ['inherit'].concat(_toConsumableArray(Object.keys(fontWeightMap)));
exports.fontWeightKeys = fontWeightKeys;