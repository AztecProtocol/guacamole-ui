"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImagePlaceholder = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

var _withEmptyOrDefault = _interopRequireDefault(require("../../../shapes/withEmptyOrDefault"));

var _camera = _interopRequireDefault(require("../../../assets/camera.svg"));

var _SVG = _interopRequireDefault(require("../SVG"));

var _ImageWrapper = _interopRequireDefault(require("./ImageWrapper"));

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

var ImagePlaceholder = function ImagePlaceholder(_ref) {
  var className = _ref.className,
      ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height,
      borderRadius = _ref.borderRadius,
      children = _ref.children,
      noWrapper = _ref.noWrapper,
      isLoading = _ref.isLoading;

  var contentNode = _react.default.createElement("div", {
    className: noWrapper ? className : '',
    styleName: (0, _classnames.default)('placeholder', {
      isLoading: isLoading
    })
  }, _react.default.createElement("div", {
    styleName: "placeholder-icon"
  }, _react.default.createElement(_SVG.default, {
    width: "100%",
    height: "100%",
    glyph: _camera.default,
    color: "grey-lighter"
  })));

  if (noWrapper) {
    return contentNode;
  }

  return _react.default.createElement(_ImageWrapper.default, {
    className: className,
    ratio: ratio,
    width: width,
    height: height,
    borderRadius: borderRadius
  }, contentNode, children);
};

exports.ImagePlaceholder = ImagePlaceholder;
ImagePlaceholder.propTypes = {
  className: _propTypes.default.string,
  ratio: _propTypes.default.oneOf([''].concat(_toConsumableArray(_shapes.imageRatioNames))),
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  borderRadius: _propTypes.default.oneOf((0, _withEmptyOrDefault.default)(_shapes.roundedCornerKeys)),
  children: _propTypes.default.node,
  noWrapper: _propTypes.default.bool,
  isLoading: _propTypes.default.bool
};
ImagePlaceholder.defaultProps = {
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
  noWrapper: false,
  isLoading: false
};

var _default = (0, _reactCssModules.default)(ImagePlaceholder, styles, {
  allowMultiple: true
});

exports.default = _default;