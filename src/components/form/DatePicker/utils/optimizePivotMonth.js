export default function optimizePivotMonth(pivotMonth, numberOfMonths, minMonth, maxMonth) {
  let newPivotMonth = pivotMonth;
  const diff = maxMonth ? maxMonth.diff(pivotMonth, 'months') + 1 : numberOfMonths;
  if (diff > 0 && diff < numberOfMonths) {
    newPivotMonth = pivotMonth.clone().subtract(numberOfMonths - diff);
    if (minMonth && newPivotMonth.isBefore(minMonth, 'month')) {
      newPivotMonth = minMonth;
    }
  }

  return newPivotMonth;
}
