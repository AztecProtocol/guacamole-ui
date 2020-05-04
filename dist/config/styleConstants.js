"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specialTextColorNames = exports.fontWeightKeys = exports.defaultFontSizeKey = exports.fontSizeKeys = exports.iconRotateDegrees = exports.shapeSizeKeys = exports.imageRatioNames = exports.shadowLayerKeys = exports.defaultRoundedCornerKey = exports.roundedCornerKeys = exports.maxGridColumns = exports.defaultSize = exports.sizeKeys = exports.defaultDeviceBreakpointKey = exports.deviceBreakpointKeys = exports.inputStatusNames = exports.inputThemeNames = exports.inputSizeKeys = exports.defaultInputSizeKey = exports.overlayThemeNames = exports.textColorNames = exports.backgroundNames = exports.colorNames = exports.buttonSizeKeys = void 0;

var _buttons = require("./buttons");

var _colors = require("./colors");

var _inputs = require("./inputs");

var _layout = require("./layout");

var _shapes = require("./shapes");

var _typography = require("./typography");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// buttons
var buttonSizeKeys = Object.keys(_buttons.buttonSizeMap); // colors

exports.buttonSizeKeys = buttonSizeKeys;
var colorNames = Object.keys(_colors.colorMap);
exports.colorNames = colorNames;
var backgroundNames = colorNames;
exports.backgroundNames = backgroundNames;
var textColorNames = [].concat(_toConsumableArray(colorNames), ['default', 'label']);
exports.textColorNames = textColorNames;
var overlayThemeNames = Object.keys(_colors.overlayThemeBgMap); // inputs

exports.overlayThemeNames = overlayThemeNames;
var defaultInputSizeKey = 'm';
exports.defaultInputSizeKey = defaultInputSizeKey;
var inputSizeKeys = Object.keys(_inputs.inputSizeMap);
exports.inputSizeKeys = inputSizeKeys;
var inputThemeNames = ['default', 'inline', 'dark'];
exports.inputThemeNames = inputThemeNames;
var inputStatusNames = ['error', 'focus']; // layout

exports.inputStatusNames = inputStatusNames;
var deviceBreakpointKeys = Object.keys(_layout.deviceBreakpointMap);
exports.deviceBreakpointKeys = deviceBreakpointKeys;
var defaultDeviceBreakpointKey = 'xxs';
exports.defaultDeviceBreakpointKey = defaultDeviceBreakpointKey;
var sizeKeys = Object.keys(_layout.spacingMap);
exports.sizeKeys = sizeKeys;
var defaultSize = '8px';
exports.defaultSize = defaultSize;
var maxGridColumns = 12; // shapes

exports.maxGridColumns = maxGridColumns;
var roundedCornerKeys = Object.keys(_shapes.roundedCornerMap);
exports.roundedCornerKeys = roundedCornerKeys;
var defaultRoundedCornerKey = 'xs';
exports.defaultRoundedCornerKey = defaultRoundedCornerKey;
var shadowLayerKeys = [0, 1, 2, 3];
exports.shadowLayerKeys = shadowLayerKeys;
var imageRatioNames = ['square', // 1 * 1
'classic', // 3 * 2
'golden', // 16.18 * 10
'landscape', // 16 * 9
'ultra' // 2.76 * 1
];
exports.imageRatioNames = imageRatioNames;
var shapeSizeKeys = sizeKeys; // icons

exports.shapeSizeKeys = shapeSizeKeys;
var iconRotateDegrees = [0, 90, 180, 270]; // typography

exports.iconRotateDegrees = iconRotateDegrees;
var fontSizeKeys = Object.keys(_typography.fontSizeMap);
exports.fontSizeKeys = fontSizeKeys;
var defaultFontSizeKey = 'xs';
exports.defaultFontSizeKey = defaultFontSizeKey;
var fontWeightKeys = ['inherit'].concat(_toConsumableArray(Object.keys(_typography.fontWeightMap)));
exports.fontWeightKeys = fontWeightKeys;
var specialTextColorNames = ['default', 'label'];
exports.specialTextColorNames = specialTextColorNames;