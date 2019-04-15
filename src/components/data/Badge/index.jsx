import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  shapeSizeKeys,
} from 'src/config/shapes';
import styles from './badge.scss';

export const Badge = ({
  className,
  theme,
  size,
  count,
  countOverflow,
  showZero,
  isDot,
}) => (
  <div
    className={className}
    styleName={classnames(
      'badge',
      `theme-${theme}`,
      `size-${size}`,
      {
        hide: !showZero && count === 0,
        [`dot-${size}`]: isDot,
      },
    )}
  >
    {count > countOverflow ? `${countOverflow}+` : count}
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'label']),
  size: PropTypes.oneOf(shapeSizeKeys),
  count: PropTypes.number.isRequired,
  countOverflow: PropTypes.number,
  showZero: PropTypes.bool,
  isDot: PropTypes.bool,
};

Badge.defaultProps = {
  className: '',
  theme: 'default',
  size: 'xs',
  countOverflow: Infinity,
  showZero: false,
  isDot: false,
};

export default CSSModules(Badge, styles, {
  allowMultiple: true,
});
