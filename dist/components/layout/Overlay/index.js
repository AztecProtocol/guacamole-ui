"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "overlay": "overlay-e2c00955",
  "hide": "overlay-1be96a74",
  "theme-primary": "overlay-defea572",
  "theme-secondary": "overlay-c5e797db",
  "theme-white": "overlay-a5ef1c2f",
  "placeHolderShimmer": "overlay-0f589db9"
};

var Overlay = function Overlay(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      theme = _ref.theme,
      children = _ref.children,
      hide = _ref.hide,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames2["default"])(className, styles.overlay, (_classnames = {}, _defineProperty(_classnames, styles["theme-".concat(theme)], theme), _defineProperty(_classnames, styles.hide, hide), _classnames)),
    role: "menu",
    tabIndex: "-1",
    onClick: onClick,
    onKeyDown: onKeyDown
  }, children);
};

Overlay.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.overlayThemeNames))),
  children: _propTypes["default"].node,
  hide: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func
};
Overlay.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  children: null,
  hide: false,
  onClick: function onClick() {},
  onKeyDown: null
};
var _default = Overlay;
exports["default"] = _default;