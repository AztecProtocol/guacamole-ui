import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import {
  backgroundNames,
  textColorNames,
} from 'src/config/colors';
import {
  fontWeightKeys,
} from 'src/config/typography';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import Text from '../../general/Text';
import styles from './bar.scss';

export const ProgressBar = ({
  className,
  size,
  value,
  base,
  baseColor,
  activeColor,
  rounded,
  labelColor,
  labelSize,
  labelWeight,
  showLabel,
  formatLabel,
}) => (
  <div
    className={className}
    styleName={classnames(
      'wrapper',
      `size-${size}`,
      {
        rounded,
      },
    )}
  >
    <div
      styleName={classnames('bar-base', {
        [`base-${baseColor}`]: baseColor,
      })}
    >
      <div
        styleName={classnames('bar-progress', {
          [`active-${activeColor}`]: activeColor,
        })}
        style={{
          width: `${base ? Math.round((value / base) * 100) : 0}%`,
        }}
      />
    </div>
    {showLabel && (
      <Text
        styleName="label"
        color={labelColor}
        size={labelSize}
        weight={labelWeight}
        text={formatLabel(value, base)}
      />
    )}
  </div>
);

ProgressBar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l']),
  value: PropTypes.number.isRequired,
  base: PropTypes.number,
  baseColor: PropTypes.oneOf(['', ...backgroundNames]),
  activeColor: PropTypes.oneOf(['', ...backgroundNames]),
  labelColor: PropTypes.oneOf(['', ...textColorNames]),
  labelSize: responsiveTextSizes,
  labelWeight: PropTypes.oneOf(fontWeightKeys),
  rounded: PropTypes.bool,
  showLabel: PropTypes.bool,
  formatLabel: PropTypes.func,
};

ProgressBar.defaultProps = {
  className: '',
  size: 'xs',
  base: 100,
  baseColor: 'primary-lightest',
  activeColor: 'secondary',
  labelColor: '',
  labelSize: 'inherit',
  labelWeight: 'inherit',
  rounded: false,
  showLabel: false,
  formatLabel: (value, base) => `${base ? Math.round((value / base) * 100) : 0}%`,
};

export default CSSModules(ProgressBar, styles, {
  allowMultiple: true,
});
