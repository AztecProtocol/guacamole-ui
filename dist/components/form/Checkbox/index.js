"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _inputs = require("../../../config/inputs");

var _Icon = _interopRequireDefault(require("../../general/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  "wrapper": "checkbox__wrapper___3UPFf",
  "inline": "checkbox__inline___2qSh4",
  "checkbox": "checkbox__checkbox___3BftJ",
  "disabled": "checkbox__disabled___3xmXV",
  "tick-box": "checkbox__tick-box___1Gs_I",
  "align-right": "checkbox__align-right___L_XCk",
  "type-radio": "checkbox__type-radio___26Mee",
  "checked": "checkbox__checked___tQ_LO",
  "theme-dark": "checkbox__theme-dark___1PCyS",
  "size-xs": "checkbox__size-xs___3xONU",
  "check-icon": "checkbox__check-icon___QcWCM",
  "label": "checkbox__label___1ba7a",
  "size-s": "checkbox__size-s___1UtVx",
  "size-m": "checkbox__size-m___2UXe2",
  "size-l": "checkbox__size-l___3_5IZ",
  "placeHolderShimmer": "checkbox__placeHolderShimmer___2_xWU"
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

      return _react.default.createElement("div", {
        styleName: "tick-box"
      }, _react.default.createElement(_Icon.default, {
        styleName: "check-icon",
        type: "mi",
        name: iconName
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props3 = this.props,
          className = _this$props3.className,
          theme = _this$props3.theme,
          type = _this$props3.type,
          size = _this$props3.size,
          label = _this$props3.label,
          align = _this$props3.align,
          inline = _this$props3.inline,
          disabled = _this$props3.disabled;
      var value = this.isChecked();

      var labelNode = !!label && _react.default.createElement("div", {
        styleName: "label"
      }, label);

      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames2.default)('wrapper', "size-".concat(size), (_classnames = {}, _defineProperty(_classnames, "type-".concat(type), type !== 'check'), _defineProperty(_classnames, "theme-".concat(theme), theme !== 'light'), _defineProperty(_classnames, "align-".concat(align), align === 'right'), _defineProperty(_classnames, "checked", value), _defineProperty(_classnames, "inline", inline), _classnames))
      }, _react.default.createElement("div", {
        styleName: (0, _classnames2.default)('checkbox', {
          disabled: disabled
        }),
        onClick: this.handleClick
      }, align === 'right' && labelNode, this.renderBox(), align === 'left' && labelNode));
    }
  }]);

  return Checkbox;
}(_react.PureComponent);

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(['dark', 'light']),
  type: _propTypes.default.oneOf(['check', 'radio']),
  size: _propTypes.default.oneOf(_inputs.inputSizeKeys),
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  defaultValue: _propTypes.default.bool,
  value: _propTypes.default.bool,
  indeterminate: _propTypes.default.bool,
  align: _propTypes.default.oneOf(['left', 'right']),
  inline: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func
};
Checkbox.defaultProps = {
  className: '',
  theme: 'light',
  type: 'check',
  size: _inputs.defaultInputSizeKey,
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

var _default = (0, _reactCssModules.default)(Checkbox, styles, {
  allowMultiple: true
});

exports.default = _default;