"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "row-wrapper": "table__row-wrapper___1Zyxq",
  "row-no-divider": "table__row-no-divider___aNm9z",
  "v-xxs": "table__v-xxs___SQutH",
  "v-xs": "table__v-xs___3_tGi",
  "v-s": "table__v-s___3V0_X",
  "v-m": "table__v-m___3qYKB",
  "v-l": "table__v-l___29n__",
  "v-xl": "table__v-xl___2kWTD",
  "v-xxl": "table__v-xxl___pAgX3",
  "collapse-m-true": "table__collapse-m-true___1Kpn9",
  "row": "table__row___2ugdd",
  "collapse-m-false": "table__collapse-m-false___3o4_5",
  "collapse-s-true": "table__collapse-s-true___3Wton",
  "collapse-s-false": "table__collapse-s-false___1vDPC",
  "collapse-xs-true": "table__collapse-xs-true___Tfn-y",
  "collapse-xs-false": "table__collapse-xs-false___27PTX",
  "table-head-cell": "table__table-head-cell___2iq23",
  "sort-button": "table__sort-button___15u2e",
  "placeholder-cell": "table__placeholder-cell___2Xmp5",
  "placeHolderShimmer": "table__placeHolderShimmer___2GCiA",
  "highlight": "table__highlight___2nLLn"
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