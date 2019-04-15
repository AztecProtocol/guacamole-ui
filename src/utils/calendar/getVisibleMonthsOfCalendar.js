export default function getVisibleMonthsOfCalendar({
  firstVisibleMonth,
  numberOfMonths,
}) {
  const months = [];
  for (let i = 0; i < numberOfMonths; i += 1) {
    months.push(firstVisibleMonth.clone().add(i, 'month'));
  }

  return months;
}
