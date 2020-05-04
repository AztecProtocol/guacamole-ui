"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

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
  "size--xxs": "text-e9f01506",
  "size--xs": "text-89817cd9",
  "size--s": "text-f9512389",
  "size--m": "text-4d13450f",
  "size--l": "text-6969b226",
  "size--xl": "text-c9164589",
  "size--xxl": "text-9aaa95b2",
  "size-xs-xxs": "text-a9cab6a0",
  "size-xs-xs": "text-8c70def2",
  "size-xs-s": "text-d00421d7",
  "size-xs-m": "text-83136246",
  "size-xs-l": "text-f00bb59d",
  "size-xs-xl": "text-4b437072",
  "size-xs-xxl": "text-9366880d",
  "size-s-xxs": "text-f10edd6a",
  "size-s-xs": "text-59f151ec",
  "size-s-s": "text-067a492a",
  "size-s-m": "text-a1e45c32",
  "size-s-l": "text-0ea7eb6e",
  "size-s-xl": "text-1d298a7f",
  "size-s-xxl": "text-3dbe5626",
  "size-m-xxs": "text-d984d1a3",
  "size-m-xs": "text-50219563",
  "size-m-s": "text-91f6b753",
  "size-m-m": "text-24b49ca2",
  "size-m-l": "text-a1f42dc9",
  "size-m-xl": "text-449f837c",
  "size-m-xxl": "text-650c27e5",
  "size-l-xxs": "text-9350e3cf",
  "size-l-xs": "text-8377d74a",
  "size-l-s": "text-2bfe2108",
  "size-l-m": "text-c731e283",
  "size-l-l": "text-cb0722a5",
  "size-l-xl": "text-4dfd024f",
  "size-l-xxl": "text-94fb7ac7",
  "size-xl-xxs": "text-829a66a5",
  "size-xl-xs": "text-8d3faf78",
  "size-xl-s": "text-05ffc925",
  "size-xl-m": "text-b792a2ea",
  "size-xl-l": "text-8fa157f1",
  "size-xl-xl": "text-338c1135",
  "size-xl-xxl": "text-8cd33cfb",
  "size-xxl-xxs": "text-21c37d74",
  "size-xxl-xs": "text-e3874e6e",
  "size-xxl-s": "text-f90c6efe",
  "size-xxl-m": "text-3763f07b",
  "size-xxl-l": "text-6dbb5d48",
  "size-xxl-xl": "text-01d67d7d",
  "size-xxl-xxl": "text-7fa2c306",
  "text": "text-93e8a6eb",
  "show-ellipsis": "text-587e8836",
  "highlight-primary": "text-1c864fb0",
  "highlight-primary-light": "text-e34cde27",
  "highlight-primary-lighter": "text-6c6c61b4",
  "highlight-primary-lightest": "text-7f271fc6",
  "highlight-black": "text-f247b14a",
  "highlight-grey-darker": "text-0d0c0c62",
  "highlight-grey-dark": "text-14ac2360",
  "highlight-grey": "text-cd07cad2",
  "highlight-grey-light": "text-1ec805a7",
  "highlight-grey-lighter": "text-15415463",
  "highlight-grey-lightest": "text-f54cc466",
  "highlight-white": "text-98127415",
  "highlight-white-light": "text-5535be4d",
  "highlight-white-lighter": "text-b5a3081f",
  "highlight-white-lightest": "text-7395ea62",
  "highlight-transparent": "text-f0d2bb14",
  "highlight-secondary": "text-ad35528c",
  "highlight-secondary-light": "text-d78879c6",
  "highlight-secondary-lighter": "text-8328fc0e",
  "highlight-secondary-lightest": "text-0c14bc70",
  "highlight-pink": "text-6b0015d4",
  "highlight-red": "text-d8fc2f05",
  "highlight-purple": "text-686580be",
  "highlight-blue": "text-1d5bc412",
  "highlight-green": "text-37971848",
  "highlight-yellow": "text-0bfd4b30",
  "highlight-orange": "text-095f600b",
  "highlight-brown": "text-9a036202",
  "color-primary": "text-e2a63ddb",
  "color-primary-light": "text-90ef0011",
  "color-primary-lighter": "text-0007fd70",
  "color-primary-lightest": "text-90bc8463",
  "color-black": "text-a829bb39",
  "color-grey-darker": "text-7f61f614",
  "color-grey-dark": "text-87633288",
  "color-grey": "text-ce3a5661",
  "color-grey-light": "text-062b7cfb",
  "color-grey-lighter": "text-d440dedb",
  "color-grey-lightest": "text-b5b5838e",
  "color-white": "text-5e21a6ab",
  "color-white-light": "text-594d07fe",
  "color-white-lighter": "text-4eaa2528",
  "color-white-lightest": "text-a5b607ec",
  "color-transparent": "text-74a7e339",
  "color-secondary": "text-4f2e814f",
  "color-secondary-light": "text-eda72f5b",
  "color-secondary-lighter": "text-07d9c9f5",
  "color-secondary-lightest": "text-ede16673",
  "color-pink": "text-ed11ee4e",
  "color-red": "text-05f9b7e3",
  "color-purple": "text-9046ee7b",
  "color-blue": "text-c6f96f9e",
  "color-green": "text-adf3bb5c",
  "color-yellow": "text-872a5c1d",
  "color-orange": "text-7457a817",
  "color-brown": "text-61a70379",
  "color-default": "text-c72f9921",
  "color-label": "text-368f0f5d",
  "weight-light": "text-ca8cf57c",
  "weight-normal": "text-70ed55fc",
  "weight-medium": "text-297333f1",
  "weight-semibold": "text-addfe1c7",
  "weight-bold": "text-31617daf",
  "text-align-center": "text-0b5457ee",
  "text-align-right": "text-9d343007",
  "text-align-left": "text-a3cf8da3"
};

var Text = function Text(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      title = _ref.title,
      text = _ref.text,
      children = _ref.children,
      size = _ref.size,
      color = _ref.color,
      highlight = _ref.highlight,
      weight = _ref.weight,
      textAlign = _ref.textAlign,
      showEllipsis = _ref.showEllipsis;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames2["default"])(className, styles.text, size && size !== 'inherit' && (0, _generateResponsiveStyleNames["default"])('size', size).map(function (name) {
      return styles[name];
    }) || '', (_classnames = {}, _defineProperty(_classnames, styles["color-".concat(color)], color), _defineProperty(_classnames, styles["highlight-".concat(highlight)], highlight), _defineProperty(_classnames, styles["weight-".concat(weight)], weight && weight !== 'inherit'), _defineProperty(_classnames, styles["text-align-".concat(textAlign)], textAlign && textAlign !== 'inherit'), _defineProperty(_classnames, styles['show-ellipsis'], showEllipsis), _classnames)),
    title: title
  }, children || text);
};

Text.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node,
  size: _responsiveTextSizes["default"],
  color: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.textColorNames))),
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'inherit']),
  highlight: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  showEllipsis: _propTypes["default"].bool,
  weight: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.fontWeightKeys)))
};
Text.defaultProps = {
  testId: undefined,
  className: '',
  title: '',
  text: '',
  children: null,
  size: 'inherit',
  textAlign: 'inherit',
  color: '',
  highlight: '',
  showEllipsis: false,
  weight: ''
};
var _default = Text;
exports["default"] = _default;