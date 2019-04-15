"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormFieldValue;
exports.makeGetFormFieldValue = void 0;

var _curryRight = _interopRequireDefault(require("lodash/curryRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFormFieldValue(fieldName, data, config) {
  var _ref = (config || []).find(function (c) {
    return c.fieldName === fieldName;
  }) || {},
      defaultValue = _ref.defaultValue;

  if (typeof defaultValue === 'function') {
    return defaultValue({
      data: data
    });
  }

  if (data[fieldName] !== undefined) {
    return data[fieldName];
  }

  return defaultValue;
}

var makeGetFormFieldValue = (0, _curryRight.default)(getFormFieldValue);
exports.makeGetFormFieldValue = makeGetFormFieldValue;