"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _Block = _interopRequireDefault(require("../Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "wrapper-3282c3c2",
  "content": "wrapper-121244d7",
  "stretch": "wrapper-d375ed12",
  "scrollable": "wrapper-21f5d097",
  "align-center--true": "wrapper-9b9e36a5",
  "align-center--false": "wrapper-1b09daa6",
  "expand--true": "wrapper-cb7fac52",
  "align-center-xs-true": "wrapper-d52a60c8",
  "align-center-xs-false": "wrapper-10852390",
  "expand-xs-true": "wrapper-d8ffa4c6",
  "expand-xs-false": "wrapper-ddfae5d3",
  "align-center-s-true": "wrapper-6bfa2cfa",
  "align-center-s-false": "wrapper-6b697700",
  "expand-s-true": "wrapper-72821aa1",
  "expand-s-false": "wrapper-59b4effe",
  "align-center-m-true": "wrapper-6e083256",
  "align-center-m-false": "wrapper-30540e7c",
  "expand-m-true": "wrapper-20db7370",
  "expand-m-false": "wrapper-a3116482",
  "align-center-l-true": "wrapper-47627bad",
  "align-center-l-false": "wrapper-176273ce",
  "expand-l-true": "wrapper-551c8ff8",
  "expand-l-false": "wrapper-343ab844",
  "align-center-xl-true": "wrapper-aaaee1c3",
  "align-center-xl-false": "wrapper-55df2e52",
  "expand-xl-true": "wrapper-e224f6c2",
  "expand-xl-false": "wrapper-99604fd3",
  "align-center-xxl-true": "wrapper-617921da",
  "align-center-xxl-false": "wrapper-f81d4a9e",
  "expand-xxl-true": "wrapper-e3a8b2ad",
  "expand-xxl-false": "wrapper-adb43e6d"
};

var PageContentWrapper = function PageContentWrapper(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      background = _ref.background,
      children = _ref.children,
      alignCenter = _ref.alignCenter,
      expand = _ref.expand,
      stretch = _ref.stretch,
      scrollable = _ref.scrollable;
  return /*#__PURE__*/_react["default"].createElement(_Block["default"], {
    testId: testId,
    className: (0, _classnames3["default"])(className, styles.wrapper, _defineProperty({}, styles.scrollable, scrollable)),
    background: background,
    stretch: stretch || scrollable
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames3["default"])(styles.content, alignCenter && (0, _generateResponsiveStyleNames["default"])('align-center', alignCenter).map(function (n) {
      return styles[n];
    }) || '', expand && (0, _generateResponsiveStyleNames["default"])('expand', expand).map(function (n) {
      return styles[n];
    }) || '', _defineProperty({}, styles.stretch, stretch))
  }, children));
};

PageContentWrapper.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  background: _propTypes["default"].string,
  children: _propTypes["default"].node,
  alignCenter: (0, _generateResponsiveShape["default"])([true, false]),
  expand: (0, _generateResponsiveShape["default"])([true, false]),
  stretch: _propTypes["default"].bool,
  scrollable: _propTypes["default"].bool
};
PageContentWrapper.defaultProps = {
  testId: undefined,
  className: '',
  background: '',
  children: null,
  alignCenter: false,
  expand: false,
  stretch: false,
  scrollable: false
};
var _default = PageContentWrapper;
exports["default"] = _default;