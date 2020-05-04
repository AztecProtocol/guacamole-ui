"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _styleConstants = require("../../../config/styleConstants");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "steps": "steps-b68e0d71",
  "step": "steps-ea2059ed",
  "dot": "steps-a58c7849",
  "static": "steps-8e95619c",
  "line": "steps-8bd139b7",
  "size-xs": "steps-42749a64",
  "size-s": "steps-7f03bf8f",
  "size-m": "steps-88060924",
  "size-l": "steps-e7e4da51",
  "finished": "steps-3f80ead4",
  "current": "steps-0ac3322f",
  "waiting": "steps-4a4551ee",
  "placeHolderShimmer": "steps-6019d1bd"
};

var Steps = function Steps(_ref) {
  var testId = _ref.testId,
      className = _ref.className,
      size = _ref.size,
      totalSteps = _ref.totalSteps,
      currentStep = _ref.currentStep,
      currentId = _ref.currentId,
      steps = _ref.steps,
      allowToGoBack = _ref.allowToGoBack,
      onChange = _ref.onChange;
  var stepArr = steps || Array(totalSteps).fill(0).map(function (_, id) {
    return {
      id: id
    };
  });
  var currentIndex = Math.max(currentStep - 1, stepArr.findIndex(function (_ref2) {
    var id = _ref2.id;
    return id === currentId;
  }));
  var withDotContent = stepArr.some(function (_ref3) {
    var title = _ref3.title,
        description = _ref3.description;
    return title || description;
  });
  var numberOfSteps = stepArr.length;
  return /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], {
    testId: testId,
    className: (0, _classnames4["default"])(className, styles.steps, styles["size-".concat(size)], _defineProperty({}, styles['with-dot-content'], withDotContent))
  }, stepArr.map(function (_ref4, i) {
    var _classnames2;

    var id = _ref4.id,
        title = _ref4.title,
        icon = _ref4.icon;
    var isClickable = i < currentIndex && allowToGoBack;
    var DotWrapper = isClickable ? _Clickable["default"] : 'div';
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: id,
      className: (0, _classnames4["default"])(i === numberOfSteps - 1 ? 'flex-fixed' : 'flex-free-expand', styles.step, (_classnames2 = {}, _defineProperty(_classnames2, styles.finished, i < currentIndex), _defineProperty(_classnames2, styles.current, i === currentIndex), _defineProperty(_classnames2, styles.waiting, i > currentIndex), _classnames2))
    }, /*#__PURE__*/_react["default"].createElement(DotWrapper, {
      className: (0, _classnames4["default"])(styles.dot, _defineProperty({}, styles["static"], !isClickable)),
      onClick: isClickable ? function () {
        return onChange(i + 1);
      } : undefined
    }, !!icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], icon), !icon && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
      text: "".concat(i + 1)
    })), i < numberOfSteps - 1 && /*#__PURE__*/_react["default"].createElement("div", {
      className: styles.line
    }), !!title && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
      text: title
    }));
  }));
};

Steps.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  totalSteps: _propTypes["default"].number.isRequired,
  currentStep: _propTypes["default"].number,
  currentId: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    title: _propTypes["default"].string,
    description: _propTypes["default"].string,
    icon: _iconShape["default"]
  })),
  allowToGoBack: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
Steps.defaultProps = {
  testId: undefined,
  className: '',
  size: 's',
  currentStep: 0,
  currentId: '',
  steps: null,
  allowToGoBack: false,
  onChange: function onChange() {}
};
var _default = Steps;
exports["default"] = _default;