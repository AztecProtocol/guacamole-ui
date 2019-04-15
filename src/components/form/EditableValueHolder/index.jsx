import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import StaticValue from '../StaticValue';
import styles from './value.scss';

const EditableValueHolder = ({
  inputType,
  value,
  onClick,
}) => (
  <div
    styleName={classnames(
      'value-holder',
      {
        'input-mask': ['number', 'text', 'select'].indexOf(inputType) >= 0,
        'icon-mask': ['switch', 'checkbox'].indexOf(inputType) >= 0,
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

export default CSSModules(EditableValueHolder, styles, {
  allowMultiple: true,
});
