import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './clickable.scss';

class Clickable extends PureComponent {
  justClicked = false;

  handleClick = (e) => {
    const {
      onClick,
      href,
      doubleClickBufferTime,
      disabled,
      stopPropagation,
      disabledDoubleClick,
    } = this.props;

    if (stopPropagation) {
      e.stopPropagation();
    }

    if (!onClick || disabled) return;

    if (disabledDoubleClick) {
      if (this.justClicked) {
        return;
      }

      this.justClicked = true;
      setTimeout(() => {
        this.justClicked = false;
      }, doubleClickBufferTime);
    }

    if (!href || (!e.metaKey && !e.ctrlKey)) {
      e.preventDefault();
      onClick();
    }
  };

  render() {
    const {
      testId,
      className,
      children,
      onClick,
      Link,
      href,
      target,
      disabled,
      inline,
    } = this.props;

    const Tag = href && !disabled
      ? Link
      : 'div';

    return (
      <Tag
        data-testid={testId}
        className={classnames(
          className,
          {
            [styles.clickable]: !disabled,
            [styles.inline]: inline,
          },
        )}
        to={href}
        href={href}
        target={target}
        onClick={(onClick && this.handleClick) || null}
      >
        {children}
      </Tag>
    );
  }
}

Clickable.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
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
  doubleClickBufferTime: PropTypes.number,
  stopPropagation: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledDoubleClick: PropTypes.bool,
  inline: PropTypes.bool,
};

Clickable.defaultProps = {
  testId: undefined,
  className: '',
  href: '',
  target: '',
  onClick: null,
  Link: 'a',
  doubleClickBufferTime: 400,
  stopPropagation: false,
  disabled: false,
  disabledDoubleClick: false,
  inline: false,
};

export default Clickable;
