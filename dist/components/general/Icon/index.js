"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "color-primary": "icon-ea2c54c1",
  "color-primary-light": "icon-5f9395ee",
  "color-primary-lighter": "icon-dc9bd29a",
  "color-primary-lightest": "icon-09f7c0b3",
  "color-black": "icon-a0d498e4",
  "color-grey-darker": "icon-40b35283",
  "color-grey-dark": "icon-2b80ffd9",
  "color-grey": "icon-4ed35730",
  "color-grey-light": "icon-926d97e6",
  "color-grey-lighter": "icon-64532857",
  "color-grey-lightest": "icon-6f209116",
  "color-white": "icon-7e82f791",
  "color-white-light": "icon-4aa0f466",
  "color-white-lighter": "icon-d2d8e512",
  "color-white-lightest": "icon-2d5d186f",
  "color-secondary": "icon-3f85569f",
  "color-secondary-light": "icon-987f4099",
  "color-secondary-lighter": "icon-ccbd29c0",
  "color-secondary-lightest": "icon-fc38512b",
  "color-pink": "icon-7e30e40e",
  "color-red": "icon-d2c225ad",
  "color-purple": "icon-601405c6",
  "color-blue": "icon-ac6016ab",
  "color-green": "icon-0b75c6d3",
  "color-yellow": "icon-176fc752",
  "color-orange": "icon-85a725d9",
  "color-brown": "icon-8a6079a5",
  "color-default": "icon-d12ea76e",
  "color-label": "icon-508e64a3",
  "size--xxs": "icon-46799b2d",
  "size--xs": "icon-87a79703",
  "size--s": "icon-f61e2c48",
  "size--m": "icon-ac7f0cb1",
  "size--l": "icon-68899ad3",
  "size--xl": "icon-9f4ae582",
  "size--xxl": "icon-7ee6d2d9",
  "size-xs-xxs": "icon-1d335233",
  "size-xs-xs": "icon-93fade91",
  "size-xs-s": "icon-57edbf02",
  "size-xs-m": "icon-302d4801",
  "size-xs-l": "icon-f2239fe8",
  "size-xs-xl": "icon-d51a62d1",
  "size-xs-xxl": "icon-4c414923",
  "size-s-xxs": "icon-5c92e744",
  "size-s-xs": "icon-0cd2d6e0",
  "size-s-s": "icon-1783b9f8",
  "size-s-m": "icon-da1540e5",
  "size-s-l": "icon-b8f25772",
  "size-s-xl": "icon-2779b62d",
  "size-s-xxl": "icon-58612d78",
  "size-m-xxs": "icon-f78c525f",
  "size-m-xs": "icon-34ceb0cf",
  "size-m-s": "icon-e900bc60",
  "size-m-m": "icon-43d7d718",
  "size-m-l": "icon-f2d7ea6a",
  "size-m-xl": "icon-05e6b620",
  "size-m-xxl": "icon-bfd94c90",
  "size-l-xxs": "icon-96ef2a5e",
  "size-l-xs": "icon-b2329bc2",
  "size-l-s": "icon-5b101794",
  "size-l-m": "icon-c0906805",
  "size-l-l": "icon-3af891dd",
  "size-l-xl": "icon-848f9026",
  "size-l-xxl": "icon-35017ef2",
  "size-xl-xxs": "icon-4f57684c",
  "size-xl-xs": "icon-6bd1fc6f",
  "size-xl-s": "icon-35d9ecd5",
  "size-xl-m": "icon-dbd8d868",
  "size-xl-l": "icon-b335a7ad",
  "size-xl-xl": "icon-ac35654c",
  "size-xl-xxl": "icon-bc4106f2",
  "size-xxl-xxs": "icon-f9ec508d",
  "size-xxl-xs": "icon-ea5afe4b",
  "size-xxl-s": "icon-54aa68fa",
  "size-xxl-m": "icon-e740103e",
  "size-xxl-l": "icon-3470a8a2",
  "size-xxl-xl": "icon-3d07df65",
  "size-xxl-xxl": "icon-2b5cda41",
  "rotate-0": "icon-b4076a53",
  "rotate-90": "icon-263a374a",
  "rotate-180": "icon-95ca6500",
  "rotate-270": "icon-c1a12764",
  "flip-horizontal": "icon-74973ee5",
  "flip-vertical": "icon-bf1e9e73",
  "spin": "icon-fb17c474",
  "icon-spin": "icon-3699b78b"
};

var Icon = function Icon(_ref) {
  var _classnames;

  var className = _ref.className,
      name = _ref.name,
      size = _ref.size,
      color = _ref.color,
      rotate = _ref.rotate,
      spin = _ref.spin,
      flipHorizontal = _ref.flipHorizontal,
      flipVertical = _ref.flipVertical;
  return _react.default.createElement("i", {
    className: (0, _classnames2.default)('material-icons cm-icon', className),
    styleName: (0, _classnames2.default)(size && size !== 'inherit' && (0, _generateResponsiveStyleNames.default)('size', size) || '', (_classnames = {}, _defineProperty(_classnames, "color-".concat(color), color), _defineProperty(_classnames, "rotate-".concat(rotate), rotate), _defineProperty(_classnames, 'flip-horizontal', flipHorizontal), _defineProperty(_classnames, 'flip-vertical', flipVertical), _defineProperty(_classnames, "spin", spin), _classnames))
  }, name);
};

exports.Icon = Icon;
Icon.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  size: _responsiveTextSizes.default,
  color: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.textColorNames))),
  rotate: _propTypes.default.oneOf(_styleConstants.iconRotateDegrees),
  flipHorizontal: _propTypes.default.bool,
  flipVertical: _propTypes.default.bool,
  spin: _propTypes.default.bool
};
Icon.defaultProps = {
  className: '',
  size: 'inherit',
  color: '',
  rotate: 0,
  flipHorizontal: false,
  flipVertical: false,
  spin: false
};

var _default = (0, _reactCssModules.default)(Icon, styles, {
  allowMultiple: true
});

exports.default = _default;