"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _sort = require("../../../utils/sort");

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _TextButton = _interopRequireDefault(require("../../general/TextButton"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

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