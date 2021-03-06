"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "bar-377cb275",
  "bar-base": "bar-52c90be0",
  "bar-progress": "bar-8e8f130f",
  "label": "bar-95a62393",
  "size-xxs": "bar-23bba2da",
  "rounded": "bar-a379c535",
  "size-xs": "bar-aeec17df",
  "size-s": "bar-e1b45497",
  "size-m": "bar-0f8c882d",
  "size-l": "bar-deef91c8",
  "base-primary": "bar-1cec95b5",
  "active-primary": "bar-64c10953",
  "base-primary-light": "bar-7fb9308f",
  "active-primary-light": "bar-1957d87b",
  "base-primary-lighter": "bar-268ac178",
  "active-primary-lighter": "bar-f6784407",
  "base-primary-lightest": "bar-bc2efc26",
  "active-primary-lightest": "bar-5f2ea3c9",
  "base-black": "bar-488098ce",
  "active-black": "bar-08813a5e",
  "base-grey-darker": "bar-f3fcbad5",
  "active-grey-darker": "bar-2087cc5d",
  "base-grey-dark": "bar-18b2ffc0",
  "active-grey-dark": "bar-723476f0",
  "base-grey": "bar-8048823c",
  "active-grey": "bar-fcafd60a",
  "base-grey-light": "bar-28821b8b",
  "active-grey-light": "bar-2566057e",
  "base-grey-lighter": "bar-0741cb6b",
  "active-grey-lighter": "bar-9cd8b18c",
  "base-grey-lightest": "bar-c3532fca",
  "active-grey-lightest": "bar-5371e1ea",
  "base-white": "bar-e93526db",
  "active-white": "bar-0d816ab1",
  "base-white-light": "bar-3ce3cef2",
  "active-white-light": "bar-ca41d045",
  "base-white-lighter": "bar-c2bd8127",
  "active-white-lighter": "bar-dc745021",
  "base-white-lightest": "bar-89f66883",
  "active-white-lightest": "bar-77d90754",
  "base-transparent": "bar-9eaaf74f",
  "active-transparent": "bar-6ea6bee3",
  "base-secondary": "bar-9ca77fe6",
  "active-secondary": "bar-8b3563bf",
  "base-secondary-light": "bar-cc4e5c18",
  "active-secondary-light": "bar-256563dc",
  "base-secondary-lighter": "bar-2a5bc4be",
  "active-secondary-lighter": "bar-e55d872d",
  "base-secondary-lightest": "bar-b10c6bbe",
  "active-secondary-lightest": "bar-74b60384",
  "base-pink": "bar-836866dd",
  "active-pink": "bar-065d2548",
  "base-red": "bar-40b08fd9",
  "active-red": "bar-915934bf",
  "base-purple": "bar-d22ac60f",
  "active-purple": "bar-3275438a",
  "base-blue": "bar-d1238dac",
  "active-blue": "bar-6caf51c7",
  "base-green": "bar-0d571497",
  "active-green": "bar-6d5cf3fa",
  "base-yellow": "bar-49c9d03b",
  "active-yellow": "bar-1e62f10c",
  "base-orange": "bar-73087298",
  "active-orange": "bar-bfadd585",
  "base-brown": "bar-7aeca250",
  "active-brown": "bar-c8aa0ea3",
  "placeHolderShimmer": "bar-2c336203"
};

var ProgressBar = function ProgressBar(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      value = _ref.value,
      base = _ref.base,
      baseColor = _ref.baseColor,
      activeColor = _ref.activeColor,
      rounded = _ref.rounded,
      labelColor = _ref.labelColor,
      labelSize = _ref.labelSize,
      labelWeight = _ref.labelWeight,
      showLabel = _ref.showLabel,
      formatLabel = _ref.formatLabel;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames4["default"])(className, styles.wrapper, styles["size-".concat(size)], _defineProperty({}, styles.rounded, rounded))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames4["default"])(styles['bar-base'], _defineProperty({}, styles["base-".concat(baseColor)], baseColor))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames4["default"])(styles['bar-progress'], _defineProperty({}, styles["active-".concat(activeColor)], activeColor)),
    style: {
      transform: "scaleX(".concat(base ? value / base : 0, ")"),
      WebkitTransform: "scaleX(".concat(base ? value / base : 0, ")")
    }
  })), showLabel && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    className: styles.label,
    color: labelColor,
    size: labelSize,
    weight: labelWeight,
    text: formatLabel(value, base)
  }));
};

ProgressBar.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['xxs', 'xs', 's', 'm', 'l']),
  value: _propTypes["default"].number.isRequired,
  base: _propTypes["default"].number,
  baseColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  activeColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  labelColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.textColorNames))),
  labelSize: _responsiveTextSizes["default"],
  labelWeight: _propTypes["default"].oneOf(_styleConstants.fontWeightKeys),
  rounded: _propTypes["default"].bool,
  showLabel: _propTypes["default"].bool,
  formatLabel: _propTypes["default"].func
};
ProgressBar.defaultProps = {
  testId: undefined,
  className: '',
  size: 'xs',
  base: 100,
  baseColor: 'primary-lightest',
  activeColor: 'secondary',
  labelColor: '',
  labelSize: 'inherit',
  labelWeight: 'inherit',
  rounded: false,
  showLabel: false,
  formatLabel: function formatLabel(value, base) {
    return "".concat(base ? Math.round(value / base * 100) : 0, "%");
  }
};
var _default = ProgressBar;
exports["default"] = _default;