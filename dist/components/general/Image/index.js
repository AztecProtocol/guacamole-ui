"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Image = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

var _withEmptyOrDefault = _interopRequireDefault(require("../../../shapes/withEmptyOrDefault"));

var _LazyLoad = _interopRequireDefault(require("../../utils/LazyLoad"));

var _isFlexibleImage = _interopRequireDefault(require("./utils/isFlexibleImage"));

var _ImageWrapper = _interopRequireDefault(require("./ImageWrapper"));

var _ImagePlaceholder = _interopRequireDefault(require("./ImagePlaceholder"));

var _RealImage = _interopRequireDefault(require("./RealImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var styles = {
  "ratio-square": "image__ratio-square___dGY9i",
  "ratio-classic": "image__ratio-classic___3Jmh1",
  "ratio-golden": "image__ratio-golden___2H6WH",
  "ratio-landscape": "image__ratio-landscape___1ZJT-",
  "ratio-ultra": "image__ratio-ultra___2Xu2p",
  "wrapper": "image__wrapper___3MkBG",
  "mocked-holder": "image__mocked-holder___1kbJa",
  "preload-img": "image__preload-img___G_4Wv",
  "img": "image__img___35Ain",
  "free": "image__free___3y_Wy",
  "bg": "image__bg___3xOJd",
  "placeholder": "image__placeholder___2fLoV",
  "isLoading": "image__isLoading___C2u3b",
  "placeHolderShimmer": "image__placeHolderShimmer___BGwuJ",
  "placeholder-icon": "image__placeholder-icon___3joxc"
};

var Image = function Image(_ref) {
  var className = _ref.className,
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

  var content = _react.default.createElement(_RealImage.default, {
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

  var wrapperRatio = ratio || (0, _isFlexibleImage.default)({
    ratio: ratio,
    width: width,
    height: height
  }) && 'golden' || '';
  var placeholder = showPlaceholder ? _react.default.createElement(_ImageWrapper.default, {
    className: className,
    ratio: wrapperRatio,
    width: width,
    height: height,
    borderRadius: borderRadius
  }) : _react.default.createElement(_ImagePlaceholder.default, {
    className: className,
    ratio: wrapperRatio,
    width: width,
    height: height,
    borderRadius: borderRadius
  });
  return _react.default.createElement(_LazyLoad.default, {
    containerId: lazyLoadContainerId,
    buffer: lazyLoadBuffer,
    initialContent: placeholder
  }, content);
};

exports.Image = Image;
Image.propTypes = {
  className: _propTypes.default.string,
  ratio: _propTypes.default.oneOf([''].concat(_toConsumableArray(_shapes.imageRatioNames))),
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  src: _propTypes.default.string,
  backgroundUrl: _propTypes.default.string,
  backgroundPosition: _propTypes.default.string,
  backgroundSize: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOf((0, _withEmptyOrDefault.default)(_shapes.roundedCornerKeys)),
  alt: _propTypes.default.string,
  children: _propTypes.default.node,
  lazyLoadContainerId: _propTypes.default.string,
  lazyLoadBuffer: _propTypes.default.number,
  lazyLoad: _propTypes.default.bool,
  showPlaceholder: _propTypes.default.bool,
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func
};
Image.defaultProps = {
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

var _default = (0, _reactCssModules.default)(Image, styles);

exports.default = _default;