import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import {
  colorNames,
  backgroundNames,
  shapeSizeKeys,
  shadowLayerKeys,
} from 'src/config/styleConstants';
import Text from '../../general/Text';
import Avatar from '../Avatar';
import styles from './avatars.scss';

export const AvatarGroup = ({
  className,
  size,
  avatars,
  canvasBackground,
  background,
  iconBackground,
  tooltipBackground,
  layer,
}) => (
  <div
    className={className}
    styleName={`group-${size} bg-${canvasBackground}`}
  >
    {avatars.map(({
      className: avatarClassName,
      tooltip,
      background: avatarBg,
      iconBackground: avatarIconBg,
      tooltipBackground: avatarTooltipBg,
      ...avatar
    }, i) => (
      <div
        key={+i}
        className={avatarClassName}
        styleName={classnames('avatar', {
          interactive: tooltip || avatar.onClick,
        })}
      >
        <Avatar
          {...avatar}
          background={avatarBg || background}
          iconBackground={avatarIconBg || iconBackground}
          size={size}
          layer={layer}
          shape="circular"
        />
        {tooltip && (
          <div
            styleName={classnames(
              'tooltip',
              `tooltip-${avatarTooltipBg || tooltipBackground}`,
            )}
          >
            {typeof tooltip !== 'string' ? tooltip : (
              <Text
                text={tooltip}
                size="xxs"
              />
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);

AvatarGroup.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(shapeSizeKeys),
  avatars: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    iconName: PropTypes.string,
    iconBackground: PropTypes.oneOf(backgroundNames),
    src: PropTypes.string,
    alt: PropTypes.string,
    color: PropTypes.oneOf(colorNames),
    background: PropTypes.oneOf(backgroundNames),
    inactive: PropTypes.bool,
    tooltip: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    tooltipBackground: PropTypes.oneOf(backgroundNames),
    onClick: PropTypes.func,
  })).isRequired,
  canvasBackground: PropTypes.oneOf(colorNames),
  background: PropTypes.oneOf(backgroundNames),
  iconBackground: PropTypes.oneOf(['', ...backgroundNames]),
  tooltipBackground: PropTypes.oneOf(backgroundNames),
  layer: PropTypes.oneOf(shadowLayerKeys),
};

AvatarGroup.defaultProps = {
  className: '',
  size: 's',
  canvasBackground: 'white',
  background: 'primary-lightest',
  iconBackground: '',
  tooltipBackground: 'grey-dark',
  layer: 0,
};

export default CSSModules(AvatarGroup, styles, {
  allowMultiple: true,
});
