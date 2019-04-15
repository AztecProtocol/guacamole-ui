export default function getFirstValidDayAfterIndex(selectedDays, index) {
  let day;
  for (let i = index + 1; i < selectedDays.length; i += 1) {
    if (selectedDays[i]) {
      day = selectedDays[i];
      break;
    }
  }

  return day;
}
