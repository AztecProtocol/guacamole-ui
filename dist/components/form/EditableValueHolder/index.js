"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _StaticValue = _interopRequireDefault(require("../StaticValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "value-holder": "value-6b4e4a9a",
  "input-mask": "value-52660527",
  "icon-mask": "value-924a4061",
  "placeHolderShimmer": "value-4339bb59"
};

var EditableValueHolder = function EditableValueHolder(_ref) {
  var inputType = _ref.inputType,
      value = _ref.value,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    styleName: (0, _classnames.default)('value-holder', {
      'input-mask': ['number', 'text', 'select'].indexOf(inputType) >= 0,
      'icon-mask': ['switch', 'checkbox'].indexOf(inputType) >= 0
    }),
    onClick: onClick
  }, _react.default.createElement(_StaticValue.default, {
    inputType: inputType,
    value: value
  }));
};

EditableValueHolder.propTypes = {
  inputType: _propTypes.default.string.isRequired,
  value: _propTypes.default.any.isRequired,
  onClick: _propTypes.default.func.isRequired
};

var _default = (0, _reactCssModules.default)(EditableValueHolder, styles, {
  allowMultiple: true
});

exports.default = _default;