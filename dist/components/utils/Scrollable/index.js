"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  "wrapper": "scroll-8a84a72f",
  "bg-primary": "scroll-0e8dfee2",
  "bg-primary-light": "scroll-42b737e5",
  "bg-primary-lighter": "scroll-b6ca4318",
  "bg-primary-lightest": "scroll-ff84feba",
  "bg-black": "scroll-49182977",
  "bg-grey-darker": "scroll-7636ff5e",
  "bg-grey-dark": "scroll-94f40698",
  "bg-grey": "scroll-839ccb40",
  "bg-grey-light": "scroll-c7b9410a",
  "bg-grey-lighter": "scroll-7c1f1b8c",
  "bg-grey-lightest": "scroll-3ea6f980",
  "bg-white": "scroll-c1e48ed8",
  "bg-white-light": "scroll-2d8c53c9",
  "bg-white-lighter": "scroll-7c3d5766",
  "bg-white-lightest": "scroll-d8e8ccd6",
  "bg-secondary": "scroll-2364a8b3",
  "bg-secondary-light": "scroll-21ab45cf",
  "bg-secondary-lighter": "scroll-ddbe5f5f",
  "bg-secondary-lightest": "scroll-36b8c0fa",
  "bg-pink": "scroll-f88770a1",
  "bg-red": "scroll-2c5f7423",
  "bg-purple": "scroll-aa91883b",
  "bg-blue": "scroll-1f518c53",
  "bg-green": "scroll-fb2c99cb",
  "bg-yellow": "scroll-9fbbad94",
  "bg-orange": "scroll-77faf0a7",
  "bg-brown": "scroll-32d700b4",
  "placeHolderShimmer": "scroll-3c57fb47"
};

var Scrollable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Scrollable, _PureComponent);

  function Scrollable(props) {
    var _this;

    _classCallCheck(this, Scrollable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scrollable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (ref) {
      _this.wrapper = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "setScrollbarRef", function (ref) {
      _this.scrollbar = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "updateContentHeight", function () {
      if (!_this.wrapper) return;
      var prevHeight = _this.state.height;

      var _this$wrapper$getBoun = _this.wrapper.getBoundingClientRect(),
          height = _this$wrapper$getBoun.height;

      if (height === prevHeight) return;

      _this.setState({
        height: height
      });

      var onResize = _this.props.onResize;
      onResize({
        height: height
      });
    });

    _this.state = {
      height: 0
    };
    _this.wrapper = null;
    _this.scrollbar = null;
    return _this;
  }

  _createClass(Scrollable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.updateContentHeight, true);
      var delayInitialResize = this.props.delayInitialResize;
      setTimeout(function () {
        _this2.updateContentHeight();
      }, delayInitialResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateContentHeight, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          background = _this$props.background,
          children = _this$props.children,
          onScroll = _this$props.onScroll;
      var height = this.state.height;
      return _react.default.createElement("div", {
        ref: this.setWrapperRef,
        className: className,
        styleName: (0, _classnames2.default)('wrapper', _defineProperty({}, "bg-".concat(background), background))
      }, _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
        ref: this.setScrollbarRef,
        renderTrackHorizontal: function renderTrackHorizontal() {
          return _react.default.createElement("div", null);
        },
        renderThumbHorizontal: function renderThumbHorizontal() {
          return _react.default.createElement("div", null);
        },
        autoHeightMin: height,
        autoHeightMax: height || '100%',
        autoHeight: true,
        onScroll: onScroll,
        autoHide: true
      }, children));
    }
  }]);

  return Scrollable;
}(_react.PureComponent);

Scrollable.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  background: _propTypes.default.string,
  onScroll: _propTypes.default.func,
  onResize: _propTypes.default.func,
  delayInitialResize: _propTypes.default.number // in case the parent component has animation that would affect wrapper's height

};
Scrollable.defaultProps = {
  className: '',
  children: null,
  background: '',
  onScroll: function onScroll() {},
  onResize: function onResize() {},
  delayInitialResize: 0
};

var _default = (0, _reactCssModules.default)(Scrollable, styles, {
  allowMultiple: true
});

exports.default = _default;