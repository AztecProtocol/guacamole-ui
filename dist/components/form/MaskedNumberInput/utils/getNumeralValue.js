"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNumeralValue;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getPureDigits(value) {
  return value.replace(/[^0-9]/g, '');
}

function getNumeralValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$allowDecimal = _ref.allowDecimal,
      allowDecimal = _ref$allowDecimal === void 0 ? false : _ref$allowDecimal,
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative;

  var numeral = '';
  var strValue = "".concat(value).trim();

  var _strValue$split = strValue.split('.'),
      _strValue$split2 = _toArray(_strValue$split),
      integer = _strValue$split2[0],
      rest = _strValue$split2.slice(1);

  var sign = allowNegative && integer.match(/^([^0-9]){0,}-/) ? '-' : '';
  numeral = "".concat(sign).concat(getPureDigits(integer));

  if (allowDecimal) {
    if (rest.length) {
      numeral += ".".concat(getPureDigits(rest.join('')));
    } else if (strValue.indexOf('.') >= 0) {
      numeral += '.';
    }
  }

  return numeral;
}