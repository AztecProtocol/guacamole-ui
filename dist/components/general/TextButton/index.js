"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _colors = require("../../../config/colors");

var _typography = require("../../../config/typography");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "color-primary": "button__color-primary___LVCp9",
  "color-primary-light": "button__color-primary-light___3EM3n",
  "color-primary-lighter": "button__color-primary-lighter___2H2yR",
  "color-primary-lightest": "button__color-primary-lightest___1nXwh",
  "color-black": "button__color-black___vHrPY",
  "color-grey-darker": "button__color-grey-darker___32eE6",
  "color-grey-dark": "button__color-grey-dark___3khha",
  "color-grey": "button__color-grey___3N_pc",
  "color-grey-light": "button__color-grey-light___2GUjY",
  "color-grey-lighter": "button__color-grey-lighter___2_KH_",
  "color-grey-lightest": "button__color-grey-lightest___QytOC",
  "color-white": "button__color-white___2pjFa",
  "color-white-light": "button__color-white-light___JW5ZT",
  "color-white-lighter": "button__color-white-lighter___3590b",
  "color-white-lightest": "button__color-white-lightest___30ao6",
  "color-secondary": "button__color-secondary___Uu4_I",
  "color-secondary-light": "button__color-secondary-light___1ARHn",
  "color-secondary-lighter": "button__color-secondary-lighter___3tJPs",
  "color-secondary-lightest": "button__color-secondary-lightest___3RReC",
  "color-red": "button__color-red___3KGtB",
  "color-green": "button__color-green___14O6C",
  "color-blue": "button__color-blue___ITm8z",
  "color-yellow": "button__color-yellow___3qxU2",
  "color-default": "button__color-default___hOlOT",
  "color-label": "button__color-label___1Yrut",
  "button": "button__button___25Xbf",
  "disabled": "button__disabled___2WQdT",
  "theme-default": "button__theme-default___2Sr-3",
  "theme-underline": "button__theme-underline___5mChj"
};

var TextButton = function TextButton(_ref) {
  var _classnames;

  var className = _ref.className,
      theme = _ref.theme,
      text = _ref.text,
      children = _ref.children,
      size = _ref.size,
      weight = _ref.weight,
      color = _ref.color,
      href = _ref.href,
      onClick = _ref.onClick,
      Link = _ref.Link,
      stopPropagation = _ref.stopPropagation,
      disabled = _ref.disabled;
  return _react.default.createElement(_Clickable.default, {
    className: className,
    styleName: (0, _classnames2.default)('button', (_classnames = {}, _defineProperty(_classnames, "theme-".concat(theme), theme !== 'normal'), _defineProperty(_classnames, "color-".concat(color), color && color !== 'inherit'), _defineProperty(_classnames, "disabled", disabled), _classnames)),
    href: href,
    onClick: onClick,
    Link: Link,
    stopPropagation: stopPropagation,
    disabled: disabled
  }, _react.default.createElement(_Text.default, {
    text: text,
    size: size,
    weight: weight
  }, children));
};

exports.TextButton = TextButton;
TextButton.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(['default', 'normal', 'underline']),
  text: _propTypes.default.string,
  children: _propTypes.default.node,
  size: _responsiveTextSizes.default,
  weight: _propTypes.default.oneOf(_typography.fontWeightKeys),
  color: _propTypes.default.oneOf(_colors.textColorNames),
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  Link: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  stopPropagation: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
TextButton.defaultProps = {
  className: '',
  theme: 'default',
  text: '',
  children: null,
  size: 'inherit',
  weight: 'book',
  color: 'secondary',
  href: '',
  onClick: null,
  Link: 'a',
  stopPropagation: false,
  disabled: false
};

var _default = (0, _reactCssModules.default)(TextButton, styles, {
  allowMultiple: true
});

exports.default = _default;