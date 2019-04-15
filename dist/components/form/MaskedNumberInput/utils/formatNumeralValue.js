"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNumeralValue;

var _getNumeralValue = _interopRequireDefault(require("./getNumeralValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function formatNumeralValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$allowDecimal = _ref.allowDecimal,
      allowDecimal = _ref$allowDecimal === void 0 ? false : _ref$allowDecimal,
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative;

  var numberValue = (0, _getNumeralValue.default)(value, {
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