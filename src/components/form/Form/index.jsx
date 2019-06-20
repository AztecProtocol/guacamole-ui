import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import isObjectEmpty from 'utils/isObjectEmpty';
import fieldShape from 'src/shapes/fieldShape';
import {
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import shiftSize from 'src/utils/shiftSize';
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Offset from '../../layout/Offset';
import Block from '../../layout/Block';
import Text from '../../general/Text';
import Button from '../../general/Button';
import FieldInput from '../FieldInput';
import getDefaultData from './utils/getDefaultData';
import validateFormData from './utils/validateFormData';
import {
  getValue,
  addValue,
} from './utils/dataModifier';
import {
  getError,
  deleteError,
} from './utils/errorsModifier';
import styles from './form.scss';

const DEFAULT_ERROR_POSITION = 'bottom';

class Form extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
      isErrorControlled,
    } = prevState;

    if (!isControlled && !isErrorControlled) {
      return null;
    }

    const nextState = {};

    const {
      data,
      errors,
      fieldsConfig,
    } = nextProps;
    const {
      data: prevData,
      errors: prevErrors,
    } = prevState.prevProps;

    if (isControlled && data !== prevData) {
      nextState.data = data;
      if (!isErrorControlled && !isObjectEmpty(prevErrors)) {
        nextState.errors = validateFormData(data, fieldsConfig);
      }
    }
    if (isErrorControlled) {
      nextState.errors = errors;
    }

    return nextState;
  }

  constructor(props) {
    super(props);

    const {
      initialData,
      data,
      errors,
      fieldsConfig,
    } = props;

    const isControlled = data !== undefined;

    this.state = {
      isControlled,
      isErrorControlled: errors !== undefined,
      data: !isControlled ? getDefaultData(initialData, fieldsConfig) : {},
      errors: {},
      prevProps: { // eslint-disable-line react/no-unused-state
        data: {},
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = (formIndex = 0) => {
    const {
      fieldsConfig,
    } = this.props;
    const {
      data,
    } = this.state;

    return validateFormData(data, fieldsConfig.slice(0, formIndex + 1));
  };

  handleChange(fieldName, value) {
    const {
      isControlled,
      isErrorControlled,
      data: prevData,
      errors: prevErrors,
    } = this.state;
    const {
      onChange,
      isLoading,
    } = this.props;

    if (!isControlled && isLoading) return;

    if (!isControlled) {
      const data = addValue(prevData, fieldName, value);
      if (data !== prevData) {
        this.setState({
          data,
        });
      }
    }
    if (!isErrorControlled) {
      const errors = deleteError(prevErrors, fieldName);
      if (errors !== prevErrors) {
        this.setState({
          errors,
        });
      }
    }

    onChange(fieldName, value);
  }

  handleSubmit(formIndex = 0) {
    const {
      isLoading,
    } = this.props;
    const {
      isControlled,
      isErrorControlled,
      data,
    } = this.state;

    if (!isControlled && isLoading) return;

    if (!isErrorControlled) {
      const errors = this.validate(formIndex);

      if (!isObjectEmpty(errors)) {
        this.setState({
          errors,
        });
        return;
      }
    }

    const {
      onSubmit,
    } = this.props;

    onSubmit(data);
  }

  renderFields(fields, parentConfig) {
    if (!fields || !fields.length) {
      return null;
    }

    const {
      size,
      formData,
    } = this.props;
    const {
      data,
      errors,
    } = this.state;
    const {
      errorPosition: inheritErrorPosition,
    } = parentConfig;

    const colGroups = [[]];
    fields.forEach(({
      fieldName,
      label,
      column,
      shift,
      isRequired,
      colBreak,
      fields: subFields,
      ...fieldConfig
    }) => {
      const {
        inputType,
        errorPosition: fieldErrorPosition,
      } = fieldConfig;
      const value = getValue(data, fieldName);
      const error = getError(errors, fieldName);
      const errorPosition = fieldErrorPosition || inheritErrorPosition || DEFAULT_ERROR_POSITION;
      const hasErrorCol = error && errorPosition === 'right';
      if (colBreak || hasErrorCol) {
        colGroups.push([]);
      }

      colGroups[colGroups.length - 1].push((
        <Col
          key={fieldName}
          shift={shift}
          column={hasErrorCol ? 12 : column}
        >
          <Block padding="m 0">
            {label && (
              <Block padding="xs 0">
                <Text
                  styleName={isRequired ? 'label-required' : ''}
                  text={label}
                  color="label"
                  size="xxs"
                />
              </Block>
            )}
            {inputType && (
              <Block padding="xs 0">
                <Row>
                  <Col column={hasErrorCol ? column : 12}>
                    <FieldInput
                      inputSize={size}
                      {...fieldConfig}
                      key={fieldName}
                      fieldName={fieldName}
                      inputStatus={error ? 'error' : ''}
                      value={value}
                      data={data}
                      formData={formData}
                      onChange={this.handleChange}
                      isEditing
                    />
                  </Col>
                  {hasErrorCol && (
                    <Col column={12 - column}>
                      <Text
                        text={error}
                        color="red"
                        size="xxs"
                      />
                    </Col>
                  )}
                </Row>
                {errorPosition === 'bottom' && error && (
                  <Block padding="xs 0">
                    <Text
                      text={error}
                      color="red"
                      size="xxs"
                    />
                  </Block>
                )}
              </Block>
            )}
            {this.renderFields(subFields, {
              errorPosition,
            })}
          </Block>
        </Col>
      ));

      if (colBreak || hasErrorCol) {
        colGroups.push([]);
      }
    });

    return colGroups
      .filter(group => group.length)
      .map((colNodes, i) => (
        <Row key={`${+i}`}>
          {colNodes}
        </Row>
      ));
  }

  renderForm(formConfig, formIndex, extraContent) {
    const {
      label,
      description,
      buttonText,
      buttonAlign,
      fields,
      extraContent: formExtraContent,
    } = formConfig;
    const {
      size,
      isLoading,
      renderForm,
      renderFooter,
    } = this.props;

    const fieldNodes = this.renderFields(fields, formConfig);
    if (renderForm) {
      return (
        <Block
          key={formIndex}
          styleName="form"
          padding="m 0"
        >
          {renderForm({
            formConfig,
            formIndex,
            fieldNodes,
          })}
        </Block>
      );
    }

    return (
      <Block
        key={formIndex}
        styleName="form"
        padding="m 0"
      >
        {(label || description) && (
          <Block
            top={label ? '' : 'xs'}
            bottom="xl"
          >
            {label && (
              <Block top="l">
                <Text
                  text={label}
                  size="s"
                  weight="semibold"
                />
              </Block>
            )}
            {description && (
              <Block top="m">
                <Text
                  text={description}
                />
              </Block>
            )}
          </Block>
        )}
        {fieldNodes}
        {formExtraContent}
        {extraContent}
        {renderFooter && renderFooter({
          formIndex,
          onSubmit: () => this.handleSubmit(formIndex),
          isLoading,
        })}
        {(!renderFooter && buttonText) && (
          <Block
            padding="l 0"
            align={buttonAlign}
          >
            <Button
              size={shiftSize(size, 1)}
              text={buttonText}
              onSubmit={() => this.handleSubmit(formIndex)}
              isLoading={isLoading}
            />
          </Block>
        )}
      </Block>
    );
  }

  render() {
    const {
      className,
      fieldsConfig,
      expand,
      extraContent,
    } = this.props;

    const totalForms = fieldsConfig.length;

    return (
      <Offset
        className={className}
        styleName={!expand ? 'wrapper' : ''}
        margin="m 0"
      >
        {fieldsConfig.map((formConfig, i) =>
          this.renderForm(
            formConfig,
            i,
            i === totalForms - 1 ? extraContent : null,
          ))}
      </Offset>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(inputSizeKeys),
  initialData: PropTypes.object,
  data: PropTypes.object,
  formData: PropTypes.object,
  errors: PropTypes.object,
  fieldsConfig: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.string,
    errorPosition: PropTypes.oneOf(['bottom', 'right']),
    buttonText: PropTypes.string,
    buttonAlign: PropTypes.oneOf(['left', 'right']),
    fields: PropTypes.arrayOf(PropTypes.shape(fieldShape)).isRequired,
    extraContent: PropTypes.node,
  })).isRequired,
  extraContent: PropTypes.node,
  expand: PropTypes.bool,
  isLoading: PropTypes.bool,
  renderForm: PropTypes.func,
  renderFooter: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: '',
  size: defaultInputSizeKey,
  initialData: {},
  data: undefined,
  formData: null,
  errors: undefined,
  extraContent: null,
  expand: false,
  isLoading: false,
  renderForm: null,
  renderFooter: null,
  onChange() {},
  onSubmit() {},
};

export default CSSModules(Form, styles);
