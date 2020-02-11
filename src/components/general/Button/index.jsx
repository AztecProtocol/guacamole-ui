import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  defaultInputSizeKey,
  buttonSizeKeys,
} from 'src/config/styleConstants';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import styles from './button.scss';

const Button = ({
  testId,
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
      data-testid={testId}
      className={classnames(
        className,
        styles.button,
        generateResponsiveStyleNames('size', size).map((n) => styles[n]),
        generateResponsiveStyleNames('expand', expand).map((n) => styles[n]),
        {
          [styles[`theme-${theme}`]]: theme,
          [styles['disabled-hover']]: isLoading || disabled,
          [styles.outlined]: outlined,
          [styles.rounded]: rounded,
          [styles.isLoading]: isLoading,
          [styles.disabled]: disabled,
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
        <div className={styles['icon-left']}>
          {icon}
        </div>
      )}
      {children || text}
      {alignIcon === 'right' && icon && (
        <div className={styles['icon-right']}>
          {icon}
        </div>
      )}
    </ButtonTag>
  );
};

Button.propTypes = {
  testId: PropTypes.string,
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
    PropTypes.object,
  ]),
  stopPropagation: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
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

export default Button;
