"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.deleteError = exports.addError = exports.getError = void 0;

var _replaceValue = _interopRequireDefault(require("../../../../utils/replaceValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getError = function getError(errors, fieldName) {
  return errors[fieldName];
};

exports.getError = getError;

var addError = function addError(prevErrors, fieldName, error) {
  return (0, _replaceValue.default)(prevErrors, fieldName, error, true);
};

exports.addError = addError;

var deleteError = function deleteError(prevErrors, fieldName) {
  if (!(fieldName in prevErrors)) {
    return prevErrors;
  }

  var errors = _objectSpread({}, prevErrors);

  delete errors[fieldName];
  return errors;
};

exports.deleteError = deleteError;
var _default = {
  get: getError,
  add: addError,
  delete: deleteError
};
exports.default = _default;