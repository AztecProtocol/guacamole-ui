"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      avatars = _ref.avatars,
      canvasBackground = _ref.canvasBackground,
      background = _ref.background,
      iconBackground = _ref.iconBackground,
      tooltipBackground = _ref.tooltipBackground,
      layer = _ref.layer;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames2["default"])(className, styles["group-".concat(size)], styles["bg-".concat(canvasBackground)])
  }, avatars.map(function (_ref2, i) {
    var avatarTestId = _ref2.testId,
        avatarClassName = _ref2.className,
        tooltip = _ref2.tooltip,
        avatarBg = _ref2.background,
        avatarIconBg = _ref2.iconBackground,
        avatarTooltipBg = _ref2.tooltipBackground,
        iconName = _ref2.iconName,
        src = _ref2.src,
        alt = _ref2.alt,
        color = _ref2.color,
        inactive = _ref2.inactive,
        onClick = _ref2.onClick;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: +i,
      "data-testid": avatarTestId,
      className: (0, _classnames2["default"])(avatarClassName, styles.avatar, _defineProperty({}, styles.interactive, tooltip || onClick))
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      src: src,
      alt: alt,
      size: size,
      background: avatarBg || background,
      iconName: iconName,
      iconBackground: avatarIconBg || iconBackground,
      color: color,
      layer: layer,
      shape: "circular",
      inactive: inactive,
      onClick: onClick
    }), tooltip && /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames2["default"])(styles.tooltip, styles["tooltip-".concat(avatarTooltipBg || tooltipBackground)])
    }, typeof tooltip !== 'string' ? tooltip : /*#__PURE__*/_react["default"].createElement(_Text["default"], {
      text: tooltip,
      size: "xxs"
    })));
  }));
};

AvatarGroup.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(_styleConstants.shapeSizeKeys),
  avatars: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    testId: _propTypes["default"].string,
    className: _propTypes["default"].string,
    iconName: _propTypes["default"].string,
    iconBackground: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
    src: _propTypes["default"].string,
    alt: _propTypes["default"].string,
    color: _propTypes["default"].oneOf(_styleConstants.colorNames),
    background: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
    inactive: _propTypes["default"].bool,
    tooltip: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),
    tooltipBackground: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
    onClick: _propTypes["default"].func
  })).isRequired,
  canvasBackground: _propTypes["default"].oneOf(_styleConstants.colorNames),
  background: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
  iconBackground: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  tooltipBackground: _propTypes["default"].oneOf(_styleConstants.backgroundNames),
  layer: _propTypes["default"].oneOf(_styleConstants.shadowLayerKeys)
};
AvatarGroup.defaultProps = {
  testId: undefined,
  className: '',
  size: 's',
  canvasBackground: 'white',
  background: 'primary-lightest',
  iconBackground: '',
  tooltipBackground: 'grey-dark',
  layer: 0
};
var _default = AvatarGroup;
exports["default"] = _default;