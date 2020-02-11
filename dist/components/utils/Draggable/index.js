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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "draggable": "draggable-3e80681d"
};

var isTouchEvent = function isTouchEvent(e) {
  return e.touches.length === 1 && e.type.toLowerCase() !== 'touchend';
};

var stopEventBubble = function stopEventBubble(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (e.preventDefault) {
    e.preventDefault();
  }
};

var Draggable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Draggable, _PureComponent);

  function Draggable(props) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Draggable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      var disabled = _this.props.disabled;
      if (disabled) return;
      stopEventBubble(e);

      _this.enableMouseDrag();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;
      _this.isDragging = true;
      var onDrag = _this.props.onDrag;
      onDrag({
        x: clientX,
        y: clientY
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function () {
      _this.disableMouseDrag();

      _this.handleStop();
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (e) {
      var disabled = _this.props.disabled;
      if (disabled || !isTouchEvent(e)) return;
      stopEventBubble(e);

      _this.enableTouchDrag();
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (e) {
      _this.isDragging = true;
      var onDrag = _this.props.onDrag;
      var _e$touches$ = e.touches[0],
          pageX = _e$touches$.pageX,
          pageY = _e$touches$.pageY;
      onDrag({
        x: pageX,
        y: pageY
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function () {
      _this.disableTouchDrag();

      _this.handleStop();
    });

    _this.isDragging = false;
    _this.positionX = 0;
    _this.positionY = 0;
    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var disabled = this.props.disabled;
      var prevDisabled = prevProps.disabled;

      if (disabled && !prevDisabled) {
        this.disableMouseDrag();
        this.disableTouchDrag();
      }
    }
  }, {
    key: "handleStop",
    value: function handleStop() {
      if (this.isDragging) {
        this.isDragging = false;
        var onDragStop = this.props.onDragStop;
        onDragStop();
      }
    }
  }, {
    key: "enableMouseDrag",
    value: function enableMouseDrag() {
      document.addEventListener('mousemove', this.handleDrag, true);
      document.addEventListener('mouseup', this.handleDragEnd, true);
    }
  }, {
    key: "disableMouseDrag",
    value: function disableMouseDrag() {
      document.removeEventListener('mousemove', this.handleDrag, true);
      document.removeEventListener('mouseup', this.handleDragEnd, true);
    }
  }, {
    key: "enableTouchDrag",
    value: function enableTouchDrag() {
      document.addEventListener('touchmove', this.handleTouchMove, true);
      document.addEventListener('touchend', this.handleTouchEnd, true);
    }
  }, {
    key: "disableTouchDrag",
    value: function disableTouchDrag() {
      document.removeEventListener('touchmove', this.handleTouchMove, true);
      document.removeEventListener('touchend', this.handleTouchEnd, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          testId = _this$props.testId,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          disabled = _this$props.disabled;
      return _react["default"].createElement("div", {
        "data-testid": testId,
        className: (0, _classnames2["default"])(className, _defineProperty({}, styles.draggable, !disabled)),
        role: "button",
        tabIndex: "-1",
        style: style,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onKeyDown: function onKeyDown(e) {
          return e.stopPropagation();
        }
      }, children);
    }
  }]);

  return Draggable;
}(_react.PureComponent);

Draggable.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  onDrag: _propTypes["default"].func.isRequired,
  onDragStop: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
Draggable.defaultProps = {
  testId: undefined,
  className: '',
  children: null,
  style: null,
  onDragStop: function onDragStop() {},
  disabled: false
};
var _default = Draggable;
exports["default"] = _default;