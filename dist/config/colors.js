"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loaderThemeInvertedColorMap = exports.loaderThemeColorMap = exports.svgProgressThemeBgMap = exports.overlayThemeBgMap = exports.defaultLinkColor = exports.defaultLinkColorName = exports.defaultLabelColor = exports.defaultLabelColorName = exports.defaultTextColor = exports.defaultTextColorName = exports.defaultHoverBackgroundColor = exports.defaultHoverBackgroundColorName = exports.defaultBorderColor = exports.defaultBorderColorName = exports.defaultShadowColor = exports.defaultShadowColorName = exports.darkBackgroundColors = exports.colorMap = void 0;
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
  transparent: 'rgba(255, 255, 255, 0)',
  secondary: 'rgb(74,144,226)',
  'secondary-light': 'rgba(74, 144, 226, 0.7)',
  'secondary-lighter': 'rgba(74,144,226, 0.3)',
  'secondary-lightest': 'rgba(74,144,226, 0.1)',
  pink: '#F7B2D1',
  red: '#F23A5B',
  purple: '#49098A',
  blue: '#2772CE',
  green: '#41BA00',
  yellow: '#FACB00',
  orange: '#E57300',
  brown: '#49311A'
};
exports.colorMap = colorMap;
var darkBackgroundColors = ['primary', 'primary-light', 'primary-lighter', 'secondary', 'secondary-light', 'black', 'grey-darker', 'grey-dark', 'grey', 'red', 'purple', 'blue', 'green', 'orange', 'brown', 'white-lightest'];
exports.darkBackgroundColors = darkBackgroundColors;
var defaultShadowColorName = 'grey-lighter';
exports.defaultShadowColorName = defaultShadowColorName;
var defaultShadowColor = colorMap[defaultShadowColorName];
exports.defaultShadowColor = defaultShadowColor;
var defaultBorderColorName = 'grey-lighter';
exports.defaultBorderColorName = defaultBorderColorName;
var defaultBorderColor = colorMap[defaultBorderColorName];
exports.defaultBorderColor = defaultBorderColor;
var defaultHoverBackgroundColorName = 'grey-lightest';
exports.defaultHoverBackgroundColorName = defaultHoverBackgroundColorName;
var defaultHoverBackgroundColor = colorMap[defaultHoverBackgroundColorName];
exports.defaultHoverBackgroundColor = defaultHoverBackgroundColor;
var defaultTextColorName = 'grey-darker';
exports.defaultTextColorName = defaultTextColorName;
var defaultTextColor = colorMap[defaultTextColorName];
exports.defaultTextColor = defaultTextColor;
var defaultLabelColorName = 'grey';
exports.defaultLabelColorName = defaultLabelColorName;
var defaultLabelColor = colorMap[defaultLabelColorName];
exports.defaultLabelColor = defaultLabelColor;
var defaultLinkColorName = 'secondary';
exports.defaultLinkColorName = defaultLinkColorName;
var defaultLinkColor = colorMap[defaultLinkColorName];
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
var loaderThemeColorMap = {
  primary: 'primary-lightest',
  secondary: 'secondary-lightest',
  white: 'white'
};
exports.loaderThemeColorMap = loaderThemeColorMap;
var loaderThemeInvertedColorMap = {
  primary: 'white',
  secondary: 'white',
  white: 'grey-lighter'
};
exports.loaderThemeInvertedColorMap = loaderThemeInvertedColorMap;