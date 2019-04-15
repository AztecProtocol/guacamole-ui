import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../Button/button.scss';

export const ButtonGroup = ({
  className, children,
}) => (
  <div
    className={className}
    styleName="group"
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

export default CSSModules(ButtonGroup, styles);
