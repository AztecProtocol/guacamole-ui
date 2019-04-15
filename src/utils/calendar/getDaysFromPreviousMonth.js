export default function getDaysFromPreviousMonth(currentMonth, startOfWeek = 0) {
  const days = [];
  const lastDayFromPrev = currentMonth
    .clone()
    .subtract(1, 'month')
    .endOf('month');
  const endOfWeek = (startOfWeek + 6) % 7;
  while (lastDayFromPrev.day() !== endOfWeek) {
    days.push(lastDayFromPrev.clone());
    lastDayFromPrev.subtract(1, 'day');
  }

  return days;
}
