"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "size-s": "list-19b6eec5",
  "size-m": "list-1ec3c5e5",
  "size-l": "list-f6a8291b",
  "with-description": "list-7775855f",
  "item": "list-5985ad7b"
};

var List = function List(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      items = _ref.items;
  return items.map(function (item, i) {
    return _react["default"].createElement("div", {
      key: +i,
      "data-testid": testId,
      className: (0, _classnames2["default"])(className, styles.item, styles["size-".concat(size)], _defineProperty({}, styles['with-description'], item.description))
    }, _react["default"].createElement(_ListItem["default"], _extends({
      size: size
    }, item)));
  });
};

List.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['s', 'm', 'l']),
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    iconName: _propTypes["default"].string,
    iconColor: _propTypes["default"].string,
    title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]).isRequired,
    description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
  }))
};
List.defaultProps = {
  testId: undefined,
  className: '',
  size: 's',
  items: []
};
var _default = List;
exports["default"] = _default;