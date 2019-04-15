"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _typography = require("../../../config/typography");

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "size-xxs": "tag__size-xxs___tBeeq",
  "rounded": "tag__rounded___19Zt8",
  "size-xs": "tag__size-xs___324Z8",
  "size-s": "tag__size-s___3oJY5",
  "size-m": "tag__size-m___11ht-",
  "size-l": "tag__size-l___3tbGC",
  "size-xl": "tag__size-xl___1FjyZ",
  "size-xxl": "tag__size-xxl___Hfbmj",
  "tag": "tag__tag___3GjLO",
  "align-reverse": "tag__align-reverse___M_6NP",
  "text": "tag__text___2JmXb",
  "icon": "tag__icon___1iafj"
};

var Tag = function Tag(_ref) {
  var className = _ref.className,
      size = _ref.size,
      children = _ref.children,
      text = _ref.text,
      iconName = _ref.iconName,
      alignIcon = _ref.alignIcon,
      color = _ref.color,
      outlined = _ref.outlined,
      rounded = _ref.rounded,
      onClick = _ref.onClick;
  return _react.default.createElement(_Block.default, {
    className: className,
    styleName: (0, _classnames.default)('tag', "size-".concat(size), {
      'align-reverse': alignIcon === 'left',
      rounded: rounded
    }),
    background: outlined ? 'white-light' : color,
    hasBorder: outlined,
    borderColor: color,
    onClick: onClick,
    inline: true
  }, _react.default.createElement(_Text.default, {
    styleName: "text",
    text: text,
    color: outlined ? color : ''
  }), !!iconName && _react.default.createElement(_Icon.default, {
    styleName: "icon",
    name: iconName,
    color: outlined ? color : ''
  }), children);
};

exports.Tag = Tag;
Tag.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_typography.fontSizeKeys),
  children: _propTypes.default.node,
  text: _propTypes.default.string.isRequired,
  iconName: _propTypes.default.string,
  alignIcon: _propTypes.default.oneOf(['left', 'right']),
  color: _propTypes.default.string,
  outlined: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
Tag.defaultProps = {
  className: '',
  size: _typography.defaultTextSizeKey,
  children: null,
  iconName: '',
  alignIcon: 'right',
  color: 'primary',
  outlined: false,
  rounded: false,
  onClick: null
};

var _default = (0, _reactCssModules.default)(Tag, styles, {
  allowMultiple: true
});

exports.default = _default;