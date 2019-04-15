"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Block = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _parseCssSizeValues = _interopRequireDefault(require("../../../helpers/parseCssSizeValues"));

var _responsiveCssSizes = _interopRequireDefault(require("../../../shapes/responsiveCssSizes"));

var _shapes = require("../../../config/shapes");

var _withEmptyOrDefault = _interopRequireDefault(require("../../../shapes/withEmptyOrDefault"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "rounded-none": "block__rounded-none___1Jk8I",
  "rounded-xxs": "block__rounded-xxs___3gkbd",
  "rounded-xs": "block__rounded-xs___1WnEX",
  "rounded-s": "block__rounded-s___3gbVZ",
  "rounded-m": "block__rounded-m___1IYVa",
  "rounded-l": "block__rounded-l___3JFDq",
  "rounded-circular": "block__rounded-circular___1SfLo",
  "layer-1": "block__layer-1___2NvVb",
  "layer-2": "block__layer-2___jf9Oi",
  "layer-3": "block__layer-3___2uGb2",
  "all-m-xxs": "block__all-m-xxs___2Hm_J",
  "top-m-xxs": "block__top-m-xxs___10oDb",
  "right-m-xxs": "block__right-m-xxs___udHxF",
  "bottom-m-xxs": "block__bottom-m-xxs___3YKRs",
  "left-m-xxs": "block__left-m-xxs___3P2_d",
  "all-m-xs": "block__all-m-xs___pCu_0",
  "top-m-xs": "block__top-m-xs___3-yOq",
  "right-m-xs": "block__right-m-xs___1lhqB",
  "bottom-m-xs": "block__bottom-m-xs___3XCw9",
  "left-m-xs": "block__left-m-xs___2fjcT",
  "all-m-s": "block__all-m-s___2WBj2",
  "top-m-s": "block__top-m-s___273tq",
  "right-m-s": "block__right-m-s___31S4f",
  "bottom-m-s": "block__bottom-m-s___1ucPT",
  "left-m-s": "block__left-m-s___2R9pv",
  "all-m-m": "block__all-m-m___3F-5g",
  "top-m-m": "block__top-m-m___1QVXI",
  "right-m-m": "block__right-m-m___1jYhm",
  "bottom-m-m": "block__bottom-m-m___2va2d",
  "left-m-m": "block__left-m-m___2o4ip",
  "all-m-l": "block__all-m-l___2-hzX",
  "top-m-l": "block__top-m-l___3IpM5",
  "right-m-l": "block__right-m-l___hWIh2",
  "bottom-m-l": "block__bottom-m-l___2PWHj",
  "left-m-l": "block__left-m-l___2bt8f",
  "all-m-xl": "block__all-m-xl___3TGmk",
  "top-m-xl": "block__top-m-xl___2pPyn",
  "right-m-xl": "block__right-m-xl___1eC8T",
  "bottom-m-xl": "block__bottom-m-xl___9xRw7",
  "left-m-xl": "block__left-m-xl___1nB0q",
  "all-m-xxl": "block__all-m-xxl___XonpG",
  "top-m-xxl": "block__top-m-xxl___3jqnc",
  "right-m-xxl": "block__right-m-xxl___3VzeK",
  "bottom-m-xxl": "block__bottom-m-xxl___3HYeC",
  "left-m-xxl": "block__left-m-xxl___2z1hE",
  "all-m-0": "block__all-m-0___3v4oB",
  "top-m-0": "block__top-m-0___3Oads",
  "right-m-0": "block__right-m-0___2TWWD",
  "bottom-m-0": "block__bottom-m-0___ekgX5",
  "left-m-0": "block__left-m-0___37rxq",
  "align-m-left": "block__align-m-left___CM-Dr",
  "align-m-center": "block__align-m-center___2Tlfg",
  "align-m-right": "block__align-m-right___3fetX",
  "all-s-xxs": "block__all-s-xxs___1r0uc",
  "top-s-xxs": "block__top-s-xxs___RII0I",
  "right-s-xxs": "block__right-s-xxs___2ZgcI",
  "bottom-s-xxs": "block__bottom-s-xxs___fGqlI",
  "left-s-xxs": "block__left-s-xxs___31pg6",
  "all-s-xs": "block__all-s-xs___2haD7",
  "top-s-xs": "block__top-s-xs___31UJz",
  "right-s-xs": "block__right-s-xs___36oCn",
  "bottom-s-xs": "block__bottom-s-xs___ZQX0-",
  "left-s-xs": "block__left-s-xs___1beed",
  "all-s-s": "block__all-s-s___1YLir",
  "top-s-s": "block__top-s-s___1bxia",
  "right-s-s": "block__right-s-s___3Txf-",
  "bottom-s-s": "block__bottom-s-s___3QO-D",
  "left-s-s": "block__left-s-s___19Xhs",
  "all-s-m": "block__all-s-m___3aBfd",
  "top-s-m": "block__top-s-m___1ovJ4",
  "right-s-m": "block__right-s-m___374PM",
  "bottom-s-m": "block__bottom-s-m___2TKDg",
  "left-s-m": "block__left-s-m___3Lkh1",
  "all-s-l": "block__all-s-l___1ThZV",
  "top-s-l": "block__top-s-l___3ROPq",
  "right-s-l": "block__right-s-l___BmGw_",
  "bottom-s-l": "block__bottom-s-l___11h4F",
  "left-s-l": "block__left-s-l___3Aj_F",
  "all-s-xl": "block__all-s-xl___YvqP6",
  "top-s-xl": "block__top-s-xl___21wlH",
  "right-s-xl": "block__right-s-xl___3lqLA",
  "bottom-s-xl": "block__bottom-s-xl___3Sv4O",
  "left-s-xl": "block__left-s-xl___2zsQH",
  "all-s-xxl": "block__all-s-xxl___NXaW3",
  "top-s-xxl": "block__top-s-xxl___dsgqu",
  "right-s-xxl": "block__right-s-xxl___2tWr0",
  "bottom-s-xxl": "block__bottom-s-xxl___fB7F-",
  "left-s-xxl": "block__left-s-xxl___3gt4P",
  "all-s-0": "block__all-s-0___1kd20",
  "top-s-0": "block__top-s-0___3CrxJ",
  "right-s-0": "block__right-s-0___1KJaW",
  "bottom-s-0": "block__bottom-s-0___3sFqW",
  "left-s-0": "block__left-s-0___1x_VH",
  "align-s-left": "block__align-s-left___1uDkl",
  "align-s-center": "block__align-s-center___1q911",
  "align-s-right": "block__align-s-right___qjeJU",
  "all-xs-xxs": "block__all-xs-xxs___2xd_8",
  "top-xs-xxs": "block__top-xs-xxs___32nWP",
  "right-xs-xxs": "block__right-xs-xxs___Y_g2G",
  "bottom-xs-xxs": "block__bottom-xs-xxs___86gb9",
  "left-xs-xxs": "block__left-xs-xxs___1_ZH8",
  "all-xs-xs": "block__all-xs-xs___36kDn",
  "top-xs-xs": "block__top-xs-xs___3B4d2",
  "right-xs-xs": "block__right-xs-xs___D7mg-",
  "bottom-xs-xs": "block__bottom-xs-xs___2d9eu",
  "left-xs-xs": "block__left-xs-xs___3HIKa",
  "all-xs-s": "block__all-xs-s___3nVG7",
  "top-xs-s": "block__top-xs-s___RRtTJ",
  "right-xs-s": "block__right-xs-s___3MnwR",
  "bottom-xs-s": "block__bottom-xs-s___2KHIA",
  "left-xs-s": "block__left-xs-s___bnqJI",
  "all-xs-m": "block__all-xs-m___voYqm",
  "top-xs-m": "block__top-xs-m___2U5xS",
  "right-xs-m": "block__right-xs-m___1iETd",
  "bottom-xs-m": "block__bottom-xs-m___3uixj",
  "left-xs-m": "block__left-xs-m___3LjtW",
  "all-xs-l": "block__all-xs-l___2XyGD",
  "top-xs-l": "block__top-xs-l___Frb77",
  "right-xs-l": "block__right-xs-l___2Vj82",
  "bottom-xs-l": "block__bottom-xs-l___6VF8M",
  "left-xs-l": "block__left-xs-l___3evAN",
  "all-xs-xl": "block__all-xs-xl___3zVI2",
  "top-xs-xl": "block__top-xs-xl___1Kcq8",
  "right-xs-xl": "block__right-xs-xl___35oJG",
  "bottom-xs-xl": "block__bottom-xs-xl___3aMgY",
  "left-xs-xl": "block__left-xs-xl___2U-IA",
  "all-xs-xxl": "block__all-xs-xxl___25Yjm",
  "top-xs-xxl": "block__top-xs-xxl___1i8Pz",
  "right-xs-xxl": "block__right-xs-xxl___3UCU5",
  "bottom-xs-xxl": "block__bottom-xs-xxl___yAD--",
  "left-xs-xxl": "block__left-xs-xxl___1-1Rj",
  "all-xs-0": "block__all-xs-0___OO-K6",
  "top-xs-0": "block__top-xs-0___35Iyq",
  "right-xs-0": "block__right-xs-0___1z9-7",
  "bottom-xs-0": "block__bottom-xs-0___1mo9r",
  "left-xs-0": "block__left-xs-0___3zWe1",
  "align-xs-left": "block__align-xs-left___3WUHg",
  "align-xs-center": "block__align-xs-center___1tYNy",
  "align-xs-right": "block__align-xs-right___3bctG",
  "stretch": "block__stretch___1xxX6",
  "inline": "block__inline___18Vq8",
  "with-border": "block__with-border___2yYp1",
  "full-border": "block__full-border___1xSNi",
  "border-top": "block__border-top___1Yt77",
  "border-right": "block__border-right___3zCo8",
  "border-bottom": "block__border-bottom___ivhQP",
  "border-left": "block__border-left___XYUja",
  "overflow-hidden": "block__overflow-hidden___2a1pf",
  "clickable": "block__clickable___2mvxJ",
  "bg-primary": "block__bg-primary___novhJ",
  "border-primary": "block__border-primary___1ytra",
  "bg-primary-light": "block__bg-primary-light___kyKmV",
  "border-primary-light": "block__border-primary-light___36sb6",
  "bg-primary-lighter": "block__bg-primary-lighter___N6t7X",
  "border-primary-lighter": "block__border-primary-lighter___22GM_",
  "bg-primary-lightest": "block__bg-primary-lightest___2zGUG",
  "border-primary-lightest": "block__border-primary-lightest___2F2BC",
  "bg-black": "block__bg-black___AzcgZ",
  "border-black": "block__border-black___29nnr",
  "bg-grey-darker": "block__bg-grey-darker___1Xz4t",
  "border-grey-darker": "block__border-grey-darker___2JWfC",
  "bg-grey-dark": "block__bg-grey-dark___3iJG-",
  "border-grey-dark": "block__border-grey-dark___1rDoX",
  "bg-grey": "block__bg-grey___2uVTi",
  "border-grey": "block__border-grey___2dYqT",
  "bg-grey-light": "block__bg-grey-light___2XZJP",
  "border-grey-light": "block__border-grey-light___3D6g0",
  "bg-grey-lighter": "block__bg-grey-lighter___3srv3",
  "border-grey-lighter": "block__border-grey-lighter___3nVR3",
  "bg-grey-lightest": "block__bg-grey-lightest___2czwk",
  "border-grey-lightest": "block__border-grey-lightest___1GnGa",
  "bg-white": "block__bg-white___1YHFC",
  "border-white": "block__border-white___28WwK",
  "bg-white-light": "block__bg-white-light___-9f__",
  "border-white-light": "block__border-white-light___2xQU_",
  "bg-white-lighter": "block__bg-white-lighter___3aOZP",
  "border-white-lighter": "block__border-white-lighter___3PQlV",
  "bg-white-lightest": "block__bg-white-lightest___xQk_R",
  "border-white-lightest": "block__border-white-lightest___3-8pi",
  "bg-secondary": "block__bg-secondary___2Xcu6",
  "border-secondary": "block__border-secondary___1KiiN",
  "bg-secondary-light": "block__bg-secondary-light___GfA4Y",
  "border-secondary-light": "block__border-secondary-light___1IF3q",
  "bg-secondary-lighter": "block__bg-secondary-lighter___2ATN9",
  "border-secondary-lighter": "block__border-secondary-lighter___3RNk3",
  "bg-secondary-lightest": "block__bg-secondary-lightest___2VH77",
  "border-secondary-lightest": "block__border-secondary-lightest___3vF4p",
  "bg-red": "block__bg-red___2v2KJ",
  "border-red": "block__border-red___1lMj2",
  "bg-green": "block__bg-green___O9x8v",
  "border-green": "block__border-green___RCD-C",
  "bg-blue": "block__bg-blue___w5v46",
  "border-blue": "block__border-blue___1dGyF",
  "bg-yellow": "block__bg-yellow___2oSdn",
  "border-yellow": "block__border-yellow___1Zu1y"
};

var Block = function Block(_ref) {
  var _ref2;

  var className = _ref.className,
      style = _ref.style,
      padding = _ref.padding,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      background = _ref.background,
      borderColor = _ref.borderColor,
      hasBorder = _ref.hasBorder,
      hasBorderTop = _ref.hasBorderTop,
      hasBorderRight = _ref.hasBorderRight,
      hasBorderBottom = _ref.hasBorderBottom,
      hasBorderLeft = _ref.hasBorderLeft,
      layer = _ref.layer,
      align = _ref.align,
      stretch = _ref.stretch,
      inline = _ref.inline,
      borderRadius = _ref.borderRadius,
      overflowHidden = _ref.overflowHidden,
      children = _ref.children,
      onClick = _ref.onClick;

  var sizeMap = _objectSpread({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }, (0, _parseCssSizeValues.default)(padding));

  var sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left'].filter(function (size) {
    return sizeMap[size];
  }).map(function (size) {
    return (0, _generateResponsiveStyleNames.default)(size, sizeMap[size]);
  });
  var hasAnyBorder = hasBorder || hasBorderTop || hasBorderRight || hasBorderBottom || hasBorderLeft;
  var roundedSize = borderRadius === 'default' ? _shapes.defaultRoundedCornerKey : borderRadius && borderRadius !== 'none' ? borderRadius : '';
  return _react.default.createElement("div", {
    className: className,
    styleName: _classnames.default.apply(void 0, _toConsumableArray(sizeStyleNames).concat([align && (0, _generateResponsiveStyleNames.default)('align', align) || '', (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(background), background), _defineProperty(_ref2, "border-".concat(borderColor), hasAnyBorder && borderColor), _defineProperty(_ref2, 'with-border', hasAnyBorder), _defineProperty(_ref2, 'full-border', hasBorder), _defineProperty(_ref2, 'border-top', hasBorderTop), _defineProperty(_ref2, 'border-right', hasBorderRight), _defineProperty(_ref2, 'border-bottom', hasBorderBottom), _defineProperty(_ref2, 'border-left', hasBorderLeft), _defineProperty(_ref2, "rounded-".concat(roundedSize), roundedSize), _defineProperty(_ref2, 'overflow-hidden', overflowHidden), _defineProperty(_ref2, "layer-".concat(layer), layer), _defineProperty(_ref2, "clickable", onClick), _defineProperty(_ref2, "stretch", stretch), _defineProperty(_ref2, "inline", inline), _ref2)])),
    style: style,
    onClick: onClick
  }, children);
};

exports.Block = Block;
Block.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  padding: _responsiveCssSizes.default,
  top: _responsiveCssSizes.default,
  right: _responsiveCssSizes.default,
  bottom: _responsiveCssSizes.default,
  left: _responsiveCssSizes.default,
  background: _propTypes.default.string,
  borderColor: _propTypes.default.string,
  hasBorder: _propTypes.default.bool,
  hasBorderTop: _propTypes.default.bool,
  hasBorderRight: _propTypes.default.bool,
  hasBorderBottom: _propTypes.default.bool,
  hasBorderLeft: _propTypes.default.bool,
  layer: _propTypes.default.oneOf(_shapes.shadowLayerKeys),
  align: (0, _generateResponsiveShape.default)(['', 'left', 'center', 'right']),
  stretch: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  borderRadius: _propTypes.default.oneOf((0, _withEmptyOrDefault.default)(_shapes.roundedCornerKeys)),
  overflowHidden: _propTypes.default.bool,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func
};
Block.defaultProps = {
  className: '',
  style: {},
  padding: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  background: '',
  borderColor: '',
  hasBorder: false,
  hasBorderTop: false,
  hasBorderRight: false,
  hasBorderBottom: false,
  hasBorderLeft: false,
  layer: 0,
  align: '',
  stretch: false,
  inline: false,
  borderRadius: '',
  overflowHidden: false,
  children: null,
  onClick: null
};

var _default = (0, _reactCssModules.default)(Block, styles, {
  allowMultiple: true
});

exports.default = _default;