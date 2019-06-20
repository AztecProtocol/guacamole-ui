"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleConstants = require("../../../config/styleConstants");

var _responsiveCssSizes = _interopRequireDefault(require("../../../shapes/responsiveCssSizes"));

var _itemGroupShape = _interopRequireDefault(require("../../../shapes/itemGroupShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SelectMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectMenu, _PureComponent);

  _createClass(SelectMenu, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled,
          isHoverControlled = prevState.isHoverControlled;

      if (!isControlled && !isHoverControlled) {
        return null;
      }

      var selectedValue = nextProps.selectedValue,
          hoveredValue = nextProps.hoveredValue;
      var nextState = {};

      if (isControlled) {
        nextState.selectedValue = selectedValue;
      }

      if (isHoverControlled) {
        nextState.hoveredValue = hoveredValue;
      }

      return nextState;
    }
  }]);

  function SelectMenu(props) {
    var _this;

    _classCallCheck(this, SelectMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectMenu).call(this, props));
    var selectedValue = props.selectedValue,
        hoveredValue = props.hoveredValue;
    _this.state = {
      isControlled: selectedValue !== null,
      isHoverControlled: hoveredValue !== null,
      selectedValue: '',
      hoveredValue: ''
    };
    _this.handleSelectItem = _this.handleSelectItem.bind(_assertThisInitialized(_this));
    _this.handleHoverItem = _this.handleHoverItem.bind(_assertThisInitialized(_this));
    _this.handleBlurItem = _this.handleBlurItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectMenu, [{
    key: "getSelectedValue",
    value: function getSelectedValue() {
      var _this$state = this.state,
          isControlled = _this$state.isControlled,
          selectedValue = _this$state.selectedValue;
      var controlledValue = this.props.selectedValue;
      return isControlled ? controlledValue : selectedValue;
    }
  }, {
    key: "getHoveredValue",
    value: function getHoveredValue() {
      var _this$state2 = this.state,
          isHoverControlled = _this$state2.isHoverControlled,
          hoveredValue = _this$state2.hoveredValue;
      var controlledValue = this.props.hoveredValue;
      return isHoverControlled ? controlledValue : hoveredValue;
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(selectedValue, item) {
      var isControlled = this.state.isControlled;

      if (!isControlled && !item.disabled) {
        this.setState({
          selectedValue: selectedValue
        });
      }

      var onSelect = this.props.onSelect;
      onSelect(selectedValue, item);
    }
  }, {
    key: "handleHoverItem",
    value: function handleHoverItem(hoveredValue, item) {
      var isHoverControlled = this.state.isHoverControlled;

      if (!isHoverControlled) {
        this.setState({
          hoveredValue: !item.disabled ? hoveredValue : ''
        });
      }

      var onHover = this.props.onHover;
      onHover(hoveredValue, item);
    }
  }, {
    key: "handleBlurItem",
    value: function handleBlurItem(value, item) {
      var hoveredValue = this.state.hoveredValue;

      if (hoveredValue !== '') {
        this.setState({
          hoveredValue: ''
        });
      }

      var onBlur = this.props.onBlur;
      onBlur(value, item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          itemGroups = _this$props.itemGroups,
          background = _this$props.background,
          padding = _this$props.padding,
          borderRadius = _this$props.borderRadius,
          layer = _this$props.layer,
          hasBorder = _this$props.hasBorder,
          hasDivider = _this$props.hasDivider;
      var selectedValue = this.getSelectedValue();
      var hoveredValue = this.getHoveredValue();

      var _padding$split = padding.split(' '),
          _padding$split2 = _slicedToArray(_padding$split, 2),
          paddingV = _padding$split2[0],
          paddingH = _padding$split2[1];

      return _react.default.createElement(_Block.default, {
        className: className,
        background: background,
        padding: "".concat(paddingV, " 0"),
        borderRadius: borderRadius,
        layer: layer,
        hasBorder: hasBorder
      }, itemGroups.map(function (group, i) {
        return _react.default.createElement(_Group.default, _extends({
          key: +i
        }, group, {
          size: size,
          padding: paddingH || paddingV,
          selectedValue: selectedValue,
          hoveredValue: hoveredValue,
          onSelect: _this2.handleSelectItem,
          onHover: _this2.handleHoverItem,
          onBlur: _this2.handleBlurItem,
          hasDivider: hasDivider
        }));
      }));
    }
  }]);

  return SelectMenu;
}(_react.PureComponent);

exports.SelectMenu = SelectMenu;
SelectMenu.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_styleConstants.shapeSizeKeys),
  itemGroups: _propTypes.default.arrayOf(_itemGroupShape.default),
  background: _propTypes.default.string,
  padding: _responsiveCssSizes.default,
  borderRadius: _propTypes.default.string,
  layer: _propTypes.default.number,
  hasBorder: _propTypes.default.bool,
  hasDivider: _propTypes.default.bool,
  selectedValue: _propTypes.default.string,
  hoveredValue: _propTypes.default.string,
  onSelect: _propTypes.default.func,
  onHover: _propTypes.default.func,
  onBlur: _propTypes.default.func
};
SelectMenu.defaultProps = {
  className: '',
  size: 'xs',
  itemGroups: [],
  background: 'white',
  padding: '0 l',
  borderRadius: '',
  layer: 0,
  hasBorder: false,
  hasDivider: false,
  selectedValue: null,
  hoveredValue: null,
  onSelect: function onSelect() {},
  onHover: function onHover() {},
  onBlur: function onBlur() {}
};
var _default = SelectMenu;
exports.default = _default;