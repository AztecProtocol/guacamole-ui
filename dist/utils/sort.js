"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortBySortedArray = exports.makeSort = exports.DESC = exports.ASC = exports["default"] = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ASC = true;
exports.ASC = ASC;
var DESC = false;
exports.DESC = DESC;

var sort = function sort(data, sortBy, asc) {
  var sortGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _get["default"];
  return _toConsumableArray(data).sort(function (a, b) {
    var vA = sortGet(a, sortBy);
    var vB = sortGet(b, sortBy);

    if (vA === vB) {
      return 0;
    }

    return vA < vB ^ asc && 1 || -1; // eslint-disable-line no-bitwise
  });
};

var sortBySortedArray = function sortBySortedArray(data, sortedArray, sortBy) {
  var sortGet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _get["default"];
  var indexMap = {};
  sortedArray.forEach(function (value, index) {
    indexMap[value] = index;
  });

  var sortGetIndex = function sortGetIndex(item) {
    return indexMap[sortGet(item, sortBy)];
  };

  return sort(data, sortBy, ASC, sortGetIndex);
};

exports.sortBySortedArray = sortBySortedArray;

var makeSort = function makeSort(sortBy, defaultAsc) {
  return function (data, asc) {
    return sort(data, sortBy, asc || defaultAsc);
  };
};

exports.makeSort = makeSort;
var _default = sort;
exports["default"] = _default;