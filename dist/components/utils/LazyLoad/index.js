"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var LazyLoad =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    var _this;

    _classCallCheck(this, LazyLoad);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyLoad).call(this, props));
    _this.state = {
      isLoaded: false
    };
    _this.cancelLoad = false;
    _this.loadReq = null;
    _this.container = null;
    _this.holder = null;
    _this.setHolderRef = _this.setHolderRef.bind(_assertThisInitialized(_this));
    _this.validatePosition = _this.validatePosition.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LazyLoad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.holder) return;
      var containerId = this.props.containerId;
      this.container = containerId ? document.getElementById(containerId) : window;
      if (!this.container) return;
      this.bindLazyLoadActions();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelLoad = true;
      this.unbindLazyLoadActions();
    }
  }, {
    key: "setHolderRef",
    value: function setHolderRef(ref) {
      this.holder = ref;
    }
  }, {
    key: "bindLazyLoadActions",
    value: function bindLazyLoadActions() {
      var _this2 = this;

      if (!this.container) return;
      this.container.addEventListener('scroll', this.validatePosition, false);
      this.container.addEventListener('resize', this.validatePosition, false);
      setTimeout(function () {
        _this2.validatePosition();
      }, 0);
    }
  }, {
    key: "unbindLazyLoadActions",
    value: function unbindLazyLoadActions() {
      if (!this.container) return;
      this.container.removeEventListener('scroll', this.validatePosition, false);
      this.container.removeEventListener('resize', this.validatePosition, false);
    }
  }, {
    key: "validatePosition",
    value: function validatePosition() {
      if (this.cancelLoad) return;
      var top;
      var containerHeight;
      var containerTop;

      if (this.container === window) {
        top = this.holder.offsetTop;
        containerHeight = window.innerHeight;
        containerTop = window.pageYOffset;
      } else {
        top = this.holder.scrollTop;
        containerHeight = this.container.offsetHeight;
        containerTop = this.container.scrollTop;
      }

      var buffer = this.props.buffer;

      if (top - buffer <= containerTop + containerHeight) {
        this.triggerLoad();
      }
    }
  }, {
    key: "triggerLoad",
    value: function triggerLoad() {
      var _this3 = this;

      this.unbindLazyLoadActions();
      if (this.cancelLoad || this.loadReq) return;
      var _this$props = this.props,
          delay = _this$props.delay,
          onLoad = _this$props.onLoad;
      this.loadReq = setTimeout(function () {
        if (_this3.cancelLoad) return;

        _this3.setState({
          isLoaded: true
        });
      }, delay || 0);
      onLoad();
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;

      if (!isLoaded) {
        var initialContent = this.props.initialContent;
        return _react["default"].createElement("div", {
          ref: this.setHolderRef
        }, initialContent);
      }

      var children = this.props.children;
      return children;
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  children: _propTypes["default"].node.isRequired,
  initialContent: _propTypes["default"].node,
  buffer: _propTypes["default"].number,
  delay: _propTypes["default"].number,
  containerId: _propTypes["default"].string,
  onLoad: _propTypes["default"].func
};
LazyLoad.defaultProps = {
  initialContent: null,
  buffer: 0,
  delay: 0,
  containerId: '',
  onLoad: function onLoad() {}
};
var _default = LazyLoad;
exports["default"] = _default;