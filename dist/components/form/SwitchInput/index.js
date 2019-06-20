"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SwitchInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  "shake": "switch-2ef9a77e",
  "placeHolderShimmer": "switch-7d3ac5d8"
};

var SwitchInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SwitchInput, _PureComponent);

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchInput).call(this, props));
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
      var checked = this.state.checked;
      var _this$props2 = this.props,
          className = _this$props2.className,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          isLoading = _this$props2.isLoading,
          outlined = _this$props2.outlined;
      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames.default)('wrapper', "size-".concat(size), {
          checked: checked,
          disabled: disabled,
          outlined: outlined,
          loading: isLoading
        }),
        onClick: this.handleClick
      }, _react.default.createElement("div", {
        styleName: "switch-button"
      }, isLoading && _react.default.createElement("div", {
        styleName: "spinner"
      })));
    }
  }]);

  return SwitchInput;
}(_react.PureComponent);

exports.SwitchInput = SwitchInput;
SwitchInput.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_styleConstants.inputSizeKeys),
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  outlined: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onChange: _propTypes.default.func
};
SwitchInput.defaultProps = {
  className: '',
  size: 's',
  checked: undefined,
  disabled: false,
  isLoading: false,
  outlined: false,
  onClick: function onClick() {},
  onChange: function onChange() {}
};

var _default = (0, _reactCssModules.default)(SwitchInput, styles, {
  allowMultiple: true
});

exports.default = _default;