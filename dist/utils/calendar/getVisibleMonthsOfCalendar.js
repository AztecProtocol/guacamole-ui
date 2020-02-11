"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getVisibleMonthsOfCalendar;

function getVisibleMonthsOfCalendar(_ref) {
  var firstVisibleMonth = _ref.firstVisibleMonth,
      numberOfMonths = _ref.numberOfMonths;
  var months = [];

  for (var i = 0; i < numberOfMonths; i += 1) {
    months.push(firstVisibleMonth.clone().add(i, 'month'));
  }

  return months;
}