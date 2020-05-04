"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _inputs = require("../../../config/inputs");

var _Block = _interopRequireDefault(require("../../layout/Block"));

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

var styles = {
  "popup-menu": "popup-4c089e3b",
  "tether": "popup-023cba98",
  "hide": "popup-b4c8fb11",
  "tether-content": "popup-97cebb8b",
  "top-xxs": "popup-1e4153bc",
  "top-xs": "popup-dc5549ca",
  "top-s": "popup-71a32b94",
  "top-m": "popup-394c02ad",
  "top-l": "popup-4f460d7e",
  "top-xl": "popup-5ed62814",
  "top-xxl": "popup-41a08070"
};

var FlexPopupMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(FlexPopupMenu, _PureComponent);

  var _super = _createSuper(FlexPopupMenu);

  function FlexPopupMenu(props) {
    var _this;

    _classCallCheck(this, FlexPopupMenu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setTetherRef", function (ref) {
      _this.tether = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adjustTetherPosition", function () {
      if (!_this.tether) return;

      var _this$tether$getBound = _this.tether.getBoundingClientRect(),
          left = _this$tether$getBound.left,
          width = _this$tether$getBound.width;

      var windowWidth = typeof window !== 'undefined' && window.innerWidth || 0;
      var shiftLeft = width + left - windowWidth;
      var offsetLeft = Math.min(-shiftLeft, 0);
      var prevOffsetLeft = _this.state.offsetLeft;

      if (offsetLeft !== prevOffsetLeft) {
        _this.setState({
          offsetLeft: offsetLeft
        });
      }
    });

    _this.state = {
      offsetLeft: 0
    };
    _this.tether = null;
    return _this;
  }

  _createClass(FlexPopupMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.adjustTetherPosition();
      window.addEventListener('resize', this.adjustTetherPosition, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.adjustTetherPosition, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          background = _this$props.background,
          borderColor = _this$props.borderColor,
          borderRadius = _this$props.borderRadius,
          layer = _this$props.layer,
          offsetTop = _this$props.offsetTop,
          children = _this$props.children,
          hide = _this$props.hide;
      var offsetLeft = this.state.offsetLeft;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.setTetherRef,
        className: (0, _classnames3["default"])(className, styles.tether, _defineProperty({}, styles.hide, hide))
      }, /*#__PURE__*/_react["default"].createElement(_Block["default"], {
        className: (0, _classnames3["default"])(styles['tether-content'], _defineProperty({}, styles["top-".concat(offsetTop)], offsetTop)),
        style: {
          marginLeft: "".concat(offsetLeft, "px")
        },
        background: background,
        borderColor: borderColor,
        borderRadius: borderRadius,
        layer: layer
      }, children));
    }
  }]);

  return FlexPopupMenu;
}(_react.PureComponent);

FlexPopupMenu.propTypes = {
  className: _propTypes["default"].string,
  background: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
  borderColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  borderRadius: _propTypes["default"].oneOf(_styleConstants.roundedCornerKeys),
  layer: _propTypes["default"].oneOf(_styleConstants.shadowLayerKeys),
  offsetTop: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.sizeKeys))),
  children: _propTypes["default"].node.isRequired,
  hide: _propTypes["default"].bool
};
FlexPopupMenu.defaultProps = {
  className: '',
  background: _inputs.inputMenuDefaultBackground,
  borderColor: _inputs.inputMenuBorderColor,
  borderRadius: _inputs.inputMenuBorderRadius,
  layer: _inputs.inputMenuLayer,
  offsetTop: _inputs.inputMenuOffsetTop,
  hide: false
};
var _default = FlexPopupMenu;
exports["default"] = _default;