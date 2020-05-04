"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseValue;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseValue(value) {
  var _ref = "".concat(value).match(/^(-)?(.{0,})$/) || [],
      _ref2 = _slicedToArray(_ref, 3),
      _ref2$ = _ref2[1],
      sign = _ref2$ === void 0 ? '' : _ref2$,
      _ref2$2 = _ref2[2],
      numberValue = _ref2$2 === void 0 ? '' : _ref2$2;

  var unsignedStrValue = numberValue === '0' ? numberValue : numberValue.replace(/,/g, '').replace(/^0{1,}/, '');

  var _ref3 = unsignedStrValue.match(/^([0-9]{0,})\.?([0-9]{0,})$/) || [],
      _ref4 = _slicedToArray(_ref3, 3),
      _ref4$ = _ref4[1],
      integerValue = _ref4$ === void 0 ? '' : _ref4$,
      _ref4$2 = _ref4[2],
      decimalsStr = _ref4$2 === void 0 ? '' : _ref4$2;

  var decimals = decimalsStr.replace(/0{1,}$/, '');
  var unsignedValue = decimals ? "".concat(integerValue || '0', ".").concat(decimals) : integerValue;
  return {
    sign: sign,
    unsignedValue: unsignedValue,
    integerValue: integerValue,
    decimals: decimals
  };
}