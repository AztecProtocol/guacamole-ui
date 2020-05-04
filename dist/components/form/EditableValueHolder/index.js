"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _StaticValue = _interopRequireDefault(require("../StaticValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "value-holder": "value-6b4e4a9a",
  "input-mask": "value-52660527",
  "icon-mask": "value-924a4061",
  "placeHolderShimmer": "value-4339bb59"
};

var EditableValueHolder = function EditableValueHolder(_ref) {
  var _classnames;

  var inputType = _ref.inputType,
      value = _ref.value,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames2["default"])(styles['value-holder'], (_classnames = {}, _defineProperty(_classnames, styles['input-mask'], ['number', 'text', 'select'].indexOf(inputType) >= 0), _defineProperty(_classnames, styles['icon-mask'], ['switch', 'checkbox'].indexOf(inputType) >= 0), _classnames)),
    role: "button",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;

      if ([13, 32].indexOf(keyCode) >= 0) {
        e.preventDefault();
        onClick();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_StaticValue["default"], {
    inputType: inputType,
    value: value
  }));
};

EditableValueHolder.propTypes = {
  inputType: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any.isRequired,
  // eslint-disable-line react/forbid-prop-types
  onClick: _propTypes["default"].func.isRequired
};
var _default = EditableValueHolder;
exports["default"] = _default;