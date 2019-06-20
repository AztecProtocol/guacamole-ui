"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "button": "button-d4953c4c",
  "theme-primary": "button-747308af",
  "disabled-hover": "button-68cc684e",
  "outlined": "button-dba508e2",
  "disabled": "button-04f6422b",
  "isLoading": "button-a68be5a4",
  "theme-secondary": "button-2b0dfccc",
  "theme-white": "button-d4cfcd2e",
  "button-spinner-spin": "button-dd827401",
  "icon-left": "button-38fa5aaf",
  "icon-right": "button-20bbe699",
  "size--xxs": "button-cd841afe",
  "rounded": "button-2e90464a",
  "size--xs": "button-4341636f",
  "size--s": "button-901dfa30",
  "size--m": "button-72a7b6cd",
  "size--l": "button-246fa1f3",
  "size--xl": "button-5ed05968",
  "size--xxl": "button-49e2d742",
  "expand--false": "button-4ffd4afb",
  "expand--true": "button-57c5bb44",
  "size-xs-xxs": "button-52d57f01",
  "size-xs-xs": "button-00e6b72e",
  "size-xs-s": "button-ce2d90ac",
  "size-xs-m": "button-5c39dcf4",
  "size-xs-l": "button-32efe754",
  "size-xs-xl": "button-64a384e9",
  "size-xs-xxl": "button-1606d0cb",
  "expand-xs-false": "button-90ef7c21",
  "expand-xs-true": "button-768f6ead",
  "size-s-xxs": "button-a6fbbe20",
  "size-s-xs": "button-972a6870",
  "size-s-s": "button-694440ff",
  "size-s-m": "button-ec18b757",
  "size-s-l": "button-4d29652f",
  "size-s-xl": "button-066502a6",
  "size-s-xxl": "button-ff8946cd",
  "expand-s-false": "button-6e9686a6",
  "expand-s-true": "button-518eac96",
  "size-m-xxs": "button-8f0e3ada",
  "size-m-xs": "button-5245f7d6",
  "size-m-s": "button-3092521a",
  "size-m-m": "button-bcea7e4b",
  "size-m-l": "button-0e347441",
  "size-m-xl": "button-8155a119",
  "size-m-xxl": "button-00fe79be",
  "expand-m-false": "button-16a650aa",
  "expand-m-true": "button-cba04ee0",
  "size-l-xxs": "button-b2fdad87",
  "size-l-xs": "button-e941a6dd",
  "size-l-s": "button-6d97cc6e",
  "size-l-m": "button-e60861b2",
  "size-l-l": "button-6d0a28b7",
  "size-l-xl": "button-83e396f6",
  "size-l-xxl": "button-ac123074",
  "expand-l-false": "button-fb92be76",
  "expand-l-true": "button-b3793301",
  "size-xl-xxs": "button-fd1c30aa",
  "size-xl-xs": "button-96f0ac7c",
  "size-xl-s": "button-87a5ed62",
  "size-xl-m": "button-ce7e68a2",
  "size-xl-l": "button-a61d9d05",
  "size-xl-xl": "button-bfe170b5",
  "size-xl-xxl": "button-262871e5",
  "expand-xl-false": "button-1f23878c",
  "expand-xl-true": "button-31911c14",
  "size-xxl-xxs": "button-28f27057",
  "size-xxl-xs": "button-b60c744c",
  "size-xxl-s": "button-c7a6b5c9",
  "size-xxl-m": "button-230d1633",
  "size-xxl-l": "button-86ebf322",
  "size-xxl-xl": "button-2f1c955c",
  "size-xxl-xxl": "button-0ecbefbc",
  "expand-xxl-false": "button-5e23209a",
  "expand-xxl-true": "button-2397eb69",
  "group": "button-cb331948",
  "shake": "button-16d0550b",
  "placeHolderShimmer": "button-18301ecd"
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
  size: (0, _generateResponsiveShape.default)(_styleConstants.buttonSizeKeys),
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
  theme: 'primary',
  size: _styleConstants.defaultInputSizeKey,
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