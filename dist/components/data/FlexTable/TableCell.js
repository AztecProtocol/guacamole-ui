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