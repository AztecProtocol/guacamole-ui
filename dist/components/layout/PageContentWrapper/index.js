"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../utils/generateResponsiveStyleNames"));

var _Block = _interopRequireDefault(require("../Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var className = _ref.className,
      background = _ref.background,
      children = _ref.children,
      alignCenter = _ref.alignCenter,
      expand = _ref.expand,
      stretch = _ref.stretch,
      scrollable = _ref.scrollable;
  return _react.default.createElement(_Block.default, {
    className: className,
    styleName: (0, _classnames.default)('wrapper', {
      scrollable: scrollable
    }),
    background: background,
    stretch: stretch || scrollable
  }, _react.default.createElement("div", {
    styleName: (0, _classnames.default)('content', alignCenter && (0, _generateResponsiveStyleNames.default)('align-center', alignCenter) || '', expand && (0, _generateResponsiveStyleNames.default)('expand', expand) || '', {
      stretch: stretch
    })
  }, children));
};

PageContentWrapper.propTypes = {
  className: _propTypes.default.string,
  background: _propTypes.default.string,
  children: _propTypes.default.node,
  alignCenter: (0, _generateResponsiveShape.default)([true, false]),
  expand: (0, _generateResponsiveShape.default)([true, false]),
  stretch: _propTypes.default.bool,
  scrollable: _propTypes.default.bool
};
PageContentWrapper.defaultProps = {
  className: '',
  background: '',
  children: null,
  alignCenter: false,
  expand: false,
  stretch: false,
  scrollable: false
};

var _default = (0, _reactCssModules.default)(PageContentWrapper, styles, {
  allowMultiple: true
});

exports.default = _default;