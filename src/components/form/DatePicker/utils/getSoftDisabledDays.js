import getFirstValidDayBeforeIndex from './getFirstValidDayBeforeIndex';

export default function getSoftDisabledDays(selectedDays, currentDayIndex, minNights) {
  const days = [];
  if (minNights > 0) {
    const prevDay = getFirstValidDayBeforeIndex(selectedDays, currentDayIndex);
    if (prevDay) {
      for (let i = 0; i < minNights; i += 1) {
        days.push(prevDay.clone().add(i, 'days'));
      }
    }
  }

  return days;
}
