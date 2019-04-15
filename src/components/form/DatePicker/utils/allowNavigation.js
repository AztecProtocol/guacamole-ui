import {
  monthDiff,
} from 'utils/date';

export default function allowNavigation(currentMonth, numberOfMonths, minMonth, maxMonth) {
  if (!minMonth || !maxMonth) {
    return true;
  }

  const diff = monthDiff(maxMonth, minMonth);

  return diff + 1 > numberOfMonths
    || currentMonth.isAfter(minMonth, 'month')
    || currentMonth.clone().add(numberOfMonths - 1, 'months').isBefore(maxMonth, 'month'); // eslint-disable-line newline-per-chained-call
}
