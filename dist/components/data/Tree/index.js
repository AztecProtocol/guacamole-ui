"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tree = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _statusModifiers = require("./utils/statusModifiers");

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "node": "tree__node___3NxKC",
  "selectable": "tree__selectable___304tE",
  "highlight": "tree__highlight___167Qz",
  "selected": "tree__selected___3xErm",
  "node-item": "tree__node-item___37OGC",
  "expand-arrow": "tree__expand-arrow___3t-cJ",
  "subset": "tree__subset___1L3oa",
  "placeHolderShimmer": "tree__placeHolderShimmer___1UqDe"
};

var Tree =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tree, _PureComponent);

  _createClass(Tree, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isSelectedControlled = prevState.isSelectedControlled,
          isActiveControlled = prevState.isActiveControlled,
          prevProps = prevState.prevProps,
          prevModifiers = prevState.modifiers;
      var selectedValues = nextProps.selectedValues,
          activeValues = nextProps.activeValues;
      var prevSelectedValues = prevProps.selectedValues,
          prevActiveValues = prevProps.activeValues;
      var shouldUpdateSelected = isSelectedControlled && selectedValues !== prevSelectedValues;
      var shouldUpdateActive = isActiveControlled && activeValues !== prevActiveValues;

      if (!shouldUpdateSelected && !shouldUpdateActive) {
        return null;
      }

      var modifiers = prevModifiers;

      if (isSelectedControlled) {
        prevSelectedValues.forEach(function (value) {
          modifiers = (0, _statusModifiers.removeStatus)(modifiers, value, 'selected');
        });
        selectedValues.forEach(function (value) {
          modifiers = (0, _statusModifiers.addStatus)(modifiers, value, 'selected');
        });
      }

      if (isActiveControlled) {
        prevActiveValues.forEach(function (value) {
          modifiers = (0, _statusModifiers.removeStatus)(modifiers, value, 'active');
        });
        activeValues.forEach(function (value) {
          modifiers = (0, _statusModifiers.addStatus)(modifiers, value, 'active');
        });
      }

      return {
        modifiers: modifiers,
        prevProps: {
          selectedValues: selectedValues,
          activeValues: activeValues
        }
      };
    }
  }]);

  function Tree(props) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, props));
    var defaultExpandAll = props.defaultExpandAll,
        selectedValues = props.selectedValues,
        activeValues = props.activeValues;
    var isSelectedControlled = selectedValues !== null;
    var isActiveControlled = activeValues !== null;
    _this.state = {
      isSelectedControlled: isSelectedControlled,
      isActiveControlled: isActiveControlled,
      defaultExpandAll: defaultExpandAll,
      // eslint-disable-line react/no-unused-state
      modifiers: null,
      prevProps: {
        // eslint-disable-line react/no-unused-state
        selectedValues: [],
        activeValues: []
      }
    };
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tree, [{
    key: "handleSelect",
    value: function handleSelect(value, data) {
      var isSelectedControlled = this.state.isSelectedControlled;
      var modifiers = this.state.modifiers;

      if (!isSelectedControlled) {
        this.setState({
          modifiers: (0, _statusModifiers.toggleStatus)(modifiers, value, 'selected')
        });
      }

      var onSelect = this.props.onSelect;
      onSelect(value, data);
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(value, data) {
      var isActiveControlled = this.state.isActiveControlled;
      var modifiers = this.state.modifiers;

      if (!isActiveControlled) {
        this.setState({
          modifiers: (0, _statusModifiers.toggleStatus)(modifiers, value, 'active')
        });
      }

      var onToggleActive = this.props.onToggleActive;
      onToggleActive(value, data);
    }
  }, {
    key: "renderBranches",
    value: function renderBranches(data) {
      var _this2 = this;

      var defaultExpandAll = this.props.defaultExpandAll;
      var modifiers = this.state.modifiers;
      return data.map(function (_ref) {
        var childData = _ref.data,
            treeNodeData = _objectWithoutProperties(_ref, ["data"]);

        var value = treeNodeData.value;
        var childrenBranchNode = childData ? _this2.renderBranches(childData) : null;
        return _react.default.createElement(_TreeNode.default, _extends({}, treeNodeData, {
          key: value,
          modifier: (0, _statusModifiers.getModifier)(modifiers, value),
          onSelect: _this2.handleSelect,
          onToggleActive: _this2.handleToggle,
          defaultExpandAll: defaultExpandAll
        }), childrenBranchNode);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          data = _this$props.data;
      var couldExpand = data.some(function (_ref2) {
        var childData = _ref2.data;
        return childData;
      });
      return _react.default.createElement("div", {
        className: className,
        styleName: (0, _classnames.default)({
          subset: couldExpand
        })
      }, this.renderBranches(data));
    }
  }]);

  return Tree;
}(_react.PureComponent);

exports.Tree = Tree;
Tree.propTypes = {
  className: _propTypes.default.string,
  selectedValues: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),
  activeValues: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
    title: _propTypes.default.string,
    icon: _iconShape.default,
    content: _propTypes.default.node,
    selectable: _propTypes.default.bool,
    highlight: _propTypes.default.bool,
    data: _propTypes.default.arrayOf(_propTypes.default.shape({
      value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
      title: _propTypes.default.string,
      icon: _iconShape.default,
      content: _propTypes.default.node,
      selectable: _propTypes.default.bool,
      highlight: _propTypes.default.bool,
      data: _propTypes.default.array
    }))
  })),
  defaultExpandAll: _propTypes.default.bool,
  onSelect: _propTypes.default.func,
  onToggleActive: _propTypes.default.func
};
Tree.defaultProps = {
  className: '',
  selectedValues: null,
  activeValues: null,
  data: [],
  defaultExpandAll: false,
  onSelect: function onSelect() {},
  onToggleActive: function onToggleActive() {}
};

var _default = (0, _reactCssModules.default)(Tree, styles);

exports.default = _default;