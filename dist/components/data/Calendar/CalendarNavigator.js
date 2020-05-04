"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var CalendarNavigator = /*#__PURE__*/function (_PureComponent) {
  _inherits(CalendarNavigator, _PureComponent);

  var _super = _createSuper(CalendarNavigator);

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

    _this = _super.call(this, props);
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
      return /*#__PURE__*/_react["default"].createElement(_Clickable["default"], {
        className: styles['nav-prev'],
        onClick: disabled ? function () {} : this.handleGoPrev,
        disabled: disabled
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
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
      return /*#__PURE__*/_react["default"].createElement(_Clickable["default"], {
        className: styles['nav-next'],
        onClick: disabled ? function () {} : this.handleGoNext,
        disabled: disabled
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: isVertical ? 'expand_more' : 'navigate_next',
        size: isVertical ? 'xl' : 'l',
        color: disabled ? 'primary-lightest' : 'primary'
      }));
    }
  }, {
    key: "renderNavigators",
    value: function renderNavigators() {
      var isVertical = this.state.isVertical;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: styles["nav-".concat(isVertical ? 'v' : 'h')]
      }, this.renderPrevButton(), this.renderNextButton());
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          className = _this$props.className,
          flexWidth = _this$props.flexWidth,
          children = _this$props.children;
      var isVertical = this.state.isVertical;
      var firstVisibleMonth = this.getFirstVisibleMonth();
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames2["default"])(className, styles['nav-holder'], (_classnames = {}, _defineProperty(_classnames, styles.flex, flexWidth), _defineProperty(_classnames, styles.vertical, isVertical), _classnames))
      }, this.renderNavigators(), isVertical && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['calendar-in-nav-v']
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
  className: _propTypes["default"].string,
  initialFirstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  firstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  minMonth: _propTypes["default"].instanceOf(_moment["default"]),
  maxMonth: _propTypes["default"].instanceOf(_moment["default"]),
  numberOfMonths: _propTypes["default"].number,
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical']),
  flexWidth: _propTypes["default"].bool,
  children: _propTypes["default"].func.isRequired,
  onChangeMonth: _propTypes["default"].func
};
CalendarNavigator.defaultProps = {
  className: '',
  initialFirstVisibleMonth: (0, _moment["default"])(),
  firstVisibleMonth: null,
  minMonth: null,
  maxMonth: null,
  numberOfMonths: 1,
  orientation: 'horizontal',
  flexWidth: false,
  onChangeMonth: function onChangeMonth() {}
};
var _default = CalendarNavigator;
exports["default"] = _default;