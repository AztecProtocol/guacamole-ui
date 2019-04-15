"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../../../utils/date");

var _toMonthKey = _interopRequireDefault(require("../../../utils/calendar/toMonthKey"));

var _getVisibleMonthsOfCalendar = _interopRequireDefault(require("../../../utils/calendar/getVisibleMonthsOfCalendar"));

var _Month = _interopRequireDefault(require("./Month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "calendar-h": "calendar__calendar-h___W1HVN",
  "calendar-v": "calendar__calendar-v___37Zx0",
  "calendar-flex": "calendar__calendar-flex___3srVO",
  "month": "calendar__month___3ycBs",
  "month-name": "calendar__month-name___3PZSg",
  "weekday": "calendar__weekday___37pZ0",
  "day": "calendar__day___1EFYX",
  "hovered": "calendar__hovered___1l5z1",
  "trailing": "calendar__trailing___1qiY5",
  "ranged": "calendar__ranged___1Gviq",
  "selected": "calendar__selected___3rPoY",
  "highlighted": "calendar__highlighted___29vEY",
  "outside": "calendar__outside___tkWaf",
  "empty": "calendar__empty___1kQrr",
  "disabled": "calendar__disabled___I69qr",
  "interactive": "calendar__interactive___l4-F0",
  "nav-holder": "calendar__nav-holder___2Rskp",
  "flex": "calendar__flex___1e_An",
  "vertical": "calendar__vertical___15iM6",
  "calendar-in-nav-v": "calendar__calendar-in-nav-v___2Rdp6",
  "nav-h": "calendar__nav-h___oR7dt",
  "nav-prev": "calendar__nav-prev___1NV6k",
  "nav-next": "calendar__nav-next___2w74e",
  "nav-v": "calendar__nav-v___vTdfQ",
  "placeHolderShimmer": "calendar__placeHolderShimmer___1IurA"
};

var Calendar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));
    _this.state = {
      months: []
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "renderMonths",
    value: function renderMonths() {
      var _this$props = this.props,
          monthNameFormat = _this$props.monthNameFormat,
          startOfWeek = _this$props.startOfWeek,
          numberOfMonths = _this$props.numberOfMonths,
          showOutsideDays = _this$props.showOutsideDays,
          onSelectDay = _this$props.onSelectDay,
          onHoverDay = _this$props.onHoverDay,
          onBlurDay = _this$props.onBlurDay,
          daysStatus = _this$props.daysStatus,
          renderMonth = _this$props.renderMonth;
      var months = this.state.months;
      var doShowOutsideDays = showOutsideDays && numberOfMonths === 1;
      return months.map(function (month) {
        var monthProps = {
          month: month,
          monthNameFormat: monthNameFormat,
          startOfWeek: startOfWeek,
          showOutsideDays: doShowOutsideDays,
          daysStatus: daysStatus[(0, _toMonthKey.default)(month)],
          onSelectDay: onSelectDay,
          onHoverDay: onHoverDay,
          onBlurDay: onBlurDay
        };

        var monthNode = _react.default.createElement(_Month.default, _extends({
          key: (0, _toMonthKey.default)(month)
        }, monthProps));

        return renderMonth(_objectSpread({}, monthProps, {
          children: monthNode
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          orientation = _this$props2.orientation,
          flexWidth = _this$props2.flexWidth,
          onSelectDay = _this$props2.onSelectDay;
      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames.default)({
          'calendar-v': !flexWidth && orientation === 'vertical',
          'calendar-h': !flexWidth && orientation === 'horizontal',
          'calendar-flex': flexWidth,
          interactive: onSelectDay
        })
      }, this.renderMonths());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var firstVisibleMonth = nextProps.firstVisibleMonth,
          numberOfMonths = nextProps.numberOfMonths;
      var months = prevState.months;

      if (months[0] && (0, _date.isSameMonth)(firstVisibleMonth, months[0]) && numberOfMonths === months.length) {
        return null;
      }

      return {
        months: (0, _getVisibleMonthsOfCalendar.default)({
          firstVisibleMonth: firstVisibleMonth,
          numberOfMonths: numberOfMonths
        })
      };
    }
  }]);

  return Calendar;
}(_react.PureComponent);

exports.Calendar = Calendar;
Calendar.propTypes = {
  className: _propTypes.default.string,
  firstVisibleMonth: _propTypes.default.instanceOf(_moment.default),
  monthNameFormat: _propTypes.default.string,
  numberOfMonths: _propTypes.default.number,
  startOfWeek: _propTypes.default.number,
  showOutsideDays: _propTypes.default.bool,
  flexWidth: _propTypes.default.bool,
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  daysStatus: _propTypes.default.object,
  onSelectDay: _propTypes.default.func,
  onHoverDay: _propTypes.default.func,
  onBlurDay: _propTypes.default.func,
  renderMonth: _propTypes.default.func
};
Calendar.defaultProps = {
  className: '',
  firstVisibleMonth: (0, _moment.default)(),
  monthNameFormat: 'YYYY MMMM',
  numberOfMonths: 1,
  startOfWeek: 0,
  showOutsideDays: false,
  flexWidth: false,
  orientation: 'horizontal',
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null,
  renderMonth: function renderMonth(_ref) {
    var children = _ref.children;
    return children;
  }
};

var _default = (0, _reactCssModules.default)(Calendar, styles, {
  allowMultiple: true
});

exports.default = _default;