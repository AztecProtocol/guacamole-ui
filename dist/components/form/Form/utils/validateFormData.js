"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateFormData;

var _dataModifier = require("./dataModifier");

var _errorsModifier = require("./errorsModifier");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var findFieldsErrors = function findFieldsErrors(data) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var errors = [];
  fields.forEach(function (_ref) {
    var fieldName = _ref.fieldName,
        fieldValidators = _ref.fieldValidators,
        subFields = _ref.fields;

    if (fieldValidators) {
      var value = (0, _dataModifier.getValue)(data, fieldName);
      var failed = fieldValidators.find(function (_ref2) {
        var validator = _ref2.validator;
        return !validator(value);
      });

      if (failed) {
        errors.push({
          fieldName: fieldName,
          error: failed.errorMessage
        });
      }
    }

    if (subFields) {
      var subErrors = findFieldsErrors(data, subFields);

      if (subErrors.length) {
        errors = [].concat(_toConsumableArray(errors), _toConsumableArray(subErrors));
      }
    }
  });
  return errors;
};

function validateFormData(data, fieldsConfig) {
  var formatedErrors = {};
  fieldsConfig.forEach(function (_ref3) {
    var fields = _ref3.fields;
    var errors = findFieldsErrors(data, fields);
    errors.forEach(function (_ref4) {
      var fieldName = _ref4.fieldName,
          error = _ref4.error;
      formatedErrors = (0, _errorsModifier.addError)(formatedErrors, fieldName, error);
    });
  });
  return formatedErrors;
}