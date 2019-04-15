"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _colors = require("../../../config/colors");

var _typography = require("../../../config/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "text": "text__text___2UEDl",
  "show-ellipsis": "text__show-ellipsis___24h3W",
  "size-m-xxs": "text__size-m-xxs___1I06Q",
  "size-m-xs": "text__size-m-xs___xUVea",
  "size-m-s": "text__size-m-s___1ig9d",
  "size-m-m": "text__size-m-m___2YgGv",
  "size-m-l": "text__size-m-l___2oMNc",
  "size-m-xl": "text__size-m-xl___3YIu3",
  "size-m-xxl": "text__size-m-xxl___26_mt",
  "size-s-xxs": "text__size-s-xxs___2Eg90",
  "size-s-xs": "text__size-s-xs___2rJRw",
  "size-s-s": "text__size-s-s___2ZMlB",
  "size-s-m": "text__size-s-m___fsa9U",
  "size-s-l": "text__size-s-l___111Lg",
  "size-s-xl": "text__size-s-xl___HTezR",
  "size-s-xxl": "text__size-s-xxl___2zWKL",
  "size-xs-xxs": "text__size-xs-xxs___3gB-B",
  "size-xs-xs": "text__size-xs-xs___2M5qy",
  "size-xs-s": "text__size-xs-s___3Nady",
  "size-xs-m": "text__size-xs-m___3GxIU",
  "size-xs-l": "text__size-xs-l___ZoMhS",
  "size-xs-xl": "text__size-xs-xl___1WgMA",
  "size-xs-xxl": "text__size-xs-xxl___364Li",
  "highlight-primary": "text__highlight-primary___3ticE",
  "highlight-primary-light": "text__highlight-primary-light___1QcVY",
  "highlight-primary-lighter": "text__highlight-primary-lighter___3asdy",
  "highlight-primary-lightest": "text__highlight-primary-lightest___3UeaW",
  "highlight-black": "text__highlight-black___2YFRD",
  "highlight-grey-darker": "text__highlight-grey-darker___7RaU7",
  "highlight-grey-dark": "text__highlight-grey-dark___2uJLs",
  "highlight-grey": "text__highlight-grey___1t4U2",
  "highlight-grey-light": "text__highlight-grey-light___1Cu5k",
  "highlight-grey-lighter": "text__highlight-grey-lighter___1_qyC",
  "highlight-grey-lightest": "text__highlight-grey-lightest___y_4nu",
  "highlight-white": "text__highlight-white___2NTmd",
  "highlight-white-light": "text__highlight-white-light___3YZV5",
  "highlight-white-lighter": "text__highlight-white-lighter___2Uo57",
  "highlight-white-lightest": "text__highlight-white-lightest___3wAr1",
  "highlight-secondary": "text__highlight-secondary___1zOT9",
  "highlight-secondary-light": "text__highlight-secondary-light___1mrT0",
  "highlight-secondary-lighter": "text__highlight-secondary-lighter___26EBC",
  "highlight-secondary-lightest": "text__highlight-secondary-lightest___3PIKO",
  "highlight-red": "text__highlight-red___qtrJH",
  "highlight-green": "text__highlight-green___1hB-n",
  "highlight-blue": "text__highlight-blue___1giLI",
  "highlight-yellow": "text__highlight-yellow___3NHUc",
  "color-primary": "text__color-primary___3ciUw",
  "color-primary-light": "text__color-primary-light___JM7aV",
  "color-primary-lighter": "text__color-primary-lighter___39bb1",
  "color-primary-lightest": "text__color-primary-lightest___1Xe5U",
  "color-black": "text__color-black___dmENg",
  "color-grey-darker": "text__color-grey-darker___mVdoQ",
  "color-grey-dark": "text__color-grey-dark___3HcQH",
  "color-grey": "text__color-grey___3OYDx",
  "color-grey-light": "text__color-grey-light___2lnIH",
  "color-grey-lighter": "text__color-grey-lighter___YcQPm",
  "color-grey-lightest": "text__color-grey-lightest___1PXRD",
  "color-white": "text__color-white___1LPe3",
  "color-white-light": "text__color-white-light___2dSe1",
  "color-white-lighter": "text__color-white-lighter___2tiiu",
  "color-white-lightest": "text__color-white-lightest___2HYvd",
  "color-secondary": "text__color-secondary___3fsNJ",
  "color-secondary-light": "text__color-secondary-light___3SWTS",
  "color-secondary-lighter": "text__color-secondary-lighter___2sX7P",
  "color-secondary-lightest": "text__color-secondary-lightest___391tS",
  "color-red": "text__color-red___2erwP",
  "color-green": "text__color-green___15D1U",
  "color-blue": "text__color-blue___1vFxV",
  "color-yellow": "text__color-yellow___hnEyz",
  "color-default": "text__color-default___3P0z4",
  "color-label": "text__color-label___38o9L",
  "weight-light": "text__weight-light___26CDP",
  "weight-normal": "text__weight-normal___3L1am",
  "weight-book": "text__weight-book___2Cbmb",
  "weight-semibold": "text__weight-semibold___kj-Am",
  "weight-bold": "text__weight-bold___3lpAO",
  "text-align-center": "text__text-align-center___1qE0p",
  "text-align-right": "text__text-align-right___21j-T",
  "text-align-left": "text__text-align-left___3CuS0"
};

var Text = function Text(_ref) {
  var _classnames;

  var className = _ref.className,
      text = _ref.text,
      children = _ref.children,
      size = _ref.size,
      color = _ref.color,
      highlight = _ref.highlight,
      weight = _ref.weight,
      textAlign = _ref.textAlign,
      showEllipsis = _ref.showEllipsis;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames2.default)('text', size && size !== 'inherit' && (0, _generateResponsiveStyleNames.default)('size', size) || '', (_classnames = {}, _defineProperty(_classnames, "color-".concat(color), color), _defineProperty(_classnames, "highlight-".concat(highlight), highlight), _defineProperty(_classnames, "weight-".concat(weight), weight && weight !== 'inherit'), _defineProperty(_classnames, "text-align-".concat(textAlign), textAlign && textAlign !== 'inherit'), _defineProperty(_classnames, 'show-ellipsis', showEllipsis), _classnames))
  }, children || text);
};

exports.Text = Text;
Text.propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  children: _propTypes.default.node,
  size: _responsiveTextSizes.default,
  color: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.textColorNames))),
  textAlign: _propTypes.default.oneOf(['center', 'left', 'right', 'inherit']),
  highlight: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.colorNames))),
  showEllipsis: _propTypes.default.bool,
  weight: _propTypes.default.oneOf(_typography.fontWeightKeys)
};
Text.defaultProps = {
  className: '',
  text: '',
  children: null,
  size: 'inherit',
  textAlign: 'inherit',
  color: '',
  highlight: '',
  showEllipsis: false,
  weight: 'light'
};

var _default = (0, _reactCssModules.default)(Text, styles, {
  allowMultiple: true
});

exports.default = _default;