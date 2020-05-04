"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames5 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _listItemShape = _interopRequireDefault(require("../../../shapes/listItemShape"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Group = /*#__PURE__*/function (_PureComponent) {
  _inherits(Group, _PureComponent);

  var _super = _createSuper(Group);

  function Group(props) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this, props);
    _this.state = {
      hide: false
    };
    _this.handleToggleItems = _this.handleToggleItems.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Group, [{
    key: "handleToggleItems",
    value: function handleToggleItems() {
      var hide = this.state.hide;
      this.setState({
        hide: !hide
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this$props = this.props,
          size = _this$props.size,
          items = _this$props.items,
          selectedValue = _this$props.selectedValue,
          hoveredValue = _this$props.hoveredValue,
          onSelect = _this$props.onSelect,
          onHover = _this$props.onHover,
          onBlur = _this$props.onBlur;
      return items.map(function (item) {
        var _classnames;

        var value = item.value,
            href = item.href,
            Link = item.Link,
            disabled = item.disabled,
            listItem = _objectWithoutProperties(item, ["value", "href", "Link", "disabled"]);

        var Tag = !href ? 'div' : Link || 'a';
        var itemSize = listItem.size || size;
        return /*#__PURE__*/_react["default"].createElement(Tag, {
          key: value,
          className: (0, _classnames5["default"])(styles.item, styles["size-".concat(itemSize)], (_classnames = {}, _defineProperty(_classnames, styles.selected, value === selectedValue), _defineProperty(_classnames, styles.hovered, value === hoveredValue), _defineProperty(_classnames, styles.disabled, disabled), _classnames)),
          to: href,
          href: href,
          onClick: function onClick() {
            return onSelect(value, item);
          },
          onMouseEnter: function onMouseEnter() {
            return onHover(value, item);
          },
          onMouseLeave: function onMouseLeave() {
            return onBlur(value, item);
          }
        }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({}, listItem, {
          size: itemSize
        })));
      });
    }
  }, {
    key: "renderCaption",
    value: function renderCaption() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          caption = _this$props2.caption,
          toggleable = _this$props2.toggleable;
      var hide = this.state.hide;
      var captionSize = caption.size || size;
      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return /*#__PURE__*/_react["default"].createElement("div", {
        role: toggleable ? 'menuitem' : '',
        className: (0, _classnames5["default"])(styles.caption, styles["size-".concat(captionSize)], _defineProperty({}, styles.toggleable, toggleable)),
        onKeyDown: toggleable ? this.handleToggleItems : undefined,
        onClick: toggleable ? this.handleToggleItems : undefined
      }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({}, caption, {
        size: captionSize
      })), toggleable && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: styles['expand-button'],
        name: hide ? 'expand_more' : 'expand_less',
        size: captionSize
      }));
      /* eslint-enable */
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames4;

      var _this$props3 = this.props,
          theme = _this$props3.theme,
          size = _this$props3.size,
          padding = _this$props3.padding,
          caption = _this$props3.caption,
          hasDivider = _this$props3.hasDivider;
      var hide = this.state.hide;
      var groupSize = caption && caption.size || size;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames5["default"])(styles["theme-".concat(theme)], styles["group-".concat(groupSize)], _defineProperty({}, styles["pad-".concat(padding)], padding && padding !== '0'))
      }, caption && this.renderCaption() || null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames5["default"])(styles.items, (_classnames4 = {}, _defineProperty(_classnames4, styles.hide, hide), _defineProperty(_classnames4, styles['has-divider'], hasDivider), _classnames4))
      }, this.renderItems()));
    }
  }]);

  return Group;
}(_react.PureComponent);

Group.propTypes = {
  theme: _propTypes["default"].oneOf(['dark', 'light']).isRequired,
  size: _propTypes["default"].oneOf(_styleConstants.shapeSizeKeys).isRequired,
  padding: _propTypes["default"].string,
  caption: _propTypes["default"].shape(_listItemShape["default"]),
  toggleable: _propTypes["default"].bool,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape(_objectSpread({}, _listItemShape["default"], {
    value: _propTypes["default"].string.isRequired,
    href: _propTypes["default"].string,
    Link: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object]),
    disabled: _propTypes["default"].bool
  }))),
  selectedValue: _propTypes["default"].string.isRequired,
  hoveredValue: _propTypes["default"].string.isRequired,
  onSelect: _propTypes["default"].func.isRequired,
  onHover: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  hasDivider: _propTypes["default"].bool
};
Group.defaultProps = {
  caption: null,
  items: [],
  padding: 'm',
  toggleable: false,
  hasDivider: false
};
var _default = Group;
exports["default"] = _default;