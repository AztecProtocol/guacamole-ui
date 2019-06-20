"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _statusModifiers = require("./utils/statusModifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var TreeNode =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeNode).apply(this, arguments));
  }

  _createClass(TreeNode, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
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
      return _react.default.createElement("div", {
        styleName: (0, _classnames.default)('node', {
          selectable: selectable,
          highlight: highlight,
          selected: (0, _statusModifiers.hasStatus)(modifier, 'selected')
        }),
        onClick: function onClick(e) {
          e.stopPropagation();
          onClickCallback(value, data);
        }
      }, children && _react.default.createElement("div", {
        styleName: "expand-arrow",
        onClick: function onClick() {
          return onToggleActive(value, data);
        }
      }, _react.default.createElement(_Icon.default, {
        name: isOpen ? 'expand_more' : 'chevron_right',
        size: "xs",
        color: "label"
      })), _react.default.createElement("div", {
        styleName: "node-item"
      }, (icon || title) && _react.default.createElement(_ListItem.default, {
        icon: icon,
        title: title,
        size: "s"
      }), content), isOpen && children && _react.default.createElement("div", {
        styleName: "subset"
      }, children));
    }
  }]);

  return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  title: _propTypes.default.string,
  icon: _iconShape.default,
  content: _propTypes.default.node,
  selectable: _propTypes.default.bool,
  highlight: _propTypes.default.bool,
  modifier: _propTypes.default.object,
  children: _propTypes.default.node,
  defaultExpandAll: _propTypes.default.bool.isRequired,
  onSelect: _propTypes.default.func,
  onToggleActive: _propTypes.default.func
};
TreeNode.defaultProps = {
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

var _default = (0, _reactCssModules.default)(TreeNode, styles, {
  allowMultiple: true
});

exports.default = _default;