import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import getFormFieldValue from 'utils/getFormFieldValue';
import responsiveTextAlign from 'src/shapes/responsiveTextAlign';
import fieldShape from 'src/shapes/fieldShape';
import {
  TableRow,
  TableCell,
} from '../FlexTable';
import FieldInput from '../../form/FieldInput';
import Icon from '../../general/Icon';
import Clickable from '../../utils/Clickable';
import styles from './table.scss';

const SmartTableRow = ({
  align: defaultAlign,
  fieldsConfig,
  data,
  formData,
  deletable,
  isLoading,
  isEditing,
  isUpdating,
  onChange,
  onTriggerEdit,
  onDelete,
}) => {
  const isDeletable = typeof deletable !== 'function'
    ? deletable
    : deletable({
      data,
      formData,
      isLoading,
      isEditing,
      isUpdating,
    });

  return (
    <TableRow
      styleName="row"
      verticalPadding="m"
      textAlign={defaultAlign}
      nowrap
    >
      {fieldsConfig.map(({
        width,
        column,
        align,
        visible,
        ...field
      }) => {
        const {
          inputType,
          fieldName,
          loading,
        } = field;

        const value = getFormFieldValue(fieldName, data, fieldsConfig);

        const fieldProps = {
          value,
          data,
          formData,
        };

        const isVisible = visible === undefined
          ? true
          : typeof visible !== 'function'
            ? visible
            : visible(fieldProps);

        if (!isVisible) {
          return null;
        }

        const isValueLoading = !!(loading === undefined
          ? isLoading
          : typeof loading !== 'function'
            ? loading
            : loading(fieldProps));

        let shouldShiftInputWrapper = false;
        const isInput = ['text', 'number', 'select'].indexOf(inputType) >= 0;
        if (isInput) {
          const {
            readOnly,
          } = field;
          const isReadOnly = typeof readOnly !== 'function'
            ? readOnly
            : readOnly(fieldProps);
          if (isEditing && !isReadOnly) {
            shouldShiftInputWrapper = true;
          }
        }

        return (
          <TableCell
            className={inputType === 'button' ? 'lh0' : ''}
            styleName={classnames({
              shift: shouldShiftInputWrapper,
              [`${align || defaultAlign}`]: ['left', 'right'].indexOf(align || defaultAlign) >= 0,
            })}
            key={fieldName}
            width={width}
            column={column}
            align={align}
            isLoading={isValueLoading}
          >
            <FieldInput
              {...field}
              inputTheme="inline"
              value={value}
              data={data}
              formData={formData}
              isLoading={isLoading}
              isEditing={isEditing}
              isUpdating={isUpdating}
              onChange={onChange}
              onTriggerEdit={onTriggerEdit}
            />
          </TableCell>
        );
      })}
      {isDeletable && (
        <Clickable
          styleName="delete-button"
          onClick={() => onDelete(data)}
        >
          <Icon
            styleName="delete-hint"
            name="remove"
            size="xs"
            color="label"
          />
          <Icon
            styleName="delete-active"
            name="remove_circle"
            size="xs"
            color="red"
          />
        </Clickable>
      )}
    </TableRow>
  );
};

SmartTableRow.propTypes = {
  align: responsiveTextAlign,
  fieldsConfig: PropTypes.arrayOf(PropTypes.shape(fieldShape)).isRequired,
  data: PropTypes.object,
  formData: PropTypes.object,
  isEditing: PropTypes.bool,
  isLoading: PropTypes.bool,
  isUpdating: PropTypes.bool,
  deletable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func,
  onTriggerEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

SmartTableRow.defaultProps = {
  align: '',
  data: {},
  formData: {},
  isEditing: false,
  isLoading: false,
  isUpdating: false,
  deletable: false,
  onChange() {},
  onDelete() {},
  onTriggerEdit: null,
};

export default CSSModules(SmartTableRow, styles, {
  allowMultiple: true,
});
