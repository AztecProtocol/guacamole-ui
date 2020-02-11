"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDefaultData;

var _dataModifier = require("./dataModifier");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultValueMap = {
  text: '',
  number: ''
};

var findFieldsValue = function findFieldsValue(data) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var values = [];
  fields.forEach(function (_ref) {
    var fieldName = _ref.fieldName,
        inputType = _ref.inputType,
        defaultValue = _ref.defaultValue,
        subFields = _ref.fields;
    var value = (0, _dataModifier.getValue)(data, fieldName);

    if (value === undefined) {
      value = defaultValue;
    }

    if (value === undefined) {
      value = defaultValueMap[inputType];
    }

    values.push({
      fieldName: fieldName,
      value: value
    });

    if (subFields) {
      var subValues = findFieldsValue(data, subFields);

      if (subValues.length) {
        values = [].concat(_toConsumableArray(values), _toConsumableArray(subValues));
      }
    }
  });
  return values;
};

function getDefaultData(prevData, fieldsConfig) {
  var data = {};
  fieldsConfig.forEach(function (_ref2) {
    var fields = _ref2.fields;
    var values = findFieldsValue(prevData, fields);
    values.forEach(function (_ref3) {
      var fieldName = _ref3.fieldName,
          value = _ref3.value;
      data = (0, _dataModifier.addValue)(data, fieldName, value);
    });
  });
  return data;
}