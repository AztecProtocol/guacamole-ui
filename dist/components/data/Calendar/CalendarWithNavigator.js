"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _CalendarNavigator = _interopRequireDefault(require("./CalendarNavigator"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CalendarWithNavigator(props) {
  var className = props.className,
      testId = props.testId,
      firstVisibleMonth = props.firstVisibleMonth,
      initialFirstVisibleMonth = props.initialFirstVisibleMonth,
      minMonth = props.minMonth,
      maxMonth = props.maxMonth,
      numberOfMonths = props.numberOfMonths,
      onChangeMonth = props.onChangeMonth,
      orientation = props.orientation,
      flexWidth = props.flexWidth,
      calendarProps = _objectWithoutProperties(props, ["className", "testId", "firstVisibleMonth", "initialFirstVisibleMonth", "minMonth", "maxMonth", "numberOfMonths", "onChangeMonth", "orientation", "flexWidth"]);

  return _react["default"].createElement(_CalendarNavigator["default"], {
    className: className,
    firstVisibleMonth: firstVisibleMonth,
    initialFirstVisibleMonth: initialFirstVisibleMonth,
    minMonth: minMonth,
    maxMonth: maxMonth,
    numberOfMonths: numberOfMonths,
    orientation: orientation,
    flexWidth: flexWidth,
    onChangeMonth: onChangeMonth
  }, function (_ref) {
    var month = _ref.firstVisibleMonth;
    return _react["default"].createElement(_index["default"], _extends({
      testId: testId,
      firstVisibleMonth: month,
      numberOfMonths: numberOfMonths,
      orientation: orientation,
      flexWidth: flexWidth
    }, calendarProps));
  });
}

CalendarWithNavigator.propTypes = {
  // Props for CalendarNavigator
  className: _propTypes["default"].string,
  firstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  initialFirstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  minMonth: _propTypes["default"].instanceOf(_moment["default"]),
  maxMonth: _propTypes["default"].instanceOf(_moment["default"]),
  onChangeMonth: _propTypes["default"].func,
  // Props for Calendar
  testId: _propTypes["default"].string,
  monthNameFormat: _propTypes["default"].string,
  startOfWeek: _propTypes["default"].number,
  showOutsideDays: _propTypes["default"].bool,
  flexWidth: _propTypes["default"].bool,
  daysStatus: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  onSelectDay: _propTypes["default"].func,
  onHoverDay: _propTypes["default"].func,
  onBlurDay: _propTypes["default"].func,
  // Shared Props
  numberOfMonths: _propTypes["default"].number,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical'])
};
CalendarWithNavigator.defaultProps = {
  testId: undefined,
  className: '',
  firstVisibleMonth: null,
  initialFirstVisibleMonth: (0, _moment["default"])(),
  minMonth: null,
  maxMonth: null,
  onChangeMonth: function onChangeMonth() {},
  numberOfMonths: 1,
  startOfWeek: 0,
  monthNameFormat: 'YYYY MMMM',
  orientation: 'horizontal',
  showOutsideDays: false,
  flexWidth: false,
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null
};
var _default = CalendarWithNavigator;
exports["default"] = _default;