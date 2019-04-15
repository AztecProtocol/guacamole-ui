"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AvatarGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _colors = require("../../../config/colors");

var _shapes = require("../../../config/shapes");

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "group-xxs": "avatars__group-xxs___-ZQxD",
  "avatar": "avatars__avatar___21ZXD",
  "group-xs": "avatars__group-xs___CT31U",
  "group-s": "avatars__group-s___3kMRA",
  "group-m": "avatars__group-m___6-Otx",
  "group-l": "avatars__group-l___1G-0-",
  "group-xl": "avatars__group-xl___2CbqU",
  "group-xxl": "avatars__group-xxl___3tAi7",
  "tooltip": "avatars__tooltip____qQUb",
  "interactive": "avatars__interactive____K876",
  "bg-primary": "avatars__bg-primary___3blQh",
  "tooltip-primary": "avatars__tooltip-primary___1TS2k",
  "bg-primary-light": "avatars__bg-primary-light___rYi1i",
  "tooltip-primary-light": "avatars__tooltip-primary-light___xRdn3",
  "bg-primary-lighter": "avatars__bg-primary-lighter___2O2Le",
  "tooltip-primary-lighter": "avatars__tooltip-primary-lighter___26Lo_",
  "bg-primary-lightest": "avatars__bg-primary-lightest___2lImi",
  "tooltip-primary-lightest": "avatars__tooltip-primary-lightest___2IQbM",
  "bg-black": "avatars__bg-black___3dK1d",
  "tooltip-black": "avatars__tooltip-black___1SjRE",
  "bg-grey-darker": "avatars__bg-grey-darker___3enk4",
  "tooltip-grey-darker": "avatars__tooltip-grey-darker___37B9I",
  "bg-grey-dark": "avatars__bg-grey-dark___3NCqh",
  "tooltip-grey-dark": "avatars__tooltip-grey-dark___2Ai2j",
  "bg-grey": "avatars__bg-grey___3uaHF",
  "tooltip-grey": "avatars__tooltip-grey___QV7tz",
  "bg-grey-light": "avatars__bg-grey-light___nBeYf",
  "tooltip-grey-light": "avatars__tooltip-grey-light___2mVGZ",
  "bg-grey-lighter": "avatars__bg-grey-lighter___39h__",
  "tooltip-grey-lighter": "avatars__tooltip-grey-lighter___2i67o",
  "bg-grey-lightest": "avatars__bg-grey-lightest___w5ljl",
  "tooltip-grey-lightest": "avatars__tooltip-grey-lightest___Ql-OE",
  "bg-white": "avatars__bg-white___2HyUz",
  "tooltip-white": "avatars__tooltip-white___3d0ID",
  "bg-white-light": "avatars__bg-white-light___3zxoh",
  "tooltip-white-light": "avatars__tooltip-white-light___3Uzq0",
  "bg-white-lighter": "avatars__bg-white-lighter___1_Pt2",
  "tooltip-white-lighter": "avatars__tooltip-white-lighter___1PTTK",
  "bg-white-lightest": "avatars__bg-white-lightest___27ekK",
  "tooltip-white-lightest": "avatars__tooltip-white-lightest___f5gmC",
  "bg-secondary": "avatars__bg-secondary___2JCIw",
  "tooltip-secondary": "avatars__tooltip-secondary___26lKZ",
  "bg-secondary-light": "avatars__bg-secondary-light___152iC",
  "tooltip-secondary-light": "avatars__tooltip-secondary-light___895U8",
  "bg-secondary-lighter": "avatars__bg-secondary-lighter___2rrg2",
  "tooltip-secondary-lighter": "avatars__tooltip-secondary-lighter___2yxba",
  "bg-secondary-lightest": "avatars__bg-secondary-lightest___5Voyp",
  "tooltip-secondary-lightest": "avatars__tooltip-secondary-lightest___BvqVe",
  "bg-red": "avatars__bg-red___1Ulcp",
  "tooltip-red": "avatars__tooltip-red___k7hSR",
  "bg-green": "avatars__bg-green___3XVEN",
  "tooltip-green": "avatars__tooltip-green___3zuZH",
  "bg-blue": "avatars__bg-blue___2BPmb",
  "tooltip-blue": "avatars__tooltip-blue___1NN-D",
  "bg-yellow": "avatars__bg-yellow___1fEzL",
  "tooltip-yellow": "avatars__tooltip-yellow___1C1qp",
  "placeHolderShimmer": "avatars__placeHolderShimmer___N6mlu"
};

var AvatarGroup = function AvatarGroup(_ref) {
  var className = _ref.className,
      size = _ref.size,
      avatars = _ref.avatars,
      background = _ref.background;
  return _react.default.createElement("div", {
    className: className,
    styleName: "group-".concat(size, " bg-").concat(background)
  }, avatars.map(function (_ref2, i) {
    var tooltip = _ref2.tooltip,
        tooltipBackground = _ref2.tooltipBackground,
        avatar = _objectWithoutProperties(_ref2, ["tooltip", "tooltipBackground"]);

    return _react.default.createElement("div", {
      key: +i,
      styleName: (0, _classnames2.default)('avatar', {
        interactive: tooltip || avatar.onClick
      })
    }, _react.default.createElement(_Avatar.default, _extends({}, avatar, {
      size: size,
      shape: "circular"
    })), tooltip && _react.default.createElement("div", {
      styleName: (0, _classnames2.default)('tooltip', _defineProperty({}, "tooltip-".concat(tooltipBackground), tooltipBackground))
    }, typeof tooltip !== 'string' ? tooltip : _react.default.createElement(_Text.default, {
      text: tooltip,
      size: "xxs"
    })));
  }));
};

exports.AvatarGroup = AvatarGroup;
AvatarGroup.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_shapes.shapeSizeKeys),
  avatars: _propTypes.default.arrayOf(_propTypes.default.shape({
    iconName: _propTypes.default.string,
    src: _propTypes.default.string,
    alt: _propTypes.default.string,
    color: _propTypes.default.oneOf(_colors.colorNames),
    background: _propTypes.default.oneOf(_colors.backgroundNames),
    inactive: _propTypes.default.bool,
    tooltip: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
    tooltipBackground: _propTypes.default.oneOf(_colors.backgroundNames),
    onClick: _propTypes.default.func
  })).isRequired,
  background: _propTypes.default.oneOf(_colors.colorNames)
};
AvatarGroup.defaultProps = {
  className: '',
  size: 's',
  background: 'white'
};

var _default = (0, _reactCssModules.default)(AvatarGroup, styles, {
  allowMultiple: true
});

exports.default = _default;