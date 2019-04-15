export default function getCurrentSelectedRange(selectedDays) {
  let endDay;
  for (let i = selectedDays.length - 1; i >= 0; i -= 1) {
    if (selectedDays[i]) {
      endDay = selectedDays[i];
      break;
    }
  }

  return {
    startDay: selectedDays.find(day => day),
    endDay,
  };
}
