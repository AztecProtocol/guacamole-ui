import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  defaultInputSizeKey,
} from 'src/config/inputs';
import {
  buttonSizeKeys,
} from 'src/config/buttons';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/helpers/generateResponsiveShape';
import styles from './button.scss';

export const Button = ({
  className,
  theme,
  size,
  expand,
  text,
  icon,
  alignIcon,
  children,
  outlined,
  rounded,
  isLoading,
  disabled,
  href,
  Link,
  stopPropagation,
  onClick,
  onSubmit,
}) => {
  const ButtonTag = href && !disabled
    ? Link
    : 'button';

  return (
    <ButtonTag
      className={className}
      styleName={classnames(
        'button',
        generateResponsiveStyleNames('size', size),
        generateResponsiveStyleNames('expand', expand),
        {
          [`theme-${theme}`]: theme,
          'disabled-hover': isLoading || disabled,
          outlined,
          rounded,
          isLoading,
          disabled,
        },
      )}
      to={href}
      href={href}
      onClick={(e) => {
        if (stopPropagation) {
          e.stopPropagation();
        }

        const openLinkInNewTab = href && (e.metaKey || e.ctrlKey);
        if (openLinkInNewTab) return;

        if (onClick || onSubmit) {
          e.preventDefault();
          if (onClick) {
            onClick();
          }

          if (onSubmit && !disabled && !isLoading) {
            onSubmit();
          }
        }
      }}
    >
      {alignIcon === 'left' && icon && (
        <div styleName="icon-left">
          {icon}
        </div>
      )}
      {children || text}
      {alignIcon === 'right' && icon && (
        <div styleName="icon-right">
          {icon}
        </div>
      )}
    </ButtonTag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'white']),
  size: generateResponsiveShape(buttonSizeKeys),
  text: PropTypes.string,
  icon: PropTypes.element,
  alignIcon: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  outlined: PropTypes.bool,
  expand: generateResponsiveShape([true, false]),
  rounded: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  stopPropagation: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  theme: 'secondary',
  size: defaultInputSizeKey,
  expand: false,
  text: '',
  icon: null,
  alignIcon: 'right',
  children: null,
  outlined: false,
  rounded: false,
  isLoading: false,
  disabled: false,
  href: '',
  Link: 'a',
  stopPropagation: false,
  onClick: null,
  onSubmit: null,
};

export default CSSModules(Button, styles, {
  allowMultiple: true,
});
