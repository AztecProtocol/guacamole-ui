"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layout = require("../../../config/layout");

var _styleConstants = require("../../../config/styleConstants");

var _deviceWidthDetector = _interopRequireDefault(require("./deviceWidthDetector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeviceWidthListener = /*#__PURE__*/function (_PureComponent) {
  _inherits(DeviceWidthListener, _PureComponent);

  var _super = _createSuper(DeviceWidthListener);

  function DeviceWidthListener(props, context) {
    var _this;

    _classCallCheck(this, DeviceWidthListener);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleChangeDeviceWidth", function (currentSize) {
      var lt = {};
      var gt = {};
      var lte = {};
      var gte = {};
      var breakpoints = _this.props.breakpoints;
      var gteCurrent = false;

      _this.orderedKeys.forEach(function (size) {
        var isTrackinbg = breakpoints.indexOf(size) >= 0;

        if (isTrackinbg) {
          lt[size] = gteCurrent;
          lte[size] = gteCurrent || size === currentSize;
        }

        if (size === currentSize) {
          gteCurrent = true;
        }

        if (isTrackinbg) {
          gt[size] = !gteCurrent;
          gte[size] = !gteCurrent || size === currentSize;
        }
      });

      _this.setState({
        lt: lt,
        lte: lte,
        gt: gt,
        gte: gte
      });
    });

    var breakpointSizeMap = props.breakpointSizeMap,
        _breakpoints = props.breakpoints,
        ssr = props.ssr;
    _this.orderedKeys = _deviceWidthDetector["default"].orderedKeys;

    var _deviceWidthDetector$ = _deviceWidthDetector["default"].register({
      breakpointSizeMap: breakpointSizeMap,
      breakpoints: _breakpoints,
      listener: _this.handleChangeDeviceWidth,
      ssr: ssr
    }),
        _gt = _deviceWidthDetector$.gt,
        _gte = _deviceWidthDetector$.gte,
        _lt = _deviceWidthDetector$.lt,
        _lte = _deviceWidthDetector$.lte;

    _this.state = {
      gt: _gt,
      gte: _gte,
      lt: _lt,
      lte: _lte
    };
    return _this;
  }

  _createClass(DeviceWidthListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ssr = this.props.ssr;

      if (ssr) {
        this.registerToDetector();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      var breakpoints = this.props.breakpoints;
      breakpoints.forEach(function (breakpoint) {
        _deviceWidthDetector["default"].unsubscribe(breakpoint, _this2.handleChangeDeviceWidth);
      });
    }
  }, {
    key: "registerToDetector",
    value: function registerToDetector() {
      var _this$props = this.props,
          breakpointSizeMap = _this$props.breakpointSizeMap,
          breakpoints = _this$props.breakpoints;

      var _deviceWidthDetector$2 = _deviceWidthDetector["default"].register({
        breakpointSizeMap: breakpointSizeMap,
        breakpoints: breakpoints,
        listener: this.handleChangeDeviceWidth
      }),
          gt = _deviceWidthDetector$2.gt,
          gte = _deviceWidthDetector$2.gte,
          lt = _deviceWidthDetector$2.lt,
          lte = _deviceWidthDetector$2.lte;

      _deviceWidthDetector["default"].updateByWindowSize();

      this.setState({
        gt: gt,
        gte: gte,
        lt: lt,
        lte: lte
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children(this.state);
    }
  }]);

  return DeviceWidthListener;
}(_react.PureComponent);

var breakpointSizeMapShape = {};

_styleConstants.deviceBreakpointKeys.forEach(function (key) {
  breakpointSizeMapShape[key] = _propTypes["default"].string;
});

DeviceWidthListener.propTypes = {
  breakpointSizeMap: _propTypes["default"].shape(breakpointSizeMapShape),
  breakpoints: _propTypes["default"].arrayOf(_propTypes["default"].oneOf(_styleConstants.deviceBreakpointKeys)).isRequired,
  children: _propTypes["default"].func.isRequired,
  ssr: _propTypes["default"].bool
};
DeviceWidthListener.defaultProps = {
  breakpointSizeMap: _layout.deviceBreakpointMap,
  ssr: false
};
var _default = DeviceWidthListener;
exports["default"] = _default;