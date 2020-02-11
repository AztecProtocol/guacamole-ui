"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "popup-menu": "popup-4c089e3b",
  "tether": "popup-023cba98",
  "hide": "popup-b4c8fb11",
  "tether-content": "popup-97cebb8b",
  "placeHolderShimmer": "popup-ea7f262e"
};

var FlexPopupMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FlexPopupMenu, _PureComponent);

  function FlexPopupMenu(props) {
    var _this;

    _classCallCheck(this, FlexPopupMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlexPopupMenu).call(this, props));

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
          children = _this$props.children,
          hide = _this$props.hide;
      var offsetLeft = this.state.offsetLeft;
      return _react["default"].createElement("div", {
        ref: this.setTetherRef,
        className: (0, _classnames2["default"])(className, styles.tether, _defineProperty({}, styles.hide, hide))
      }, _react["default"].createElement("div", {
        className: styles['tether-content'],
        style: {
          marginLeft: "".concat(offsetLeft, "px")
        }
      }, children));
    }
  }]);

  return FlexPopupMenu;
}(_react.PureComponent);

FlexPopupMenu.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  hide: _propTypes["default"].bool
};
FlexPopupMenu.defaultProps = {
  className: '',
  hide: false
};
var _default = FlexPopupMenu;
exports["default"] = _default;