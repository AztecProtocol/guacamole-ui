import {
  dayDiff,
} from 'utils/date';

export default function getVisibleDays(currentMonth, numberOfMonths, showOutsideDays) {
  const months = [];
  for (let i = 0; i < numberOfMonths; i += 1) {
    months.push(currentMonth.clone().add(i, 'months'));
  }

  return months.map((month) => {
    const days = [];
    const startOfMonth = month.clone().startOf('month');
    const endOfMonth = month.clone().endOf('month');
    if (showOutsideDays) {
      startOfMonth.startOf('week');
      endOfMonth.endOf('week');
    }
    const daysInMonth = dayDiff(endOfMonth, startOfMonth) + 1;
    for (let i = 0; i < daysInMonth; i += 1) {
      days.push(startOfMonth.clone().add(i, 'days'));
    }

    return {
      month,
      days,
    };
  });
}
