"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDaysInRange;

var _date = require("../date");

function getDaysInRange(startDay, endDay) {
  var days = [];
  var totalDays = 1 + (0, _date.dayDiff)(endDay, startDay, {
    absolute: false
  });

  for (var i = 0; i < totalDays; i += 1) {
    days.push(startDay.clone().add(i, 'days'));
  }

  return days;
}