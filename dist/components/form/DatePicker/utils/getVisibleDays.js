"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVisibleDays;

var _date = require("../../../../utils/date");

function getVisibleDays(currentMonth, numberOfMonths, showOutsideDays) {
  var months = [];

  for (var i = 0; i < numberOfMonths; i += 1) {
    months.push(currentMonth.clone().add(i, 'months'));
  }

  return months.map(function (month) {
    var days = [];
    var startOfMonth = month.clone().startOf('month');
    var endOfMonth = month.clone().endOf('month');

    if (showOutsideDays) {
      startOfMonth.startOf('week');
      endOfMonth.endOf('week');
    }

    var daysInMonth = (0, _date.dayDiff)(endOfMonth, startOfMonth) + 1;

    for (var _i = 0; _i < daysInMonth; _i += 1) {
      days.push(startOfMonth.clone().add(_i, 'days'));
    }

    return {
      month: month,
      days: days
    };
  });
}