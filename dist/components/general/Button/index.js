"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _inputs = require("../../../config/inputs");

var _buttons = require("../../../config/buttons");

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "button": "button__button___2tGU1",
  "theme-primary": "button__theme-primary___22VS7",
  "disabled-hover": "button__disabled-hover___2xVAq",
  "outlined": "button__outlined___3XqFP",
  "disabled": "button__disabled___3nZmS",
  "isLoading": "button__isLoading___1xObD",
  "theme-secondary": "button__theme-secondary___3aaEV",
  "theme-white": "button__theme-white___38eHc",
  "button-spinner-spin": "button__button-spinner-spin___2Odrt",
  "icon-left": "button__icon-left___3auCj",
  "icon-right": "button__icon-right___2nBrB",
  "size-m-xxs": "button__size-m-xxs___3z3GD",
  "rounded": "button__rounded___2Upg1",
  "size-m-xs": "button__size-m-xs___GKZFB",
  "size-m-s": "button__size-m-s___1alZ4",
  "size-m-m": "button__size-m-m___DYmXB",
  "size-m-l": "button__size-m-l___3lzxp",
  "size-m-xl": "button__size-m-xl___2E9nU",
  "size-m-xxl": "button__size-m-xxl___PBvA4",
  "expand-m-false": "button__expand-m-false___3mlwW",
  "expand-m-true": "button__expand-m-true___3MxWc",
  "size-s-xxs": "button__size-s-xxs___sHXwj",
  "size-s-xs": "button__size-s-xs___1Zozk",
  "size-s-s": "button__size-s-s___3bYIG",
  "size-s-m": "button__size-s-m___g9xQd",
  "size-s-l": "button__size-s-l___1hEsV",
  "size-s-xl": "button__size-s-xl___39nXC",
  "size-s-xxl": "button__size-s-xxl___UYsNO",
  "expand-s-false": "button__expand-s-false___yDTE6",
  "expand-s-true": "button__expand-s-true___JtZQ7",
  "size-xs-xxs": "button__size-xs-xxs___1x0SW",
  "size-xs-xs": "button__size-xs-xs___2CbVm",
  "size-xs-s": "button__size-xs-s___3C6H2",
  "size-xs-m": "button__size-xs-m___3AFaC",
  "size-xs-l": "button__size-xs-l___1ehV_",
  "size-xs-xl": "button__size-xs-xl___2r9Wv",
  "size-xs-xxl": "button__size-xs-xxl___8N7MI",
  "expand-xs-false": "button__expand-xs-false___2vEUy",
  "expand-xs-true": "button__expand-xs-true___6ino7",
  "group": "button__group___4zRQb",
  "shake": "button__shake___2Maf_",
  "placeHolderShimmer": "button__placeHolderShimmer___2pQqU"
};

var Button = function Button(_ref) {
  var _classnames;

  var className = _ref.className,
      theme = _ref.theme,
      size = _ref.size,
      expand = _ref.expand,
      text = _ref.text,
      icon = _ref.icon,
      alignIcon = _ref.alignIcon,
      children = _ref.children,
      outlined = _ref.outlined,
      rounded = _ref.rounded,
      isLoading = _ref.isLoading,
      disabled = _ref.disabled,
      href = _ref.href,
      Link = _ref.Link,
      stopPropagation = _ref.stopPropagation,
      _onClick = _ref.onClick,
      onSubmit = _ref.onSubmit;
  var ButtonTag = href && !disabled ? Link : 'button';
  return _react.default.createElement(ButtonTag, {
    className: className,
    styleName: (0, _classnames2.default)('button', (0, _generateResponsiveStyleNames.default)('size', size), (0, _generateResponsiveStyleNames.default)('expand', expand), (_classnames = {}, _defineProperty(_classnames, "theme-".concat(theme), theme), _defineProperty(_classnames, 'disabled-hover', isLoading || disabled), _defineProperty(_classnames, "outlined", outlined), _defineProperty(_classnames, "rounded", rounded), _defineProperty(_classnames, "isLoading", isLoading), _defineProperty(_classnames, "disabled", disabled), _classnames)),
    to: href,
    href: href,
    onClick: function onClick(e) {
      if (stopPropagation) {
        e.stopPropagation();
      }

      var openLinkInNewTab = href && (e.metaKey || e.ctrlKey);
      if (openLinkInNewTab) return;

      if (_onClick || onSubmit) {
        e.preventDefault();

        if (_onClick) {
          _onClick();
        }

        if (onSubmit && !disabled && !isLoading) {
          onSubmit();
        }
      }
    }
  }, alignIcon === 'left' && icon && _react.default.createElement("div", {
    styleName: "icon-left"
  }, icon), children || text, alignIcon === 'right' && icon && _react.default.createElement("div", {
    styleName: "icon-right"
  }, icon));
};

exports.Button = Button;
Button.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(['primary', 'secondary', 'white']),
  size: (0, _generateResponsiveShape.default)(_buttons.buttonSizeKeys),
  text: _propTypes.default.string,
  icon: _propTypes.default.element,
  alignIcon: _propTypes.default.oneOf(['left', 'right']),
  children: _propTypes.default.node,
  outlined: _propTypes.default.bool,
  expand: (0, _generateResponsiveShape.default)([true, false]),
  rounded: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  Link: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  stopPropagation: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
Button.defaultProps = {
  className: '',
  theme: 'secondary',
  size: _inputs.defaultInputSizeKey,
  expand: false,
  text: '',
  icon: null,
  alignIcon: 'right',
  children: null,
  outlined: false,
  rounded: false,
  isLoading: false,
  disabled: false,
  href: '',
  Link: 'a',
  stopPropagation: false,
  onClick: null,
  onSubmit: null
};

var _default = (0, _reactCssModules.default)(Button, styles, {
  allowMultiple: true
});

exports.default = _default;