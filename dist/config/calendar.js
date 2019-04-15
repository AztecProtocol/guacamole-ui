"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layout = require("./layout");

var _colors = require("./colors");

/*
 * Commented attributes will use inhirited values
 */
var baseSpacing = parseInt(_layout.defaultSize, 10);
var calendarDaySize = baseSpacing * 5 + 1;
var _default = {
  calendarBg: _colors.colorMap.white,
  calendarMonthWidth: "".concat(calendarDaySize * 7 + baseSpacing * 4, "px"),
  calendarMonthPaddingSize: 'l',
  calendarMonthFontSize: 'm',
  // calendarMonthFontWeight
  // calendarMonthColor
  // calendarMonthBg
  calendarWeekFontSize: 'xs',
  // calendarWeekFontWeight
  calendarWeekColor: _colors.defaultLabelColor,
  // calendarWeekBg
  calendarDayWidth: "".concat(calendarDaySize, "px"),
  calendarDayHeight: "".concat(calendarDaySize, "px"),
  calendarDayFontSize: 's',
  // calendarDayFontWeight
  // calendarDayColor
  // calendarHoveredFontWeight
  calendarHoveredColor: _colors.defaultTextColor,
  calendarHoveredBg: _colors.colorMap['secondary-lightest'],
  // calendarSelectedFontWeight
  calendarSelectedColor: _colors.colorMap.white,
  calendarSelectedBg: _colors.colorMap.secondary,
  // calendarInRangeFontWeight
  // calendarInRangeColor
  calendarInRangeBg: _colors.colorMap['secondary-lightest'],
  // calendarOutsideFontWeight
  calendarOutsideColor: _colors.defaultLabelColor // calendarOutsideBg

};
exports.default = _default;