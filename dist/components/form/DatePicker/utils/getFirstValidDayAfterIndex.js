"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFirstValidDayAfterIndex;

function getFirstValidDayAfterIndex(selectedDays, index) {
  var day;

  for (var i = index + 1; i < selectedDays.length; i += 1) {
    if (selectedDays[i]) {
      day = selectedDays[i];
      break;
    }
  }

  return day;
}