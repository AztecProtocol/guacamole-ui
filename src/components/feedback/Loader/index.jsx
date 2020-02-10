import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  fontSizeKeys,
  overlayThemeNames,
} from 'src/config/styleConstants';
import Overlay from '../../layout/Overlay';
import styles from './loader.scss';

export const Loader = ({
  className,
  theme,
  size,
  hasBackground,
  hide,
}) => (
  <Overlay
    className={classnames(
      className,
      styles.loader,
      styles[`theme-${theme}`],
      styles[`size-${size}`],
      {
        [styles['icon-only']]: !hasBackground,
      },
    )}
    theme={hasBackground ? theme : ''}
    hide={hide}
  />
);

Loader.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(overlayThemeNames),
  size: PropTypes.oneOf(fontSizeKeys),
  hasBackground: PropTypes.bool,
  hide: PropTypes.bool,
};

Loader.defaultProps = {
  className: '',
  theme: 'primary',
  size: 'l',
  hasBackground: false,
  hide: false,
};

export default Loader;
