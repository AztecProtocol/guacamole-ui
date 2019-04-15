"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  "popup-menu": "popup__popup-menu___1lwx_",
  "tether": "popup__tether___3n00O",
  "hide": "popup__hide___hbCdo",
  "tether-content": "popup__tether-content___qYUAy",
  "placeHolderShimmer": "popup__placeHolderShimmer___1kkR6"
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
      return _react.default.createElement("div", {
        ref: this.setTetherRef,
        className: className,
        styleName: (0, _classnames.default)('tether', {
          hide: hide
        })
      }, _react.default.createElement("div", {
        styleName: "tether-content",
        style: {
          marginLeft: "".concat(offsetLeft, "px")
        }
      }, children));
    }
  }]);

  return FlexPopupMenu;
}(_react.PureComponent);

FlexPopupMenu.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  hide: _propTypes.default.bool
};
FlexPopupMenu.defaultProps = {
  className: '',
  hide: false
};

var _default = (0, _reactCssModules.default)(FlexPopupMenu, styles, {
  allowMultiple: true
});

exports.default = _default;