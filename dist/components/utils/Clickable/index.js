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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "inline": "clickable-a78731cd",
  "clickable": "clickable-7d7f391f"
};

var Clickable = /*#__PURE__*/function (_PureComponent) {
  _inherits(Clickable, _PureComponent);

  var _super = _createSuper(Clickable);

  function Clickable() {
    var _this;

    _classCallCheck(this, Clickable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "justClicked", false);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          href = _this$props.href,
          doubleClickBufferTime = _this$props.doubleClickBufferTime,
          disabled = _this$props.disabled,
          stopPropagation = _this$props.stopPropagation,
          disabledDoubleClick = _this$props.disabledDoubleClick;

      if (stopPropagation) {
        e.stopPropagation();
      }

      if (!onClick || disabled) return;

      if (disabledDoubleClick) {
        if (_this.justClicked) {
          return;
        }

        _this.justClicked = true;
        setTimeout(function () {
          _this.justClicked = false;
        }, doubleClickBufferTime);
      }

      if (!href || !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onClick();
      }
    });

    return _this;
  }

  _createClass(Clickable, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          children = _this$props2.children,
          onClick = _this$props2.onClick,
          Link = _this$props2.Link,
          href = _this$props2.href,
          target = _this$props2.target,
          disabled = _this$props2.disabled,
          inline = _this$props2.inline;
      var Tag = href && !disabled ? Link : 'div';
      return /*#__PURE__*/_react["default"].createElement(Tag, {
        "data-testid": testId,
        className: (0, _classnames2["default"])(className, (_classnames = {}, _defineProperty(_classnames, styles.clickable, !disabled), _defineProperty(_classnames, styles.inline, inline), _classnames)),
        to: href,
        href: href,
        target: target,
        onClick: onClick && this.handleClick || null
      }, children);
    }
  }]);

  return Clickable;
}(_react.PureComponent);

Clickable.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].string,
  target: _propTypes["default"].oneOf(['', '_self', '_blank', '_parent', '_top']),
  onClick: _propTypes["default"].func,
  Link: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object]),
  doubleClickBufferTime: _propTypes["default"].number,
  stopPropagation: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  disabledDoubleClick: _propTypes["default"].bool,
  inline: _propTypes["default"].bool
};
Clickable.defaultProps = {
  testId: undefined,
  className: '',
  href: '',
  target: '',
  onClick: null,
  Link: 'a',
  doubleClickBufferTime: 400,
  stopPropagation: false,
  disabled: false,
  disabledDoubleClick: false,
  inline: false
};
var _default = Clickable;
exports["default"] = _default;