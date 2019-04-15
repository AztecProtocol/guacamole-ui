"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNextCursorPosition;

var _formatNumeralValue = _interopRequireDefault(require("./formatNumeralValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNextCursorPosition(inputValue, prevValue, position) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$allowDecimal = _ref.allowDecimal,
      allowDecimal = _ref$allowDecimal === void 0 ? false : _ref$allowDecimal,
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative;

  var value = (0, _formatNumeralValue.default)(inputValue, {
    allowDecimal: allowDecimal,
    allowNegative: allowNegative
  });
  var offset = 0;
  var diff = value.length - prevValue.length;

  if (diff === 0) {
    if (inputValue.length > value.length) {
      offset = -1;
    } else {
      offset = 0;
    }
  } else {
    if (position > 1 && Math.abs(diff) > 1) {
      offset = diff > 0 ? 1 : -1;
    }

    if (value[position + offset - 1] === ',') {
      offset -= 1;
    }
  }

  return Math.min(position + offset, value.length);
}