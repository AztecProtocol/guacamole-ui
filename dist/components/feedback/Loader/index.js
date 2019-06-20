"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

var _Overlay = _interopRequireDefault(require("../../layout/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var className = _ref.className,
      theme = _ref.theme,
      size = _ref.size,
      hasBackground = _ref.hasBackground,
      hide = _ref.hide;
  return _react.default.createElement(_Overlay.default, {
    className: className,
    styleName: (0, _classnames.default)('loader', "theme-".concat(theme), "size-".concat(size), {
      'icon-only': !hasBackground
    }),
    theme: hasBackground ? theme : '',
    hide: hide
  });
};

exports.Loader = Loader;
Loader.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(_styleConstants.overlayThemeNames),
  size: _propTypes.default.oneOf(_styleConstants.fontSizeKeys),
  hasBackground: _propTypes.default.bool,
  hide: _propTypes.default.bool
};
Loader.defaultProps = {
  className: '',
  theme: 'primary',
  size: 'l',
  hasBackground: false,
  hide: false
};

var _default = (0, _reactCssModules.default)(Loader, styles, {
  allowMultiple: true
});

exports.default = _default;