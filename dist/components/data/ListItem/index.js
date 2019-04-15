"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "list-item": "item__list-item___3nS-k",
  "icon": "item__icon___192YV",
  "content": "item__content___380CD",
  "nowrap": "item__nowrap___2fpbu",
  "valign-center": "item__valign-center___fT8o5",
  "wrap": "item__wrap___Fkynt",
  "showEllipsis": "item__showEllipsis___Bl-8U",
  "size-xxs": "item__size-xxs___2w83y",
  "size-xs": "item__size-xs___TYBUT",
  "size-s": "item__size-s___1R44E",
  "size-m": "item__size-m___W6ZPL",
  "size-l": "item__size-l___2DPHo",
  "size-xl": "item__size-xl___36tpx",
  "size-xxl": "item__size-xxl___3IT3W",
  "avatar": "item__avatar___2gsXk",
  "no-description": "item__no-description___2ZSQX"
};
var iconSizeMap = {
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  xxl: 'xl'
};
var avatarTextSizeMap = {
  xxs: 'xs',
  xs: 's',
  s: 'm',
  m: 'l',
  l: 'xl',
  xl: 'xxl',
  xxl: 'xxl'
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
    size: iconSizeMap[size],
    rotate: iconRotate
  }, icon))), avatar && _react.default.createElement("div", {
    styleName: "avatar"
  }, _react.default.createElement(_Avatar.default, _extends({}, avatar, {
    size: size
  }))), _react.default.createElement("div", {
    styleName: "content"
  }, title && _react.default.createElement(_Text.default, {
    text: title,
    size: avatar ? avatarTextSizeMap[size] : size
  }), description && _react.default.createElement("div", null, _react.default.createElement(_Text.default, {
    text: description,
    size: size === 'l' ? 'xs' : 'xxs',
    color: "primary-lighter"
  })), children));
};

exports.ListItem = ListItem;
ListItem.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_shapes.shapeSizeKeys),
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