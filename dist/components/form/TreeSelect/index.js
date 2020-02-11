"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _ClickOutsideHandler = _interopRequireDefault(require("../../utils/ClickOutsideHandler"));

var _PopupMenu = _interopRequireDefault(require("../../feedback/PopupMenu"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Tree = _interopRequireDefault(require("../../data/Tree"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _getTreeNodeByValue = _interopRequireDefault(require("./utils/getTreeNodeByValue"));

var _treeNodesFilter = _interopRequireDefault(require("./utils/treeNodesFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "wrapper": "select-5ebc695b",
  "menu": "select-2f097871",
  "filter-input": "select-711a4ebe",
  "tree-data": "select-76665e57"
};

var TreeSelect =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeSelect, _PureComponent);

  _createClass(TreeSelect, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled,
          prevProps = prevState.prevProps,
          filterKeyword = prevState.filterKeyword;
      var selectedValues = nextProps.selectedValues,
          data = nextProps.data;
      var prevSelectedValues = prevProps.selectedValues,
          prevData = prevProps.data;

      if ((!isControlled || selectedValues === prevSelectedValues) && data === prevData) {
        return null;
      }

      var nextState = {};

      if (isControlled) {
        nextState.selectedValues = selectedValues;
      }

      if (isControlled || data !== prevData) {
        var values = isControlled ? selectedValues : prevState.selectedValues;
        nextState.selectedNodes = values.map(function (value) {
          return (0, _getTreeNodeByValue["default"])(data, value);
        }).filter(function (n) {
          return n;
        });
        nextState.activeValues = [];
      }

      if (data !== prevData) {
        nextState.filteredData = (0, _treeNodesFilter["default"])(data, filterKeyword);
        nextState.activeValues = [];
      }

      return _objectSpread({}, nextState, {
        prevProps: {
          selectedValues: selectedValues,
          data: data
        }
      });
    }
  }]);

  function TreeSelect(props) {
    var _this;

    _classCallCheck(this, TreeSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeSelect).call(this, props));
    var selectedValues = props.selectedValues,
        data = props.data;
    _this.state = {
      isControlled: selectedValues !== null,
      activeValues: [],
      selectedValues: [],
      selectedNodes: [],
      showMenu: false,
      filteredData: data,
      filterKeyword: '',
      prevProps: {
        // eslint-disable-line react/no-unused-state
        selectedValues: [],
        data: []
      }
    };
    _this.filterInput = null;
    _this.setFilterInputRef = _this.setFilterInputRef.bind(_assertThisInitialized(_this));
    _this.handleOpenMenu = _this.handleOpenMenu.bind(_assertThisInitialized(_this));
    _this.handleCloseMenu = _this.handleCloseMenu.bind(_assertThisInitialized(_this));
    _this.handleToggleActive = _this.handleToggleActive.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleClearSelected = _this.handleClearSelected.bind(_assertThisInitialized(_this));
    _this.handleChangeFilterKeyword = _this.handleChangeFilterKeyword.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showMenu = this.state.showMenu;
      var prevShowMenu = prevState.showMenu;

      if (this.filterInput && showMenu && !prevShowMenu) {
        this.filterInput.focus();
      }
    }
  }, {
    key: "setFilterInputRef",
    value: function setFilterInputRef(ref) {
      this.filterInput = ref;
    }
  }, {
    key: "handleOpenMenu",
    value: function handleOpenMenu() {
      this.setState({
        showMenu: true
      });
    }
  }, {
    key: "handleCloseMenu",
    value: function handleCloseMenu() {
      this.setState({
        showMenu: false
      });
    }
  }, {
    key: "handleToggleActive",
    value: function handleToggleActive(value) {
      var prevActiveValues = this.state.activeValues;
      var activeValues = prevActiveValues.filter(function (v) {
        return v !== value;
      });

      if (activeValues.length !== prevActiveValues.length) {
        this.setState({
          activeValues: activeValues
        });
      } else {
        this.setState({
          activeValues: [].concat(_toConsumableArray(activeValues), [value])
        });
      }
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(value, nodeData) {
      var _this$state = this.state,
          isControlled = _this$state.isControlled,
          prevSelectedValues = _this$state.selectedValues,
          prevSelectedNodes = _this$state.selectedNodes;
      var _this$props = this.props,
          allowMultiple = _this$props.allowMultiple,
          autoCloseOnSelect = _this$props.autoCloseOnSelect;

      if (!isControlled) {
        if (!allowMultiple) {
          if (value !== prevSelectedValues[0]) {
            this.setState({
              selectedValues: [value],
              selectedNodes: [nodeData]
            });
          }
        } else if (prevSelectedValues.indexOf(value) < 0) {
          this.setState({
            selectedValues: [].concat(_toConsumableArray(prevSelectedValues), [value]),
            selectedNodes: [].concat(_toConsumableArray(prevSelectedNodes), [nodeData])
          });
        }
      }

      if (autoCloseOnSelect) {
        this.setState({
          showMenu: false
        });
      }

      var onSelect = this.props.onSelect;
      onSelect(value, nodeData);
    }
  }, {
    key: "handleClearSelected",
    value: function handleClearSelected() {
      var isControlled = this.state.isControlled;

      if (!isControlled) {
        this.setState({
          selectedValues: [],
          selectedNodes: []
        });
      }

      var onClearSelectedValues = this.props.onClearSelectedValues;
      onClearSelectedValues();
    }
  }, {
    key: "handleChangeFilterKeyword",
    value: function handleChangeFilterKeyword(value) {
      var data = this.props.data;
      var filteredData = (0, _treeNodesFilter["default"])(data, value);
      this.setState({
        filteredData: filteredData,
        filterKeyword: value,
        activeValues: []
      });
    }
  }, {
    key: "renderTreeMenu",
    value: function renderTreeMenu() {
      var _this$props2 = this.props,
          disableFilter = _this$props2.disableFilter,
          filterPlaceholder = _this$props2.filterPlaceholder;
      var _this$state2 = this.state,
          filteredData = _this$state2.filteredData,
          activeValues = _this$state2.activeValues,
          selectedValues = _this$state2.selectedValues,
          showMenu = _this$state2.showMenu,
          filterKeyword = _this$state2.filterKeyword;
      return _react["default"].createElement(_PopupMenu["default"], {
        hide: !showMenu,
        disabledClickOutside: true
      }, _react["default"].createElement("div", {
        className: styles.menu
      }, !disableFilter && _react["default"].createElement(_Block["default"], {
        className: "flex-fixed",
        padding: "m s s"
      }, _react["default"].createElement(_TextInput["default"], {
        ref: this.setFilterInputRef,
        value: filterKeyword,
        placeholder: filterPlaceholder,
        onChange: this.handleChangeFilterKeyword
      })), _react["default"].createElement(_Block["default"], {
        className: styles['tree-data'],
        right: "s",
        left: "xs",
        bottom: "xs"
      }, _react["default"].createElement(_Tree["default"], {
        data: filteredData,
        activeValues: activeValues,
        selectedValues: selectedValues,
        defaultExpandAll: !!filterKeyword,
        onSelect: this.handleSelect,
        onToggleActive: this.handleToggleActive
      }))));
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          size = _this$props3.size,
          placeholder = _this$props3.placeholder,
          disableClearAll = _this$props3.disableClearAll,
          InputComponent = _this$props3.InputComponent;
      var _this$state3 = this.state,
          showMenu = _this$state3.showMenu,
          selectedNodes = _this$state3.selectedNodes;
      var inputIcon = null;
      var enableClearSelected = false;

      if (!showMenu) {
        inputIcon = {
          name: 'expand_more',
          size: 'l'
        };
      } else if (!disableClearAll && selectedNodes.length) {
        enableClearSelected = true;
        inputIcon = {
          name: 'cancel',
          size: 's',
          color: 'grey-light'
        };
      } else {
        inputIcon = {
          name: 'expand_less',
          size: 'l'
        };
      }

      return _react["default"].createElement(InputComponent, {
        theme: theme,
        status: showMenu ? 'focus' : '',
        size: size,
        placeholder: placeholder,
        value: selectedNodes.map(function (_ref) {
          var title = _ref.title;
          return title;
        }).join(', '),
        icon: inputIcon,
        onClick: showMenu ? this.handleCloseMenu : this.handleOpenMenu,
        onClickIcon: enableClearSelected ? this.handleClearSelected : null,
        readOnly: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          testId = _this$props4.testId,
          className = _this$props4.className;
      var showMenu = this.state.showMenu;
      return _react["default"].createElement(_ClickOutsideHandler["default"], {
        testId: testId,
        className: (0, _classnames["default"])(className, styles.wrapper),
        onClickOutside: this.handleCloseMenu,
        disabled: !showMenu
      }, this.renderInput(), this.renderTreeMenu());
    }
  }]);

  return TreeSelect;
}(_react.PureComponent);

TreeSelect.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(_styleConstants.inputThemeNames),
  selectedValues: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
    title: _propTypes["default"].string,
    icon: _iconShape["default"],
    content: _propTypes["default"].node,
    selectable: _propTypes["default"].bool,
    data: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
      title: _propTypes["default"].string,
      icon: _iconShape["default"],
      content: _propTypes["default"].node,
      selectable: _propTypes["default"].bool,
      data: _propTypes["default"].array
    }))
  })).isRequired,
  placeholder: _propTypes["default"].string,
  filterPlaceholder: _propTypes["default"].string,
  allowMultiple: _propTypes["default"].bool,
  disableFilter: _propTypes["default"].bool,
  disableClearAll: _propTypes["default"].bool,
  autoCloseOnSelect: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  onClearSelectedValues: _propTypes["default"].func,
  InputComponent: _propTypes["default"].func
};
TreeSelect.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: _styleConstants.defaultInputSizeKey,
  selectedValues: null,
  placeholder: '',
  filterPlaceholder: '',
  allowMultiple: false,
  disableFilter: false,
  disableClearAll: false,
  autoCloseOnSelect: true,
  onSelect: function onSelect() {},
  onClearSelectedValues: function onClearSelectedValues() {},
  InputComponent: _TextInput["default"]
};
var _default = TreeSelect;
exports["default"] = _default;