"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCurrentSelectedRange;

function getCurrentSelectedRange(selectedDays) {
  var endDay;

  for (var i = selectedDays.length - 1; i >= 0; i -= 1) {
    if (selectedDays[i]) {
      endDay = selectedDays[i];
      break;
    }
  }

  return {
    startDay: selectedDays.find(function (day) {
      return day;
    }),
    endDay: endDay
  };
}