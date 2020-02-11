"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Step = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "steps": "steps-a6ee89e7",
  "step": "steps-e7ead84a",
  "active": "steps-a2913e1b",
  "button": "steps-76196e5e",
  "theme-primary": "steps-d09d658b",
  "theme-white": "steps-d1a7d3d2",
  "placeHolderShimmer": "steps-5d9f9c01"
};

var PageSteps = function PageSteps(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      theme = _ref.theme,
      steps = _ref.steps,
      currentStep = _ref.currentStep;
  return _react["default"].createElement("div", {
    "data-testid": testId,
    className: (0, _classnames["default"])(className, styles.steps, styles["theme-".concat(theme)])
  }, _react["default"].createElement(_FlexBox["default"], {
    align: "center"
  }, steps.map(function (_ref2, i) {
    var title = _ref2.title,
        step = _objectWithoutProperties(_ref2, ["title"]);

    return _react["default"].createElement(_Step["default"], _extends({}, step, {
      key: "".concat(+i),
      title: "".concat(i + 1, ". ").concat(title),
      active: i + 1 === currentStep
    }));
  })));
};

PageSteps.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['white', 'primary']),
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    href: _propTypes["default"].string,
    onClick: _propTypes["default"].func,
    Link: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object])
  })).isRequired,
  currentStep: _propTypes["default"].number
};
PageSteps.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  currentStep: 0
};
var _default = PageSteps;
exports["default"] = _default;