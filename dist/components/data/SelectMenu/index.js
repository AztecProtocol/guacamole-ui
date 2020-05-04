"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _responsiveCssSizes = _interopRequireDefault(require("../../../shapes/responsiveCssSizes"));

var _itemGroupShape = _interopRequireDefault(require("../../../shapes/itemGroupShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var styles = {
  "menu": "menu-f90cddbe",
  "item": "menu-82a72305",
  "hovered": "menu-1b9ba041",
  "selected": "menu-e14e43ff",
  "has-divider": "menu-c7ebb91e",
  "size-xxs": "menu-a8f287cc",
  "group-xxs": "menu-a1582c75",
  "size-xs": "menu-f8d326e3",
  "group-xs": "menu-6c3f3a39",
  "size-s": "menu-845de9c6",
  "group-s": "menu-1d2cd88a",
  "size-m": "menu-a71fb01c",
  "group-m": "menu-56cfd3d0",
  "size-l": "menu-1f310176",
  "group-l": "menu-9c7060ba",
  "size-xl": "menu-75da5256",
  "group-xl": "menu-c6acba8c",
  "size-xxl": "menu-5dfe62d4",
  "group-xxl": "menu-a5b00cb1",
  "disabled": "menu-561372c5",
  "caption": "menu-48bc803d",
  "toggleable": "menu-ef1069f8",
  "pad-xxs": "menu-ed652ba2",
  "pad-xs": "menu-cb204492",
  "pad-s": "menu-d0151491",
  "pad-m": "menu-408353df",
  "pad-l": "menu-abac99a9",
  "pad-xl": "menu-6cfeab81",
  "pad-xxl": "menu-ab9a53ea",
  "expand-button": "menu-252a0987",
  "items": "menu-b8eb4ed7",
  "hide": "menu-3030d541",
  "theme-dark": "menu-6dc41721",
  "placeHolderShimmer": "menu-703e8771"
};

var SelectMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectMenu, _PureComponent);

  var _super = _createSuper(SelectMenu);

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

    _this = _super.call(this, props);
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
          testId = _this$props.testId,
          className = _this$props.className,
          theme = _this$props.theme,
          size = _this$props.size,
          itemGroups = _this$props.itemGroups,
          background = _this$props.background,
          padding = _this$props.padding,
          borderRadius = _this$props.borderRadius,
          layer = _this$props.layer,
          borderColor = _this$props.borderColor,
          hasBorder = _this$props.hasBorder,
          hasDivider = _this$props.hasDivider;
      var selectedValue = this.getSelectedValue();
      var hoveredValue = this.getHoveredValue();

      var _padding$split = padding.split(' '),
          _padding$split2 = _slicedToArray(_padding$split, 2),
          paddingV = _padding$split2[0],
          paddingH = _padding$split2[1];

      return /*#__PURE__*/_react["default"].createElement(_Block["default"], {
        testId: testId,
        className: (0, _classnames["default"])(className, styles.menu),
        background: background || (theme === 'dark' ? 'grey-darker' : 'white'),
        padding: "".concat(paddingV, " 0"),
        borderRadius: borderRadius,
        layer: layer,
        borderColor: borderColor,
        hasBorder: hasBorder
      }, itemGroups.map(function (group, i) {
        return /*#__PURE__*/_react["default"].createElement(_Group["default"], _extends({
          key: +i
        }, group, {
          theme: theme,
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

SelectMenu.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(['dark', 'light']),
  size: _propTypes["default"].oneOf(_styleConstants.shapeSizeKeys),
  itemGroups: _propTypes["default"].arrayOf(_itemGroupShape["default"]),
  background: _propTypes["default"].string,
  padding: _responsiveCssSizes["default"],
  borderRadius: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.roundedCornerKeys))),
  layer: _propTypes["default"].number,
  borderColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.colorNames))),
  hasBorder: _propTypes["default"].bool,
  hasDivider: _propTypes["default"].bool,
  selectedValue: _propTypes["default"].string,
  hoveredValue: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  onHover: _propTypes["default"].func,
  onBlur: _propTypes["default"].func
};
SelectMenu.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'light',
  size: 'xs',
  itemGroups: [],
  background: '',
  padding: '0 l',
  borderRadius: '',
  borderColor: '',
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
exports["default"] = _default;