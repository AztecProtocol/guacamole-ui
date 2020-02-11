"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sort = require("../utils/sort");

var _responsiveColumns = _interopRequireDefault(require("./responsiveColumns"));

var _responsiveTextAlign = _interopRequireDefault(require("./responsiveTextAlign"));

var _itemGroupShape = _interopRequireDefault(require("./itemGroupShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  fieldName: _propTypes["default"].string,
  inputType: _propTypes["default"].oneOf(['text', 'number', 'select', 'switch', 'checkbox', 'date', 'button']),
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  column: _responsiveColumns["default"],
  shift: _responsiveColumns["default"],
  width: _propTypes["default"].string,
  align: _responsiveTextAlign["default"],
  itemGroups: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_itemGroupShape["default"]), _propTypes["default"].func]),
  value: _propTypes["default"].any,
  defaultValue: _propTypes["default"].any,
  defaultSortingOrder: _propTypes["default"].oneOf([_sort.ASC, _sort.DESC]),
  sortGet: _propTypes["default"].func,
  mask: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  formatValue: _propTypes["default"].func,
  validate: _propTypes["default"].func,
  loading: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  readOnly: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  disabled: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),
  Component: _propTypes["default"].func
};
exports["default"] = _default;