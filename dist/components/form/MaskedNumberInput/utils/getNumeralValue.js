"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNumeralValue;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

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