"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cssLength = _interopRequireDefault(require("../../../propTypes/cssLength"));

var _colors = require("../../../config/colors");

var _styleConstants = require("../../../config/styleConstants");

var _extractColorDetail3 = _interopRequireDefault(require("./utils/extractColorDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SVG = function SVG(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      glyph = _ref.glyph,
      width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      strokeColor = _ref.strokeColor,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth;
  var svgProps = {};

  if (width) {
    svgProps.width = width;
  }

  if (height) {
    svgProps.height = height;
  }

  var colorCode = color ? _colors.colorMap[color] : fill;

  if (colorCode) {
    var _extractColorDetail = (0, _extractColorDetail3["default"])(colorCode),
        rgb = _extractColorDetail.rgb,
        opacity = _extractColorDetail.opacity;

    svgProps.fill = rgb;

    if (opacity !== undefined) {
      svgProps.fillOpacity = opacity;
    }
  }

  var strokeColorCode = strokeColor ? _colors.colorMap[strokeColor] : stroke;

  if (strokeColorCode) {
    var _extractColorDetail2 = (0, _extractColorDetail3["default"])(strokeColorCode),
        _rgb = _extractColorDetail2.rgb,
        _opacity = _extractColorDetail2.opacity;

    svgProps.stroke = _rgb;

    if (_opacity !== undefined) {
      svgProps.strokeOpacity = _opacity;
    }
  }

  if (strokeWidth !== undefined) {
    svgProps.strokeWidth = strokeWidth;
  }

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    "data-testid": testId,
    className: className,
    dangerouslySetInnerHTML: {
      // eslint-disable-line react/no-danger
      __html: "<use xlink:href=\"#".concat(glyph.id, "\" />")
    }
  }, svgProps));
};

SVG.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  glyph: _propTypes["default"].object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  width: _cssLength["default"],
  height: _cssLength["default"],
  color: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  strokeColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  fill: _propTypes["default"].string,
  stroke: _propTypes["default"].string,
  strokeWidth: _propTypes["default"].number
};
SVG.defaultProps = {
  testId: undefined,
  className: '',
  width: '',
  height: '',
  color: '',
  strokeColor: '',
  fill: '',
  stroke: '',
  strokeWidth: 0
};
var _default = SVG;
exports["default"] = _default;