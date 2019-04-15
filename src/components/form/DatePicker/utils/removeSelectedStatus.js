import {
  deleteStatus,
  deleteStatusInRange,
} from 'utils/calendar/statusModifier';
import getCurrentSelectedRange from './getCurrentSelectedRange';

export default function removeSelectedStatus(prevDaysStatus, selectedDays) {
  let daysStatus = prevDaysStatus;

  selectedDays
    .filter(day => day)
    .forEach((day) => {
      daysStatus = deleteStatus(daysStatus, day, 'isSelected');
    });

  if (selectedDays.length > 1) {
    const {
      startDay,
      endDay,
    } = getCurrentSelectedRange(selectedDays);
    if (startDay && endDay && startDay !== endDay) {
      daysStatus = deleteStatusInRange(daysStatus, startDay, endDay, 'isInRange');
    }
  }

  return daysStatus;
}
