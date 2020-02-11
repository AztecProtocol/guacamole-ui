"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _styleConstants = require("../../../config/styleConstants");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "progress": "progress-44e3dc21",
  "step": "progress-33b14a46",
  "step-tail": "progress-f773bdbd",
  "step-content": "progress-5d741159",
  "theme-primary": "progress-30e5d654",
  "finished": "progress-ef8e1fb1",
  "clickable": "progress-1abe7c18",
  "theme-secondary": "progress-bd27dad9",
  "theme-white": "progress-c3fcadc0",
  "size-xs": "progress-a25e8e37",
  "size-s": "progress-042398e9",
  "size-m": "progress-f6f0ee83",
  "size-l": "progress-177023c4",
  "icon": "progress-9310e02b",
  "title": "progress-5c1b68d9",
  "placeHolderShimmer": "progress-e2a49ad8"
};

var Progress = function Progress(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      totalSteps = _ref.totalSteps,
      currentStep = _ref.currentStep,
      steps = _ref.steps,
      allowToGoBack = _ref.allowToGoBack,
      onChange = _ref.onChange,
      theme = _ref.theme;
  var stepArr = steps || Array(totalSteps).fill(0).map(function (_, id) {
    return {
      id: id
    };
  });
  var currentIndex = currentStep - 1;
  return _react["default"].createElement(_FlexBox["default"], {
    testId: testId,
    className: (0, _classnames3["default"])(className, styles.progress, styles["size-".concat(size)], _defineProperty({}, styles["theme-".concat(theme)], theme))
  }, stepArr.map(function (_ref2, i) {
    var _classnames2;

    var title = _ref2.title,
        node = _ref2.node,
        icon = _ref2.icon;
    var isClickable = i < currentIndex && allowToGoBack;
    var DotWrapper = isClickable ? _Clickable["default"] : 'div';
    var contentNode = node;

    if (!contentNode) {
      contentNode = [icon && _react["default"].createElement(_Icon["default"], _extends({
        key: "icon",
        className: styles.icon
      }, icon)) || null, (title || !icon) && _react["default"].createElement(_Text["default"], {
        key: "title",
        className: styles.title,
        text: title || (icon ? '' : "".concat(i + 1))
      }) || null];
    }

    return _react["default"].createElement(DotWrapper, {
      key: "step-".concat(+i),
      className: (0, _classnames3["default"])(styles.step, (_classnames2 = {}, _defineProperty(_classnames2, styles.finished, i < currentIndex), _defineProperty(_classnames2, styles.clickable, isClickable), _classnames2)),
      onClick: isClickable ? function () {
        return onChange(i + 1);
      } : null
    }, i > 0 && _react["default"].createElement("div", {
      className: styles['step-tail']
    }), _react["default"].createElement("div", {
      className: styles['step-content']
    }, contentNode));
  }));
};

Progress.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  totalSteps: _propTypes["default"].number,
  currentStep: _propTypes["default"].number,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    node: _propTypes["default"].node,
    icon: _iconShape["default"]
  })),
  allowToGoBack: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
Progress.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  size: 's',
  totalSteps: 0,
  currentStep: 0,
  steps: null,
  allowToGoBack: false,
  onChange: function onChange() {}
};
var _default = Progress;
exports["default"] = _default;