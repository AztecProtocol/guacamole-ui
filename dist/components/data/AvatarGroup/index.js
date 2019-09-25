"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AvatarGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "group-xxs": "avatars-e4442593",
  "avatar": "avatars-d9859902",
  "group-xs": "avatars-f9a80126",
  "group-s": "avatars-52bdc111",
  "group-m": "avatars-1665f690",
  "group-l": "avatars-ce3ad5f0",
  "group-xl": "avatars-4942da96",
  "group-xxl": "avatars-292cf231",
  "tooltip": "avatars-6a5b7b84",
  "interactive": "avatars-56f7ce06",
  "bg-primary": "avatars-2717b151",
  "tooltip-primary": "avatars-27175a58",
  "bg-primary-light": "avatars-93aaa719",
  "tooltip-primary-light": "avatars-a7f17e70",
  "bg-primary-lighter": "avatars-c29f3b11",
  "tooltip-primary-lighter": "avatars-954d01ac",
  "bg-primary-lightest": "avatars-33d3a3df",
  "tooltip-primary-lightest": "avatars-7aa1eb03",
  "bg-black": "avatars-80bb9075",
  "tooltip-black": "avatars-ecc24901",
  "bg-grey-darker": "avatars-4624a466",
  "tooltip-grey-darker": "avatars-312e3727",
  "bg-grey-dark": "avatars-c0dd604f",
  "tooltip-grey-dark": "avatars-40720496",
  "bg-grey": "avatars-a2ffde48",
  "tooltip-grey": "avatars-4a5ab9ed",
  "bg-grey-light": "avatars-f77f792b",
  "tooltip-grey-light": "avatars-cad0c79a",
  "bg-grey-lighter": "avatars-1e47b632",
  "tooltip-grey-lighter": "avatars-d5c77001",
  "bg-grey-lightest": "avatars-a1f9c5c0",
  "tooltip-grey-lightest": "avatars-1ff02488",
  "bg-white": "avatars-104b951d",
  "tooltip-white": "avatars-453a4698",
  "bg-white-light": "avatars-018c8750",
  "tooltip-white-light": "avatars-2b8f4abc",
  "bg-white-lighter": "avatars-37035402",
  "tooltip-white-lighter": "avatars-88bf80c7",
  "bg-white-lightest": "avatars-59ab5743",
  "tooltip-white-lightest": "avatars-345938ce",
  "bg-transparent": "avatars-a2b3581a",
  "tooltip-transparent": "avatars-27c9305a",
  "bg-secondary": "avatars-73e65958",
  "tooltip-secondary": "avatars-bd5d784e",
  "bg-secondary-light": "avatars-53311c7b",
  "tooltip-secondary-light": "avatars-98f8b860",
  "bg-secondary-lighter": "avatars-23eb4033",
  "tooltip-secondary-lighter": "avatars-1ad8f0a4",
  "bg-secondary-lightest": "avatars-7bdcc288",
  "tooltip-secondary-lightest": "avatars-3063312d",
  "bg-pink": "avatars-f2a8608f",
  "tooltip-pink": "avatars-2c5e78eb",
  "bg-red": "avatars-97762e4e",
  "tooltip-red": "avatars-3c28b042",
  "bg-purple": "avatars-8ff29d7c",
  "tooltip-purple": "avatars-0b7ee45e",
  "bg-blue": "avatars-857a8f05",
  "tooltip-blue": "avatars-89215a01",
  "bg-green": "avatars-5a8d8cd0",
  "tooltip-green": "avatars-2292a659",
  "bg-yellow": "avatars-8690bd98",
  "tooltip-yellow": "avatars-68b672cb",
  "bg-orange": "avatars-2591f60c",
  "tooltip-orange": "avatars-b9dfec4e",
  "bg-brown": "avatars-4673bb88",
  "tooltip-brown": "avatars-cf4edda3",
  "placeHolderShimmer": "avatars-0ccf62c4"
};

var AvatarGroup = function AvatarGroup(_ref) {
  var className = _ref.className,
      size = _ref.size,
      avatars = _ref.avatars,
      canvasBackground = _ref.canvasBackground,
      background = _ref.background,
      iconBackground = _ref.iconBackground,
      tooltipBackground = _ref.tooltipBackground,
      layer = _ref.layer;
  return _react.default.createElement("div", {
    className: className,
    styleName: "group-".concat(size, " bg-").concat(canvasBackground)
  }, avatars.map(function (_ref2, i) {
    var avatarClassName = _ref2.className,
        tooltip = _ref2.tooltip,
        avatarBg = _ref2.background,
        avatarIconBg = _ref2.iconBackground,
        avatarTooltipBg = _ref2.tooltipBackground,
        avatar = _objectWithoutProperties(_ref2, ["className", "tooltip", "background", "iconBackground", "tooltipBackground"]);

    return _react.default.createElement("div", {
      key: +i,
      className: avatarClassName,
      styleName: (0, _classnames.default)('avatar', {
        interactive: tooltip || avatar.onClick
      })
    }, _react.default.createElement(_Avatar.default, _extends({}, avatar, {
      background: avatarBg || background,
      iconBackground: avatarIconBg || iconBackground,
      size: size,
      layer: layer,
      shape: "circular"
    })), tooltip && _react.default.createElement("div", {
      styleName: (0, _classnames.default)('tooltip', "tooltip-".concat(avatarTooltipBg || tooltipBackground))
    }, typeof tooltip !== 'string' ? tooltip : _react.default.createElement(_Text.default, {
      text: tooltip,
      size: "xxs"
    })));
  }));
};

exports.AvatarGroup = AvatarGroup;
AvatarGroup.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_styleConstants.shapeSizeKeys),
  avatars: _propTypes.default.arrayOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    iconName: _propTypes.default.string,
    iconBackground: _propTypes.default.oneOf(_styleConstants.backgroundNames),
    src: _propTypes.default.string,
    alt: _propTypes.default.string,
    color: _propTypes.default.oneOf(_styleConstants.colorNames),
    background: _propTypes.default.oneOf(_styleConstants.backgroundNames),
    inactive: _propTypes.default.bool,
    tooltip: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
    tooltipBackground: _propTypes.default.oneOf(_styleConstants.backgroundNames),
    onClick: _propTypes.default.func
  })).isRequired,
  canvasBackground: _propTypes.default.oneOf(_styleConstants.colorNames),
  background: _propTypes.default.oneOf(_styleConstants.backgroundNames),
  iconBackground: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  tooltipBackground: _propTypes.default.oneOf(_styleConstants.backgroundNames),
  layer: _propTypes.default.oneOf(_styleConstants.shadowLayerKeys)
};
AvatarGroup.defaultProps = {
  className: '',
  size: 's',
  canvasBackground: 'white',
  background: 'primary-lightest',
  iconBackground: '',
  tooltipBackground: 'grey-dark',
  layer: 0
};

var _default = (0, _reactCssModules.default)(AvatarGroup, styles, {
  allowMultiple: true
});

exports.default = _default;