import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  shapeSizeKeys,
} from 'src/config/shapes';
import iconShape from 'src/shapes/iconShape';
import Icon from '../../general/Icon';
import Text from '../../general/Text';
import Avatar from '../Avatar';
import styles from './item.scss';

const iconSizeMap = {
  xxs: 'xxs',
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'xl',
  xxl: 'xl',
};

const avatarTextSizeMap = {
  xxs: 'xs',
  xs: 's',
  s: 'm',
  m: 'l',
  l: 'xl',
  xl: 'xxl',
  xxl: 'xxl',
};

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
    className={className}
    styleName={classnames(
      'list-item',
      `size-${size}`,
      {
        'no-description': !description,
        'valign-center': valign === 'center',
        wrap: !nowrap && valign !== 'center',
        nowrap,
        showEllipsis,
      },
    )}
  >
    {(icon || iconName) && (
      <div styleName="icon">
        <Icon
          name={iconName}
          color={iconColor}
          size={iconSizeMap[size]}
          rotate={iconRotate}
          {...icon}
        />
      </div>
    )}
    {avatar && (
      <div styleName="avatar">
        <Avatar
          {...avatar}
          size={size}
        />
      </div>
    )}
    <div styleName="content">
      {title && (
        <Text
          text={title}
          size={avatar ? avatarTextSizeMap[size] : size}
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

export default CSSModules(ListItem, styles, {
  allowMultiple: true,
});
