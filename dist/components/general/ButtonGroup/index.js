"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  "size-m-xs": "button__size-m-xs___GKZFB",
  "rounded": "button__rounded___2Upg1",
  "size-m-s": "button__size-m-s___1alZ4",
  "size-m-m": "button__size-m-m___DYmXB",
  "size-m-l": "button__size-m-l___3lzxp",
  "expand-m-false": "button__expand-m-false___3mlwW",
  "expand-m-true": "button__expand-m-true___3MxWc",
  "size-s-xs": "button__size-s-xs___1Zozk",
  "size-s-s": "button__size-s-s___3bYIG",
  "size-s-m": "button__size-s-m___g9xQd",
  "size-s-l": "button__size-s-l___1hEsV",
  "expand-s-false": "button__expand-s-false___yDTE6",
  "expand-s-true": "button__expand-s-true___JtZQ7",
  "size-xs-xs": "button__size-xs-xs___2CbVm",
  "size-xs-s": "button__size-xs-s___3C6H2",
  "size-xs-m": "button__size-xs-m___3AFaC",
  "size-xs-l": "button__size-xs-l___1ehV_",
  "expand-xs-false": "button__expand-xs-false___2vEUy",
  "expand-xs-true": "button__expand-xs-true___6ino7",
  "group": "button__group___4zRQb",
  "shake": "button__shake___2Maf_",
  "placeHolderShimmer": "button__placeHolderShimmer___2pQqU"
};

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: className,
    styleName: "group"
  }, children);
};

exports.ButtonGroup = ButtonGroup;
ButtonGroup.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired
};
ButtonGroup.defaultProps = {
  className: ''
};

var _default = (0, _reactCssModules.default)(ButtonGroup, styles);

exports.default = _default;