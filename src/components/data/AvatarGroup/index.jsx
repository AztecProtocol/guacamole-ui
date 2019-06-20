import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import {
  colorNames,
  backgroundNames,
  shapeSizeKeys,
} from 'src/config/styleConstants';
import Text from '../../general/Text';
import Avatar from '../Avatar';
import styles from './avatars.scss';

export const AvatarGroup = ({
  className,
  size,
  avatars,
  background,
}) => (
  <div
    className={className}
    styleName={`group-${size} bg-${background}`}
  >
    {avatars.map(({
      tooltip,
      tooltipBackground,
      ...avatar
    }, i) => (
      <div
        key={+i}
        styleName={classnames('avatar', {
          interactive: tooltip || avatar.onClick,
        })}
      >
        <Avatar
          {...avatar}
          size={size}
          shape="circular"
        />
        {tooltip && (
          <div
            styleName={classnames(
              'tooltip',
              {
                [`tooltip-${tooltipBackground}`]: tooltipBackground,
              },
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
    iconName: PropTypes.string,
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
  background: PropTypes.oneOf(colorNames),
};

AvatarGroup.defaultProps = {
  className: '',
  size: 's',
  background: 'white',
};

export default CSSModules(AvatarGroup, styles, {
  allowMultiple: true,
});
