import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  shapeSizeKeys,
} from 'src/config/styleConstants';
import styles from './badge.scss';

const Badge = ({
  testId,
  className,
  theme,
  size,
  count,
  countOverflow,
  showZero,
  isDot,
}) => (
  <div
    data-testid={testId}
    className={classnames(
      className,
      styles.badge,
      styles[`theme-${theme}`],
      styles[`size-${size}`],
      {
        [styles.hide]: !showZero && count === 0,
        [styles[`dot-${size}`]]: isDot,
      },
    )}
  >
    {count > countOverflow ? `${countOverflow}+` : count}
  </div>
);

Badge.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'label']),
  size: PropTypes.oneOf(shapeSizeKeys),
  count: PropTypes.number.isRequired,
  countOverflow: PropTypes.number,
  showZero: PropTypes.bool,
  isDot: PropTypes.bool,
};

Badge.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: 'xs',
  countOverflow: Infinity,
  showZero: false,
  isDot: false,
};

export default Badge;
