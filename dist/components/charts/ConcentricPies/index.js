"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConcentricPies = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

var _Pie = _interopRequireDefault(require("../Pie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "wrapper": "pies-2e573cad",
  "centered": "pies-1388b3c6"
};

var ConcentricPies =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ConcentricPies, _PureComponent);

  function ConcentricPies() {
    _classCallCheck(this, ConcentricPies);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConcentricPies).apply(this, arguments));
  }

  _createClass(ConcentricPies, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          pies = _this$props.pies,
          startDeg = _this$props.startDeg,
          defaultStrokeWidth = _this$props.strokeWidth,
          defaultStrokeColor = _this$props.strokeColor,
          children = _this$props.children;
      var numberOfPies = pies.length;
      var accumRadius = 0;
      return _react.default.createElement("div", {
        className: className,
        styleName: "wrapper"
      }, pies.map(function (_ref, i) {
        var value = _ref.value,
            _ref$spacing = _ref.spacing,
            spacing = _ref$spacing === void 0 ? defaultStrokeWidth : _ref$spacing,
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === void 0 ? defaultStrokeWidth : _ref$strokeWidth,
            _ref$strokeColor = _ref.strokeColor,
            strokeColor = _ref$strokeColor === void 0 ? defaultStrokeColor : _ref$strokeColor,
            trackColor = _ref.trackColor,
            fill = _ref.fill,
            showArcValue = _ref.showArcValue,
            showTrack = _ref.showTrack,
            delay = _ref.delay;
        accumRadius += spacing + strokeWidth;
        return _react.default.createElement(_Pie.default, {
          key: +i,
          styleName: i === numberOfPies - 1 ? '' : 'centered',
          value: value,
          radius: accumRadius,
          startDeg: startDeg,
          strokeWidth: strokeWidth,
          strokeColor: strokeColor,
          trackColor: trackColor,
          fill: fill,
          showArcValue: showArcValue,
          showTrack: showTrack,
          delay: delay
        });
      }).reverse(), children && _react.default.createElement("div", {
        styleName: "centered"
      }, children));
    }
  }]);

  return ConcentricPies;
}(_react.PureComponent);

exports.ConcentricPies = ConcentricPies;
ConcentricPies.propTypes = {
  className: _propTypes.default.string,
  pies: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.number.isRequired,
    spacing: _propTypes.default.number,
    strokeWidth: _propTypes.default.number,
    strokeColor: _propTypes.default.oneOf(_styleConstants.colorNames),
    trackColor: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
    fill: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
    showArcValue: _propTypes.default.bool,
    showTrack: _propTypes.default.bool,
    delay: _propTypes.default.number
  })).isRequired,
  startDeg: _propTypes.default.number,
  strokeWidth: _propTypes.default.number,
  strokeColor: _propTypes.default.oneOf(_styleConstants.colorNames),
  children: _propTypes.default.node
};
ConcentricPies.defaultProps = {
  className: '',
  startDeg: 0,
  strokeWidth: 24,
  strokeColor: 'secondary',
  children: null
};

var _default = (0, _reactCssModules.default)(ConcentricPies, styles);

exports.default = _default;