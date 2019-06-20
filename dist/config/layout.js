"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSpacingKeyMap = exports.pageSpacingKeyMap = exports.spacingMap = exports.minDeviceWidthXxs = exports.minDeviceWidthXs = exports.minDeviceWidthS = exports.minDeviceWidthM = exports.minDeviceWidthL = exports.minDeviceWidthXl = exports.minDeviceWidthXxl = exports.deviceBreakpointMap = void 0;
var deviceBreakpointMap = {
  xxl: '2000px',
  xl: '1690px',
  l: '1248px',
  m: '960px',
  s: '768px',
  xs: '480px',
  xxs: '0'
};
exports.deviceBreakpointMap = deviceBreakpointMap;
var minDeviceWidthXxl = deviceBreakpointMap.xxl;
exports.minDeviceWidthXxl = minDeviceWidthXxl;
var minDeviceWidthXl = deviceBreakpointMap.xl;
exports.minDeviceWidthXl = minDeviceWidthXl;
var minDeviceWidthL = deviceBreakpointMap.l;
exports.minDeviceWidthL = minDeviceWidthL;
var minDeviceWidthM = deviceBreakpointMap.m;
exports.minDeviceWidthM = minDeviceWidthM;
var minDeviceWidthS = deviceBreakpointMap.s;
exports.minDeviceWidthS = minDeviceWidthS;
var minDeviceWidthXs = deviceBreakpointMap.xs;
exports.minDeviceWidthXs = minDeviceWidthXs;
var minDeviceWidthXxs = deviceBreakpointMap.xxs;
exports.minDeviceWidthXxs = minDeviceWidthXxs;
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
var pageSpacingKeyMap = {
  xxl: 'xxl',
  xl: 'xl',
  l: 'l',
  m: 'l',
  s: 'l',
  xs: 'l',
  xxs: 'l'
};
exports.pageSpacingKeyMap = pageSpacingKeyMap;
var defaultSpacingKeyMap = {
  xxl: 'xl',
  xl: 'xl',
  l: 'l',
  m: 'l',
  s: 'l',
  xs: 'm',
  xxs: 'm'
};
exports.defaultSpacingKeyMap = defaultSpacingKeyMap;