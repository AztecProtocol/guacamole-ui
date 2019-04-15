"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _typography = require("../../../config/typography");

var _colors = require("../../../config/colors");

var _Overlay = _interopRequireDefault(require("../../layout/Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "loader": "loader__loader___2CfRM",
  "button-spinner-spin": "loader__button-spinner-spin___1cNRP",
  "icon-only": "loader__icon-only___3a142",
  "theme-primary": "loader__theme-primary___1tcr2",
  "theme-secondary": "loader__theme-secondary___1BFPU",
  "theme-white": "loader__theme-white___249Rm",
  "size-xxs": "loader__size-xxs___7R0sl",
  "size-xs": "loader__size-xs___14mmK",
  "size-s": "loader__size-s___3_YZy",
  "size-m": "loader__size-m___ykqYi",
  "size-l": "loader__size-l___31ERb",
  "size-xl": "loader__size-xl___3z0CI",
  "size-xxl": "loader__size-xxl___1yrJh",
  "shake": "loader__shake___1Otyo"
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
  theme: _propTypes.default.oneOf(_colors.overlayThemeNames),
  size: _propTypes.default.oneOf(_typography.fontSizeKeys),
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