"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = replaceValue;
exports.FORCE_UPDATE_VALUE = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function assignValue(data, key, value) {
  var newData = Array.isArray(data) ? _toConsumableArray(data) : _objectSpread({}, data);
  newData[key] = value;
  return newData;
}

var FORCE_UPDATE_VALUE = true;
exports.FORCE_UPDATE_VALUE = FORCE_UPDATE_VALUE;

function replaceValue(data, path, value) {
  var forceUpdate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (_typeof(data) !== 'object') {
    return !path ? value : data;
  }

  var newData = data;
  var root = '';
  var segments = path.split('.');
  var replaceAt = segments.findIndex(function (seg) {
    root += seg;

    if (!(root in data)) {
      root += '.';
      return false;
    }

    return true;
  });

  if (replaceAt >= 0) {
    var childPath = segments.slice(replaceAt + 1).join('.');
    var childData = !childPath ? value : replaceValue(data[root], childPath, value, forceUpdate);

    if (childData !== data[root]) {
      newData = assignValue(newData, root, childData);
    }
  } else if (forceUpdate) {
    newData = assignValue(newData, path, value);
  }

  return newData;
}