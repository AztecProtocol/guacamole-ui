"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDefaultData;

var _dataModifier = require("./dataModifier");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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