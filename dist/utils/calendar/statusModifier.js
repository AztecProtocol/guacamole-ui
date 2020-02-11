"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasSomeStatus = exports.hasStatus = exports.deleteStatusInRange = exports.deleteStatus = exports.addStatusInRange = exports.addStatus = void 0;

var _toMonthKey = _interopRequireDefault(require("./toMonthKey"));

var _toDayKey = _interopRequireDefault(require("./toDayKey"));

var _getDaysInRange = _interopRequireDefault(require("./getDaysInRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var containStatus = function containStatus(day, status) {
  if (typeof status === 'string') {
    return day.has(status);
  }

  return Object.keys(status).every(function (s) {
    return day.has(s);
  });
};

var addStatusToDay = function addStatusToDay(day, status) {
  var modifiedDay = new Set(day);

  if (typeof status === 'string') {
    modifiedDay.add(status);
  } else {
    status.forEach(function (s) {
      return modifiedDay.add(s);
    });
  }

  return modifiedDay;
};

var removeStatusFromDay = function removeStatusFromDay(day, status) {
  if (typeof status === 'string') {
    var _modifiedDay = new Set(day);

    _modifiedDay["delete"](status);

    return _modifiedDay;
  }

  var modifiedDay = new Set();
  Object.keys(day).forEach(function (s) {
    if (!status.has(s)) {
      modifiedDay.add(s);
    }
  });
  return modifiedDay;
};

var getDayStatus = function getDayStatus(daysStatus, day) {
  var outsideMonth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var monthKey = (0, _toMonthKey["default"])(outsideMonth || day);
  var dayKey = (0, _toDayKey["default"])(day);
  var monthStatus = daysStatus[monthKey] || {};
  return monthStatus[dayKey];
};

var addStatus = function addStatus(daysStatus, day, status) {
  var outsideMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var monthKey = (0, _toMonthKey["default"])(outsideMonth || day);
  var dayKey = (0, _toDayKey["default"])(day);
  var monthStatus = daysStatus[monthKey] || {};
  var dayStatus = monthStatus[dayKey];

  if (dayStatus && containStatus(dayStatus, status)) {
    return daysStatus;
  }

  var modifiedDay = addStatusToDay(dayStatus, status);
  return _objectSpread({}, daysStatus, _defineProperty({}, monthKey, _objectSpread({}, monthStatus, _defineProperty({}, dayKey, modifiedDay))));
};

exports.addStatus = addStatus;

var addStatusInRange = function addStatusInRange(daysStatus, from, to, status) {
  var days = (0, _getDaysInRange["default"])(from, to);
  var newDaysStatus = daysStatus;
  days.forEach(function (day) {
    newDaysStatus = addStatus(newDaysStatus, day, status);
  });
  return newDaysStatus;
};

exports.addStatusInRange = addStatusInRange;

var deleteStatus = function deleteStatus(daysStatus, day, status) {
  var outsideMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var monthKey = (0, _toMonthKey["default"])(outsideMonth || day);
  var dayKey = (0, _toDayKey["default"])(day);
  var monthStatus = daysStatus[monthKey] || {};
  var dayStatus = monthStatus[dayKey];

  if (!dayStatus || !containStatus(dayStatus, status)) {
    return daysStatus;
  }

  var modifiedDay = removeStatusFromDay(dayStatus, status);
  return _objectSpread({}, daysStatus, _defineProperty({}, monthKey, _objectSpread({}, monthStatus, _defineProperty({}, dayKey, modifiedDay))));
};

exports.deleteStatus = deleteStatus;

var deleteStatusInRange = function deleteStatusInRange(daysStatus, from, to, status) {
  var days = (0, _getDaysInRange["default"])(from, to);
  var newDaysStatus = daysStatus;
  days.forEach(function (day) {
    newDaysStatus = deleteStatus(newDaysStatus, day, status);
  });
  return newDaysStatus;
};

exports.deleteStatusInRange = deleteStatusInRange;

var hasStatus = function hasStatus(daysStatus, day, status) {
  var outsideMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var dayStatus = getDayStatus(daysStatus, day, outsideMonth);
  return dayStatus && dayStatus.has(status);
};

exports.hasStatus = hasStatus;

var hasSomeStatus = function hasSomeStatus(daysStatus, day, statusList) {
  var outsideMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var dayStatus = getDayStatus(daysStatus, day, outsideMonth);
  return dayStatus && statusList.some(function (status) {
    return dayStatus.has(status);
  });
};

exports.hasSomeStatus = hasSomeStatus;