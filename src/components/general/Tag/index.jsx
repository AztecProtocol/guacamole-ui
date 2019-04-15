import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  fontSizeKeys,
  defaultTextSizeKey,
} from '../../../config/typography';
import Block from '../../layout/Block';
import Text from '../Text';
import Icon from '../Icon';
import styles from './tag.scss';

export const Tag = ({
  className,
  size,
  children,
  text,
  iconName,
  alignIcon,
  color,
  outlined,
  rounded,
  onClick,
}) => (
  <Block
    className={className}
    styleName={classnames(
      'tag',
      `size-${size}`,
      {
        'align-reverse': alignIcon === 'left',
        rounded,
      },
    )}
    background={outlined ? 'white-light' : color}
    hasBorder={outlined}
    borderColor={color}
    onClick={onClick}
    inline
  >
    <Text
      styleName="text"
      text={text}
      color={outlined ? color : ''}
    />
    {!!iconName && (
      <Icon
        styleName="icon"
        name={iconName}
        color={outlined ? color : ''}
      />
    )}
    {children}
  </Block>
);

Tag.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(fontSizeKeys),
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  alignIcon: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.string,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  className: '',
  size: defaultTextSizeKey,
  children: null,
  iconName: '',
  alignIcon: 'right',
  color: 'primary',
  outlined: false,
  rounded: false,
  onClick: null,
};

export default CSSModules(Tag, styles, {
  allowMultiple: true,
});
