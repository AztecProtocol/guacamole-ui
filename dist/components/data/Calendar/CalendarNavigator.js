"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var CalendarNavigator =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CalendarNavigator, _PureComponent);

  _createClass(CalendarNavigator, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var orientation = nextProps.orientation;
      var isVertical = orientation === 'vertical';

      if (isVertical === prevState.isVertical) {
        return null;
      }

      return {
        isVertical: isVertical
      };
    }
  }]);

  function CalendarNavigator(props) {
    var _this;

    _classCallCheck(this, CalendarNavigator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarNavigator).call(this, props));
    var firstVisibleMonth = props.firstVisibleMonth,
        initialFirstVisibleMonth = props.initialFirstVisibleMonth,
        orientation = props.orientation;
    _this.isControlled = !!firstVisibleMonth;
    _this.state = {
      isVertical: orientation === 'vertical',
      firstVisibleMonth: _this.isControlled ? undefined : initialFirstVisibleMonth
    };
    _this.handleGoPrev = _this.handleGoPrev.bind(_assertThisInitialized(_this));
    _this.handleGoNext = _this.handleGoNext.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CalendarNavigator, [{
    key: "getFirstVisibleMonth",
    value: function getFirstVisibleMonth() {
      var controlledFirstVisibleMonth = this.props.firstVisibleMonth;
      var firstVisibleMonth = this.state.firstVisibleMonth;
      return this.isControlled ? controlledFirstVisibleMonth : firstVisibleMonth;
    }
  }, {
    key: "canGoPrev",
    value: function canGoPrev() {
      var minMonth = this.props.minMonth;
      var firstVisibleMonth = this.getFirstVisibleMonth();
      return !minMonth || minMonth.isBefore(firstVisibleMonth, 'month');
    }
  }, {
    key: "canGoNext",
    value: function canGoNext() {
      var maxMonth = this.props.maxMonth;

      if (!maxMonth) {
        return true;
      }

      var firstVisibleMonth = this.getFirstVisibleMonth();
      var numberOfMonths = this.props.numberOfMonths;
      return firstVisibleMonth.clone().add(numberOfMonths - 1, 'month').isBefore(maxMonth, 'month');
    }
  }, {
    key: "handleChangeMonth",
    value: function handleChangeMonth(firstVisibleMonth) {
      if (!this.isControlled) {
        this.setState({
          firstVisibleMonth: firstVisibleMonth
        });
      }

      var onChangeMonth = this.props.onChangeMonth;
      onChangeMonth(firstVisibleMonth);
    }
  }, {
    key: "handleGoPrev",
    value: function handleGoPrev() {
      var firstVisibleMonth = this.getFirstVisibleMonth();
      var prevMonth = firstVisibleMonth.clone().subtract(1, 'month');
      this.handleChangeMonth(prevMonth);
    }
  }, {
    key: "handleGoNext",
    value: function handleGoNext() {
      var firstVisibleMonth = this.getFirstVisibleMonth();
      var nextMonth = firstVisibleMonth.clone().add(1, 'month');
      this.handleChangeMonth(nextMonth);
    }
  }, {
    key: "renderPrevButton",
    value: function renderPrevButton() {
      var disabled = !this.canGoPrev();
      var isVertical = this.state.isVertical;
      return _react.default.createElement(_Clickable.default, {
        styleName: "nav-prev",
        onClick: disabled ? function () {} : this.handleGoPrev,
        disabled: disabled
      }, _react.default.createElement(_Icon.default, {
        name: isVertical ? 'expand_less' : 'navigate_before',
        size: isVertical ? 'xl' : 'l',
        color: disabled ? 'primary-lightest' : 'primary'
      }));
    }
  }, {
    key: "renderNextButton",
    value: function renderNextButton() {
      var disabled = !this.canGoNext();
      var isVertical = this.state.isVertical;
      return _react.default.createElement(_Clickable.default, {
        styleName: "nav-next",
        onClick: disabled ? function () {} : this.handleGoNext,
        disabled: disabled
      }, _react.default.createElement(_Icon.default, {
        name: isVertical ? 'expand_more' : 'navigate_next',
        size: isVertical ? 'xl' : 'l',
        color: disabled ? 'primary-lightest' : 'primary'
      }));
    }
  }, {
    key: "renderNavigators",
    value: function renderNavigators() {
      var isVertical = this.state.isVertical;
      return _react.default.createElement("div", {
        styleName: "nav-".concat(isVertical ? 'v' : 'h')
      }, this.renderPrevButton(), this.renderNextButton());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          flexWidth = _this$props.flexWidth,
          children = _this$props.children;
      var isVertical = this.state.isVertical;
      var firstVisibleMonth = this.getFirstVisibleMonth();
      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames.default)('nav-holder', {
          flex: flexWidth,
          vertical: isVertical
        })
      }, this.renderNavigators(), isVertical && _react.default.createElement("div", {
        styleName: "calendar-in-nav-v"
      }, children({
        firstVisibleMonth: firstVisibleMonth
      })), !isVertical && children({
        firstVisibleMonth: firstVisibleMonth
      }));
    }
  }]);

  return CalendarNavigator;
}(_react.PureComponent);

CalendarNavigator.propTypes = {
  className: _propTypes.default.string,
  initialFirstVisibleMonth: _propTypes.default.instanceOf(_moment.default),
  firstVisibleMonth: _propTypes.default.instanceOf(_moment.default),
  minMonth: _propTypes.default.instanceOf(_moment.default),
  maxMonth: _propTypes.default.instanceOf(_moment.default),
  numberOfMonths: _propTypes.default.number,
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),
  flexWidth: _propTypes.default.bool,
  children: _propTypes.default.func.isRequired,
  onChangeMonth: _propTypes.default.func
};
CalendarNavigator.defaultProps = {
  className: '',
  initialFirstVisibleMonth: (0, _moment.default)(),
  firstVisibleMonth: null,
  minMonth: null,
  maxMonth: null,
  numberOfMonths: 1,
  orientation: 'horizontal',
  flexWidth: false,
  onChangeMonth: function onChangeMonth() {}
};

var _default = (0, _reactCssModules.default)(CalendarNavigator, styles, {
  allowMultiple: true
});

exports.default = _default;