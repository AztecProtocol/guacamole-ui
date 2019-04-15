"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _inputs = require("../../../config/inputs");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "progress": "progress__progress___2L5o5",
  "step": "progress__step___1b1jM",
  "step-tail": "progress__step-tail___1mBZ-",
  "step-content": "progress__step-content___3QDe3",
  "theme-primary": "progress__theme-primary___1sc5a",
  "finished": "progress__finished___e68HI",
  "clickable": "progress__clickable___hEHsz",
  "theme-secondary": "progress__theme-secondary___3jUcO",
  "theme-white": "progress__theme-white___2KkQ2",
  "size-xs": "progress__size-xs___1fuye",
  "size-s": "progress__size-s___37XrX",
  "size-m": "progress__size-m___2q-Kg",
  "size-l": "progress__size-l___12S-i",
  "icon": "progress__icon___1AClM",
  "title": "progress__title___2p-ln",
  "placeHolderShimmer": "progress__placeHolderShimmer___1zBje"
};

var Progress = function Progress(_ref) {
  var className = _ref.className,
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
  return _react.default.createElement(_FlexBox.default, {
    className: className,
    styleName: (0, _classnames2.default)('progress', "size-".concat(size), _defineProperty({}, "theme-".concat(theme), theme))
  }, stepArr.map(function (_ref2, i) {
    var title = _ref2.title,
        node = _ref2.node,
        icon = _ref2.icon;
    var isClickable = i < currentIndex && allowToGoBack;
    var DotWrapper = isClickable ? _Clickable.default : 'div';
    var contentNode = node;

    if (!contentNode) {
      contentNode = [icon && _react.default.createElement(_Icon.default, _extends({
        key: "icon",
        styleName: "icon"
      }, icon)) || null, (title || !icon) && _react.default.createElement(_Text.default, {
        key: "title",
        styleName: "title",
        text: title || (icon ? '' : "".concat(i + 1))
      }) || null];
    }

    return _react.default.createElement(DotWrapper, {
      key: "step-".concat(+i),
      styleName: (0, _classnames2.default)('step', {
        finished: i < currentIndex,
        clickable: isClickable
      }),
      onClick: isClickable ? function () {
        return onChange(i + 1);
      } : null
    }, i > 0 && _react.default.createElement("div", {
      styleName: "step-tail"
    }), _react.default.createElement("div", {
      styleName: "step-content"
    }, contentNode));
  }));
};

exports.Progress = Progress;
Progress.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.string,
  size: _propTypes.default.oneOf(_inputs.inputSizeKeys),
  totalSteps: _propTypes.default.number,
  currentStep: _propTypes.default.number,
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    node: _propTypes.default.node,
    icon: _iconShape.default
  })),
  allowToGoBack: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
Progress.defaultProps = {
  className: '',
  theme: 'primary',
  size: 's',
  totalSteps: 0,
  currentStep: 0,
  steps: null,
  allowToGoBack: false,
  onChange: function onChange() {}
};

var _default = (0, _reactCssModules.default)(Progress, styles, {
  allowMultiple: true
});

exports.default = _default;