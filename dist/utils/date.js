"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.toMoment = toMoment;
exports.toDateString = toDateString;
exports.toDateTimeString = toDateTimeString;
exports.toTimeString = toTimeString;
exports.dayDiff = dayDiff;
exports.monthDiff = monthDiff;
exports.dayMin = dayMin;
exports.dayMax = dayMax;

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../config/date");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isSameDay(day1, day2) {
  if (!_moment["default"].isMoment(day1) || !_moment["default"].isMoment(day2)) {
    return false;
  }

  if (day1 === day2) {
    return true;
  }

  return day1.date() === day2.date() && day1.month() === day2.month() && day1.year() === day2.year();
}

function isSameMonth(month1, month2) {
  var compareYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!_moment["default"].isMoment(month1) || !_moment["default"].isMoment(month2)) {
    return false;
  }

  if (month1 === month2) {
    return true;
  }

  return month1.month() === month2.month() && (!compareYear || month1.year() === month2.year());
}

function toMoment(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _date.systemDateFormat;
  var day = (0, _moment["default"])(date, format);
  return day.isValid() ? day : null;
}

function toDateString(day) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _date.systemDateFormat;

  if (!day) {
    return '';
  }

  var dayMoment = typeof day === 'string' ? toMoment(day) : day;
  return dayMoment.format(format);
}

function toDateTimeString(day) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _date.systemDateTimeFormat;
  return toDateString(day, format);
}

function toTimeString(datetime) {
  if (!datetime) {
    return '';
  }

  var dayMoment = typeof datetime === 'string' ? toMoment(datetime, _date.systemDateTimeFormat) : datetime;
  return dayMoment.format('HH:mm');
}

function dayDiff(day1, day2) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? 'days' : _ref$unit,
      _ref$absolute = _ref.absolute,
      absolute = _ref$absolute === void 0 ? true : _ref$absolute;

  var format = unit === 'days' ? _date.systemDateFormat : _date.systemDateTimeFormat;
  var moment1 = typeof day1 === 'string' ? toMoment(day1, format) : day1;
  var moment2 = typeof day2 === 'string' ? toMoment(day2, format) : day2;
  var diff = moment1.diff(moment2, unit);

  if (absolute) {
    return Math.abs(diff);
  }

  return diff;
}

function monthDiff(month1, month2) {
  var compareYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var absolute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!month1 || !month2) {
    return 0;
  }

  var diff = month1.month() - month2.month();

  if (compareYear) {
    diff += (month1.year() - month2.year()) * 12;
  }

  return absolute ? Math.abs(diff) : diff;
}

function dayMin() {
  for (var _len = arguments.length, days = new Array(_len), _key = 0; _key < _len; _key++) {
    days[_key] = arguments[_key];
  }

  var _ref2 = _moment["default"].isMoment(days[0]) ? days : _toConsumableArray(days[0]),
      _ref3 = _toArray(_ref2),
      firstDay = _ref3[0],
      restDays = _ref3.slice(1);

  return restDays.reduce(function (min, day) {
    return day.isBefore(min) && day || min;
  }, firstDay);
}

function dayMax() {
  for (var _len2 = arguments.length, days = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    days[_key2] = arguments[_key2];
  }

  var _ref4 = _moment["default"].isMoment(days[0]) ? days : _toConsumableArray(days[0]),
      _ref5 = _toArray(_ref4),
      firstDay = _ref5[0],
      restDays = _ref5.slice(1);

  return restDays.reduce(function (max, day) {
    return day.isAfter(max) && day || max;
  }, firstDay);
}