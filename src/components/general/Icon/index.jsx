import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import {
  textColorNames,
} from 'src/config/colors';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
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
    className={classnames('material-icons cm-icon', className)}
    styleName={classnames(
      (size && size !== 'inherit' && generateResponsiveStyleNames('size', size)) || '',
      {
        [`color-${color}`]: color,
        [`rotate-${rotate}`]: rotate,
        'flip-horizontal': flipHorizontal,
        'flip-vertical': flipVertical,
        spin,
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
  rotate: PropTypes.oneOf([0, 90, 180, 270]),
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

export default CSSModules(Icon, styles, {
  allowMultiple: true,
});
