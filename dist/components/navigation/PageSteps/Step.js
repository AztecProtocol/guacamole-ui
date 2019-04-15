"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "steps": "steps__steps___1yd3e",
  "step": "steps__step___Hm0Rm",
  "active": "steps__active___1sTua",
  "button": "steps__button___2fJ34",
  "theme-primary": "steps__theme-primary___1T_uq",
  "theme-white": "steps__theme-white___2vI1a",
  "placeHolderShimmer": "steps__placeHolderShimmer___1alcj"
};

var PageSteps = function PageSteps(_ref) {
  var title = _ref.title,
      active = _ref.active,
      href = _ref.href,
      onClick = _ref.onClick,
      isRouterLink = _ref.isRouterLink;

  if (href || onClick) {
    return _react.default.createElement(_Clickable.default, {
      styleName: (0, _classnames.default)('step', 'button', {
        active: active
      }),
      onClick: onClick,
      href: href,
      isRouterLink: isRouterLink
    }, title);
  }

  return _react.default.createElement("div", {
    styleName: (0, _classnames.default)('step', {
      active: active
    })
  }, title);
};

PageSteps.propTypes = {
  title: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  isRouterLink: _propTypes.default.bool
};
PageSteps.defaultProps = {
  active: false,
  href: '',
  onClick: null,
  isRouterLink: false
};

var _default = (0, _reactCssModules.default)(PageSteps, styles, {
  allowMultiple: true
});

exports.default = _default;