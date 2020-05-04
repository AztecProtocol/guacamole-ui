"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _withEmptyOrDefault = _interopRequireDefault(require("../../../shapes/withEmptyOrDefault"));

var _camera = _interopRequireDefault(require("../../../assets/camera.svg"));

var _SVG = _interopRequireDefault(require("../SVG"));

var _ImageWrapper = _interopRequireDefault(require("./ImageWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "ratio-square": "image-8aa5f9de",
  "ratio-classic": "image-aa46fffc",
  "ratio-golden": "image-b3194e1b",
  "ratio-landscape": "image-6cfe8723",
  "ratio-ultra": "image-24568aef",
  "wrapper": "image-ef178ce7",
  "mocked-holder": "image-b32a913b",
  "preload-img": "image-f3edf1da",
  "img": "image-d8aa0513",
  "free": "image-6bb7916c",
  "bg": "image-ee7d0bc6",
  "placeholder": "image-ced17b4b",
  "isLoading": "image-c64da696",
  "placeHolderShimmer": "image-fad775cb",
  "placeholder-icon": "image-9eb48fec"
};

var ImagePlaceholder = function ImagePlaceholder(_ref) {
  var _classnames;

  var testId = _ref.testId,
      className = _ref.className,
      ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height,
      borderRadius = _ref.borderRadius,
      children = _ref.children,
      noWrapper = _ref.noWrapper,
      isLoading = _ref.isLoading;

  var contentNode = /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": noWrapper ? testId : undefined,
    className: (0, _classnames2["default"])(styles.placeholder, (_classnames = {}, _defineProperty(_classnames, className, noWrapper), _defineProperty(_classnames, styles.isLoading, isLoading), _classnames))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: styles['placeholder-icon']
  }, /*#__PURE__*/_react["default"].createElement(_SVG["default"], {
    width: "100%",
    height: "100%",
    glyph: _camera["default"],
    color: "grey-lighter"
  })));

  if (noWrapper) {
    return contentNode;
  }

  return /*#__PURE__*/_react["default"].createElement(_ImageWrapper["default"], {
    testId: testId,
    className: className,
    ratio: ratio,
    width: width,
    height: height,
    borderRadius: borderRadius
  }, contentNode, children);
};

ImagePlaceholder.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  ratio: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.imageRatioNames))),
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf((0, _withEmptyOrDefault["default"])(_styleConstants.roundedCornerKeys)),
  children: _propTypes["default"].node,
  noWrapper: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool
};
ImagePlaceholder.defaultProps = {
  testId: undefined,
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
  noWrapper: false,
  isLoading: false
};
var _default = ImagePlaceholder;
exports["default"] = _default;