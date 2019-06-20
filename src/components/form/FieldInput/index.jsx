import React from 'react';
import PropTypes from 'prop-types';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import shiftSize from 'src/utils/shiftSize';
import responsiveColumns from 'src/shapes/responsiveColumns';
import itemGroupShape from 'src/shapes/itemGroupShape';
import EditableValueHolder from '../EditableValueHolder';
import StaticValue from '../StaticValue';
import SwitchInput from '../SwitchInput';
import Checkbox from '../Checkbox';
import MaskedNumberInput from '../MaskedNumberInput';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import DatePickerInput from '../DatePickerInput';
import Button from '../../general/Button';
import getItemByValue from '../../data/SelectMenu/utils/getItemByValue';

const FieldInput = ({
  data,
  formData,
  value,
  fieldName,
  inputType,
  inputTheme,
  inputSize,
  inputStatus,
  extraProps,
  label,
  placeholder,
  itemGroups,
  mask,
  loading,
  editing,
  readOnly,
  formatValue,
  validate,
  disabled,
  isLoading,
  isEditing,
  isUpdating,
  Component,
  onChange,
  onTriggerEdit,
}) => {
  const fieldProps = {
    value,
    data,
    formData,
  };

  const isValueLoading = loading === undefined
    ? isLoading
    : typeof loading !== 'function'
      ? loading
      : loading(fieldProps);

  if (isValueLoading) {
    return null;
  }

  const handleChange = v => onChange(fieldName, v, data);

  if (Component) {
    return (
      <Component
        {...fieldProps}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }

  const isReadOnly = typeof readOnly !== 'function'
    ? readOnly
    : readOnly(fieldProps);
  const isEditable = isEditing
    || (typeof editing !== 'function'
      ? editing
      : editing(fieldProps));
  const maskParams = typeof mask !== 'function'
    ? mask
    : mask(fieldProps);
  const itemGroupsArray = typeof itemGroups !== 'function'
    ? itemGroups
    : itemGroups(fieldProps);

  if (!isEditable || isReadOnly) {
    const formatedValue = formatValue
      ? formatValue(fieldProps)
      : (inputType !== 'select'
        ? value
        : (getItemByValue(itemGroupsArray, value) || {}).title || '');

    if (!isReadOnly && !isUpdating && onTriggerEdit) {
      return (
        <EditableValueHolder
          inputType={inputType}
          value={formatedValue}
          onClick={onTriggerEdit}
        />
      );
    }

    return (
      <StaticValue
        inputType={inputType}
        value={formatedValue}
      />
    );
  }

  const isDisabled = typeof disabled === 'function' ? disabled(fieldProps) : disabled;

  switch (inputType) {
    case 'switch': {
      return (
        <div className="lh0">
          <SwitchInput
            size={shiftSize(inputSize, -1)}
            checked={value}
            onChange={handleChange}
            disabled={isDisabled}
            {...extraProps}
          />
        </div>
      );
    }
    case 'checkbox': {
      return (
        <Checkbox
          size={inputSize}
          value={value}
          onChange={handleChange}
          disabled={isDisabled}
          {...extraProps}
        />
      );
    }
    case 'text':
      return (
        <TextInput
          theme={inputTheme}
          status={inputStatus}
          value={`${value}`}
          placeholder={placeholder}
          size={inputSize}
          onChange={handleChange}
          disabled={isDisabled}
          {...extraProps}
        />
      );
    case 'number': {
      return (
        <MaskedNumberInput
          theme={inputTheme}
          status={inputStatus}
          value={`${value}`}
          placeholder={placeholder}
          size={inputSize}
          onChange={handleChange}
          validate={validate && (v => validate({
            ...fieldProps,
            value: v,
          }))}
          disabled={isDisabled}
          {...maskParams}
          {...extraProps}
        />
      );
    }
    case 'select': {
      return (
        <SelectInput
          theme={inputTheme}
          value={value}
          itemGroups={itemGroupsArray}
          placeholder={placeholder}
          size={inputSize}
          onSelect={handleChange}
        />
      );
    }
    case 'date': {
      return (
        <DatePickerInput
          theme={inputTheme}
          size={inputSize}
          placeholder={placeholder}
          selectedDays={value}
          onSelectDay={handleChange}
          {...extraProps}
        />
      );
    }
    case 'button': {
      return (
        <Button
          theme="secondary"
          text={label}
          size={shiftSize(inputSize, -2)}
          disabled={isDisabled}
          outlined
          rounded
          isLoading={inputStatus === 'loading'}
          {...extraProps}
        />
      );
    }
    default:
  }

  return null;
};

FieldInput.propTypes = {
  data: PropTypes.object,
  formData: PropTypes.object,
  value: PropTypes.any,
  fieldName: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf([
    '',
    'switch',
    'checkbox',
    'text',
    'number',
    'select',
    'date',
    'button',
  ]),
  inputTheme: PropTypes.oneOf(inputThemeNames),
  inputSize: PropTypes.oneOf(inputSizeKeys),
  inputStatus: PropTypes.oneOf(['', 'error', 'loading']),
  extraProps: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  column: responsiveColumns,
  align: PropTypes.string,
  defaultValue: PropTypes.any,
  itemGroups: PropTypes.oneOfType([
    PropTypes.arrayOf(itemGroupShape),
    PropTypes.func,
  ]),
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  formatValue: PropTypes.func,
  validate: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  editing: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  isLoading: PropTypes.bool,
  isEditing: PropTypes.bool,
  isUpdating: PropTypes.bool,
  Component: PropTypes.func,
  onChange: PropTypes.func,
  onTriggerEdit: PropTypes.func,
};

FieldInput.defaultProps = {
  data: {},
  formData: {},
  value: undefined,
  inputType: '',
  inputTheme: 'default',
  inputSize: defaultInputSizeKey,
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
  onChange() {},
  onTriggerEdit() {},
};

export default FieldInput;
