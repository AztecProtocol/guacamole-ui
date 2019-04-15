"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortRowValuesWithDefault;

var _getFormFieldValue = _interopRequireDefault(require("../../../../utils/getFormFieldValue"));

var _sort = _interopRequireWildcard(require("../../../../utils/sort"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function sortRowValuesWithDefault(prevSortedData, sortBy, sortOrder, getRowKey, fields) {
  var toBeSorted = prevSortedData.map(function (row) {
    return _objectSpread({}, row, _defineProperty({
      key: getRowKey(row)
    }, "".concat(sortBy), (0, _getFormFieldValue.default)(sortBy, row, fields)));
  });

  var _ref = fields.find(function (_ref2) {
    var fieldName = _ref2.fieldName;
    return fieldName === sortBy;
  }) || {},
      sortGet = _ref.sortGet;

  var sortedKeys = (0, _sort.default)(toBeSorted, sortBy, sortOrder, sortGet).map(function (_ref3) {
    var key = _ref3.key;
    return key;
  });

  var sortGetKey = function sortGetKey(row) {
    return getRowKey(row);
  };

  return (0, _sort.sortBySortedArray)(prevSortedData, sortedKeys, sortBy, sortGetKey);
}