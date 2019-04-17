"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateResponsiveShape;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateResponsiveShape(values) {
  return _propTypes.default.oneOfType([_propTypes.default.oneOf(values), _propTypes.default.shape({
    xxl: _propTypes.default.oneOf(values),
    xl: _propTypes.default.oneOf(values),
    l: _propTypes.default.oneOf(values),
    m: _propTypes.default.oneOf(values),
    s: _propTypes.default.oneOf(values),
    xs: _propTypes.default.oneOf(values),
    xxs: _propTypes.default.oneOf(values)
  })]);
}