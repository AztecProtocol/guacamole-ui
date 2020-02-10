import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  fontSizeKeys,
  defaultFontSizeKey,
} from '../../../config/styleConstants';
import Block from '../../layout/Block';
import Text from '../Text';
import Icon from '../Icon';
import styles from './tag.scss';

const Tag = ({
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
    className={classnames(
      className,
      styles.tag,
      styles[`size-${size}`],
      {
        [styles['align-reverse']]: alignIcon === 'left',
        [styles.rounded]: rounded,
      },
    )}
    background={outlined ? 'white-light' : color}
    hasBorder={outlined}
    borderColor={color}
    onClick={onClick}
    inline
  >
    <Text
      className={styles.text}
      text={text}
      color={outlined ? color : ''}
    />
    {!!iconName && (
      <Icon
        className={styles.icon}
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
  size: defaultFontSizeKey,
  children: null,
  iconName: '',
  alignIcon: 'right',
  color: 'primary',
  outlined: false,
  rounded: false,
  onClick: null,
};

export default Tag;
