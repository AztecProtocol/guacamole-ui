"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Pie = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _colors = require("../../../config/colors");

var _calculateArcValuePosition = _interopRequireDefault(require("./utils/calculateArcValuePosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "pie-wrapper": "pie__pie-wrapper___V99mr",
  "has-own-size": "pie__has-own-size___3mh55",
  "pie-svg": "pie__pie-svg___1PlWz",
  "pie": "pie__pie___2xzFt",
  "track": "pie__track___1yPEz",
  "content": "pie__content___1n4lI",
  "arc-value": "pie__arc-value___1iDIN",
  "value": "pie__value___2zO28",
  "stroke-primary": "pie__stroke-primary___1jE2M",
  "inset": "pie__inset___3K6Je",
  "track-primary": "pie__track-primary___1EJhU",
  "fill-primary": "pie__fill-primary___1dy8p",
  "stroke-primary-light": "pie__stroke-primary-light___2AKXs",
  "track-primary-light": "pie__track-primary-light___2gvCQ",
  "fill-primary-light": "pie__fill-primary-light___2sUJ4",
  "stroke-primary-lighter": "pie__stroke-primary-lighter___29xx7",
  "track-primary-lighter": "pie__track-primary-lighter___1SCku",
  "fill-primary-lighter": "pie__fill-primary-lighter___3_LDU",
  "stroke-primary-lightest": "pie__stroke-primary-lightest___8su19",
  "track-primary-lightest": "pie__track-primary-lightest___3hKDl",
  "fill-primary-lightest": "pie__fill-primary-lightest___3iQC9",
  "stroke-black": "pie__stroke-black___2mtpC",
  "track-black": "pie__track-black___OPzdn",
  "fill-black": "pie__fill-black___3TteI",
  "stroke-grey-darker": "pie__stroke-grey-darker___2t3oZ",
  "track-grey-darker": "pie__track-grey-darker___2cYYN",
  "fill-grey-darker": "pie__fill-grey-darker___OvYYm",
  "stroke-grey-dark": "pie__stroke-grey-dark___3HT1y",
  "track-grey-dark": "pie__track-grey-dark___2znvw",
  "fill-grey-dark": "pie__fill-grey-dark___3TKee",
  "stroke-grey": "pie__stroke-grey___NP2-a",
  "track-grey": "pie__track-grey___3knaI",
  "fill-grey": "pie__fill-grey___20Iwi",
  "stroke-grey-light": "pie__stroke-grey-light___6Gi8-",
  "track-grey-light": "pie__track-grey-light___1l1S1",
  "fill-grey-light": "pie__fill-grey-light___1UcM9",
  "stroke-grey-lighter": "pie__stroke-grey-lighter___3-Mmf",
  "track-grey-lighter": "pie__track-grey-lighter___3Ef6A",
  "fill-grey-lighter": "pie__fill-grey-lighter___3ro4U",
  "stroke-grey-lightest": "pie__stroke-grey-lightest___3NOQE",
  "track-grey-lightest": "pie__track-grey-lightest___2Wfl9",
  "fill-grey-lightest": "pie__fill-grey-lightest___1NG3Q",
  "stroke-white": "pie__stroke-white___1xE-G",
  "track-white": "pie__track-white___3_KF3",
  "fill-white": "pie__fill-white___1jQGR",
  "stroke-white-light": "pie__stroke-white-light___2Y2Qv",
  "track-white-light": "pie__track-white-light___3rbZd",
  "fill-white-light": "pie__fill-white-light___2CBMg",
  "stroke-white-lighter": "pie__stroke-white-lighter___1VBDv",
  "track-white-lighter": "pie__track-white-lighter___2sJVD",
  "fill-white-lighter": "pie__fill-white-lighter___1xuOh",
  "stroke-white-lightest": "pie__stroke-white-lightest___N8ATs",
  "track-white-lightest": "pie__track-white-lightest___3eZ-r",
  "fill-white-lightest": "pie__fill-white-lightest___3ovQO",
  "stroke-secondary": "pie__stroke-secondary___2MZFX",
  "track-secondary": "pie__track-secondary___3PN4-",
  "fill-secondary": "pie__fill-secondary___2EKox",
  "stroke-secondary-light": "pie__stroke-secondary-light___3p3kj",
  "track-secondary-light": "pie__track-secondary-light___uSiO-",
  "fill-secondary-light": "pie__fill-secondary-light___RFfJt",
  "stroke-secondary-lighter": "pie__stroke-secondary-lighter___3A4u7",
  "track-secondary-lighter": "pie__track-secondary-lighter___2xAy4",
  "fill-secondary-lighter": "pie__fill-secondary-lighter___shD1o",
  "stroke-secondary-lightest": "pie__stroke-secondary-lightest___1yVJr",
  "track-secondary-lightest": "pie__track-secondary-lightest___2rjaW",
  "fill-secondary-lightest": "pie__fill-secondary-lightest___sYIaW",
  "stroke-red": "pie__stroke-red___27a8o",
  "track-red": "pie__track-red___1vUHP",
  "fill-red": "pie__fill-red___2hfNE",
  "stroke-green": "pie__stroke-green___TFr0r",
  "track-green": "pie__track-green___3jNZ9",
  "fill-green": "pie__fill-green___2nyn3",
  "stroke-blue": "pie__stroke-blue___2ZF9Z",
  "track-blue": "pie__track-blue___2ad4H",
  "fill-blue": "pie__fill-blue___1Hysp",
  "stroke-yellow": "pie__stroke-yellow___21Xro",
  "track-yellow": "pie__track-yellow___1JQgO",
  "fill-yellow": "pie__fill-yellow___3iKZR"
};

var Pie =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Pie, _PureComponent);

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pie).call(this, props));
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
      var _this$props = this.props,
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
      return _react.default.createElement("div", {
        ref: this.setWrapperRef,
        className: className,
        styleName: (0, _classnames3.default)('pie-wrapper', "stroke-".concat(strokeColor), _defineProperty({
          'has-own-size': this.hasOwnSize
        }, "fill-".concat(fill), fill), {}),
        style: !this.hasOwnSize ? null : {
          width: "".concat(radius * 2, "px"),
          height: "".concat(radius * 2, "px")
        }
      }, circleRadius > 0 && _react.default.createElement("svg", {
        styleName: "pie-svg",
        width: radius * 2,
        height: radius * 2
      }, showTrack && _react.default.createElement("circle", {
        styleName: (0, _classnames3.default)('pie', 'track', _defineProperty({}, "track-".concat(trackColor), trackColor)),
        cx: radius,
        cy: radius,
        r: circleRadius,
        style: {
          strokeWidth: "".concat(strokeWidth, "px")
        }
      }), _react.default.createElement("circle", {
        styleName: "pie",
        cx: radius,
        cy: radius,
        r: circleRadius,
        style: {
          strokeWidth: "".concat(strokeWidth, "px"),
          strokeDasharray: "".concat(valueLen, "px ").concat(perimeter - valueLen, "px"),
          strokeDashoffset: valueLen - perimeter + startOffset
        }
      })), children && _react.default.createElement("div", {
        styleName: "content"
      }, children), showArcValue && circleRadius > 0 && value !== null && function () {
        var MIN_FONT_SIZE = 10;
        var fontSize = Math.max(strokeWidth * 0.42, MIN_FONT_SIZE);

        var _calculateArcValuePos = (0, _calculateArcValuePosition.default)({
          radius: radius,
          strokeWidth: strokeWidth,
          startDeg: startDeg,
          value: value,
          outsideOfArc: fontSize === MIN_FONT_SIZE
        }),
            x = _calculateArcValuePos.x,
            y = _calculateArcValuePos.y,
            inset = _calculateArcValuePos.inset;

        return _react.default.createElement("div", {
          styleName: "arc-value",
          style: {
            top: "".concat(y, "px"),
            left: "".concat(x, "px")
          }
        }, _react.default.createElement("div", {
          styleName: (0, _classnames3.default)('value', {
            inset: inset
          }),
          style: {
            fontSize: "".concat(fontSize, "px")
          }
        }, "".concat(value, "%")));
      }());
    }
  }]);

  return Pie;
}(_react.PureComponent);

exports.Pie = Pie;
Pie.propTypes = {
  className: _propTypes.default.string,
  radius: _propTypes.default.number,
  value: _propTypes.default.number.isRequired,
  startDeg: _propTypes.default.number,
  strokeWidth: _propTypes.default.number,
  strokeColor: _propTypes.default.oneOf(_colors.colorNames),
  trackColor: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.colorNames))),
  fill: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.colorNames))),
  children: _propTypes.default.node,
  showArcValue: _propTypes.default.bool,
  showTrack: _propTypes.default.bool,
  delay: _propTypes.default.number
};
Pie.defaultProps = {
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

var _default = (0, _reactCssModules.default)(Pie, styles, {
  allowMultiple: true
});

exports.default = _default;