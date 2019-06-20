"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Accordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "content": "accordion-f6c7a8a7",
  "hide": "accordion-89fe9539"
};

var Accordion =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Accordion, _PureComponent);

  _createClass(Accordion, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled;

      if (!isControlled) {
        return null;
      }

      var isOpen = nextProps.isOpen;
      return {
        isOpen: isOpen
      };
    }
  }]);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleToggleContent", function () {
      var _this$state = _this.state,
          isControlled = _this$state.isControlled,
          prevIsOpen = _this$state.isOpen;
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled;
      var isOpen = !prevIsOpen;
      onClick(prevIsOpen);

      if (!disabled) {
        if (!isControlled) {
          _this.setState({
            isOpen: isOpen
          });
        }

        onChange(isOpen);
      }
    });

    var _isOpen = props.isOpen,
        defaultIsOpen = props.defaultIsOpen;
    _this.state = {
      isControlled: _isOpen !== null,
      isOpen: defaultIsOpen
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          className = _this$props2.className,
          title = _this$props2.title,
          content = _this$props2.content;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(_Clickable.default, {
        onClick: this.handleToggleContent
      }, title), _react.default.createElement("div", {
        styleName: (0, _classnames.default)('content', {
          hide: !isOpen
        })
      }, content));
    }
  }]);

  return Accordion;
}(_react.PureComponent);

exports.Accordion = Accordion;
Accordion.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.node.isRequired,
  content: _propTypes.default.node.isRequired,
  isOpen: _propTypes.default.bool,
  defaultIsOpen: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onChange: _propTypes.default.func
};
Accordion.defaultProps = {
  className: '',
  isOpen: null,
  defaultIsOpen: true,
  disabled: false,
  onClick: function onClick() {},
  onChange: function onChange() {}
};

var _default = (0, _reactCssModules.default)(Accordion, styles, {
  allowMultiple: true
});

exports.default = _default;