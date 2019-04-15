import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import {
  textColorNames,
  colorNames,
} from 'src/config/colors';
import {
  fontWeightKeys,
} from 'src/config/typography';
import styles from './text.scss';

export const Text = ({
  className,
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
    className={className}
    styleName={classnames(
      'text',
      (size
        && size !== 'inherit'
        && generateResponsiveStyleNames('size', size))
        || '',
      {
        [`color-${color}`]: color,
        [`highlight-${highlight}`]: highlight,
        [`weight-${weight}`]: weight && weight !== 'inherit',
        [`text-align-${textAlign}`]: textAlign && textAlign !== 'inherit',
        'show-ellipsis': showEllipsis,
      }
    )}
  >
    {children || text}
  </div>
);

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  size: responsiveTextSizes,
  color: PropTypes.oneOf(['', ...textColorNames]),
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'inherit']),
  highlight: PropTypes.oneOf(['', ...colorNames]),
  showEllipsis: PropTypes.bool,
  weight: PropTypes.oneOf(fontWeightKeys),
};

Text.defaultProps = {
  className: '',
  text: '',
  children: null,
  size: 'inherit',
  textAlign: 'inherit',
  color: '',
  highlight: '',
  showEllipsis: false,
  weight: 'light',
};

export default CSSModules(Text, styles, {
  allowMultiple: true,
});
