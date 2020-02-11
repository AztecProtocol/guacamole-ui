"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSoftDisabledDays;

var _getFirstValidDayBeforeIndex = _interopRequireDefault(require("./getFirstValidDayBeforeIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSoftDisabledDays(selectedDays, currentDayIndex, minNights) {
  var days = [];

  if (minNights > 0) {
    var prevDay = (0, _getFirstValidDayBeforeIndex["default"])(selectedDays, currentDayIndex);

    if (prevDay) {
      for (var i = 0; i < minNights; i += 1) {
        days.push(prevDay.clone().add(i, 'days'));
      }
    }
  }

  return days;
}