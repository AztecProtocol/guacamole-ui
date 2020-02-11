"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../../../utils/date");

var _allowNavigation = _interopRequireDefault(require("./utils/allowNavigation"));

var _getFirstValidDayBeforeIndex = _interopRequireDefault(require("./utils/getFirstValidDayBeforeIndex"));

var _getFirstValidDayAfterIndex = _interopRequireDefault(require("./utils/getFirstValidDayAfterIndex"));

var _Calendar = _interopRequireDefault(require("../../data/Calendar"));

var _CalendarWithNavigator = _interopRequireDefault(require("../../data/Calendar/CalendarWithNavigator"));

var _DaysStatusTranslator = _interopRequireDefault(require("./DaysStatusTranslator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DatePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  _createClass(DatePicker, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var selectedDays = prevState.selectedDays,
          hoveredDay = prevState.hoveredDay;
      var _prevState$prevProps = prevState.prevProps,
          prevDayIndex = _prevState$prevProps.currentDayIndex,
          prevMinDay = _prevState$prevProps.minDay,
          prevMaxDay = _prevState$prevProps.maxDay,
          prevNumberOfMonths = _prevState$prevProps.numberOfMonths;
      var currentDayIndex = nextProps.currentDayIndex,
          minDay = nextProps.minDay,
          maxDay = nextProps.maxDay,
          numberOfMonths = nextProps.numberOfMonths;
      var nextState = {};
      var isControlled = selectedDays === undefined;
      var dayIndexChanged = isControlled && currentDayIndex !== prevDayIndex;

      if (dayIndexChanged && hoveredDay) {
        nextState = _objectSpread({}, nextState, {
          hoveredDay: null
        });
      }

      if (minDay !== prevMinDay || maxDay !== prevMaxDay || numberOfMonths !== prevNumberOfMonths) {
        var firstVisibleMonth = prevState.firstVisibleMonth;
        var showNavigator = (0, _allowNavigation["default"])(firstVisibleMonth, numberOfMonths, minDay, maxDay);
        nextState = _objectSpread({}, nextState, {
          showNavigator: showNavigator
        });
      }

      return _objectSpread({}, nextState, {
        prevProps: {
          currentDayIndex: currentDayIndex,
          minDay: minDay,
          maxDay: maxDay,
          numberOfMonths: numberOfMonths
        }
      });
    }
  }]);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));
    var initialFirstVisibleMonth = props.initialFirstVisibleMonth,
        selectedDays = props.selectedDays,
        initialSelectedDays = props.initialSelectedDays,
        currentDayIndex = props.currentDayIndex,
        minDay = props.minDay;
    _this.isControlled = !!selectedDays;

    var getPrevDay = function getPrevDay(days) {
      return (0, _getFirstValidDayBeforeIndex["default"])(days, currentDayIndex + 1);
    };

    var firstVisibleMonth = initialFirstVisibleMonth || selectedDays && getPrevDay(selectedDays) || !_this.isControlled && initialSelectedDays && getPrevDay(initialSelectedDays) || minDay || (0, _moment["default"])();
    _this.state = {
      selectedDays: _this.isControlled ? undefined : initialSelectedDays,
      hoveredDay: null,
      currentDayIndex: currentDayIndex,
      firstVisibleMonth: firstVisibleMonth,
      showNavigator: true,
      prevProps: {}
    };
    _this.handleSelectDay = _this.handleSelectDay.bind(_assertThisInitialized(_this));
    _this.handleHoverDay = _this.handleHoverDay.bind(_assertThisInitialized(_this));
    _this.handleBlurDay = _this.handleBlurDay.bind(_assertThisInitialized(_this));
    _this.handleChangeMonth = _this.handleChangeMonth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePicker, [{
    key: "getCurrentDayIndex",
    value: function getCurrentDayIndex() {
      var controlledCurrentDayIndex = this.props.currentDayIndex;
      var currentDayIndex = this.state.currentDayIndex;
      return this.isControlled ? controlledCurrentDayIndex : currentDayIndex;
    }
  }, {
    key: "getSelectedDays",
    value: function getSelectedDays() {
      var controlledSelectedDays = this.props.selectedDays;
      var selectedDays = this.state.selectedDays;
      return this.isControlled ? controlledSelectedDays : selectedDays;
    }
  }, {
    key: "handleChangeMonth",
    value: function handleChangeMonth(firstVisibleMonth) {
      this.setState({
        hoveredDay: null,
        firstVisibleMonth: firstVisibleMonth
      });
      var onChangeMonth = this.props.onChangeMonth;
      onChangeMonth(firstVisibleMonth);
    }
  }, {
    key: "handleSelectDay",
    value: function handleSelectDay(day, status) {
      if (status.has('disabled')) return;
      var _this$props = this.props,
          numberOfDays = _this$props.numberOfDays,
          minNights = _this$props.minNights;
      var hoveredDay = this.state.hoveredDay;
      var currentDayIndex = this.getCurrentDayIndex();
      var prevSelectedDays = this.getSelectedDays();
      var isSameSelection = (0, _date.isSameDay)(day, prevSelectedDays[currentDayIndex]);
      var nextDayIndex = (currentDayIndex + 1) % numberOfDays;
      var selectedDayIndex = currentDayIndex;
      var selectedDays;

      if (isSameSelection) {
        selectedDays = prevSelectedDays;
      } else if (numberOfDays === 1) {
        selectedDays = [day];
      } else {
        var isOrderInvalid = function isOrderInvalid(day1, day2) {
          // eslint-disable-line arrow-body-style
          return minNights === 0 ? day2.isBefore(day1, 'day') : !day2.isAfter(day1, 'day');
        };

        var dayBefore = (0, _getFirstValidDayBeforeIndex["default"])(prevSelectedDays, currentDayIndex);
        var startOver = currentDayIndex > 0 && (!dayBefore || isOrderInvalid(dayBefore, day));

        if (startOver) {
          nextDayIndex = 1;
          selectedDayIndex = 0;
          selectedDays = [day];
        } else {
          selectedDays = _toConsumableArray(prevSelectedDays.slice(0, currentDayIndex));
          selectedDays[currentDayIndex] = day;
          var nextDay = (0, _getFirstValidDayAfterIndex["default"])(prevSelectedDays, currentDayIndex);
          var cutOffTail = nextDay && isOrderInvalid(day, nextDay);

          if (!cutOffTail) {
            selectedDays = selectedDays.concat(prevSelectedDays.slice(currentDayIndex + 1));
          }
        }
      }

      if (hoveredDay) {
        this.setState({
          hoveredDay: null
        });
      }

      if (nextDayIndex !== currentDayIndex || selectedDays !== prevSelectedDays) {
        if (!this.isControlled) {
          this.setState({
            currentDayIndex: nextDayIndex,
            selectedDays: selectedDays
          });
        }

        var onSelectDay = this.props.onSelectDay;
        onSelectDay(day, selectedDayIndex);
      }

      if (nextDayIndex !== currentDayIndex) {
        var onChangeDayIndex = this.props.onChangeDayIndex;
        onChangeDayIndex(nextDayIndex);
      }

      if (selectedDays !== prevSelectedDays) {
        var onChangeDays = this.props.onChangeDays;
        onChangeDays(selectedDays);
      }
    }
  }, {
    key: "handleHoverDay",
    value: function handleHoverDay(day, status) {
      if (status.has('disabled')) return;
      this.setState({
        hoveredDay: day
      });
      var onHoverDay = this.props.onHoverDay;
      onHoverDay(day);
    }
  }, {
    key: "handleBlurDay",
    value: function handleBlurDay(day) {
      var hoveredDay = this.state.hoveredDay;
      if (!hoveredDay) return;
      this.setState({
        hoveredDay: null
      });
      var onBlurDay = this.props.onBlurDay;
      onBlurDay(day);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          firstVisibleMonth = _this$state.firstVisibleMonth,
          hoveredDay = _this$state.hoveredDay,
          showNavigator = _this$state.showNavigator;
      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          daysStatus = _this$props2.daysStatus,
          disabledDays = _this$props2.disabledDays,
          highlightedDays = _this$props2.highlightedDays,
          isDayDisabled = _this$props2.isDayDisabled,
          isDayHighlighted = _this$props2.isDayHighlighted,
          minDay = _this$props2.minDay,
          maxDay = _this$props2.maxDay,
          minNights = _this$props2.minNights,
          numberOfMonths = _this$props2.numberOfMonths,
          numberOfDays = _this$props2.numberOfDays,
          monthNameFormat = _this$props2.monthNameFormat,
          startOfWeek = _this$props2.startOfWeek,
          orientation = _this$props2.orientation,
          showOutsideDays = _this$props2.showOutsideDays,
          flexWidth = _this$props2.flexWidth,
          renderMonth = _this$props2.renderMonth;
      var currentDayIndex = this.getCurrentDayIndex();
      var selectedDays = this.getSelectedDays();
      var translatorProps = {
        firstVisibleMonth: firstVisibleMonth,
        currentDayIndex: currentDayIndex,
        hoveredDay: hoveredDay,
        selectedDays: selectedDays,
        fixedDaysStatus: daysStatus,
        disabledDays: disabledDays,
        highlightedDays: highlightedDays,
        isDayDisabled: isDayDisabled,
        isDayHighlighted: isDayHighlighted,
        minDay: minDay,
        maxDay: maxDay,
        minNights: minNights,
        numberOfMonths: numberOfMonths,
        numberOfDays: numberOfDays
      };
      var calendarProps = {
        testId: testId,
        className: className,
        numberOfMonths: numberOfMonths,
        firstVisibleMonth: firstVisibleMonth,
        onSelectDay: this.handleSelectDay,
        onHoverDay: this.handleHoverDay,
        onBlurDay: this.handleBlurDay,
        monthNameFormat: monthNameFormat,
        startOfWeek: startOfWeek,
        orientation: orientation,
        showOutsideDays: showOutsideDays,
        flexWidth: flexWidth,
        renderMonth: renderMonth
      };

      if (!showNavigator) {
        return _react["default"].createElement(_DaysStatusTranslator["default"], translatorProps, function (_ref) {
          var nextDaysStatus = _ref.daysStatus;
          return _react["default"].createElement(_Calendar["default"], _extends({}, calendarProps, {
            daysStatus: nextDaysStatus
          }));
        });
      }

      return _react["default"].createElement(_DaysStatusTranslator["default"], translatorProps, function (_ref2) {
        var nextDaysStatus = _ref2.daysStatus;
        return _react["default"].createElement(_CalendarWithNavigator["default"], _extends({}, calendarProps, {
          daysStatus: nextDaysStatus,
          minMonth: minDay,
          maxMonth: maxDay,
          onChangeMonth: _this2.handleChangeMonth
        }));
      });
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

DatePicker.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  currentDayIndex: _propTypes["default"].number,
  initialFirstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  initialSelectedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  selectedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  daysStatus: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  highlightedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  minDay: _propTypes["default"].instanceOf(_moment["default"]),
  maxDay: _propTypes["default"].instanceOf(_moment["default"]),
  minNights: _propTypes["default"].number,
  numberOfDays: _propTypes["default"].number,
  numberOfMonths: _propTypes["default"].number,
  showOutsideDays: _propTypes["default"].bool,
  isDayDisabled: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  onSelectDay: _propTypes["default"].func,
  onHoverDay: _propTypes["default"].func,
  onBlurDay: _propTypes["default"].func,
  onChangeDayIndex: _propTypes["default"].func,
  onChangeDays: _propTypes["default"].func,
  onChangeMonth: _propTypes["default"].func,
  // props for Calendar

  /* eslint-disable react/require-default-props */
  monthNameFormat: _propTypes["default"].string,
  startOfWeek: _propTypes["default"].number,
  renderMonth: _propTypes["default"].func,

  /* eslint-enable */
  flexWidth: _propTypes["default"].bool,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical'])
};
DatePicker.defaultProps = {
  testId: undefined,
  className: '',
  currentDayIndex: 0,
  initialFirstVisibleMonth: undefined,
  initialSelectedDays: [],
  selectedDays: null,
  daysStatus: {},
  disabledDays: [],
  highlightedDays: [],
  minDay: null,
  maxDay: null,
  minNights: 1,
  numberOfDays: 1,
  numberOfMonths: 1,
  orientation: 'horizontal',
  showOutsideDays: false,
  flexWidth: false,
  isDayDisabled: null,
  isDayHighlighted: null,
  onSelectDay: function onSelectDay() {},
  onHoverDay: function onHoverDay() {},
  onBlurDay: function onBlurDay() {},
  onChangeDayIndex: function onChangeDayIndex() {},
  onChangeDays: function onChangeDays() {},
  onChangeMonth: function onChangeMonth() {}
};
var _default = DatePicker;
exports["default"] = _default;