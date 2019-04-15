"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../../../utils/date");

var _statusModifier = require("../../../utils/calendar/statusModifier");

var _addSelectedStatus = _interopRequireDefault(require("./utils/addSelectedStatus"));

var _removeSelectedStatus = _interopRequireDefault(require("./utils/removeSelectedStatus"));

var _getVisibleDays = _interopRequireDefault(require("./utils/getVisibleDays"));

var _getSoftDisabledDays = _interopRequireDefault(require("./utils/getSoftDisabledDays"));

var _applyModifiersToVisibleDays = _interopRequireDefault(require("./utils/applyModifiersToVisibleDays"));

var _getFirstValidDayBeforeIndex = _interopRequireDefault(require("./utils/getFirstValidDayBeforeIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DaysStatusTranslator =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DaysStatusTranslator, _PureComponent);

  _createClass(DaysStatusTranslator, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var daysStatus = prevState.daysStatus;
      var prevModifier = prevState.modifiers,
          prevVisibleDays = prevState.visibleDays;
      var _prevState$prevProps = prevState.prevProps,
          prevFirstVisibleMonth = _prevState$prevProps.firstVisibleMonth,
          prevDayIndex = _prevState$prevProps.currentDayIndex,
          prevFixedDaysStatus = _prevState$prevProps.fixedDaysStatus,
          prevHoveredDay = _prevState$prevProps.hoveredDay,
          prevSelectedDays = _prevState$prevProps.selectedDays,
          prevDisabledDays = _prevState$prevProps.disabledDays,
          prevHighlightedDays = _prevState$prevProps.highlightedDays,
          prevIsDayDisabled = _prevState$prevProps.isDayDisabled,
          prevIsDayHighlighted = _prevState$prevProps.isDayHighlighted,
          prevShowOutsideDays = _prevState$prevProps.showOutsideDays,
          prevNumberOfMonths = _prevState$prevProps.numberOfMonths,
          prevNumberOfDays = _prevState$prevProps.numberOfDays,
          prevMinDay = _prevState$prevProps.minDay,
          prevMaxDay = _prevState$prevProps.maxDay,
          prevMinNights = _prevState$prevProps.minNights;
      var firstVisibleMonth = nextProps.firstVisibleMonth,
          currentDayIndex = nextProps.currentDayIndex,
          fixedDaysStatus = nextProps.fixedDaysStatus,
          hoveredDay = nextProps.hoveredDay,
          selectedDays = nextProps.selectedDays,
          disabledDays = nextProps.disabledDays,
          highlightedDays = nextProps.highlightedDays,
          isDayDisabled = nextProps.isDayDisabled,
          isDayHighlighted = nextProps.isDayHighlighted,
          numberOfMonths = nextProps.numberOfMonths,
          numberOfDays = nextProps.numberOfDays,
          minDay = nextProps.minDay,
          maxDay = nextProps.maxDay,
          minNights = nextProps.minNights,
          showOutsideDays = nextProps.showOutsideDays;
      var prevEnableOutsideDays = prevShowOutsideDays && prevNumberOfMonths === 1;
      var enableOutsideDays = showOutsideDays && numberOfMonths === 1; // TODO
      // apply status to outside days

      var hasDaysStatusReset = false;

      if (fixedDaysStatus !== prevFixedDaysStatus || disabledDays !== prevDisabledDays || highlightedDays !== prevHighlightedDays || minDay !== prevMinDay || maxDay !== prevMaxDay) {
        hasDaysStatusReset = true;
        daysStatus = fixedDaysStatus;
        disabledDays.forEach(function (prev) {
          daysStatus = (0, _statusModifier.addStatus)(daysStatus, prev, 'disabled');
        });
        highlightedDays.forEach(function (prev) {
          daysStatus = (0, _statusModifier.addStatus)(daysStatus, prev, 'isHighlighted');
        });

        if (minDay) {
          var disableStart = (0, _date.dayMin)([minDay.clone().startOf('month'), firstVisibleMonth.clone().startOf('month')]);

          if (enableOutsideDays) {
            disableStart.startOf('week');
          }

          daysStatus = (0, _statusModifier.addStatusInRange)(daysStatus, disableStart, minDay.clone().subtract(1, 'day'), 'disabled');
        }

        if (maxDay) {
          var disableEnd = (0, _date.dayMax)([maxDay.clone().endOf('month'), firstVisibleMonth.clone().add(numberOfMonths - 1, 'months').endOf('month')]);

          if (enableOutsideDays) {
            disableEnd.endOf('week');
          }

          daysStatus = (0, _statusModifier.addStatusInRange)(daysStatus, maxDay.clone().add(1, 'day'), disableEnd, 'disabled');
        }
      }

      var modifiers = prevModifier;

      if (isDayDisabled !== prevIsDayDisabled || isDayHighlighted !== prevIsDayHighlighted) {
        modifiers = {};

        if (isDayDisabled) {
          modifiers.disabled = function (day) {
            return isDayDisabled(day);
          };
        }

        if (isDayHighlighted) {
          modifiers.isHighlighted = function (day) {
            return isDayHighlighted(day);
          };
        }
      }

      var visibleDays = prevVisibleDays;

      if (firstVisibleMonth !== prevFirstVisibleMonth || numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays) {
        visibleDays = (0, _getVisibleDays.default)(firstVisibleMonth, numberOfMonths, enableOutsideDays);
      }

      var hasDisabledModifierReApplied = false;

      if (modifiers !== prevModifier || visibleDays !== prevVisibleDays || hasDaysStatusReset) {
        if (isDayDisabled !== prevIsDayDisabled) {
          hasDisabledModifierReApplied = true;
        }

        daysStatus = (0, _applyModifiersToVisibleDays.default)(daysStatus, visibleDays, modifiers, !hasDaysStatusReset);
      }

      if (selectedDays !== prevSelectedDays || hasDaysStatusReset) {
        if (!hasDaysStatusReset) {
          daysStatus = (0, _removeSelectedStatus.default)(daysStatus, prevSelectedDays);
        }

        daysStatus = (0, _addSelectedStatus.default)(daysStatus, selectedDays);
      }

      if (selectedDays !== prevSelectedDays || currentDayIndex !== prevDayIndex || minNights !== prevMinNights || hasDaysStatusReset || hasDisabledModifierReApplied) {
        if (prevNumberOfDays > 1 && !hasDaysStatusReset) {
          if (hasDisabledModifierReApplied) {
            visibleDays.forEach(function (_ref) {
              var days = _ref.days;
              return days.forEach(function (day) {
                if ((0, _statusModifier.hasStatus)(daysStatus, day, 'softDisabled')) {
                  daysStatus = (0, _statusModifier.deleteStatus)(daysStatus, day, 'softDisabled');
                }
              });
            });
          }

          var days = (0, _getSoftDisabledDays.default)(prevSelectedDays, prevDayIndex, prevMinNights);
          days.forEach(function (day) {
            if ((0, _statusModifier.hasStatus)(daysStatus, day, 'softDisabled')) {
              daysStatus = (0, _statusModifier.deleteStatus)(daysStatus, day, new Set(['softDisabled', 'disabled']));
            }
          });
        }

        if (numberOfDays > 1) {
          var _days = (0, _getSoftDisabledDays.default)(selectedDays, currentDayIndex, minNights);

          _days.forEach(function (day) {
            if (!(0, _statusModifier.hasStatus)(daysStatus, day, 'disabled')) {
              daysStatus = (0, _statusModifier.addStatus)(daysStatus, day, new Set(['softDisabled', 'disabled']));
            }
          });
        }
      }

      if (hoveredDay !== prevHoveredDay || hoveredDay && hasDaysStatusReset) {
        if (prevHoveredDay && !hasDaysStatusReset) {
          daysStatus = (0, _statusModifier.deleteStatus)(daysStatus, prevHoveredDay, 'isHovered');

          if (prevDayIndex > 0) {
            var startDay = prevFirstVisibleMonth.clone().startOf('month');

            if (prevEnableOutsideDays) {
              startDay.startOf('week');
            }

            daysStatus = (0, _statusModifier.deleteStatusInRange)(daysStatus, startDay, prevHoveredDay, 'isTrailing');
          }
        }

        if (hoveredDay) {
          daysStatus = (0, _statusModifier.addStatus)(daysStatus, hoveredDay, 'isHovered');
          var prevDay = (0, _getFirstValidDayBeforeIndex.default)(selectedDays, currentDayIndex);

          if (prevDay) {
            var _startDay = firstVisibleMonth.clone().startOf('month');

            if (enableOutsideDays) {
              _startDay.startOf('week');
            }

            daysStatus = (0, _statusModifier.addStatusInRange)(daysStatus, (0, _date.dayMax)(_startDay, prevDay.clone().add(1, 'day')), hoveredDay.clone().subtract(1, 'day'), 'isTrailing');
          }
        }
      }

      return {
        daysStatus: daysStatus,
        modifiers: modifiers,
        visibleDays: visibleDays,
        prevProps: {
          firstVisibleMonth: firstVisibleMonth,
          currentDayIndex: currentDayIndex,
          fixedDaysStatus: fixedDaysStatus,
          hoveredDay: hoveredDay,
          selectedDays: selectedDays,
          disabledDays: disabledDays,
          highlightedDays: highlightedDays,
          isDayDisabled: isDayDisabled,
          isDayHighlighted: isDayHighlighted,
          numberOfMonths: numberOfMonths,
          numberOfDays: numberOfDays,
          minDay: minDay,
          maxDay: maxDay,
          minNights: minNights,
          showOutsideDays: showOutsideDays
        }
      };
    }
  }]);

  function DaysStatusTranslator(props) {
    var _this;

    _classCallCheck(this, DaysStatusTranslator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DaysStatusTranslator).call(this, props));
    _this.state = {
      daysStatus: {},
      modifiers: {},
      visibleDays: [],
      prevProps: {
        hoveredDay: null,
        selectedDays: []
      }
    };
    return _this;
  }

  _createClass(DaysStatusTranslator, [{
    key: "render",
    value: function render() {
      var daysStatus = this.state.daysStatus;
      var children = this.props.children;
      return children({
        daysStatus: daysStatus
      });
    }
  }]);

  return DaysStatusTranslator;
}(_react.PureComponent);

DaysStatusTranslator.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  firstVisibleMonth: _propTypes.default.instanceOf(_moment.default).isRequired,
  currentDayIndex: _propTypes.default.number.isRequired,
  selectedDays: _propTypes.default.arrayOf(_propTypes.default.instanceOf(_moment.default)).isRequired,
  hoveredDay: _propTypes.default.instanceOf(_moment.default),
  fixedDaysStatus: _propTypes.default.object.isRequired,
  disabledDays: _propTypes.default.arrayOf(_propTypes.default.instanceOf(_moment.default)).isRequired,
  highlightedDays: _propTypes.default.arrayOf(_propTypes.default.instanceOf(_moment.default)).isRequired,
  isDayDisabled: _propTypes.default.func,
  isDayHighlighted: _propTypes.default.func,
  numberOfMonths: _propTypes.default.number.isRequired,
  numberOfDays: _propTypes.default.number.isRequired,
  minDay: _propTypes.default.instanceOf(_moment.default),
  maxDay: _propTypes.default.instanceOf(_moment.default),
  minNights: _propTypes.default.number.isRequired,
  showOutsideDays: _propTypes.default.bool,

  /* eslint-enable */
  children: _propTypes.default.func.isRequired
};
DaysStatusTranslator.defaultProps = {
  isDayDisabled: null,
  isDayHighlighted: null,
  hoveredDay: null,
  minDay: null,
  maxDay: null,
  showOutsideDays: false
};
var _default = DaysStatusTranslator;
exports.default = _default;