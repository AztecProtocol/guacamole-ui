"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Steps = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _inputs = require("../../../config/inputs");

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "steps": "steps__steps___13uSj",
  "step": "steps__step___H9J-I",
  "dot": "steps__dot___2HAzO",
  "static": "steps__static___1enZr",
  "line": "steps__line___3GQEu",
  "size-xs": "steps__size-xs___LaTy0",
  "size-s": "steps__size-s___3robx",
  "size-m": "steps__size-m___TlpUy",
  "size-l": "steps__size-l___1imAy",
  "finished": "steps__finished___1cvUh",
  "current": "steps__current___23Kdf",
  "waiting": "steps__waiting___3fvDF",
  "placeHolderShimmer": "steps__placeHolderShimmer___DLjfc"
};

var Steps = function Steps(_ref) {
  var className = _ref.className,
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
  return _react.default.createElement(_FlexBox.default, {
    className: className,
    styleName: (0, _classnames.default)('steps', "size-".concat(size), {
      'with-dot-content': withDotContent
    })
  }, stepArr.map(function (_ref4, i) {
    var id = _ref4.id,
        title = _ref4.title,
        icon = _ref4.icon;
    var isClickable = i < currentIndex && allowToGoBack;
    var DotWrapper = isClickable ? _Clickable.default : 'div';
    return _react.default.createElement("div", {
      key: id,
      className: i === numberOfSteps - 1 ? 'flex-fixed' : 'flex-free-expand',
      styleName: (0, _classnames.default)('step', {
        finished: i < currentIndex,
        current: i === currentIndex,
        waiting: i > currentIndex
      })
    }, _react.default.createElement(DotWrapper, {
      styleName: (0, _classnames.default)('dot', {
        static: !isClickable
      }),
      onClick: isClickable ? function () {
        return onChange(i + 1);
      } : undefined
    }, !!icon && _react.default.createElement(_Icon.default, icon), !icon && _react.default.createElement(_Text.default, {
      text: "".concat(i + 1)
    })), i < numberOfSteps - 1 && _react.default.createElement("div", {
      styleName: "line"
    }), !!title && _react.default.createElement(_Text.default, {
      text: title
    }));
  }));
};

exports.Steps = Steps;
Steps.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_inputs.inputSizeKeys),
  totalSteps: _propTypes.default.number.isRequired,
  currentStep: _propTypes.default.number,
  currentId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    icon: _iconShape.default
  })),
  allowToGoBack: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
Steps.defaultProps = {
  className: '',
  size: 's',
  currentStep: 0,
  currentId: '',
  steps: null,
  allowToGoBack: false,
  onChange: function onChange() {}
};

var _default = (0, _reactCssModules.default)(Steps, styles, {
  allowMultiple: true
});

exports.default = _default;