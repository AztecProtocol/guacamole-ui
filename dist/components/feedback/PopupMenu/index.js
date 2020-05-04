"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _inputs = require("../../../config/inputs");

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _ClickOutsideHandler = _interopRequireDefault(require("../../utils/ClickOutsideHandler"));

var _FlexPopupMenu = _interopRequireDefault(require("./FlexPopupMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "popup-menu": "popup-4c089e3b",
  "tether": "popup-023cba98",
  "hide": "popup-b4c8fb11",
  "tether-content": "popup-97cebb8b",
  "top-xxs": "popup-1e4153bc",
  "top-xs": "popup-dc5549ca",
  "top-s": "popup-71a32b94",
  "top-m": "popup-394c02ad",
  "top-l": "popup-4f460d7e",
  "top-xl": "popup-5ed62814",
  "top-xxl": "popup-41a08070"
};

var PopupMenu = function PopupMenu(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      background = _ref.background,
      borderColor = _ref.borderColor,
      borderRadius = _ref.borderRadius,
      layer = _ref.layer,
      offsetTop = _ref.offsetTop,
      children = _ref.children,
      hide = _ref.hide,
      onClickOutside = _ref.onClickOutside,
      disabledClickOutside = _ref.disabledClickOutside,
      stopPropagation = _ref.stopPropagation,
      flexWidth = _ref.flexWidth;
  return /*#__PURE__*/_react["default"].createElement(_ClickOutsideHandler["default"], {
    testId: testId,
    className: className,
    onClickOutside: onClickOutside,
    disabled: hide || disabledClickOutside,
    stopPropagation: stopPropagation
  }, flexWidth && /*#__PURE__*/_react["default"].createElement(_FlexPopupMenu["default"], {
    background: background,
    borderColor: borderColor,
    borderRadius: borderRadius,
    layer: layer,
    offsetTop: offsetTop,
    hide: hide
  }, children), !flexWidth && /*#__PURE__*/_react["default"].createElement(_Block["default"], {
    className: (0, _classnames2["default"])(styles['popup-menu'], (_classnames = {}, _defineProperty(_classnames, styles.hide, hide), _defineProperty(_classnames, styles["top-".concat(offsetTop)], offsetTop), _classnames)),
    background: background,
    borderColor: borderColor,
    borderRadius: borderRadius,
    layer: layer
  }, children));
};

PopupMenu.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  background: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
  borderColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  borderRadius: _propTypes["default"].oneOf(_styleConstants.roundedCornerKeys),
  layer: _propTypes["default"].oneOf(_styleConstants.shadowLayerKeys),
  offsetTop: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.sizeKeys))),
  children: _propTypes["default"].node.isRequired,
  onClickOutside: _propTypes["default"].func,
  hide: _propTypes["default"].bool,
  disabledClickOutside: _propTypes["default"].bool,
  stopPropagation: _propTypes["default"].bool,
  flexWidth: _propTypes["default"].bool
};
PopupMenu.defaultProps = {
  testId: undefined,
  className: '',
  background: _inputs.inputMenuDefaultBackground,
  borderColor: _inputs.inputMenuBorderColor,
  borderRadius: _inputs.inputMenuBorderRadius,
  layer: _inputs.inputMenuLayer,
  offsetTop: _inputs.inputMenuOffsetTop,
  onClickOutside: function onClickOutside() {},
  hide: false,
  disabledClickOutside: false,
  stopPropagation: false,
  flexWidth: false
};
var _default = PopupMenu;
exports["default"] = _default;