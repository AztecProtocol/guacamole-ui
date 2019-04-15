"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

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
  "inline": "clickable__inline___1J1VJ",
  "clickable": "clickable__clickable___3Hf2c"
};

var Clickable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Clickable, _PureComponent);

  function Clickable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Clickable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Clickable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "justClicked", false);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          href = _this$props.href,
          doubleClickBufferTime = _this$props.doubleClickBufferTime,
          disabled = _this$props.disabled,
          stopPropagation = _this$props.stopPropagation,
          disabledDoubleClick = _this$props.disabledDoubleClick;

      if (stopPropagation) {
        e.stopPropagation();
      }

      if (!onClick || disabled) return;

      if (disabledDoubleClick) {
        if (_this.justClicked) {
          return;
        }

        _this.justClicked = true;
        setTimeout(function () {
          _this.justClicked = false;
        }, doubleClickBufferTime);
      }

      if (!href || !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onClick();
      }
    });

    return _this;
  }

  _createClass(Clickable, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          onClick = _this$props2.onClick,
          Link = _this$props2.Link,
          href = _this$props2.href,
          disabled = _this$props2.disabled,
          inline = _this$props2.inline;
      var Tag = href && !disabled ? Link : 'div';
      return _react.default.createElement(Tag, {
        className: className,
        styleName: (0, _classnames.default)({
          clickable: !disabled,
          inline: inline
        }),
        to: href,
        href: href,
        onClick: onClick && this.handleClick || null
      }, children);
    }
  }]);

  return Clickable;
}(_react.PureComponent);

Clickable.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  Link: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  doubleClickBufferTime: _propTypes.default.number,
  stopPropagation: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  disabledDoubleClick: _propTypes.default.bool,
  inline: _propTypes.default.bool
};
Clickable.defaultProps = {
  className: '',
  href: '',
  onClick: null,
  Link: 'a',
  doubleClickBufferTime: 400,
  stopPropagation: false,
  disabled: false,
  disabledDoubleClick: false,
  inline: false
};

var _default = (0, _reactCssModules.default)(Clickable, styles, {
  allowMultiple: true
});

exports.default = _default;