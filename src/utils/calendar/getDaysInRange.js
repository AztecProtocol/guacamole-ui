import {
  dayDiff,
} from 'src/utils/date';

export default function getDaysInRange(startDay, endDay) {
  const days = [];
  const totalDays = 1 + dayDiff(
    endDay,
    startDay,
    {
      absolute: false,
    },
  );
  for (let i = 0; i < totalDays; i += 1) {
    days.push(startDay.clone().add(i, 'days'));
  }

  return days;
}
