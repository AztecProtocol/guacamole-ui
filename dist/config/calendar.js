"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendarOutsideColor = exports.calendarOutsideColorName = exports.calendarInRangeBg = exports.calendarInRangeBgName = exports.calendarSelectedBg = exports.calendarSelectedBgName = exports.calendarSelectedColor = exports.calendarSelectedColorName = exports.calendarHoveredBg = exports.calendarHoveredBgName = exports.calendarHoveredColor = exports.calendarHoveredColorName = exports.calendarDayFontSizeKey = exports.calendarDayHeight = exports.calendarDayWidth = exports.calendarWeekColor = exports.calendarWeekColorName = exports.calendarWeekFontSizeKey = exports.calendarMonthFontSizeKey = exports.calendarMonthPaddingSizeKey = exports.calendarMonthWidth = exports.calendarBg = exports.calendarBgName = void 0;

var _styleConstants = require("./styleConstants");

var _colors = require("./colors");

/*
 * Commented attributes will use inhirited values
 */
var baseSpacing = parseInt(_styleConstants.defaultSize, 10);
var calendarDaySize = baseSpacing * 5 + 1;
var calendarBgName = 'white';
exports.calendarBgName = calendarBgName;
var calendarBg = _colors.colorMap[calendarBgName];
exports.calendarBg = calendarBg;
var calendarMonthWidth = "".concat(calendarDaySize * 7 + baseSpacing * 4, "px");
exports.calendarMonthWidth = calendarMonthWidth;
var calendarMonthPaddingSizeKey = 'l';
exports.calendarMonthPaddingSizeKey = calendarMonthPaddingSizeKey;
var calendarMonthFontSizeKey = 'm'; // calendarMonthFontWeight
// calendarMonthColor
// calendarMonthBg

exports.calendarMonthFontSizeKey = calendarMonthFontSizeKey;
var calendarWeekFontSizeKey = 'xs'; // calendarWeekFontWeight

exports.calendarWeekFontSizeKey = calendarWeekFontSizeKey;
var calendarWeekColorName = _colors.defaultLabelColorName;
exports.calendarWeekColorName = calendarWeekColorName;
var calendarWeekColor = _colors.colorMap[calendarWeekColorName]; // calendarWeekBg

exports.calendarWeekColor = calendarWeekColor;
var calendarDayWidth = "".concat(calendarDaySize, "px");
exports.calendarDayWidth = calendarDayWidth;
var calendarDayHeight = "".concat(calendarDaySize, "px");
exports.calendarDayHeight = calendarDayHeight;
var calendarDayFontSizeKey = 's'; // calendarDayFontWeight
// calendarDayColor
// calendarHoveredFontWeight

exports.calendarDayFontSizeKey = calendarDayFontSizeKey;
var calendarHoveredColorName = _colors.defaultTextColorName;
exports.calendarHoveredColorName = calendarHoveredColorName;
var calendarHoveredColor = _colors.colorMap[_colors.defaultTextColorName];
exports.calendarHoveredColor = calendarHoveredColor;
var calendarHoveredBgName = 'secondary-lightest';
exports.calendarHoveredBgName = calendarHoveredBgName;
var calendarHoveredBg = _colors.colorMap[calendarHoveredBgName]; // calendarSelectedFontWeight

exports.calendarHoveredBg = calendarHoveredBg;
var calendarSelectedColorName = 'white';
exports.calendarSelectedColorName = calendarSelectedColorName;
var calendarSelectedColor = _colors.colorMap[calendarSelectedColorName];
exports.calendarSelectedColor = calendarSelectedColor;
var calendarSelectedBgName = 'secondary';
exports.calendarSelectedBgName = calendarSelectedBgName;
var calendarSelectedBg = _colors.colorMap.secondary; // calendarInRangeFontWeight
// calendarInRangeColor

exports.calendarSelectedBg = calendarSelectedBg;
var calendarInRangeBgName = 'secondary-lightest';
exports.calendarInRangeBgName = calendarInRangeBgName;
var calendarInRangeBg = _colors.colorMap[calendarInRangeBgName]; // calendarOutsideFontWeight

exports.calendarInRangeBg = calendarInRangeBg;
var calendarOutsideColorName = _colors.defaultLabelColorName;
exports.calendarOutsideColorName = calendarOutsideColorName;
var calendarOutsideColor = _colors.colorMap[calendarOutsideColorName]; // calendarOutsideBg

exports.calendarOutsideColor = calendarOutsideColor;