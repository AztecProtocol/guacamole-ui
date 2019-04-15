import difference from 'lodash/difference';
import {
  addStatus,
  deleteStatus,
} from 'utils/calendar/statusModifier';

export default function applyModifiersToVisibleDays(
  prevDaysStatus,
  visibleDays,
  modifiers,
  shouldToggle = true
) {
  let daysStatus = prevDaysStatus;
  const modifierNames = Object.keys(modifiers);
  if (!modifierNames.length) {
    return daysStatus;
  }

  visibleDays.forEach(({
    month,
    days,
  }) => {
    days.forEach((day) => {
      const status = modifierNames.filter(name => modifiers[name](day));
      if (status.length) {
        daysStatus = addStatus(daysStatus, day, new Set(status), month);
      }
      if (shouldToggle && status.length < modifierNames.length) {
        const excludedStatus = difference(modifierNames, status);
        daysStatus = deleteStatus(daysStatus, day, new Set(excludedStatus), month);
      }
    });
  });

  return daysStatus;
}
