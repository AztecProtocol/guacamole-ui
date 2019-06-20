import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import {
  textColorNames,
  fontWeightKeys,
} from 'src/config/styleConstants';
import Clickable from '../../utils/Clickable';
import Text from '../Text';
import styles from './button.scss';

export const TextButton = ({
  className,
  theme,
  text,
  children,
  size,
  weight,
  color,
  href,
  onClick,
  Link,
  stopPropagation,
  disabled,
}) => (
  <Clickable
    className={className}
    styleName={classnames(
      'button',
      {
        [`theme-${theme}`]: theme !== 'normal',
        [`color-${color}`]: color && color !== 'inherit',
        disabled,
      },
    )}
    href={href}
    onClick={onClick}
    Link={Link}
    stopPropagation={stopPropagation}
    disabled={disabled}
  >
    <Text
      text={text}
      size={size}
      weight={weight}
    >
      {children}
    </Text>
  </Clickable>
);

TextButton.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([
    'normal',
    'implicit',
    'underline',
    'uppercase',
  ]),
  text: PropTypes.string,
  children: PropTypes.node,
  size: responsiveTextSizes,
  weight: PropTypes.oneOf(fontWeightKeys),
  color: PropTypes.oneOf(textColorNames),
  href: PropTypes.string,
  onClick: PropTypes.func,
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  stopPropagation: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextButton.defaultProps = {
  className: '',
  theme: 'normal',
  text: '',
  children: null,
  size: 'inherit',
  weight: 'medium',
  color: 'secondary',
  href: '',
  onClick: null,
  Link: 'a',
  stopPropagation: false,
  disabled: false,
};

export default CSSModules(TextButton, styles, {
  allowMultiple: true,
});
