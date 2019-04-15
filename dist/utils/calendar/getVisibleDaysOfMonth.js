"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVisibleDaysOfMonth;

function getVisibleDaysOfMonth(_ref) {
  var month = _ref.month,
      startOfWeek = _ref.startOfWeek;
  var startOfMonth = month.clone().startOf('month');
  var firstWeekday = startOfMonth.day();
  var daysFromLastMonth = (firstWeekday + 7 - startOfWeek) % 7;
  var startOfCalendar = startOfMonth.clone().subtract(daysFromLastMonth, 'days');
  var endOfMonth = month.clone().endOf('month');
  var totalDays = endOfMonth.diff(startOfCalendar, 'days') + 1;
  totalDays = Math.ceil(totalDays / 7) * 7;
  var days = [];

  for (var i = 0; i < totalDays; i += 1) {
    days.push(startOfCalendar.clone().add(i, 'days'));
  }

  return days;
}