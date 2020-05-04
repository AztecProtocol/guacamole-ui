"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ButtonGroup = function ButtonGroup(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames["default"])(className, styles.group)
  }, children);
};

ButtonGroup.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired
};
ButtonGroup.defaultProps = {
  testId: undefined,
  className: ''
};
var _default = ButtonGroup;
exports["default"] = _default;