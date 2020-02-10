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
    role="button"
    tabIndex="0"
    onClick={onClick}
    onKeyDown={(e) => {
      const { keyCode } = e;
      if ([13, 32].indexOf(keyCode) >= 0) {
        e.preventDefault();
        onClick();
      }
    }}
  >
    <StaticValue
      inputType={inputType}
      value={value}
    />
  </div>
);

EditableValueHolder.propTypes = {
  inputType: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  onClick: PropTypes.func.isRequired,
};

export default EditableValueHolder;
