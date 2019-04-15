"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _layout = require("../../../config/layout");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "modal": "modal__modal___3DAi_",
  "hide": "modal__hide___2_Zup",
  "wrapper": "modal__wrapper___2_wOP",
  "container": "modal__container___3W_Ta",
  "auto-width": "modal__auto-width___301B3",
  "header": "modal__header___3kM3q",
  "content": "modal__content___1VoSe",
  "close-button": "modal__close-button___C3cE_",
  "placeHolderShimmer": "modal__placeHolderShimmer___7K1Nh"
};

var ModalHeader = function ModalHeader(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      children = _ref.children,
      hasCloseIcon = _ref.hasCloseIcon,
      onClose = _ref.onClose;
  return _react.default.createElement(_Block.default, {
    className: className,
    background: "grey-lightest",
    padding: "m ".concat(_layout.defaultSpacingKeyM),
    hasBorderBottom: true
  }, _react.default.createElement(_FlexBox.default, {
    align: "space-between"
  }, _react.default.createElement(_Row.default, {
    valign: "center",
    margin: "xs"
  }, icon && _react.default.createElement(_Block.default, {
    padding: "0 xs",
    className: "lh0"
  }, _react.default.createElement(_Icon.default, _extends({
    size: "m"
  }, icon))), children && _react.default.createElement(_Block.default, {
    padding: "0 xs"
  }, _react.default.createElement(_Text.default, {
    size: "s",
    weight: "book"
  }, children))), hasCloseIcon && _react.default.createElement("div", {
    styleName: "close-button",
    onClick: onClose
  }, _react.default.createElement(_Icon.default, {
    name: "close",
    size: "l"
  }))));
};

ModalHeader.propTypes = {
  className: _propTypes.default.string,
  icon: _iconShape.default,
  children: _propTypes.default.node,
  hasCloseIcon: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
ModalHeader.defaultProps = {
  className: '',
  icon: null,
  children: null,
  hasCloseIcon: true,
  onClose: function onClose() {}
};

var _default = (0, _reactCssModules.default)(ModalHeader, styles);

exports.default = _default;