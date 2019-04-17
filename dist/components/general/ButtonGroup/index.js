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
  "size--xxs": "button__size--xxs___2y8DP",
  "rounded": "button__rounded___2Upg1",
  "size--xs": "button__size--xs___aofPw",
  "size--s": "button__size--s___1M59n",
  "size--m": "button__size--m___2uAwb",
  "size--l": "button__size--l___1DGRK",
  "size--xl": "button__size--xl___1nBgg",
  "size--xxl": "button__size--xxl___2AfiJ",
  "expand--false": "button__expand--false___VdWkr",
  "expand--true": "button__expand--true___3TVhz",
  "size-xs-xxs": "button__size-xs-xxs___1x0SW",
  "size-xs-xs": "button__size-xs-xs___2CbVm",
  "size-xs-s": "button__size-xs-s___3C6H2",
  "size-xs-m": "button__size-xs-m___3AFaC",
  "size-xs-l": "button__size-xs-l___1ehV_",
  "size-xs-xl": "button__size-xs-xl___2r9Wv",
  "size-xs-xxl": "button__size-xs-xxl___8N7MI",
  "expand-xs-false": "button__expand-xs-false___2vEUy",
  "expand-xs-true": "button__expand-xs-true___6ino7",
  "size-s-xxs": "button__size-s-xxs___sHXwj",
  "size-s-xs": "button__size-s-xs___1Zozk",
  "size-s-s": "button__size-s-s___3bYIG",
  "size-s-m": "button__size-s-m___g9xQd",
  "size-s-l": "button__size-s-l___1hEsV",
  "size-s-xl": "button__size-s-xl___39nXC",
  "size-s-xxl": "button__size-s-xxl___UYsNO",
  "expand-s-false": "button__expand-s-false___yDTE6",
  "expand-s-true": "button__expand-s-true___JtZQ7",
  "size-m-xxs": "button__size-m-xxs___3z3GD",
  "size-m-xs": "button__size-m-xs___GKZFB",
  "size-m-s": "button__size-m-s___1alZ4",
  "size-m-m": "button__size-m-m___DYmXB",
  "size-m-l": "button__size-m-l___3lzxp",
  "size-m-xl": "button__size-m-xl___2E9nU",
  "size-m-xxl": "button__size-m-xxl___PBvA4",
  "expand-m-false": "button__expand-m-false___3mlwW",
  "expand-m-true": "button__expand-m-true___3MxWc",
  "size-l-xxs": "button__size-l-xxs___3OsBN",
  "size-l-xs": "button__size-l-xs___PXs7R",
  "size-l-s": "button__size-l-s___3LyDU",
  "size-l-m": "button__size-l-m___2vK6I",
  "size-l-l": "button__size-l-l___12MO3",
  "size-l-xl": "button__size-l-xl___1mOmD",
  "size-l-xxl": "button__size-l-xxl___3yWHF",
  "expand-l-false": "button__expand-l-false___i3oBz",
  "expand-l-true": "button__expand-l-true___3vngB",
  "size-xl-xxs": "button__size-xl-xxs___2Uwdf",
  "size-xl-xs": "button__size-xl-xs___3MG52",
  "size-xl-s": "button__size-xl-s___1UFTh",
  "size-xl-m": "button__size-xl-m___2m_hv",
  "size-xl-l": "button__size-xl-l___2tCbO",
  "size-xl-xl": "button__size-xl-xl___3-SSm",
  "size-xl-xxl": "button__size-xl-xxl___eV54x",
  "expand-xl-false": "button__expand-xl-false___3qnKu",
  "expand-xl-true": "button__expand-xl-true___1z6Kk",
  "size-xxl-xxs": "button__size-xxl-xxs___2tRd5",
  "size-xxl-xs": "button__size-xxl-xs___3iq2P",
  "size-xxl-s": "button__size-xxl-s___1zgJr",
  "size-xxl-m": "button__size-xxl-m___3_9ZE",
  "size-xxl-l": "button__size-xxl-l___1x4aV",
  "size-xxl-xl": "button__size-xxl-xl___3mXbO",
  "size-xxl-xxl": "button__size-xxl-xxl___3sRsf",
  "expand-xxl-false": "button__expand-xxl-false___23Whw",
  "expand-xxl-true": "button__expand-xxl-true___9qrmB",
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