"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleConstants = require("../../../config/styleConstants");

var _shiftSize = _interopRequireDefault(require("../../../utils/shiftSize"));

var _responsiveColumns = _interopRequireDefault(require("../../../shapes/responsiveColumns"));

var _itemGroupShape = _interopRequireDefault(require("../../../shapes/itemGroupShape"));

var _EditableValueHolder = _interopRequireDefault(require("../EditableValueHolder"));

var _StaticValue = _interopRequireDefault(require("../StaticValue"));

var _SwitchInput = _interopRequireDefault(require("../SwitchInput"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _MaskedNumberInput = _interopRequireDefault(require("../MaskedNumberInput"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _SelectInput = _interopRequireDefault(require("../SelectInput"));

var _DatePickerInput = _interopRequireDefault(require("../DatePickerInput"));

var _Button = _interopRequireDefault(require("../../general/Button"));

var _getItemByValue = _interopRequireDefault(require("../../data/SelectMenu/utils/getItemByValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FieldInput = function FieldInput(_ref) {
  var data = _ref.data,
      formData = _ref.formData,
      value = _ref.value,
      fieldName = _ref.fieldName,
      inputType = _ref.inputType,
      inputTheme = _ref.inputTheme,
      inputSize = _ref.inputSize,
      inputStatus = _ref.inputStatus,
      extraProps = _ref.extraProps,
      label = _ref.label,
      placeholder = _ref.placeholder,
      itemGroups = _ref.itemGroups,
      mask = _ref.mask,
      loading = _ref.loading,
      editing = _ref.editing,
      readOnly = _ref.readOnly,
      formatValue = _ref.formatValue,
      validate = _ref.validate,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      isEditing = _ref.isEditing,
      isUpdating = _ref.isUpdating,
      Component = _ref.Component,
      onChange = _ref.onChange,
      onTriggerEdit = _ref.onTriggerEdit;
  var fieldProps = {
    value: value,
    data: data,
    formData: formData
  };
  var isValueLoading = loading === undefined ? isLoading : typeof loading !== 'function' ? loading : loading(fieldProps);

  if (isValueLoading) {
    return null;
  }

  var handleChange = function handleChange(v) {
    return onChange(fieldName, v, data);
  };

  if (Component) {
    return _react.default.createElement(Component, _extends({}, fieldProps, {
      label: label,
      placeholder: placeholder,
      onChange: handleChange
    }));
  }

  var isReadOnly = typeof readOnly !== 'function' ? readOnly : readOnly(fieldProps);
  var isEditable = isEditing || (typeof editing !== 'function' ? editing : editing(fieldProps));
  var maskParams = typeof mask !== 'function' ? mask : mask(fieldProps);
  var itemGroupsArray = typeof itemGroups !== 'function' ? itemGroups : itemGroups(fieldProps);

  if (!isEditable || isReadOnly) {
    var formatedValue = formatValue ? formatValue(fieldProps) : inputType !== 'select' ? value : ((0, _getItemByValue.default)(itemGroupsArray, value) || {}).title || '';

    if (!isReadOnly && !isUpdating && onTriggerEdit) {
      return _react.default.createElement(_EditableValueHolder.default, {
        inputType: inputType,
        value: formatedValue,
        onClick: onTriggerEdit
      });
    }

    return _react.default.createElement(_StaticValue.default, {
      inputType: inputType,
      value: formatedValue
    });
  }

  var isDisabled = typeof disabled === 'function' ? disabled(fieldProps) : disabled;

  switch (inputType) {
    case 'switch':
      {
        return _react.default.createElement("div", {
          className: "lh0"
        }, _react.default.createElement(_SwitchInput.default, _extends({
          size: (0, _shiftSize.default)(inputSize, -1),
          checked: value,
          onChange: handleChange,
          disabled: isDisabled
        }, extraProps)));
      }

    case 'checkbox':
      {
        return _react.default.createElement(_Checkbox.default, _extends({
          size: inputSize,
          value: value,
          onChange: handleChange,
          disabled: isDisabled
        }, extraProps));
      }

    case 'text':
      return _react.default.createElement(_TextInput.default, _extends({
        theme: inputTheme,
        status: inputStatus,
        value: "".concat(value),
        placeholder: placeholder,
        size: inputSize,
        onChange: handleChange,
        disabled: isDisabled
      }, extraProps));

    case 'number':
      {
        return _react.default.createElement(_MaskedNumberInput.default, _extends({
          theme: inputTheme,
          status: inputStatus,
          value: "".concat(value),
          placeholder: placeholder,
          size: inputSize,
          onChange: handleChange,
          validate: validate && function (v) {
            return validate(_objectSpread({}, fieldProps, {
              value: v
            }));
          },
          disabled: isDisabled
        }, maskParams, extraProps));
      }

    case 'select':
      {
        return _react.default.createElement(_SelectInput.default, {
          theme: inputTheme,
          value: value,
          itemGroups: itemGroupsArray,
          placeholder: placeholder,
          size: inputSize,
          onSelect: handleChange
        });
      }

    case 'date':
      {
        return _react.default.createElement(_DatePickerInput.default, _extends({
          theme: inputTheme,
          size: inputSize,
          placeholder: placeholder,
          selectedDays: value,
          onSelectDay: handleChange
        }, extraProps));
      }

    case 'button':
      {
        return _react.default.createElement(_Button.default, _extends({
          theme: "secondary",
          text: label,
          size: (0, _shiftSize.default)(inputSize, -2),
          disabled: isDisabled,
          outlined: true,
          rounded: true,
          isLoading: inputStatus === 'loading'
        }, extraProps));
      }

    default:
  }

  return null;
};

FieldInput.propTypes = {
  data: _propTypes.default.object,
  formData: _propTypes.default.object,
  value: _propTypes.default.any,
  fieldName: _propTypes.default.string.isRequired,
  inputType: _propTypes.default.oneOf(['', 'switch', 'checkbox', 'text', 'number', 'select', 'date', 'button']),
  inputTheme: _propTypes.default.oneOf(_styleConstants.inputThemeNames),
  inputSize: _propTypes.default.oneOf(_styleConstants.inputSizeKeys),
  inputStatus: _propTypes.default.oneOf(['', 'error', 'loading']),
  extraProps: _propTypes.default.object,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  width: _propTypes.default.string,
  column: _responsiveColumns.default,
  align: _propTypes.default.string,
  defaultValue: _propTypes.default.any,
  itemGroups: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_itemGroupShape.default), _propTypes.default.func]),
  mask: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  formatValue: _propTypes.default.func,
  validate: _propTypes.default.func,
  loading: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  editing: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  readOnly: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  disabled: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  isLoading: _propTypes.default.bool,
  isEditing: _propTypes.default.bool,
  isUpdating: _propTypes.default.bool,
  Component: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onTriggerEdit: _propTypes.default.func
};
FieldInput.defaultProps = {
  data: {},
  formData: {},
  value: undefined,
  inputType: '',
  inputTheme: 'default',
  inputSize: _styleConstants.defaultInputSizeKey,
  inputStatus: '',
  extraProps: null,
  label: '',
  placeholder: '',
  defaultValue: undefined,
  itemGroups: null,
  width: '',
  column: '',
  align: '',
  mask: null,
  loading: false,
  editing: false,
  readOnly: false,
  formatValue: null,
  validate: undefined,
  disabled: false,
  isLoading: false,
  isEditing: false,
  isUpdating: false,
  Component: null,
  onChange: function onChange() {},
  onTriggerEdit: function onTriggerEdit() {}
};
var _default = FieldInput;
exports.default = _default;