"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyModifiersToVisibleDays;

var _difference = _interopRequireDefault(require("lodash/difference"));

var _statusModifier = require("../../../../utils/calendar/statusModifier");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyModifiersToVisibleDays(prevDaysStatus, visibleDays, modifiers) {
  var shouldToggle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var daysStatus = prevDaysStatus;
  var modifierNames = Object.keys(modifiers);

  if (!modifierNames.length) {
    return daysStatus;
  }

  visibleDays.forEach(function (_ref) {
    var month = _ref.month,
        days = _ref.days;
    days.forEach(function (day) {
      var status = modifierNames.filter(function (name) {
        return modifiers[name](day);
      });

      if (status.length) {
        daysStatus = (0, _statusModifier.addStatus)(daysStatus, day, new Set(status), month);
      }

      if (shouldToggle && status.length < modifierNames.length) {
        var excludedStatus = (0, _difference.default)(modifierNames, status);
        daysStatus = (0, _statusModifier.deleteStatus)(daysStatus, day, new Set(excludedStatus), month);
      }
    });
  });
  return daysStatus;
}