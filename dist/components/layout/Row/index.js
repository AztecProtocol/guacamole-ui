"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _responsiveSizes = _interopRequireDefault(require("../../../shapes/responsiveSizes"));

var _FlexBox = _interopRequireDefault(require("../FlexBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "margin--xxs": "row-53925515",
  "margin--xs": "row-3b887ece",
  "margin--s": "row-ded1f8d3",
  "margin--m": "row-8e82ccf7",
  "margin--l": "row-5fef7d4f",
  "margin--xl": "row-ca371fdb",
  "margin--xxl": "row-0022a060",
  "margin--none": "row-f8d36317",
  "margin-xs-xxs": "row-b5b9eafc",
  "margin-xs-xs": "row-49efc87a",
  "margin-xs-s": "row-adf894b5",
  "margin-xs-m": "row-45e9ab22",
  "margin-xs-l": "row-2d73610c",
  "margin-xs-xl": "row-ea6d3418",
  "margin-xs-xxl": "row-ab906705",
  "margin-xs-none": "row-0d8c2275",
  "margin-s-xxs": "row-56fbbe44",
  "margin-s-xs": "row-f4c13874",
  "margin-s-s": "row-ba8532a3",
  "margin-s-m": "row-05fc412d",
  "margin-s-l": "row-7ce69574",
  "margin-s-xl": "row-0cc7d52e",
  "margin-s-xxl": "row-b3c18e3d",
  "margin-s-none": "row-8e1ab606",
  "margin-m-xxs": "row-09c134d4",
  "margin-m-xs": "row-58059441",
  "margin-m-s": "row-333c9850",
  "margin-m-m": "row-a4c8597a",
  "margin-m-l": "row-107c417d",
  "margin-m-xl": "row-a6ec4434",
  "margin-m-xxl": "row-adfebea9",
  "margin-m-none": "row-75dc9eb8",
  "margin-l-xxs": "row-318b1753",
  "margin-l-xs": "row-93e75e12",
  "margin-l-s": "row-2a46b263",
  "margin-l-m": "row-f7ce7fde",
  "margin-l-l": "row-95bab741",
  "margin-l-xl": "row-177b98ed",
  "margin-l-xxl": "row-4af952e0",
  "margin-l-none": "row-24f81e6f",
  "margin-xl-xxs": "row-9a1cf94f",
  "margin-xl-xs": "row-8e2a8833",
  "margin-xl-s": "row-d806c1b6",
  "margin-xl-m": "row-421ea2f6",
  "margin-xl-l": "row-38fcecea",
  "margin-xl-xl": "row-b5315b00",
  "margin-xl-xxl": "row-bbe36601",
  "margin-xl-none": "row-ce1a5bec",
  "margin-xxl-xxs": "row-7419646c",
  "margin-xxl-xs": "row-855f2667",
  "margin-xxl-s": "row-48ae57e9",
  "margin-xxl-m": "row-72306358",
  "margin-xxl-l": "row-817f1544",
  "margin-xxl-xl": "row-fb058c44",
  "margin-xxl-xxl": "row-4c605ba0",
  "margin-xxl-none": "row-6c9cc138"
};

var Row = function Row(_ref) {
  var className = _ref.className,
      margin = _ref.margin,
      props = _objectWithoutProperties(_ref, ["className", "margin"]);

  return /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], _extends({}, props, {
    className: (0, _classnames["default"])(className, margin && margin !== 'none' && (0, _generateResponsiveStyleNames["default"])('margin', margin).map(function (n) {
      return styles[n];
    }) || '')
  }));
};

Row.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  margin: _responsiveSizes["default"],
  direction: _propTypes["default"].oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  align: (0, _generateResponsiveShape["default"])(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  valign: (0, _generateResponsiveShape["default"])(['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  nowrap: (0, _generateResponsiveShape["default"])([true, false]),
  stretch: _propTypes["default"].bool,
  children: _propTypes["default"].node.isRequired
};
Row.defaultProps = {
  testId: undefined,
  className: '',
  margin: 'm',
  direction: 'row',
  align: '',
  valign: '',
  nowrap: false,
  stretch: false
};
var _default = Row;
exports["default"] = _default;