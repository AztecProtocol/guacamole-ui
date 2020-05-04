"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatNumeralValue;

var _getNumeralValue = _interopRequireDefault(require("./getNumeralValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function formatNumeralValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$allowDecimal = _ref.allowDecimal,
      allowDecimal = _ref$allowDecimal === void 0 ? false : _ref$allowDecimal,
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative;

  var numberValue = (0, _getNumeralValue["default"])(value, {
    allowDecimal: allowDecimal,
    allowNegative: allowNegative
  });

  var _numberValue$match = numberValue.match(/^(-?)([0-9]{0,})(\.?)([0-9]{0,})$/),
      _numberValue$match2 = _slicedToArray(_numberValue$match, 5),
      sign = _numberValue$match2[1],
      integer = _numberValue$match2[2],
      decimal = _numberValue$match2[3],
      rest = _numberValue$match2[4];

  var newValue = '';
  var len = integer.length;

  for (var i = 0; i < len; i += 1) {
    if (i > 0 && i % 3 === 0) {
      newValue = ",".concat(newValue);
    }

    newValue = "".concat(integer[len - i - 1]).concat(newValue);
  }

  if (allowDecimal && decimal) {
    newValue += "".concat(decimal).concat(rest);
  }

  if (allowNegative && sign) {
    newValue = "".concat(sign).concat(newValue);
  }

  return newValue;
}