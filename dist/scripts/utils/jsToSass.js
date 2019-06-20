"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jsToSass;
exports.isSassValue = exports.camelToKebabCase = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var camelToKebabCase = function camelToKebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^(-)/, '');
};

exports.camelToKebabCase = camelToKebabCase;

var isSassValue = function isSassValue(val) {
  var strVal = "".concat(val);
  return !!(strVal.match(/^(.+\s)?[0-9]+(px|%)?(\s.+)?$/) || strVal.match(/#(?:[0-9a-f]{3}){1,2}(\s.+)?$/i) || strVal.match(/^(rgb(a)?|url)/) || strVal.match(/'|"|,/));
};

exports.isSassValue = isSassValue;

var formatValue = function formatValue(val) {
  return !isSassValue(val) && "'".concat(val, "'") || "".concat(val);
};

function jsToSass(source) {
  var sass = '';
  Object.keys(source).forEach(function (jsKey) {
    var cssKey = camelToKebabCase(jsKey);
    if (typeof source[jsKey] === 'function') return;
    var value = source[jsKey];

    if (_typeof(value) === 'object') {
      var valueArr = [];

      if (Array.isArray(value)) {
        valueArr = source[jsKey].map(formatValue);
      } else {
        Object.keys(source[jsKey]).map(function (key) {
          return valueArr.push("'".concat(camelToKebabCase(key), "':").concat(formatValue(value[key])));
        });
      }

      value = "(".concat(valueArr.join(','), ")");
    } else {
      value = formatValue(value);
    }

    sass += "$".concat(cssKey, ": ").concat(value.replace(/"/g, "'"), ";\n");
  });
  return sass;
}