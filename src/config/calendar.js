import {
  defaultSize,
} from './styleConstants';
import {
  colorMap,
  defaultTextColor,
  defaultLabelColor,
} from './colors';

/*
 * Commented attributes will use inhirited values
 */

const baseSpacing = parseInt(defaultSize, 10);
const calendarDaySize = baseSpacing * 5 + 1;

export default {
  calendarBg: colorMap.white,
  calendarMonthWidth: `${calendarDaySize * 7 + baseSpacing * 4}px`,
  calendarMonthPaddingSize: 'l',
  calendarMonthFontSize: 'm',
  // calendarMonthFontWeight
  // calendarMonthColor
  // calendarMonthBg
  calendarWeekFontSize: 'xs',
  // calendarWeekFontWeight
  calendarWeekColor: defaultLabelColor,
  // calendarWeekBg
  calendarDayWidth: `${calendarDaySize}px`,
  calendarDayHeight: `${calendarDaySize}px`,
  calendarDayFontSize: 's',
  // calendarDayFontWeight
  // calendarDayColor
  // calendarHoveredFontWeight
  calendarHoveredColor: defaultTextColor,
  calendarHoveredBg: colorMap['secondary-lightest'],
  // calendarSelectedFontWeight
  calendarSelectedColor: colorMap.white,
  calendarSelectedBg: colorMap.secondary,
  // calendarInRangeFontWeight
  // calendarInRangeColor
  calendarInRangeBg: colorMap['secondary-lightest'],
  // calendarOutsideFontWeight
  calendarOutsideColor: defaultLabelColor,
  // calendarOutsideBg
};
