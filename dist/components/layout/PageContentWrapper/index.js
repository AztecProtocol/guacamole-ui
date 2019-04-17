"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _Block = _interopRequireDefault(require("../Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "wrapper": "wrapper__wrapper___1Ejuq",
  "content": "wrapper__content___2QNE6",
  "stretch": "wrapper__stretch___1VrMa",
  "scrollable": "wrapper__scrollable___lfiNp",
  "align-center--true": "wrapper__align-center--true___2Hqto",
  "align-center--false": "wrapper__align-center--false___2_ofv",
  "expand--true": "wrapper__expand--true___2lWc5",
  "align-center-xs-true": "wrapper__align-center-xs-true___1SaZr",
  "align-center-xs-false": "wrapper__align-center-xs-false___1Qyxt",
  "expand-xs-true": "wrapper__expand-xs-true___1ptls",
  "expand-xs-false": "wrapper__expand-xs-false___PLvkS",
  "align-center-s-true": "wrapper__align-center-s-true___NgROY",
  "align-center-s-false": "wrapper__align-center-s-false___EMJ3i",
  "expand-s-true": "wrapper__expand-s-true___3756H",
  "expand-s-false": "wrapper__expand-s-false___1_GS-",
  "align-center-m-true": "wrapper__align-center-m-true___2dry8",
  "align-center-m-false": "wrapper__align-center-m-false___ULfv4",
  "expand-m-true": "wrapper__expand-m-true___3pGOE",
  "expand-m-false": "wrapper__expand-m-false___2keqH",
  "align-center-l-true": "wrapper__align-center-l-true___3PVp4",
  "align-center-l-false": "wrapper__align-center-l-false___Q39L-",
  "expand-l-true": "wrapper__expand-l-true___3BB9a",
  "expand-l-false": "wrapper__expand-l-false___1usoT",
  "align-center-xl-true": "wrapper__align-center-xl-true___22j4X",
  "align-center-xl-false": "wrapper__align-center-xl-false___3kj7s",
  "expand-xl-true": "wrapper__expand-xl-true___1RZoC",
  "expand-xl-false": "wrapper__expand-xl-false___2gypS",
  "align-center-xxl-true": "wrapper__align-center-xxl-true___388fv",
  "align-center-xxl-false": "wrapper__align-center-xxl-false___1TmZS",
  "expand-xxl-true": "wrapper__expand-xxl-true___22CEU",
  "expand-xxl-false": "wrapper__expand-xxl-false___3aw_p"
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