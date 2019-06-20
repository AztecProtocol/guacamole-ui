"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _sort = require("../../../utils/sort");

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _TextButton = _interopRequireDefault(require("../../general/TextButton"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

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

var TableHead = function TableHead(_ref) {
  var defaultAlign = _ref.align,
      columns = _ref.columns,
      nowrap = _ref.nowrap,
      sortBy = _ref.sortBy,
      sortOrder = _ref.sortOrder,
      onClickColumn = _ref.onClickColumn;
  return _react.default.createElement(_TableRow.default, {
    textAlign: defaultAlign,
    nowrap: nowrap,
    highlight: true
  }, columns.map(function (_ref2, i) {
    var fieldName = _ref2.fieldName,
        label = _ref2.label,
        align = _ref2.align,
        width = _ref2.width,
        defaultSortingOrder = _ref2.defaultSortingOrder;
    return _react.default.createElement(_TableCell.default, {
      key: +i,
      styleName: "table-head-cell",
      width: width,
      align: align
    }, (!sortBy || defaultSortingOrder === undefined) && _react.default.createElement(_Text.default, {
      text: label.toUpperCase(),
      color: "label",
      size: "xxs"
    }) || _react.default.createElement(_TextButton.default, {
      styleName: "sort-button",
      color: "label",
      size: "xxs",
      onClick: function onClick() {
        return onClickColumn(fieldName);
      }
    }, _react.default.createElement("span", null, label.toUpperCase()), fieldName === sortBy && _react.default.createElement(_Block.default, {
      className: "lh0",
      left: "xs"
    }, _react.default.createElement(_Icon.default, {
      name: sortOrder === _sort.ASC ? 'arrow_upward' : 'arrow_downward',
      size: "xs"
    }))));
  }));
};

TableHead.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    fieldName: _propTypes.default.string,
    width: _propTypes.default.string,
    align: (0, _generateResponsiveShape.default)(['', 'left', 'center', 'right']),
    label: _propTypes.default.string.isRequired,
    defaultSortingOrder: _propTypes.default.oneOf([_sort.DESC, _sort.ASC])
  })).isRequired,
  sortBy: _propTypes.default.string,
  sortOrder: _propTypes.default.oneOf([_sort.DESC, _sort.ASC]),
  align: (0, _generateResponsiveShape.default)(['', 'left', 'center', 'right']),
  nowrap: (0, _generateResponsiveShape.default)([true, false]),
  onClickColumn: _propTypes.default.func
};
TableHead.defaultProps = {
  align: '',
  nowrap: false,
  sortBy: '',
  sortOrder: _sort.DESC,
  onClickColumn: function onClickColumn() {}
};

var _default = (0, _reactCssModules.default)(TableHead, styles);

exports.default = _default;