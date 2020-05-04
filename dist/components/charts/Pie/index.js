"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _calculateArcValuePosition = _interopRequireDefault(require("./utils/calculateArcValuePosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "pie-wrapper": "pie-e9dfe5db",
  "has-own-size": "pie-b42e4774",
  "pie-svg": "pie-526bcf4a",
  "pie": "pie-0099be90",
  "track": "pie-90fd199d",
  "content": "pie-88f545ee",
  "arc-value": "pie-e66b0d6f",
  "value": "pie-1f19614f",
  "stroke-primary": "pie-14d650e7",
  "inset": "pie-d576e58c",
  "track-primary": "pie-8247364e",
  "fill-primary": "pie-8cbaa526",
  "stroke-primary-light": "pie-31e35c49",
  "track-primary-light": "pie-07ad4ff8",
  "fill-primary-light": "pie-9fa7e41a",
  "stroke-primary-lighter": "pie-c28bcd4e",
  "track-primary-lighter": "pie-6abd07a2",
  "fill-primary-lighter": "pie-d5197fb1",
  "stroke-primary-lightest": "pie-59e66c14",
  "track-primary-lightest": "pie-22fdab34",
  "fill-primary-lightest": "pie-9de48779",
  "stroke-black": "pie-9befee51",
  "track-black": "pie-edc32729",
  "fill-black": "pie-2f0a4eaa",
  "stroke-grey-darker": "pie-4d89ef44",
  "track-grey-darker": "pie-05404fe4",
  "fill-grey-darker": "pie-aa851706",
  "stroke-grey-dark": "pie-c2798c63",
  "track-grey-dark": "pie-6f4eff60",
  "fill-grey-dark": "pie-5b588c89",
  "stroke-grey": "pie-d3084881",
  "track-grey": "pie-51e43a6a",
  "fill-grey": "pie-8f9c848f",
  "stroke-grey-light": "pie-b4f3434b",
  "track-grey-light": "pie-633cb063",
  "fill-grey-light": "pie-98d9aa4b",
  "stroke-grey-lighter": "pie-9caa3507",
  "track-grey-lighter": "pie-e9b2811a",
  "fill-grey-lighter": "pie-fe0f4155",
  "stroke-grey-lightest": "pie-d9e60f58",
  "track-grey-lightest": "pie-19f16c5c",
  "fill-grey-lightest": "pie-9e67442a",
  "stroke-white": "pie-45bddd25",
  "track-white": "pie-3c63e488",
  "fill-white": "pie-74cfc3dd",
  "stroke-white-light": "pie-b502fe4c",
  "track-white-light": "pie-cd9d7f56",
  "fill-white-light": "pie-b49cfc5e",
  "stroke-white-lighter": "pie-8964c4ee",
  "track-white-lighter": "pie-b7570715",
  "fill-white-lighter": "pie-16530971",
  "stroke-white-lightest": "pie-1f792aa5",
  "track-white-lightest": "pie-65452c8a",
  "fill-white-lightest": "pie-424bc37c",
  "stroke-transparent": "pie-fbde7ff6",
  "track-transparent": "pie-3d62d5cd",
  "fill-transparent": "pie-e3b6d7ad",
  "stroke-secondary": "pie-00ce96b3",
  "track-secondary": "pie-dc1b318f",
  "fill-secondary": "pie-ac3d2391",
  "stroke-secondary-light": "pie-cd27091e",
  "track-secondary-light": "pie-b65c11b7",
  "fill-secondary-light": "pie-7ef1be9f",
  "stroke-secondary-lighter": "pie-54bbc857",
  "track-secondary-lighter": "pie-f3015da5",
  "fill-secondary-lighter": "pie-8529d440",
  "stroke-secondary-lightest": "pie-e2b438cf",
  "track-secondary-lightest": "pie-c0032f5a",
  "fill-secondary-lightest": "pie-0aacabeb",
  "stroke-pink": "pie-98b487ed",
  "track-pink": "pie-66312b3d",
  "fill-pink": "pie-d3fcbba4",
  "stroke-red": "pie-1d0c29da",
  "track-red": "pie-041abb7b",
  "fill-red": "pie-3a7b0091",
  "stroke-purple": "pie-20aa4a73",
  "track-purple": "pie-84f271b3",
  "fill-purple": "pie-af2f4f01",
  "stroke-blue": "pie-9d1131fd",
  "track-blue": "pie-a805a1cb",
  "fill-blue": "pie-ca59c077",
  "stroke-green": "pie-b9223d79",
  "track-green": "pie-a00bbac0",
  "fill-green": "pie-2d90bce8",
  "stroke-yellow": "pie-bf486fe5",
  "track-yellow": "pie-ca9f8c33",
  "fill-yellow": "pie-c20a5e70",
  "stroke-orange": "pie-4a39d2a0",
  "track-orange": "pie-cacd15e4",
  "fill-orange": "pie-28fbed65",
  "stroke-brown": "pie-fb5aaafd",
  "track-brown": "pie-df94d574",
  "fill-brown": "pie-e368b4dd"
};

var Pie = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pie, _PureComponent);

  var _super = _createSuper(Pie);

  _createClass(Pie, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value;
      var prevValue = prevState.value,
          radius = prevState.radius;

      if (!radius || prevValue === null) {
        return null;
      }

      return {
        value: value
      };
    }
  }]);

  function Pie(props) {
    var _this;

    _classCallCheck(this, Pie);

    _this = _super.call(this, props);
    var value = props.value,
        radius = props.radius,
        delay = props.delay;
    _this.hasOwnSize = radius !== null;
    _this.state = {
      value: !delay && _this.hasOwnSize ? value : null,
      radius: 0
    };
    _this.wrapper = null;
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setRadius();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var radius = this.state.radius;

      if (!prevState.radius && radius) {
        var delay = this.props.delay;
        setTimeout(function () {
          _this2.applyValue();
        }, delay);
      }
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(ref) {
      this.wrapper = ref;
    }
  }, {
    key: "setRadius",
    value: function setRadius() {
      if (this.hasOwnSize) {
        var radius = this.props.radius;
        this.setState({
          radius: radius
        });
      } else if (this.wrapper) {
        var _this$wrapper$getBoun = this.wrapper.getBoundingClientRect(),
            width = _this$wrapper$getBoun.width;

        this.setState({
          radius: width / 2
        });
      }
    }
  }, {
    key: "applyValue",
    value: function applyValue() {
      var value = this.props.value;
      this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          testId = _this$props.testId,
          className = _this$props.className,
          startDeg = _this$props.startDeg,
          strokeWidth = _this$props.strokeWidth,
          strokeColor = _this$props.strokeColor,
          trackColor = _this$props.trackColor,
          fill = _this$props.fill,
          children = _this$props.children,
          showArcValue = _this$props.showArcValue,
          showTrack = _this$props.showTrack;
      var _this$state = this.state,
          value = _this$state.value,
          radius = _this$state.radius;
      var circleRadius = radius - strokeWidth / 2;
      var perimeter = 2 * circleRadius * Math.PI;
      var restrictedValue = Math.min(100, Math.max(0, value || 0));
      var valueLen = perimeter * (restrictedValue / 100);
      var startOffset = perimeter * (startDeg / 360);
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.setWrapperRef,
        "data-testid": testId,
        className: (0, _classnames4["default"])(className, styles['pie-wrapper'], styles["stroke-".concat(strokeColor)], (_classnames = {}, _defineProperty(_classnames, styles['has-own-size'], this.hasOwnSize), _defineProperty(_classnames, styles["fill-".concat(fill)], fill), _classnames), {}),
        style: !this.hasOwnSize ? null : {
          width: "".concat(radius * 2, "px"),
          height: "".concat(radius * 2, "px")
        }
      }, circleRadius > 0 && /*#__PURE__*/_react["default"].createElement("svg", {
        className: styles['pie-svg'],
        width: radius * 2,
        height: radius * 2
      }, showTrack && /*#__PURE__*/_react["default"].createElement("circle", {
        className: (0, _classnames4["default"])(styles.pie, styles.track, _defineProperty({}, styles["track-".concat(trackColor)], trackColor)),
        cx: radius,
        cy: radius,
        r: circleRadius,
        style: {
          strokeWidth: "".concat(strokeWidth, "px")
        }
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        className: styles.pie,
        cx: radius,
        cy: radius,
        r: circleRadius,
        style: {
          strokeWidth: "".concat(strokeWidth, "px"),
          strokeDasharray: "".concat(valueLen, "px ").concat(perimeter - valueLen, "px"),
          strokeDashoffset: valueLen - perimeter + startOffset
        }
      })), children && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.content
      }, children), showArcValue && circleRadius > 0 && value !== null && function () {
        var MIN_FONT_SIZE = 10;
        var fontSize = Math.max(strokeWidth * 0.42, MIN_FONT_SIZE);

        var _calculateArcValuePos = (0, _calculateArcValuePosition["default"])({
          radius: radius,
          strokeWidth: strokeWidth,
          startDeg: startDeg,
          value: value,
          outsideOfArc: fontSize === MIN_FONT_SIZE
        }),
            x = _calculateArcValuePos.x,
            y = _calculateArcValuePos.y,
            inset = _calculateArcValuePos.inset;

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: styles['arc-value'],
          style: {
            top: "".concat(y, "px"),
            left: "".concat(x, "px")
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames4["default"])(styles.value, _defineProperty({}, styles.inset, inset)),
          style: {
            fontSize: "".concat(fontSize, "px")
          }
        }, "".concat(value, "%")));
      }());
    }
  }]);

  return Pie;
}(_react.PureComponent);

Pie.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  radius: _propTypes["default"].number,
  value: _propTypes["default"].number.isRequired,
  startDeg: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  strokeColor: _propTypes["default"].oneOf(_styleConstants.colorNames),
  trackColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  fill: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  children: _propTypes["default"].node,
  showArcValue: _propTypes["default"].bool,
  showTrack: _propTypes["default"].bool,
  delay: _propTypes["default"].number
};
Pie.defaultProps = {
  testId: undefined,
  className: '',
  radius: null,
  strokeWidth: 24,
  startDeg: 0,
  strokeColor: 'secondary',
  trackColor: '',
  fill: '',
  children: null,
  showArcValue: false,
  showTrack: false,
  delay: 1000
};
var _default = Pie;
exports["default"] = _default;