import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../Button/button.scss';

const ButtonGroup = ({
  className, children,
}) => (
  <div
    className={classnames(className, styles.group)}
  >
    {children}
  </div>
);

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ButtonGroup.defaultProps = {
  className: '',
};

export default ButtonGroup;
