import toMonthKey from './toMonthKey';
import toDayKey from './toDayKey';
import getDaysInRange from './getDaysInRange';

const containStatus = (day, status) => {
  if (typeof status === 'string') {
    return day.has(status);
  }

  return Object.keys(status).every((s) => day.has(s));
};

const addStatusToDay = (day, status) => {
  const modifiedDay = new Set(day);
  if (typeof status === 'string') {
    modifiedDay.add(status);
  } else {
    status.forEach((s) => modifiedDay.add(s));
  }

  return modifiedDay;
};

const removeStatusFromDay = (day, status) => {
  if (typeof status === 'string') {
    const modifiedDay = new Set(day);
    modifiedDay.delete(status);

    return modifiedDay;
  }

  const modifiedDay = new Set();
  Object.keys(day).forEach((s) => {
    if (!status.has(s)) {
      modifiedDay.add(s);
    }
  });

  return modifiedDay;
};

const getDayStatus = (daysStatus, day, outsideMonth = null) => {
  const monthKey = toMonthKey(outsideMonth || day);
  const dayKey = toDayKey(day);
  const monthStatus = daysStatus[monthKey] || {};
  return monthStatus[dayKey];
};

export const addStatus = (daysStatus, day, status, outsideMonth = null) => {
  const monthKey = toMonthKey(outsideMonth || day);
  const dayKey = toDayKey(day);
  const monthStatus = daysStatus[monthKey] || {};
  const dayStatus = monthStatus[dayKey];
  if (dayStatus && containStatus(dayStatus, status)) {
    return daysStatus;
  }
  const modifiedDay = addStatusToDay(dayStatus, status);

  return {
    ...daysStatus,
    [monthKey]: {
      ...monthStatus,
      [dayKey]: modifiedDay,
    },
  };
};

export const addStatusInRange = (daysStatus, from, to, status) => {
  const days = getDaysInRange(from, to);
  let newDaysStatus = daysStatus;
  days.forEach((day) => {
    newDaysStatus = addStatus(newDaysStatus, day, status);
  });

  return newDaysStatus;
};

export const deleteStatus = (daysStatus, day, status, outsideMonth = null) => {
  const monthKey = toMonthKey(outsideMonth || day);
  const dayKey = toDayKey(day);
  const monthStatus = daysStatus[monthKey] || {};
  const dayStatus = monthStatus[dayKey];
  if (!dayStatus || !containStatus(dayStatus, status)) {
    return daysStatus;
  }
  const modifiedDay = removeStatusFromDay(dayStatus, status);

  return {
    ...daysStatus,
    [monthKey]: {
      ...monthStatus,
      [dayKey]: modifiedDay,
    },
  };
};

export const deleteStatusInRange = (daysStatus, from, to, status) => {
  const days = getDaysInRange(from, to);
  let newDaysStatus = daysStatus;
  days.forEach((day) => {
    newDaysStatus = deleteStatus(newDaysStatus, day, status);
  });

  return newDaysStatus;
};

export const hasStatus = (daysStatus, day, status, outsideMonth = null) => {
  const dayStatus = getDayStatus(daysStatus, day, outsideMonth);
  return dayStatus && dayStatus.has(status);
};

export const hasSomeStatus = (daysStatus, day, statusList, outsideMonth = null) => {
  const dayStatus = getDayStatus(daysStatus, day, outsideMonth);
  return dayStatus && statusList.some((status) => dayStatus.has(status));
};
