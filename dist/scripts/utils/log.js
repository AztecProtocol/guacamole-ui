"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successLog = successLog;
exports.warnLog = warnLog;
exports.errorLog = errorLog;
exports.log = log;
exports.logEntries = logEntries;
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function formatLog(title) {
  console.log(title);

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  if (rest.length > 0) {
    var _console;

    (_console = console).log.apply(_console, _toConsumableArray(rest.map(function (msg) {
      return _chalk["default"].gray(msg);
    })));
  }

  console.log('');
}

function successLog() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var message = args[0],
      rest = args.slice(1);
  formatLog.apply(void 0, [_chalk["default"].green(message)].concat(_toConsumableArray(rest)));
}

function warnLog() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var message = args[0],
      rest = args.slice(1);
  formatLog.apply(void 0, [_chalk["default"].yellow.bold(" ".concat(message, " "))].concat(_toConsumableArray(rest)));
}

function errorLog() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var message = args[0],
      rest = args.slice(1);
  formatLog.apply(void 0, [_chalk["default"].white.bgRed.bold(" ".concat(message, " "))].concat(_toConsumableArray(rest)));
}

function log() {
  formatLog.apply(void 0, arguments);
}

function logEntries(files) {
  log("".concat(files.map(function (file) {
    return "  ".concat(file);
  }).join('\n')));
}

var _default = log;
exports["default"] = _default;