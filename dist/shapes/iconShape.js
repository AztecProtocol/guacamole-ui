"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.iconPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _responsiveTextSizes = _interopRequireDefault(require("./responsiveTextSizes"));

var _styleConstants = require("../config/styleConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var iconPropTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  size: _responsiveTextSizes.default,
  color: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.textColorNames))),
  rotate: _propTypes.default.oneOf([0, 90, 180, 270]),
  flipHorizontal: _propTypes.default.bool,
  flipVertical: _propTypes.default.bool,
  spin: _propTypes.default.bool
};
exports.iconPropTypes = iconPropTypes;

var _default = _propTypes.default.shape(iconPropTypes);

exports.default = _default;