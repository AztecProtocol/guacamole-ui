"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Overlay = _interopRequireDefault(require("../../layout/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "loader": "loader-8cf184ab",
  "button-spinner-spin": "loader-fd8d6296",
  "icon-only": "loader-8ccb293b",
  "theme-primary": "loader-491fbcc9",
  "theme-secondary": "loader-045ecef7",
  "theme-white": "loader-df9fe6c7",
  "size-xxs": "loader-4a62dac3",
  "size-xs": "loader-ff7401af",
  "size-s": "loader-c7bfa305",
  "size-m": "loader-0e7ad29b",
  "size-l": "loader-e8c7dc53",
  "size-xl": "loader-17ca3faa",
  "size-xxl": "loader-4e778fe9",
  "shake": "loader-7fa5e8ef"
};

var Loader = function Loader(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      theme = _ref.theme,
      size = _ref.size,
      hasBackground = _ref.hasBackground,
      hide = _ref.hide;
  return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], {
    testId: testId,
    className: (0, _classnames2["default"])(className, styles.loader, styles["theme-".concat(theme)], styles["size-".concat(size)], _defineProperty({}, styles['icon-only'], !hasBackground)),
    theme: hasBackground ? theme : '',
    hide: hide
  });
};

Loader.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(_styleConstants.overlayThemeNames),
  size: _propTypes["default"].oneOf(_styleConstants.fontSizeKeys),
  hasBackground: _propTypes["default"].bool,
  hide: _propTypes["default"].bool
};
Loader.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  size: 'l',
  hasBackground: false,
  hide: false
};
var _default = Loader;
exports["default"] = _default;