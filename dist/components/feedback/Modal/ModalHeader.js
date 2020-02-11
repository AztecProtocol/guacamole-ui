"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "modal": "modal-b9d0f0e0",
  "hide": "modal-69b09d41",
  "wrapper": "modal-dc213bbe",
  "container": "modal-2637ce0b",
  "auto-width": "modal-adaf9598",
  "header": "modal-3a60906c",
  "content": "modal-974e1036",
  "close-button": "modal-6847e7a9",
  "placeHolderShimmer": "modal-89d80b5e"
};

var ModalHeader = function ModalHeader(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      children = _ref.children,
      hasCloseIcon = _ref.hasCloseIcon,
      onClose = _ref.onClose;
  return _react["default"].createElement(_Block["default"], {
    className: className,
    background: "grey-lightest",
    padding: "m l",
    hasBorderBottom: true
  }, _react["default"].createElement(_FlexBox["default"], {
    align: "space-between"
  }, _react["default"].createElement(_Row["default"], {
    valign: "center",
    margin: "xs"
  }, icon && _react["default"].createElement(_Block["default"], {
    padding: "0 xs",
    className: "lh0"
  }, _react["default"].createElement(_Icon["default"], _extends({
    size: "m"
  }, icon))), children && _react["default"].createElement(_Block["default"], {
    padding: "0 xs"
  }, _react["default"].createElement(_Text["default"], {
    size: "s",
    weight: "medium"
  }, children))), hasCloseIcon && _react["default"].createElement("div", {
    className: styles['close-button'],
    role: "button",
    tabIndex: "0",
    onClick: onClose,
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;

      if ([13, 32].indexOf(keyCode) >= 0) {
        e.preventDefault();
        onClose();
      }
    }
  }, _react["default"].createElement(_Icon["default"], {
    name: "close",
    size: "l"
  }))));
};

ModalHeader.propTypes = {
  className: _propTypes["default"].string,
  icon: _iconShape["default"],
  children: _propTypes["default"].node,
  hasCloseIcon: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
ModalHeader.defaultProps = {
  className: '',
  icon: null,
  children: null,
  hasCloseIcon: true,
  onClose: function onClose() {}
};
var _default = ModalHeader;
exports["default"] = _default;