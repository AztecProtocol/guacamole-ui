"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "input": "input-b8d47f80",
  "size-xs": "input-d73f51ce",
  "with-icon": "input-3dd982f7",
  "status-icon": "input-6552c285",
  "size-s": "input-9fdb48ff",
  "size-m": "input-3eaf6630",
  "size-l": "input-d915edb5",
  "holder": "input-74bd2b91",
  "shake": "input-87755749",
  "flash-error": "input-1520581c",
  "theme-inline": "input-de27ff90",
  "theme-dark": "input-826243a2",
  "disabled": "input-88acde4e",
  "theme-default": "input-69de054e",
  "clickable": "input-26a3d4d7",
  "error": "input-3c04b3db",
  "error-content": "input-7920530a",
  "hide": "input-5beb0bb4",
  "status-error": "input-e552daed",
  "status-focus": "input-4bc7edfe",
  "button-spinner-spin": "input-572ab191",
  "placeHolderShimmer": "input-dbb953a7"
};

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  _createClass(TextInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isErrorControlled = prevState.isErrorControlled;

      if (!isErrorControlled) {
        return null;
      }

      var error = nextProps.error,
          value = nextProps.value,
          withErrorShakeEffect = nextProps.withErrorShakeEffect;
      var prevError = prevState.error,
          prevProps = prevState.prevProps;
      var prevValue = prevProps.value;

      if (error === prevError && !(error && value !== prevValue)) {
        // don't restart shake animation
        return null;
      }

      return {
        shakeInput: withErrorShakeEffect && !!error,
        showErrorStatus: !!error,
        error: error,
        prevProps: {
          value: value
        }
      };
    }
  }]);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));
    var value = props.value,
        error = props.error;
    _this.isControlled = value !== undefined;
    _this.state = {
      isErrorControlled: error !== undefined,
      shakeInput: false,
      showErrorStatus: false,
      error: '',
      prevProps: {
        // eslint-disable-line react/no-unused-state
        value: ''
      }
    };
    _this.input = null;
    _this.clearTemporaryErrorReq = null;
    _this.setInputRef = _this.setInputRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    _this.blur = _this.blur.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clearTemporaryError();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.clearTemporaryError();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.clearTemporaryErrorReq);
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(ref) {
      var setInputRef = this.props.setInputRef;
      this.input = ref;
      setInputRef(ref);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var controlledValue = this.props.value;
      return this.isControlled ? controlledValue : this.input.value;
    }
    /*
     * allow parent to manually focus on this input
     */

  }, {
    key: "focus",
    value: function focus() {
      var disabled = this.props.disabled;
      if (disabled) return;
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "clearTemporaryError",
    value: function clearTemporaryError() {
      var _this2 = this;

      var shakeInput = this.state.shakeInput;

      if (shakeInput) {
        clearTimeout(this.clearTemporaryErrorReq);
        this.clearTemporaryErrorReq = setTimeout(function () {
          var currentShakeInput = _this2.state.shakeInput;

          if (currentShakeInput) {
            _this2.setState({
              shakeInput: false
            });
          }
        }, 300);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (disabled) {
        e.preventDefault();
        this.blur();
        return;
      }

      onClick(e);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      var disabled = this.props.disabled;

      if (disabled) {
        e.preventDefault();
        this.blur();
        return;
      }

      var _this$props2 = this.props,
          readOnly = _this$props2.readOnly,
          selectAllOnFocus = _this$props2.selectAllOnFocus,
          onFocus = _this$props2.onFocus;

      if (!readOnly && selectAllOnFocus) {
        this.input.select();
      }

      onFocus(e);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly;

      if (disabled || readOnly) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        return;
      }

      var _this$props4 = this.props,
          validate = _this$props4.validate,
          withErrorShakeEffect = _this$props4.withErrorShakeEffect,
          onChange = _this$props4.onChange;
      var isErrorControlled = this.state.isErrorControlled;
      var value = e.target.value;

      if (!isErrorControlled) {
        var _validate = validate(value),
            success = _validate.success,
            error = _validate.error;

        if (!success) {
          e.preventDefault();
          this.setState({
            shakeInput: withErrorShakeEffect,
            showErrorStatus: true,
            error: error
          });
          return;
        }

        var _this$state = this.state,
            shakeInput = _this$state.shakeInput,
            showErrorStatus = _this$state.showErrorStatus;

        if (shakeInput || showErrorStatus) {
          this.setState({
            shakeInput: false,
            showErrorStatus: false
          });
        }
      }

      onChange(value);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var disabled = this.props.disabled;

      if (disabled) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        return;
      }

      var _this$props5 = this.props,
          onSubmit = _this$props5.onSubmit,
          onKeyDown = _this$props5.onKeyDown;

      switch (e.keyCode) {
        case 13:
          onSubmit();
          break;

        default:
      }

      onKeyDown(e);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props6 = this.props,
          type = _this$props6.type,
          name = _this$props6.name,
          value = _this$props6.value,
          defaultValue = _this$props6.defaultValue,
          placeholder = _this$props6.placeholder,
          rows = _this$props6.rows,
          autoCapitalize = _this$props6.autoCapitalize,
          autoComplete = _this$props6.autoComplete,
          autoCorrect = _this$props6.autoCorrect,
          spellCheck = _this$props6.spellCheck,
          tabIndex = _this$props6.tabIndex,
          disabled = _this$props6.disabled,
          readOnly = _this$props6.readOnly;
      var TagName = type === 'textarea' ? 'textarea' : 'input';
      var props = {};

      if (this.isControlled) {
        props.value = value;
      } else if (defaultValue) {
        props.defaultValue = defaultValue;
      }

      return _react.default.createElement(TagName, _extends({}, props, {
        styleName: "input",
        ref: this.setInputRef,
        type: type,
        name: name,
        rows: rows,
        placeholder: placeholder,
        autoCapitalize: autoCapitalize,
        autoComplete: autoComplete,
        autoCorrect: autoCorrect,
        spellCheck: spellCheck,
        tabIndex: tabIndex,
        disabled: disabled,
        readOnly: readOnly,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange
      }));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props7 = this.props,
          icon = _this$props7.icon,
          onClick = _this$props7.onClick,
          onClickIcon = _this$props7.onClickIcon;

      if (!icon) {
        return null;
      }

      var onClickCallback = onClickIcon || onClick;
      return _react.default.createElement("div", {
        styleName: (0, _classnames2.default)('status-icon', {
          clickable: onClickCallback
        }),
        onClick: function onClick(e) {
          if (onClickCallback) {
            e.stopPropagation(); // prevent triggering onClick twice

            onClickCallback();
          }
        }
      }, _react.default.createElement(_Icon.default, icon));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props8 = this.props,
          className = _this$props8.className,
          theme = _this$props8.theme,
          size = _this$props8.size,
          readOnly = _this$props8.readOnly,
          disabled = _this$props8.disabled,
          status = _this$props8.status,
          icon = _this$props8.icon,
          onClick = _this$props8.onClick;
      var _this$state2 = this.state,
          shakeInput = _this$state2.shakeInput,
          showErrorStatus = _this$state2.showErrorStatus,
          error = _this$state2.error;
      var holderStyleName = (0, _classnames2.default)('holder', "size-".concat(size), (_classnames = {
        disabled: disabled,
        clickable: readOnly && onClick,
        'flash-error': shakeInput,
        'status-error': showErrorStatus,
        'with-icon': icon
      }, _defineProperty(_classnames, "status-".concat(status), status), _defineProperty(_classnames, "theme-".concat(theme), theme), _classnames));
      return _react.default.createElement("div", {
        className: className,
        styleName: holderStyleName
      }, this.renderInput(), !!error && _react.default.createElement("div", {
        styleName: (0, _classnames2.default)('error', {
          hide: !showErrorStatus
        })
      }, _react.default.createElement(_Block.default, {
        styleName: "error-content",
        padding: "m",
        background: "white",
        borderRadius: "default",
        layer: 2
      }, _react.default.createElement(_Text.default, {
        size: "xxs",
        color: "red",
        weight: "bold",
        text: error
      }))), this.renderIcon());
    }
  }]);

  return TextInput;
}(_react.PureComponent);

exports.TextInput = TextInput;
TextInput.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(_styleConstants.inputThemeNames),
  size: _propTypes.default.oneOf(_styleConstants.inputSizeKeys),
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  icon: _iconShape.default,
  error: _propTypes.default.string,
  rows: _propTypes.default.number,
  tabIndex: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  selectAllOnFocus: _propTypes.default.bool,
  status: _propTypes.default.oneOf(['', 'focus', 'error', 'warning']),
  autoCapitalize: _propTypes.default.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: _propTypes.default.string,
  autoCorrect: _propTypes.default.oneOf(['on', 'off']),
  spellCheck: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  onClickIcon: _propTypes.default.func,
  setInputRef: _propTypes.default.func,
  validate: _propTypes.default.func,
  withErrorShakeEffect: _propTypes.default.bool
};
TextInput.defaultProps = {
  className: '',
  theme: 'default',
  size: _styleConstants.defaultInputSizeKey,
  type: 'text',
  name: '',
  value: undefined,
  defaultValue: '',
  placeholder: '',
  icon: null,
  error: undefined,
  rows: 1,
  tabIndex: 0,
  disabled: false,
  readOnly: false,
  selectAllOnFocus: false,
  status: '',
  autoCapitalize: 'none',
  autoComplete: 'off',
  autoCorrect: 'off',
  spellCheck: false,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  onClickIcon: undefined,
  setInputRef: function setInputRef() {},
  validate: function validate() {
    return {
      success: true,
      error: ''
    };
  },
  withErrorShakeEffect: false
};

var _default = (0, _reactCssModules.default)(TextInput, styles, {
  allowMultiple: true
});

exports.default = _default;