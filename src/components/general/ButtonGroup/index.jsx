import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../Button/button.scss';

const ButtonGroup = ({
  testId,
  className,
  children,
}) => (
  <div
    data-testid={testId}
    className={classnames(className, styles.group)}
  >
    {children}
  </div>
);

ButtonGroup.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ButtonGroup.defaultProps = {
  testId: undefined,
  className: '',
};

export default ButtonGroup;
