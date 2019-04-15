"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = optimizePivotMonth;

function optimizePivotMonth(pivotMonth, numberOfMonths, minMonth, maxMonth) {
  var newPivotMonth = pivotMonth;
  var diff = maxMonth ? maxMonth.diff(pivotMonth, 'months') + 1 : numberOfMonths;

  if (diff > 0 && diff < numberOfMonths) {
    newPivotMonth = pivotMonth.clone().subtract(numberOfMonths - diff);

    if (minMonth && newPivotMonth.isBefore(minMonth, 'month')) {
      newPivotMonth = minMonth;
    }
  }

  return newPivotMonth;
}