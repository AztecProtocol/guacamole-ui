"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addSelectedStatus;

var _statusModifier = require("../../../../utils/calendar/statusModifier");

function addSelectedStatus(prevDaysStatus, selectedDays) {
  var daysStatus = prevDaysStatus;
  var prevDay;
  selectedDays.filter(function (day) {
    return day;
  }).forEach(function (day) {
    daysStatus = (0, _statusModifier.addStatus)(daysStatus, day, 'isSelected');

    if (prevDay) {
      daysStatus = (0, _statusModifier.addStatusInRange)(daysStatus, prevDay.clone().add(1, 'day'), day.clone().subtract(1, 'day'), 'isInRange');
    }

    prevDay = day;
  });
  return daysStatus;
}