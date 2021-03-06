"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../../../utils/date");

var _getVisibleDaysOfMonth = _interopRequireDefault(require("../../../utils/calendar/getVisibleDaysOfMonth"));

var _toDayKey = _interopRequireDefault(require("../../../utils/calendar/toDayKey"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Day = _interopRequireDefault(require("./Day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var styles = {
  "calendar-h": "calendar-8b209562",
  "calendar-v": "calendar-751b1dae",
  "calendar-flex": "calendar-367d42ee",
  "month": "calendar-ee59e3b3",
  "month-name": "calendar-93f10578",
  "weekday": "calendar-f5acdc14",
  "day": "calendar-86d9731c",
  "hovered": "calendar-963c1819",
  "trailing": "calendar-e826a1c2",
  "ranged": "calendar-ed178044",
  "selected": "calendar-17e8b52c",
  "highlighted": "calendar-d46c8358",
  "outside": "calendar-f535281c",
  "empty": "calendar-5c235fc2",
  "disabled": "calendar-ffadb5e7",
  "interactive": "calendar-f4641b0f",
  "nav-holder": "calendar-21bfafcc",
  "flex": "calendar-5b9b206c",
  "vertical": "calendar-2eff76c5",
  "calendar-in-nav-v": "calendar-fbd0bf3b",
  "nav-h": "calendar-3683c14d",
  "nav-prev": "calendar-71e2b60f",
  "nav-next": "calendar-3c81bbdf",
  "nav-v": "calendar-6938f1a7",
  "placeHolderShimmer": "calendar-b86a33a5"
};

var Month = /*#__PURE__*/function (_PureComponent) {
  _inherits(Month, _PureComponent);

  var _super = _createSuper(Month);

  function Month(props) {
    var _this;

    _classCallCheck(this, Month);

    _this = _super.call(this, props);
    var month = props.month,
        startOfWeek = props.startOfWeek;
    _this.state = {
      days: (0, _getVisibleDaysOfMonth["default"])({
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
        return /*#__PURE__*/_react["default"].createElement(_Day["default"], {
          key: +i,
          day: day,
          isOutside: day.month() !== thisMonth,
          showOutsideDays: showOutsideDays,
          onSelect: onSelectDay,
          onHover: onHoverDay,
          onBlur: onBlurDay,
          status: daysStatus[(0, _toDayKey["default"])(day)]
        });
      });
    }
  }, {
    key: "renderMonthName",
    value: function renderMonthName() {
      var _this$props2 = this.props,
          month = _this$props2.month,
          monthNameFormat = _this$props2.monthNameFormat;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['month-name']
      }, month.format(monthNameFormat));
    }
  }, {
    key: "renderWeekdayNames",
    value: function renderWeekdayNames() {
      var weekdayNodes = [];

      var weekdayNames = _moment["default"].localeData().weekdaysMin();

      var startOfWeek = this.props.startOfWeek;

      for (var i = 0; i < 7; i += 1) {
        weekdayNodes.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          className: styles.weekday
        }, weekdayNames[(startOfWeek + i) % 7]));
      }

      return weekdayNodes;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.month
      }, /*#__PURE__*/_react["default"].createElement(_Block["default"], {
        bottom: "m",
        align: "center"
      }, this.renderMonthName()), /*#__PURE__*/_react["default"].createElement(_Block["default"], {
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
        days: (0, _getVisibleDaysOfMonth["default"])({
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
  month: _propTypes["default"].instanceOf(_moment["default"]).isRequired,
  monthNameFormat: _propTypes["default"].string.isRequired,
  startOfWeek: _propTypes["default"].number.isRequired,
  showOutsideDays: _propTypes["default"].bool,
  daysStatus: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  onSelectDay: _propTypes["default"].func,
  onHoverDay: _propTypes["default"].func,
  onBlurDay: _propTypes["default"].func
};
Month.defaultProps = {
  showOutsideDays: false,
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null
};
var _default = Month;
exports["default"] = _default;