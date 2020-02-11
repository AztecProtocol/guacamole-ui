"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "badge": "badge-b423108d",
  "hide": "badge-be889538",
  "size-xxs": "badge-d3289781",
  "dot-xxs": "badge-7412d3f2",
  "size-xs": "badge-ad8e4ad5",
  "dot-xs": "badge-24703f66",
  "size-s": "badge-063d066e",
  "dot-s": "badge-3f1e7c0f",
  "size-m": "badge-6bdb9a9b",
  "dot-m": "badge-19e3843e",
  "size-l": "badge-4a6040e4",
  "dot-l": "badge-71db51fc",
  "size-xl": "badge-1071ee58",
  "dot-xl": "badge-d08dcbb5",
  "size-xxl": "badge-3b739505",
  "dot-xxl": "badge-b12f36b8",
  "theme-default": "badge-01c68e88",
  "theme-label": "badge-0698ef62",
  "placeHolderShimmer": "badge-9c8f9601"
};

var Badge = function Badge(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      theme = _ref.theme,
      size = _ref.size,
      count = _ref.count,
      countOverflow = _ref.countOverflow,
      showZero = _ref.showZero,
      isDot = _ref.isDot;
  return _react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames2["default"])(className, styles.badge, styles["theme-".concat(theme)], styles["size-".concat(size)], (_classnames = {}, _defineProperty(_classnames, styles.hide, !showZero && count === 0), _defineProperty(_classnames, styles["dot-".concat(size)], isDot), _classnames))
  }, count > countOverflow ? "".concat(countOverflow, "+") : count);
};

Badge.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['default', 'label']),
  size: _propTypes["default"].oneOf(_styleConstants.shapeSizeKeys),
  count: _propTypes["default"].number.isRequired,
  countOverflow: _propTypes["default"].number,
  showZero: _propTypes["default"].bool,
  isDot: _propTypes["default"].bool
};
Badge.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: 'xs',
  countOverflow: Infinity,
  showZero: false,
  isDot: false
};
var _default = Badge;
exports["default"] = _default;