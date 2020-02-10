import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../general/Icon';
import Text from '../../general/Text';

const StaticValue = ({
  inputType,
  value,
}) => {
  switch (inputType) {
    case 'switch':
      return (
        <div className="lh0">
          <Icon
            name={value ? 'lock' : 'lock_open'}
            color={value ? 'red' : 'label'}
          />
        </div>
      );
    case 'checkbox':
      return (
        <div className="lh0">
          <Icon
            name={value ? 'done' : 'remove'}
            color={value ? 'green' : 'label'}
          />
        </div>
      );
    default:
      return (
        <Text
          text={`${value}`}
        />
      );
  }
};

StaticValue.propTypes = {
  inputType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default StaticValue;
