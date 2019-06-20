"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _listItem = require("../../../config/listItem");

var _styleConstants = require("../../../config/styleConstants");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "list-item": "item-497ea20e",
  "icon": "item-c09a1cd3",
  "content": "item-bf6dcd95",
  "nowrap": "item-2e4aef60",
  "valign-center": "item-ecdb2cb0",
  "wrap": "item-22dde596",
  "showEllipsis": "item-ef74add7",
  "size-xxs": "item-5b998476",
  "size-xs": "item-d8650362",
  "size-s": "item-8fcdf749",
  "size-m": "item-f684f233",
  "size-l": "item-39c3733d",
  "size-xl": "item-cd24c0a8",
  "size-xxl": "item-8aa83c97",
  "avatar": "item-a2b0bab8",
  "no-description": "item-0cd54fde"
};

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      size = _ref.size,
      icon = _ref.icon,
      iconName = _ref.iconName,
      iconColor = _ref.iconColor,
      iconRotate = _ref.iconRotate,
      avatar = _ref.avatar,
      title = _ref.title,
      description = _ref.description,
      children = _ref.children,
      valign = _ref.valign,
      nowrap = _ref.nowrap,
      showEllipsis = _ref.showEllipsis;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames.default)('list-item', "size-".concat(size), {
      'no-description': !description,
      'valign-center': valign === 'center',
      wrap: !nowrap && valign !== 'center',
      nowrap: nowrap,
      showEllipsis: showEllipsis
    })
  }, (icon || iconName) && _react.default.createElement("div", {
    styleName: "icon"
  }, _react.default.createElement(_Icon.default, _extends({
    name: iconName,
    color: iconColor,
    size: _listItem.listItemIconSizeMap[size],
    rotate: iconRotate
  }, icon))), avatar && _react.default.createElement("div", {
    styleName: "avatar"
  }, _react.default.createElement(_Avatar.default, _extends({}, avatar, {
    size: size
  }))), _react.default.createElement("div", {
    styleName: "content"
  }, title && _react.default.createElement(_Text.default, {
    text: title,
    size: avatar ? _listItem.listItemAvatarTextSizeMap[size] : size
  }), description && _react.default.createElement("div", null, _react.default.createElement(_Text.default, {
    text: description,
    size: size === 'l' ? 'xs' : 'xxs',
    color: "primary-lighter"
  })), children));
};

exports.ListItem = ListItem;
ListItem.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_styleConstants.shapeSizeKeys),
  icon: _iconShape.default,
  iconName: _propTypes.default.string,
  iconColor: _propTypes.default.string,
  iconRotate: _propTypes.default.oneOf([0, 90, 180, 270]),
  avatar: _propTypes.default.shape({
    src: _propTypes.default.string
  }),
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  children: _propTypes.default.node,
  valign: _propTypes.default.oneOf(['top', 'center']),
  nowrap: _propTypes.default.bool,
  showEllipsis: _propTypes.default.bool
};
ListItem.defaultProps = {
  className: '',
  size: 's',
  icon: null,
  iconName: '',
  iconColor: 'secondary-light',
  iconRotate: 0,
  avatar: null,
  title: '',
  description: '',
  children: null,
  valign: 'top',
  nowrap: false,
  showEllipsis: false
};

var _default = (0, _reactCssModules.default)(ListItem, styles, {
  allowMultiple: true
});

exports.default = _default;