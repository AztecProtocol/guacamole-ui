export default function getVisibleDaysOfMonth({
  month,
  startOfWeek,
}) {
  const startOfMonth = month.clone().startOf('month');
  const firstWeekday = startOfMonth.day();
  const daysFromLastMonth = (firstWeekday + 7 - startOfWeek) % 7;
  const startOfCalendar = startOfMonth.clone().subtract(daysFromLastMonth, 'days');
  const endOfMonth = month.clone().endOf('month');
  let totalDays = endOfMonth.diff(startOfCalendar, 'days') + 1;
  totalDays = Math.ceil(totalDays / 7) * 7;

  const days = [];
  for (let i = 0; i < totalDays; i += 1) {
    days.push(startOfCalendar.clone().add(i, 'days'));
  }

  return days;
}
