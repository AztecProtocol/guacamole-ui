"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTextColorMap = exports.overlayThemeNames = exports.svgProgressThemeBgMap = exports.overlayThemeBgMap = exports.defaultLinkColor = exports.defaultLinkColorKey = exports.defaultLabelColor = exports.defaultLabelColorKey = exports.defaultTextColor = exports.defaultTextColorKey = exports.defaultHoverBackgroundColor = exports.defaultBorderColor = exports.defaultBorderColorKey = exports.defaultShadowColor = exports.textColorNames = exports.backgroundNames = exports.colorNames = exports.darkBackgroundColors = exports.colorMap = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var colorMap = {
  primary: 'rgb(18,38,63)',
  'primary-light': 'rgba(18,38,63, 0.8)',
  'primary-lighter': 'rgba(18,38,63, 0.5)',
  'primary-lightest': 'rgba(18,38,63, 0.1)',
  black: '#000000',
  'grey-darker': 'rgba(0, 0, 0, 0.85)',
  'grey-dark': 'rgba(0, 0, 0, 0.7)',
  grey: 'rgba(0, 0, 0, 0.45)',
  'grey-light': 'rgba(0, 0, 0, 0.2)',
  'grey-lighter': 'rgba(0, 0, 0, 0.1)',
  'grey-lightest': '#F9fbfd',
  white: '#FFFFFF',
  'white-light': 'rgba(255, 255, 255, 0.85)',
  'white-lighter': 'rgba(255, 255, 255, 0.5)',
  'white-lightest': 'rgba(255, 255, 255, 0.1)',
  secondary: 'rgb(74,144,226)',
  'secondary-light': 'rgba(74, 144, 226, 0.7)',
  'secondary-lighter': 'rgba(74,144,226, 0.3)',
  'secondary-lightest': 'rgba(74,144,226, 0.1)',
  red: '#F23A5B',
  green: '#1BD1A6',
  blue: '#1766F0',
  yellow: '#fff5cc'
};
exports.colorMap = colorMap;
var darkBackgroundColors = ['primary', 'primary-light', 'primary-lighter', 'secondary', 'secondary-light', 'black', 'grey-darker', 'grey-dark', 'grey', 'red', 'blue', 'green', 'white-lightest'];
exports.darkBackgroundColors = darkBackgroundColors;
var colorNames = Object.keys(colorMap);
exports.colorNames = colorNames;
var backgroundNames = colorNames;
exports.backgroundNames = backgroundNames;
var textColorNames = [].concat(_toConsumableArray(colorNames), ['default', 'label']);
exports.textColorNames = textColorNames;
var defaultShadowColor = colorMap['grey-lighter'];
exports.defaultShadowColor = defaultShadowColor;
var defaultBorderColorKey = 'grey-lighter';
exports.defaultBorderColorKey = defaultBorderColorKey;
var defaultBorderColor = colorMap[defaultBorderColorKey];
exports.defaultBorderColor = defaultBorderColor;
var defaultHoverBackgroundColor = colorMap['grey-lightest'];
exports.defaultHoverBackgroundColor = defaultHoverBackgroundColor;
var defaultTextColorKey = 'grey-darker';
exports.defaultTextColorKey = defaultTextColorKey;
var defaultTextColor = colorMap[defaultTextColorKey];
exports.defaultTextColor = defaultTextColor;
var defaultLabelColorKey = 'grey';
exports.defaultLabelColorKey = defaultLabelColorKey;
var defaultLabelColor = colorMap[defaultLabelColorKey];
exports.defaultLabelColor = defaultLabelColor;
var defaultLinkColorKey = 'secondary';
exports.defaultLinkColorKey = defaultLinkColorKey;
var defaultLinkColor = colorMap[defaultLinkColorKey];
exports.defaultLinkColor = defaultLinkColor;
var overlayThemeBgMap = {
  primary: 'primary-lightest',
  secondary: 'secondary-lightest',
  white: 'white-lighter'
};
exports.overlayThemeBgMap = overlayThemeBgMap;
var svgProgressThemeBgMap = {
  primary: 'primary-lightest',
  secondary: 'secondary-lightest',
  white: 'white-lighter'
};
exports.svgProgressThemeBgMap = svgProgressThemeBgMap;
var overlayThemeNames = Object.keys(overlayThemeBgMap);
exports.overlayThemeNames = overlayThemeNames;
var defaultTextColorMap = {
  default: defaultTextColor,
  label: defaultLabelColor
};
exports.defaultTextColorMap = defaultTextColorMap;