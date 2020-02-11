"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = allowNavigation;

var _date = require("../../../../utils/date");

function allowNavigation(currentMonth, numberOfMonths, minMonth, maxMonth) {
  if (!minMonth || !maxMonth) {
    return true;
  }

  var diff = (0, _date.monthDiff)(maxMonth, minMonth);
  return diff + 1 > numberOfMonths || currentMonth.isAfter(minMonth, 'month') || currentMonth.clone().add(numberOfMonths - 1, 'months').isBefore(maxMonth, 'month'); // eslint-disable-line newline-per-chained-call
}