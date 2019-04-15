"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSpacingKeyXs = exports.defaultSpacingKeyS = exports.defaultSpacingKeyM = exports.defaultSpacingKeyL = exports.defaultSpacingKeyXl = exports.defaultPageSpacingKeyXs = exports.defaultPageSpacingKeyS = exports.defaultPageSpacingKeyM = exports.defaultPageSpacingKeyL = exports.defaultPageSpacingKeyXl = exports.defaultPageSpacings = exports.sizeKeys = exports.spacingMap = exports.maxGridColumns = exports.maxDeviceWidthXs = exports.maxDeviceWidthS = exports.maxDeviceWidthM = exports.maxDeviceWidthL = exports.deviceBreakpoints = exports.deviceBreakpointMap = exports.defaultSize = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultSize = '8px';
exports.defaultSize = defaultSize;
var deviceBreakpointMap = {
  l: '2000px',
  m: '1248px',
  s: '960px',
  xs: '767px'
};
exports.deviceBreakpointMap = deviceBreakpointMap;
var deviceBreakpoints = Object.keys(deviceBreakpointMap);
exports.deviceBreakpoints = deviceBreakpoints;
var maxDeviceWidthL = deviceBreakpointMap.l;
exports.maxDeviceWidthL = maxDeviceWidthL;
var maxDeviceWidthM = deviceBreakpointMap.m;
exports.maxDeviceWidthM = maxDeviceWidthM;
var maxDeviceWidthS = deviceBreakpointMap.s;
exports.maxDeviceWidthS = maxDeviceWidthS;
var maxDeviceWidthXs = deviceBreakpointMap.xs;
exports.maxDeviceWidthXs = maxDeviceWidthXs;
var maxGridColumns = 12;
exports.maxGridColumns = maxGridColumns;
var spacingMap = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '24px',
  xxl: '36px'
};
exports.spacingMap = spacingMap;
var sizeKeys = ['0'].concat(_toConsumableArray(Object.keys(spacingMap)));
exports.sizeKeys = sizeKeys;
var defaultPageSpacings = {
  xl: 'xl',
  l: 'l',
  m: 'l',
  s: 'l',
  xs: 'l'
};
exports.defaultPageSpacings = defaultPageSpacings;
var defaultPageSpacingKeyXl = defaultPageSpacings.xl;
exports.defaultPageSpacingKeyXl = defaultPageSpacingKeyXl;
var defaultPageSpacingKeyL = defaultPageSpacings.l;
exports.defaultPageSpacingKeyL = defaultPageSpacingKeyL;
var defaultPageSpacingKeyM = defaultPageSpacings.m;
exports.defaultPageSpacingKeyM = defaultPageSpacingKeyM;
var defaultPageSpacingKeyS = defaultPageSpacings.s;
exports.defaultPageSpacingKeyS = defaultPageSpacingKeyS;
var defaultPageSpacingKeyXs = defaultPageSpacings.xs;
exports.defaultPageSpacingKeyXs = defaultPageSpacingKeyXs;
var defaultSpacingKeyXl = 'xl';
exports.defaultSpacingKeyXl = defaultSpacingKeyXl;
var defaultSpacingKeyL = 'xl';
exports.defaultSpacingKeyL = defaultSpacingKeyL;
var defaultSpacingKeyM = 'l';
exports.defaultSpacingKeyM = defaultSpacingKeyM;
var defaultSpacingKeyS = 'l';
exports.defaultSpacingKeyS = defaultSpacingKeyS;
var defaultSpacingKeyXs = 'm';
exports.defaultSpacingKeyXs = defaultSpacingKeyXs;