import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  overlayThemeNames,
} from 'src/config/styleConstants';
import styles from './overlay.scss';

const Overlay = ({
  testId,
  className,
  theme,
  children,
  hide,
  onClick,
  onKeyDown,
}) => (
  <div
    data-testid={testId}
    className={classnames(
      className,
      styles.overlay,
      {
        [styles[`theme-${theme}`]]: theme,
        [styles.hide]: hide,
      },
    )}
    role="menu"
    tabIndex="-1"
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {children}
  </div>
);

Overlay.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['', ...overlayThemeNames]),
  children: PropTypes.node,
  hide: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

Overlay.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  children: null,
  hide: false,
  onClick() {},
  onKeyDown: null,
};

export default Overlay;
