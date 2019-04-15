import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  fontSizeKeys,
} from 'src/config/typography';
import {
  overlayThemeNames,
} from 'src/config/colors';
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
    className={className}
    styleName={classnames(
      'loader',
      `theme-${theme}`,
      `size-${size}`,
      {
        'icon-only': !hasBackground,
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

export default CSSModules(Loader, styles, {
  allowMultiple: true,
});
