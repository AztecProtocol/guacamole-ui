export default function getDaysFromNextMonth(currentMonth, startOfWeek = 0) {
  const days = [];
  const firstDayFromNext = currentMonth
    .clone()
    .add(1, 'month')
    .startOf('month');
  while (firstDayFromNext.day() !== startOfWeek) {
    days.push(firstDayFromNext.clone());
    firstDayFromNext.add(1, 'day');
  }

  return days;
}
