import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  backgroundNames,
  textColorNames,
  fontWeightKeys,
} from 'src/config/styleConstants';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import Text from '../../general/Text';
import styles from './bar.scss';

const ProgressBar = ({
  testId,
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
    data-testid={testId}
    className={classnames(
      className,
      styles.wrapper,
      styles[`size-${size}`],
      {
        [styles.rounded]: rounded,
      },
    )}
  >
    <div
      className={classnames(
        styles['bar-base'],
        {
          [styles[`base-${baseColor}`]]: baseColor,
        },
      )}
    >
      <div
        className={classnames(
          styles['bar-progress'],
          {
            [styles[`active-${activeColor}`]]: activeColor,
          },
        )}
        style={{
          transform: `scaleX(${base ? (value / base) : 0})`,
          WebkitTransform: `scaleX(${base ? (value / base) : 0})`,
        }}
      />
    </div>
    {showLabel && (
      <Text
        className={styles.label}
        color={labelColor}
        size={labelSize}
        weight={labelWeight}
        text={formatLabel(value, base)}
      />
    )}
  </div>
);

ProgressBar.propTypes = {
  testId: PropTypes.string,
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
  testId: undefined,
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

export default ProgressBar;
