"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StaticValue = function StaticValue(_ref) {
  var inputType = _ref.inputType,
      value = _ref.value;

  switch (inputType) {
    case 'switch':
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "lh0"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: value ? 'lock' : 'lock_open',
        color: value ? 'red' : 'label'
      }));

    case 'checkbox':
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "lh0"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: value ? 'done' : 'remove',
        color: value ? 'green' : 'label'
      }));

    default:
      return /*#__PURE__*/_react["default"].createElement(_Text["default"], {
        text: "".concat(value)
      });
  }
};

StaticValue.propTypes = {
  inputType: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired
};
var _default = StaticValue;
exports["default"] = _default;