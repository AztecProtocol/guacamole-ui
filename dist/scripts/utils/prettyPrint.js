"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prettyPrint;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var indent = function indent(strArr) {
  if (typeof strArr === 'string') {
    return "  ".concat(strArr);
  }

  return strArr.map(function (str) {
    return "  ".concat(str);
  });
};

var formatObject = function formatObject(obj) {
  var lines = [];

  switch (_typeof(obj)) {
    case 'string':
      lines.push("'".concat(obj.replace(/'/g, "\\'"), "'"));
      break;

    case 'number':
    case 'boolean':
      lines.push("".concat(obj));
      break;

    case 'object':
      {
        if (Array.isArray(obj)) {
          lines.push('[');
          obj.forEach(function (value) {
            var childLines = formatObject(value);

            if (childLines.length === 1) {
              lines.push(indent("".concat(childLines[0], ",")));
            } else {
              lines = [].concat(_toConsumableArray(lines), [indent("".concat(childLines[0]))], _toConsumableArray(indent(childLines.slice(1, -1))), [indent("".concat(childLines[childLines.length - 1], ","))]);
            }
          });
          lines.push(']');
        } else {
          lines.push('{');
          Object.keys(obj).forEach(function (key) {
            var childLines = formatObject(obj[key]);
            var keyStr = key.match(/^[a-z0-9]+$/i) ? key : key.includes("'") && "\"".concat(key, "\"") || "'".concat(key, "'");

            if (childLines.length === 1) {
              lines.push(indent("".concat(keyStr, ": ").concat(childLines[0], ",")));
            } else {
              lines = [].concat(_toConsumableArray(lines), [indent("".concat(keyStr, ": ").concat(childLines[0]))], _toConsumableArray(indent(childLines.slice(1, -1))), [indent("".concat(childLines[childLines.length - 1], ","))]);
            }
          });
          lines.push('}');
        }

        break;
      }

    default:
  }

  return lines;
};

function prettyPrint(obj) {
  var lines = formatObject(obj);
  return lines.join('\n');
}