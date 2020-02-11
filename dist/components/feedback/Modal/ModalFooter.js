"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ModalFooter = function ModalFooter(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react["default"].createElement(_Block["default"], {
    className: className,
    padding: "l",
    background: "grey-lightest",
    align: "right",
    hasBorderTop: true
  }, children);
};

ModalFooter.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
ModalFooter.defaultProps = {
  className: ''
};
var _default = ModalFooter;
exports["default"] = _default;