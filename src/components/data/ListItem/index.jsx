import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  listItemIconSizeMap,
  listItemAvatarTextSizeMap,
} from 'src/config/listItem';
import {
  shapeSizeKeys,
} from 'src/config/styleConstants';
import iconShape from 'src/shapes/iconShape';
import Icon from '../../general/Icon';
import Text from '../../general/Text';
import Avatar from '../Avatar';
import styles from './item.scss';

export const ListItem = ({
  className,
  size,
  icon,
  iconName,
  iconColor,
  iconRotate,
  avatar,
  title,
  description,
  children,
  valign,
  nowrap,
  showEllipsis,
}) => (
  <div
    className={classnames(
      className,
      styles['list-item'],
      styles[`size-${size}`],
      {
        [styles['no-description']]: !description,
        [styles['valign-center']]: valign === 'center',
        [styles.wrap]: !nowrap && valign !== 'center',
        [styles.nowrap]: nowrap,
        [styles.showEllipsis]: showEllipsis,
      },
    )}
  >
    {(icon || iconName) && (
      <div className={styles.icon}>
        <Icon
          name={iconName}
          color={iconColor}
          size={listItemIconSizeMap[size]}
          rotate={iconRotate}
          {...icon}
        />
      </div>
    )}
    {avatar && (
      <div className={styles.avatar}>
        <Avatar
          {...avatar}
          size={size}
        />
      </div>
    )}
    <div className={styles.content}>
      {title && (
        <Text
          text={title}
          size={avatar ? listItemAvatarTextSizeMap[size] : size}
        />
      )}
      {description && (
        <div>
          <Text
            text={description}
            size={size === 'l' ? 'xs' : 'xxs'}
            color="primary-lighter"
          />
        </div>
      )}
      {children}
    </div>
  </div>
);

ListItem.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(shapeSizeKeys),
  icon: iconShape,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconRotate: PropTypes.oneOf([0, 90, 180, 270]),
  avatar: PropTypes.shape({
    src: PropTypes.string,
  }),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.node,
  valign: PropTypes.oneOf(['top', 'center']),
  nowrap: PropTypes.bool,
  showEllipsis: PropTypes.bool,
};

ListItem.defaultProps = {
  className: '',
  size: 's',
  icon: null,
  iconName: '',
  iconColor: 'secondary-light',
  iconRotate: 0,
  avatar: null,
  title: '',
  description: '',
  children: null,
  valign: 'top',
  nowrap: false,
  showEllipsis: false,
};

export default ListItem;
