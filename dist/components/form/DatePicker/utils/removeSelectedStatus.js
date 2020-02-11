"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = removeSelectedStatus;

var _statusModifier = require("../../../../utils/calendar/statusModifier");

var _getCurrentSelectedRange = _interopRequireDefault(require("./getCurrentSelectedRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function removeSelectedStatus(prevDaysStatus, selectedDays) {
  var daysStatus = prevDaysStatus;
  selectedDays.filter(function (day) {
    return day;
  }).forEach(function (day) {
    daysStatus = (0, _statusModifier.deleteStatus)(daysStatus, day, 'isSelected');
  });

  if (selectedDays.length > 1) {
    var _getCurrentSelectedRa = (0, _getCurrentSelectedRange["default"])(selectedDays),
        startDay = _getCurrentSelectedRa.startDay,
        endDay = _getCurrentSelectedRa.endDay;

    if (startDay && endDay && startDay !== endDay) {
      daysStatus = (0, _statusModifier.deleteStatusInRange)(daysStatus, startDay, endDay, 'isInRange');
    }
  }

  return daysStatus;
}