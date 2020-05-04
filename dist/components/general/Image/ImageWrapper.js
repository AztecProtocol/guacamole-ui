"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ImageWrapper = function ImageWrapper(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      ratio = _ref.ratio,
      width = _ref.width,
      height = _ref.height,
      borderRadius = _ref.borderRadius,
      children = _ref.children;
  var divStyle = {};

  if (width) {
    divStyle.width = width;
  }

  if (height) {
    divStyle.height = height;
  }

  return /*#__PURE__*/_react["default"].createElement(_Block["default"], {
    testId: testId,
    className: (0, _classnames2["default"])(className, styles.wrapper, _defineProperty({}, styles["ratio-".concat(ratio)], ratio)),
    borderRadius: borderRadius,
    style: divStyle
  }, children);
};

ImageWrapper.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  ratio: _propTypes["default"].string,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  borderRadius: _propTypes["default"].string,
  children: _propTypes["default"].node
};
ImageWrapper.defaultProps = {
  testId: undefined,
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null
};
var _default = ImageWrapper;
exports["default"] = _default;