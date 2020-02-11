"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFirstValidDayBeforeIndex;

function getFirstValidDayBeforeIndex(selectedDays, index) {
  var day;

  for (var i = index - 1; i >= 0; i -= 1) {
    if (selectedDays[i]) {
      day = selectedDays[i];
      break;
    }
  }

  return day;
}