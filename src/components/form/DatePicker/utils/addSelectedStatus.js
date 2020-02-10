import {
  addStatus,
  addStatusInRange,
} from 'utils/calendar/statusModifier';

export default function addSelectedStatus(prevDaysStatus, selectedDays) {
  let daysStatus = prevDaysStatus;
  let prevDay;

  selectedDays
    .filter((day) => day)
    .forEach((day) => {
      daysStatus = addStatus(daysStatus, day, 'isSelected');

      if (prevDay) {
        daysStatus = addStatusInRange(
          daysStatus,
          prevDay.clone().add(1, 'day'),
          day.clone().subtract(1, 'day'),
          'isInRange',
        );
      }

      prevDay = day;
    });

  return daysStatus;
}
