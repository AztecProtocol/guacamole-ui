import moment from 'moment';
import {
  systemDateFormat,
  systemDateTimeFormat,
} from 'src/config/date';

export function isSameDay(day1, day2) {
  if (!moment.isMoment(day1) || !moment.isMoment(day2)) {
    return false;
  }

  if (day1 === day2) {
    return true;
  }

  return day1.date() === day2.date()
    && day1.month() === day2.month()
    && day1.year() === day2.year();
}

export function isSameMonth(month1, month2, compareYear = true) {
  if (!moment.isMoment(month1) || !moment.isMoment(month2)) {
    return false;
  }

  if (month1 === month2) {
    return true;
  }

  return month1.month() === month2.month()
    && (!compareYear || (month1.year() === month2.year()));
}

export function toMoment(date, format = systemDateFormat) {
  const day = moment(date, format);
  return day.isValid() ? day : null;
}

export function toDateString(day, format = systemDateFormat) {
  if (!day) {
    return '';
  }

  const dayMoment = typeof day === 'string' ? toMoment(day) : day;

  return dayMoment.format(format);
}

export function toDateTimeString(day, format = systemDateTimeFormat) {
  return toDateString(day, format);
}

export function toTimeString(datetime) {
  if (!datetime) {
    return '';
  }

  const dayMoment = typeof datetime === 'string'
    ? toMoment(datetime, systemDateTimeFormat)
    : datetime;

  return dayMoment.format('HH:mm');
}

export function dayDiff(
  day1,
  day2,
  {
    unit = 'days',
    absolute = true,
  } = {},
) {
  const format = unit === 'days' ? systemDateFormat : systemDateTimeFormat;
  const moment1 = typeof day1 === 'string' ? toMoment(day1, format) : day1;
  const moment2 = typeof day2 === 'string' ? toMoment(day2, format) : day2;

  const diff = moment1.diff(moment2, unit);

  if (absolute) {
    return Math.abs(diff);
  }

  return diff;
}

export function monthDiff(month1, month2, compareYear = true, absolute = true) {
  if (!month1 || !month2) {
    return 0;
  }

  let diff = month1.month() - month2.month();
  if (compareYear) {
    diff += (month1.year() - month2.year()) * 12;
  }

  return absolute ? Math.abs(diff) : diff;
}

export function dayMin(...days) {
  const [firstDay, ...restDays] = moment.isMoment(days[0]) ? days : [...days[0]];
  return restDays.reduce((min, day) => (day.isBefore(min) && day) || min, firstDay);
}

export function dayMax(...days) {
  const [firstDay, ...restDays] = moment.isMoment(days[0]) ? days : [...days[0]];
  return restDays.reduce((max, day) => (day.isAfter(max) && day) || max, firstDay);
}
