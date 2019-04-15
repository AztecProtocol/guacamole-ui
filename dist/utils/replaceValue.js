"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceValue;
exports.FORCE_UPDATE_VALUE = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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