"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeItemGroupShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _listItemShape = _interopRequireDefault(require("./listItemShape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeItemGroupShape = function makeItemGroupShape(extraItemFields) {
  return {
    caption: _propTypes.default.shape(_listItemShape.default),
    toggleable: _propTypes.default.bool,
    items: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread({}, _listItemShape.default, extraItemFields)))
  };
};

exports.makeItemGroupShape = makeItemGroupShape;
var defaultItemGroupShape = makeItemGroupShape({
  value: _propTypes.default.string.isRequired,
  href: _propTypes.default.string,
  Link: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),
  disabled: _propTypes.default.bool
});

var _default = _propTypes.default.shape(defaultItemGroupShape);

exports.default = _default;