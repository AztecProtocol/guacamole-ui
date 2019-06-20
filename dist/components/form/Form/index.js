"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _isObjectEmpty = _interopRequireDefault(require("../../../utils/isObjectEmpty"));

var _fieldShape = _interopRequireDefault(require("../../../shapes/fieldShape"));

var _styleConstants = require("../../../config/styleConstants");

var _shiftSize = _interopRequireDefault(require("../../../utils/shiftSize"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

var _Col = _interopRequireDefault(require("../../layout/Col"));

var _Offset = _interopRequireDefault(require("../../layout/Offset"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Button = _interopRequireDefault(require("../../general/Button"));

var _FieldInput = _interopRequireDefault(require("../FieldInput"));

var _getDefaultData = _interopRequireDefault(require("./utils/getDefaultData"));

var _validateFormData = _interopRequireDefault(require("./utils/validateFormData"));

var _dataModifier = require("./utils/dataModifier");

var _errorsModifier = require("./utils/errorsModifier");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "form-ef74c025",
  "form": "form-b475bc45",
  "label-required": "form-5cf143fb"
};
var DEFAULT_ERROR_POSITION = 'bottom';

var Form =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Form, _PureComponent);

  _createClass(Form, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isControlled = prevState.isControlled,
          isErrorControlled = prevState.isErrorControlled;

      if (!isControlled && !isErrorControlled) {
        return null;
      }

      var nextState = {};
      var data = nextProps.data,
          errors = nextProps.errors,
          fieldsConfig = nextProps.fieldsConfig;
      var _prevState$prevProps = prevState.prevProps,
          prevData = _prevState$prevProps.data,
          prevErrors = _prevState$prevProps.errors;

      if (isControlled && data !== prevData) {
        nextState.data = data;

        if (!isErrorControlled && !(0, _isObjectEmpty.default)(prevErrors)) {
          nextState.errors = (0, _validateFormData.default)(data, fieldsConfig);
        }
      }

      if (isErrorControlled) {
        nextState.errors = errors;
      }

      return nextState;
    }
  }]);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      var formIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var fieldsConfig = _this.props.fieldsConfig;
      var data = _this.state.data;
      return (0, _validateFormData.default)(data, fieldsConfig.slice(0, formIndex + 1));
    });

    var initialData = props.initialData,
        _data = props.data,
        errors = props.errors,
        _fieldsConfig = props.fieldsConfig;
    var isControlled = _data !== undefined;
    _this.state = {
      isControlled: isControlled,
      isErrorControlled: errors !== undefined,
      data: !isControlled ? (0, _getDefaultData.default)(initialData, _fieldsConfig) : {},
      errors: {},
      prevProps: {
        // eslint-disable-line react/no-unused-state
        data: {}
      }
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Form, [{
    key: "handleChange",
    value: function handleChange(fieldName, value) {
      var _this$state = this.state,
          isControlled = _this$state.isControlled,
          isErrorControlled = _this$state.isErrorControlled,
          prevData = _this$state.data,
          prevErrors = _this$state.errors;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          isLoading = _this$props.isLoading;
      if (!isControlled && isLoading) return;

      if (!isControlled) {
        var data = (0, _dataModifier.addValue)(prevData, fieldName, value);

        if (data !== prevData) {
          this.setState({
            data: data
          });
        }
      }

      if (!isErrorControlled) {
        var errors = (0, _errorsModifier.deleteError)(prevErrors, fieldName);

        if (errors !== prevErrors) {
          this.setState({
            errors: errors
          });
        }
      }

      onChange(fieldName, value);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var formIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isLoading = this.props.isLoading;
      var _this$state2 = this.state,
          isControlled = _this$state2.isControlled,
          isErrorControlled = _this$state2.isErrorControlled,
          data = _this$state2.data;
      if (!isControlled && isLoading) return;

      if (!isErrorControlled) {
        var errors = this.validate(formIndex);

        if (!(0, _isObjectEmpty.default)(errors)) {
          this.setState({
            errors: errors
          });
          return;
        }
      }

      var onSubmit = this.props.onSubmit;
      onSubmit(data);
    }
  }, {
    key: "renderFields",
    value: function renderFields(fields, parentConfig) {
      var _this2 = this;

      if (!fields || !fields.length) {
        return null;
      }

      var _this$props2 = this.props,
          size = _this$props2.size,
          formData = _this$props2.formData;
      var _this$state3 = this.state,
          data = _this$state3.data,
          errors = _this$state3.errors;
      var inheritErrorPosition = parentConfig.errorPosition;
      var colGroups = [[]];
      fields.forEach(function (_ref) {
        var fieldName = _ref.fieldName,
            label = _ref.label,
            column = _ref.column,
            shift = _ref.shift,
            isRequired = _ref.isRequired,
            colBreak = _ref.colBreak,
            subFields = _ref.fields,
            fieldConfig = _objectWithoutProperties(_ref, ["fieldName", "label", "column", "shift", "isRequired", "colBreak", "fields"]);

        var inputType = fieldConfig.inputType,
            fieldErrorPosition = fieldConfig.errorPosition;
        var value = (0, _dataModifier.getValue)(data, fieldName);
        var error = (0, _errorsModifier.getError)(errors, fieldName);
        var errorPosition = fieldErrorPosition || inheritErrorPosition || DEFAULT_ERROR_POSITION;
        var hasErrorCol = error && errorPosition === 'right';

        if (colBreak || hasErrorCol) {
          colGroups.push([]);
        }

        colGroups[colGroups.length - 1].push(_react.default.createElement(_Col.default, {
          key: fieldName,
          shift: shift,
          column: hasErrorCol ? 12 : column
        }, _react.default.createElement(_Block.default, {
          padding: "m 0"
        }, label && _react.default.createElement(_Block.default, {
          padding: "xs 0"
        }, _react.default.createElement(_Text.default, {
          styleName: isRequired ? 'label-required' : '',
          text: label,
          color: "label",
          size: "xxs"
        })), inputType && _react.default.createElement(_Block.default, {
          padding: "xs 0"
        }, _react.default.createElement(_Row.default, null, _react.default.createElement(_Col.default, {
          column: hasErrorCol ? column : 12
        }, _react.default.createElement(_FieldInput.default, _extends({
          inputSize: size
        }, fieldConfig, {
          key: fieldName,
          fieldName: fieldName,
          inputStatus: error ? 'error' : '',
          value: value,
          data: data,
          formData: formData,
          onChange: _this2.handleChange,
          isEditing: true
        }))), hasErrorCol && _react.default.createElement(_Col.default, {
          column: 12 - column
        }, _react.default.createElement(_Text.default, {
          text: error,
          color: "red",
          size: "xxs"
        }))), errorPosition === 'bottom' && error && _react.default.createElement(_Block.default, {
          padding: "xs 0"
        }, _react.default.createElement(_Text.default, {
          text: error,
          color: "red",
          size: "xxs"
        }))), _this2.renderFields(subFields, {
          errorPosition: errorPosition
        }))));

        if (colBreak || hasErrorCol) {
          colGroups.push([]);
        }
      });
      return colGroups.filter(function (group) {
        return group.length;
      }).map(function (colNodes, i) {
        return _react.default.createElement(_Row.default, {
          key: "".concat(+i)
        }, colNodes);
      });
    }
  }, {
    key: "renderForm",
    value: function renderForm(formConfig, formIndex, extraContent) {
      var _this3 = this;

      var label = formConfig.label,
          description = formConfig.description,
          buttonText = formConfig.buttonText,
          buttonAlign = formConfig.buttonAlign,
          fields = formConfig.fields,
          formExtraContent = formConfig.extraContent;
      var _this$props3 = this.props,
          size = _this$props3.size,
          isLoading = _this$props3.isLoading,
          renderForm = _this$props3.renderForm,
          renderFooter = _this$props3.renderFooter;
      var fieldNodes = this.renderFields(fields, formConfig);

      if (renderForm) {
        return _react.default.createElement(_Block.default, {
          key: formIndex,
          styleName: "form",
          padding: "m 0"
        }, renderForm({
          formConfig: formConfig,
          formIndex: formIndex,
          fieldNodes: fieldNodes
        }));
      }

      return _react.default.createElement(_Block.default, {
        key: formIndex,
        styleName: "form",
        padding: "m 0"
      }, (label || description) && _react.default.createElement(_Block.default, {
        top: label ? '' : 'xs',
        bottom: "xl"
      }, label && _react.default.createElement(_Block.default, {
        top: "l"
      }, _react.default.createElement(_Text.default, {
        text: label,
        size: "s",
        weight: "semibold"
      })), description && _react.default.createElement(_Block.default, {
        top: "m"
      }, _react.default.createElement(_Text.default, {
        text: description
      }))), fieldNodes, formExtraContent, extraContent, renderFooter && renderFooter({
        formIndex: formIndex,
        onSubmit: function onSubmit() {
          return _this3.handleSubmit(formIndex);
        },
        isLoading: isLoading
      }), !renderFooter && buttonText && _react.default.createElement(_Block.default, {
        padding: "l 0",
        align: buttonAlign
      }, _react.default.createElement(_Button.default, {
        size: (0, _shiftSize.default)(size, 1),
        text: buttonText,
        onSubmit: function onSubmit() {
          return _this3.handleSubmit(formIndex);
        },
        isLoading: isLoading
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          fieldsConfig = _this$props4.fieldsConfig,
          expand = _this$props4.expand,
          extraContent = _this$props4.extraContent;
      var totalForms = fieldsConfig.length;
      return _react.default.createElement(_Offset.default, {
        className: className,
        styleName: !expand ? 'wrapper' : '',
        margin: "m 0"
      }, fieldsConfig.map(function (formConfig, i) {
        return _this4.renderForm(formConfig, i, i === totalForms - 1 ? extraContent : null);
      }));
    }
  }]);

  return Form;
}(_react.PureComponent);

Form.propTypes = {
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(_styleConstants.inputSizeKeys),
  initialData: _propTypes.default.object,
  data: _propTypes.default.object,
  formData: _propTypes.default.object,
  errors: _propTypes.default.object,
  fieldsConfig: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    description: _propTypes.default.string,
    errorPosition: _propTypes.default.oneOf(['bottom', 'right']),
    buttonText: _propTypes.default.string,
    buttonAlign: _propTypes.default.oneOf(['left', 'right']),
    fields: _propTypes.default.arrayOf(_propTypes.default.shape(_fieldShape.default)).isRequired,
    extraContent: _propTypes.default.node
  })).isRequired,
  extraContent: _propTypes.default.node,
  expand: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  renderForm: _propTypes.default.func,
  renderFooter: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
Form.defaultProps = {
  className: '',
  size: _styleConstants.defaultInputSizeKey,
  initialData: {},
  data: undefined,
  formData: null,
  errors: undefined,
  extraContent: null,
  expand: false,
  isLoading: false,
  renderForm: null,
  renderFooter: null,
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};

var _default = (0, _reactCssModules.default)(Form, styles);

exports.default = _default;