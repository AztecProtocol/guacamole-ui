"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

var _listItemShape = _interopRequireDefault(require("../../../shapes/listItemShape"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "item": "menu__item___1ssE3",
  "hovered": "menu__hovered___yvJdA",
  "selected": "menu__selected___28rdX",
  "has-divider": "menu__has-divider___1MyKY",
  "size-xxs": "menu__size-xxs___3OM6A",
  "group-xxs": "menu__group-xxs___dGEOo",
  "size-xs": "menu__size-xs___2fW7x",
  "group-xs": "menu__group-xs___Ehu-R",
  "size-s": "menu__size-s___r9cAa",
  "group-s": "menu__group-s___uRlaU",
  "size-m": "menu__size-m___1y7fE",
  "group-m": "menu__group-m___2QnA9",
  "size-l": "menu__size-l___3VR-p",
  "group-l": "menu__group-l___1y5vd",
  "size-xl": "menu__size-xl___1_PGI",
  "group-xl": "menu__group-xl___1EZZD",
  "size-xxl": "menu__size-xxl___2qa_1",
  "group-xxl": "menu__group-xxl___pGQPE",
  "disabled": "menu__disabled___115Dg",
  "caption": "menu__caption___1mtp3",
  "toggleable": "menu__toggleable___2SSyk",
  "pad-xxs": "menu__pad-xxs___pNazm",
  "pad-xs": "menu__pad-xs___lOEmy",
  "pad-s": "menu__pad-s___2U0qg",
  "pad-m": "menu__pad-m___2u8lW",
  "pad-l": "menu__pad-l___P1fX6",
  "pad-xl": "menu__pad-xl___3Gj3T",
  "pad-xxl": "menu__pad-xxl___24VH7",
  "expand-button": "menu__expand-button___2Eflf",
  "items": "menu__items___2-sxz",
  "hide": "menu__hide___2HIeX",
  "placeHolderShimmer": "menu__placeHolderShimmer___3XqgM"
};

var Group =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Group, _PureComponent);

  function Group(props) {
    var _this;

    _classCallCheck(this, Group);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, props));
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
        var value = item.value,
            href = item.href,
            Link = item.Link,
            disabled = item.disabled,
            listItem = _objectWithoutProperties(item, ["value", "href", "Link", "disabled"]);

        var Tag = !href ? 'div' : Link || 'a';
        var itemSize = listItem.size || size;
        return _react.default.createElement(Tag, {
          key: value,
          styleName: (0, _classnames2.default)('item', "size-".concat(itemSize), {
            selected: value === selectedValue,
            hovered: value === hoveredValue,
            disabled: disabled
          }),
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
        }, _react.default.createElement(_ListItem.default, _extends({}, listItem, {
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
      return _react.default.createElement("div", {
        styleName: (0, _classnames2.default)('caption', "size-".concat(captionSize), {
          toggleable: toggleable
        }),
        onClick: toggleable ? this.handleToggleItems : undefined
      }, _react.default.createElement(_ListItem.default, _extends({}, caption, {
        size: captionSize
      })), toggleable && _react.default.createElement(_Icon.default, {
        styleName: "expand-button",
        name: hide ? 'expand_more' : 'expand_less',
        size: captionSize
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          size = _this$props3.size,
          padding = _this$props3.padding,
          caption = _this$props3.caption,
          hasDivider = _this$props3.hasDivider;
      var hide = this.state.hide;
      var groupSize = caption && caption.size || size;
      return _react.default.createElement("div", {
        styleName: (0, _classnames2.default)("group-".concat(groupSize), _defineProperty({}, "pad-".concat(padding), padding && padding !== '0'))
      }, caption && this.renderCaption() || null, _react.default.createElement("div", {
        styleName: (0, _classnames2.default)('items', {
          hide: hide,
          'has-divider': hasDivider
        })
      }, this.renderItems()));
    }
  }]);

  return Group;
}(_react.PureComponent);

Group.propTypes = {
  size: _propTypes.default.oneOf(_shapes.shapeSizeKeys).isRequired,
  padding: _propTypes.default.string,
  caption: _propTypes.default.shape(_listItemShape.default),
  toggleable: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape(_objectSpread({}, _listItemShape.default, {
    value: _propTypes.default.string.isRequired,
    href: _propTypes.default.string,
    Link: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
    disabled: _propTypes.default.bool
  }))),
  selectedValue: _propTypes.default.string.isRequired,
  hoveredValue: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  onHover: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  hasDivider: _propTypes.default.bool
};
Group.defaultProps = {
  caption: null,
  items: [],
  padding: 'm',
  toggleable: false,
  hasDivider: false
};

var _default = (0, _reactCssModules.default)(Group, styles, {
  allowMultiple: true
});

exports.default = _default;