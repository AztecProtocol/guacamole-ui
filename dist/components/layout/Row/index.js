"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _responsiveSizes = _interopRequireDefault(require("../../../shapes/responsiveSizes"));

var _FlexBox = _interopRequireDefault(require("../FlexBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "margin--xxs": "row__margin--xxs___1fZUb",
  "margin--xs": "row__margin--xs___1V4H4",
  "margin--s": "row__margin--s___GCxQW",
  "margin--m": "row__margin--m___4u2U_",
  "margin--l": "row__margin--l___3Q0An",
  "margin--xl": "row__margin--xl___2AuVW",
  "margin--xxl": "row__margin--xxl___23PHp",
  "margin--none": "row__margin--none___Yntsm",
  "margin-xs-xxs": "row__margin-xs-xxs___1WPa3",
  "margin-xs-xs": "row__margin-xs-xs___3MFzC",
  "margin-xs-s": "row__margin-xs-s___3ZYwa",
  "margin-xs-m": "row__margin-xs-m___1IDNz",
  "margin-xs-l": "row__margin-xs-l___2jLvx",
  "margin-xs-xl": "row__margin-xs-xl___2LRxr",
  "margin-xs-xxl": "row__margin-xs-xxl___1pVWe",
  "margin-xs-none": "row__margin-xs-none___pWMDh",
  "margin-s-xxs": "row__margin-s-xxs___3IO25",
  "margin-s-xs": "row__margin-s-xs___20oFc",
  "margin-s-s": "row__margin-s-s___32YQy",
  "margin-s-m": "row__margin-s-m___1h0c5",
  "margin-s-l": "row__margin-s-l___-zrCt",
  "margin-s-xl": "row__margin-s-xl___3Vxkv",
  "margin-s-xxl": "row__margin-s-xxl___203cF",
  "margin-s-none": "row__margin-s-none___1On20",
  "margin-m-xxs": "row__margin-m-xxs___2JQdL",
  "margin-m-xs": "row__margin-m-xs___3zNBn",
  "margin-m-s": "row__margin-m-s___JRHx0",
  "margin-m-m": "row__margin-m-m___3duPU",
  "margin-m-l": "row__margin-m-l___Ya-C0",
  "margin-m-xl": "row__margin-m-xl___3JRQD",
  "margin-m-xxl": "row__margin-m-xxl___gtxhK",
  "margin-m-none": "row__margin-m-none___CwDqf",
  "margin-l-xxs": "row__margin-l-xxs___26wgq",
  "margin-l-xs": "row__margin-l-xs___5mkft",
  "margin-l-s": "row__margin-l-s___2t0pC",
  "margin-l-m": "row__margin-l-m____o28K",
  "margin-l-l": "row__margin-l-l___3AS4W",
  "margin-l-xl": "row__margin-l-xl___C_uKX",
  "margin-l-xxl": "row__margin-l-xxl___VBdYt",
  "margin-l-none": "row__margin-l-none___1LYSk",
  "margin-xl-xxs": "row__margin-xl-xxs___2DU2V",
  "margin-xl-xs": "row__margin-xl-xs___t_mxC",
  "margin-xl-s": "row__margin-xl-s___12JaW",
  "margin-xl-m": "row__margin-xl-m___2WS6_",
  "margin-xl-l": "row__margin-xl-l___1rrvi",
  "margin-xl-xl": "row__margin-xl-xl___3X0_y",
  "margin-xl-xxl": "row__margin-xl-xxl___3mr0v",
  "margin-xl-none": "row__margin-xl-none___350jw",
  "margin-xxl-xxs": "row__margin-xxl-xxs___1ZKHl",
  "margin-xxl-xs": "row__margin-xxl-xs___1L_1l",
  "margin-xxl-s": "row__margin-xxl-s___sj8Wq",
  "margin-xxl-m": "row__margin-xxl-m___2W_Ic",
  "margin-xxl-l": "row__margin-xxl-l___2Pq4u",
  "margin-xxl-xl": "row__margin-xxl-xl___5JQy7",
  "margin-xxl-xxl": "row__margin-xxl-xxl___EwQlq",
  "margin-xxl-none": "row__margin-xxl-none___2ACYe"
};

var Row = function Row(_ref) {
  var margin = _ref.margin,
      props = _objectWithoutProperties(_ref, ["margin"]);

  return _react.default.createElement(_FlexBox.default, _extends({
    styleName: (0, _classnames.default)(margin && margin !== 'none' && (0, _generateResponsiveStyleNames.default)('margin', margin) || '')
  }, props));
};

exports.Row = Row;
Row.propTypes = {
  className: _propTypes.default.string,
  margin: _responsiveSizes.default,
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  align: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  valign: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  nowrap: (0, _generateResponsiveShape.default)([true, false]),
  stretch: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
Row.defaultProps = {
  className: '',
  margin: 'm',
  direction: 'row',
  align: '',
  valign: '',
  nowrap: false,
  stretch: false
};

var _default = (0, _reactCssModules.default)(Row, styles, {
  allowMultiple: true
});

exports.default = _default;