"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseCssSizeValues;

var _styleConstants = require("../config/styleConstants");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var directions = ['top', 'right', 'bottom', 'left'];

function parseCssSizeString(sizeStr) {
  var values = sizeStr.trim().replace(/\s+/g, ' ').split(' ');

  if (values.length < 2) {
    values.push(values[0]);
  }

  if (values.length < 3) {
    values.push(values[0]);
  }

  if (values.length < 4) {
    values.push(values[1]);
  }

  var sizeMap = {};

  if (values.every(function (v, i) {
    return !i || v === values[i - 1];
  })) {
    var _values = _slicedToArray(values, 1);

    sizeMap.all = _values[0];
    values.forEach(function (v, i) {
      values[i] = '';
    });
  } else {
    if (values[0] === values[2]) {
      var _values2 = _slicedToArray(values, 1);

      sizeMap.v = _values2[0];
      values[0] = '';
      values[2] = '';
    }

    if (values[1] === values[3]) {
      var _values3 = _slicedToArray(values, 2);

      sizeMap.h = _values3[1];
      values[1] = '';
      values[3] = '';
    }
  }

  directions.forEach(function (dir, i) {
    if (values[i] !== '') {
      sizeMap[dir] = values[i];
    }
  });
  return sizeMap;
}

function isSimpleValue(val) {
  return val.match(/^\S*$/);
}

function containSimpleValueOnly(values) {
  return _styleConstants.deviceBreakpointKeys.every(function (key) {
    return !values[key] || isSimpleValue(values[key]);
  });
}

function parseCssSizeValues(values) {
  if (typeof values === 'string') {
    return isSimpleValue(values) ? {
      all: values
    } : parseCssSizeString(values);
  }

  if (containSimpleValueOnly(values)) {
    return {
      all: values
    };
  }

  var sizeMap = {};

  _styleConstants.deviceBreakpointKeys.filter(function (key) {
    return values[key];
  }).forEach(function (key) {
    var sizes = parseCssSizeString(values[key]);
    Object.keys(sizes).forEach(function (dir) {
      if (!sizeMap[dir]) {
        sizeMap[dir] = {};
      }

      sizeMap[dir][key] = sizes[dir];
    });
  });

  return sizeMap;
}