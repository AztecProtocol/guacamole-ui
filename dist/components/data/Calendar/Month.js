"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _date = require("../../../utils/date");

var _getVisibleDaysOfMonth = _interopRequireDefault(require("../../../utils/calendar/getVisibleDaysOfMonth"));

var _toDayKey = _interopRequireDefault(require("../../../utils/calendar/toDayKey"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Day = _interopRequireDefault(require("./Day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Month =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Month, _PureComponent);

  function Month(props) {
    var _this;

    _classCallCheck(this, Month);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Month).call(this, props));
    var month = props.month,
        startOfWeek = props.startOfWeek;
    _this.state = {
      days: (0, _getVisibleDaysOfMonth.default)({
        month: month,
        startOfWeek: startOfWeek
      }),
      prevProps: {
        month: month,
        startOfWeek: startOfWeek
      }
    };
    return _this;
  }

  _createClass(Month, [{
    key: "renderDays",
    value: function renderDays() {
      var _this$props = this.props,
          month = _this$props.month,
          showOutsideDays = _this$props.showOutsideDays,
          daysStatus = _this$props.daysStatus,
          onSelectDay = _this$props.onSelectDay,
          onHoverDay = _this$props.onHoverDay,
          onBlurDay = _this$props.onBlurDay;
      var days = this.state.days;
      var thisMonth = month.month();
      return days.map(function (day, i) {
        return _react.default.createElement(_Day.default, {
          key: +i,
          day: day,
          isOutside: day.month() !== thisMonth,
          showOutsideDays: showOutsideDays,
          onSelect: onSelectDay,
          onHover: onHoverDay,
          onBlur: onBlurDay,
          status: daysStatus[(0, _toDayKey.default)(day)]
        });
      });
    }
  }, {
    key: "renderMonthName",
    value: function renderMonthName() {
      var _this$props2 = this.props,
          month = _this$props2.month,
          monthNameFormat = _this$props2.monthNameFormat;
      return _react.default.createElement("div", {
        styleName: "month-name"
      }, month.format(monthNameFormat));
    }
  }, {
    key: "renderWeekdayNames",
    value: function renderWeekdayNames() {
      var weekdayNodes = [];

      var weekdayNames = _moment.default.localeData().weekdaysMin();

      var startOfWeek = this.props.startOfWeek;

      for (var i = 0; i < 7; i += 1) {
        weekdayNodes.push(_react.default.createElement("div", {
          key: i,
          styleName: "weekday"
        }, weekdayNames[(startOfWeek + i) % 7]));
      }

      return weekdayNodes;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        styleName: "month"
      }, _react.default.createElement(_Block.default, {
        bottom: "m",
        align: "center"
      }, this.renderMonthName()), _react.default.createElement(_Block.default, {
        padding: "xs 0"
      }, this.renderWeekdayNames()), this.renderDays());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var month = nextProps.month,
          startOfWeek = nextProps.startOfWeek;
      var _prevState$prevProps = prevState.prevProps,
          prevMonth = _prevState$prevProps.month,
          prevStartOfWeek = _prevState$prevProps.startOfWeek;

      if (startOfWeek === prevStartOfWeek && (month === prevMonth || (0, _date.isSameMonth)(month, prevMonth))) {
        return null;
      }

      return {
        days: (0, _getVisibleDaysOfMonth.default)({
          month: month,
          startOfWeek: startOfWeek
        }),
        prevProps: {
          month: month,
          startOfWeek: startOfWeek
        }
      };
    }
  }]);

  return Month;
}(_react.PureComponent);

Month.propTypes = {
  month: _propTypes.default.instanceOf(_moment.default).isRequired,
  monthNameFormat: _propTypes.default.string.isRequired,
  startOfWeek: _propTypes.default.number.isRequired,
  showOutsideDays: _propTypes.default.bool,
  daysStatus: _propTypes.default.object,
  onSelectDay: _propTypes.default.func,
  onHoverDay: _propTypes.default.func,
  onBlurDay: _propTypes.default.func
};
Month.defaultProps = {
  showOutsideDays: false,
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null
};

var _default = (0, _reactCssModules.default)(Month, styles);

exports.default = _default;