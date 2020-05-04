"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusInputColor = exports.focusInputColorName = exports.errorInputColor = exports.errorInputColorName = exports.inlineInputPlaceholderColor = exports.inlineInputPlaceholderColorName = exports.inlineInputValueColor = exports.inlineInputValueColorName = exports.inlineInputActiveOutlineColor = exports.inlineInputActiveOutlineColorName = exports.inlineInputActiveBgColor = exports.inlineInputActiveBgColorName = exports.inlineInputBgColor = exports.inlineInputBgColorName = exports.darkInputPlaceholderColor = exports.darkInputPlaceholderColorName = exports.darkInputValueColor = exports.darkInputValueColorName = exports.darkInputActiveOutlineColor = exports.darkInputActiveOutlineColorName = exports.darkInputActiveBgColor = exports.darkInputActiveBgColorName = exports.darkInputOutlineColor = exports.darkInputOutlineColorName = exports.darkInputBgColor = exports.darkInputBgColorName = exports.defaultInputPlaceholderColor = exports.defaultInputPlaceholderColorName = exports.defaultInputValueColor = exports.defaultInputValueColorName = exports.defaultInputActiveOutlineColor = exports.defaultInputActiveOutlineColorName = exports.defaultInputActiveBgColor = exports.defaultInputActiveBgColorName = exports.defaultInputOutlineColor = exports.defaultInputOutlineColorName = exports.defaultInputBgColor = exports.defaultInputBgColorName = exports.inputMenuOffsetTop = exports.inputMenuLayer = exports.inputMenuBorderRadius = exports.inputMenuBorderColor = exports.inputMenuDefaultBackground = exports.inputBorderWidth = exports.inputFontSizeKeyMap = exports.inputSizeMap = void 0;

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
var inputBorderWidth = '1px';
exports.inputBorderWidth = inputBorderWidth;
var inputMenuDefaultBackground = 'white';
exports.inputMenuDefaultBackground = inputMenuDefaultBackground;
var inputMenuBorderColor = '';
exports.inputMenuBorderColor = inputMenuBorderColor;
var inputMenuBorderRadius = 'xs';
exports.inputMenuBorderRadius = inputMenuBorderRadius;
var inputMenuLayer = 2;
exports.inputMenuLayer = inputMenuLayer;
var inputMenuOffsetTop = '';
exports.inputMenuOffsetTop = inputMenuOffsetTop;
var defaultInputBgColorName = 'white';
exports.defaultInputBgColorName = defaultInputBgColorName;
var defaultInputBgColor = _colors.colorMap[defaultInputBgColorName];
exports.defaultInputBgColor = defaultInputBgColor;
var defaultInputOutlineColorName = 'grey-light';
exports.defaultInputOutlineColorName = defaultInputOutlineColorName;
var defaultInputOutlineColor = _colors.colorMap[defaultInputOutlineColorName];
exports.defaultInputOutlineColor = defaultInputOutlineColor;
var defaultInputActiveBgColorName = 'white';
exports.defaultInputActiveBgColorName = defaultInputActiveBgColorName;
var defaultInputActiveBgColor = _colors.colorMap[defaultInputActiveBgColorName];
exports.defaultInputActiveBgColor = defaultInputActiveBgColor;
var defaultInputActiveOutlineColorName = 'secondary-light';
exports.defaultInputActiveOutlineColorName = defaultInputActiveOutlineColorName;
var defaultInputActiveOutlineColor = _colors.colorMap[defaultInputActiveOutlineColorName];
exports.defaultInputActiveOutlineColor = defaultInputActiveOutlineColor;
var defaultInputValueColorName = 'grey-dark';
exports.defaultInputValueColorName = defaultInputValueColorName;
var defaultInputValueColor = _colors.colorMap[defaultInputValueColorName];
exports.defaultInputValueColor = defaultInputValueColor;
var defaultInputPlaceholderColorName = 'grey-light';
exports.defaultInputPlaceholderColorName = defaultInputPlaceholderColorName;
var defaultInputPlaceholderColor = _colors.colorMap[defaultInputPlaceholderColorName];
exports.defaultInputPlaceholderColor = defaultInputPlaceholderColor;
var darkInputBgColorName = 'transparent';
exports.darkInputBgColorName = darkInputBgColorName;
var darkInputBgColor = _colors.colorMap[darkInputBgColorName];
exports.darkInputBgColor = darkInputBgColor;
var darkInputOutlineColorName = 'white-light';
exports.darkInputOutlineColorName = darkInputOutlineColorName;
var darkInputOutlineColor = _colors.colorMap[darkInputOutlineColorName];
exports.darkInputOutlineColor = darkInputOutlineColor;
var darkInputActiveBgColorName = 'transparent';
exports.darkInputActiveBgColorName = darkInputActiveBgColorName;
var darkInputActiveBgColor = _colors.colorMap[darkInputActiveBgColorName];
exports.darkInputActiveBgColor = darkInputActiveBgColor;
var darkInputActiveOutlineColorName = 'white';
exports.darkInputActiveOutlineColorName = darkInputActiveOutlineColorName;
var darkInputActiveOutlineColor = _colors.colorMap[darkInputActiveOutlineColorName];
exports.darkInputActiveOutlineColor = darkInputActiveOutlineColor;
var darkInputValueColorName = 'white';
exports.darkInputValueColorName = darkInputValueColorName;
var darkInputValueColor = _colors.colorMap[darkInputValueColorName];
exports.darkInputValueColor = darkInputValueColor;
var darkInputPlaceholderColorName = 'white-lighter';
exports.darkInputPlaceholderColorName = darkInputPlaceholderColorName;
var darkInputPlaceholderColor = _colors.colorMap[darkInputPlaceholderColorName];
exports.darkInputPlaceholderColor = darkInputPlaceholderColor;
var inlineInputBgColorName = 'grey-lightest';
exports.inlineInputBgColorName = inlineInputBgColorName;
var inlineInputBgColor = _colors.colorMap[inlineInputBgColorName];
exports.inlineInputBgColor = inlineInputBgColor;
var inlineInputActiveBgColorName = 'grey-lightest';
exports.inlineInputActiveBgColorName = inlineInputActiveBgColorName;
var inlineInputActiveBgColor = _colors.colorMap[inlineInputActiveBgColorName];
exports.inlineInputActiveBgColor = inlineInputActiveBgColor;
var inlineInputActiveOutlineColorName = 'secondary-light';
exports.inlineInputActiveOutlineColorName = inlineInputActiveOutlineColorName;
var inlineInputActiveOutlineColor = _colors.colorMap[inlineInputActiveOutlineColorName];
exports.inlineInputActiveOutlineColor = inlineInputActiveOutlineColor;
var inlineInputValueColorName = 'grey-dark';
exports.inlineInputValueColorName = inlineInputValueColorName;
var inlineInputValueColor = _colors.colorMap[inlineInputValueColorName];
exports.inlineInputValueColor = inlineInputValueColor;
var inlineInputPlaceholderColorName = 'grey-light';
exports.inlineInputPlaceholderColorName = inlineInputPlaceholderColorName;
var inlineInputPlaceholderColor = _colors.colorMap[inlineInputPlaceholderColorName];
exports.inlineInputPlaceholderColor = inlineInputPlaceholderColor;
var errorInputColorName = 'red';
exports.errorInputColorName = errorInputColorName;
var errorInputColor = _colors.colorMap[errorInputColorName];
exports.errorInputColor = errorInputColor;
var focusInputColorName = 'secondary-light';
exports.focusInputColorName = focusInputColorName;
var focusInputColor = _colors.colorMap[focusInputColorName];
exports.focusInputColor = focusInputColor;