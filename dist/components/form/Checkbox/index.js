"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Icon = _interopRequireDefault(require("../../general/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "wrapper": "checkbox-b130feb2",
  "inline": "checkbox-1cf245b1",
  "checkbox": "checkbox-cec2e868",
  "disabled": "checkbox-069e72ec",
  "tick-box": "checkbox-910ed571",
  "align-right": "checkbox-a542271d",
  "type-radio": "checkbox-33321fd7",
  "checked": "checkbox-0c0d0895",
  "theme-dark": "checkbox-ead0d610",
  "size-xs": "checkbox-e98c0376",
  "check-icon": "checkbox-4d1d146c",
  "label": "checkbox-9a1c582e",
  "size-s": "checkbox-5e473b55",
  "size-m": "checkbox-87c2412b",
  "size-l": "checkbox-92b956c8",
  "placeHolderShimmer": "checkbox-5f787b7b"
};

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));
    var defaultValue = props.defaultValue,
        value = props.value;
    _this.isControlled = value !== undefined;
    _this.state = {
      value: _this.isControlled ? undefined : defaultValue
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Checkbox, [{
    key: "isChecked",
    value: function isChecked() {
      var value = this.state.value;
      var controlledValue = this.props.value;
      return this.isControlled ? controlledValue : value;
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          onChange = _this$props.onChange;
      var prevValue = this.isChecked();
      onClick(prevValue, this.props);
      if (disabled) return;
      var value = !prevValue;

      if (!this.isControlled) {
        this.setState({
          value: value
        });
      }

      onChange(value, this.props);
    }
  }, {
    key: "renderBox",
    value: function renderBox() {
      var value = this.isChecked();
      var _this$props2 = this.props,
          type = _this$props2.type,
          indeterminate = _this$props2.indeterminate;
      var iconName;

      switch (type) {
        case 'radio':
          iconName = value ? indeterminate ? 'remove' : 'fiber_manual_record' : '';
          break;

        case 'check':
        default:
          iconName = value ? indeterminate ? 'remove' : 'check' : '';
      }

      return _react["default"].createElement("div", {
        className: styles['tick-box']
      }, _react["default"].createElement(_Icon["default"], {
        className: styles['check-icon'],
        type: "mi",
        name: iconName
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props3 = this.props,
          testId = _this$props3.testId,
          className = _this$props3.className,
          theme = _this$props3.theme,
          type = _this$props3.type,
          size = _this$props3.size,
          label = _this$props3.label,
          align = _this$props3.align,
          inline = _this$props3.inline,
          disabled = _this$props3.disabled;
      var value = this.isChecked();

      var labelNode = !!label && _react["default"].createElement("div", {
        className: styles.label
      }, label);

      return _react["default"].createElement("div", {
        "data-testid": testId,
        className: (0, _classnames3["default"])(className, styles.wrapper, styles["size-".concat(size)], (_classnames = {}, _defineProperty(_classnames, styles["type-".concat(type)], type !== 'check'), _defineProperty(_classnames, styles["theme-".concat(theme)], theme !== 'light'), _defineProperty(_classnames, styles["align-".concat(align)], align === 'right'), _defineProperty(_classnames, styles.checked, value), _defineProperty(_classnames, styles.inline, inline), _classnames))
      }, _react["default"].createElement("div", {
        className: (0, _classnames3["default"])(styles.checkbox, _defineProperty({}, styles.disabled, disabled)),
        role: "checkbox",
        tabIndex: "0",
        "aria-checked": value,
        onClick: this.handleClick,
        onKeyDown: function onKeyDown(e) {
          var keyCode = e.keyCode;

          if ([13, 32].indexOf(keyCode) >= 0) {
            e.preventDefault();

            _this2.handleClick();
          }
        }
      }, align === 'right' && labelNode, this.renderBox(), align === 'left' && labelNode));
    }
  }]);

  return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['dark', 'light']),
  type: _propTypes["default"].oneOf(['check', 'radio']),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  defaultValue: _propTypes["default"].bool,
  value: _propTypes["default"].bool,
  indeterminate: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(['left', 'right']),
  inline: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
Checkbox.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'light',
  type: 'check',
  size: _styleConstants.defaultInputSizeKey,
  label: '',
  defaultValue: false,
  value: undefined,
  indeterminate: false,
  align: 'left',
  inline: false,
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {}
};
var _default = Checkbox;
exports["default"] = _default;