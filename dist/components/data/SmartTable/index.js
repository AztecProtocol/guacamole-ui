"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sort = require("../../../utils/sort");

var _fieldShape = _interopRequireDefault(require("../../../shapes/fieldShape"));

var _responsiveTextAlign = _interopRequireDefault(require("../../../shapes/responsiveTextAlign"));

var _TableHead = _interopRequireDefault(require("../FlexTable/TableHead"));

var _sortRowValuesWithDefault = _interopRequireDefault(require("./utils/sortRowValuesWithDefault"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SmartTable =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SmartTable, _PureComponent);

  _createClass(SmartTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var sortable = nextProps.sortable;

      if (!sortable) {
        return null;
      }

      var rowsData = nextProps.rowsData;
      var prevRowsData = prevState.prevProps.rowsData;

      if (rowsData === prevRowsData) {
        return null;
      }

      var sortBy = prevState.sortBy,
          sortOrder = prevState.sortOrder,
          prevSortedData = prevState.sortedData;
      var tableConfig = nextProps.tableConfig,
          getRowKey = nextProps.getRowKey,
          isEditing = nextProps.isEditing;
      var sortedData;

      if (!isEditing) {
        var fields = tableConfig.fields;
        sortedData = (0, _sortRowValuesWithDefault["default"])(rowsData, sortBy, sortOrder, getRowKey, fields);
      } else {
        var newDataMap = new Map();
        rowsData.forEach(function (row) {
          return newDataMap.set(getRowKey(row), row);
        });
        var orderedData = [];
        prevSortedData.forEach(function (row) {
          var key = getRowKey(row);

          if (newDataMap.has(key)) {
            orderedData.push(newDataMap.get(key));
            newDataMap["delete"](key);
          }
        });
        sortedData = [].concat(orderedData, _toConsumableArray(newDataMap.values()));
      }

      return {
        sortedData: sortedData,
        prevProps: {
          rowsData: rowsData
        }
      };
    }
  }]);

  function SmartTable(props) {
    var _this;

    _classCallCheck(this, SmartTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SmartTable).call(this, props));
    var tableConfig = props.tableConfig;
    var defaultSortBy = tableConfig.defaultSortBy,
        fields = tableConfig.fields;
    var defaultSortByField = fields.find(function (_ref) {
      var fieldName = _ref.fieldName;
      return fieldName === defaultSortBy;
    });
    _this.state = {
      sortBy: defaultSortBy,
      sortOrder: defaultSortByField ? defaultSortByField.defaultSortingOrder : _sort.ASC,
      sortedData: [],
      prevProps: {
        // eslint-disable-line react/no-unused-state
        rowsData: []
      }
    };
    _this.handleChangeSortingMethod = _this.handleChangeSortingMethod.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SmartTable, [{
    key: "handleChangeSortingMethod",
    value: function handleChangeSortingMethod(sortBy) {
      var _this$state = this.state,
          prevSortedData = _this$state.sortedData,
          prevSortBy = _this$state.sortBy,
          prevSortOrder = _this$state.sortOrder;

      if (sortBy === prevSortBy) {
        this.setState({
          sortOrder: prevSortOrder === _sort.DESC ? _sort.ASC : _sort.DESC,
          sortedData: _toConsumableArray(prevSortedData).reverse()
        });
      } else {
        var _this$props = this.props,
            tableConfig = _this$props.tableConfig,
            getRowKey = _this$props.getRowKey;
        var fields = tableConfig.fields;
        var sortOrder = fields.find(function (_ref2) {
          var fieldName = _ref2.fieldName;
          return fieldName === sortBy;
        }).defaultSortingOrder;
        this.setState({
          sortBy: sortBy,
          sortOrder: sortOrder,
          sortedData: (0, _sortRowValuesWithDefault["default"])(prevSortedData, sortBy, sortOrder, getRowKey, fields)
        });
      }
    }
  }, {
    key: "renderFormContent",
    value: function renderFormContent() {
      var _this$props2 = this.props,
          tableConfig = _this$props2.tableConfig,
          numberOfPlaceholderRows = _this$props2.numberOfPlaceholderRows,
          isLoading = _this$props2.isLoading,
          sortable = _this$props2.sortable,
          rowsData = _this$props2.rowsData;
      var sortedData = this.state.sortedData;
      var defaultAlign = tableConfig.align,
          fields = tableConfig.fields,
          isRowDeletable = tableConfig.isRowDeletable;
      var rows = sortable ? sortedData : rowsData;

      if (isLoading && !rows.length) {
        return Array.from({
          length: numberOfPlaceholderRows
        }, function (_, i) {
          return _react["default"].createElement(_TableRow["default"], {
            key: +i,
            align: defaultAlign,
            fieldsConfig: fields,
            isLoading: true
          });
        });
      }

      var _this$props3 = this.props,
          formData = _this$props3.formData,
          getRowKey = _this$props3.getRowKey,
          isEditing = _this$props3.isEditing,
          isUpdating = _this$props3.isUpdating,
          readOnly = _this$props3.readOnly,
          onChange = _this$props3.onChange,
          onTriggerEdit = _this$props3.onTriggerEdit,
          onDeleteRow = _this$props3.onDeleteRow;
      return rows.map(function (row) {
        return _react["default"].createElement(_TableRow["default"], {
          key: getRowKey(row),
          align: defaultAlign,
          fieldsConfig: fields,
          data: row,
          formData: formData,
          isEditing: isEditing,
          isLoading: isLoading || row.isLoading,
          isUpdating: isUpdating,
          deletable: isRowDeletable,
          onChange: onChange,
          onTriggerEdit: !readOnly ? onTriggerEdit : null,
          onDelete: onDeleteRow
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          tableConfig = _this$props4.tableConfig,
          formData = _this$props4.formData,
          isEditing = _this$props4.isEditing,
          sortable = _this$props4.sortable;
      var _this$state2 = this.state,
          sortBy = _this$state2.sortBy,
          sortOrder = _this$state2.sortOrder;
      var defaultAlign = tableConfig.align,
          fields = tableConfig.fields;
      var contentRows = this.renderFormContent();
      var visibleFields = fields.filter(function (_ref3) {
        var visible = _ref3.visible;
        return visible === undefined || (typeof visible !== 'function' ? visible : visible({
          formData: formData
        }));
      });
      return [_react["default"].createElement(_TableHead["default"], {
        key: "head",
        columns: fields.length === visibleFields.length ? fields : visibleFields,
        align: defaultAlign,
        sortBy: isEditing || !sortable ? '' : sortBy,
        sortOrder: sortOrder,
        onClickColumn: this.handleChangeSortingMethod,
        nowrap: true
      })].concat(_toConsumableArray(contentRows));
    }
  }]);

  return SmartTable;
}(_react.PureComponent);

SmartTable.propTypes = {
  tableConfig: _propTypes["default"].shape({
    align: _responsiveTextAlign["default"],
    defaultSortBy: _propTypes["default"].string,
    isRowDeletable: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
    fields: _propTypes["default"].arrayOf(_propTypes["default"].shape(_fieldShape["default"])).isRequired
  }).isRequired,
  rowsData: _propTypes["default"].arrayOf(_propTypes["default"].object),
  formData: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  getRowKey: _propTypes["default"].func,
  numberOfPlaceholderRows: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onTriggerEdit: _propTypes["default"].func,
  onDeleteRow: _propTypes["default"].func,
  sortable: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  isEditing: _propTypes["default"].bool,
  isUpdating: _propTypes["default"].bool
};
SmartTable.defaultProps = {
  rowsData: [],
  formData: {},
  getRowKey: function getRowKey(_ref4) {
    var id = _ref4.id;
    return id;
  },
  onChange: function onChange() {},
  onTriggerEdit: null,
  onDeleteRow: function onDeleteRow() {},
  numberOfPlaceholderRows: 3,
  sortable: false,
  readOnly: false,
  isLoading: false,
  isEditing: false,
  isUpdating: false
};
var _default = SmartTable;
exports["default"] = _default;