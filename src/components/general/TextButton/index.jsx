import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import responsiveTextSizes from 'src/shapes/responsiveTextSizes';
import {
  textColorNames,
  fontWeightKeys,
} from 'src/config/styleConstants';
import Clickable from '../../utils/Clickable';
import Text from '../Text';
import styles from './button.scss';

const TextButton = ({
  className,
  theme,
  text,
  children,
  size,
  weight,
  color,
  href,
  target,
  onClick,
  Link,
  stopPropagation,
  disabled,
}) => (
  <Clickable
    className={classnames(
      className,
      styles.button,
      {
        [styles[`theme-${theme}`]]: theme !== 'normal',
        [styles[`color-${color}`]]: color,
        [styles.disabled]: disabled,
      },
    )}
    href={href}
    target={target}
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
  color: PropTypes.oneOf(['', ...textColorNames]),
  href: PropTypes.string,
  target: PropTypes.oneOf([
    '',
    '_self',
    '_blank',
    '_parent',
    '_top',
  ]),
  onClick: PropTypes.func,
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
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
  color: '',
  href: '',
  target: '',
  onClick: null,
  Link: 'a',
  stopPropagation: false,
  disabled: false,
};

export default TextButton;
