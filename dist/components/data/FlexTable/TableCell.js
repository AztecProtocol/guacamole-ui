"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _responsiveColumns = _interopRequireDefault(require("../../../shapes/responsiveColumns"));

var _responsiveTextAlign = _interopRequireDefault(require("../../../shapes/responsiveTextAlign"));

var _Col = _interopRequireDefault(require("../../layout/Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  "collapse--true": "table__collapse--true___1dbrZ",
  "row": "table__row___2ugdd",
  "collapse--false": "table__collapse--false___3-DAT",
  "collapse-xs-true": "table__collapse-xs-true___Tfn-y",
  "collapse-xs-false": "table__collapse-xs-false___27PTX",
  "collapse-s-true": "table__collapse-s-true___3Wton",
  "collapse-s-false": "table__collapse-s-false___1vDPC",
  "collapse-m-true": "table__collapse-m-true___1Kpn9",
  "collapse-m-false": "table__collapse-m-false___3o4_5",
  "collapse-l-true": "table__collapse-l-true___3NR8I",
  "collapse-l-false": "table__collapse-l-false___2iXXe",
  "collapse-xl-true": "table__collapse-xl-true___2U9QI",
  "collapse-xl-false": "table__collapse-xl-false___2RG0M",
  "collapse-xxl-true": "table__collapse-xxl-true___2E3a2",
  "collapse-xxl-false": "table__collapse-xxl-false___1OH70",
  "table-head-cell": "table__table-head-cell___2iq23",
  "sort-button": "table__sort-button___15u2e",
  "placeholder-cell": "table__placeholder-cell___2Xmp5",
  "placeHolderShimmer": "table__placeHolderShimmer___2GCiA",
  "highlight": "table__highlight___2nLLn"
};

var TableCell = function TableCell(_ref) {
  var className = _ref.className,
      width = _ref.width,
      column = _ref.column,
      align = _ref.align,
      children = _ref.children,
      placeholder = _ref.placeholder,
      isLoading = _ref.isLoading;
  return _react.default.createElement(_Col.default, {
    className: className,
    margin: "s",
    align: align,
    column: column,
    style: !width ? null : {
      flex: "1 1 ".concat(width),
      maxWidth: width
    }
  }, isLoading && (placeholder || _react.default.createElement("div", {
    styleName: "placeholder-cell"
  })), !isLoading && children);
};

TableCell.propTypes = {
  className: _propTypes.default.string,
  width: _propTypes.default.string,
  column: _responsiveColumns.default,
  align: _responsiveTextAlign.default,
  children: _propTypes.default.node,
  placeholder: _propTypes.default.node,
  isLoading: _propTypes.default.bool
};
TableCell.defaultProps = {
  className: '',
  width: '',
  column: '',
  align: '',
  children: null,
  placeholder: null,
  isLoading: false
};

var _default = (0, _reactCssModules.default)(TableCell, styles);

exports.default = _default;