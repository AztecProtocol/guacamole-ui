"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "row-wrapper": "table-14d566be",
  "row-no-divider": "table-dd288127",
  "v-xxs": "table-3d0a7d42",
  "v-xs": "table-bc3df4f6",
  "v-s": "table-634b96dc",
  "v-m": "table-63634a2e",
  "v-l": "table-f3999af5",
  "v-xl": "table-532135d7",
  "v-xxl": "table-fd581599",
  "collapse--true": "table-7237fcd9",
  "row": "table-5635c661",
  "collapse--false": "table-382c8788",
  "collapse-xs-true": "table-fca2ee36",
  "collapse-xs-false": "table-b6ff436a",
  "collapse-s-true": "table-8575fefe",
  "collapse-s-false": "table-e73bb5ac",
  "collapse-m-true": "table-1dfa078d",
  "collapse-m-false": "table-6bf9c5dd",
  "collapse-l-true": "table-c71ae844",
  "collapse-l-false": "table-7948d4bd",
  "collapse-xl-true": "table-6205f0ee",
  "collapse-xl-false": "table-8ecd435b",
  "collapse-xxl-true": "table-ee39dfed",
  "collapse-xxl-false": "table-f43d9595",
  "table-head-cell": "table-225839a0",
  "sort-button": "table-d253e9cf",
  "placeholder-cell": "table-4aad37cf",
  "placeHolderShimmer": "table-2b5f315b",
  "highlight": "table-67a71899"
};

var TableRow = function TableRow(_ref) {
  var _classnames;

  var verticalPadding = _ref.verticalPadding,
      margin = _ref.margin,
      textAlign = _ref.textAlign,
      align = _ref.align,
      valign = _ref.valign,
      children = _ref.children,
      highlight = _ref.highlight,
      noDivider = _ref.noDivider,
      nowrap = _ref.nowrap,
      border = _ref.border,
      blockProps = _objectWithoutProperties(_ref, ["verticalPadding", "margin", "textAlign", "align", "valign", "children", "highlight", "noDivider", "nowrap", "border"]);

  return _react.default.createElement(_Block.default, _extends({}, blockProps, {
    styleName: (0, _classnames2.default)('row-wrapper', (_classnames = {
      'row-no-divider': noDivider
    }, _defineProperty(_classnames, "v-".concat(verticalPadding), verticalPadding), _defineProperty(_classnames, "highlight", highlight), _classnames)),
    hasBorder: border,
    align: textAlign,
    background: highlight ? 'grey-lightest' : 'white'
  }), _react.default.createElement(_Row.default, {
    styleName: "row",
    margin: margin,
    valign: valign,
    align: align,
    nowrap: nowrap
  }, children));
};

TableRow.propTypes = {
  verticalPadding: _propTypes.default.string,
  margin: _propTypes.default.string,
  textAlign: (0, _generateResponsiveShape.default)(['', 'left', 'center', 'right']),
  align: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  valign: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  nowrap: (0, _generateResponsiveShape.default)([true, false]),
  children: _propTypes.default.node.isRequired,
  highlight: _propTypes.default.bool,
  noDivider: _propTypes.default.bool,
  border: _propTypes.default.bool
};
TableRow.defaultProps = {
  verticalPadding: 's',
  margin: 's',
  textAlign: '',
  align: 'space-between',
  valign: 'center',
  nowrap: false,
  highlight: false,
  noDivider: false,
  border: false
};

var _default = (0, _reactCssModules.default)(TableRow, styles, {
  allowMultiple: true
});

exports.default = _default;