"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deleteValue = exports.addValue = exports.getValue = void 0;

var _replaceValue = _interopRequireDefault(require("../../../../utils/replaceValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getValue = function getValue(data, fieldName) {
  return data[fieldName];
};

exports.getValue = getValue;

var addValue = function addValue(prevData, fieldName, value) {
  return (0, _replaceValue.default)(prevData, fieldName, value, true);
};

exports.addValue = addValue;

var deleteValue = function deleteValue(prevData, fieldName) {
  if (!(fieldName in prevData)) {
    return prevData;
  }

  var data = _objectSpread({}, prevData);

  delete data[fieldName];
  return data;
};

exports.deleteValue = deleteValue;
var _default = {
  get: getValue,
  add: addValue,
  delete: deleteValue
};
exports.default = _default;