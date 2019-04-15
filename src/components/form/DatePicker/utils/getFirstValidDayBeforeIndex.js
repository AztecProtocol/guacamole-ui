export default function getFirstValidDayBeforeIndex(selectedDays, index) {
  let day;
  for (let i = index - 1; i >= 0; i -= 1) {
    if (selectedDays[i]) {
      day = selectedDays[i];
      break;
    }
  }

  return day;
}
