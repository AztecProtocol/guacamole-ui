"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _getFormFieldValue = _interopRequireDefault(require("../../../utils/getFormFieldValue"));

var _responsiveTextAlign = _interopRequireDefault(require("../../../shapes/responsiveTextAlign"));

var _fieldShape = _interopRequireDefault(require("../../../shapes/fieldShape"));

var _FlexTable = require("../FlexTable");

var _FieldInput = _interopRequireDefault(require("../../form/FieldInput"));

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  "shift": "table-037e4cc1",
  "left": "table-0b52e9d2",
  "right": "table-40e102c3",
  "delete-button": "table-9fe1f873",
  "row": "table-bc629920",
  "delete-hint": "table-ca1e7f98",
  "delete-active": "table-809377f4"
};

var SmartTableRow = function SmartTableRow(_ref) {
  var defaultAlign = _ref.align,
      fieldsConfig = _ref.fieldsConfig,
      data = _ref.data,
      formData = _ref.formData,
      deletable = _ref.deletable,
      isLoading = _ref.isLoading,
      isEditing = _ref.isEditing,
      isUpdating = _ref.isUpdating,
      onChange = _ref.onChange,
      onTriggerEdit = _ref.onTriggerEdit,
      onDelete = _ref.onDelete;
  var isDeletable = typeof deletable !== 'function' ? deletable : deletable({
    data: data,
    formData: formData,
    isLoading: isLoading,
    isEditing: isEditing,
    isUpdating: isUpdating
  });
  return _react.default.createElement(_FlexTable.TableRow, {
    styleName: "row",
    verticalPadding: "m",
    textAlign: defaultAlign,
    nowrap: true
  }, fieldsConfig.map(function (_ref2) {
    var width = _ref2.width,
        column = _ref2.column,
        align = _ref2.align,
        visible = _ref2.visible,
        field = _objectWithoutProperties(_ref2, ["width", "column", "align", "visible"]);

    var inputType = field.inputType,
        fieldName = field.fieldName,
        loading = field.loading;
    var value = (0, _getFormFieldValue.default)(fieldName, data, fieldsConfig);
    var fieldProps = {
      value: value,
      data: data,
      formData: formData
    };
    var isVisible = visible === undefined ? true : typeof visible !== 'function' ? visible : visible(fieldProps);

    if (!isVisible) {
      return null;
    }

    var isValueLoading = !!(loading === undefined ? isLoading : typeof loading !== 'function' ? loading : loading(fieldProps));
    var shouldShiftInputWrapper = false;
    var isInput = ['text', 'number', 'select'].indexOf(inputType) >= 0;

    if (isInput) {
      var readOnly = field.readOnly;
      var isReadOnly = typeof readOnly !== 'function' ? readOnly : readOnly(fieldProps);

      if (isEditing && !isReadOnly) {
        shouldShiftInputWrapper = true;
      }
    }

    return _react.default.createElement(_FlexTable.TableCell, {
      className: inputType === 'button' ? 'lh0' : '',
      styleName: (0, _classnames2.default)(_defineProperty({
        shift: shouldShiftInputWrapper
      }, "".concat(align || defaultAlign), ['left', 'right'].indexOf(align || defaultAlign) >= 0)),
      key: fieldName,
      width: width,
      column: column,
      align: align,
      isLoading: isValueLoading
    }, _react.default.createElement(_FieldInput.default, _extends({}, field, {
      inputTheme: "inline",
      value: value,
      data: data,
      formData: formData,
      isLoading: isLoading,
      isEditing: isEditing,
      isUpdating: isUpdating,
      onChange: onChange,
      onTriggerEdit: onTriggerEdit
    })));
  }), isDeletable && _react.default.createElement(_Clickable.default, {
    styleName: "delete-button",
    onClick: function onClick() {
      return onDelete(data);
    }
  }, _react.default.createElement(_Icon.default, {
    styleName: "delete-hint",
    name: "remove",
    size: "xs",
    color: "label"
  }), _react.default.createElement(_Icon.default, {
    styleName: "delete-active",
    name: "remove_circle",
    size: "xs",
    color: "red"
  })));
};

SmartTableRow.propTypes = {
  align: _responsiveTextAlign.default,
  fieldsConfig: _propTypes.default.arrayOf(_propTypes.default.shape(_fieldShape.default)).isRequired,
  data: _propTypes.default.object,
  formData: _propTypes.default.object,
  isEditing: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  isUpdating: _propTypes.default.bool,
  deletable: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),
  onChange: _propTypes.default.func,
  onTriggerEdit: _propTypes.default.func,
  onDelete: _propTypes.default.func
};
SmartTableRow.defaultProps = {
  align: '',
  data: {},
  formData: {},
  isEditing: false,
  isLoading: false,
  isUpdating: false,
  deletable: false,
  onChange: function onChange() {},
  onDelete: function onDelete() {},
  onTriggerEdit: null
};

var _default = (0, _reactCssModules.default)(SmartTableRow, styles, {
  allowMultiple: true
});

exports.default = _default;