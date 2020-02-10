import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StaticValue from '../StaticValue';
import styles from './value.scss';

const EditableValueHolder = ({
  inputType,
  value,
  onClick,
}) => (
  <div
    className={classnames(
      styles['value-holder'],
      {
        [styles['input-mask']]: ['number', 'text', 'select'].indexOf(inputType) >= 0,
        [styles['icon-mask']]: ['switch', 'checkbox'].indexOf(inputType) >= 0,
      },
    )}
    onClick={onClick}
  >
    <StaticValue
      inputType={inputType}
      value={value}
    />
  </div>
);

EditableValueHolder.propTypes = {
  inputType: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditableValueHolder;
