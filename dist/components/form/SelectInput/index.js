"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _isObjectEmpty = _interopRequireDefault(require("../../../utils/isObjectEmpty"));

var _styleConstants = require("../../../config/styleConstants");

var _itemGroupShape = _interopRequireDefault(require("../../../shapes/itemGroupShape"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _getItemByValue = _interopRequireDefault(require("../../data/SelectMenu/utils/getItemByValue"));

var _SelectMenu = _interopRequireDefault(require("../../data/SelectMenu"));

var _ClickOutsideHandler = _interopRequireDefault(require("../../utils/ClickOutsideHandler"));

var _PopupMenu = _interopRequireDefault(require("../../feedback/PopupMenu"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _getFlattenItemValues = _interopRequireDefault(require("./utils/getFlattenItemValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  "wrapper": "select-2415101d"
};

var SelectInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SelectInput, _PureComponent);

  _createClass(SelectInput, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var itemGroups = nextProps.itemGroups,
          value = nextProps.value;
      var isControlled = prevState.isControlled,
          prevProps = prevState.prevProps;
      var prevItemGroups = prevProps.itemGroups;
      var nextState = {};

      if (isControlled) {
        nextState.value = value;
      }

      if (itemGroups !== prevItemGroups) {
        nextState.flattenValues = (0, _getFlattenItemValues.default)(itemGroups);
        nextState.hoveredIndex = -1;
      }

      if ((0, _isObjectEmpty.default)(nextState)) {
        return null;
      }

      return _objectSpread({}, nextState, {
        prevProps: {
          itemGroups: itemGroups
        }
      });
    }
  }]);

  function SelectInput(props) {
    var _this;

    _classCallCheck(this, SelectInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var onClick = _this.props.onClick;

      _this.handleToggleMenu();

      onClick();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickIcon", function () {
      var onClickIcon = _this.props.onClickIcon;

      if (_this.shouldDisplayClearIcon()) {
        _this.clearSelected();
      } else {
        _this.handleToggleMenu();
      }

      onClickIcon();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (value, item) {
      var isControlled = _this.state.isControlled;

      if (!isControlled && !item.disabled) {
        _this.setState({
          value: value
        });
      }

      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          autoCloseOnSelect = _this$props.autoCloseOnSelect;

      if (autoCloseOnSelect && !item.disabled) {
        _this.setState({
          showMenu: false
        });
      }

      onSelect(value, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      var onChange = _this.props.onChange;
      onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var keyCode = e.keyCode;
      var showMenu = _this.state.showMenu;

      if (!showMenu && [9, 27].indexOf(keyCode) < 0) {
        _this.handleOpenMenu();
      }

      switch (keyCode) {
        case 9:
          if (showMenu) {
            _this.handleCloseMenu();
          }

          break;

        case 13:
          {
            var _this$state = _this.state,
                hoveredIndex = _this$state.hoveredIndex,
                flattenValues = _this$state.flattenValues;

            if (hoveredIndex >= 0) {
              e.preventDefault();
              var itemGroups = _this.props.itemGroups;
              var value = flattenValues[hoveredIndex];
              var item = (0, _getItemByValue.default)(itemGroups, value);

              _this.handleSelect(value, item);
            }

            break;
          }

        case 27:
          e.stopPropagation();

          if (showMenu) {
            _this.handleCloseMenu();
          }

          break;

        case 38:
        case 40:
          {
            var _itemGroups = _this.props.itemGroups;

            var hasItem = _itemGroups.some(function (_ref) {
              var items = _ref.items;
              return items && items.length;
            });

            if (hasItem) {
              e.preventDefault();
              var offset = keyCode === 38 ? -1 : 1;

              _this.moveHoveredValue(offset);
            }

            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlurItem", function () {
      _this.setState({
        hoveredIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoverItem", function (hoveredValue) {
      var flattenValues = _this.state.flattenValues;
      var hoveredIndex = flattenValues.findIndex(function (v) {
        return v === hoveredValue;
      });

      _this.setState({
        hoveredIndex: hoveredIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenMenu", function () {
      _this.setState({
        showMenu: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseMenu", function () {
      _this.setState({
        showMenu: false,
        hoveredIndex: -1
      });
    });

    var _value = props.value;
    _this.state = {
      isControlled: _value !== undefined,
      showMenu: false,
      value: '',
      hoveredIndex: -1,
      flattenValues: [],
      prevProps: {
        // eslint-disable-line react/no-unused-state
        itemGroups: []
      }
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: "handleToggleMenu",
    value: function handleToggleMenu() {
      var editable = this.props.editable;
      var showMenu = this.state.showMenu;

      if (!showMenu) {
        this.handleOpenMenu();
      } else if (!editable) {
        this.handleCloseMenu();
      }
    }
  }, {
    key: "shouldDisplayClearIcon",
    value: function shouldDisplayClearIcon() {
      var enableClearSelected = this.props.enableClearSelected;
      var _this$state2 = this.state,
          showMenu = _this$state2.showMenu,
          value = _this$state2.value;
      return showMenu && enableClearSelected && value !== '';
    }
  }, {
    key: "moveHoveredValue",
    value: function moveHoveredValue(offset) {
      var _this$state3 = this.state,
          flattenValues = _this$state3.flattenValues,
          prevHoveredIndex = _this$state3.hoveredIndex;
      var count = flattenValues.length;
      var startIndex = prevHoveredIndex !== -1 || offset > 0 ? prevHoveredIndex : 0;
      var hoveredIndex = (startIndex + count + offset) % count;
      this.setState({
        hoveredIndex: hoveredIndex
      });
    }
  }, {
    key: "clearSelected",
    value: function clearSelected() {
      var isControlled = this.state.isControlled;

      if (!isControlled) {
        this.setState({
          value: ''
        });
      }

      var onClearSelectedValues = this.props.onClearSelectedValues;
      onClearSelectedValues();
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props2 = this.props,
          itemGroups = _this$props2.itemGroups,
          MenuComponent = _this$props2.MenuComponent,
          hasItemDivider = _this$props2.hasItemDivider,
          highlightSelected = _this$props2.highlightSelected;
      var _this$state4 = this.state,
          showMenu = _this$state4.showMenu,
          value = _this$state4.value,
          flattenValues = _this$state4.flattenValues,
          hoveredIndex = _this$state4.hoveredIndex;
      return _react.default.createElement(_PopupMenu.default, {
        hide: !showMenu,
        disabledClickOutside: true
      }, _react.default.createElement(MenuComponent, {
        selectedValue: highlightSelected ? value : '',
        hoveredValue: hoveredIndex >= 0 ? flattenValues[hoveredIndex] : '',
        itemGroups: itemGroups,
        hasDivider: hasItemDivider,
        onSelect: this.handleSelect,
        onHover: this.handleHoverItem,
        onBlur: this.handleBlurItem
      }));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          size = _this$props3.size,
          placeholder = _this$props3.placeholder,
          tabIndex = _this$props3.tabIndex,
          itemGroups = _this$props3.itemGroups,
          editable = _this$props3.editable,
          icon = _this$props3.icon,
          InputComponent = _this$props3.InputComponent;
      var _this$state5 = this.state,
          showMenu = _this$state5.showMenu,
          value = _this$state5.value;
      var inputIcon = null;

      if (this.shouldDisplayClearIcon()) {
        inputIcon = {
          name: 'cancel',
          size: 's',
          color: 'grey-light'
        };
      } else {
        inputIcon = icon || {
          name: showMenu ? 'expand_less' : 'expand_more',
          size: 'l'
        };
      }

      var item = (0, _getItemByValue.default)(itemGroups, value);
      return _react.default.createElement(InputComponent, {
        theme: theme,
        status: showMenu ? 'focus' : '',
        size: size,
        placeholder: placeholder,
        tabIndex: tabIndex,
        value: item && item.title || value,
        icon: inputIcon,
        onClick: this.handleClick,
        onClickIcon: this.handleClickIcon,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        readOnly: !editable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var showMenu = this.state.showMenu;
      return _react.default.createElement(_ClickOutsideHandler.default, {
        className: className,
        styleName: "wrapper",
        onClickOutside: this.handleCloseMenu,
        disabled: !showMenu
      }, this.renderInput(), this.renderMenu());
    }
  }]);

  return SelectInput;
}(_react.PureComponent);

exports.SelectInput = SelectInput;
SelectInput.propTypes = {
  className: _propTypes.default.string,
  theme: _propTypes.default.oneOf(_styleConstants.inputThemeNames),
  size: _propTypes.default.oneOf(_styleConstants.inputSizeKeys),
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  itemGroups: _propTypes.default.arrayOf(_itemGroupShape.default).isRequired,
  placeholder: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  hasItemDivider: _propTypes.default.bool,
  enableClearSelected: _propTypes.default.bool,
  highlightSelected: _propTypes.default.bool,
  autoCloseOnSelect: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onClickIcon: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onClearSelectedValues: _propTypes.default.func,
  onChange: _propTypes.default.func,
  icon: _iconShape.default,
  InputComponent: _propTypes.default.func,
  MenuComponent: _propTypes.default.func
};
SelectInput.defaultProps = {
  className: '',
  theme: 'default',
  size: _styleConstants.defaultInputSizeKey,
  value: undefined,
  placeholder: '',
  tabIndex: 0,
  hasItemDivider: false,
  enableClearSelected: false,
  highlightSelected: false,
  autoCloseOnSelect: true,
  editable: false,
  onClick: function onClick() {},
  onClickIcon: function onClickIcon() {},
  onSelect: function onSelect() {},
  onClearSelectedValues: function onClearSelectedValues() {},
  onChange: function onChange() {},
  icon: null,
  InputComponent: _TextInput.default,
  MenuComponent: _SelectMenu.default
};

var _default = (0, _reactCssModules.default)(SelectInput, styles);

exports.default = _default;