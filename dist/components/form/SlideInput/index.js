"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SlideInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _inputs = require("../../../config/inputs");

var _shapes = require("../../../config/shapes");

var _getScaleByPosition = _interopRequireDefault(require("../../utils/Draggable/utils/getScaleByPosition"));

var _Draggable = _interopRequireDefault(require("../../utils/Draggable"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "slide__wrapper___2FVlt",
  "track": "slide__track___12Lub",
  "placeholder": "slide__placeholder___18K4m",
  "handle": "slide__handle___3uB2I",
  "handle-icon": "slide__handle-icon___3J-Z4",
  "spinner": "slide__spinner___2EvDV",
  "button-spinner-spin": "slide__button-spinner-spin___8_tMX",
  "target-position": "slide__target-position____xtF3",
  "size-xs": "slide__size-xs___2twJX",
  "size-s": "slide__size-s___3KOwM",
  "size-m": "slide__size-m___34wst",
  "size-l": "slide__size-l___3joYD",
  "dragging": "slide__dragging___qG6R5",
  "active": "slide__active___1kMOB",
  "should-drop": "slide__should-drop___2JcGV",
  "loading": "slide__loading___1Zc9D",
  "outlined": "slide__outlined___93F0v",
  "shake": "slide__shake___16BXq",
  "placeHolderShimmer": "slide__placeHolderShimmer___1JLHQ"
};

var SlideInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SlideInput, _PureComponent);

  _createClass(SlideInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled,
          isDragging = prevState.isDragging;

      if (!isControlled || isDragging) {
        return null;
      }

      var value = nextProps.value;
      var scale = value ? 100 : 0;
      return {
        value: value,
        scale: scale
      };
    }
  }]);

  function SlideInput(props) {
    var _this;

    _classCallCheck(this, SlideInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTrackRef", function (ref) {
      _this.track = ref;

      _this.unbindActions();

      _this.bindActions();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTrackRect", function () {
      if (!_this.track) return;
      _this.trackRect = _this.track.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeHandlePosition", function (_ref) {
      var x = _ref.x;
      var _this$trackRect = _this.trackRect,
          left = _this$trackRect.left,
          right = _this$trackRect.right;
      _this.prevX = Math.min(right, Math.max(left, x));
      var scale = (0, _getScaleByPosition.default)(x, left, right);

      _this.setState({
        scale: scale,
        isDragging: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function () {
      var dropzoneLimit = _this.props.dropzoneLimit;
      var _this$trackRect2 = _this.trackRect,
          left = _this$trackRect2.left,
          right = _this$trackRect2.right;
      var _this$state = _this.state,
          isControlled = _this$state.isControlled,
          prevValue = _this$state.value;
      var exactScale = (0, _getScaleByPosition.default)(_this.prevX, left, right);
      var value = exactScale >= dropzoneLimit;
      var scale = value ? 100 : 0;

      _this.setState({
        scale: scale,
        isDragging: false
      });

      if (!isControlled) {
        _this.setState({
          value: value
        });
      }

      if (value !== prevValue) {
        var onChange = _this.props.onChange;
        onChange(value);
      }
    });

    _this.track = null;
    _this.trackRect = {
      left: 0,
      right: 0
    };
    _this.prevX = 0;
    var _value = props.value,
        initialValue = props.initialValue;
    _this.state = {
      isControlled: _value !== undefined,
      isDragging: false,
      scale: initialValue ? 100 : 0,
      value: initialValue
    };
    return _this;
  }

  _createClass(SlideInput, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindActions();
    }
  }, {
    key: "bindActions",
    value: function bindActions() {
      if (!this.track) return;
      this.track.addEventListener('resize', this.updateTrackRect, true);
      this.updateTrackRect();
    }
  }, {
    key: "unbindActions",
    value: function unbindActions() {
      if (!this.track) return;
      this.track.removeEventListener('resize', this.updateTrackRect, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          dropzoneLimit = _this$props.dropzoneLimit,
          hint = _this$props.hint,
          message = _this$props.message,
          iconName = _this$props.iconName,
          loadingIconName = _this$props.loadingIconName,
          placeholderIconName = _this$props.placeholderIconName,
          isLoading = _this$props.isLoading,
          disabled = _this$props.disabled;
      var _this$state2 = this.state,
          isDragging = _this$state2.isDragging,
          value = _this$state2.value,
          scale = _this$state2.scale;
      var placeholder = value && !isLoading && !isDragging ? message : hint;
      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames.default)('wrapper', "size-".concat(size), {
          dragging: isDragging,
          loading: isLoading,
          active: value,
          'should-drop': isDragging && scale >= dropzoneLimit
        })
      }, _react.default.createElement("div", {
        ref: this.setTrackRef,
        styleName: "track"
      }, !!placeholder && _react.default.createElement(_Text.default, {
        styleName: "placeholder",
        size: (0, _shapes.shiftSize)(size, -2),
        text: placeholder
      }), isDragging && _react.default.createElement("div", {
        styleName: "target-position"
      }, _react.default.createElement(_Icon.default, {
        styleName: "handle-icon",
        name: placeholderIconName
      })), _react.default.createElement(_Draggable.default, {
        styleName: "handle",
        style: {
          left: "".concat(scale, "%")
        },
        onDrag: this.handleChangeHandlePosition,
        onDragStop: this.handleDragStop,
        disabled: disabled || isLoading
      }, isLoading && _react.default.createElement("div", {
        styleName: "spinner"
      }), _react.default.createElement(_Icon.default, {
        styleName: "handle-icon",
        name: isLoading ? loadingIconName : value ? iconName : 'navigate_next'
      }))));
    }
  }]);

  return SlideInput;
}(_react.PureComponent);

exports.SlideInput = SlideInput;
SlideInput.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_inputs.inputSizeKeys),
  value: _propTypes.default.bool,
  initialValue: _propTypes.default.bool,
  dropzoneLimit: _propTypes.default.number,
  hint: _propTypes.default.string,
  message: _propTypes.default.string,
  iconName: _propTypes.default.string,
  loadingIconName: _propTypes.default.string,
  placeholderIconName: _propTypes.default.string,
  isLoading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
SlideInput.defaultProps = {
  className: '',
  size: _inputs.defaultInputSizeKey,
  value: undefined,
  initialValue: false,
  dropzoneLimit: 80,
  hint: '',
  message: '',
  iconName: 'check',
  loadingIconName: 'lock_open',
  placeholderIconName: 'lock_open',
  isLoading: false,
  disabled: false,
  onChange: function onChange() {}
};

var _default = (0, _reactCssModules.default)(SlideInput, styles, {
  allowMultiple: true
});

exports.default = _default;