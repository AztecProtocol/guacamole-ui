"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleConstants = require("../../../config/styleConstants");

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _getNextCursorPosition = _interopRequireDefault(require("./utils/getNextCursorPosition"));

var _getNumeralValue = _interopRequireDefault(require("./utils/getNumeralValue"));

var _formatNumeralValue = _interopRequireDefault(require("./utils/formatNumeralValue"));

var _escapeRegExp = _interopRequireDefault(require("./utils/escapeRegExp"));

var _getPositionBoundaries = _interopRequireDefault(require("./utils/getPositionBoundaries"));

var _handleKeyDown2 = _interopRequireDefault(require("./utils/handleKeyDown"));

var _isGreaterThan = _interopRequireDefault(require("./utils/isGreaterThan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MaskedNumberInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MaskedNumberInput, _PureComponent);

  _createClass(MaskedNumberInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled,
          prevProps = prevState.prevProps;

      if (!isControlled) {
        return null;
      }

      var prevValue = prevProps.value,
          prevAllowDecimal = prevProps.allowDecimal,
          prevAllowNegative = prevProps.allowNegative;
      var value = nextProps.value,
          allowDecimal = nextProps.allowDecimal,
          allowNegative = nextProps.allowNegative;

      if (value === prevValue && allowDecimal === prevAllowDecimal && allowNegative === prevAllowNegative) {
        return null;
      }

      return {
        formatedValue: (0, _formatNumeralValue["default"])(value, {
          allowDecimal: allowDecimal,
          allowNegative: allowNegative
        }),
        prevProps: {
          value: value,
          allowDecimal: allowDecimal,
          allowNegative: allowNegative
        }
      };
    }
  }]);

  function MaskedNumberInput(props) {
    var _this;

    _classCallCheck(this, MaskedNumberInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumberInput).call(this, props));
    var value = props.value,
        defaultValue = props.defaultValue,
        allowDecimal = props.allowDecimal,
        allowNegative = props.allowNegative;
    var isControlled = value !== undefined;
    _this.state = {
      isControlled: isControlled,
      error: '',
      formatedValue: (0, _formatNumeralValue["default"])(defaultValue, {
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      }),
      prevProps: {
        // eslint-disable-line react/no-unused-state
        value: '',
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      }
    };
    _this.input = null;
    _this.nextPosition = null;
    _this.clearErrorReq = null;
    _this.setInputRef = _this.setInputRef.bind(_assertThisInitialized(_this));
    _this.updateCursorPosition = _this.updateCursorPosition.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MaskedNumberInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.nextPosition !== null) {
        this.updateCursorPosition(this.nextPosition);
        this.nextPosition = null;
      }

      var error = this.state.error;
      var prevError = prevState.error;

      if (error && error !== prevError) {
        clearTimeout(this.clearErrorReq);
        var readingSpeed = this.props.readingSpeed;
        var timeToFinishReadingError = Math.max(0.2, readingSpeed ? error.length / readingSpeed : 0);
        this.clearErrorReq = setTimeout(function () {
          _this2.setState({
            error: ''
          });
        }, timeToFinishReadingError);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.clearErrorReq);
    }
  }, {
    key: "setInputRef",
    value: function setInputRef(ref) {
      var setInputRef = this.props.setInputRef;
      this.input = ref;
      setInputRef(ref);
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var _this$input = this.input,
          selectionStart = _this$input.selectionStart,
          selectionEnd = _this$input.selectionEnd;
      return {
        start: selectionStart,
        end: selectionEnd
      };
    }
  }, {
    key: "getNextStateFromDecoratedValue",
    value: function getNextStateFromDecoratedValue(decoratedValue) {
      var prevValue = this.state.formatedValue;
      var _this$props = this.props,
          allowDecimal = _this$props.allowDecimal,
          allowNegative = _this$props.allowNegative,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          maxValue = _this$props.maxValue,
          minValue = _this$props.minValue;
      var pattern = new RegExp("^(".concat(allowNegative ? '-?[0-9]?' : '', ")?").concat((0, _escapeRegExp["default"])(prefix), "(.{0,})").concat((0, _escapeRegExp["default"])(suffix), "$"));

      var _ref = decoratedValue.match(pattern) || [],
          _ref2 = _slicedToArray(_ref, 3),
          match = _ref2[0],
          _ref2$ = _ref2[1],
          sign_ = _ref2$ === void 0 ? '' : _ref2$,
          _ref2$2 = _ref2[2],
          unsignedValue = _ref2$2 === void 0 ? '' : _ref2$2;

      var _sign_$match = sign_.match(/^(-)?([0-9]?)$/),
          _sign_$match2 = _slicedToArray(_sign_$match, 3),
          _sign_$match2$ = _sign_$match2[1],
          sign = _sign_$match2$ === void 0 ? '' : _sign_$match2$,
          _sign_$match2$2 = _sign_$match2[2],
          extraDigit = _sign_$match2$2 === void 0 ? '' : _sign_$match2$2;

      var value = match ? "".concat(sign_).concat(unsignedValue) : decoratedValue;

      if (prefix && sign && !unsignedValue && prevValue) {
        value = '';
      } else if (prevValue.match(/^-?0$/) && value.match(/^-?0[0-9]$/)) {
        value = "".concat(sign).concat(value.substr(-1));
      }

      var numeralValue = (0, _getNumeralValue["default"])(value, {
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      });

      var _this$getSelection = this.getSelection(),
          prevStart = _this$getSelection.end;

      if ((0, _isGreaterThan["default"])(numeralValue, maxValue) || (0, _isGreaterThan["default"])(minValue, numeralValue)) {
        return {
          formatedValue: prevValue,
          start: prevStart - 1
        };
      }

      var formatedValue = (0, _formatNumeralValue["default"])(value, {
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      });
      var positionOffset = match && prevStart <= sign_.length ? 0 : prefix.length;
      var prevPosition = Math.max(0, prevStart - positionOffset);
      var nextPosition = !match ? formatedValue.length : (0, _getNextCursorPosition["default"])(value, prevValue, prevPosition, {
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      });
      var start = nextPosition + positionOffset;

      if (extraDigit && prefix) {
        start += prefix.length;
      }

      return {
        formatedValue: formatedValue,
        start: start
      };
    }
  }, {
    key: "updateCursorPosition",
    value: function updateCursorPosition(position) {
      if (!this.input) return;
      this.input.setSelectionRange(position, position);
    }
  }, {
    key: "handleChange",
    value: function handleChange(decoratedValue) {
      var _this3 = this;

      var _this$getNextStateFro = this.getNextStateFromDecoratedValue(decoratedValue),
          formatedValue = _this$getNextStateFro.formatedValue,
          start = _this$getNextStateFro.start;

      var _this$state = this.state,
          isControlled = _this$state.isControlled,
          prevValue = _this$state.formatedValue,
          prevError = _this$state.error;

      if (formatedValue === prevValue) {
        setTimeout(function () {
          _this3.updateCursorPosition(start);
        }, 0);
        return;
      }

      var _this$props2 = this.props,
          validate = _this$props2.validate,
          allowDecimal = _this$props2.allowDecimal,
          allowNegative = _this$props2.allowNegative,
          onChange = _this$props2.onChange;
      var numeralValue = (0, _getNumeralValue["default"])(formatedValue, {
        allowDecimal: allowDecimal,
        allowNegative: allowNegative
      });

      if (validate) {
        clearTimeout(this.clearErrorReq);

        var _validate = validate(numeralValue),
            success = _validate.success,
            error = _validate.error;

        if (!success) {
          this.nextPosition = Math.max(0, start - 1);
          this.setState({
            error: error !== prevError ? error : "".concat(error, " ") // force state to update and to trigger showFlashErrorStatus in TextInput

          });
          return;
        }

        if (prevError) {
          this.setState({
            error: ''
          });
        }
      }

      this.nextPosition = start;

      if (!isControlled) {
        this.setState({
          formatedValue: formatedValue
        });
      }

      onChange(numeralValue);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      (0, _handleKeyDown2["default"])(e, this.getSelection(), this.updateCursorPosition, this.props);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this$getSelection2 = this.getSelection(),
          clickAt = _this$getSelection2.start;

      var boundaries = (0, _getPositionBoundaries["default"])(e, this.props);

      var _boundaries$find = boundaries.find(function (_ref3, i) {
        var _ref4 = _slicedToArray(_ref3, 1),
            max = _ref4[0];

        if (clickAt <= max) {
          return true;
        }

        if (i < boundaries.length - 1 && clickAt - max < boundaries[i + 1][0] - clickAt) {
          return true;
        }

        return i === boundaries.length - 1;
      }),
          _boundaries$find2 = _slicedToArray(_boundaries$find, 2),
          start = _boundaries$find2[0],
          end = _boundaries$find2[1];

      if (clickAt < start || clickAt > end) {
        e.preventDefault();
        this.updateCursorPosition(clickAt < start ? start : end);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          formatedValue = _this$state2.formatedValue,
          error = _this$state2.error;
      var _this$props3 = this.props,
          testId = _this$props3.testId,
          className = _this$props3.className,
          theme = _this$props3.theme,
          size = _this$props3.size,
          placeholder = _this$props3.placeholder,
          status = _this$props3.status,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          disabled = _this$props3.disabled;

      var _formatedValue$match = formatedValue.match(/^(-)?(.{0,})/),
          _formatedValue$match2 = _slicedToArray(_formatedValue$match, 3),
          _formatedValue$match3 = _formatedValue$match2[1],
          sign = _formatedValue$match3 === void 0 ? '' : _formatedValue$match3,
          _formatedValue$match4 = _formatedValue$match2[2],
          unsignedValue = _formatedValue$match4 === void 0 ? '' : _formatedValue$match4;

      var decoratedValue = placeholder && !formatedValue.length ? '' : "".concat(sign).concat(prefix).concat(unsignedValue).concat(suffix);
      return _react["default"].createElement(_TextInput["default"], {
        testId: testId,
        className: className,
        theme: theme,
        setInputRef: this.setInputRef,
        size: size,
        value: decoratedValue,
        error: error,
        placeholder: placeholder,
        status: status,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        disabled: disabled,
        withErrorShakeEffect: true
      });
    }
  }]);

  return MaskedNumberInput;
}(_react.PureComponent);

MaskedNumberInput.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['default', 'inline']),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  placeholder: _propTypes["default"].string,
  status: _propTypes["default"].oneOf(['', 'focus', 'error', 'warning']),
  prefix: _propTypes["default"].string,
  suffix: _propTypes["default"].string,
  allowDecimal: _propTypes["default"].bool,
  allowNegative: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  validate: _propTypes["default"].func,
  setInputRef: _propTypes["default"].func,
  readingSpeed: _propTypes["default"].number,
  maxValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  minValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
MaskedNumberInput.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  value: undefined,
  size: 'm',
  defaultValue: '',
  placeholder: '',
  status: '',
  prefix: '',
  suffix: '',
  allowDecimal: false,
  allowNegative: false,
  disabled: false,
  onChange: function onChange() {},
  setInputRef: function setInputRef() {},
  validate: undefined,
  readingSpeed: 200 * 5 / (60 * 1000),
  // characters per millisecond
  maxValue: 10000000000,
  minValue: -10000000000
};
var _default = MaskedNumberInput;
exports["default"] = _default;