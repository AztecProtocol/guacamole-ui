"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysFromNextMonth;

function getDaysFromNextMonth(currentMonth) {
  var startOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var days = [];
  var firstDayFromNext = currentMonth.clone().add(1, 'month').startOf('month');

  while (firstDayFromNext.day() !== startOfWeek) {
    days.push(firstDayFromNext.clone());
    firstDayFromNext.add(1, 'day');
  }

  return days;
}