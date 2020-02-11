"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _generateResponsiveShape = _interopRequireDefault(require("../utils/generateResponsiveShape"));

var _withEmptyOrDefault = _interopRequireDefault(require("./withEmptyOrDefault"));

var _styleConstants = require("../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sizeNames = (0, _withEmptyOrDefault["default"])(_styleConstants.sizeKeys);

var _default = (0, _generateResponsiveShape["default"])(sizeNames);

exports["default"] = _default;