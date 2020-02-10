import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  textColorNames,
  iconRotateDegrees,
} from 'src/config/styleConstants';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import styles from './icon.scss';

export const Icon = ({
  className,
  name,
  size,
  color,
  rotate,
  spin,
  flipHorizontal,
  flipVertical,
}) => (
  <i
    className={classnames(
      className,
      'material-icons',
      'cm-icon',
      (size && size !== 'inherit' && generateResponsiveStyleNames('size', size).map((n) => styles[n])) || '',
      {
        [styles[`color-${color}`]]: color,
        [styles[`rotate-${rotate}`]]: rotate,
        [styles['flip-horizontal']]: flipHorizontal,
        [styles['flip-vertical']]: flipVertical,
        [styles.spin]: spin,
      },
    )}
  >
    {name}
  </i>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: responsiveTextSizes,
  color: PropTypes.oneOf(['', ...textColorNames]),
  rotate: PropTypes.oneOf(iconRotateDegrees),
  flipHorizontal: PropTypes.bool,
  flipVertical: PropTypes.bool,
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  className: '',
  size: 'inherit',
  color: '',
  rotate: 0,
  flipHorizontal: false,
  flipVertical: false,
  spin: false,
};

export default Icon;
