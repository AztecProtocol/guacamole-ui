"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkThemeInputValueColor = exports.darkThemeInputActiveOutlineColor = exports.darkThemeInputOutlineColor = exports.defaultInputValueColor = exports.defaultInputActiveOutlineColor = exports.defaultInputOutlineColor = exports.inputBorderWidth = exports.inputStatusColorMap = exports.inputFontSizeKeyMap = exports.inputSizeMap = void 0;

var _colors = require("./colors");

var inputSizeMap = {
  xs: '24px',
  s: '28px',
  m: '32px',
  l: '40px'
};
exports.inputSizeMap = inputSizeMap;
var inputFontSizeKeyMap = {
  xs: 'xxs',
  s: 'xxs',
  m: 'xs',
  l: 's'
};
exports.inputFontSizeKeyMap = inputFontSizeKeyMap;
var inputStatusColorMap = {
  error: _colors.colorMap.red,
  focus: _colors.colorMap['secondary-light']
};
exports.inputStatusColorMap = inputStatusColorMap;
var inputBorderWidth = '1px';
exports.inputBorderWidth = inputBorderWidth;
var defaultInputOutlineColor = _colors.colorMap['grey-light'];
exports.defaultInputOutlineColor = defaultInputOutlineColor;
var defaultInputActiveOutlineColor = _colors.colorMap['secondary-light'];
exports.defaultInputActiveOutlineColor = defaultInputActiveOutlineColor;
var defaultInputValueColor = _colors.colorMap['grey-dark'];
exports.defaultInputValueColor = defaultInputValueColor;
var darkThemeInputOutlineColor = _colors.colorMap['white-light'];
exports.darkThemeInputOutlineColor = darkThemeInputOutlineColor;
var darkThemeInputActiveOutlineColor = _colors.colorMap.white;
exports.darkThemeInputActiveOutlineColor = darkThemeInputActiveOutlineColor;
var darkThemeInputValueColor = _colors.colorMap.white;
exports.darkThemeInputValueColor = darkThemeInputValueColor;