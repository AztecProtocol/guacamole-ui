"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Badge = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "badge": "badge__badge___F3ljS",
  "hide": "badge__hide___3i306",
  "size-xxs": "badge__size-xxs___1aocr",
  "dot-xxs": "badge__dot-xxs___2sN2R",
  "size-xs": "badge__size-xs___3wFuT",
  "dot-xs": "badge__dot-xs___1_a_Y",
  "size-s": "badge__size-s___1wnBR",
  "dot-s": "badge__dot-s___2tfQX",
  "size-m": "badge__size-m___1PK8N",
  "dot-m": "badge__dot-m___9hW3I",
  "size-l": "badge__size-l___3J8tn",
  "dot-l": "badge__dot-l___GlTXk",
  "size-xl": "badge__size-xl___1GFbl",
  "dot-xl": "badge__dot-xl___29R8d",
  "size-xxl": "badge__size-xxl___vZoRr",
  "dot-xxl": "badge__dot-xxl___vNggo",
  "theme-default": "badge__theme-default___2Isp0",
  "theme-label": "badge__theme-label___2mRyL",
  "placeHolderShimmer": "badge__placeHolderShimmer___9lugQ"
};

var Badge = function Badge(_ref) {
  var className = _ref.className,
      theme = _ref.theme,
      size = _ref.size,
      count = _ref.count,
      countOverflow = _ref.countOverflow,
      showZero = _ref.showZero,
      isDot = _ref.isDot;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames2.default)('badge', "theme-".concat(theme), "size-".concat(size), _defineProperty({
      hide: !showZero && count === 0
    }, "dot-".concat(size), isDot))
  }, count > countOverflow ? "".concat(countOverflow, "+") : count);
};

exports.Badge = Badge;
Badge.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(['default', 'label']),
  size: _propTypes.default.oneOf(_shapes.shapeSizeKeys),
  count: _propTypes.default.number.isRequired,
  countOverflow: _propTypes.default.number,
  showZero: _propTypes.default.bool,
  isDot: _propTypes.default.bool
};
Badge.defaultProps = {
  className: '',
  theme: 'default',
  size: 'xs',
  countOverflow: Infinity,
  showZero: false,
  isDot: false
};

var _default = (0, _reactCssModules.default)(Badge, styles, {
  allowMultiple: true
});

exports.default = _default;