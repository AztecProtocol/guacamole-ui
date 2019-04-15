"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _colors = require("../../../config/colors");

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "color-primary": "icon__color-primary___3nDrf",
  "color-primary-light": "icon__color-primary-light___we-Yb",
  "color-primary-lighter": "icon__color-primary-lighter___3rUVW",
  "color-primary-lightest": "icon__color-primary-lightest___2xoC0",
  "color-black": "icon__color-black___3HI5d",
  "color-grey-darker": "icon__color-grey-darker___hqeVl",
  "color-grey-dark": "icon__color-grey-dark___yOdk3",
  "color-grey": "icon__color-grey___9DOA6",
  "color-grey-light": "icon__color-grey-light___NI5ha",
  "color-grey-lighter": "icon__color-grey-lighter___240pL",
  "color-grey-lightest": "icon__color-grey-lightest___3FfZ_",
  "color-white": "icon__color-white___3MnSQ",
  "color-white-light": "icon__color-white-light___ZNO8Y",
  "color-white-lighter": "icon__color-white-lighter___2R7AE",
  "color-white-lightest": "icon__color-white-lightest___26Tk0",
  "color-secondary": "icon__color-secondary___3XPI8",
  "color-secondary-light": "icon__color-secondary-light___MFPWH",
  "color-secondary-lighter": "icon__color-secondary-lighter___1ioaX",
  "color-secondary-lightest": "icon__color-secondary-lightest___1aE1q",
  "color-red": "icon__color-red___F0o9U",
  "color-green": "icon__color-green___25JWs",
  "color-blue": "icon__color-blue___2yBot",
  "color-yellow": "icon__color-yellow___Ki9nJ",
  "color-default": "icon__color-default___2CxWh",
  "color-label": "icon__color-label___3dsA_",
  "size-m-xxs": "icon__size-m-xxs___1SMb7",
  "size-m-xs": "icon__size-m-xs___Mm0Gx",
  "size-m-s": "icon__size-m-s___2r6Kh",
  "size-m-m": "icon__size-m-m___3NkBp",
  "size-m-l": "icon__size-m-l___3vkn_",
  "size-m-xl": "icon__size-m-xl___2VPNz",
  "size-m-xxl": "icon__size-m-xxl___3DKr5",
  "size-s-xxs": "icon__size-s-xxs___2xJfs",
  "size-s-xs": "icon__size-s-xs___3Ep3C",
  "size-s-s": "icon__size-s-s___1rBW5",
  "size-s-m": "icon__size-s-m___2jJXO",
  "size-s-l": "icon__size-s-l___o8y2c",
  "size-s-xl": "icon__size-s-xl___1XWFy",
  "size-s-xxl": "icon__size-s-xxl___1y7wG",
  "size-xs-xxs": "icon__size-xs-xxs___6tKi7",
  "size-xs-xs": "icon__size-xs-xs___3S1A6",
  "size-xs-s": "icon__size-xs-s___PelGS",
  "size-xs-m": "icon__size-xs-m___pCPA5",
  "size-xs-l": "icon__size-xs-l___5yY3O",
  "size-xs-xl": "icon__size-xs-xl___b4YX3",
  "size-xs-xxl": "icon__size-xs-xxl___3yVdD",
  "rotate-0": "icon__rotate-0___1KvJs",
  "rotate-90": "icon__rotate-90___1xjnY",
  "rotate-180": "icon__rotate-180___2d0zX",
  "rotate-270": "icon__rotate-270___2RXGn",
  "flip-horizontal": "icon__flip-horizontal___oGExt",
  "flip-vertical": "icon__flip-vertical___3HLkT",
  "spin": "icon__spin___4r7c4",
  "icon-spin": "icon__icon-spin___iEWXe"
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
  color: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.textColorNames))),
  rotate: _propTypes.default.oneOf([0, 90, 180, 270]),
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