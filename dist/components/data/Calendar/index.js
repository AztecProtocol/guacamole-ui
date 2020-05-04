"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _date = require("../../../utils/date");

var _toMonthKey = _interopRequireDefault(require("../../../utils/calendar/toMonthKey"));

var _getVisibleMonthsOfCalendar = _interopRequireDefault(require("../../../utils/calendar/getVisibleMonthsOfCalendar"));

var _Month = _interopRequireDefault(require("./Month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Calendar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
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
          daysStatus: daysStatus[(0, _toMonthKey["default"])(month)],
          onSelectDay: onSelectDay,
          onHoverDay: onHoverDay,
          onBlurDay: onBlurDay
        };

        var monthNode = /*#__PURE__*/_react["default"].createElement(_Month["default"], _extends({
          key: (0, _toMonthKey["default"])(month)
        }, monthProps));

        return renderMonth(_objectSpread({}, monthProps, {
          children: monthNode
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          orientation = _this$props2.orientation,
          flexWidth = _this$props2.flexWidth,
          onSelectDay = _this$props2.onSelectDay;
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-testid": testId,
        className: (0, _classnames2["default"])(className, (_classnames = {}, _defineProperty(_classnames, styles['calendar-v'], !flexWidth && orientation === 'vertical'), _defineProperty(_classnames, styles['calendar-h'], !flexWidth && orientation === 'horizontal'), _defineProperty(_classnames, styles['calendar-flex'], flexWidth), _defineProperty(_classnames, styles.interactive, onSelectDay), _classnames))
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
        months: (0, _getVisibleMonthsOfCalendar["default"])({
          firstVisibleMonth: firstVisibleMonth,
          numberOfMonths: numberOfMonths
        })
      };
    }
  }]);

  return Calendar;
}(_react.PureComponent);

Calendar.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  firstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  monthNameFormat: _propTypes["default"].string,
  numberOfMonths: _propTypes["default"].number,
  startOfWeek: _propTypes["default"].number,
  showOutsideDays: _propTypes["default"].bool,
  flexWidth: _propTypes["default"].bool,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  daysStatus: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  onSelectDay: _propTypes["default"].func,
  onHoverDay: _propTypes["default"].func,
  onBlurDay: _propTypes["default"].func,
  renderMonth: _propTypes["default"].func
};
Calendar.defaultProps = {
  testId: undefined,
  className: '',
  firstVisibleMonth: (0, _moment["default"])(),
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
var _default = Calendar;
exports["default"] = _default;