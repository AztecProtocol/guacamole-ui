"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

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
  "wrapper": "switch-b65e80f0",
  "loading": "switch-f4fc2e8b",
  "outlined": "switch-e9bc2334",
  "switch-button": "switch-069fa8e1",
  "spinner": "switch-7f75cce6",
  "button-spinner-spin": "switch-e49f0757",
  "size-xs": "switch-5ca01df5",
  "size-s": "switch-590179aa",
  "size-m": "switch-413f96ac",
  "size-l": "switch-6a379515",
  "checked": "switch-6e9841b6",
  "disabled": "switch-db94fadd",
  "theme-dark": "switch-9dc11ebc",
  "shake": "switch-2ef9a77e",
  "placeHolderShimmer": "switch-7d3ac5d8"
};

var SwitchInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(SwitchInput, _PureComponent);

  var _super = _createSuper(SwitchInput);

  _createClass(SwitchInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled;

      if (!isControlled) {
        return null;
      }

      var checked = nextProps.checked;
      return {
        checked: checked
      };
    }
  }]);

  function SwitchInput(props) {
    var _this;

    _classCallCheck(this, SwitchInput);

    _this = _super.call(this, props);
    var checked = props.checked;
    _this.state = {
      isControlled: checked !== undefined,
      checked: checked
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SwitchInput, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$state = this.state,
          isControlled = _this$state.isControlled,
          checked = _this$state.checked;
      var _this$props = this.props,
          onClick = _this$props.onClick,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          isLoading = _this$props.isLoading;
      onClick();

      if (!disabled && !isLoading) {
        onChange(!checked);

        if (!isControlled) {
          this.setState({
            checked: !checked
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var checked = this.state.checked;
      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          theme = _this$props2.theme,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          isLoading = _this$props2.isLoading,
          outlined = _this$props2.outlined;
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-testid": testId,
        className: (0, _classnames2["default"])(className, styles.wrapper, styles["theme-".concat(theme)], styles["size-".concat(size)], (_classnames = {}, _defineProperty(_classnames, styles.checked, checked), _defineProperty(_classnames, styles.disabled, disabled), _defineProperty(_classnames, styles.outlined, outlined), _defineProperty(_classnames, styles.loading, isLoading), _classnames)),
        role: "switch",
        tabIndex: "0",
        "aria-checked": checked,
        onClick: this.handleClick,
        onKeyDown: function onKeyDown(e) {
          var keyCode = e.keyCode;

          if ([13, 32].indexOf(keyCode) >= 0) {
            e.preventDefault();

            _this2.handleClick();
          }
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['switch-button']
      }, isLoading && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.spinner
      })));
    }
  }]);

  return SwitchInput;
}(_react.PureComponent);

SwitchInput.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['light', 'dark']),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  outlined: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
SwitchInput.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'light',
  size: 's',
  checked: undefined,
  disabled: false,
  isLoading: false,
  outlined: false,
  onClick: function onClick() {},
  onChange: function onChange() {}
};
var _default = SwitchInput;
exports["default"] = _default;