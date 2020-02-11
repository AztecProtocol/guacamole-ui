"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "size-xxs": "tag-cf14140a",
  "rounded": "tag-dd7b38c1",
  "size-xs": "tag-5eac7c3a",
  "size-s": "tag-f1ae4703",
  "size-m": "tag-97947afe",
  "size-l": "tag-469676b8",
  "size-xl": "tag-4158f7f2",
  "size-xxl": "tag-f194b7e3",
  "tag": "tag-28a7e67e",
  "align-reverse": "tag-608a8b21",
  "text": "tag-248cb177",
  "icon": "tag-55274153"
};

var Tag = function Tag(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      children = _ref.children,
      text = _ref.text,
      iconName = _ref.iconName,
      alignIcon = _ref.alignIcon,
      color = _ref.color,
      outlined = _ref.outlined,
      rounded = _ref.rounded,
      onClick = _ref.onClick;
  return _react["default"].createElement(_Block["default"], {
    testId: testId,
    className: (0, _classnames2["default"])(className, styles.tag, styles["size-".concat(size)], (_classnames = {}, _defineProperty(_classnames, styles['align-reverse'], alignIcon === 'left'), _defineProperty(_classnames, styles.rounded, rounded), _classnames)),
    background: outlined ? 'white-light' : color,
    hasBorder: outlined,
    borderColor: color,
    onClick: onClick,
    inline: true
  }, _react["default"].createElement(_Text["default"], {
    className: styles.text,
    text: text,
    color: outlined ? color : ''
  }), !!iconName && _react["default"].createElement(_Icon["default"], {
    className: styles.icon,
    name: iconName,
    color: outlined ? color : ''
  }), children);
};

Tag.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(_styleConstants.fontSizeKeys),
  children: _propTypes["default"].node,
  text: _propTypes["default"].string.isRequired,
  iconName: _propTypes["default"].string,
  alignIcon: _propTypes["default"].oneOf(['left', 'right']),
  color: _propTypes["default"].string,
  outlined: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
Tag.defaultProps = {
  testId: undefined,
  className: '',
  size: _styleConstants.defaultFontSizeKey,
  children: null,
  iconName: '',
  alignIcon: 'right',
  color: 'primary',
  outlined: false,
  rounded: false,
  onClick: null
};
var _default = Tag;
exports["default"] = _default;