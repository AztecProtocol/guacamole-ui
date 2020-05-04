"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _statusModifiers = require("./utils/statusModifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  "node": "tree-7a1cc8bb",
  "selectable": "tree-070a98cc",
  "highlight": "tree-e6e6aeba",
  "selected": "tree-cce46244",
  "node-item": "tree-93e96a72",
  "expand-arrow": "tree-54551c49",
  "subset": "tree-0856d502",
  "placeHolderShimmer": "tree-dce5abfe"
};

var TreeNode = /*#__PURE__*/function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  var _super = _createSuper(TreeNode);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _super.apply(this, arguments);
  }

  _createClass(TreeNode, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          testId = _this$props.testId,
          value = _this$props.value,
          title = _this$props.title,
          icon = _this$props.icon,
          content = _this$props.content,
          modifier = _this$props.modifier,
          selectable = _this$props.selectable,
          highlight = _this$props.highlight,
          children = _this$props.children,
          defaultExpandAll = _this$props.defaultExpandAll,
          onSelect = _this$props.onSelect,
          onToggleActive = _this$props.onToggleActive;
      var isOpen = !!(defaultExpandAll ^ (0, _statusModifiers.hasStatus)(modifier, 'active')); // eslint-disable-line no-bitwise

      var data = {
        value: value,
        title: title,
        icon: icon,
        content: content
      };
      var onClickCallback = selectable && onSelect || onToggleActive;
      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-testid": testId,
        className: (0, _classnames2["default"])(styles.node, (_classnames = {}, _defineProperty(_classnames, styles.selectable, selectable), _defineProperty(_classnames, styles.highlight, highlight), _defineProperty(_classnames, styles.selected, (0, _statusModifiers.hasStatus)(modifier, 'selected')), _classnames)),
        role: "button",
        tabIndex: "-1",
        onClick: function onClick(e) {
          e.stopPropagation();
          onClickCallback(value, data);
        },
        onKeyDown: null
      }, children && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['expand-arrow'],
        role: "button",
        tabIndex: "-1",
        onClick: function onClick() {
          return onToggleActive(value, data);
        },
        onKeyDown: null
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: isOpen ? 'expand_more' : 'chevron_right',
        size: "xs",
        color: "label"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: styles['node-item']
      }, (icon || title) && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
        icon: icon,
        title: title,
        size: "s"
      }), content), isOpen && children && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles.subset
      }, children));
    }
  }]);

  return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
  testId: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  title: _propTypes["default"].string,
  icon: _iconShape["default"],
  content: _propTypes["default"].node,
  selectable: _propTypes["default"].bool,
  highlight: _propTypes["default"].bool,
  modifier: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  children: _propTypes["default"].node,
  defaultExpandAll: _propTypes["default"].bool.isRequired,
  onSelect: _propTypes["default"].func,
  onToggleActive: _propTypes["default"].func
};
TreeNode.defaultProps = {
  testId: undefined,
  title: '',
  icon: null,
  content: null,
  selectable: false,
  highlight: false,
  modifier: null,
  children: null,
  onSelect: function onSelect() {},
  onToggleActive: function onToggleActive() {}
};
var _default = TreeNode;
exports["default"] = _default;