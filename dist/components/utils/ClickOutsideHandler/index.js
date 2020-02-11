"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var ClickOutsideHandler =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ClickOutsideHandler, _PureComponent);

  function ClickOutsideHandler(props) {
    var _this;

    _classCallCheck(this, ClickOutsideHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClickOutsideHandler).call(this, props));
    _this.wrapper = null;
    _this.setWrapperRef = _this.setWrapperRef.bind(_assertThisInitialized(_this));
    _this.onClickOutside = _this.onClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ClickOutsideHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.bindClickEvent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var disabled = this.props.disabled;
      var prevDisabled = prevProps.disabled;

      if (disabled !== prevDisabled) {
        if (disabled) {
          this.unbindClickEvent();
        } else {
          this.bindClickEvent();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindClickEvent();
    }
  }, {
    key: "onClickOutside",
    value: function onClickOutside(e) {
      if (this.wrapper.contains(e.target)) return;
      var _this$props = this.props,
          stopPropagation = _this$props.stopPropagation,
          onClickOutside = _this$props.onClickOutside;

      if (stopPropagation) {
        e.stopPropagation();
      }

      onClickOutside(e);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(ref) {
      this.wrapper = ref;
    }
  }, {
    key: "bindClickEvent",
    value: function bindClickEvent() {
      document.addEventListener('click', this.onClickOutside, true);
    }
  }, {
    key: "unbindClickEvent",
    value: function unbindClickEvent() {
      document.removeEventListener('click', this.onClickOutside, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          children = _this$props2.children;
      return _react["default"].createElement("div", {
        ref: this.setWrapperRef,
        "data-testid": testId,
        className: className
      }, children);
    }
  }]);

  return ClickOutsideHandler;
}(_react.PureComponent);

ClickOutsideHandler.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  onClickOutside: _propTypes["default"].func.isRequired,
  disabled: _propTypes["default"].bool,
  stopPropagation: _propTypes["default"].bool
};
ClickOutsideHandler.defaultProps = {
  testId: undefined,
  className: '',
  disabled: false,
  stopPropagation: false
};
var _default = ClickOutsideHandler;
exports["default"] = _default;