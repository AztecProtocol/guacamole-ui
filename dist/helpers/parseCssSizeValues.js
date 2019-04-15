"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseCssSizeValues;

var _layout = require("../config/layout");

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
  directions.forEach(function (dir, i) {
    sizeMap[dir] = values[i];
  });
  return sizeMap;
}

function isSimpleValue(val) {
  return val.match(/^\S*$/);
}

function containSimpleValueOnly(values) {
  return _layout.deviceBreakpoints.every(function (key) {
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

  _layout.deviceBreakpoints.filter(function (key) {
    return values[key];
  }).forEach(function (key) {
    var sizes = parseCssSizeString(values[key]);
    directions.forEach(function (dir) {
      if (!sizeMap[dir]) {
        sizeMap[dir] = {};
      }

      sizeMap[dir][key] = sizes[dir];
    });
  });

  return sizeMap;
}