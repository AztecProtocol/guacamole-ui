"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isGreaterThan;
exports.isLargerDecimal = exports.isLargerInteger = void 0;

var _parseValue = _interopRequireDefault(require("./parseValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isLargerInteger = function isLargerInteger(largeValue, smallValue) {
  if (largeValue.length !== smallValue.length) {
    return largeValue.length > smallValue.length;
  }

  var isLargerThan = false;

  for (var i = 0; i < largeValue.length; i += 1) {
    if (largeValue[i] !== smallValue[i]) {
      isLargerThan = largeValue[i] > smallValue[i];
      break;
    }
  }

  return isLargerThan;
};

exports.isLargerInteger = isLargerInteger;

var isLargerDecimal = function isLargerDecimal(largeDecimal, smallDecimal) {
  var vL = largeDecimal.replace(/0{1,}$/, '');
  var vS = smallDecimal.replace(/0{1,}$/, '');
  var isLargerThan = false;

  for (var i = 0; i < vL.length; i += 1) {
    if (vL[i] !== vS[i]) {
      isLargerThan = !vS[i] || vL[i] > vS[i];
      break;
    }
  }

  return isLargerThan;
};

exports.isLargerDecimal = isLargerDecimal;

function isGreaterThan(largeValue, smallValue) {
  if (largeValue === '' || smallValue === '') {
    return false;
  }

  var vL = (0, _parseValue["default"])(largeValue);
  var vS = (0, _parseValue["default"])(smallValue);

  if (vL.sign !== vS.sign) {
    return !vL.sign;
  }

  if (vL.integerValue !== vS.integerValue) {
    var isLarger = isLargerInteger(vL.integerValue, vS.integerValue);
    return !!(isLarger ^ !!vL.sign); // eslint-disable-line no-bitwise
  }

  if (vL.decimals !== vS.decimals) {
    var _isLarger = isLargerDecimal(vL.decimals, vS.decimals);

    return !!(_isLarger ^ !!vL.sign); // eslint-disable-line no-bitwise
  }

  return false;
}