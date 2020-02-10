import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import {
  textColorNames,
  colorNames,
  fontWeightKeys,
} from 'src/config/styleConstants';
import styles from './text.scss';

export const Text = ({
  className,
  title,
  text,
  children,
  size,
  color,
  highlight,
  weight,
  textAlign,
  showEllipsis,
}) => (
  <div
    className={classnames(
      className,
      styles.text,
      (size
        && size !== 'inherit'
        && generateResponsiveStyleNames('size', size).map((name) => styles[name]))
        || '',
      {
        [styles[`color-${color}`]]: color,
        [styles[`highlight-${highlight}`]]: highlight,
        [styles[`weight-${weight}`]]: weight && weight !== 'inherit',
        [styles[`text-align-${textAlign}`]]: textAlign && textAlign !== 'inherit',
        [styles['show-ellipsis']]: showEllipsis,
      },
    )}
    title={title}
  >
    {children || text}
  </div>
);

Text.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  size: responsiveTextSizes,
  color: PropTypes.oneOf(['', ...textColorNames]),
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'inherit']),
  highlight: PropTypes.oneOf(['', ...colorNames]),
  showEllipsis: PropTypes.bool,
  weight: PropTypes.oneOf(['', ...fontWeightKeys]),
};

Text.defaultProps = {
  className: '',
  title: '',
  text: '',
  children: null,
  size: 'inherit',
  textAlign: 'inherit',
  color: '',
  highlight: '',
  showEllipsis: false,
  weight: '',
};

export default Text;
