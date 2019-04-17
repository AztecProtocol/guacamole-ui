"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FlexBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireWildcard(require("../../../helpers/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "align--flex-start": "flex__align--flex-start___3dDO8",
  "align--flex-end": "flex__align--flex-end___3RSJx",
  "align--center": "flex__align--center___IuoGt",
  "align--space-between": "flex__align--space-between___1qMJQ",
  "align--space-around": "flex__align--space-around___2qqx6",
  "align--space-evenly": "flex__align--space-evenly___2F1ze",
  "valign--flex-start": "flex__valign--flex-start___18Lff",
  "valign--flex-end": "flex__valign--flex-end___3jMTA",
  "valign--center": "flex__valign--center___3PtRi",
  "valign--stretch": "flex__valign--stretch___ZFvBp",
  "valign--baseline": "flex__valign--baseline___2CtRb",
  "nowrap--true": "flex__nowrap--true___17qef",
  "nowrap--false": "flex__nowrap--false___38KyE",
  "align-xs-flex-start": "flex__align-xs-flex-start___15nXn",
  "align-xs-flex-end": "flex__align-xs-flex-end___1pj4w",
  "align-xs-center": "flex__align-xs-center___1MrTz",
  "align-xs-space-between": "flex__align-xs-space-between___2_oh3",
  "align-xs-space-around": "flex__align-xs-space-around___3JeRZ",
  "align-xs-space-evenly": "flex__align-xs-space-evenly___jh1mP",
  "valign-xs-flex-start": "flex__valign-xs-flex-start___2ohmp",
  "valign-xs-flex-end": "flex__valign-xs-flex-end___34Yw2",
  "valign-xs-center": "flex__valign-xs-center___2H7LR",
  "valign-xs-stretch": "flex__valign-xs-stretch___1cCUs",
  "valign-xs-baseline": "flex__valign-xs-baseline___3sW8b",
  "nowrap-xs-true": "flex__nowrap-xs-true___1IMob",
  "nowrap-xs-false": "flex__nowrap-xs-false___2vBWz",
  "align-s-flex-start": "flex__align-s-flex-start___2z7KX",
  "align-s-flex-end": "flex__align-s-flex-end___3A55E",
  "align-s-center": "flex__align-s-center___3bbDH",
  "align-s-space-between": "flex__align-s-space-between___2_cMP",
  "align-s-space-around": "flex__align-s-space-around___Vxr5m",
  "align-s-space-evenly": "flex__align-s-space-evenly___1gSxv",
  "valign-s-flex-start": "flex__valign-s-flex-start___ZhCBV",
  "valign-s-flex-end": "flex__valign-s-flex-end___1sUQK",
  "valign-s-center": "flex__valign-s-center___18k5p",
  "valign-s-stretch": "flex__valign-s-stretch___34cWd",
  "valign-s-baseline": "flex__valign-s-baseline___lRpi2",
  "nowrap-s-true": "flex__nowrap-s-true___2NyDn",
  "nowrap-s-false": "flex__nowrap-s-false___3_PpC",
  "align-m-flex-start": "flex__align-m-flex-start___fXcTO",
  "align-m-flex-end": "flex__align-m-flex-end___3kbJh",
  "align-m-center": "flex__align-m-center___3VpUl",
  "align-m-space-between": "flex__align-m-space-between___3J3Yc",
  "align-m-space-around": "flex__align-m-space-around___36BfD",
  "align-m-space-evenly": "flex__align-m-space-evenly___3IwSd",
  "valign-m-flex-start": "flex__valign-m-flex-start___2Ay9F",
  "valign-m-flex-end": "flex__valign-m-flex-end___2ih3p",
  "valign-m-center": "flex__valign-m-center___U1ngz",
  "valign-m-stretch": "flex__valign-m-stretch___3doLC",
  "valign-m-baseline": "flex__valign-m-baseline___3jV78",
  "nowrap-m-true": "flex__nowrap-m-true___3Io_A",
  "nowrap-m-false": "flex__nowrap-m-false___G3j2M",
  "align-l-flex-start": "flex__align-l-flex-start___3xj8h",
  "align-l-flex-end": "flex__align-l-flex-end___1vTWI",
  "align-l-center": "flex__align-l-center___36oCa",
  "align-l-space-between": "flex__align-l-space-between___1kcOc",
  "align-l-space-around": "flex__align-l-space-around___2umWP",
  "align-l-space-evenly": "flex__align-l-space-evenly___2f5pQ",
  "valign-l-flex-start": "flex__valign-l-flex-start___1yYjh",
  "valign-l-flex-end": "flex__valign-l-flex-end___10hcb",
  "valign-l-center": "flex__valign-l-center___8fJF1",
  "valign-l-stretch": "flex__valign-l-stretch___2oVPw",
  "valign-l-baseline": "flex__valign-l-baseline___23WDG",
  "nowrap-l-true": "flex__nowrap-l-true___2-_ST",
  "nowrap-l-false": "flex__nowrap-l-false___1xqCN",
  "align-xl-flex-start": "flex__align-xl-flex-start___3jUD-",
  "align-xl-flex-end": "flex__align-xl-flex-end___3Idal",
  "align-xl-center": "flex__align-xl-center___2s2L_",
  "align-xl-space-between": "flex__align-xl-space-between___2LmoW",
  "align-xl-space-around": "flex__align-xl-space-around___2puuH",
  "align-xl-space-evenly": "flex__align-xl-space-evenly___1oT74",
  "valign-xl-flex-start": "flex__valign-xl-flex-start___Ku08Q",
  "valign-xl-flex-end": "flex__valign-xl-flex-end___1PnfZ",
  "valign-xl-center": "flex__valign-xl-center___1QRAF",
  "valign-xl-stretch": "flex__valign-xl-stretch___3CFBW",
  "valign-xl-baseline": "flex__valign-xl-baseline___2vito",
  "nowrap-xl-true": "flex__nowrap-xl-true___3amz2",
  "nowrap-xl-false": "flex__nowrap-xl-false___2scQP",
  "align-xxl-flex-start": "flex__align-xxl-flex-start___3WpbS",
  "align-xxl-flex-end": "flex__align-xxl-flex-end___AaJxm",
  "align-xxl-center": "flex__align-xxl-center___2foun",
  "align-xxl-space-between": "flex__align-xxl-space-between___giIqp",
  "align-xxl-space-around": "flex__align-xxl-space-around___2zeh8",
  "align-xxl-space-evenly": "flex__align-xxl-space-evenly___dTDFV",
  "valign-xxl-flex-start": "flex__valign-xxl-flex-start___n5lct",
  "valign-xxl-flex-end": "flex__valign-xxl-flex-end___1yqQ4",
  "valign-xxl-center": "flex__valign-xxl-center___1ugwp",
  "valign-xxl-stretch": "flex__valign-xxl-stretch___2WTsd",
  "valign-xxl-baseline": "flex__valign-xxl-baseline___2MhIs",
  "nowrap-xxl-true": "flex__nowrap-xxl-true___udsl-",
  "nowrap-xxl-false": "flex__nowrap-xxl-false___2wUNM",
  "flex-box": "flex__flex-box___3K-jt",
  "fixedWidth": "flex__fixedWidth___3Y4AX",
  "expand": "flex__expand___2SMXW",
  "stretch": "flex__stretch___1usYL",
  "dir-row": "flex__dir-row___2DTl6",
  "dir-row-reverse": "flex__dir-row-reverse___k_aZa",
  "dir-column": "flex__dir-column___Gtxeu",
  "dir-column-reverse": "flex__dir-column-reverse___2x02O"
};

var FlexBox = function FlexBox(_ref) {
  var _classnames;

  var className = _ref.className,
      direction = _ref.direction,
      align = _ref.align,
      valign = _ref.valign,
      expand = _ref.expand,
      fixedWidth = _ref.fixedWidth,
      stretch = _ref.stretch,
      nowrap = _ref.nowrap,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames2.default)('flex-box', (0, _generateResponsiveStyleNames.default)('align', align, _generateResponsiveStyleNames.notEmptyString), (0, _generateResponsiveStyleNames.default)('valign', valign, _generateResponsiveStyleNames.notEmptyString), (0, _generateResponsiveStyleNames.default)('nowrap', nowrap), (_classnames = {}, _defineProperty(_classnames, "dir-".concat(direction), direction !== 'row'), _defineProperty(_classnames, "expand", expand), _defineProperty(_classnames, "fixedWidth", fixedWidth), _defineProperty(_classnames, "stretch", stretch), _classnames))
  }, children);
};

exports.FlexBox = FlexBox;
FlexBox.propTypes = {
  className: _propTypes.default.string,
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  align: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  valign: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  nowrap: (0, _generateResponsiveShape.default)([true, false]),
  expand: _propTypes.default.bool,
  fixedWidth: _propTypes.default.bool,
  stretch: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
FlexBox.defaultProps = {
  className: '',
  direction: 'row',
  align: '',
  valign: '',
  expand: false,
  fixedWidth: false,
  stretch: false,
  nowrap: false
};

var _default = (0, _reactCssModules.default)(FlexBox, styles, {
  allowMultiple: true
});

exports.default = _default;