"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProgressBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _colors = require("../../../config/colors");

var _typography = require("../../../config/typography");

var _responsiveTextSizes = _interopRequireDefault(require("../../../shapes/responsiveTextSizes"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "bar__wrapper___2snxP",
  "bar-base": "bar__bar-base___3WhGG",
  "bar-progress": "bar__bar-progress___1cnX7",
  "label": "bar__label___1pbkM",
  "size-xxs": "bar__size-xxs___knL6l",
  "rounded": "bar__rounded___2VvPD",
  "size-xs": "bar__size-xs___1LESt",
  "size-s": "bar__size-s___39_Qs",
  "size-m": "bar__size-m___20oQR",
  "size-l": "bar__size-l___1LAin",
  "base-primary": "bar__base-primary___1S9Bb",
  "active-primary": "bar__active-primary___1X2jH",
  "base-primary-light": "bar__base-primary-light___wiPSl",
  "active-primary-light": "bar__active-primary-light___rlw4z",
  "base-primary-lighter": "bar__base-primary-lighter___3UJZG",
  "active-primary-lighter": "bar__active-primary-lighter___1mT1C",
  "base-primary-lightest": "bar__base-primary-lightest___1RCFm",
  "active-primary-lightest": "bar__active-primary-lightest___t_AUl",
  "base-black": "bar__base-black___R5dVh",
  "active-black": "bar__active-black___1sCC4",
  "base-grey-darker": "bar__base-grey-darker___31ggK",
  "active-grey-darker": "bar__active-grey-darker___1nUmO",
  "base-grey-dark": "bar__base-grey-dark___1LJQu",
  "active-grey-dark": "bar__active-grey-dark___3JCPT",
  "base-grey": "bar__base-grey___IrAFB",
  "active-grey": "bar__active-grey___2WJzT",
  "base-grey-light": "bar__base-grey-light___20AsJ",
  "active-grey-light": "bar__active-grey-light___1xssN",
  "base-grey-lighter": "bar__base-grey-lighter___ALJ9X",
  "active-grey-lighter": "bar__active-grey-lighter___1b8MN",
  "base-grey-lightest": "bar__base-grey-lightest___39Q-O",
  "active-grey-lightest": "bar__active-grey-lightest___NXFqO",
  "base-white": "bar__base-white___2oSJs",
  "active-white": "bar__active-white___2XbUw",
  "base-white-light": "bar__base-white-light___2Ua5H",
  "active-white-light": "bar__active-white-light___24WjA",
  "base-white-lighter": "bar__base-white-lighter___1uHdL",
  "active-white-lighter": "bar__active-white-lighter___2QXdS",
  "base-white-lightest": "bar__base-white-lightest___3PtHL",
  "active-white-lightest": "bar__active-white-lightest___2n_nR",
  "base-secondary": "bar__base-secondary___LtncN",
  "active-secondary": "bar__active-secondary___vJpxh",
  "base-secondary-light": "bar__base-secondary-light___18T9u",
  "active-secondary-light": "bar__active-secondary-light___1lTAH",
  "base-secondary-lighter": "bar__base-secondary-lighter___3FPHg",
  "active-secondary-lighter": "bar__active-secondary-lighter___2BheJ",
  "base-secondary-lightest": "bar__base-secondary-lightest___1V5L9",
  "active-secondary-lightest": "bar__active-secondary-lightest___2zh9h",
  "base-red": "bar__base-red___bao5D",
  "active-red": "bar__active-red___1mQfl",
  "base-green": "bar__base-green___1X8q6",
  "active-green": "bar__active-green___36nL4",
  "base-blue": "bar__base-blue___1C-yQ",
  "active-blue": "bar__active-blue___14AF6",
  "base-yellow": "bar__base-yellow___1WyEa",
  "active-yellow": "bar__active-yellow___8LEC3",
  "placeHolderShimmer": "bar__placeHolderShimmer___12FZq"
};

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
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
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames3.default)('wrapper', "size-".concat(size), {
      rounded: rounded
    })
  }, _react.default.createElement("div", {
    styleName: (0, _classnames3.default)('bar-base', _defineProperty({}, "base-".concat(baseColor), baseColor))
  }, _react.default.createElement("div", {
    styleName: (0, _classnames3.default)('bar-progress', _defineProperty({}, "active-".concat(activeColor), activeColor)),
    style: {
      width: "".concat(base ? Math.round(value / base * 100) : 0, "%")
    }
  })), showLabel && _react.default.createElement(_Text.default, {
    styleName: "label",
    color: labelColor,
    size: labelSize,
    weight: labelWeight,
    text: formatLabel(value, base)
  }));
};

exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['xxs', 'xs', 's', 'm', 'l']),
  value: _propTypes.default.number.isRequired,
  base: _propTypes.default.number,
  baseColor: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.backgroundNames))),
  activeColor: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.backgroundNames))),
  labelColor: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.textColorNames))),
  labelSize: _responsiveTextSizes.default,
  labelWeight: _propTypes.default.oneOf(_typography.fontWeightKeys),
  rounded: _propTypes.default.bool,
  showLabel: _propTypes.default.bool,
  formatLabel: _propTypes.default.func
};
ProgressBar.defaultProps = {
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

var _default = (0, _reactCssModules.default)(ProgressBar, styles, {
  allowMultiple: true
});

exports.default = _default;