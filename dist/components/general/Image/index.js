"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleConstants = require("../../../config/styleConstants");

var _withEmptyOrDefault = _interopRequireDefault(require("../../../shapes/withEmptyOrDefault"));

var _LazyLoad = _interopRequireDefault(require("../../utils/LazyLoad"));

var _isFlexibleImage = _interopRequireDefault(require("./utils/isFlexibleImage"));

var _ImageWrapper = _interopRequireDefault(require("./ImageWrapper"));

var _ImagePlaceholder = _interopRequireDefault(require("./ImagePlaceholder"));

var _RealImage = _interopRequireDefault(require("./RealImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Image = function Image(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height,
      src = _ref.src,
      backgroundUrl = _ref.backgroundUrl,
      backgroundPosition = _ref.backgroundPosition,
      backgroundSize = _ref.backgroundSize,
      borderRadius = _ref.borderRadius,
      alt = _ref.alt,
      children = _ref.children,
      lazyLoadContainerId = _ref.lazyLoadContainerId,
      lazyLoadBuffer = _ref.lazyLoadBuffer,
      lazyLoad = _ref.lazyLoad,
      showPlaceholder = _ref.showPlaceholder,
      onLoad = _ref.onLoad,
      onError = _ref.onError;

  var content = _react["default"].createElement(_RealImage["default"], {
    testId: testId,
    className: className,
    ratio: ratio,
    width: width,
    height: height,
    src: src,
    backgroundUrl: backgroundUrl,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    borderRadius: borderRadius,
    alt: alt,
    showPlaceholder: showPlaceholder,
    onLoad: onLoad,
    onError: onError
  }, children);

  var isEmptyImage = !src && !backgroundUrl;

  if (!lazyLoad || isEmptyImage) {
    return content;
  }

  var wrapperRatio = ratio || (0, _isFlexibleImage["default"])({
    ratio: ratio,
    width: width,
    height: height
  }) && 'golden' || '';
  var placeholder = showPlaceholder ? _react["default"].createElement(_ImageWrapper["default"], {
    testId: testId,
    className: className,
    ratio: wrapperRatio,
    width: width,
    height: height,
    borderRadius: borderRadius
  }) : _react["default"].createElement(_ImagePlaceholder["default"], {
    testId: testId,
    className: className,
    ratio: wrapperRatio,
    width: width,
    height: height,
    borderRadius: borderRadius
  });
  return _react["default"].createElement(_LazyLoad["default"], {
    containerId: lazyLoadContainerId,
    buffer: lazyLoadBuffer,
    initialContent: placeholder
  }, content);
};

Image.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  ratio: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.imageRatioNames))),
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  src: _propTypes["default"].string,
  backgroundUrl: _propTypes["default"].string,
  backgroundPosition: _propTypes["default"].string,
  backgroundSize: _propTypes["default"].string,
  borderRadius: _propTypes["default"].oneOf((0, _withEmptyOrDefault["default"])(_styleConstants.roundedCornerKeys)),
  alt: _propTypes["default"].string,
  children: _propTypes["default"].node,
  lazyLoadContainerId: _propTypes["default"].string,
  lazyLoadBuffer: _propTypes["default"].number,
  lazyLoad: _propTypes["default"].bool,
  showPlaceholder: _propTypes["default"].bool,
  onLoad: _propTypes["default"].func,
  onError: _propTypes["default"].func
};
Image.defaultProps = {
  testId: undefined,
  className: '',
  ratio: '',
  width: '',
  height: '',
  src: '',
  backgroundUrl: '',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: 'none',
  alt: '',
  children: null,
  lazyLoadContainerId: '',
  lazyLoadBuffer: 0,
  lazyLoad: false,
  showPlaceholder: true,
  onLoad: function onLoad() {},
  onError: function onError() {}
};
var _default = Image;
exports["default"] = _default;