"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDaysFromPreviousMonth;

function getDaysFromPreviousMonth(currentMonth) {
  var startOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var days = [];
  var lastDayFromPrev = currentMonth.clone().subtract(1, 'month').endOf('month');
  var endOfWeek = (startOfWeek + 6) % 7;

  while (lastDayFromPrev.day() !== endOfWeek) {
    days.push(lastDayFromPrev.clone());
    lastDayFromPrev.subtract(1, 'day');
  }

  return days;
}