"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ImageWrapper = function ImageWrapper(_ref) {
  var className = _ref.className,
      ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height,
      borderRadius = _ref.borderRadius,
      children = _ref.children;
  var styleName = (0, _classnames2.default)('wrapper', _defineProperty({}, "ratio-".concat(ratio), ratio));
  var divStyle = {};

  if (width) {
    divStyle.width = width;
  }

  if (height) {
    divStyle.height = height;
  }

  return _react.default.createElement(_Block.default, {
    className: className,
    styleName: styleName,
    borderRadius: borderRadius,
    style: divStyle
  }, children);
};

ImageWrapper.propTypes = {
  className: _propTypes.default.string,
  ratio: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  borderRadius: _propTypes.default.string,
  children: _propTypes.default.node
};
ImageWrapper.defaultProps = {
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null
};

var _default = (0, _reactCssModules.default)(ImageWrapper, styles, {
  allowMultiple: true
});

exports.default = _default;