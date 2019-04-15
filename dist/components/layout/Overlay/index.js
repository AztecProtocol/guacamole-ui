"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _colors = require("../../../config/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "overlay": "overlay__overlay___1uIyO",
  "hide": "overlay__hide___S2LOw",
  "theme-primary": "overlay__theme-primary___8dbD4",
  "theme-secondary": "overlay__theme-secondary___2m924",
  "theme-white": "overlay__theme-white___1Rc5Z",
  "placeHolderShimmer": "overlay__placeHolderShimmer___oQlk6"
};

var Overlay = function Overlay(_ref) {
  var _classnames;

  var className = _ref.className,
      theme = _ref.theme,
      children = _ref.children,
      hide = _ref.hide,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames2.default)('overlay', (_classnames = {}, _defineProperty(_classnames, "theme-".concat(theme), theme), _defineProperty(_classnames, "hide", hide), _classnames)),
    onClick: onClick
  }, children);
};

Overlay.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.overlayThemeNames))),
  children: _propTypes.default.node,
  hide: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
Overlay.defaultProps = {
  className: '',
  theme: 'primary',
  children: null,
  hide: false,
  onClick: function onClick() {}
};

var _default = (0, _reactCssModules.default)(Overlay, styles, {
  allowMultiple: true
});

exports.default = _default;