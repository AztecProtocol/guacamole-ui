"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isObjectEmpty = _interopRequireDefault(require("../../../utils/isObjectEmpty"));

var _styleConstants = require("../../../config/styleConstants");

var _itemGroupShape = _interopRequireDefault(require("../../../shapes/itemGroupShape"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _SelectMenu = _interopRequireDefault(require("../../data/SelectMenu"));

var _SelectInput = _interopRequireDefault(require("../SelectInput"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _itemGroupsFilter = require("./utils/itemGroupsFilter");

var _defaultGetMatchingDistance = _interopRequireDefault(require("./utils/defaultGetMatchingDistance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AutoComplete =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AutoComplete, _PureComponent);

  _createClass(AutoComplete, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value,
          itemGroups = nextProps.itemGroups,
          itemGroupsSource = nextProps.itemGroupsSource,
          getMatchingDistance = nextProps.getMatchingDistance,
          maxVisibleItems = nextProps.maxVisibleItems,
          showZeroMatch = nextProps.showZeroMatch;
      var uncontrolledValue = prevState.value,
          isControlled = prevState.isControlled,
          isItemGroupsControlled = prevState.isItemGroupsControlled,
          prevProps = prevState.prevProps;
      var prevValue = prevProps.value,
          prevItemGroupsSource = prevProps.itemGroupsSource,
          prevGetMatchingDistance = prevProps.getMatchingDistance,
          prevMaxVisibleItems = prevProps.maxVisibleItems,
          prevShowZeroMatch = prevProps.showZeroMatch;
      var nextState = {};

      if (isControlled) {
        nextState.value = value;
      }

      if (isItemGroupsControlled) {
        nextState.itemGroups = itemGroups;
      } else if (isControlled && value !== prevValue || itemGroupsSource !== prevItemGroupsSource || getMatchingDistance !== prevGetMatchingDistance || maxVisibleItems !== prevMaxVisibleItems || showZeroMatch !== prevShowZeroMatch) {
        var itemGroupsFilter = (0, _itemGroupsFilter.makeItemGroupsFilter)(itemGroupsSource, {
          getMatchingDistance: getMatchingDistance,
          maxVisibleItems: maxVisibleItems,
          showZeroMatch: showZeroMatch
        });
        nextState.itemGroupsFilter = itemGroupsFilter;
        nextState.itemGroups = itemGroupsFilter(isControlled ? value : uncontrolledValue);
      }

      if ((0, _isObjectEmpty["default"])(nextState)) {
        return null;
      }

      return _objectSpread({}, nextState, {
        prevProps: {
          value: value,
          itemGroupsSource: itemGroupsSource,
          getMatchingDistance: getMatchingDistance,
          maxVisibleItems: maxVisibleItems,
          showZeroMatch: showZeroMatch
        }
      });
    }
  }]);

  function AutoComplete(props) {
    var _this;

    _classCallCheck(this, AutoComplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoComplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (value, item) {
      var _this$state = _this.state,
          isControlled = _this$state.isControlled,
          isItemGroupsControlled = _this$state.isItemGroupsControlled,
          itemGroupsFilter = _this$state.itemGroupsFilter;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          formatSelectedItem = _this$props.formatSelectedItem;

      if (!isControlled) {
        var formatedValue = formatSelectedItem(item);

        _this.setState({
          value: formatedValue
        });

        if (!isItemGroupsControlled) {
          _this.setState({
            itemGroups: itemGroupsFilter(formatedValue)
          });
        }
      }

      onSelect(value, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      var _this$state2 = _this.state,
          isControlled = _this$state2.isControlled,
          isItemGroupsControlled = _this$state2.isItemGroupsControlled,
          itemGroupsFilter = _this$state2.itemGroupsFilter;
      var onChange = _this.props.onChange;

      if (!isControlled) {
        _this.setState({
          value: value
        });

        if (!isItemGroupsControlled) {
          _this.setState({
            itemGroups: itemGroupsFilter(value)
          });
        }
      }

      onChange(value);
    });

    var _value = props.value,
        defaultValue = props.defaultValue,
        itemGroups = props.itemGroups,
        defaultItemGroups = props.defaultItemGroups;
    _this.state = {
      isControlled: _value !== null,
      isItemGroupsControlled: itemGroups !== null,
      value: defaultValue,
      itemGroups: defaultItemGroups,
      itemGroupsFilter: function itemGroupsFilter() {
        return [];
      },
      prevProps: {
        // eslint-disable-line react/no-unused-state
        value: '',
        itemGroupsSource: [],
        getMatchingDistance: function getMatchingDistance() {},
        maxVisibleItems: -1,
        showZeroMatch: false
      }
    };
    return _this;
  }

  _createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          testId = _this$props2.testId,
          className = _this$props2.className,
          theme = _this$props2.theme,
          size = _this$props2.size,
          placeholder = _this$props2.placeholder,
          enableClearSelected = _this$props2.enableClearSelected,
          hasItemDivider = _this$props2.hasItemDivider,
          icon = _this$props2.icon,
          noResultsMessage = _this$props2.noResultsMessage,
          tabIndex = _this$props2.tabIndex,
          InputComponent = _this$props2.InputComponent,
          MenuComponent = _this$props2.MenuComponent;
      var _this$state3 = this.state,
          value = _this$state3.value,
          itemGroups = _this$state3.itemGroups;
      var displayedGroups = itemGroups;

      if (!displayedGroups.length && value && noResultsMessage) {
        displayedGroups = [{
          caption: {
            title: noResultsMessage
          }
        }];
      }

      return _react["default"].createElement(_SelectInput["default"], {
        testId: testId,
        className: className,
        theme: theme,
        size: size,
        value: value,
        itemGroups: displayedGroups,
        placeholder: placeholder,
        enableClearSelected: enableClearSelected,
        hasItemDivider: hasItemDivider,
        onSelect: this.handleSelect,
        onChange: this.handleChange,
        icon: icon,
        tabIndex: tabIndex,
        InputComponent: InputComponent,
        MenuComponent: MenuComponent,
        editable: true
      });
    }
  }]);

  return AutoComplete;
}(_react.PureComponent);

AutoComplete.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(_styleConstants.inputThemeNames),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  placeholder: _propTypes["default"].string,
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  itemGroups: _propTypes["default"].arrayOf(_itemGroupShape["default"]),
  defaultItemGroups: _propTypes["default"].arrayOf(_itemGroupShape["default"]),
  itemGroupsSource: _propTypes["default"].arrayOf(_itemGroupShape["default"]),
  // eslint-disable-line react/no-unused-prop-types
  formatSelectedItem: _propTypes["default"].func,
  getMatchingDistance: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  maxVisibleItems: _propTypes["default"].number,
  // eslint-disable-line react/no-unused-prop-types
  showZeroMatch: _propTypes["default"].bool,
  // eslint-disable-line react/no-unused-prop-types
  enableClearSelected: _propTypes["default"].bool,
  hasItemDivider: _propTypes["default"].bool,
  icon: _iconShape["default"],
  noResultsMessage: _propTypes["default"].string,
  tabIndex: _propTypes["default"].number,
  InputComponent: _propTypes["default"].func,
  MenuComponent: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onChange: _propTypes["default"].func
};
AutoComplete.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: _styleConstants.defaultInputSizeKey,
  placeholder: '',
  value: null,
  defaultValue: '',
  itemGroups: null,
  defaultItemGroups: [],
  itemGroupsSource: [],
  formatSelectedItem: function formatSelectedItem(item) {
    return item.title;
  },
  getMatchingDistance: _defaultGetMatchingDistance["default"],
  maxVisibleItems: -1,
  showZeroMatch: false,
  enableClearSelected: false,
  hasItemDivider: false,
  icon: {
    name: 'search'
  },
  noResultsMessage: '',
  tabIndex: 0,
  InputComponent: _TextInput["default"],
  MenuComponent: _SelectMenu["default"],
  onSelect: function onSelect() {},
  onChange: function onChange() {}
};
var _default = AutoComplete;
exports["default"] = _default;